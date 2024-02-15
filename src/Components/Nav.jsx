import React from "react";
import { useState } from "react";
export default function Nav() {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <nav className="m-5 text-medium-gray flex justify-between h-16">
      <div className="flex">
        <img
          src="./images/logo.svg"
          alt="Logo"
          width={140}
          className="p-6 -mt-4"
        />
        <ul className="hidden md:flex ml-10 font-semibold ">
          <a
            className="flex mx-2 hover:cursor-pointer"
            onClick={() => {
              if (companyOpen) {
                setCompanyOpen(false);
              }
              setFeaturesOpen((prev) => !prev);
            }}
          >
            <li className="m-2">Features</li>
            <div className="p-2">
             {/*condionally render up or down arrow */}
              {featuresOpen ? (
                <img
                  className="my-2 mr-2 hover:animate-bounce "
                  src="./images/icon-arrow-up.svg"
                />
              ) : (
                <img
                  className="my-2 mr-2 hover:animate-bounce "
                  src="./images/icon-arrow-down.svg"
                />
              )}
            </div>
           {/*conditionally render drop down */}
            {featuresOpen && (
              <div className="features absolute top-14 rounded-md bg-white p-4 h-40">
                <ul className="hover:cursor-pointer">
                  <div className="flex">
                    <img
                      src="./images/icon-todo.svg"
                      className="w-4 h-4 mt-1"
                    />
                    <li className="p-1 ml-1">To Do List</li>
                  </div>
                  <div className="flex">
                    <img
                      src="./images/icon-calendar.svg"
                      className="w-4 h-4 mt-1"
                    />
                    <li className="p-1 ml-1">Calenders</li>
                  </div>
                  <div className="flex">
                    <img
                      src="./images/icon-reminders.svg"
                      className="w-4 h-4 mt-1"
                    />
                    <li className="p-1 ml-1">Reminders</li>
                  </div>
                  <div className="flex">
                    <img
                      src="./images/icon-planning.svg"
                      className="w-4 h-4 mt-1"
                    />
                    <li className="p-1 ml-1">Planning</li>
                  </div>
                </ul>
              </div>
            )}
          </a>
          <a
            className="flex mx-4 hover:cursor-pointer "
            onClick={() => {
              if (featuresOpen) {
                setFeaturesOpen(false);
              }
              setCompanyOpen((prev) => !prev);
            }}
          >
            <li className="m-2">Company</li>
            <div className="py-2">
              {/* condionally render up or down arrow */}
              {companyOpen ? (
                <img
                  className="my-2 mr-2 hover:animate-bounce "
                  src="./images/icon-arrow-up.svg"
                />
              ) : (
                <img
                  className="my-2 mr-2 hover:animate-bounce "
                  src="./images/icon-arrow-down.svg"
                />
              )}
            </div>
           {/*  //conditionally render drop down */}
            {companyOpen && (
              <div className="company absolute top-14 hover:cursor-pointer  rounded-md bg-white p-4 ml-4 h-32">
                <ul>
                  <li className="p-1">History</li>
                  <li className="p-1">Our Team</li>
                  <li className="p-1">Blog</li>
                </ul>
              </div>
            )}
          </a>
          <li className="m-2 mx-4">Careers</li>
          <li className="m-2 mx-6">About</li>
        </ul>
      </div>
      <div className="mr-4 hidden font-semibold md:block">
        <button className="m-2 hover:border-medium-gray border-transparent rounded-lg border py-1 px-4">
          Login
        </button>
        <button className="m-2 hover:border-medium-gray  border-transparent rounded-lg border py-1 px-4">
          Register
        </button>
      </div>
      <img
        src="./images/icon-menu.svg"
        width={80}
        className="md:hidden p-5 -mt-3 hover:cursor-pointer"
        onClick={() => {
          setShowSidebar(true);
        }}
      />
      {/* show sidePanel if show sidebar is true */}
      {showSideBar && (
        <div className="sidebar md:hidden absolute right-0 top-0 h-full w-3/4 bg-white">
          <img
            src="./images/icon-close-menu.svg"
            className="p-2 absolute right-0 hover:cursor-pointer"
            onClick={() => {
              setShowSidebar(false);
            }}
          />
          <ul className="ml-5 mt-14">
            <a
              className="flex mx-4 hover:cursor-pointer"
              onClick={() => {
                if (companyOpen) {
                  setCompanyOpen(false);
                }
                setFeaturesOpen((prev) => !prev);
              }}
            >
              <li className="m-2">Features</li>
              <div className="p-2">
                {/* condionally render arrow */}
                {featuresOpen ? (
                  <img
                    className="my-2 mr-2 hover:animate-bounce "
                    src="./images/icon-arrow-up.svg"
                  />
                ) : (
                  <img
                    className="my-2 mr-2 hover:animate-bounce "
                    src="./images/icon-arrow-down.svg"
                  />
                )}
              </div>
              {/* conditionally render sidePanel drop down */}
              {featuresOpen && (
                <div className="features absolute top-24 left-34 rounded-md bg-white p-4 h-40 border">
                  <ul className="hover:cursor-pointer">
                    <div className="flex">
                      <img
                        src="./images/icon-todo.svg"
                        className="w-4 h-4 mt-1"
                      />
                      <li className="p-1 ml-1">To Do List</li>
                    </div>
                    <div className="flex">
                      <img
                        src="./images/icon-calendar.svg"
                        className="w-4 h-4 mt-1"
                      />
                      <li className="p-1 ml-1">Calenders</li>
                    </div>
                    <div className="flex">
                      <img
                        src="./images/icon-reminders.svg"
                        className="w-4 h-4 mt-1"
                      />
                      <li className="p-1 ml-1">Reminders</li>
                    </div>
                    <div className="flex">
                      <img
                        src="./images/icon-planning.svg"
                        className="w-4 h-4 mt-1"
                      />
                      <li className="p-1 ml-1">Planning</li>
                    </div>
                  </ul>
                </div>
              )}
            </a>
            <a
              className="flex mx-4 hover:cursor-pointer "
              onClick={() => {
                if (featuresOpen) {
                  setFeaturesOpen(false);
                }
                setCompanyOpen((prev) => !prev);
              }}
            >
              <li className="m-2">Company</li>
              <div className="py-2">
                {companyOpen ? (
                  <img
                    className="my-2 mr-2 hover:animate-bounce "
                    src="./images/icon-arrow-up.svg"
                  />
                ) : (
                  <img
                    className="my-2 mr-2 hover:animate-bounce "
                    src="./images/icon-arrow-down.svg"
                  />
                )}
              </div>
              {/* condionally render sidePanel drop down */}
              {companyOpen && (
                <div className="company hover:cursor-pointer absolute top-36 left-4 rounded-md bg-white p-4 ml-4 h-32 border">
                  <ul>
                    <li className="p-1">History</li>
                    <li className="p-1">Our Team</li>
                    <li className="p-1">Blog</li>
                  </ul>
                </div>
              )}
            </a>
            <li className="py-2 ml-6">Careers</li>
            <li className="py-2 ml-6">About</li>
          </ul>
          <div className="text-center">
            <button className="m-2 hover:border-medium-gray border-transparent rounded-lg border py-1 px-4">
              Login
            </button>
            <br />
            <button className="m-2 hover:border-medium-gray border-transparent rounded-lg border py-1 px-4">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
