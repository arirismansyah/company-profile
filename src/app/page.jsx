"use client"; // This is a client component 👈🏽
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExploreItems, HeroItems } from "./data/data";


const Navbar = dynamic(() => import("./components/navbar"));
const Hero = dynamic(() => import("./components/hero"));
const Service = dynamic(() => import("./components/service"));
const Client = dynamic(() => import("./components/client"));
const Project = dynamic(()=> import("./components/project"))
const Team = dynamic(() => import("./components/team"));
const Footer = dynamic(() => import("./components/footer"));
const Switcher = dynamic(() => import("./components/theme-switcher"));




export default  function Landing() {
  
  
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
      <section className="relative md-py-24 py-16">
        <div className=" md-my-24 my-16">
          <Service></Service>
        </div>
        <Client/>
        <Project></Project>
        <Team
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
