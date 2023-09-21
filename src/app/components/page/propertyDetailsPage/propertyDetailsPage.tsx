import React from "react";
import api from "../../../api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiSolidBath, BiSolidArea } from "react-icons/bi";
import { IoIosBed } from "react-icons/io";

const PropertyDetailsPage = () => {
  const housesData = api.houses.fetchAll();
  const { id } = useParams();
  const house = housesData.find((house) => {
    return house.id === Number(id);
  });

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{house?.name}</h2>
            <h3 className="text-lg mb-4">{house?.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-[#1C3988] text-white px-3 rounded-full">
              {house?.type}
            </div>
            <div className="bg-[#886B1C] text-white px-3 rounded-full">
              {house?.country}
            </div>
          </div>
          <div className="text-3xl font-semibold text-indigo-800">
            {house?.displayedPrice}$
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row ">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={house?.imageLg} alt="House image" />
            </div>
            <div className="flex gap-x-6 mb-6">
              <div className="flex gap-x-2 items-center">
                <IoIosBed className="text-2xl" />
                <div>{house?.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiSolidBath className="text-2xl" />
                <div>{house?.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiSolidArea className="text-2xl" />
                <div>{house?.surface}</div>
              </div>
            </div>
            <div>{house?.description}</div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={house?.agent.image} alt="Agent image" />
              </div>
              <div>
                <div className="font-bold text-lg">{house?.agent.name}</div>
                <Link to="" className="text-indigo-800 text-sm ">
                  View Listings
                </Link>
              </div>
            </div>
            <form className="flex flex-col gap-y-4">
              <input
                className="border border-gray-300 focus:border-[#4764C3] outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Name"
              />
              <input
                className="border border-gray-300 focus:border-[#4764C3] outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Email"
              />
              <input
                className="border border-gray-300 focus:border-[#4764C3] outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Phone"
              />
              <textarea
                className="border border-gray-300 focus:border-[#4764C3] outline-none rezise-none rounded w-full p-4 h-36 text-sm"
                placeholder="Message"
              ></textarea>
              <div className="flex gap-x-2">
                <button
                  type="button"
                  className="bg-[#254BB2] hover:bg-indigo-800 text-white transition rounded p-4 text-sm w-full"
                >
                  Send message
                </button>
                <button
                  type="button"
                  className="border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition"
                >
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetailsPage;
