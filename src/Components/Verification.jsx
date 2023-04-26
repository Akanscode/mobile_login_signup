import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Verification = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className=" mx-auto mb-5 max-w-sm flex-col rounded-3xl border-4 border-t-8 border-gray-900 bg-white px-2 py-2 text-black shadow-2xl">
      <div className="bg-white  shadow rounded-md  w-full p-2 mt-6">
        <p
          tabindex="0"
          className="text-2xl font-extrabold leading-6 text-gray-800"
        >
          Verify Acount
        </p>

        <p className="text-sm mt-4 font-medium leading-none text-gray-500">
          Kindly Enter the 5-digit code that was sent to
          a****************@gmail.com{" "}
        </p>

        <div className="mx-auto flex w-full max-w-md flex-col space-y-16 mt-5">
          <div>
            <form action="" method="post">
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-md">
                  <div className="w-16 h-16 ">
                    <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-r-0 border-l-0 border-t-0 border-gray-200 text-lg bg-white " />
                  </div>
                  <div className="w-16 h-16 ">
                    <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-r-0 border-l-0 border-t-0 border-gray-200 text-lg bg-white " />
                  </div>
                  <div className="w-16 h-16 ">
                    <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-r-0 border-l-0 border-t-0 border-gray-200 text-lg bg-white " />
                  </div>
                  <div className="w-16 h-16 ">
                    <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-r-0 border-l-0 border-t-0 border-gray-200 text-lg bg-white " />
                  </div>
                  <div className="w-16 h-16 ">
                    <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-r-0 border-l-0 border-t-0 border-gray-200 text-lg bg-white" />
                  </div>
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <button
                      onClick={() => setShowModal(true)}
                      className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                    >
                      Verify Account
                    </button>
                    {showModal ? (
                      <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                          <div className="relative w-auto my-2 mx-auto max-w-xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-80 bg-white outline-none focus:outline-none">
                              {/*body*/}
                              <div className="relative p-6 flex-auto">
                                <div className="flex items-center justify-center">
                                  <div className="flex items-center bg-green-500 rounded-full p-4 outline outline-gray-200 ">
                                    <AiOutlineCheck className=" text-white  w-5 h-5 " />
                                  </div>
                                </div>
                                <p className="my-4 text-slate-500 text-lg leading-relaxed max-w-md ">
                                  yay! Your Account has been created. Continue
                                  to N-Pay!
                                </p>
                              </div>
                              {/*footer*/}
                              <div className="flex items-center justify-center ">
                                <button
                                  className="text-green-400 background-transparent border border-green-400 font-bold  px-4 py-2 text-sm outline-none focus:outline-none mr-1 mb-4 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowModal(false)}
                                >
                                  OK
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't recieve code?</p>{" "}
                    <Link
                      className="flex flex-row items-center text-blue-600"
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resend
                    </Link>
                  </div>
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
