"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="relative flex items-center justify-between p-4 bg-gray-900 text-teal-50">
      {/* Logo */}
      <div className="flex items-center gap-2 text-lg font-bold">
        <Image
          src="/love-you-emojis.gif"
          alt="Smile emoji"
          width={24}
          height={24}
          unoptimized
        />
        <Link href="/">GiveMeASmile</Link>
      </div>

      {/* Right side */}
      <div className="relative flex items-center gap-4">
        {status === "loading" && <span>Loading...</span>}

        {session && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              {session.user.name || session.user.email}
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 z-20 w-48 mt-2 bg-gray-800 rounded-md shadow-lg">
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                  onClick={() => setDropdownOpen(false)}
                >
                  Dashboard
                </Link>

                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                  onClick={() => setDropdownOpen(false)}
                >
                  Earnings
                </Link>

                <Link
                  href="/settings"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                  onClick={() => setDropdownOpen(false)}
                >
                  Settings
                </Link>

                <button
                  onClick={() => {
                    signOut({ callbackUrl: "/login" });
                    setDropdownOpen(false);
                  }}
                  className="w-full px-4 py-2 text-sm text-left text-white hover:bg-gray-700"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        )}

        {!session && status !== "loading" && (
          <Link href="/login">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-md text-sm px-5 py-2.5">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
