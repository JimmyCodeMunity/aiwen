import React, { useEffect, useState } from "react";
import { counties } from "../constants";
import * as Icon from "react-feather";
import { logo } from "../images";
import StudentForm from "./StudentForm";
import UserForm from "./UserForm";

const JoinForm = () => {
  
  return (
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-between">
      <div class="container max-w-screen-lg mx-auto flex md:flex-row flex-col md:justify-between justify-center items-center">
        <div>
          <div className="md:text-start text-center">
            <h2 class="font-semibold text-xl text-gray-600">Join As User/Organization</h2>
            <p class="text-gray-500 mb-6">
              Understanding Artificial Intelligence today..
            </p>
            <button
              className="bg-pink-500 md:p-3 p-1 md:w-60 w-full rounded-md text-white font-semibold"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Partner With Us
            </button>

            {/* modal here */}
            <dialog id="my_modal_1" className="modal rounded-xl p-4">
              <div className="modal-box">
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}

                    <button className="font-bold text-lg">
                      <Icon.X size={30} color="black" />
                    </button>
                  </form>
                </div>

                <p className="py-4">
                  Press ESC key or click the button above to close
                </p>
                <div className="modal-action">
                  <UserForm/>
                </div>
              </div>
            </dialog>
          </div>
          <div className="md:text-start text-center">
            <h2 class="font-semibold text-xl text-gray-600">Join As Student</h2>
            <p class="text-gray-500 mb-6">
              Understanding Artificial Intelligence today..
            </p>
            <button
              className="bg-white border border-pink-500 text-pink-500 md:p-3 p-1 md:w-60 w-full rounded-md font-semibold"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Become a member
            </button>

            {/* modal here */}
            <dialog id="my_modal_2" className="modal rounded-xl p-4">
              <div className="modal-box">
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}

                    <button className="font-bold text-lg">
                      <Icon.X size={30} color="black" />
                    </button>
                  </form>
                </div>

                <p className="py-4">
                  Press ESC key or click the button below to close
                </p>
                <div className="modal-action">
                  <StudentForm/>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        <div>
          <div class="w-full lg:justify-start justify-center items-start flex">
            <div class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <img
                class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl"
                src={logo}
                alt="about Us image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinForm;
