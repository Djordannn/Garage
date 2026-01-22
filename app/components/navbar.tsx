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
    <div className="font-sans">
      <nav className="grid grid-cols-3 sm:grid-cols-2 items-center py-6">
        <div>
          <Image src={logo} alt="BMW" className="w-[150px]" />
        </div>
        <div className="flex gap-6 sm:justify-end text-gray-700 font-medium">
          <Link href="/">Beranda</Link>
          <Link href="/katalog">Katalog</Link>
          <Link href="/titip_jual">Titip Jual</Link>
          <Link href="/contact">Kontak</Link>
        </div>
        <div className=" relative sm:col-span-2 flex items-center gap-2">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center">
            <Button className="text-lg rounded-2xl text-gray-700  bg-transparent ">
              <IoSearchOutline />
            </Button>
            <p className="text-zinc-400 text-sm">Search your car...</p>
          </div>
          <Input className="rounded-2xl"></Input>
          {/* 
          <SidebarTrigger /> */}
        </div>
      </nav>
      <div className="flex gap-2">
        <Button
          className="rounded-2xl hover:bg-zinc-700 hover:text-zinc-200"
          variant={"outline"}
        >
          Toyota
        </Button>
        <Button
          className="rounded-2xl hover:bg-zinc-700 hover:text-zinc-200"
          variant={"outline"}
        >
          Honda
        </Button>
        <Button
          className="rounded-2xl hover:bg-zinc-700 hover:text-zinc-200"
          variant={"outline"}
        >
          Mitsubishi
        </Button>
        <Button
          className="rounded-2xl hover:bg-zinc-700 hover:text-zinc-200"
          variant={"outline"}
        >
          Suzuki
        </Button>
      </div>
    </div>
  );
}
