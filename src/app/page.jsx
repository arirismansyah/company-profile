"use client"; // This is a client component 👈🏽
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExploreItems, HeroItems } from "./data/data";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });
import "tiny-slider/dist/tiny-slider.css";
const Switcher = dynamic(() => import("./components/theme-switcher"));

const Navbar = dynamic(() => import("./components/navbar"));
const Footer = dynamic(() => import("./components/footer"));
const CreatorThree = dynamic(() => import("./components/creator-three"));
const Feature = dynamic(() => import("./components/feature"));
const Service = dynamic(() => import("./components/service"));
const ExploreTtem = dynamic(() => import("./components/explore-item"));
const Blog = dynamic(() => import("./components/blog"));
const Hero = dynamic(() => import("./components/hero"));
const Client = dynamic(() => import("./components/client"));

export default function Landing() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    document.body.classList.add(
      "font-urbanist",
      "text-base",
      "text-black",
      "dark:text-white",
      "dark:bg-slate-900"
    );
  }, []);

  const settings = {
    items: 1,
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    nav: false,
    speed: 400,
    gutter: 0,
    controlsText: [
      '<i class="mdi mdi-chevron-left "></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
  };

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
    <>
      <span className="fixed blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 bg-gradient-to-tl from-red-600/20 to-dark-blue-600/20 dark:from-red-600/40 dark:to-dark-blue-600/40"></span>
      <Navbar />

      <Hero />
      {/* <div className="container">
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

                <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/10 dark:after:bg-violet-600/30 after:-top-[50px] after:start-[30%] after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>

                <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/20 dark:after:bg-violet-600/40 after:bottom-[0] after:end-[15%] after:-z-1 after:rounded-full after:animate-ping"></div>
              </div>
              <p className="text-slate-400 dark:text-white/70 text-lg max-w-xl mx-auto">
                Unleash your creatifity with artificial intelligence
              </p>

              <div className="mt-8">
                <Link
                  href="/explore-one"
                  className="btn bg-dark-blue-600 hover:bg-yellow-600 border-dark-blue-600 hover:border-yellow-600 text-white rounded-full"
                >
                  Download Company Profile
                </Link>
              </div>
            </div>
          </div>

          <div className="relative animate-[spin_30s_linear_infinite] -z-1">
            <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-violet-600/20 relative after:z-10"></span>
            <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-violet-600/20 relative after:z-10"></span>
          </div>
        </div> */}

      <section className="relative md-py-24 py-16">
        <div className=" md-my-24 my-16">
          {/* <Feature id="services" /> */}
          <Service></Service>
        </div>
        <Client id="clients" title="Our Clients" />

        <CreatorThree
          id="teams"
          title="Our Team"
          description="Best sellers of the week's NFTs"
        />
      </section>
      <Footer />
      <Switcher></Switcher>
    </>
  );
}
