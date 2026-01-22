"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsUpDown } from "lucide-react";

const jenis_mobil = [
  {
    value: "toyota",
    label: "toyota",
  },
  {
    value: "mitsubishi",
    label: "mitsubishi",
  },
  {
    value: "daihatsu",
    label: "daihatsu",
  },
  {
    value: "honda",
    label: "honda",
  },
  {
    value: "hyundai",
    label: "hyundai",
  },
];

export function AppSidebar() {
  const [openType, setOpenType] = React.useState(false);
  const [value, setValue] = React.useState("");

  const [openPlat, setOpenPlat] = React.useState(false);
  const [valuePlat, setValuePlat] = React.useState("");

  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="text-2xl font-bold p-4">Filters</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <Popover open={openType} onOpenChange={setOpenType}>
            <h2>Jenis Mobil</h2>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="justify-between mb-4"
                aria-expanded={openType}
              >
                {value ? value : "..."}
                <ChevronsUpDown />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandList>
                  <CommandEmpty>No car brand found.</CommandEmpty>
                  <CommandGroup>
                    {jenis_mobil.map((car) => (
                      <CommandItem
                        key={car.value}
                        value={car.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setOpenType(false);
                        }}
                      >
                        {car.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </SidebarGroup>
        <SidebarGroup>
          <Popover open={openPlat} onOpenChange={setOpenPlat}>
            <h2>Jenis Mobil</h2>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="justify-between mb-4"
                aria-expanded={openPlat}
              >
                {valuePlat ? valuePlat : "..."}
                <ChevronsUpDown />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandList>
                  <CommandEmpty>No car brand found.</CommandEmpty>
                  <CommandGroup>
                    {jenis_mobil.map((car) => (
                      <CommandItem
                        key={car.value}
                        value={car.value}
                        onSelect={(currentValue) => {
                          setValuePlat(
                            currentValue === valuePlat ? "" : currentValue
                          );
                          setOpenPlat(false);
                        }}
                      >
                        {car.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
