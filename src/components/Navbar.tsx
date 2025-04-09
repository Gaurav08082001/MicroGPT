"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-0 inset-x-0 z-50 bg-black opacity-70 px-4", className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center justify-between w-full">
          <Image src="/logo.png"  className="transition-transform duration-500 hover:scale-110" alt="Hero Image" width={150} height={80} />
          {/* <p className="text-xl font-extrabold text-white">MICROGPT</p> */}

          <div className="flex gap-8 font-bold text-white">
            <Link href="/">
              <MenuItem setActive={setActive} active={active} item="Home" />
            </Link>
            <Link href="/feature">
              <MenuItem setActive={setActive} active={active} item="Features" />
            </Link>
            <Link href="/innovation">
              <MenuItem setActive={setActive} active={active} item="Innovation" />
            </Link>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="flex flex-col space-y-4 text-l">
                <HoveredLink href="/product">Dashboard</HoveredLink>
                <HoveredLink href="/product">Micro Editor</HoveredLink>
                <HoveredLink href="/product">Editor Plugin</HoveredLink>
                <HoveredLink href="/product">Extension</HoveredLink>
                <HoveredLink href="/product">Micro Alerts</HoveredLink>
              </div>
            </MenuItem>
            <Link href="/whitepaper">
              <MenuItem setActive={setActive} active={active} item="Whitepaper" />
            </Link>
            <Link href="/pitchdeck">
              <MenuItem setActive={setActive} active={active} item="Pitchdeck" />
            </Link>
            <Link href="/impression">
              <MenuItem setActive={setActive} active={active} item="Impression" />
            </Link>
          </div>

          {/* Right: Buttons */}
          <div className="flex gap-3">
            <button className="font-bold bg-white text-black px-4 py-2 rounded-xl hover:bg-black hover:text-white transition cursor-pointer">
              Download
            </button>
            <button className="font-bold border-2 border-purple-500 px-4 py-2 rounded-xl text-white hover:bg-purple-500 transition cursor-pointer">
              Buy $Micro
            </button>
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;

