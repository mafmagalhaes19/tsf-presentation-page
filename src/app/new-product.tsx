"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { Typography, Card, CardBody } from "@material-tailwind/react";

// const OPTIONS = [
//   {
//     title: "100",
//     description: "Learning Courses",
//   },
//   {
//     title: "500+",
//     description: "Expert Instructors",
//   },
//   {
//     title: "24/7",
//     description: "Support",
//   },
//   {
//     title: "5/5",
//     description: "Review Stars",
//   },
// ];

export function NewProduct() {
  return (
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Image
          width={1800}
          height={1100}
          src="/image/soon.png"
          className="col-span-1 w-fulllg:w-10/12 rounded-xl"
          alt="coming-soon"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Exciting Announcement: A New Product Is On Its Way!
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 px-4 text-left  text-xl !text-gray-500 lg:px-0  "
          >
            We are thrilled to announce the upcoming launch of our latest product, designed to revolutionize horse feeding. <br />
            This innovative feeder will simplify feeding routines, whether you are at competitions, in the field, or at the stable.
            Best of all, everything can be easily managed through a user-friendly app on your phone. <br />
            Stay tuned for more details!
          </Typography>

          {/* <div className="col-span-2 grid gap-5 grid-cols-2 ">
            {OPTIONS.map(({ title, description }) => (
              <InfoCard key={title} title={title}>
                {description}
              </InfoCard>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
export default NewProduct;
