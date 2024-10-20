"use client";
import HTMLFlipBook from "react-pageflip";
import React, { useRef } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { dancing_script } from "@/lib/fonts"; // Import your custom font
import { CarouselEvent } from "@/components/ui/carouselEvent";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  const pageFlipRef = useRef<any>(null);
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })]);
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
          className={`text-5xl md:text-8xl lg:text-9xl ${dancing_script.className} font-cursive`} // Apply cursive font via CSS
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
            style={{ border: "10px solid white", borderRadius: "15px" }}  // This is a required prop
            showPageCorners={true}  // Enable showing page corners
            disableFlipByClick={false}  // Enable flipping pages by clicking
            className="shadow-2xl rounded-lg overflow-hidden"
            >
            <div className="page bg-pink-100 flex items-center justify-center text-black font-bold text-center text-2xl md:text-3xl lg:text-4xl font-cursive" style={{ fontFamily: "'Dancing Script', cursive" }}>
              <div className="w-full h-full p-8 flex flex-col items-center justify-center">
                <h2 style={{ fontFamily: "'Dancing Script', cursive" }} className="font-bold text-4xl mb-4">Happy Birthday</h2>
                <p  style={{ fontFamily: "'Dancing Script', cursive" }} className="text-lg">
                  Where Do I even Begin...</p>
              </div>
            </div>

            <div className="page bg-pink-100 flex flex-col text-black font-bold text-2xl md:text-3xl lg:text-4xl font-cursive" style={{ fontFamily: "'Dancing Script', cursive" }}>
              <div className="w-full h-full p-8 flex flex-col">
                {/* Two images on the top (left and right) */}
                <div className="flex justify-between items-start">
                  <img
                    src="/page1-1.jpg"
                    alt="Decorative Left"
                    className="w-24 h-24" // Adjust the size of the left image
                    style={{ borderRadius: '10px' }} // Optional: rounded corners
                  />
                  <img
                    src="/page1-2.jpg"
                    alt="Decorative Right"
                    className="w-24 h-24" // Adjust the size of the right image
                    style={{ borderRadius: '10px' }} // Optional: rounded corners
                  />
                </div>

                {/* Paragraph after the images */}
                <p style={{ fontFamily: "'Dancing Script', cursive" }} className="text-xl mt-4 text-left">
                  Ever since I met you, my life has turned from mellow, lonely and dull existent to a life full of blossoms and meaning. 
                  
                </p>
              </div>
            </div>

            <div className="page bg-pink-100 flex flex-col text-black font-bold text-2xl md:text-3xl lg:text-4xl font-cursive" style={{ fontFamily: "'Dancing Script', cursive" }}>
              <div className="w-full h-full p-8 flex flex-col">
                {/* Two images on the top (left and right) */}
                <div className="flex justify-between items-start">
                  <img
                    src="/page2-1.jpg"
                    alt="Decorative Left"
                    className="w-24 h-24" // Adjust the size of the left image
                    style={{ borderRadius: '10px' }} // Optional: rounded corners
                  />
                  <img
                    src="/page2-2.jpg"
                    alt="Decorative Right"
                    className="w-24 h-24" // Adjust the size of the right image
                    style={{ borderRadius: '10px' }} // Optional: rounded corners
                  />
                </div>

                {/* Paragraph after the images */}
                <p style={{ fontFamily: "'Dancing Script', cursive" }} className="text-xl mt-4 text-left">
                  Each stride I make in my life, you are the one who comes to my mind, any achievements that I made, any happy and sad moments I experience, I share it to you, always wanting you to be a part of it. Suddenly, you are the one I fight for, the one behind all my hard work.                  
                </p>
              </div>
            </div>

            <div className="page bg-pink-100 flex flex-col text-black font-bold text-2xl md:text-3xl lg:text-4xl font-cursive" style={{ fontFamily: "'Dancing Script', cursive" }}>
              <div className="w-full h-full p-8 flex flex-col">
                {/* Two images on the top (left and right) */}
                <div className="flex justify-between items-start">
                  <img
                    src="/page3-1.jpg"
                    alt="Decorative Left"
                    className="w-24 h-24" // Adjust the size of the left image
                    style={{ borderRadius: '10px' }} // Optional: rounded corners
                  />
                  <img
                    src="/page3-2.jpg"
                    alt="Decorative Right"
                    className="w-24 h-24" // Adjust the size of the right image
                    style={{ borderRadius: '10px' }} // Optional: rounded corners
                  />
                </div>

                {/* Paragraph after the images */}
                <p style={{ fontFamily: "'Dancing Script', cursive" }} className="text-xl mt-4 text-left">
                  Life becomes meaningful, the goal turns clear and I enjoy all of my times better when you are around. Words can’t express how grateful I am for your kindness and care, you always try to understand my perspective, valuing me for who I am and being my greatest supporter.
                </p>
              </div>
            </div>
            <div className="page bg-pink-100 flex flex-col text-black font-bold text-2xl md:text-3xl lg:text-4xl font-cursive" style={{ fontFamily: "'Dancing Script', cursive" }}>
              <div className="w-full h-full p-8 flex flex-col">
                {/* Two images on the top (left and right) */}
                <div className="flex justify-between items-start">
                  <img
                    src="/page4-1.jpg"
                    alt="Decorative Left"
                    className="w-24 h-24" // Adjust the size of the left image
                    style={{ borderRadius: '10px' }} // Optional: rounded corners
                  />
                  <img
                    src="/page4-2.jpg"
                    alt="Decorative Right"
                    className="w-24 h-24" // Adjust the size of the right image
                    style={{ borderRadius: '10px' }} // Optional: rounded corners
                  />
                </div>

                {/* Paragraph after the images */}
                <p style={{ fontFamily: "'Dancing Script', cursive" }} className="text-xl mt-4 text-left">
                Thank you for always making me laugh, Thank you for being the best supporter I ever have, Thank you for lightening up my world, Thank you for giving me reason and a dream, Thank you for cheering me when I’m down, Thank you for being by my side, Thank you for coming into my life
                </p>
              </div>
            </div>
            <div className="page bg-pink-100 flex flex-col text-black font-bold text-2xl md:text-3xl lg:text-4xl font-cursive" style={{ fontFamily: "'Dancing Script', cursive" }}>
              <div className="w-full h-full p-8 flex flex-col">
                {/* Two images on the top (left and right) */}
                <div className="flex justify-between items-start">
                  <img
                    src="/page5-1.jpg"
                    alt="Decorative Left"
                    className="w-24 h-24" // Adjust the size of the left image
                    style={{ borderRadius: '10px' }} // Optional: rounded corners
                  />
                  <img
                    src="/page5-2.jpg"
                    alt="Decorative Right"
                    className="w-24 h-24" // Adjust the size of the right image
                    style={{ borderRadius: '10px' }} // Optional: rounded corners
                  />
                </div>

                {/* Paragraph after the images */}
                <p style={{ fontFamily: "'Dancing Script', cursive" }} className="text-xl mt-4 text-left">
                Thank you for always making me laugh, Thank you for being the best supporter I ever have, Thank you for lightening up my world, Thank you for giving me reason and a dream, Thank you for cheering me when I’m down, Thank you for being by my side, Thank you for coming into my life
                </p>
              </div>
            </div>
            <div className="page bg-pink-100 flex flex-col text-black font-bold text-2xl md:text-3xl lg:text-4xl font-cursive" style={{ fontFamily: "'Dancing Script', cursive" }}>
              <div className="w-full h-full p-8 flex flex-col">
                {/* Two images on the top (left and right) */}
                <div className="flex justify-between items-start">
                  <img
                    src="/page6-1.jpg"
                    alt="Decorative Left"
                    className="w-24 h-24" // Adjust the size of the left image
                    style={{ borderRadius: '10px' }} // Optional: rounded corners
                  />
                  <img
                    src="/page6-2.jpg"
                    alt="Decorative Right"
                    className="w-24 h-24" // Adjust the size of the right image
                    style={{ borderRadius: '10px' }} // Optional: rounded corners
                  />
                </div>

                {/* Paragraph after the images */}
                <p style={{ fontFamily: "'Dancing Script', cursive" }} className="text-xl mt-4 text-left">
                I love you to the fullest, wanting to be the best of myself, changing my ways, criticizing myself just to make you happy. I put efforts in every little things just to see you smile, take my chance to fill you with immense joy (sometimes making you tear up) because your happiness is mine multiplied exponentially.
                </p>
              </div>
            </div>
            <div className="page bg-pink-100 flex flex-col text-black font-bold text-2xl md:text-3xl lg:text-4xl font-cursive" style={{ fontFamily: "'Dancing Script', cursive" }}>
              <div className="w-full h-full p-8 flex flex-col">
                {/* Two images on the top (left and right) */}
                <div className="flex justify-between items-start">
                  <img
                    src="/page7-1.jpg"
                    alt="Decorative Left"
                    className="w-24 h-24" // Adjust the size of the left image
                    style={{ borderRadius: '10px' }} // Optional: rounded corners
                  />
                  <img
                    src="/page7-2.jpg"
                    alt="Decorative Right"
                    className="w-24 h-24" // Adjust the size of the right image
                    style={{ borderRadius: '10px' }} // Optional: rounded corners
                  />
                </div>

                {/* Paragraph after the images */}
                <p style={{ fontFamily: "'Dancing Script', cursive" }} className="text-xl mt-4 text-left">
                I find that the greatest joy and fulfillment comes from making you happy, and that’s why all the preparations, thoughts, and all-nighters are all worth it.  Dreaming about the future together, and aspire for who we will become together always brings peace to my overthinking mind.
                </p>
              </div>
            </div>
            <div className="page bg-pink-100 flex flex-col text-black font-bold text-2xl md:text-3xl lg:text-4xl font-cursive" style={{ fontFamily: "'Dancing Script', cursive" }}>
              <div className="w-full h-full p-8 flex flex-col">
                {/* Two images on the top (left and right) */}
                <div className="flex justify-between items-start">
                  <img
                    src="/page8-1.jpg"
                    alt="Decorative Left"
                    className="w-24 h-24" // Adjust the size of the left image
                    style={{ borderRadius: '10px' }} // Optional: rounded corners
                  />
                  <img
                    src="/page8-2.jpg"
                    alt="Decorative Right"
                    className="w-24 h-24" // Adjust the size of the right image
                    style={{ borderRadius: '10px' }} // Optional: rounded corners
                  />
                </div>

                {/* Paragraph after the images */}
                <p style={{ fontFamily: "'Dancing Script', cursive" }} className="text-xl mt-4 text-left">
                Happy Birthday Feifei, you are the best thing that has ever came into my life, May you get everything you dream, May the road leads you to where you want to go, May you be passionate with your work, May you be less stress in your life and May you have it all.
                </p>
              </div>
            </div>
            <div className="page bg-pink-100 flex flex-col text-black font-bold text-2xl md:text-3xl lg:text-4xl font-cursive" style={{ fontFamily: "'Dancing Script', cursive" }}>
              <div className="w-full h-full p-8 flex flex-col">
                {/* Two images on the top (left and right) */}
                <div className="flex justify-between items-start">
                  <img
                    src="/page9-1.jpg"
                    alt="Decorative Left"
                    className="w-24 h-24" // Adjust the size of the left image
                    style={{ borderRadius: '10px' }} // Optional: rounded corners
                  />
                </div>

                {/* Paragraph after the images */}
                <p style={{ fontFamily: "'Dancing Script', cursive" }} className="text-xl mt-4 text-left">
                While we may face hardship in our relationship with this distance separating us, I believe that our perseverance and love for each other, can win over this hard time and ultimately live a fulfilling life together. I am truly grateful for this new life you give to me, and I won’t let it die away.
                </p>
              </div>
            </div>
           

            <div className="page bg-pink-300 flex items-center justify-center text-black font-bold text-center text-2xl md:text-3xl lg:text-4xl font-cursive" style={{ fontFamily: "'Dancing Script', cursive" }}>
              <div className="w-full h-full p-8 flex flex-col items-center justify-center">
                {/* Centered Image */}
                <div className="relative w-64 h-auto" style={{ paddingBottom: '177.78%' }}> {/* 9:16 aspect ratio */}
                  <img
                    src="/page9-11.png"
                    alt="Centered"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{ borderRadius: '10px' }} // Optional: rounded corners
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
