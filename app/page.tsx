"use client";

import React from "react";
import Navbar from "./components/navbar";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Gauge } from "lucide-react";

import contentfulClient from "./lib/contentfulClient";
import { TypeImgAsset } from "./types/galleryCms";
import { TypeGarageSkeleton } from "./types/typeGarage";
import { Entry } from "contentful";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";

export default function Home() {
  const [garageData, setGarageData] = React.useState<
    Entry<TypeGarageSkeleton>[]
  >([]);

  const fetchdata = async () => {
    try {
      const res = await contentfulClient.getEntries<TypeGarageSkeleton>({
        content_type: "garage",
      });
      setGarageData(res.items);
      console.log("data : ", res.items);
    } catch (error) {
      console.log("ërror from fetch data contentful", error);
    }
  };

  const formatToRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  React.useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className=" font-sans px-[5%]">
      <div>
        <div className=" relative flex items-center gap-2">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center">
            <Button className="text-lg rounded-2xl text-gray-700 hover:bg-transparent  bg-transparent ">
              <IoSearchOutline />
            </Button>
          </div>
          <Input
            className="rounded-2xl pl-[2.5rem]"
            placeholder="Search your car..."
          ></Input>
          {/* 
          <SidebarTrigger /> */}
        </div>
        <div className="flex gap-2 mt-4">
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
          <Button
            className="rounded-2xl hover:bg-zinc-700 hover:text-zinc-200"
            variant={"outline"}
          >
            Daihatsu
          </Button>
        </div>
      </div>
      <div className="mt-6">
        <Carousel plugins={[Autoplay({ delay: 5000 })]}>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <img
                  src="https://i.pinimg.com/736x/7d/e0/f4/7de0f4c59fca6e3d5e3ec82afb2489e5.jpg"
                  className="h-[400px] w-full bg-cover rounded-lg border-none"
                  style={{
                    backgroundImage: `url('/carousel/carousel-${
                      index + 1
                    }.jpg')`,
                  }}
                ></img>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-6">
        {garageData.map((value, index) => (
          <a key={index} href={`katalog/${value.fields.slug}`}>
            <Card className="p-0">
              <CardHeader className="p-0">
                <img
                  src={`https:${
                    (value.fields.thumbnail as TypeImgAsset)?.fields.file.url
                  }`}
                  alt="learn"
                  className="w-full h-[400px]  rounded-t-lg object-cover"
                />
              </CardHeader>
              <CardContent className="pb-4">
                <h2 className="text-lg font-semibold">
                  {formatToRupiah(value.fields.price)}
                </h2>
                {value.fields.title && typeof value.fields.title === "string"
                  ? value.fields.title
                  : "No Title"}
                <div className="flex gap-2 mt-2 text-gray-600">
                  <Badge variant={"outline"} className="flex items-center ">
                    <Clock /> {value.fields.tahunProduksi}
                  </Badge>
                  <Badge variant={"outline"} className="flex items-center ">
                    <Gauge /> {value.fields.jalanKilometer} km
                  </Badge>
                  <Badge variant={"outline"} className="flex items-center ">
                    <Calendar />{" "}
                    {value.fields.pajak === true ? "Pajak hidup" : "Pajak mati"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
