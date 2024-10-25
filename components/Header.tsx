import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
      <div className="bg-[#f3f6f4] w-fit p-2 rounded">
  <Image
    src="https://www.shareicon.net/data/512x512/2016/05/06/760789_ai_512x512.png"
    alt="logo"
    height={20}
    width={20}
  />
</div>

        <h1 className="texy-bold font-xl">Not Toxic AI</h1>
      </Link>
      <div className="px-5 flex space-x-2 items-center">
        {/* <ThemeToggler/> */}
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
