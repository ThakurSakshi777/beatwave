"use client";
import Link from "next/link";
import { CardSpotlight } from "@/components/ui/card-spotlight";


const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 mt-1 text-blue-500 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex items-start gap-2">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};



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
