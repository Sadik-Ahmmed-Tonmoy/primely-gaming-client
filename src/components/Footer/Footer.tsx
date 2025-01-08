/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const alphabetsArr = ["B", "L", "U", "", "P", "R", "I", "M", "L", "Y"];

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className=" w-full ">
        <div
          className="relative h-[370px]"
          style={{
            clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
          }}
        >
          <div className="relative h-[calc(100vh+370px)] -top-[100vh]">
            <div className="h-[370px] sticky top-[calc(100vh-370px)]">
              <div className="relative h-full sm:pt-14 pt-8 " ref={container}>
                <div className="sm:container  px-4 mx-auto">
                  <div className="md:flex justify-between gap-2 w-full mb-3 sm:mb-6">
                    <div className="w-full">
                      <h1 className="md:text-4xl text-2xl font-semibold">
                        Let&lsquo;s do great work together
                      </h1>
                      <div className="md:py-4 ">
                        <div className="hidden xs:flex items-center font-bold overflow-hidden">
                          {alphabetsArr?.map((item, index) => (
                            <div key={index}>
                              <motion.p
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                // viewport={{ once: false, amount: 0.6 }}
                                viewport={{ once: false }}
                                transition={{
                                  type: "spring",
                                  stiffness: 150,
                                  damping: 11,
                                  duration: 0.3,
                                  delay: index * 0.1,
                                }}
                                className={`text-primary-light  xs:text-6xl sm:text-7xl md:text-7xl xl:text-9xl italic ${
                                  item === "" ? "w-3 xs:w-5 sm:w-7 md:w-10" : ""
                                }`} // Add space for empty string
                              >
                                {item}
                              </motion.p>
                            </div>
                          ))}
                        </div>
                        <p className="block xs:hidden text-primary-light font-bold italic text-4xl">
                          BLU PRIMLY
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-10">
                      <ul>
                        <li className="text-2xl pb-2  font-semibold">
                          SITEMAP
                        </li>
                        <li className="text-xl font-medium">
                          <Link href="/">Home</Link>
                        </li>
                        <li className="text-xl font-medium">
                          <Link href="/about">About us</Link>
                        </li>
                        <li className="text-xl font-medium">
                          <Link href="/services">Our Services</Link>
                        </li>

                        <li className="text-xl font-medium">
                          <Link href="/projects">Projects</Link>
                        </li>
                        <li className="text-xl font-medium">
                          <Link href="/blogs">Blogs</Link>
                        </li>
                        <li className="text-xl font-medium">
                          <Link href="/contact-us">Contact</Link>
                        </li>
                      </ul>
                      <ul>
                        <li className="text-2xl pb-2  font-semibold">SOCIAL</li>
                        <li className="text-xl font-medium">
                          <a
                            href="https://www.linkedin.com/company/next-codez/"
                            target="_blank"
                            className="underline"
                          >
                            LinkedIn
                          </a>
                        </li>
                        <li className="text-xl font-medium">
                          <a
                            href="https://twitter.com/NextCodez"
                            target="_blank"
                            className="underline"
                          >
                            Twitter
                          </a>
                        </li>
                        <li className="text-xl font-medium">
                          <a
                            href="https://www.instagram.com/nextcodez/"
                            target="_blank"
                            className="underline"
                          >
                            Instagram
                          </a>
                        </li>
                        <li className="text-xl font-medium">
                          <a
                            href="https://www.facebook.com/nextcodezz"
                            target="_blank"
                            className="underline"
                          >
                            Facebook
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex md:flex-row flex-col-reverse border-t-2 gap-3 justify-between py-2">
                    <span className="font-medium">
                      &copy; 2023 NextCodez. All Rights Reserved.
                    </span>
                    <a href="#" className="font-semibold">
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
