"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              TheSmartFeeder
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              TheSmartFeeder, feeding the smart way. <br />
              Our commitment is to mimic the horse&apos;s feeding conditions in their natural state.
            </Typography>
            {/* <Typography className="mb-4" color="white" variant="h6">
              Get the app
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                App Store
              </Button>
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                Google Play
              </Button>
            </div> */}
          </div>
          <Image
            width={800}
            height={800}
            src="/image/horse_2.png"
            alt="intro"
            className="w-full max-w-[600px] h-auto max-h-[30rem] col-span-1 my-20 -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:-translate-y-20 rounded-xl"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            TheSmartFeeder
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-full"
          >
            TheSmartFeeder is a revolutionary automatic horse feeder designed to enhance feeding management. <br />
            By providing small, frequent meals, it promotes better digestion and nutrient absorption, reducing the risk of
              ulcers and improving overall well-being. With TheSmartFeeder, horse owners can easily meet their horses&apos; feeding
              needs while minimizing waste and human error.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
