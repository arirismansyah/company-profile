import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "react-feather";
import { LiaFacebookF } from "react-icons/lia";
import { FaRegEnvelope, FaLinkedin } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { FiDribbble } from "react-icons/fi";
import { BiLogoBehance } from "react-icons/bi";

export default function Footer() {
  const handleEmail = () => {
    // Encode the subject and body to ensure proper formatting
    const recipient = "ganapatihdummy@mail.com";
    const subject = "Lets start project!";
    const from_mail = document.getElementById("email");
    console.log(from_mail);
    const mailtoLink = `mailto:${recipient}?form=${from_mail}?subject=${encodeURIComponent(
      subject
    )}`;
    // Open the email client
    window.location.href = mailtoLink;
  };
  return (
    <footer
      id="footer"
      className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200 mt-24"
    >
      <div className="container">
        <div className="grid grid-cols-1">
          <div className="relative py-16">
            <div className="relative w-full">
              <div className="relative -top-40 bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-xl shadow dark:shadow-gray-800 overflow-hidden">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                  <div className="md:text-start text-center z-1">
                    <h3 className="text-[26px] font-semibold text-slate-900 dark:text-white">
                      Ready to start your project?
                    </h3>
                    <p className="text-slate-400 max-w-xl mx-auto">
                      Please drop us an email at ...
                    </p>
                  </div>

                  <div className="subcribe-form z-1">
                    <form className="relative max-w-lg md:ms-auto">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-slate-900 dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"
                        placeholder="Enter your email :"
                      />
                      <button
                        onClick={handleEmail}
                        className="btn absolute top-[2px] end-[3px] h-[46px] bg-dark-blue-600 hover:bg-dark-blue-700 border-dark-blue-600 hover:border-dark-blue-700 text-white rounded-full"
                      >
                        Email us
                      </button>
                    </form>
                  </div>
                </div>

                <div className="absolute -top-5 -start-5">
                  <FaRegEnvelope className="lg:text-[150px] text-7xl text-slate-900/5 dark:text-white/5 -rotate-45" />
                </div>

                <div className="absolute -bottom-5 -end-5">
                  <BsPencil className="lg:text-[150px] text-7xl text-slate-900/5 dark:text-white/5" />
                </div>
              </div>

              <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] -mt-24">
                <div className="lg:col-span-4 md:col-span-12">
                  <Link href="#" className="text-[22px] focus:outline-none">
                    <Image
                      src="/images/logo-ganapatih-sw.png"
                      placeholder="blur"
                      blurDataURL="/images/logo-ganapatih-sw.png"
                      alt=""
                      width={116}
                      height={28}
                    />
                  </Link>
                  <p className="mt-6 text-gray-300">
                    Ganapatih Akasa Solution. Unleash your creatifity with
                    artificial intelligence
                  </p>
                </div>

                <div className="lg:col-span-3 md:col-span-4">
                  <div className="mt-6">
                    <h5 className="tracking-[1px] text-lg text-gray-100 font-semibold">
                      Contact Details
                    </h5>

                    <div className="flex mt-6">
                      <Mail className="w-5 h-5 text-dark-blue-600 me-3 mt-1"></Mail>
                      <div className="">
                        <Link
                          href="mailto:contact@example.com"
                          className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                        >
                          contact@example.com
                        </Link>
                      </div>
                    </div>

                    <div className="flex mt-6">
                      <Phone className="w-5 h-5 text-dark-blue-600 me-3 mt-1"></Phone>
                      <div className="">
                        <Link
                          href="tel:+152534-468-854"
                          className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                        >
                          +152 534-468-854
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
        <div className="container text-center">
          <div className="grid md:grid-cols-2 items-center gap-6">
            <div className="md:text-start text-center">
              <p className="mb-0 text-gray-300">
                © {new Date().getFullYear()} Ganapatih Akasa Solution.
              </p>
              <span>
                Image by:{" "}
                <a href="freepik.com/" hre>
                  Freepik
                </a>
              </span>
            </div>

            <ul className="list-none md:text-end text-center space-x-1">
              <li className="inline">
                <Link
                  href="https://1.envato.market/giglink-next"
                  target="_blank"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-dark-blue-600 dark:hover:border-dark-blue-600 hover:bg-dark-blue-600 dark:hover:bg-dark-blue-600"
                >
                  <AiOutlineShoppingCart />
                </Link>
              </li>
              <li className="inline">
                <Link
                  href="https://dribbble.com/shreethemes"
                  target="_blank"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-dark-blue-600 dark:hover:border-dark-blue-600 hover:bg-dark-blue-600 dark:hover:bg-dark-blue-600"
                >
                  <FiDribbble className="text-base" />
                </Link>
              </li>
              <li className="inline">
                <Link
                  href="https://www.behance.net/shreethemes"
                  target="_blank"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-dark-blue-600 dark:hover:border-dark-blue-600 hover:bg-dark-blue-600 dark:hover:bg-dark-blue-600"
                >
                  <BiLogoBehance className="text-base" />
                </Link>
              </li>
              <li className="inline">
                <Link
                  href="http://linkedin.com/company/shreethemes"
                  target="_blank"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-dark-blue-600 dark:hover:border-dark-blue-600 hover:bg-dark-blue-600 dark:hover:bg-dark-blue-600"
                >
                  <FaLinkedin className="text-base" />
                </Link>
              </li>
              <li className="inline">
                <Link
                  href="https://www.facebook.com/shreethemes"
                  target="_blank"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-dark-blue-600 dark:hover:border-dark-blue-600 hover:bg-dark-blue-600 dark:hover:bg-dark-blue-600"
                >
                  <LiaFacebookF className="text-base" />
                </Link>
              </li>
              <li className="inline">
                <Link
                  href="https://www.instagram.com/shreethemes/"
                  target="_blank"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-dark-blue-600 dark:hover:border-dark-blue-600 hover:bg-dark-blue-600 dark:hover:bg-dark-blue-600"
                >
                  <AiOutlineInstagram className="text-base" />
                </Link>
              </li>
              <li className="inline">
                <Link
                  href="https://twitter.com/shreethemes"
                  target="_blank"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-dark-blue-600 dark:hover:border-dark-blue-600 hover:bg-dark-blue-600 dark:hover:bg-dark-blue-600"
                >
                  <AiOutlineTwitter className="text-base" />
                </Link>
              </li>
              <li className="inline">
                <Link
                  href="mailto:support@shreethemes.in"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-dark-blue-600 dark:hover:border-dark-blue-600 hover:bg-dark-blue-600 dark:hover:bg-dark-blue-600"
                >
                  <FaRegEnvelope className="align-middle" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
