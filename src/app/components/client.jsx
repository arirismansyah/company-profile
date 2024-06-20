import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowForward } from "react-icons/md";
import { Hexagon } from "react-feather";
import { TbSitemap, TbCameraPlus } from "react-icons/tb";
import { LuLayers } from "react-icons/lu";
import { walletData } from "../data/data";

export default function Client() {
  return (
    <section id="clients" className="relative md:py-24 py-16">
      <div className="container">
        <div className="grid grid-cols-1 text-center">
        <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold">
          Our Clients
        </h3>

        {/* <p className="text-slate-400 max-w-xl mx-auto">
          We offer a wide range of IT services, including:
        </p> */}
        </div>
        <div className="grid mt-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
          {walletData.map((ele, index) => {
            return (
              <div
                key={index}
                className="group relative rounded-xl bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 p-6 text-center mt-10 hover:shadow-md dark:hover:shadow-gray-800 transition-all duration-500"
              >
                <div className="relative -mt-16">
                  <Image
                    src={ele.image}
                    placeholder="blur"
                    blurDataURL={ele.image}
                    className="bg-white dark:bg-slate-900 h-20 w-20 rounded-full shadow-md dark:shadow-gray-800 mx-auto p-3"
                    alt=""
                    width={80}
                    height={80}
                  />
                  <p className="text-lg font-semibold mt-5">
                    Client {ele.id}
                  </p>
                  <p className="text-slate-400 mt-3s">
                    <Link
                      href="/"
                      data-modal-toggle="loginform"
                      className="btn btn-link text-dark-blue-600 hover:text-dark-blue-600 after:bg-yellow-600 duration-500 ease-in-out inline-flex items-center"
                    >
                      <span>more</span>
                      <MdOutlineArrowForward className="ms-1 text-base" />
                    </Link>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
