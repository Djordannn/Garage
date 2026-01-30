"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Gauge } from "lucide-react";

import contentfulClient from "./lib/contentfulClient";
import { TypeImgAsset } from "./types/galleryCms";
import { TypeGarageSkeleton } from "./types/typeGarage";
import { Entry } from "contentful";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const [garageData, setGarageData] = React.useState<
    Entry<TypeGarageSkeleton>[]
  >([]);
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null,
  );
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [searchActive, setSearchActive] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const categories = ["Toyota", "Honda", "Mitsubishi", "Suzuki", "Daihatsu"];

  const fetchdata = async () => {
    try {
      setIsLoading(true);
      const res = await contentfulClient.getEntries<TypeGarageSkeleton>({
        content_type: "garage",
      });
      setGarageData(res.items);
      console.log("data : ", res.items);
    } catch (error) {
      console.log("ërror from fetch data contentful", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatToRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  const handleSearch = () => {
    setSearchActive(true);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchActive(false);
  };

  const filteredData = garageData.filter((item) => {
    const matchCategory = selectedCategory
      ? typeof item.fields.merekMobil === "string" &&
        item.fields.merekMobil.includes(selectedCategory)
      : true;

    const matchSearch = searchActive
      ? typeof item.fields.title === "string" &&
        item.fields.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return matchCategory && matchSearch;
  });

  React.useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="overflow-y-hidden px-[5%] font-sans">
      <div>
        <div className="relative mt-4 flex items-center gap-2">
          <div className="absolute top-1/2 left-0 flex -translate-y-1/2 items-center">
            <Button
              onClick={handleSearch}
              className="rounded-2xl bg-transparent text-lg text-gray-700 hover:bg-transparent"
            >
              <IoSearchOutline />
            </Button>
          </div>
          <Input
            className="rounded-2xl pl-[2.5rem]"
            placeholder="Search your car..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          ></Input>
          {searchActive && (
            <Button
              onClick={handleClearSearch}
              variant="outline"
              className="rounded-2xl"
            >
              Clear
            </Button>
          )}
        </div>
        <div className="categories-container scrollbar-hidden mt-4 flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category ? null : category,
                )
              }
              className="rounded-2xl hover:bg-zinc-700 hover:text-zinc-200"
              variant={selectedCategory === category ? "default" : "outline"}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <Carousel plugins={[Autoplay({ delay: 5000 })]}>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <img
                  src="https://i.pinimg.com/736x/7d/e0/f4/7de0f4c59fca6e3d5e3ec82afb2489e5.jpg"
                  alt="Carousel image"
                  className="h-[200px] w-full rounded-2xl bg-cover bg-center object-cover sm:h-[250px] lg:h-[400px]"
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
      <div className="mt-10">
        <div className="text-center">
          <h2 className="mb-4pb-2 text-2xl font-semibold">Cari mobil anda</h2>
          <div className="mx-auto mt-2 mb-6 w-[80px] rounded-full border-[1px] border-black"></div>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index}>
                <Skeleton className="aspect-video w-full" />
                <Skeleton className="mt-2 h-4 w-1/2" />
                <Skeleton className="mt-2 h-4 w-1/3" />
              </div>
            ))
          ) : filteredData.length > 0 ? (
            filteredData.map((value, index) => (
              <a
                key={index}
                href={`katalog/${value.fields.slug}`}
                className="transition-shadow hover:shadow-lg"
              >
                <Card className="flex h-full flex-col p-2">
                  <CardHeader className="p-0">
                    <img
                      src={`https:${
                        (value.fields.thumbnail as TypeImgAsset)?.fields.file
                          .url
                      }`}
                      alt={
                        (value.fields.title as any)?.toString() || "Car image"
                      }
                      className="h-[150px] w-full rounded-lg object-cover object-center lg:h-[250px]"
                    />
                  </CardHeader>
                  <CardContent className="mt-[-1rem] flex flex-1 flex-col justify-between p-0">
                    <div>
                      <CardTitle>
                        {formatToRupiah(
                          typeof value.fields.price === "string"
                            ? parseInt(value.fields.price)
                            : 0,
                        )}
                      </CardTitle>
                      {value.fields.title &&
                      typeof value.fields.title === "string" ? (
                        <CardDescription>{value.fields.title}</CardDescription>
                      ) : (
                        "No Title"
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-1 p-0">
                    <Badge variant={"outline"} className="flex items-center">
                      <Clock />{" "}
                      {typeof value.fields.tahunProduksi === "number" ||
                      typeof value.fields.tahunProduksi === "string"
                        ? value.fields.tahunProduksi
                        : ""}
                    </Badge>
                    <Badge variant={"outline"} className="flex items-center">
                      <Gauge />{" "}
                      {typeof value.fields.jalanKilometer === "number" ||
                      typeof value.fields.jalanKilometer === "string"
                        ? value.fields.jalanKilometer
                        : ""}{" "}
                      km
                    </Badge>
                    <Badge variant={"outline"} className="flex items-center">
                      <Calendar />{" "}
                      {value.fields.pajak === true
                        ? "Pajak hidup"
                        : "Pajak mati"}
                    </Badge>
                  </CardFooter>
                </Card>
              </a>
            ))
          ) : (
            <p className="mt-6 text-center text-gray-500">
              Tidak ada mobil yang ditemukan
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
