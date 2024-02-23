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
          <h2 className="text-left max-w-[1152px] flex flex-wrap uppercase mx-auto text-[#000] lg:text-[40px] lg:lg:leading-[1.5]
           md:leading-[24px] md:text-3xl text-[22px] font-NeueMontreal-Regular font-normal" >
            <div className="flex relative items-center " >
              <span className="flex mr-3 relative ml-[40px]" style={{ opacity: Math.min(1, scrollY / 500) }}> 
                <span className="absolute opacity-[0.3] ml-[40px]" >Skilled</span>
                <span className="ml-[40px]" >Skilled</span>

              </span>

            </div>
            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 50) / 500) }}>
                <span className="absolute opacity-[0.3] font-extrabold" >frontend</span>
                <span className="font-extrabold" >frontend</span>

              </span>

            </div>
            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 100) / 500) }}>
                <span className="absolute opacity-[0.3]" >web</span>
                <span className="" >web</span>

              </span>
              </div>

              <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 150) / 500) }}>
                <span className="absolute opacity-[0.3]" >and</span>
                <span className="" >and</span>

              </span>
              </div>

              <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 200) / 500) }}>
                <span className="absolute opacity-[0.3]" >Blockchain</span>
                <span className="" >Blockchain</span>

              </span>
              </div>

              <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 220) / 500) }}>
                <span className="absolute opacity-[0.3] font-extrabold" >developer</span>
                <span className="font-extrabold" >developer</span>

              </span>
              </div>

              <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 230) / 500) }}>
                <span className="absolute opacity-[0.3]" >Skilled</span>
                <span className="" >Skilled</span>

              </span>
              </div>

              <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 240) / 500) }}>
                <span className="absolute opacity-[0.3]" >in</span>
                <span className="" >in</span>
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
                <span className="mr-3 relative " style={{ opacity: Math.min(1, (scrollY - 340) / 500) }}>
                  <span className="absolute opacity-[0.3] " >tech</span>
                  <span className="" >tech</span>

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
                  <span className="absolute opacity-[0.3] font-extrabold" >experiences.</span>
                  <span className="font-extrabold" >experiences.</span>

                </span>

              </div>

          </h2>

          <h2 className="text-left max-w-[1120px] mt-[67px] flex flex-wrap uppercase mx-auto text-[#000] lg:text-[40px] lg:lg:leading-[1.5] md:leading-[36px] leading-[24px] md:text-3xl text-[22px] font-NeueMontreal-Regular font-normal" >
            <div className="flex relative items-center" >
              <span className="mr-3 relative ml-[40px]" style={{ opacity: Math.min(1, (scrollY - 700) / 500) }}>
                <span className="absolute opacity-[0.3] ml-[40px]" >web</span>
                <span className="ml-[40px]" >web</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 710) / 500) }}>
                <span className="absolute opacity-[0.3]" >experiences</span>
                <span className="" >experiences</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 720) / 500) }}>
                <span className="absolute opacity-[0.3]" >built,</span>
                <span className="" >built,</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative font-extrabold" style={{ opacity: Math.min(1, (scrollY - 730) / 500) }}>
                <span className="absolute opacity-[0.3] font-sans" >coding,</span>
                <span className="font-extrabold" >coding,</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 740) / 500) }}>
                <span className="absolute opacity-[0.3]" >debugging,</span>
                <span className="" >debugging,</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 750) / 500) }}>
                <span className="absolute opacity-[0.3]" >iterating-</span>
                <span className="" >iterating-</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 760) / 500) }}>
                <span className="absolute opacity-[0.3]" >every</span>
                <span className="" >every</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 780) / 500) }}>
                <span className="absolute opacity-[0.3]" >line</span>
                <span className="" >line</span>

              </span>

            </div>
            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 800) / 500) }}>
                <span className="absolute opacity-[0.3]" >a</span>
                <span className="" >a</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 820) / 500) }}>
                <span className="absolute opacity-[0.3] font-extrabold" >solution,</span>
                <span className="font-extrabold" >solution,</span>

              </span>

            </div>
            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 840) / 500) }}>
                <span className="absolute opacity-[0.3]" >every</span>
                <span className="" >every</span>

              </span>

            </div>
            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 870) / 500) }}>
                <span className="absolute opacity-[0.3]" >bug</span>
                <span className="" >bug</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 900) / 500) }}>
                <span className="absolute opacity-[0.3]" >a</span>
                <span className="" >a</span>

              </span>

            </div>

            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 920) / 500) }}>
                <span className="absolute opacity-[0.3]" >stepping</span>
                <span className="" >stepping</span>

              </span>

            </div>
            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 940) / 500) }}>
                <span className="absolute opacity-[0.3]" >stone</span>
                <span className="" >stone</span>

              </span>

            </div>
            <div className="flex relative items-center" >
              <span className="mr-3 relative font-extrabold" style={{ opacity: Math.min(1, (scrollY - 960) / 500) }}>
                <span className="absolute opacity-[0.3]" >toward&apos;s</span>
                <span className="" >toward&apos;s</span>

              </span>

            </div>
            <div className="flex relative items-center" >
              <span className="mr-3 relative" style={{ opacity: Math.min(1, (scrollY - 970) / 500) }}>
                <span className="absolute opacity-[0.3]" >mastery.</span>
                <span className="" >mastery.</span>

              </span>

            </div>
          </h2>

        </div>
        

      </div>
      <div className="h-svh"></div>
    </main>
  );
}