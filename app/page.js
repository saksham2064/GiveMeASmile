import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-4 text-white text-center min-h-[44vh]">
        <div className="flex items-center justify-center gap-3 text-5xl font-bold">
          <span>Give Me A Smile</span>
          <Image
            src="/love-you-emojis.gif"
            alt="Give Me A Smile"
            width={48}
            height={48}
            unoptimized
          />
        </div>

        <p className="text-gray-300">A Funding Platform</p>

        <div className="flex gap-4 mt-2">
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5">
            Start Now
          </button>

          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5">
            Read More
          </button>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-white/10" />

      {/* Features Section */}
      <section className="container px-6 mx-auto text-white">
        <h1 className="text-xl font-bold text-center my-14">
          Your fans can give you a smile
        </h1>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Card */}
          <div className="flex flex-col items-center text-center gap-3 max-w-[200px]">
            <img
              src="logo.png"
              alt=""
              width={88}
              className="p-3 rounded-full bg-slate-400"
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-sm text-gray-300">
              Your fans are available
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-3 max-w-[200px]">
            <img
              src="sakura-pink.gif"
              alt=""
              width={88}
              className="p-3 rounded-full bg-slate-400"
            />
            <p className="font-bold">Get Support</p>
            <p className="text-sm text-gray-300">
              Simple and friendly donations
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-3 max-w-[200px]">
            <img
              src="moneda.gif"
              alt=""
              width={88}
              className="p-3 rounded-full bg-slate-400"
            />
            <p className="font-bold">Earn Smiles</p>
            <p className="text-sm text-gray-300">
              Turn love into funding
            </p>
          </div>
        </div>
      </section>


      <section className="container px-6 mx-auto text-white">
        <h1 className="text-xl font-bold text-center my-14">
          Your fans can give you a smile
        </h1>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Card */}
          <div className="flex flex-col items-center text-center gap-3 max-w-[200px]">
            <img
              src="logo.png"
              alt=""
              width={88}
              className="p-3 rounded-full bg-slate-400"
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-sm text-gray-300">
              Your fans are available
            </p>
          </div>


           {/* Divider */}
      <div className="h-14 bg-white/10" />

          <div className="flex flex-col items-center text-center gap-3 max-w-[200px]">
            <img
              src="sakura-pink.gif"
              alt=""
              width={88}
              className="p-3 rounded-full bg-slate-400"
            />
            <p className="font-bold">Get Support</p>
            <p className="text-sm text-gray-300">
              Simple and friendly donations
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-3 max-w-[200px]">
            <img
              src="moneda.gif"
              alt=""
              width={88}
              className="p-3 rounded-full bg-slate-400"
            />
            <p className="font-bold">Earn Smiles</p>
            <p className="text-sm text-gray-300">
              Turn love into funding
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
