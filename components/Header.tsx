import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        {/* <h1 className="texy-bold font-xl">Atlas AI</h1> */}
        <h1 className="text-bold text-xl px-4 py-2">Atlas AI</h1>

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
