import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

declare global {
  interface Window {
    Email: any;
  }
}

const ComposeMail = () => {
  const emails: string[] = JSON.parse(localStorage.getItem("validEmails")!);
  const navigation = useNavigate();
  interface emailState {
    email: string;
    subject: string;
    body: string;
  }

  const [formState, setFormState] = useState<emailState>({
    email: "",
    subject: "",
    body: "",
  });


  const sendEmails = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(emails);
    let isSent: boolean = true;
    let msg : String = "OK";
    for(let i=0; i<emails.length; i++){
      console.log(emails[i]);
      const config = {
        SecureToken: "7637f7a6-a22d-453e-8962-9a7b82612a81",
        From: "adv.of.iron.silver@gmail.com",
        To: emails[i],
        Subject: formState.subject,
        Body: formState.body,
      };
      if (window.Email) {
        window.Email.send(config)
          .then((result: any) => {
            //  alert(result);
             if(result!== "OK"){
              msg = result;
              isSent = false;
             } 
            })
          .catch((err: any) => {
            alert(`error: ${err}`);
          });
      }
    }
    if(isSent){
      alert(msg);
      navigation("/");
    }
    else{
      alert(msg);
    }
  };

  const changeHandler = (event: any) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
    console.log(formState);
  };

  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2 overflow-y-scroll bg-color-cust">
          <div id="content1" className="p-4">
            <h1 className="text-2xl font-bold flex justify-center pb-5 text-primary-color-cust">
              Valid Emails
            </h1>
            <ul>
              {Array.from(emails).map((file: string, i) => (
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
        <div className="flex flex-1 items-center justify-center h-full bg-red-200">
          <form onSubmit={sendEmails}>
            <div className=" w-30rem">
              <div className="mb-3">
                <label className=" text-gray-800 font-medium">Subject:</label>
                <input
                  className="appearance-none border w-full py-2.5 px-3 text-gray-700 focus:outline-hvr-col"
                  id="text"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formState.subject || ""}
                  onChange={changeHandler}
                  required
                />
              </div>
              <label className=" text-gray-800 font-medium">Description:</label>
              <textarea
                className="m-0 w-full py-2.5 px-3 mb-3 text-gray-700 focus:outline-hvr-col"
                placeholder="Description"
                required
                onChange={changeHandler}
                name="body"
                value={formState.body || ""}
                typeof="text"
              />
              <input
                className="text-white bg-primary-color-cust hover:bg-primary-color-hover-cust cursor-pointer w-full font-bold py-2.5 px-4 focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send email"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ComposeMail;
