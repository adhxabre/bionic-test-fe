import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

export default function API() {
  const { data: jobPost } = useQuery("jobPostQuery", async () => {
    const response = await axios.get(
      "https://api.npoint.io/093ff301f5018932169c"
    );
    return response.data;
  });

  return (
    <React.Fragment>
      <div className="w-full h-screen bg-white p-10 flex flex-col gap-7 justify-center items-center">
        <div className="w-3/4 grid grid-cols-2 grid-flow-row gap-5">
          {jobPost?.map(
            (
              item: {
                id: React.Key | null | undefined;
                title:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      unknown,
                      string | React.JSXElementConstructor<unknown>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
              },
              index: number
            ) => (
              <div
                key={item.id}
                className="w-full bg-gray-200 p-3 drop-shadow-md rounded-xl flex justify-between items-center"
              >
                <h1 className="text-lg text-green-700 text-left font-bold">
                  {item.title}
                </h1>
                <Link
                  to={`/api/${index}`}
                  className="text-lg text-white text-center font-medium w-40 h-full bg-orange-400 rounded-full"
                >
                  See Job
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
