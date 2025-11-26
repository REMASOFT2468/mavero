import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero1 = () => {
  return (
    <div>
      <div className="text-center pt-[30px] md:p-[50px]">
        <h1 className="text-xl md:text-4xl w-[100%]">
          Fix The Most <span className="text-blue-500">Common Appliance </span>
          Issues In Just
          <span className="text-blue-500"> Three Easy Steps</span>
        </h1>
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="p-10 mt-10 bg-[#1A4F8B] text-[#F7F9FC] w-100 ml-4  rounded-xl md:ml-[80vh]">
            <h1>
              STEP <span className="text-blue-500">ONE</span>
            </h1>
            <h3 className="underline">Post Your Job</h3>
            <div>
              <div className="p-5">
                <p>
                  Tell us exactly what’s broken or what you need fixed. Add a
                  description, photos, and your preferred time. No technical
                  jargon needed just explain it in your own words and we handle
                  the rest.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-10 mt-10 bg-[#1A4F8B] text-[#F7F9FC] w-100 ml-4 rounded-xl md:ml-[80vh]">
            <h1>
              STEP <span className="text-blue-500">TWO</span>
            </h1>
            <h3 className="underline">Choose a Skilled Helper</h3>
            <div>
              <div className="p-5">
                <p>
                  Browse a list of verified professionals matched to your job.
                  Check their ratings, reviews, pricing, and past work before
                  you pick. No guessing, no random strangers only trusted,
                  proven technicians.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-10 mt-10 bg-[#1A4F8B] text-[#F7F9FC] w-100 ml-4 rounded-xl md:ml-[80vh]">
            <h1>
              STEP <span className="text-blue-500">THREE</span>
            </h1>
            <h3 className="underline">Get It Fixed With Zero Stress</h3>
            <div>
              <div className="p-5">
                <p>
                  Your helper arrives on schedule, completes the repair, and
                  updates you in real time. Pay securely through the app once
                  the job is done. Simple, transparent, and headache-free from
                  start to finish.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero1;
