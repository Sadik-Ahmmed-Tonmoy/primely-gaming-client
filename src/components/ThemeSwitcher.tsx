// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const {  setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setTheme("dark")
  }, []);

  // if(!mounted) return <Switch/>
  if (!mounted) return <IoSunnyOutline size={25} className="cursor-pointer" />;

  return (
    <div>
      {/* {theme === "dark" ? (
        <IoSunnyOutline size={28} onClick={() => setTheme("light")} className="cursor-pointer hover:scale-105 transform transition-all hover:" />
      ) : (
        <IoMoonOutline size={22} onClick={() => setTheme("dark")} className="cursor-pointer" />
      )} */}
    </div>
  );
}
