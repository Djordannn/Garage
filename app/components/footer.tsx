import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "lucide-react";
import React from "react";
import { IoLogoWhatsapp, IoMail, IoMap } from "react-icons/io5";

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
          <li>
            <a href="/">Beranda</a>
          </li>
          <li>
            <a href="/katalog">Katalog</a>
          </li>
          <li>
            <a href="/titip_jual">Titip Jual</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-4">Contact</h2>
        <ul className="flex flex-col gap-2 text-sm text-zinc-400">
          <li>
            <a
              href="https://wa.me/628135221337"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <IoLogoWhatsapp />
              +62 881-3522-1337
            </a>
          </li>
          <li>
            <a
              href="mailto:narasiautocars@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <IoMail />
              narasiautocars@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/place/Narasi+Autocars/@-2.4891458,111.8161986,17z/data=!3m1!4b1!4m6!3m5!1s0x2e08890000cb26d5:0xa129d651ae06c545!8m2!3d-2.4891458!4d111.8187789!16s%2Fg%2F11zb1y7drk?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <IoMap />
              Pangkalan Dewa SP 1
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
