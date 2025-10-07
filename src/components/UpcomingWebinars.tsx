"use client";
import Link from "next/link";
import { CardSpotlight } from "@/components/ui/card-spotlight";


function UpcomingWebinars() {
  return (
    // Main container
    <div className="p-12 bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        {/* Sub container */}
        <div className="relative z-20 py-8 text-3xl font-bold text-center text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text sm:text-3xl">
          {/* Heading  Paragraph */}
          <h2>FEATURED WEBINARS</h2>
          <p className="text-base font-semibold tracking-wide text-teal-600">
            {" "}
            Enhance Your Musical Journey
          </p>
        </div>

        {/* Sub container 2 Card  */}
        <div className="flex gap-4 justify-evenly">
          <CardSpotlight className="w-20 h-20 h-96 w-96 g-red-500">
            <p className="relative z-20 mt-2 text-xl font-bold text-green-900">
              upcoming webinars
            </p>
            <div className="relative z-20 mt-4 text-neutral-200">
              Music Theory Essentials
              <ul className="mt-2 list-none">
                <li>speaker: Rahul Mehta</li>
                <li>date: 2025-10-15</li>
                <li>time: 6:30 PM IST</li>
                <li>duration: 2 hours</li>
                <li>platform: Google Meet</li>
              </ul>
            </div>
            <p className="relative z-20 mt-4 text-sm text-neutral-300">
          Gain a strong foundation in scales, chords, harmony, and rhythm.
            </p>
          </CardSpotlight>
    
           {/* card 2 */}
           <CardSpotlight className="w-20 h-20 h-96 w-96">
            <p className="relative z-20 mt-2 text-xl font-bold text-green-900">
              upcoming webinars
            </p>
            <div className="relative z-20 mt-4 text-neutral-200">
              Sound Engineering Basics
              <ul className="mt-2 list-none">
                <li>speaker: Ananya Sharma</li>
                <li>date: 2025-10-12</li>
                <li>time: 7:00 PM IST</li>
                <li>duration: 2 hours</li>
                <li>platform: Google Meet</li>
              </ul>
            </div>
            <p className="relative z-20 mt-4 text-sm text-neutral-300">
          Learn recording, mixing, and audio editing for professional sound production
            </p>
          </CardSpotlight>
        </div>

        

        {/* Sub container 3 button */}
        <div className="mt-10 text-center">
          <Link
            href={"/courses"}
            className="inline-block px-4 py-2 mt-4 text-sm text-white bg-teal-600 rounded-md hover:bg-teal-700"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
