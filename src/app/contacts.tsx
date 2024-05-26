"use client";

import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { UserIcon, IdentificationIcon } from "@heroicons/react/24/solid";
import Image from "next/image";


export function Contacts() {
  return (
    <section id="contacts" className="px-10 !py-20">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ">
            <IdentificationIcon className="h-6 w-6" />
          </div>
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Contact
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-10xl text-center !text-gray-600"
          >
            Feel free to reach out to us with any questions or inquiries at{" "}
            <a href="mailto:dionisio.magalhaes@thesmartfeeder.com" style={{ color: "blue" }}>dionisio.magalhaes@thesmartfeeder.com</a>. <br />
             We are here to help!
          </Typography>
        </div>
      </div>
    </section>
  );
}
export default Contacts;
