"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState } from "react";

const Settings = () => {
  const [gender, setGender] = useState("");


  return (
    <DefaultLayout>
      <div className="mx-auto max-w-300">
        <Breadcrumb pageName="Settings" />

        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-8 xl:col-span-5">
            <div className="rounded-2xl border border-stroke bg-white shadow-default ">
              <div className="border-b border-stroke px-7 py-4 ">
                <h3 className="font-bold text-black ">
                  Personal Information
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black "
                        htmlFor="fullName"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <span className="absolute left-4.5 top-4">
                        </span>
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-3.5 pr-4.5 text-black focus:border-purple-500 focus-visible:outline-none "
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="Esme Abha"
                          defaultValue="Esme Abha"
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black "
                        htmlFor="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray px-3.5 py-3 text-black focus:border-purple-500 focus-visible:outline-none "
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="+880 018 3343 7865"
                        defaultValue="+880 018 3343 7865"
                      />
                    </div>
                  </div>


                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black "
                      htmlFor="emailAddress"
                    >
                      Email 
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-3.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        placeholder="esmechowdhuryabha@gmail.com"
                        defaultValue="esmechowdhuryabha@gmail.com"
                      />
                    </div>
                  </div>


                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      Username(not editable)
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray px-3.5 py-3 text-black focus:border-purple-500 focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="Username"
                      id="Username"
                      placeholder="abhaTheInvestor"
                      defaultValue="abhaTheInvestor"
                    />
                  </div>
                    

                    <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black "
                        htmlFor="address"
                      >
                        Address
                      </label>
                      <div className="relative">
                        <span className="absolute left-4.5 top-4">
 
                        </span>
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-3.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none "
                          type="text"
                          name="address"
                          id="address"
                          placeholder="IUT,Gazipur"
                          defaultValue="IUT,Gazipur"
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                    <label className="block mb-3 text-sm font-medium text-black">
                      Gender
                    </label>
                    <div className="flex items-center space-x-4">
                      {/* Male Option */}
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          className="h-5 w-5 text-purple-500 focus:ring-purple-500"
                          onChange={() => setGender("male")}
                          checked={gender === "male"}
                        />
                        <span>Male</span>
                      </label>
                      
                      {/* Female Option */}
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          className="h-5 w-5 text-purple-500 focus:ring-purple-500"
                          onChange={() => setGender("female")}
                          checked={gender === "female"}
                        />
                        <span>Female</span>
                      </label>
                    </div>
                  </div>
                  </div>


                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded-2xl border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 "
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded-2xl bg-purple-500 px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>


            <div className="col-span-5 xl:col-span-5 py-7">
            <div className="rounded-2xl border border-stroke bg-white shadow-default ">
              <div className="border-b border-stroke px-7 py-4 ">
                <h3 className="font-medium text-black ">
                  Company Information
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black "
                        htmlFor="companyName"
                      >
                        Company Name
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-4">
 
                        </span>
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-3.5 pr-4.5 text-black focus:border-purple-500 focus-visible:outline-none "
                          type="text"
                          name="companyName"
                          id="companyName"
                          placeholder="Prodigy AI"
                          defaultValue="Prodigy AI"
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black "
                        htmlFor="launchDate"
                      >
                        Company launch date
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray px-3.5 py-3 text-black focus:border-purple-500 focus-visible:outline-none "
                        type="text"
                        name="launchDate"
                        id="launchDate"
                        placeholder="05/07/2025"
                        defaultValue="05/07/2025"
                      />
                    </div>
                  </div>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black "
                        htmlFor="companyType"
                      >
                        Company Type
                      </label>
                      <div className="relative">
                        <span className="absolute left-4.5 top-4">

                        </span>
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-3.5 pr-4.5 text-black focus:border-purple-500 focus-visible:outline-none "
                          type="text"
                          name="companyType"
                          id="companyType"
                          placeholder="SaaS"
                          defaultValue="Saas"
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black "
                        htmlFor="netWorth"
                      >
                        Net Worth
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray px-3.5 py-3 text-black focus:border-purple-500 focus-visible:outline-none "
                        type="text"
                        name="netWorth"
                        id="netWorth"
                        placeholder="$4 Billion"
                        defaultValue="$4 Billion"
                      />
                    </div>
                  </div>
 
                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded-2xl border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 "
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded-2xl bg-purple-500 px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>

          
          <div className="center col-span-7 xl:col-span-5">
            <div className="rounded-2xl border border-stroke bg-white shadow-default ">
              <div className="border-b border-stroke px-7 py-4 ">
                <h3 className="font-medium text-black dark:text-white">
                  Your Photo
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-14 w-14 rounded-full">
                      <Image
                        src={"/images/user/user.png"}
                        width={55}
                        height={55}
                        alt="User"
                      />
                    </div>
                    <div>
                      <span className="mb-1.5 text-black dark:text-white">
                        Edit your photo
                      </span>
                      <span className="flex gap-2.5">
                        <button className="text-sm hover:text-purple-500">
                          Delete
                        </button>
                        <button className="text-sm hover:text-purple-500">
                          Update
                        </button>
                      </span>
                    </div>
                    
                  </div>

                  <div
                    id="FileUpload"
                    className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-purple-500 bg-gray px-4 py-4 sm:py-7.5"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                    />
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                            fill="#3C50E0"
                          />
                        </svg>
                      </span>
                      <p>
                        <span className="text-purple-500">Click to upload</span> or
                        drag and drop
                      </p>
                      <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                      <p>(max, 800 X 800px)</p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded-2xl border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 "
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded-2xl bg-purple-500 px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Settings;
