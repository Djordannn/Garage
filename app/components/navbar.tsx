import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Funnel } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Navbar() {
  return (
    <div className="font-sans px-[5%]">
      <nav className="grid grid-cols-2 sm:grid-cols-2 items-center pt-6">
        <Link href="/">
          <Image src={logo} alt="BMW" className="w-[150px]" />
        </Link>
        <div className="flex gap-6 sm:justify-end text-gray-700 font-medium">
          <Link href="/">Beranda</Link>
          <Link href="/katalog">Katalog</Link>
          <Link href="/titip_jual">Titip Jual</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
}
