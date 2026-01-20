"use client";

import React from "react";
import { useState } from "react";

const Username = ({ username }) => {
  const [amount, setAmount] = useState(10);


const handleAmount = (value) => {
  setAmount(Number(value));
};


  return (
    <>
      {/* Banner */}
      <div className="relative w-full">
        <img
          className="object-cover w-full h-[240px] border-b border-white"
          src="/banner.jpg"
          alt="Banner"
        />

        {/* Profile Image */}
        <div className="absolute p-2 -translate-x-1/2 border-2 border-white rounded-full -bottom-12 left-1/2 bg-slate-900">
          <img src="/logo.png" width={96} height={96} alt="Logo" />
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-center px-4 mt-20 text-center text-white">
        <h1 className="text-2xl font-bold">@{username || "Saksham"}</h1>

        <p className="max-w-xl mt-2 text-gray-300">
          Creating animated art for VTT
        </p>

        <div className="mt-1 text-sm text-gray-400">
          · 97,717 members · 82 posts · $15,450 / release
        </div>
      </div>

     {/* Content Section */}
<div className="max-w-6xl px-4 mx-auto mt-12 mb-[20px] text-white">
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
    
    {/* Supporters */}
    <div className="p-6 bg-gray-900 border border-gray-700 rounded-lg lg:col-span-2">
      <h2 className="mb-4 text-lg font-semibold">Top Supporters</h2>

      <ul className="space-y-3 text-sm text-gray-300">
  <li className="flex items-center justify-between">
    {/* Profile + Name */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 overflow-hidden border border-gray-600 rounded-full">
        <img
          src="/profile.gif"
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>
      <span>Saksham</span>
    </div>

    <span>$30</span>
  </li>
</ul>

    </div>

   {/* Payment */}
<div className="p-6 bg-gray-900 border border-gray-700 rounded-lg lg:col-span-1">
  <h2 className="mb-4 text-lg font-semibold">Support Creator</h2>

  {/* Preset amounts */}
  <div className="grid grid-cols-2 gap-3 mb-4">
    {["10", "20", "50", "100"].map((amount) => (
      <button
      onClick={() => handleAmount(amount)}
        key={amount}
        className="py-2 text-sm transition border border-gray-600 rounded-md hover:bg-blue-600 hover:border-blue-600"
      >
        ${amount}
      </button>
    ))}
  </div>

  {/* Custom amount */}
  <div className="mb-4">
    <label className="block mb-1 text-sm text-gray-400">
      Enter custom amount
    </label>
    <input
      type="number"
      placeholder="$"
       value={amount}
  onChange={(e) => setAmount(Number(e.target.value))}
      
      className="w-full px-3 py-2 text-sm text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
    />
  </div>

  {/* Donate button */}
  <button className="w-full py-3 text-sm font-medium rounded-md bg-gradient-to-br from-purple-600 to-blue-500 hover:opacity-90">
    Donate Now
  </button>

  <p className="mt-3 text-xs text-center text-gray-400">
    100% goes to the creator
  </p>
</div>


  </div>
</div>

    </>
  );
};

export default Username;
