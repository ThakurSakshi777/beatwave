"use client";
import Link from "next/link";
import curseData from "../data/music_courses.json";
import React from "react";
import { BackgroundGradient } from "./ui/background.gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeatureCourses() {
  const featerCourses = curseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    // main container
    <div className="py-12 bg-gray-900">
      {/* heading */}
      <div>
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-teal-600">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
            {" "}
            Lern with the Best
          </p>
        </div>
      </div>

      {/* Card */}
      <div className="mt-10">
        <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featerCourses.map((course: Course) => (
            <div
              key={course.id}
              className="flex justify-center"
            >
             <BackgroundGradient 
             className="flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"
             >
              <div className="flex flex-col items-center flex-grow p-4 text-center sm:p-6-col">
                {/* Heading */}
                <h3 className="mt-4 mb-2 text-lg text-white sm:text-xl dark:text-netutral-200">{course.title}</h3>
                
                {/* description */}
                <p className="flex-grow text-sm text-neutral-600 drak:tet-netral-400-grow">{course.description}</p>
                
                {/* price */}
                <p className="font-semibold text-teal-400">₹{course.price}</p>
                
                <Link href={`/courses/${course.slug}`}
                className="inline-block px-4 py-2 mt-4 text-sm text-white bg-teal-600 rounded-md hover:bg-teal-700"
                >
                Learn More
                </Link>
              </div>
             </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="inline-block px-4 py-2 mt-4 text-sm text-white bg-teal-600 rounded-md hover:bg-teal-700"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeatureCourses;
