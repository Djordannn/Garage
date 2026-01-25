import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Gauge } from "lucide-react";
const Katalog = () => {
  return (
    <div className="px-[5%]">
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
};

export default Katalog;
