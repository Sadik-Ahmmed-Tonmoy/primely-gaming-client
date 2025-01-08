import React from "react";
import { BsPerson } from "react-icons/bs";
import styles from "./PCNavBar.module.css";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import logo from "@/assets/game logo.jpeg";
import Image from "next/image";
import Link from "next/link";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GiCornerExplosion } from "react-icons/gi";

const PCNavBar = () => {
  return (
    <>
      <div className="py-1 flex items-center justify-between container">
        <div>
          <Link href={"/"}>
            <Image
              style={{ filter: "brightness(2)" }}
              src={logo}
              height={80}
              width={80}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <div
            className={`${styles.accountButton} ${styles.textHoverEffect} hover:text-primary cursor-pointer`}
          >
            <Link href={"/tournament"}>
              <span className="relative text-sm">
                Tournaments
                <span className={styles.text}>Tournaments</span>
              </span>
            </Link>
          </div>
          <div className="relative group py-2 ">
            <div
              className={`${styles.accountButton} ${styles.textHoverEffect} hover:text-primary cursor-pointer`}
            >
              <span className="relative text-sm">
                Matchfinder
                <span className={styles.text}>Matchfinder</span>
              </span>
            </div>

            {/* Dropdown menu */}
            <div className="absolute left-0 mt-2 w-40 bg-black  border border-gray-300 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 ease-in-out">
              <ul className="py-2">
                <Link href={"/cash-match"}>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:scale-105 hover:text-primary  transform transition-all duration-150 flex items-center gap-2">
                    <RiMoneyDollarCircleLine size={22} /> CASH
                  </li>
                </Link>
                <Link href={"/xp-match"}>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:scale-105 hover:text-primary transform transition-all duration-150 flex items-center gap-2">
                    <GiCornerExplosion size={22} /> XP
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div
            className={`${styles.accountButton} ${styles.textHoverEffect} hover:text-primary cursor-pointer`}
          >
            <span className="relative text-sm">
              More
              <span className={styles.text}>More</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button
            className={`${styles.accountButton} ${styles.textHoverEffect} hover:text-primary`}
          >
            <BsPerson className={`w-6 h-6 `} />
            <span className="relative text-sm">
              Account
              <span className={styles.text}>Account</span>
            </span>
          </button>
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
};

export default PCNavBar;
