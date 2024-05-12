"use client"; // This is a client component 👈🏽
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import Select from "react-select";
import Link from "next/link";

const Navbar = dynamic(() => import("../components/navbar"));
const Footer = dynamic(() => import("../components/footer"));
const Switcher = dynamic(() => import("../components/theme-switcher"));
const DiscoverItems = dynamic(() => import("../components/discover-items"));

import { AiOutlineAppstore, AiOutlineStar } from "react-icons/ai";
import { LuClock, LuSearch } from "react-icons/lu";

export default function ExploreOne() {
  useEffect(() => {
    document.documentElement.classList.add("light");
    document.body.classList.add(
      "font-urbanist",
      "text-base",
      "text-black",
      "dark:text-white",
      "dark:bg-slate-900"
    );
  }, []);
  const options = [
    { value: "Art", label: "Art" },
    { value: "Domain", label: "Domain Names" },
    { value: "Music", label: "Music" },
    { value: "Sports", label: "Sports" },
    { value: "Trading", label: "Trading Cards" },
    { value: "Virtual", label: "Virtual World" },
  ];

  const buyOptions = [
    { value: "now", label: "Buy Now" },
    { value: "auctions", label: "Auctions" },
    { value: "offers", label: "Offers" },
  ];
  const rateOptions = [
    { value: "top", label: "Top Rated" },
    { value: "low", label: "Lower Rated" },
  ];
  return (
    <>
      <Navbar />
      <section className="relative table w-full py-36  bg-bottom bg-no-repeat">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div> */}
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium dark:text-white ">
              Explore Services
            </h3>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <section className="relative md:pb-24 pb-16 -mt-16">
        <div className="container z-3">
          <div className="grid grid-cols-1">
            <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700">
              <div className="registration-form text-dark text-start">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                  <div>
                    <label className="form-label font-medium dark:text-white">
                      Search:
                    </label>
                    <div className="filter-search-form relative filter-border mt-2">
                      <LuSearch className="icons" />
                      <input
                        name="name"
                        type="text"
                        id="job-keyword"
                        className="form-input w-full filter-input-box text-slate-900 dark:text-white bg-gray-50 dark:bg-slate-800 border-0 focus:ring-transparent"
                        placeholder="Search your keaywords"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="choices-catagory"
                      className="form-label font-medium dark:text-white"
                    >
                      Categories:
                    </label>
                    <div className="filter-search-form relative filter-border mt-2">
                      <AiOutlineAppstore className="icons" />
                      <Select
                        id="long-value-select"
                        instanceid="long-value-select"
                        className="form-input z-2 filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                        options={options}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="choices-min-price"
                      className="form-label font-medium dark:text-white"
                    >
                      Items:
                    </label>
                    <div className="filter-search-form relative filter-border mt-2">
                      <LuClock className="icons text-base" />
                      <Select
                        id="long-value-select"
                        instanceid="long-value-select"
                        className="form-input z-2 filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                        options={buyOptions}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="choices-max-price"
                      className="form-label font-medium dark:text-white"
                    >
                      Sort By:
                    </label>
                    <div className="filter-search-form relative mt-2">
                      <AiOutlineStar className="icons" />
                      <Select
                        id="long-value-select"
                        instanceid="long-value-select"
                        className="form-input z-2 filter-input-box bg-gray-50 dark:bg-slate-800 border-0"
                        options={rateOptions}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="container z-1">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-8  bg-gradient-to-tl from-orange-600/40 to-light-blue-600/40 dark:from-orange-600/60 dark:to-light-blue-600/60">
              <div className="mb-8 mt-4">
                <DiscoverItems all={true} pagination={true} />
              </div>
            </div>
            <div className="lg:col-span-4 bg-gradient-to-tl from-orange-600/40 to-light-blue-600/40 dark:from-orange-600/60 dark:to-light-blue-600/60">
              <div
                className={` inset-0 m-auto justify-center items-center flex bg-opacity-50 dark:bg-opacity-80`}
              >
                <div className="relative w-full h-auto max-w-md p-4">
                  <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                      <h5 className="text-xl font-semibold">Cart</h5>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      ></button>
                    </div>
                    <div className="p-6">
                      <form className="text-start">
                        <div className="grid grid-cols-1">
                          <div className="mb-4">
                            <label className="font-semibold">Your Price:</label>
                            <table class="w-full text-sm">
                              <tbody>
                                <tr>
                                  <td>Sevice 2</td>
                                  <td className="text-right">Rp. xx.00</td>
                                </tr>
                                <tr>
                                  <td>Sevice 2</td>
                                  <td className="text-right">Rp. xx.00</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </form>

                      <div className="pt-4 border-t dark:border-t-gray-800">
                        {/* <div className="flex justify-between">
                          <p className="font-semibold text-sm">
                            {" "}
                            You must bid at least:
                          </p>
                          <p className="text-sm text-dark-blue-600 font-semibold">
                            {" "}
                            1.22 ETH{" "}
                          </p>
                        </div> */}
                        {/* <div className="flex justify-between mt-1">
                          <p className="font-semibold text-sm">
                            {" "}
                            Service free:
                          </p>
                          <p className="text-sm text-dark-blue-600 font-semibold">
                            {" "}
                            0.05 ETH{" "}
                          </p>
                        </div> */}
                        <div className="flex justify-between mt-1">
                          <p className="font-semibold text-sm">
                            {" "}
                            Total amount:
                          </p>
                          <p className="text-sm text-dark-blue-600 font-semibold">
                            {" "}
                            Rp. xx.00{" "}
                          </p>
                        </div>
                      </div>

                      {/* <div className="flex items-center p-4 bg-red-600/10 text-red-600 mt-4 rounded-lg">
                        <BsExclamationOctagon className="text-3xl" />

                        <div className="ms-2">
                          <span className="block font-semibold">
                            This creator is not verified
                          </span>
                          <span className="block">
                            Purchase this item at your own risk
                          </span>
                        </div>
                      </div> */}

                      <div className="mt-4">
                        <Link
                          href="#"
                          className="btn rounded-full bg-dark-blue-600 hover:bg-dark-blue-700 border-dark-blue-600 hover:border-dark-blue-700 text-white w-full"
                        >
                          <i className="mdi mdi-lightning-bolt"></i> Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Switcher />
    </>
  );
}
