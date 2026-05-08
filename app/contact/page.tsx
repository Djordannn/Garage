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
          <a
            href="https://wa.me/628135221337"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Telepon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">+62 813-5221-337</p>
                <p className="mt-2 text-sm text-gray-500">
                  Senin - Jumat, 08:00 - 17:00
                </p>
              </CardContent>
            </Card>
          </a>

          <a
            href="mailto:narasiautocars@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">narasiautocars@garage.com</p>
                <p className="mt-2 text-sm text-gray-500">
                  Kami balas dalam 24 jam
                </p>
              </CardContent>
            </Card>
          </a>

          <a
            href="https://www.google.com/maps/place/Narasi+Autocars/@-2.4891458,111.8161986,17z/data=!3m1!4b1!4m6!3m5!1s0x2e08890000cb26d5:0xa129d651ae06c545!8m2!3d-2.4891458!4d111.8187789!16s%2Fg%2F11zb1y7drk?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Alamat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Pangkalan Dewa SP 1</p>
                <p className="mt-2 text-sm text-gray-500">RT 19 / RW 02</p>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </div>
  );
}
