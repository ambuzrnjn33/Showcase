import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import userImg from "../assets/user.png";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { useGlobalContext } from "../context/context";
import axios from "axios";

const categories = [
  {
    _id: "01",
    name: "All videos",
  },
  {
    _id: "02",
    name: "Clothes",
    subCate: [
      {
        _id: "01",
        name: "Shirt",
      },
      {
        _id: "02",
        name: "Shirt",
      },
    ],
  },
  {
    _id: "03",
    name: "Accessories",
    subCate: [
      {
        _id: "01",
        name: "Watch",
      },
      {
        _id: "02",
        name: "Watch",
      },
    ],
  },
  {
    _id: "04",
    name: "Home and Kitchen",
    subCate: [
      {
        _id: "01",
        name: "Home 1",
      },
      {
        _id: "02",
        name: "Home 2",
      },
    ],
  },
  {
    _id: "05",
    name: "Electronics",
    subCate: [
      {
        _id: "01",
        name: "Electronics 1",
      },
      {
        _id: "02",
        name: "Electronics 2",
      },
    ],
  },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showSubCateId, setShowSubCateId] = useState(null);
  const { user, url, token, signOut, searchProducts } = useGlobalContext();
  const id = user?._id;

  const navigate = useNavigate();
  const handleShowSubCate = (id) => {
    if (showSubCateId === id) {
      return setShowSubCateId(null);
    }

    return setShowSubCateId(id);
  };
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  console.log(location);
  // Searach inputs
  const [search, setSearch] = useState(null);

  const handleSearch = () => {
    if (search) {
      searchProducts(search, location, navigate);
    } else {
      alert("Enter search");
    }
  };

  return (
    <>
      <div className="bg-[#FFC93E] py-1">
        <div className="px-2 md:px-8 xl:px-16 relative">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-6 flex lg:gap-6 justify-center items-center">
              <img
                className="h-14 cursor-pointer md:h-14"
                src={logo}
                alt="logo"
                onClick={() => navigate("/")}
              />
              <div className="w-full hidden md:block relative">
                <input
                  type="text"
                  className="w-full border border-slate-900 py-1.5 pl-3 rounded-md focus:outline-none"
                  placeholder="Search here"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <BsSearch
                  onClick={handleSearch}
                  className="absolute top-2.5 right-6 cursor-pointer"
                />
              </div>
            </div>
            <div className="col-span-6 md:hidden flex items-center justify-evenly">
              <button className="font-bold">Login</button>
              <img
                className="h-8 w-8 rounded-full ml-4"
                src={userImg}
                alt="user-img"
              />
              {showNav ? (
                <RxCross2
                  className="text-3xl"
                  onClick={() => setShowNav(!showNav)}
                />
              ) : (
                <HiOutlineMenuAlt2
                  className="text-3xl"
                  onClick={() => setShowNav(!showNav)}
                />
              )}
            </div>
            <div
              className={`col-span-6 pl-10 md:pl-0 lg:pl-20 flex flex-col md:flex-row md:items-center justify-start md:justify-between font-semibold absolute md:static top-[52px] left-0 w-full h-[calc(100vh_-_54px)] md:h-auto space-y-3 md:space-y-0 py-8 md:py-0 bg-[#5E5F8F] text-white md:text-current md:bg-transparent transition-all duration-300 ease-linear z-50 ${
                showNav
                  ? "w-full opacity-100"
                  : "w-0 opacity-0 md:opacity-100 md:w-full"
              }`}
            >
              <ul className="md:hidden text-left space-y-3 border-b border-slate-400 pb-5">
                {categories.map((category) => (
                  <div key={categories._id}>
                    <div
                      onClick={() => handleShowSubCate(category._id)}
                      className="flex items-center space-x-2"
                    >
                      <h3>{category.name}</h3>
                      {category.subCate && (
                        <BiChevronDown className="text-xl" />
                      )}
                    </div>
                    <ul
                      className={`${category?.subCate && "py-1 rounded-md"} ${
                        showSubCateId === category._id ? "block" : "hidden"
                      }`}
                    >
                      {category?.subCate?.map((subCat) => (
                        <li
                          key={subCat._id}
                          className="cursor-pointer hover:bg-slate-200 px-4 py-2"
                        >
                          {subCat.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ul>
              <NavLink className="list-none">About</NavLink>
              <NavLink className="list-none">Service</NavLink>
              <NavLink className="list-none">Details</NavLink>
              <li className="hidden md:block">
                {!token ? (
                  <button
                    onClick={() => navigate("/login")}
                    className="px-4 lg:px-8 py-1 bg-[#5C5265] rounded-md text-white"
                  >
                    Login
                  </button>
                ) : (
                  <button
                    onClick={() => signOut(navigate)}
                    className="px-4 lg:px-8 py-1 bg-[#5C5265] rounded-md text-white"
                  >
                    Logout
                  </button>
                )}
              </li>
              <img
                className="h-10 w-10 hidden md:block rounded-full ml-4 cursor-pointer"
                src={userImg}
                alt="user-img"
                onClick={() => navigate("/vendorprofile")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 font-semibold hidden md:block px-4 md:px-8 lg:px-16">
        <div className="flex space-x-10">
          {categories.map((category) => (
            <div key={category._id} className="relative">
              <div
                onClick={() => handleShowSubCate(category._id)}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <h3>{category.name}</h3>
                {category.subCate && <BiChevronDown className="text-xl" />}
              </div>
              <ul
                className={`${
                  category?.subCate &&
                  "bg-gray-100 shadow-md w-[200px] py-3 rounded-md absolute top-9 left-0"
                } ${showSubCateId === category._id ? "block" : "hidden"}`}
              >
                {category?.subCate?.map((subCat) => (
                  <li
                    key={subCat._id}
                    className="transition-all hover:bg-gray-300 px-4 py-2 cursor-pointer"
                  >
                    {subCat.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full block md:hidden mt-4 px-4 relative">
        <input
          type="text"
          className="w-full border border-slate-900 py-1.5 pl-3 rounded-md focus:outline-none"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default Navbar;
