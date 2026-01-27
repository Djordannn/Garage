"use client";

import {
  ComboboxItem,
  Combobox,
  ComboboxInput,
  ComboboxEmpty,
  ComboboxContent,
  ComboboxList,
} from "@/components/ui/combobox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import React from "react";

const formSchema = z.object({
  nama_mobil: z.string().min(1, "Nama mobil wajib diisi"),
  merek_mobil: z.string().min(1, "Merek mobil wajib diisi"),
  nomor_plat: z.string().min(1, "Nomor plat wajib diisi"),
  kilometer: z.string().min(1, "Kilometer wajib diisi"),
  tahun_pembuatan: z.string().min(1900, "Tahun pembuatan wajib diisi"),
  pajak_berlaku: z.string().min(1, "Pajak berlaku wajib diisi"),
  harga_jual: z.string().min(1, "Harga jual wajib diisi"),
  nomor_telp: z.string().min(1, "Nomor telp wajib diisi"),
});

const TitipJual = () => {
  const merek = ["Toyota", "Daihatsu", "Honda", "Mitsubishi", "Suzuki"];

  // form validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama_mobil: "",
      merek_mobil: "",
      nomor_plat: "",
      kilometer: "",
      tahun_pembuatan: "",
      pajak_berlaku: "",
      harga_jual: "",
      nomor_telp: "",
    },
  });

  return (
    <div className="pb-24 mt-4 px-[5%]">
      <div>
        <h1 className="text-4xl mb-4 font-semibold">
          Jual mobil kamu anti ribet, <br />
          kami yang urus!
        </h1>
      </div>
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Masukkan detail mobil kamu</FieldLegend>
            <FieldDescription>
              Cukup isikan detail mobil kamu, kami akan membantu menjualnya
              dengan <br />
              harga terbaik
            </FieldDescription>
          </FieldSet>
          <FieldGroup>
            <Controller
              name="nama_mobil"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Nama mobil</FieldLabel>
                  <Input {...field} placeholder="Contoh: Avanza G 2016"></Input>
                </Field>
              )}
            />
            <Controller
              name="merek_mobil"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Merek mobil</FieldLabel>
                  <Combobox>
                    <ComboboxInput placeholder="Pilih merek" {...field} />
                    <ComboboxContent>
                      <ComboboxList>
                        {merek.map((item) => (
                          <ComboboxItem key={item} value={item}>
                            {item}
                          </ComboboxItem>
                        ))}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </Field>
              )}
            />
            <Controller
              name="nomor_plat"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Nomor plat & kabupaten</FieldLabel>
                  <Input
                    placeholder="Contoh: KH - Kalimantan"
                    {...field}
                  ></Input>
                </Field>
              )}
            />
            <Controller
              name="kilometer"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Kilometer</FieldLabel>
                  <Input placeholder="Contoh: 20000" {...field}></Input>
                </Field>
              )}
            />
            <Controller
              name="tahun_pembuatan"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Tahun pembuatan</FieldLabel>
                  <Input placeholder="Contoh: 2016" {...field}></Input>
                </Field>
              )}
            />
            <Controller
              name="pajak_berlaku"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Pajak berlaku sampai</FieldLabel>
                  <Input
                    placeholder="Contoh: 20 Januari 2026"
                    {...field}
                  ></Input>
                </Field>
              )}
            />
            <Controller
              name="harga_jual"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Harga jual</FieldLabel>
                  <Input placeholder="Contoh: 150000000" {...field}></Input>
                </Field>
              )}
            />
            <Controller
              name="nomor_telp"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Nomor telp</FieldLabel>
                  <Input placeholder="Contoh: 08XXXXXXXXXX" {...field}></Input>
                </Field>
              )}
            />
            <Controller
              name="kilometer"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Kilometer</FieldLabel>
                  <Input placeholder="Contoh: 20000" {...field}></Input>
                </Field>
              )}
            />
          </FieldGroup>
        </FieldGroup>
        <Button className="mt-6  hover:bg-zinc-700 hover:text-zinc-200">
          Kirim
        </Button>
      </form>
    </div>
  );
};

export default TitipJual;
