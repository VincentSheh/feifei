"use client";
import HTMLFlipBook from "react-pageflip";
import React, { useRef } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { dancing_script } from "@/lib/fonts"; // Import your custom font
import { CarouselEvent } from "@/components/ui/carouselEvent";
import { SparklesCore } from "@/components/ui/sparkles";

const pages = [
  {
    id: 1,
    images: ["/page1-1.jpg", "/page1-2.jpg"],
    text: "Ever since I met you, my life has turned from mellow, lonely and dull existent to a life full of blossoms and meaning.",
  },
  {
    id: 2,
    images: ["/page2-1.jpg", "/page2-2.jpg"],
    text: "Each stride I make in my life, you are the one who comes to my mind, any achievements that I made, any happy and sad moments I experience, I share it to you, always wanting you to be a part of it.",
  },
  {
    id: 3,
    images: ["/page3-1.jpg", "/page3-2.jpg"],
    text: "Life becomes meaningful, the goal turns clear and I enjoy all of my times better when you are around. Words can’t express how grateful I am for your kindness and care, you always try to understand my perspective.",
  },
  // Add more pages as needed
];

export default function Home() {
  const pageFlipRef = useRef<any>(null);
  const line1 = `"To my number one favourite person"`;

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden rounded-md">
      <div className="absolute inset-0 z-10">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1.6}
          maxSize={3.2}
          particleDensity={10}
          className="w-full h-full"
          particleColor="#FF0000" // Red sparkles
        />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-screen">
        <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 mb-12">
          <TextGenerateEffect
            words={line1}
            className={`text-5xl md:text-8xl lg:text-9xl ${dancing_script.className} font-cursive`}
          />
        </div>

        {/* PageFlip book animation */}
        <div className="mb-12">
          <HTMLFlipBook
            ref={pageFlipRef}
            width={400}
            height={500}
            minWidth={400}
            maxWidth={600}
            minHeight={500}
            maxHeight={700}
            size="stretch"
            startPage={0}
            flippingTime={500}
            usePortrait={true}
            drawShadow={true}
            autoSize={true}
            startZIndex={0}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={false}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={50}
            style={{ border: "10px solid white", borderRadius: "15px" }}
            showPageCorners={true}
            disableFlipByClick={false}
            className="shadow-2xl rounded-lg overflow-hidden"
          >
           <div className="page bg-pink-100 flex items-center justify-center text-black font-bold text-center text-2xl md:text-3xl lg:text-4xl font-cursive" style={{ fontFamily: "'Dancing Script', cursive" }}>
              <div className="w-full h-full p-8 flex flex-col items-center justify-center">
                <h2 style={{ fontFamily: "'Dancing Script', cursive" }} className="font-bold text-4xl mb-4">Happy Birthday</h2>
                <p  style={{ fontFamily: "'Dancing Script', cursive" }} className="text-lg">
                  Where Do I even Begin...</p>
              </div>
            </div>            
            
            {pages.map((page) => (
              <div
                key={page.id}
                className="page bg-pink-100 flex flex-col text-black font-bold text-2xl md:text-3xl lg:text-4xl font-cursive"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                <div className="w-full h-full p-8 flex flex-col">
                  <div className="flex justify-between items-start">
                    {page.images.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt={`Decorative ${index + 1}`}
                        className="w-24 h-24"
                        style={{ borderRadius: "10px" }}
                      />
                    ))}
                  </div>
                  <p
                    style={{ fontFamily: "'Dancing Script', cursive" }}
                    className="text-xl mt-4 text-left"
                  >
                    {page.text}
                  </p>
                </div>
              </div>
            ))}

            <div className="page bg-pink-300 flex items-center justify-center text-black font-bold text-center text-2xl md:text-3xl lg:text-4xl font-cursive">
              <div className="w-full h-full p-8 flex flex-col items-center justify-center">
                <div className="relative w-64 h-auto" style={{ paddingBottom: "177.78%" }}>
                  <img
                    src="/page9-11.png"
                    alt="Centered"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
            </div>
          </HTMLFlipBook>
        </div>

        {/* Carousel Section */}
        <CarouselEvent />
      </div>
    </div>
  );
}
