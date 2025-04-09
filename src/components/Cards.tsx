"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";

export function CardDemo() {
  return (
    <div className="flex flex-col items-center justify-center h-[100%] w-full">

        <div className="max-w-4xl p-5">
        <span className="text-5xl text-center max-w-4xl font-bold">AI-Powered Tools to Build Smarter, Faster, and Better </span>
        <span className="text-5xl text-center max-w-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">super efficiently</span>

        </div>

        <div className="flex flex-row mx-2 my-2">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-80 w-80 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between m-1 border-2",
        )}
      >
        <div className="text content p-3">
        <Image
        src="/bulb.svg" alt="My Image" width={80} height={30} />
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
          Real-time, Context-aware Suggestions
          </h1>
          <p className="font-normal text-gray-50 relative z-10 my-4">
          Get instant code suggestions ranging from simple code snippets to entire functions, depending on the context of your existing code and past inputs
          </p>
        </div>
      </div>

      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-80 w-80 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between m-1 border-2",
        )}
      >
        <div className="text content p-3">
        <Image
        src="/mL-feedback.svg" alt="My Image" width={80} height={30}  />
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
          Custom Feedback to suit your style
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
          Given the uniqueness of our individual coding journeys, MicroGPT allows you to adjust how much assistant it gives you, adapting to your preferences.
          </p>
        </div>
      </div>

      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-80 w-80 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between m-1 border-2",
        )}
      >
        <div className="text content p-3">
        <Image
        src="/refactor.svg" alt="My Image" width={80} height={30}  />
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
          Automated Code Refactoring
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
          microGPT optimizes your existing code in line with standard coding practice at the snap of a finger.
          </p>
        </div>
      </div>
      </div >

      <div className="flex flex-row">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-80 w-80 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between m-1 border-2",
        )}
      >
        <div className="text content p-3">
        <Image
        src="/debug.svg" alt="My Image" width={80} height={30}  />
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
          Intelligent Debugging
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
          Detect and resolve issues quickly with microGPT. Smart detection as you type make errors less likely.
          </p>
        </div>
      </div>

      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-80 w-80 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between m-1 border-2",
        )}
      >
        <div className="text content p-3">
        <Image
        src="/code-bracket.svg" alt="My Image" width={80} height={30}  />
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
          Supports your coding language
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
          Being able to speak multiple programming languages makes microGPT handy for various projects.
          </p>
        </div>
      </div>

      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-80 w-80 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between m-1 border-2",
        )}
      >
        <div className="text content p-3">
        <Image
        src="/documentation.svg" alt="My Image" width={80} height={30}  />
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
          Documentation Assistance
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
          Generates in-line comments and documentation, making your project documentation always easy to update.
          </p>
        </div>
      </div>

      </div >
    </div>

    
  );
}
