import React from "react";
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { useEffect , useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <div className="h-svh" >

      </div>
      <div className="top-20 bottom-0 w-full px-5 lg:px-[70px] sm:px-[45px] relative" >
        <div className="lg:mt-[73px] lg:mb-[300px] md:mb-[100px] relative lg:top-0 -top-[120px]" >
          <h2 className="text-left max-w-[1152px] flex flex-wrap uppercase mx-auto text-[#000] lg:text-[40px] lg:lg:leading-[1.25]
           md:leading-[24px] md:text-3xl text-[22px] font-NeueMontreal-Regular font-normal" >
            <div className="flex relative items-center" >
              <span className="flex mr-3 relative ml-[40px]" style={{ opacity: Math.min(1, scrollY / 700) }}> 
                <span className="absolute opacity-[0.3] ml-[40px]" >Talented</span>
                <span className="ml-[40px]" >Talented</span>

              </span>

            </div>
            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 50) / 700) }}>
                <span className="absolute opacity-[0.3]" >frontend</span>
                <span className="" >frontend</span>

              </span>

            </div>
            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 100) / 700) }}>
                <span className="absolute opacity-[0.3]" >web</span>
                <span className="" >web</span>

              </span>
              </div>

              <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 150) / 700) }}>
                <span className="absolute opacity-[0.3]" >and</span>
                <span className="" >and</span>

              </span>
              </div>

              <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 200) / 700) }}>
                <span className="absolute opacity-[0.3]" >mobile</span>
                <span className="" >mobile</span>

              </span>
              </div>

              <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 220) / 500) }}>
                <span className="absolute opacity-[0.3] font-NeueMontreal-Bold" >developer</span>
                <span className="font-NeueMontreal-Bold" >developer</span>

              </span>
              </div>

              <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 230) / 500) }}>
                <span className="absolute opacity-[0.3]" >crafting</span>
                <span className="" >crafting</span>

              </span>
              </div>

              <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 240) / 500) }}>
                <span className="absolute opacity-[0.3]" >elegant,</span>
                <span className="" >elegant,</span>

              </span>
              </div>

              <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 280) / 500) }}>
                <span className="absolute opacity-[0.3]" ></span>
                <span className="" ></span>

              </span>
              </div>

              <div className="flex relative items-center" >
                <Image
                src="shuriken.svg" alt="shurikenicon" loading="lazy" width={36} height={36} decoding="async" 
                style={{ transform: `rotate(${scrollY / 5}deg)`, opacity: 0.7}} />

                <span className="mr-3 relative ml-[10px]" style={{ opacity: Math.min(1, (scrollY - 290) / 500) }}>
                  <span className="absolute opacity-[0.3] ml-[10px]" >modern</span>
                  <span className="ml-[10px]" style={{opacity: 1}}>modern</span>

                </span>

              </div>

              <div className="flex relative items-center" >
                <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 300) / 500) }}>
                  <span className="absolute opacity-[0.3]" >designs. </span>
                  <span className="" >designs.</span>
                </span>

              </div>

              <div  className="flex relative items-center" >
                <span className="mr-3 relative md:ml-[20px]" style={{ opacity: Math.min(1, (scrollY - 310) / 500) }}>
                  <span className="absolute opacity-[0.3] md:ml-[20px]" >Blending</span>
                  <span className="md:ml-[20px]" >Blending</span>

                </span>

              </div>

              <div  className="flex relative items-center" >
                <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 320) / 500) }}>
                  <span className="absolute opacity-[0.3]" >creativity</span>
                  <span className="" >creativity</span>

                </span>

              </div>

              <div  className="flex relative items-center" >
                <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 330) / 500) }}>
                  <span className="absolute opacity-[0.3]" >with</span>
                  <span className="" >with</span>

                </span>

              </div>

              <div  className="flex relative items-center" >
                <span className="mr-3 relative md:ml-[40px]" style={{ opacity: Math.min(1, (scrollY - 340) / 500) }}>
                  <span className="absolute opacity-[0.3] md:ml-[40px]" >tech</span>
                  <span className="md:ml-[40px]" >tech</span>

                </span>

              </div>

              <div className="flex relative items-center" >
                <span className="relative ml-[20px] mr-[20px] my-[0px] items-center flex justify-center" style={{ opacity: Math.min(1, (scrollY - 350) / 500) }}>
                  <span className="absolute opacity-[0.3] ml-[20px] mr-[20px] items-center flex justify-center" >-</span>
                  <span className="ml-[20px] mr[-20px] my-0 items-center flex justify-center" >-</span>
                </span>

              </div>

              <div className="flex relative items-center" >
                <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 360) / 500) }}>
                  <span className="absolute opacity-[0.3]" >to</span>
                  <span className=""  >to</span>

                </span>

              </div>

              <div className="flex relative items-center" >
                <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 370) / 500) }}>
                  <span className="absolute opacity-[0.3]" >deliver</span>
                  <span className=""  >deliver</span>

                </span>

              </div>

              <div className="flex relative items-center" >
                <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 380) / 500) }}>
                  <span className="absolute opacity-[0.3]" >captivating</span>
                  <span className="" >captivating</span>

                </span>

              </div>

              <div className="flex relative items-center" >
                <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 390) / 500) }}>
                  <span className="absolute opacity-[0.3]" >user</span>
                  <span className=""  >user</span>

                </span>

              </div>

              <div className="flex relative items-center" >
                <span className="mr-3 relative font-NeueMontreal-Bold" style={{ opacity: Math.min(1, (scrollY - 400) / 500) }} >
                  <span className="absolute opacity-[0.3] font-NeueMontreal-Bold" >experiences.</span>
                  <span className="font-NeueMontreal-Bold" >experiences</span>

                </span>

              </div>

          </h2>

          <h2 className="text-left max-w-[1152px] mt-[67px] flex flex-wrap uppercase mx-auto text-[#000] lg:text-[40px] lg:lg:leading-[1.25] md:leading-[36px] leading-[24px] md:text-3xl text-[22px] font-NeueMontreal-Regular font-normal" >
            <div className="flex relative items-center" >
              <span className="mr-3 relative ml-[40px]" style={{ opacity: Math.min(1, (scrollY - 600) / 500) }}>
                <span className="absolute opacity-[0.3] ml-[40px]" >web</span>
                <span className="ml-[40px]" >web</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 610) / 500) }}>
                <span className="absolute opacity-[0.3]" >experiences</span>
                <span className="" >experiences</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 620) / 500) }}>
                <span className="absolute opacity-[0.3]" >built,</span>
                <span className="" >built,</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative font-NeueMontreal-Bold" style={{ opacity: Math.min(1, (scrollY - 630) / 500) }}>
                <span className="absolute opacity-[0.3] font-sans" >guitar</span>
                <span className="font-NeueMontreal-Bold" >guitar</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 640) / 500) }}>
                <span className="absolute opacity-[0.3]" >played,</span>
                <span className="" >played,</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 650) / 500) }}>
                <span className="absolute opacity-[0.3]" >the</span>
                <span className="" >the</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 660) / 500) }}>
                <span className="absolute opacity-[0.3]" >universe</span>
                <span className="" >universe</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 680) / 500) }}>
                <span className="absolute opacity-[0.3]" >researched</span>
                <span className="" >researched</span>

              </span>

            </div>
            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 700) / 500) }}>
                <span className="absolute opacity-[0.3]" >-</span>
                <span className="" >-</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 720) / 500) }}>
                <span className="absolute opacity-[0.3]" >I</span>
                <span className="" >I</span>

              </span>

            </div>
            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 740) / 500) }}>
                <span className="absolute opacity-[0.3]" >constant</span>
                <span className="" >constant</span>

              </span>

            </div>
            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 770) / 500) }}>
                <span className="absolute opacity-[0.3]" >weave</span>
                <span className="" >weave</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 800) / 500) }}>
                <span className="absolute opacity-[0.3]" >my</span>
                <span className="" >my</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 820) / 500) }}>
                <span className="absolute opacity-[0.3]" >passions</span>
                <span className="" >passions</span>

              </span>

            </div>
            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 840) / 500) }}>
                <span className="absolute opacity-[0.3]" >into</span>
                <span className="" >into</span>

              </span>

            </div>
            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 860) / 500) }}>
                <span className="absolute opacity-[0.3]" >life's</span>
                <span className="" >life's</span>

              </span>

            </div>
            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 870) / 500) }}>
                <span className="absolute opacity-[0.3]" >tapestry.</span>
                <span className="" >tapestry.</span>

              </span>

            </div>
          </h2>

        </div>
        

      </div>
      <div className="h-svh"></div>
    </main>
  );
}