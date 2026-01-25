"use client";

import React from "react";
import { useParams } from "next/navigation";
import contentfulClient from "@/app/lib/contentfulClient";
import { TypeGarageAsset, TypeGarageSkeleton } from "@/app/types/typeGarage";

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
  }
};

const DetailPage = () => {
  const { slug } = useParams();
  const [detail, seDetail] = React.useState<TypeGarageAsset | null>(null);
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

  React.useEffect(() => {
    fetchdata();
    if (slug) {
      getDetail(slug as string).then(setDetail);
    }
  });

  return <div>{detail?.fields.title}</div>;
};

export default DetailPage;
