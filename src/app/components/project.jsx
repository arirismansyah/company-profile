"use client"; // This is a client component 👈🏽
import dynamic from 'next/dynamic'
import React, { useEffect} from "react";

import Link from "next/link";
import Image from "next/image";

const TinySlider = dynamic(() => import("tiny-slider-react"),{ssr:false});
import "tiny-slider/dist/tiny-slider.css";



import { ExploreItems } from '../data/data';

export default function Project() {
    useEffect(() => {
    document.documentElement.classList.add("dark");
    document.body.classList.add(
      "font-urbanist",
      "text-base",
      "text-black",
      "dark:text-white",
      "dark:bg-slate-900"
    );
  }, []);
  const settings = {
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: false,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 12,
    responsive: {
      1025: {
        items: 5,
      },

      992: {
        items: 4,
      },

      767: {
        items: 3,
      },

      425: {
        items: 1,
      },
    },
  };

  return (
    <>
      <div id='projects' className="container">
        <div className="grid grid-cols-1 text-center">
        <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold">
          Our Projects
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          We offer a wide range of IT services, including:
        </p>
      </div>
          <div className="grid grid-cols-1 ">
            <div className="tiny-five-item">
              <TinySlider settings={settings}>
                {ExploreItems.map((el, index) => (
                  <div className="tiny-slide" key={index}>
                    <div className="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 h-fit m-2">
                      <div className="relative overflow-hidden">
                        <div className="relative overflow-hidden rounded-lg">
                          <Image
                            src={el.image}
                            className="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ height: "auto", width: "100%" }}
                            placeholder='blur'
                            blurDataURL={el.image}
                          />
                        </div>

                        <div className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                          <Link
                            href={`/item-detail/${el.id}`}
                            className="btn btn-sm rounded-full bg-dark-blue-600 hover:bg-yellow-700 border-dark-blue-600 hover:border-yelow-700 text-white"
                          >
                            <i className="mdi mdi-lightning-bolt"></i> Details
                          </Link>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="my-3">
                          <Link
                            href={`/item-detail/${el.id}`}
                            className="font-semibold hover:text-blue-600"
                          >
                            Service - 
                          </Link>
                        </div>

                        <div className="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                          <p className='text-sm'>Description of the service </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TinySlider>
            </div>
          </div>
        </div>
    </>
  );
}
