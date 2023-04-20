import React from "react";
import { ImLocation2 } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const ServiceCard = ({ video, address }) => {
  const stars = [];

  // Create an array of stars based on the rating value

  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesomeIcon
        icon={faStar}
        className={i < video.rating ? "active text-yellow-500 " : ""}
        key={i}
      />
    );
  }

  return (
    <div className="shadow-md md:w-[445px] w-full flex flex-col items-start">
      <div className=" max:h-[253px] relative">
        <video className="w-full h-full" controls src={video.video} />
      </div>
      <div className="flex flex-col py-2 px-3 mt-2 w-full">
        <div className="flex items-center gap-1 ">{stars}</div>
        <div className="flex items-center gap-3 justify-between w-full ">
          <h1 className="text-md font-semibold">
            Station : <span className="font-normal text-gray-400">{address}</span>{" "}
          </h1>
          <h1 className="text-md  font-normal text-gray-900 flex items-center gap-1">
            {Math.round(video.distance / 1000 )}KM  <ImLocation2 className="text-gray-900" />{" "}
          </h1>
        </div>
        <h1 className="text-md font-semibold">
          Owner : <span className="font-normal text-yellow-500">{video.vendorId.name}</span>{" "}
        </h1>
        <h1 className="text-md font-semibold">
          Call : <span className="font-normal text-gray-600">{video.vendorId.phone}</span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default ServiceCard;
