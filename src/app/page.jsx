"use client"; // This is a client component 👈🏽
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExploreItems } from "./data/data";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });
import "tiny-slider/dist/tiny-slider.css";

const Navbar = dynamic(() => import("./components/navbar"));
const Footer = dynamic(() => import("./components/footer"));
const CreatorThree = dynamic(() => import("./components/creator-three"));
const Feature = dynamic(() => import("./components/feature"));
const ExploreTtem = dynamic(() => import("./components/explore-item"));
const Blog = dynamic(() => import("./components/blog"));

export default function Landing() {
  useEffect(() => {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
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
      <span className="fixed blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 bg-gradient-to-tl from-red-600/20 to-violet-600/20 dark:from-red-600/40 dark:to-violet-600/40"></span>
      <Navbar />

      <section className="relative lg:pt-22 pt-[74px] overflow-hidden">
        <div className="container-fluid lg:px-10 md:px-3 relative overflow-hidden">
          <span className="absolute blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 bg-gradient-to-tl from-red-600/40 to-violet-600/40 dark:from-red-600/60 dark:to-violet-600/60"></span>
          <div className="lg:py-24 py-[74px] md:rounded-lg shadow dark:shadow-gray-800 bg-violet-700/10 dark:bg-violet-600/20">
            <div className="container">
              <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="md:col-span-7">
                  <div className="md:me-6">
                    <h4 className="font-bold lg:leading-snug leading-snug text-4xl lg:text-6xl mb-4">
                      <span className="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text">
                        Ganapatih Akasa Solution
                      </span>{" "}
                    </h4>
                    <p className="text-lg max-w-xl">
                      Ganapatih Akasa Solution is an IT company that provides a
                      wide range of IT solutions to businesses of all sizes. We
                      are headquartered in Jakarta, Indonesia, and have a team
                      of experienced and qualified IT professionals who are
                      dedicated to helping our clients achieve their business
                      goals.
                    </p>

                    <div className="mt-6">
                      <Link
                        href="#"
                        onClick={downloadPdf}
                        className="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full me-2 mt-2"
                      >
                        Download Company Profile
                      </Link>
                    </div>
                  </div>
                  <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/10 dark:after:bg-violet-600/30 after:-bottom-[50px] after:start-[30%] after:-z-1 after:rounded-full after:animate-ping"></div>
                </div>

                <div className="md:col-span-5 relative">
                  <div className="tiny-one-icon-item">
                    <TinySlider settings={settings}>
                      {ExploreItems.map((el, index) => (
                        <div className="tiny-slide" key={index}>
                          <div className="m-2 p-3 bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                            <Link
                              href={`/item-detail/${el.id}`}
                              className="group relative overflow-hidden rounded-lg"
                            >
                              <Image
                                src={el.image}
                                className="rounded-lg"
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                placeholder="blur"
                                blurDataURL={el.image}
                              />

                              <span className="absolute bottom-5 start-5">
                                <span className="mb-2 block">
                                  <span className="font-semibold text-white">
                                    {el.title}
                                  </span>
                                </span>

                                <span className="flex items-center">
                                  <Image
                                    src={el.avatar}
                                    className="rounded-full h-8 w-8"
                                    alt=""
                                    width={10}
                                    height={10}
                                  />
                                  <span className="ms-2 text-[15px] font-medium text-white">
                                    {el.subtext}
                                  </span>
                                </span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </TinySlider>
                  </div>

                  <div className="overflow-hidden after:content-[''] after:absolute after:h-14 after:w-14 after:bg-violet-600/10 dark:after:bg-violet-600/30 after:-top-[50px] after:start-[30%] after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative md-py-24 py-16">
        <div className=" md-my-24 my-16">
          <Feature id="services" />
        </div>
        <ExploreTtem id="clients" title="Our Clients" />

        <CreatorThree
          id="teams"
          title="Our Team"
          description="Best sellers of the week's NFTs"
        />
      </section>
      <Footer />
    </>
  );
}
