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
import { Clock, Gauge } from "lucide-react";

import contentfulClient from "./lib/contentfulClient";
import { TypeImgAsset } from "./types/galleryCms";
import { TypeGarageSkeleton } from "./types/typeGarage";
import { Entry } from "contentful";

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
      <div className="mt-6">
        <Carousel plugins={[Autoplay({ delay: 5000 })]}>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <img
                  src="https://i.pinimg.com/736x/7d/e0/f4/7de0f4c59fca6e3d5e3ec82afb2489e5.jpg"
                  className="h-64 w-full bg-cover rounded-lg border-none"
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
                  className="aspect-[4/3] rounded-t-lg object-cover"
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
                    <Gauge /> {value.fields.jalanKilometer}
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
