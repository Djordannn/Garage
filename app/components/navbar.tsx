import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

export default function Navbar() {
  return (
    <div className="px-[5%] font-sans">
      <nav className="grid grid-cols-2 items-center sm:grid-cols-2 md:pt-6">
        <Link href="/">
          <Image src={logo} alt="BMW" className="w-[150px]" />
        </Link>
        <div className="hidden gap-6 font-medium text-gray-700 sm:justify-end lg:flex">
          <Link href="/">Beranda</Link>
          <Link href="/katalog">Katalog</Link>
          <Link href="/titip_jual">Titip Jual</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="z-50 flex justify-end lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"outline"}>
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 rounded-lg bg-white p-2 shadow-lg">
              <DropdownMenuItem>
                <Link href="/">Beranda</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/katalog">Katalog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/titip_jual">Titip Jual</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
}
