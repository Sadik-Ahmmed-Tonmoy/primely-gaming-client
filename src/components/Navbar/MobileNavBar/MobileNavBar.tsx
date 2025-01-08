"use client";
import logo from "@/assets/game logo.jpeg";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";

export default function MobileNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      className="!py-1 z-[999999999]"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* mobile burger menu start */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      {/* mobile burger menu end */}

      {/*Mobile Logo start */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <div className="">
            <Link href={"/"}>
              <Image
                style={{ filter: "brightness(2)" }}
                src={logo}
                height={60}
                width={60}
                alt="logo"
              />
            </Link>
          </div>
        </NavbarBrand>
      </NavbarContent>
      {/*Mobile Logo end */}

      {/* tab menu start */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <div className="me-5">
            <Link href={"/"}>
              <Image
                style={{ filter: "brightness(2)" }}
                src={logo}
                height={60}
                width={60}
                alt="logo"
              />
            </Link>
          </div>
        </NavbarBrand>
        <NavbarItem>
          {/* dorp down menus start */}
          {/* <DropDownMenus /> */}
          <div className="flex items-center gap-6">
            <div className={` hover:text-primary cursor-pointer`}>
              <span className="text-sm">Tournaments</span>
            </div>
            <div className={` hover:text-primary cursor-pointer`}>
              <span className=" text-sm">Matchfinder</span>
            </div>
            <div className={` hover:text-primary cursor-pointer`}>
              <span className="relative text-sm">More</span>
            </div>
          </div>
          {/* dorp down menus end */}
        </NavbarItem>
      </NavbarContent>
      {/* tab menu end */}

      {/* right side start */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <button
            className={` hover:text-primary flex flex-col justify-center items-center`}
          >
            <BsPerson className={`w-6 h-6 `} />
            <p className=" text-xs sm:text-sm">Account</p>
          </button>
        </NavbarItem>
      </NavbarContent>
      {/* right side end */}

      {/* mobile menu items start */}
      <NavbarMenu>
        <div>
          <div className="flex flex-col gap-6 py-4">
            <div className={` hover:text-primary cursor-pointer`}>
              <span className="text-sm">Tournaments</span>
            </div>
            <div className={` hover:text-primary cursor-pointer`}>
              <span className=" text-sm">Matchfinder</span>
            </div>
            <div className={` hover:text-primary cursor-pointer`}>
              <span className="relative text-sm">More</span>
            </div>
          </div>
        </div>
      </NavbarMenu>
      {/* mobile menu items end */}
    </Navbar>
  );
}
