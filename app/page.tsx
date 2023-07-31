"use client";

import Image from "next/image";
import Banner from "@/public/assets/Banner.svg";

import { Button } from "@/components";

export default function Home() {
  return (
    <main className="w-100">
      <div className="w-100 flex justify-between items-center gap-[50px]">
        <div>
          <h1 className="text-4xl w-2/3 mb-4">
            Elevate Your Coding Skills with Curated DSA Problems!
          </h1>
          <p className="w-[90%] text-gray-500">
            Level up your coding prowess with Sheetcode! Our platform offers a
            meticulously curated collection of Data Structures and Algorithms
            (DSA) problems, tailored to help students hone their problem-solving
            skills and excel in coding interviews. Practice with handpicked
            challenges, receive personalized feedback, and embark on a journey
            to become a coding maestro. Are you ready to conquer DSA like a pro?
            Join Sheetcode today!
          </p>
          <div className="mt-6 flex gap-3">
            <Button label="Start Practicing" />
            <Button label="Read More" secondary={true} />
          </div>
        </div>
        <Image src={Banner} alt="banner" />
      </div>
    </main>
  );
}
