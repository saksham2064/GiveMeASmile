"use client";

import React from "react";

const Username = ({ username }) => {

    const print=()=>{
        console.log(username);

    }
  return (
    <>
      <div className="relative w-full">
        <img
          className="object-cover w-full border border-white"
          src="/banner.jpg"
          alt="Banner"
        />

        <div className="absolute p-2 -translate-x-1/2 border-2 border-white rounded-full -bottom-11 left-1/2 bg-slate-900">
          <img src="/logo.png" width={85} height={85} alt="Logo" />
        </div>
      </div>

      <div className="flex flex-col items-center my-16 text-white">
        <h1 className="text-2xl font-bold">
            @Saksham
          {/* @{username} */}
        </h1>
       
{/* <button onClick={() => print()}>click</button> */}


        <p className="text-gray-300">
          Creating animated art for VTT
        </p>

        <div className="text-gray-400">
          · 97,717 members · 82 posts
        </div>
      </div>
    </>
  );
};

export default Username;
