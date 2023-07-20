import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "./data_context";
import { Link } from "react-router-dom";

const SelectedEmails = () => {
  const { validEmails, inValidEmails, updateEmails } = useContext(DataContext);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const validEmails = localStorage.getItem("validEmails");
    const inValidEmails = localStorage.getItem("invalidEmails");
    console.log(validEmails);
    updateEmails(JSON.parse(validEmails!), JSON.parse(inValidEmails!));
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 920);  
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (isMobile) {
    return (
      <>
          <div className="overflow-y-scroll bg-color-cust">
            <div id="content1" className="p-4">
              <h1 className="text-2xl font-bold flex justify-center pb-5 text-primary-color-cust">
                Valid Emails
              </h1>
              <ul>
                {Array.from(validEmails).map((file: string, i) => (
                  <li
                    className="text-center text-primary-color-hover-cust"
                    key={i}
                  >
                    {file}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-red-50 overflow-y-scroll">
            <div id="content2" className="p-4">
              <h1 className="text-2xl font-bold flex justify-center pb-5 text-red-500">
                Invalid Emails
              </h1>
              <ul>
                {Array.from(inValidEmails).map((file: string, i) => (
                  <li className="text-center text-red-400" key={i}>
                    {file}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        <div className="fixed bottom-10 right-10">
          <Link
            className=" bg-primary-color-hover-cust rounded text-white pl-5 pr-5 pt-3 pb-3"
            to={"/compose-mail"}
          >
            Compose Mail
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2 overflow-y-scroll bg-color-cust">
          <div id="content1" className="p-4">
            <h1 className="text-2xl font-bold flex justify-center pb-5 text-primary-color-cust">
              Valid Emails
            </h1>
            <ul>
              {Array.from(validEmails).map((file: string, i) => (
                <li
                  className="text-center text-primary-color-hover-cust"
                  key={i}
                >
                  {file}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-1/2 bg-red-50 overflow-y-scroll">
          <div id="content2" className="p-4">
            <h1 className="text-2xl font-bold flex justify-center pb-5 text-red-500">
              Invalid Emails
            </h1>
            <ul>
              {Array.from(inValidEmails).map((file: string, i) => (
                <li className="text-center text-red-400" key={i}>
                  {file}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="fixed bottom-10 right-10">
        <Link
          className=" bg-primary-color-hover-cust rounded text-white pl-5 pr-5 pt-3 pb-3"
          to={"/compose-mail"}
        >
          Compose Mail
        </Link>
      </div>
    </>
  );
};
export default SelectedEmails;
