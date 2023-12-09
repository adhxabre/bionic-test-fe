import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import Description from "../components/HTMLViewer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import "./APIDetail.css";

export default function APIDetail() {
  const { id } = useParams();

  const { data: jobDetail, isLoading: jobDetailIsLoading } = useQuery(
    "jobDetailQuery",
    async () => {
      const response = await axios.get(
        `https://api.npoint.io/093ff301f5018932169c/${id}`
      );
      return response.data;
    }
  );

  console.log(jobDetail);

  return (
    <React.Fragment>
      <div className="w-full min-h-screen h-fit bg-amber-100 p-10">
        <h1
          className={`text-5xl text-left text-green-600 font-bold mb-5 ${
            jobDetailIsLoading ? "skeleton" : ""
          }`}
        >
          {jobDetail?.title}
        </h1>
        <div
          id="description"
          className={`${jobDetailIsLoading ? "skeleton" : ""}`}
        >
          <Description html={jobDetail?.description.txt} />
        </div>
        <form className="w-full flex flex-col gap-10">
          <h1 className="text-2xl text-left text-black font-bold mt-10">
            Send Your Job Application
          </h1>
          <div className="w-full flex justify-center items-center gap-5">
            <div className="flex-1 w-full">
              <label
                htmlFor="name"
                className="inline text-xl text-black text-left font-medium"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="block w-full bg-transparent border-b-2 border-neutral-400 p-3 ease-out duration-200 outline-none focus:border-neutral-600 focus:outline-none"
              />
            </div>
            <div className="flex-1 w-full">
              <label
                htmlFor="mobile-number"
                className="inline text-xl text-black text-left font-medium"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="mobile-number"
                name="mobile-number"
                placeholder="Enter your mobile number"
                className="block w-full bg-transparent border-b-2 border-neutral-400 p-3 ease-out duration-200 outline-none focus:border-neutral-600 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-5">
            <div className="flex-1 w-full">
              <label
                htmlFor="email"
                className="inline text-xl text-black text-left font-medium"
              >
                Email Address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="block w-full bg-transparent border-b-2 border-neutral-400 p-3 ease-out duration-200 outline-none focus:border-neutral-600 focus:outline-none"
              />
            </div>
            <div className="flex-1 w-full">
              <label
                htmlFor="message"
                className="inline text-xl text-black text-left font-medium"
              >
                Write your message here...
              </label>
              <input
                type="text"
                id="message"
                name="message"
                placeholder="Write your message"
                className="block w-full bg-transparent border-b-2 border-neutral-400 p-3 ease-out duration-200 outline-none focus:border-neutral-600 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-5">
            <div className="flex-1 w-full flex flex-col gap-3">
              <label className="inline text-xl text-black text-left font-medium">
                File
              </label>
              <div className="block w-20 h-20">
                <label
                  htmlFor="file"
                  className="inline w-20 h-20 text-xl text-black text-left font-medium cursor-pointer"
                >
                  <div className="group w-20 h-20 bg-orange-500 rounded-xl border-4 border-orange-500 flex justify-center items-center ease-out duration-200 hover:bg-transparent">
                    <FontAwesomeIcon
                      icon={faUpload}
                      className="text-xl text-white group-hover:text-orange-500 group-hover:text-3xl duration-200"
                    />
                  </div>
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="block hidden"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start items-center gap-5">
            <button
              type="button"
              className="w-40 p-3 rounded-xl bg-neutral-500 text-sm text-center text-white font-medium ease-out duration-300 hover:bg-neutral-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
