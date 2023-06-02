import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { AiOutlineGithub } from "react-icons/ai";

//import swipeer
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

//import images
import slide_image_1 from "../images/our_team/lambang.png";
import slide_image_2 from "../images/our_team/hezbi.png";
import slide_image_3 from "../images/our_team/nuril.png";
import slide_image_4 from "../images/our_team/danny.png";
import slide_image_5 from "../images/our_team/alfan.png";
import slide_image_6 from "../images/our_team/farhan.png";
import slide_image_7 from "../images/our_team/halim.png";

//import css
import "../css/myteam/style.css";


function MyTeam() {
  return (
    <div className="container">
      <h1 className="flex items-center justify-center pt-5 text-3xl text-black font-bold">
        About Team
      </h1>
      <div class="flex items-center justify-center bg-gray-100">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={slide_image_1}
                alt="lambang_bintoro"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-10 flex translate-y-[30%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Bint</h1>
              <p class="mb-3 text-lg italic text-white ">
                Full Name : Lambang Bintoro
                <br />
                Division : Product Owner
              </p>
              <a
                href="https://github.com/lambangb"
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
              >
                <AiOutlineGithub />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={slide_image_2}
                alt="hezbi_muhammad_sulaiman"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-10 flex translate-y-[30%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Hezbi</h1>
              <p class="mb-3 text-lg italic text-white ">
                Full Name : Hezbi Muhammad Sulaiman
                <br />
                Division : Mobile Developer (Flutter)
              </p>
              <a
                href="https://github.com/hezbims"
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
              >
                <AiOutlineGithub />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={slide_image_3}
                alt="muhammad_nuril_huda"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-10 flex translate-y-[30%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Nuril</h1>
              <p class="mb-3 text-lg italic text-white ">
                Full Name : Muhammad Nuril Huda
                <br />
                Division : Mobile Developer (Flutter)
              </p>
              <a
                href="https://github.com/noobiewhoneedsahelp"
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
              >
                <AiOutlineGithub />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={slide_image_4}
                alt="danny_kurniawan"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-10 flex translate-y-[30%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Danny</h1>
              <p class="mb-3 text-lg italic text-white ">
                Full Name : Danny Kurniawan
                <br />
                Division : UI/UX Designer
              </p>
              <a
                href="https://github.com/dannykurniawan1"
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
              >
                <AiOutlineGithub />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={slide_image_5}
                alt="abang"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-10 flex translate-y-[30%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Abang</h1>
              <p class="mb-3 text-lg italic text-white ">
                Full Name : Moh Alfan Al Amin
                <br />
                Division : Back-End Web Dev
              </p>
              <a
                href="https://github.com/alfanalamin"
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
              >
                <AiOutlineGithub />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={slide_image_6}
                alt="muhammad_farhan_mustafa"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-10 flex translate-y-[30%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Om</h1>
              <p class="mb-3 text-lg italic text-white ">
                Full Name : Muhammad Farhan Mustafa
                <br />
                Division : Back-End Web Dev
              </p>
              <a
                href="https://github.com/farhanmustafa15"
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
              >
                <AiOutlineGithub />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={slide_image_7}
                alt="muhammad_daniel_krisna_halim_putra"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-10 flex translate-y-[30%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Halim</h1>
              <p class="mb-3 text-lg italic text-white ">
                Full Name : Muhammad Daniel Krisna Halim Putra
                <br />
                Division : Full Stack Web Dev
              </p>
              <a
                href="https://www.instagram.com/d_halimp/"
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
              >
                <AiOutlineGithub />
              </a>
            </div>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              {/* <ion-icon className="arrow-back-outline bg-black"></ion-icon> */}
              &#11164;
            </div>
            <div className="swiper-button-next slider-arrow">
              {/* <ion-icon name="arrow-forward-outline text-black"></ion-icon> */}
              &#11166;
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default MyTeam;
