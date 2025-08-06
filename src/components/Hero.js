"use client";

import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { civil, criminal, family } from "@/assets";

const Hero = () => {
  const images = [
    {
      src: civil,
      title: "Civil Law",
      description: "Expert legal services in civil matters",
    },
    {
      src: family,
      title: "Family Law",
      description: "Compassionate family law solutions",
    },
    {
      src: criminal,
      title: "Criminal Law",
      description: "Strong defense in criminal cases",
    },
  ];

  return (
    <>
      <section className=" relative overflow-hidden">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="h-full"
        >
          <CarouselContent className="h-[70vh] md:h-[90vh]">
            {images.map((image, index) => (
              <CarouselItem key={index} className="h-full pl-0">
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover h-full"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white z-10 max-w-4xl mx-auto px-4">
                      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                        {image.title}
                      </h1>
                      <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
                        {image.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                        <Link href="/contact" className="btn btn-primary">
                          Read More
                        </Link>
                        <Link
                          href="/practice-areas"
                          className="btn btn-secondary"
                        >
                          Our Services
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white border-white/30" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white border-white/30" />
        </Carousel>
      </section>
    </>
  );
};

export default Hero;
