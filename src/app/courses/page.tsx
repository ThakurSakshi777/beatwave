'use client'
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json";

function page() {
  return (
    <div className="min-h-screen py-12 bg-black pt-36">
        {/* Heading */}
    <h1 className="mt-20 text-4xl font-bold text-center text-transparent md:mt-0 md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">All Courses ({courseData.courses.length})</h1>

    {/* Card */}
    <div className="flex flex-wrap justify-center">
      {courseData.courses.map((course)=>(
        <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {course.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="max-w-sm mt-2 text-sm text-neutral-500 dark:text-neutral-300"
        >
          {course.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={course.image}
            height="1000"
            width="1000"
            className="object-cover w-full h-60 rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex items-center justify-between mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 text-xs font-normal rounded-xl dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 text-xs font-bold text-white bg-black rounded-xl dark:bg-white dark:text-black"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
      ))}
    </div>
    </div>
  )
}

export default page