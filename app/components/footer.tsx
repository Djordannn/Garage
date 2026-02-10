import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "lucide-react";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="mt-8 grid grid-cols-1 items-start gap-4 rounded-t-4xl bg-[#2d2d2d] px-[5%] py-6 text-[#ffff] md:grid-cols-5">
      <div className="md:col-span-3">
        <h2 className="mb-4">Logo</h2>
        <p className="w-[80%] text-[11px] text-zinc-400">
          Jangan ragu untuk menghubungi, kami siap membantu dan merespon secepat
          mungkin
        </p>
        <div className="mt-4 flex gap-4">
          <Button className="rounded-full bg-white text-black">
            <IoLogoWhatsapp size={24} />
          </Button>
          <Button className="rounded-full bg-white text-black">
            <Instagram size={24} />
          </Button>
          <Button className="rounded-full bg-white text-black">
            <Facebook size={24} />
          </Button>
        </div>
      </div>
      <div>
        <h2 className="mb-4">Links</h2>
        <ul className="flex flex-col gap-2 text-sm text-zinc-400">
          <li><a href="/">Beranda</a></li>
          <li><a href="/katalog">Katalog</a></li>
          <li><a href="/titip_jual">Titip Jual</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <h2 className="mb-4">Contact</h2>
        <ul className="flex flex-col gap-2 text-sm text-zinc-400">
          <li>+62 813 522 1337</li>
          <li>example@gmail.com</li>
          <li>Jln.pangeran diponegoro</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
