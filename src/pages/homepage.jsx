import { Link } from "react-router-dom";
import "../index.css";
import HomePageLottie from "./sign_up_lottie.jsx";
import "tailwindcss/tailwind.css";
import DragDrop from "./drag_drop";

const HomePage = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-primary-color-cust to-color-cust">
        <div className="w-1/2 text-9xl text-white relative -left-36 -top-20">
          <h1>MASS MAIL DISPATCHER</h1>
        </div>
        <div className="w-30rem relative -top-10">
          <form className="rounded px-8 pt-4 pb-8">
            <div className="mb-6">
              <HomePageLottie />
              <div className="flex justify-center">
                <Link
                  className="text-2xl bg-primary-color-cust font-normal text-white pl-5 pr-5 pt-3 pb-3 rounded mt-10 hover:bg-primary-color-hover-cust"
                  to="/upload"
                >
                  Get started
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HomePage;
