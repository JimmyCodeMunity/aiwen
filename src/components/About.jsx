import React from "react";
import { logo } from "../images";

const About = () => {
  return (
    <section class="py-8 relative xl:mr-0 lg:mr-5 mr-0">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div class="w-full flex-col justify-center items-start gap-8 flex">
              <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 class="text-gray-400 text-base font-normal leading-relaxed">
                  About Us
                </h6>
                <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 class="text-black text-3xl font-bold font-poppins leading-normal lg:text-start text-center">
                    The Tale of Our Achievement Story
                  </h2>
                  <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    AI-WEN was founded to address the gap in AI literacy and
                    ethical AI advocacy for women. Our journey began with a
                    group of passionate individuals committed to making a
                    difference..
                  </p>
                </div>
              </div>
              <div class="w-full flex-col justify-center md:items-start items-center gap-6 flex">
              <h2 class="text-black text-3xl font-bold font-poppins leading-normal lg:text-start text-center">
                    Mision & Vision
                  </h2>
                <p className="text-slate-500">
                  Our mission is to empower women through AI literacy, advocacy,
                  and access to AI-enhanced resources. Our vision is a society
                  where women are well-versed in AI technologies, using AI tools
                  to enhance their lives and actively participating in shaping
                  ethical AI policies.
                </p>
              </div>
            </div>
            
          </div>
          <div class="w-full lg:justify-start justify-center items-start flex">
            <div class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <img
                class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl"
                src={logo}
                alt="about Us image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
