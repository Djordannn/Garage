"use client";

import React from "react";
import { useParams } from "next/navigation";
import contentfulClient from "@/app/lib/contentfulClient";
import { TypeGarageAsset, TypeGarageSkeleton } from "@/app/types/typeGarage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar, Clock, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";

const getDetail = async (slug: string) => {
  try {
    const res = await contentfulClient.getEntries<TypeGarageSkeleton>({
      content_type: "garage",
      "fields.slug[match]": slug,
    });
    console.log(res.items[0]);

    return res.items[0] || null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const DetailPage = () => {
  const { slug } = useParams();
  const [detail, setDetail] = React.useState<TypeGarageAsset | null>(null);
  const [data, setData] = React.useState<TypeGarageSkeleton[]>([]);

  const fetchdata = async () => {
    try {
      const res = await contentfulClient.getEntries<TypeGarageSkeleton>({
        content_type: "garage",
      });
      setData(res.items);
      console.log("data : ", res.items);
    } catch (error) {
      console.log("ërror from fetch data contentful", error);
    }
  };

  const formatToRupiah = (amount: string) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  React.useEffect(() => {
    fetchdata();
    if (slug) {
      getDetail(slug as string).then(setDetail);
    }
  }, [slug]);

  return (
    <div className="grid grid-cols-2 px-[5%] mt-6 gap-6">
      <Carousel>
        <CarouselContent className="">
          {detail?.fields.image?.map(
            (image: TypeGarageAsset, index: number) => (
              <CarouselItem key={index}>
                <img
                  src={`https:${image.fields.file.url}`} // Add "https:" to ensure proper URL format
                  alt={image.fields.title}
                  width={500} // Set the width for your image
                  height={300} // Set the height for your image
                  className="object-cover w-full h-[400px] rounded-lg" // Styling the images
                />
              </CarouselItem>
            ),
          )}
        </CarouselContent>
        <div className="flex gap-3  mt-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>

      <div>
        <div>
          <h2 className="text-4xl font-bold">{detail?.fields.title}</h2>
          <p className="mt-2 text-2xl font-semibold">
            {formatToRupiah(detail?.fields.price)}
          </p>
          <p className="text-sm mt-2 w-[80%]">{detail?.fields.description}</p>
          <div className="mt-4">
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2 ">
                <Gauge />{" "}
                <p className="text-lg">{detail?.fields.jalanKilometer} km</p>
              </li>
              <li className="flex gap-2 ">
                <Clock />{" "}
                <p className="text-lg">{detail?.fields.tahunProduksi}</p>
              </li>
              <li className="flex gap-2 ">
                <Calendar />{" "}
                <p className="text-lg">
                  {detail?.fields.pajak === true ? "Pajak hidup" : "Pajak mati"}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Button className="mt-[7rem] rounded-2xl hover:bg-zinc-700 hover:text-zinc-200">
            Hubungi Penjual
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
