"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

import {
  HeartIcon,
  TrophyIcon,
  PencilSquareIcon,
  ArrowPathIcon
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: TrophyIcon,
    title: "Optimal Nutrition",
    children:
      "Small meals, multiple times a day, promoting healthier digestion and overall well-being.",
  },
  {
    icon: HeartIcon,
    title: "Digestive Health",
    children:
      "Improves digestive tract health, enhances nutritional absorption, and reduces feeding time anxiety.",
  },
  {
    icon: PencilSquareIcon,
    title: "Customized Feeding",
    children:
      "Efficiently manages your stable by catering to each horse's individual feeding schedule and needs.",
  },
  {
    icon: ArrowPathIcon,
    title: "Natural Feeding Cycles",
    children:
      "Mimics natural feeding conditions, allowing horses to eat at their own pace day and night.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          TheSmartFeeder
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          The Benefits of TheSmartFeeder for Your Equine Athlete
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Investing in your equine athlete&apos;s nutrition can significantly impact their performance and well-being.
          TheSmartFeeder offers a range of benefits tailored to enhance your horse&apos;s health, stamina, and overall athletic 
            performance.
        </Typography>
        <div>
          <Image
            width={800}
            height={559}
            src="/image/thesmartfeeder_cartaz.png"
            alt="tsf barn"
            className="mx-auto w-full max-w-[400px] h-auto max-h-[30rem] md:max-h-[36rem] lg:translate-y-10 rounded-xl"
          />
        </div>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
