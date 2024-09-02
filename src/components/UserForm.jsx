import React from "react";
import { counties } from "../constants";

const UserForm = () => {
  return (
    <div>
      <div class="bg-transparent rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div class="text-gray-600">
            <p class="font-medium text-lg">Personal Details</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder="entegr fullname"
                />
              </div>

              <div class="md:col-span-5">
                <label for="email">Email Address</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder="email@domain.com"
                />
              </div>

              <div class="md:col-span-3">
                <label for="address">Address / Street</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder="enter home address"
                />
              </div>

              <div class="md:col-span-2">
                <label for="city">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder=""
                />
              </div>

              <div class="md:col-span-2">
                <label for="country">County / region</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <select
                    name=""
                    id=""
                    className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <option value="">Select County</option>
                    {counties.map((county) => (
                      <option key={county.id} value={county.id}>
                        {county.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div class="md:col-span-2">
                <label for="state">City / Town</label>
                <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input
                    name="state"
                    id="state"
                    placeholder="State"
                    class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                    value=""
                  />
                  <button
                    tabindex="-1"
                    class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                  >
                    <svg
                      class="w-4 h-4 mx-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button
                    tabindex="-1"
                    for="show_more"
                    class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                  >
                    <svg
                      class="w-4 h-4 mx-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="md:col-span-1">
                <label for="zipcode">Gender</label>
                <select
                  name=""
                  id=""
                  className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <option value="">Select Gender</option>
                  <option value="Female">Famale</option>
                  <option value="Male">Male</option>
                  <option value="Other">other</option>
                </select>
              </div>


              

              <div class="md:col-span-3">
                <label for="address">What do you want to achieve?</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder=""
                />
              </div>

              <div class="md:col-span-2">
                <label for="city">LinkedIn url</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder=""
                />
              </div>
              <div class="md:col-span-3">
                <label for="address">What course have you done?</label>
                <select
                  name=""
                  id=""
                  className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <option value="">Select Course</option>
                  <option value="Female">BBIT</option>
                  <option value="Male">BSCIT</option>
                  <option value="Other">Hospitality</option>
                </select>
              </div>
              <div class="md:col-span-3">
                <label for="address">How did you hear about us?</label>
                <select
                  name=""
                  id=""
                  className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <option value="">Select</option>
                  <option value="Female">Google Search</option>
                  <option value="Male">Friend</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div class="md:col-span-2">
                <label for="city">What AI areas are you interested in?</label>
                <select
                  name=""
                  id=""
                  className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <option value="">Select interested area</option>
                  <option value="Female">Machine Learning</option>
                  <option value="Male">Data Science</option>
                  <option value="Other">Tensorflow</option>
                </select>
              </div>

              

              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
