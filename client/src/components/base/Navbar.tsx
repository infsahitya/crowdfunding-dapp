import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { FaLink } from "react-icons/fa";
import { MdCreate } from "react-icons/md";
import useAuthStore from "@/store/auth.store";
import { useSDK } from "@metamask/sdk-react";

const NavLinkOpt = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "about-us" },
  { name: "Contact", path: "contact-us" },
];

const Navbar: React.FC = () => {
  const account = useAuthStore((state) => state.getAccount());
  const setAccount = useAuthStore((state) => state.setAccount);

  const { sdk, connected, connecting, chainId } = useSDK();

  console.log("Connected - ", connected);
  console.log("Connecting - ", connecting);
  console.log("Chain ID - ", chainId);
  console.log("Get Account - ", account);

  async function connectToAccount() {
    try {
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  }

  return (
    <div>
      <nav className="relative px-6 py-5 flex justify-between items-center bg-[#343A40] shadow-lg shadow-background">
        <a className="text-3xl font-bold leading-none text-gray-200" href="#">
          Crowdfunding App
        </a>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          {NavLinkOpt.map((link, i) => (
            <>
              <li key={i}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-base text-primary font-semibold"
                      : "text-base text-gray-300 hover:text-gray-100 hover:font-semibold"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
              <li
                className={`text-gray-300 ${i === NavLinkOpt.length - 1 ? "hidden" : ""}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4 current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </li>
            </>
          ))}
        </ul>
        <NavLink
          to={"create-campagin"}
          className="  lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-200 text-sm text-gray-900 font-bold rounded-lg transition duration-200 flex justify-center items-center flex-row gap-2"
        >
          <MdCreate />
          <span>CREATE CAMPAIGN</span>
        </NavLink>
        <Button
          onClick={() => connectToAccount()}
          className=" py-2 px-6 bg-primary hover:bg-primaryDark text-sm text-black font-bold rounded-lg transition duration-200 flex justify-center items-center flex-row gap-2"
        >
          <FaLink />
          <span>CONNECT WALLET</span>
        </Button>
      </nav>
    </div>
  );
};

export default Navbar;
