import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "lucide-react";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="px-[5%] mt-8 bg-[#2d2d2d] text-[#ffff] py-6 text-center">
      <h2 className="text-3xl font-semibold">
        Hubungi dan pantau info kami di sosial media!
      </h2>
      <p>
        Jangan ragu untuk menghubungi, kami siap membantu dan merespon secepat
        mungkin
      </p>
      <div className="flex gap-4 justify-center mt-4">
        <Button variant={"outline"} className="bg-transparent rouneded-lg">
          <IoLogoWhatsapp size={24} />
        </Button>
        <Button variant={"outline"} className="bg-transparent rouneded-lg">
          <Instagram size={24} />
        </Button>
        <Button variant={"outline"} className="bg-transparent rouneded-lg">
          <Facebook size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Footer;
