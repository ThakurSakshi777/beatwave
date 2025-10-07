"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const team = [
    {
      "id": 1,
      "name": "Aarav Mehta",
      "designation": "Music Instructor",
      "image": "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      "id": 2,
      "name": "Riya Sharma",
      "designation": "Vocal Coach",
      "image": "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      "id": 3,
      "name": "Kabir Singh",
      "designation": "Guitar Expert",
      "image": "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
      "id": 4,
      "name": "Ananya Verma",
      "designation": "Piano Instructor",
      "image": "https://randomuser.me/api/portraits/women/14.jpg"
    },
    {
      "id": 5,
      "name": "Dev Patel",
      "designation": "Drum Specialist",
      "image": "https://randomuser.me/api/portraits/men/15.jpg"
    }

]


function Instructors() {
  return (
  <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
   <WavyBackground className="flex flex-col items-center justify-center w-full h-full mx-auto max-w-7x1">
   
    {/* Heding && paragraph  */}
   <h2 className="mt-20 text-4xl font-bold text-transparent md:mt-0 md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400"> Meet Our Instructors</h2>
   <p> Discover the talented professionals whos will guide your musical journey</p>
  
  {/* AnimatedTooltip */}
  <div className="flex flex-row items-center justify-center w-full mb-10">
    <AnimatedTooltip items={team}/>
    </div> 
    
   </WavyBackground>
  </div>
   
   
  )
}

export default Instructors