"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Sportlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (

    // main Contaner
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      
    {/* Sportlight */}
     <Spotlight
        className="left-0 -top-40 md:-top-20 md:left-60"
        fill="white"
      />
    <div className='relative z-10 w-full p-4 text-center'>

        {/* Heding */}
    <h1 className="mt-20 text-4xl font-bold text-transparent md:mt-0 md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400"
    > Master the art os Music</h1>
    
    {/* paragraph */}
    <p className="max-w-lg mx-auto mt-4 text-base front-normal md:text-lg text-neutral-300"
    > Dive into our comprehensive musi courses and transform your musical journey today . Whether you are a beginner or looking to refine yoyr Skills , join us to unclock your true potential.</p>
    
    {/* button */}
    <div className='mt-4'>
    <Link href={"/courses"}>
    <Button>
      <h1 className="font-bold">Explore courses</h1>
    </Button>
    </Link>
    </div>
    
    </div>
    </div>
  )
}

export default HeroSection