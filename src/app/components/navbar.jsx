"use client"; // This is a client component 👈🏽
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineCopy, AiOutlineUser } from "react-icons/ai";
import { LuSearch, LuSettings } from "react-icons/lu";
import { PiWalletBold, PiBasketBold } from "react-icons/pi";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function Navbar() {
  const [isDropdown, openDropdown] = useState(true);
  const [isOpen, setMenu] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", windowScroll);
    }
    window.scrollTo(0, 0);
    activateMenu();
  }, []);

  

  function windowScroll() {
    const navbar = document.getElementById("topnav");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      if (navbar !== null) {
        navbar?.classList.add("nav-sticky");
      }
    } else {
      if (navbar !== null) {
        navbar?.classList.remove("nav-sticky");
      }
    }
  }

  function changeMode(mode, event) {
    switch (mode) {
      case "mode":
        if (document.documentElement.className.includes("dark")) {
          document.documentElement.className = "light";
        } else {
          document.documentElement.className = "dark";
        }
        break;
      case "layout":
        if (event.target?.innerText === "LTR") {
          document.documentElement.dir = "ltr";
        } else {
          document.documentElement.dir = "rtl";
        }
        break;

      default:
        break;
    }
  }

  const toggleMenu = () => {
    setMenu(!isOpen);
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(
        document.getElementById("navigation").getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  };

  const getClosest = (elem, selector) => {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  };
  const activateMenu = () => {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");

        var immediateParent = getClosest(matchingMenuItem, "li");

        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(immediateParent, ".child-menu-item");
        if (parent) {
          parent.classList.add("active");
        }

        var parent = getClosest(parent || immediateParent, ".parent-menu-item");

        if (parent) {
          parent.classList.add("active");

          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }

          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = getClosest(
            matchingMenuItem,
            ".parent-parent-menu-item"
          );
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }
  };

  const metamask = async () => {
    try {
      //Basic Actions Section
      const onboardButton = document.getElementById("connectWallet");

      //   metamask modal
      const modal = document.getElementById("modal-metamask");
      const closeModalBtn = document.getElementById("close-modal");

      //   wallet address
      const myPublicAddress = document.getElementById("myPublicAddress");

      //Created check function to see if the MetaMask extension is installed
      const isMetaMaskInstalled = () => {
        //Have to check the ethereum binding on the window object to see if it's installed
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask);
      };

      const onClickConnect = async () => {
        if (!isMetaMaskInstalled()) {
          //meta mask not installed
          modal.classList.add("show");
          modal.style.display = "block";
          return;
        }
        try {
          // eslint-disable-next-line no-undef
          await ethereum.request({ method: "eth_requestAccounts" });
          // eslint-disable-next-line no-undef
          const accounts = await ethereum.request({ method: "eth_accounts" });
          myPublicAddress.innerHTML =
            accounts[0].split("").slice(0, 6).join("") +
            "..." +
            accounts[0]
              .split("")
              .slice(accounts[0].length - 7, accounts[0].length)
              .join("");
        } catch (error) {
          console.error(error);
        }
      };

      const closeModal = () => {
        modal.classList.remove("show");
        modal.style.display = "none";
      };

      if (isMetaMaskInstalled()) {
        // eslint-disable-next-line no-undef
        const accounts = await ethereum.request({ method: "eth_accounts" });
        if (!!accounts[0]) {
          myPublicAddress.innerHTML =
            accounts[0].split("").slice(0, 6).join("") +
            "..." +
            accounts[0]
              .split("")
              .slice(accounts[0].length - 7, accounts[0].length)
              .join("");
        }
      }

      onboardButton.addEventListener("click", onClickConnect);
      closeModalBtn.addEventListener("click", closeModal);
    } catch (error) {}
  };

  return (
    <>
      <nav id="topnav" className="defaultscroll is-sticky flex items-center">
        <div className="container">
          {/* <!-- Logo container--> */}
          <Link className="logo ps-0" href="/">
            <Image
              src="/images/logo-square-w.png"
              width={28}
              height={28}
              className="inline-block sm:hidden"
              alt=""
            />
            <Image
              src="/images/logo-square.png"
              width={28}
              height={28}
              className="inline-block dark:hidden sm:hidden"
              alt=""
            />
            <div className="sm:block hidden">
              <Image
                src="/images/logo-ganapatih-sfc.png"
                width={100}
                height={28}
                className="inline-block dark:hidden h-7"
                alt=""
              />
              <Image
                src="/images/logo-ganapatih-sw.png"
                width={100}
                height={8}
                className="hidden dark:inline-block h-7"
                alt=""
              />
            </div>
          </Link>

          <div className="menu-extras">
            <div className="menu-item">
              {/* <!-- Mobile menu toggle--> */}
              <Link
                href="#"
                className="navbar-toggle"
                id="isToggle"
                onClick={toggleMenu}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>

          {/* <!--Login button Start--> */}

          <ul className="buy-button list-none align-middle mb-0 items-center">
            <li className="inline-block mb-0">
              <Link 
                href="cart"
                id="connectWallet"
                className="btn collapse rounded-full bg-dark-blue-600 hover:bg-orange-700 border-dark-blue-600 hover:border-orange-700 text-white"
              >
                Cart <i className="mdi mdi-cart-outline me-1"></i>
              </Link>
            </li>
          
          </ul>
          <div
            id="navigation"
            className={`${isOpen === true ? "hidden" : "block"}`}
          >
            <ul className="navigation-menu justify-center">
              <li className="has-submenu parent-menu-item">
                <Link href="/#services" >Services</Link>
              </li>
              <li className="has-submenu parent-parent-menu-item">
                <Link href="/#clients">Clients</Link>
              </li>
              <li className="has-submenu parent-parent-menu-item">
                <Link href="/#projects" >Projects</Link>
              </li>
              <li>
                <Link href="/#footer" >Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
