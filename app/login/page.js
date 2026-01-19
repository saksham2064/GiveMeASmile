"use client";
import React, { use, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
const Login = () => {

 const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  
  return (
    <div className="min-h-screen text-white bg-black py-14">
      <h1 className="mb-8 text-3xl font-bold text-center">
        Login / Sign Up to Get your fans
      </h1>

      <div className="flex flex-col items-center gap-4 p-10">
        {/* Google */}
        <button className="flex items-center px-6 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-lg shadow-md w-72 hover:bg-gray-200">
          <svg
            className="w-6 h-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-0.5 0 48 48"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                fill="#FBBC05"
              />
              <path
                d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                fill="#EB4335"
              />
              <path
                d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                fill="#34A853"
              />
              <path
                d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                fill="#4285F4"
              />
            </g>
          </svg>
          Continue with Google
        </button>


  <button className="flex items-center px-6 py-2 text-sm font-medium text-white bg-[#0d67b0] rounded-lg shadow-md w-72 hover:bg-[#004182]">
        <svg
  className="w-6 h-6 mr-2"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 48 48"
>
  <path
    d="M24 0C10.745 0 0 10.745 0 24c0 11.858 8.602 21.71 19.858 23.648v-16.73h-5.987v-6.918h5.987v-5.278c0-5.92 3.522-9.19 8.91-9.19 2.58 0 5.276.46 5.276.46v5.8h-2.973c-2.93 0-3.844 1.82-3.844 3.687v4.52h6.54l-1.045 6.918h-5.495v16.73C39.398 45.71 48 35.858 48 24 48 10.745 37.255 0 24 0z"
    fill="#ffffff"
  />
</svg>

          Continue with Facebook
        </button>
        

        {/* LinkedIn */}
        <button className="flex items-center w-72 px-6 py-2 text-sm font-medium text-white bg-[#116ac2] rounded-lg shadow-md hover:bg-[#004182]">
          <svg
            className="w-6 h-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.32 7.43c-1.13 0-2.05-.93-2.05-2.07 0-1.14.92-2.07 2.05-2.07 1.13 0 2.05.93 2.05 2.07 0 1.14-.92 2.07-2.05 2.07zM20.45 20.45h-3.53v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.38V9h3.39v1.56h.05c.47-.9 1.62-1.86 3.34-1.86 3.57 0 4.22 2.35 4.22 5.41v6.34z" />
          </svg>
          Continue with LinkedIn
        </button>

        {/* GitHub */}
        <button  onClick={() => signIn("github")} className="flex items-center px-6 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-md w-72 hover:bg-gray-800">
          <svg
            className="w-6 h-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.54-1.38-1.32-1.74-1.32-1.74-1.08-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.06 1.82 2.78 1.3 3.46 1 .1-.76.42-1.3.76-1.6-2.66-.3-5.46-1.34-5.46-5.98 0-1.32.46-2.4 1.24-3.24-.12-.3-.54-1.54.12-3.2 0 0 1-.32 3.3 1.24.96-.26 1.98-.4 3-.4s2.04.14 3 .4c2.3-1.56 3.3-1.24 3.3-1.24.66 1.66.24 2.9.12 3.2.78.84 1.24 1.92 1.24 3.24 0 4.66-2.8 5.66-5.48 5.96.44.38.82 1.1.82 2.24v3.32c0 .32.22.7.84.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          Continue with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;
