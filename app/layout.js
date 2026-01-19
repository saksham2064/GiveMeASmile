import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Give me a Smile - Fund your project with small",
  description: "This website is a funding platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <SessionWrapper>

        <Navbar />

        <main className="relative min-h-[83.5vh] overflow-hidden
          bg-[#020617]">
          
          {/* Grid layer */}
          <div className="pointer-events-none absolute inset-0
            bg-[linear-gradient(to_right,rgba(148,163,184,0.15)_1px,transparent_1px),
                linear-gradient(to_bottom,rgba(148,163,184,0.15)_1px,transparent_1px)]
            bg-[size:24px_24px] text-white">
          </div>

          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
       
         
        </main>
 </SessionWrapper>
        <Footer />
      </body>
    </html>
  );
}
