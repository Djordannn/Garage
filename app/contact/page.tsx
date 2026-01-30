"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen px-[5%] py-10 font-sans">
      {/* Header */}
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Hubungi Kami</h1>
        <p className="text-lg text-gray-600">
          Ada pertanyaan atau ingin konsultasi? Tim kami siap membantu Anda
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Contact Information */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Telepon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">+62 812-3456-7890</p>
              <p className="mt-2 text-sm text-gray-500">
                Senin - Jumat, 08:00 - 17:00
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">info@garage.com</p>
              <p className="mt-2 text-sm text-gray-500">
                Kami balas dalam 24 jam
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Alamat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Jl. Contoh No. 123</p>
              <p className="text-gray-700">Jakarta, Indonesia</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
