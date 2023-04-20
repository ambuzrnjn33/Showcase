import React from "react";
import { Layout } from "../components";
// import Img from "../assets/Rectangle.png";
import InviteImg from "../assets/Rectangle.png";
const InviteFriends = () => {
  return (
    <Layout>
    <div className="text-center">
      <img className="mx-auto" alt="" />
      <h1 className="text-lg font-medium text-center">
        Share with your friends
      </h1>

      <div className="col-span-7">
          <img className=" hero container max-w-sm mx-auto pb-10 " src={InviteImg} alt="" />
        </div>
      <h3 className="border w-4/5 mx-auto p-2 text-[#858A89] rounded-md mt-5">
        http://:bdfgdfhdbfheuydd ggfdheyudiuhd _ uihiffiedhgiyegfd
        fde+uhehdfuehd hfhufhduyeghfghffj_hfhfhhgdddudh-bbbfbhebfdhbdhdbbb
      </h3>
      <div className="space-x-10 text-center mt-8">
        <button className="px-6 py-0.5 border-2 border-gray-700 rounded-md">
          Copy Link
        </button>
        <button className="px-8 py-1 bg-[#FFC040] rounded-md text-white uppercase font-medium">
          Share
        </button>
      </div>
    </div>
     </Layout>
  );
};

export default InviteFriends;
