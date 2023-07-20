import React, { useState, useRef, useContext } from "react";
import "../index.css";
import { DataContext } from "./data_context";
import { useNavigate } from "react-router-dom";

const DragDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | any>(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const { updateEmails } = useContext(DataContext);
  const inputRef: any = useRef();

  const history = useNavigate();
  const handleFileUpload = (allEmails: string[], fileInfo: any) => {
    // Extract emails from the data

    // Validate emails
    const validEmailList: string[] = [];
    const invalidEmailList: string[] = [];

    allEmails.forEach((email: string) => {
      if (
        email != "" &&
        (email.charAt(email.length - 4) == "." ||
          email.charAt(email.length - 3) == ".")
      ) {
        validEmailList.push(email);
      } else {
        invalidEmailList.push(email);
      }
    });
    updateEmails(validEmailList, invalidEmailList);
    localStorage.setItem("validEmails", JSON.stringify(validEmailList));
    localStorage.setItem("invalidEmails", JSON.stringify(invalidEmailList));
    history("/selected-emails");
  };

  const handleDragEnter = (event: any) => {
    event.preventDefault();
    setIsDragging(true);
    setIsFileUploaded(true);
  };

  const handleDragLeave = (event: any) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const trimmed: string = event.dataTransfer.files[0].name.slice(-3);
    if (trimmed !== "csv") {
      setIsDragging(false);
      return;
    }
    setFile(event.dataTransfer.files[0]);
  };

  const onFileUpload = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const content = event.target?.result as string;
        const newMails = content
          .split(/\r?\n|\n/)
          .map((email) => email.split(",")[0]);
        handleFileUpload(newMails, file);
      };
      reader.readAsText(file);
    }
  };

  return (
    <>
      {file != null ? (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
          <div className=" text-2xl pb-3 text-primary-color-cust font-semibold">{file.name}</div>
          <div>
            <button
              type="button"
              onClick={() => {
                setFile(null);
                setIsDragging(false);
                setIsFileUploaded(false);
              }}
              className="bg-primary-color-cust w-full mb-3 text-white pt-1 pb-1 pl-2 pr-2 text-lg"
            >
              Clear
            </button>
            <button
              type="button"
              className="bg-primary-color-cust w-full mb-3 text-white pt-1 pb-1 pl-2 pr-2 text-lg"
              onClick={onFileUpload}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            className={`flex justify-center items-center w-30rem h-56 border-${
              isDragging ? "solid bg-hvr-col" : "dashed bg-white"
            } border-2 border-primary-color-cust`}
            id="targetDiv"
          >
            <input
              type="file"
              hidden
              ref={inputRef}
              accept="text/csv"
              onChange={(event) => {
                event.preventDefault();
                setFile(event.target.files?.[0]);
              }}
            />
            {isDragging ? (
              <div className="text-white text-lg">Drop Here!</div>
            ) : (
              <button
                type="button"
                className=" bg-primary-color-cust pt-3 pb-3 pl-6 pr-6 text-white h-18 hover:bg-primary-color-hover-cust"
                onClick={() => inputRef.current.click()}
              >
                Drop or Browse
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default DragDrop;
