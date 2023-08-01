"use client";

import Image from "next/image";
import FlagBanner from "@/public/assets/flagBanner.svg";
import Banner from "@/public/assets/Banner.svg";
import Wave from "@/public/assets/wave.svg";

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
      <div
        id="about"
        className="flex justify-between mb-5 gap-[50px] items-start mt-5"
      >
        <Image src={FlagBanner} alt="banner" className="w-[40%] h-[40%]" />
        <div>
          <h1 className="text-4xl w-2/3 mb-8">About Sheetcode.</h1>
          <p className="w-[90%] text-gray-500">
            Welcome to Sheetcode. , your ultimate destination for mastering Data
            Structures and Algorithms (DSA) with ease and efficiency. Founded by
            Avinash Gupta and Harsh Agarwal, two passionate developers and
            lifelong friends, this platform was born out of a shared dream to
            create an inclusive and comprehensive resource for all aspiring
            programmers and coding enthusiasts.
          </p>
          <p className="w-[90%] text-gray-500 mt-4">
            At Sheetcode. , we firmly believe that the journey of becoming an
            exceptional coder should be both enjoyable and rewarding. Our vision
            is to empower learners worldwide with the knowledge, tools, and
            confidence to tackle complex coding challenges and unlock their full
            potential. We aim to bridge the gap between theoretical
            understanding and practical application, helping you excel in
            interviews, competitive programming, and real-world projects.
          </p>
          {/* <Image src={Wave} alt="wave" className="mt-3" /> */}
          <div className="mt-5">
            <p className="text-gray-500 underline mb-3">{`Don't have an account?`}</p>
            <div className="flex gap-3">
              <Button label={"Get free account"} />
              <Button label={"Know more"} secondary={true} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
