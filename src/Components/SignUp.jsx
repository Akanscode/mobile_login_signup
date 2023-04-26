import React from "react";
import Link from "next/link";

import { AiOutlineApple, AiOutlineEyeInvisible } from "react-icons/ai";
const SignUp = () => {
  return (
    <div className=" mx-auto mb-5 max-w-sm flex-col rounded-3xl border-4 border-t-8 border-gray-900 bg-white px-2 py-2 text-black shadow-2xl">
      <div className="bg-white  shadow rounded-md  w-full p-2 mt-6">
        <p
          tabindex="0"
          className="text-2xl font-extrabold leading-6 text-gray-800"
        >
          Create Acount
        </p>
        <p className=" text-sm mt-4 font-medium leading-none text-gray-500">
          Enter your Name, Email and Password to <br /> sign Up.
        </p>
        <div>
          <form className="flex flex-col items-center justify-center">
            <div className="mt-2 w-full">
              <input
                placeholder="Full Name"
                className="bg-gray-200 border rounded text-xs  font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div className="mt-2 w-full">
              <input
                placeholder="Email"
                className="bg-gray-200 border rounded text-xs  font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div className="mt-2 w-full">
              <div className="relative flex items-center justify-center">
                <input
                  placeholder="Password"
                  className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
                <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                  <AiOutlineEyeInvisible className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="mt-4 w-full">
              <Link href="/verification">
                <button
                  role="button"
                  className=" text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded-md hover:bg-indigo-600 py-4 w-full"
                >
                  SIGN UP
                </button>
              </Link>

              <div className="flex items-center justify-center my-2">
                <p className="font-normal text-sm text-gray-400 max-w-md">
                  By Signing Up you agree to our{" "}
                  <span>
                    <Link
                      href="/"
                      className="text-center font-bold text-sm text-gray-400"
                    >
                      Terms Conditions & Privacy Policy.
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </form>

          <p className="text-base text-center font-medium leading-4 px-2.5 text-gray-400">
            Or
          </p>

          <button className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3 px-4 border rounded-lg border-gray-700 flex items-center justify-center w-full mt-5">
            <svg
              className="w-10 h-10"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                fill="#4285F4"
              />
              <path
                d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                fill="#34A853"
              />
              <path
                d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                fill="#FBBC05"
              />
              <path
                d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                fill="#EB4335"
              />
            </svg>
            <p className="text-base font-medium ml-4 text-gray-700">
              SIGN UP WITH GOOGLE
            </p>
          </button>
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3 px-4 border rounded-lg border-gray-700 flex items-center justify-center w-full mt-2">
            <AiOutlineApple className=" w-10 h-10 text-black" />
            <p className="text-base font-medium ml-4 text-gray-700">
              SIGN UP WITH APPLE
            </p>
          </button>
          <div className="flex items-center justify-center mt-2">
            <Link
              href="/login"
              className="text-blue-600 font-bold text-xs text-center"
            >
              Already have Account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
