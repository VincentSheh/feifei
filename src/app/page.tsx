"use client"
import { useState } from "react";
import { HeartFilledIcon } from "@/components/ui/icons";
import { Meteors } from "@/components/ui/meteors";
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { BsHeartbreak } from "react-icons/bs";
import { GiHeartNecklace } from "react-icons/gi";

function Valentine() {
  // State to control the visibility of the second and third buttons
  const [isSecondButtonClicked, setIsSecondButtonClicked] = useState(false);
  // State for the third button's position
  const [buttonPosition, setButtonPosition] = useState({ top: 50, left: 50 });

  // Function to move the third button randomly
  const moveButtonRandomly = () => {
    const randomTop = Math.floor(Math.random() * 80); // Random value between 0 and 80 (percentage for top)
    const randomLeft = Math.floor(Math.random() * 80); // Random value between 0 and 80 (percentage for left)
    setButtonPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className="h-screen relative w-full bg-white flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1.6}
          maxSize={3.2}
          particleDensity={10}
          className="w-full h-full"
          particleColor="#FF0000" // Change to red sparkles
        />
      </div>
      <div>
        <div className="">
          <div className=" h-3/4 md:h-1/2 w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-pink-500 to-orange-400 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-white border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <GiHeartNecklace size={"50"} />

              <h1 className="font-bold text-xl text-black mb-4 relative z-50">
                Feifei Masih Marah?
              </h1>

              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                Shen2 Minta Maap feifei
                <br></br>
                Keseringan nggak peka feifei maunya apa
                <br></br>
                Selalu harus feifei yang kasih tau baru aku lakuin
                <br></br>
                Tapi shen2 selalu berusaha sebisanya biar feifei happy
                <br></br>
                Dan selalu mau meningkatkan kepekaan shen2
                <br></br>
              </p>
              <div className="flex gap-3 justify-between items-center relative">
                {/* First button that links to "/will/you" */}
                <div>
                  <Button
                    as={Link}
                    className="text-sm font-normal text-default-600 bg-default-100"
                    href={"/will/you"}
                    startContent={<HeartFilledIcon className="text-danger" />}
                    variant="flat"
                  >
                    Nggak aku sayang kok
                  </Button>
                </div>

                {/* Second button */}
                {!isSecondButtonClicked && (
                  <div>
                    <Button
                      className="text-sm font-normal text-default-600 bg-default-100"
                      startContent={
                        <BsHeartbreak size={"22"} className="text-danger" />
                      }
                      variant="flat"
                      onClick={() => setIsSecondButtonClicked(true)} // Hide this button and show the third button when clicked
                    >
                      Iya
                    </Button>
                  </div>
                )}


              </div>
              {/* Meteor effect */}
              <Meteors number={10} />
            </div>
                {/* Third button that moves randomly */}
                {isSecondButtonClicked && (
                  <div
                    style={{
                      position: "absolute",
                      top: `${buttonPosition.top}%`,
                      left: `${buttonPosition.left}%`,
                      transform: "translate(-50%, -50%)",
                      zIndex: 1000, // Ensures the button is on top
                    }}
                  >
                    <Button
                      className="text-sm font-normal text-default-600 bg-default-100 hover:bg-opacity-0"
                      startContent={
                        <BsHeartbreak size={"22"} className="text-danger" />
                      }
                      variant="flat"
                      onClick={moveButtonRandomly} // Move the button randomly when clicked
                    >
                      Oke aku maafin
                    </Button>
                  </div>
                )}            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Valentine;
