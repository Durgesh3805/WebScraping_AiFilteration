import Image from "next/image";
import Link from "next/link";
import NavbarClient from "./NavbarClient";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between px-6 md:px-16 py-4 shadow-sm relative z-50 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/gj_logo_new.svg"
          alt="GrabJobs Logo"
          width={160}
          height={48}
          className="cursor-pointer"
        />
      </div>

      {/* Client Side Part */}
      <NavbarClient />
    </nav>
  );
}
