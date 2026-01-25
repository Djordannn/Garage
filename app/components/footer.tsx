import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "lucide-react";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="px-[5%] mt-8 bg-[#2d2d2d] text-[#ffff] py-6 grid grid-cols-5 items-start">
      <div className="col-span-3">
        <h2 className="mb-4">Logo</h2>
        <p className="text-[11px] w-[80%] text-zinc-400">
          Jangan ragu untuk menghubungi, kami siap membantu dan merespon secepat
          mungkin
        </p>
        <div className="flex gap-4 mt-4">
          <Button className="bg-white rounded-full text-black">
            <IoLogoWhatsapp size={24} />
          </Button>
          <Button className="bg-white rounded-full text-black">
            <Instagram size={24} />
          </Button>
          <Button className="bg-white rounded-full text-black">
            <Facebook size={24} />
          </Button>
        </div>
      </div>
      <div>
        <h2 className="mb-4">Links</h2>
        <ul className="text-sm text-zinc-400 flex flex-col gap-2">
          <li>Beranda</li>
          <li>Katalog</li>
          <li>Titip Jual</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>Contact</div>
    </div>
  );
};

export default Footer;
