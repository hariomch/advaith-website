import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "../svg/svg.js";
const SidebarOptions = [
  { eventName: "YeAH Hackathon" },
  { eventName: "CTF" },
  { eventName: "Coding Marathon" },
  { eventName: "Design Wars" },
];

const Sidebar = ({ isSidebarOpen }) => {
  const [isEventOpen, setIsEventOpen] = useState(false);
  return (
    <div
      className={`absolute h-full w-3/4 md:hidden bg-theme-bg bg-opacity-50 shadow-inset transform transition-all duration-200 ease-in-out backdrop-filter backdrop-blur-lg z-20 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full w-full flex flex-col gap-10">
        <div className="space-y-6 mt-52 mb-auto w-full px-10">
          <div className="w-full flex -mt-10">
            <img
              src="/Assets/Images/advaith-logo.svg"
              width={180}
              height={50}
              className="object-contain"
            />
          </div>
          <div>
            <div className="p-3 w-full text-theme-primary-600 hover:bg-white hover:bg-opacity-10 inline-flex place-items-center text-xl font-semibold">
              <Link href="/#hackathon-section">
                <a>
                  <p>Hackathon</p>
                </a>
              </Link>
            </div>
            <div className="w-full text-theme-primary-600 inline-flex place-items-center text-xl font-semibold">
              <div className="place-items-center w-full">
                <div
                  className="flex place-items-center w-full hover:bg-white hover:bg-opacity-10 p-3"
                  onClick={(e) => {
                    setIsEventOpen(!isEventOpen);
                  }}
                >
                  <Link href="/#events-section">
                    <a className="flex place-items-center">
                      <p className="">More Events</p>
                      <ChevronDown className="" />
                    </a>
                  </Link>
                </div>
                <div
                  className={`text-lg w-full ${
                    isEventOpen ? "block" : "hidden"
                  }`}
                >
                  {SidebarOptions.map((event, key) => (
                    <div
                      key={key}
                      className="p-3 pl-10 hover:bg-white hover:bg-opacity-10 w-full"
                    >
                      {event.eventName}
                    </div>
                  ))}
                </div>
              </div>
            </div><div className="p-3 w-full text-theme-primary-600 hover:bg-white hover:bg-opacity-10 inline-flex place-items-center text-xl font-semibold">
              <Link href="/#schedule-section">
                <a>
                  <p>Schedule</p>
                </a>
              </Link>
            </div>
            <div className="p-3 w-full text-theme-primary-600 hover:bg-white hover:bg-opacity-10 inline-flex place-items-center text-xl font-semibold">
              <Link href="/#sponsor-section">
                <a>
                  <p>Sponsors</p>
                </a>
              </Link>
            </div>
            <div className="p-3 w-full text-theme-primary-600 hover:bg-white hover:bg-opacity-10 inline-flex place-items-center text-xl font-semibold">
              <Link href="/#faq-section">
                <a>
                  <p>FAQ</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
