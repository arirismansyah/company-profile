import React from "react";
import Link from "next/link";
import { Hexagon } from "react-feather";
import { TbSitemap, TbCameraPlus } from "react-icons/tb";
import { LuLayers } from "react-icons/lu";

export default function Hero() {
  const downloadPdf = async () => {
    try {
      // Dynamically import html2pdf.js
      const html2pdf = (await import("html2pdf.js")).default;

      // Get the content of the page to be converted to PDF
      const element = document.getElementsByTagName("body")[0];

      // Configuration for the PDF conversion
      const opt = {
        margin: 0,
        filename: "ganapatih_akasa_solution.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      // Call the html2pdf library to convert the content to PDF
      html2pdf().from(element).set(opt).save();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <section className="relative md:pt-48 pt-36 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 justify-center text-center mt-10">
          <div className="relative">
            <div className="relative mb-5">
              <h1 className="font-bold lg:leading-snug leading-snug text-4xl lg:text-6xl">
                <span className="bg-gradient-to-l from-light-blue-600 to-dark-blue-600 text-transparent bg-clip-text">
                  {" "}
                  Ganapatih Akasa
                </span>{" "}
                <br />
                <span className="bg-gradient-to-l from-yellow-600 to-orange-600 text-transparent bg-clip-text">
                  Solution
                </span>
              </h1>

              <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-yellow-800/10 dark:after:bg-yellow-800/30 after:-top-[50px] after:start-[30%] after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>

              <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-yellow-800/20 dark:after:bg-yellow-800/40 after:bottom-[0] after:end-[15%] after:-z-1 after:rounded-full after:animate-ping"></div>
            </div>
            <p className="text-slate-400 dark:text-white/70 text-lg max-w-xl mx-auto">
              Unleash your creatifity with artificial intelligence
            </p>

            <div className="mt-8">
              <Link 
                href=""
                onClick={downloadPdf}
                className="btn bg-dark-blue-600 hover:bg-yellow-600 border-dark-blue-600 hover:border-yellow-600 text-white rounded-full"
              >
                Download Company Profile
              </Link>
            </div>
          </div>
        </div>

        <div className="relative animate-[spin_30s_linear_infinite] -z-1">
          <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-yellow-600/20 relative after:z-10"></span>
          <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-yellow-600/20 relative after:z-10"></span>
        </div>
      </div>
    </section>
  );
}
