"use client";

import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";


export function AboutUs() {
  return (
    <section id="about-us" className="px-10 !py-20">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ">
            <UserIcon className="h-6 w-6" />
          </div>
          <Typography variant="h2" color="blue-gray" className="mb-2">
            About Us
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-7xl text-center !text-gray-600"
          >
            At 301, our passion is breeding exceptional horses for show jumping and dressage.
            Located in Portugal, we take pride in our meticulous care and breeding practices, ensuring that each horse receives the highest quality of care and attention. <br />
            TheSmartFeeder was developed with the goal of enhancing the quality of life for our beloved horses, providing them with the nutrition and feeding management they need to thrive as top athletes.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:px-20">
          <Image
            width={1800}
            height={1100}
            src="/image/301_1.png"
            className="col-span-1 w-full rounded-xl"
            alt="301-1"
          />
          <Image
            width={1800}
            height={1100}
            src="/image/301_2.png"
            className="col-span-1 w-full rounded-xl"
            alt="301-2"
          />
          <Image
            width={1800}
            height={1100}
            src="/image/301_3.png"
            className="col-span-1 w-full rounded-xl"
            alt="301-3"
          />
        </div>
      </div>
    </section>
  );
}
export default AboutUs;
