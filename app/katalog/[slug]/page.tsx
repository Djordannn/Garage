"use client";

import React from "react";
import { useParams } from "next/navigation";
import contentfulClient from "@/app/lib/contentfulClient";
import { TypeGarageAsset, TypeGarageSkeleton } from "@/app/types/typeGarage";
import { TypeImgAsset } from "@/app/types/galleryCms";
import { Entry } from "contentful";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar, Clock, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const getDetail = async (slug: string) => {
  try {
    const res = await contentfulClient.getEntries<TypeGarageSkeleton>({
      content_type: "garage",
      "fields.slug": slug,
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
  const [data, setData] = React.useState<Entry<TypeGarageSkeleton>[]>([]);

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
    }).format(Number(amount));
  };

  // Ekstrak merek dari judul (kata pertama biasanya merek)
  const getCarBrand = (title: string) => {
    return title?.split(" ")[0].toLowerCase() || "";
  };

  // Filter saran mobil berdasarkan merek yang sama dan exclude mobil yang sedang dilihat
  const suggestedCars = detail
    ? data.filter((item) => {
        const detailBrand = getCarBrand(
          typeof detail.fields.title === "string" ? detail.fields.title : "",
        );
        const itemBrand = getCarBrand(
          typeof item.fields.title === "string" ? item.fields.title : "",
        );
        return detailBrand === itemBrand && item.sys.id !== detail.sys.id;
      })
    : [];

  const onSubmit = (value: TypeGarageAsset | null) => {
    if (!detail) return;

    const phoneNumber = "628135221337";
    const text = `Halo, Saya ingin menanyakan tentang mobil ${value?.fields.title} yang Anda jual.
        `;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  React.useEffect(() => {
    fetchdata();
    if (slug) {
      getDetail(slug as string).then((entry) => {
        if (entry) {
          setDetail(entry as unknown as TypeGarageAsset);
        } else {
          setDetail(null);
        }
      });
    }
  }, [slug]);

  return (
    <div className="mt-6 px-[5%]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Carousel>
          <CarouselContent className="">
            {detail?.fields.image?.map(
              (image: { fields: { file: { url: string } } }, index: number) => (
                <CarouselItem key={index}>
                  <img
                    src={`https:${image.fields.file.url}`} // Add "https:" to ensure proper URL format
                    alt={`${detail.fields.title} image ${index}`}
                    width={500} // Set the width for your image
                    height={300} // Set the height for your image
                    className="h-[400px] w-full rounded-lg object-cover" // Styling the images
                  />
                </CarouselItem>
              ),
            )}
          </CarouselContent>
          <div className="mt-4 flex gap-3">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>

        <div>
          <div>
            <h2 className="text-4xl font-bold">{detail?.fields.title}</h2>
            <p className="mt-2 text-2xl font-semibold">
              {formatToRupiah(detail?.fields.price ? detail.fields.price : "0")}
            </p>
            <p className="mt-2 w-[80%] text-sm">{detail?.fields.description}</p>
            <div className="mt-4">
              <ul className="flex flex-col gap-3">
                <li className="flex gap-2">
                  <Gauge />{" "}
                  <p className="text-lg">{detail?.fields.jalanKilometer} km</p>
                </li>
                <li className="flex gap-2">
                  <Clock />{" "}
                  <p className="text-lg">{detail?.fields.tahunProduksi}</p>
                </li>
                <li className="flex gap-2">
                  <Calendar />{" "}
                  <p className="text-lg">
                    {detail?.fields.pajak === true
                      ? "Pajak hidup"
                      : "Pajak mati"}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Button
              onClick={() => onSubmit(detail)}
              className="mt-4 rounded-2xl hover:bg-zinc-700 hover:text-zinc-200 md:mt-[7rem]"
            >
              Hubungi Penjual
            </Button>
          </div>
        </div>
      </div>

      <div className="py-24">
        <h2 className="text-3xl font-bold">Detail Variasi</h2>
        <div>
          <ul className="mt-2">
            {detail?.fields.variasi ? (
              detail?.fields.variasi.map((value: string, idx: number) => (
                <li key={idx} className="list-disc text-lg">
                  {value}
                </li>
              ))
            ) : (
              <p className="list-disc text-lg">Tidak ada variasi tersedia</p>
            )}
          </ul>
        </div>
      </div>

      <div className="mt-12 pb-24">
        <h2 className="mb-6 text-3xl font-bold">Saran Mobil Serupa</h2>
        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
          {suggestedCars.length > 0 ? (
            suggestedCars.map((value, index) => (
              <a key={index} href={`/katalog/${value.fields.slug}`}>
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
                      className="h-[150px] w-full rounded-lg object-cover lg:h-[250px]"
                    />
                  </CardHeader>
                  <CardContent className="mt-[-1rem] flex flex-1 flex-col justify-between p-0">
                    <div>
                      <CardTitle>
                        {formatToRupiah(
                          typeof value.fields.price === "string"
                            ? value.fields.price
                            : "0",
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
            <p className="col-span-2 text-gray-500">
              Tidak ada saran mobil serupa
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
