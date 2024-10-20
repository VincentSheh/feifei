import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselEvent() {
  // Static array of images
  const staticImages = [
    {
      id: "1",
      image: "/image5.jpg",
    },
    {
      id: "2",
      image: "/image3.jpg",
    },
    {
      id: "3",
      image: "/image2.jpg",
    },
    {
      id: "4",
      image: "/image4.jpg",
    },
    {
      id: "5",
      image: "/image1.jpg",
    },
  ];

  return (
    <Carousel
      className="w-full items-center"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="w-full flex items-center">
        {staticImages.map((item, index) => (
          <CarouselItem key={index} className="w-1/4 px-2"> {/* 1/4th width to show 4 items at once */}
            <Card
              className="transition duration-300 ease-in-out transform hover:bg-gray-300 hover:scale-105"
            >
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "auto", // Let the height adjust automatically based on image
                  paddingBottom: "56.25%", // Optional: Aspect ratio of 16:9
                }}
              ></div>
              <CardContent className="flex flex-col items-center justify-center p-6"></CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
