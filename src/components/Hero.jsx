import React from "react";
import { woman1, woman2, women2, women3 } from "../images";

const Hero = () => {
  return (
    <div class="h-screen w-screen bg-black" id="hero">
      <div className="cover">
        <div class="mx-auto max-w-7xl md:pt-16 sm:pt-24 ">
          <div class="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div class="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left justify-between w-full">
              <div class="space-y-8">
                <div class="space-y-4">
                  <div class="space-y-2">
                    <span class="rounded-full uppercase bg-pink-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                      ai-wen
                    </span>
                    <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                      <span class="sm:text-6xl"></span> Women Empowerment
                      <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                        {" "}
                        Through
                      </span>
                      <br />
                      Artificial
                      <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                        {" "}
                        Intelligence
                      </span>
                    </h1>
                  </div>

                  <p class="text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    AI-WEN is dedicated to empowering women through AI
                    literacy,advocacy and access to AI-enhanced resources.Join
                    Us in fostering a community of informed and connected women.{" "}
                  </p>
                </div>

                <div class="border-t border-gray-700"></div>

                <div class="flex space-x-4 items-center text-white">
                  <div class="flex items-center space-x-2">
                    <div class="flex flex-shrink-0 -space-x-1">
                      <img
                        loading="lazy"
                        width="400"
                        height="400"
                        decoding="async"
                        class="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                        src="https://randomuser.me/api/portraits/men/29.jpg"
                      />
                      <img
                        loading="lazy"
                        width="400"
                        height="400"
                        decoding="async"
                        class="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                        src="https://randomuser.me/api/portraits/men/90.jpg"
                      />
                      <img
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        class="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                      />
                      <img
                        loading="lazy"
                        width="200"
                        height="200"
                        decoding="async"
                        class="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                        src="https://randomuser.me/api/portraits/men/5.jpg"
                      />
                    </div>

                    <span class="flex-shrink-0 text-xs font-medium leading-5">
                      +15
                    </span>
                  </div>

                  <div class="h-4 border-l border-gray-700"></div>

                  <div class="flex items-center">
                    <svg
                      class="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      class="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      class="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      class="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      class="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                  </div>
                  <div class="h-4 border-l border-gray-700"></div>
                  <a
                    href=""
                    target="_blank"
                    className="h-12 w-60 rounded-2xl p-5 border border-yellow-500 justify-center items-center flex"
                  >
                    <p className="text-xl">Donate</p>
                  </a>
                </div>
              </div>
            </div>

            <div class="flex items-center w-full col-span-6">
              <div class="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
                <div className="h-[100%] w-[100%]">
                  <div className="w-full h-full">
                    {/* <iframe frameborder="0" allowfullscreen="1"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                width="100%" height="100%"
                                src="https://www.youtube.com/embed/mr15Xzb1Ook?autoplay=0&amp;mute=0&amp;controls=0&"
                                id="widget2">
                            </iframe> */}
                    <img
                      src={women3}
                      className="h-full object-contain rounded-bl-2xl rounded-tr-[100px]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
