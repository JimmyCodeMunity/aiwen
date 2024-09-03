import React, { useState } from "react";
import { counties } from "../constants";
import axios from "axios";
import { toast } from "react-toastify";

const UserForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [county, setCounty] = useState("");
  const [goal, setGoal] = useState("");
  const [hear, setHear] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [linkedinurl, setLinkedinUrl] = useState("");
  const [aoi, setAoi] = useState(""); // aoi might stand for "Area of Interest"
  const [experienceLevel, setExperienceLevel] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [fieldOfWork, setFieldOfWork] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const createUser = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form submission starts
    try {
      const response = await axios.post(
        "https://aiwbackend.vercel.app/api/v1/user/createuser",
        {
          fullname,
          email,
          address,
          county,
          goal,
          hear,
          phone,
          gender,
          city,
          linkedinurl,
          aoi,
          experienceLevel,
          companyName,
          fieldOfWork,
        }
      );
      setSuccess(true);
      toast.success("Account created Successfully");
      console.log(response.data);
    } catch (error) {
      console.log("Error creating user");
      toast.error("Error creating user");
    } finally {
      setLoading(false); // Set loading to false after form submission is complete
    }
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <div className="text-black">Please wait while we create an account for you...</div>
        </div>
      ) : success ? (
        <div className="bg-black justify-center items-center w-full h-full rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Thank you for joining AIWEN</h1>
            <p>
              Thank you for filling out the form. We have received your details
              and will be in touch shortly.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-transparent rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-600">
              <p className="font-medium text-lg">Personal Details</p>
              <p>Please fill out all the fields.</p>
            </div>

            <form action="" onSubmit={createUser}>
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Enter full name"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@domain.com"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="address">Address / Street</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter home address"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="city">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="country">County / Region</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <select
                        name="county"
                        id="county"
                        value={county}
                        onChange={(e) => setCounty(e.target.value)}
                        className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <option value="">Select County</option>
                        {counties.map((county) => (
                          <option key={county.id} value={county.name}>
                            {county.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="state">City / Town</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="city"
                        id="city"
                        placeholder="City/Town"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="gender">Gender</label>
                    <select
                      name="gender"
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <option value="">Select Gender</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="goal">What do you want to achieve?</label>
                    <input
                      type="text"
                      name="goal"
                      id="goal"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      placeholder="What do you want to achieve?"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="linkedinurl">LinkedIn URL</label>
                    <input
                      type="text"
                      name="linkedinurl"
                      id="linkedinurl"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={linkedinurl}
                      onChange={(e) => setLinkedinUrl(e.target.value)}
                      placeholder="Your LinkedIn URL"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="hear">How did you hear about us?</label>
                    <select
                      name="hear"
                      id="hear"
                      value={hear}
                      onChange={(e) => setHear(e.target.value)}
                      className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <option value="">Select</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Friend">Friend</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="aoi">What AI areas are you interested in?</label>
                    <select
                      name="aoi"
                      id="aoi"
                      value={aoi}
                      onChange={(e) => setAoi(e.target.value)}
                      className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <option value="">Select interested area</option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Tensorflow">TensorFlow</option>
                      <option value="Robotics">Robotics</option>
                    </select>
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="fieldOfWork">Field Of Work</label>
                    <select
                      name="fieldOfWork"
                      id="fieldOfWork"
                      value={fieldOfWork}
                      onChange={(e) => setFieldOfWork(e.target.value)}
                      className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <option value="">Select</option>
                      <option value="IT">IT</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Science">Science</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="companyName">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="experienceLevel">Years of Experience</label>
                    <input
                      type="text"
                      name="experienceLevel"
                      id="experienceLevel"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={experienceLevel}
                      onChange={(e) => setExperienceLevel(e.target.value)}
                      placeholder="Years of experience"
                    />
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserForm;
