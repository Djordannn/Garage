"use client";

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

export default function Home() {
  return (
    <div className=" font-sans px-[5%]">
      <Navbar />
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
        {Array.from({ length: 8 }).map((_, index) => (
          <Card className="p-0" key={index}>
            <CardHeader className="p-0">
              <img
                src="https://i.pinimg.com/736x/c0/c0/91/c0c091596d3d0fe27741752ba7c1a8e6.jpg"
                alt=""
                className=" w-full object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="pb-4">
              <h2 className="text-lg font-semibold">Rp 399.000.000</h2>
              <p>Honda Civic Ferio</p>
              <div className="flex gap-2 mt-2 text-gray-600">
                <Badge variant={"outline"} className="flex items-center ">
                  <Clock /> 2016
                </Badge>
                <Badge variant={"outline"} className="flex items-center ">
                  <Gauge /> 20000 km
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
