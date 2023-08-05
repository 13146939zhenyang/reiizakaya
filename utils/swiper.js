// lib/swiper.js
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { register } from "swiper/element/bundle";
import "swiper/css/bundle"; // Import the CSS for Swiper
register();

export function initSwiper() {
  return new Swiper(".swiper", {
    // Your Swiper options
    direction: "vertical",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}
