import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/Customer1.jpg";
import Customer2 from "../../assets/Customer2.jpg";
import Customer3 from "../../assets/Customer3.jpg";
import Customer4 from "../../assets/Customer4.jpg";
import Customer5 from "../../assets/Customer5.jpg";
import { BsStarFill } from "react-icons/bs";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] px-10 mx-auto py-20">
        <Heading highlight="Customers" heading="Saying" />

        <div className="flex justify-end mt-6 py-5 gap-x-3">
          <button className="custom-prev text-2xl  text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowBack />
          </button>
          <button className="custom-next text-2xl text-zinc-800 rounded-lg w-11 h-11  flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
        loop={true}
        breakpoints={{
            640: {slidesPerView:1,spaceBetween:20},
            768: {slidesPerView:2,spaceBetween:20},
            1024: {slidesPerView:3, spaceBetween:20},
        }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {review.map((item) => {
            return (
              <SwiperSlide className=" bg-zinc-100 rounded-xl p-8">
                <div className="flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                    <img src={item.image}  className="w-full h-full"/>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex text-yellow-400 mt-3 text-xl gap-1">
                        {Array.from({length: item.rating}, (_, index) =>(
                            <BsStarFill />
                        ))}
                    </span>
                  </div>
                </div>

                <div className="mt-10 min-h-[15vh]">
                  <p className="text-xinc-600">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Bolgger",
    rating: 4,
    para: "FreshKart is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    image: Customer1,
  },
  {
    id: 2,
    name: "Emily Carter",
    profession: "Chef",
    rating: 3,
    para: "As a chef, quality ingredients are everything. FreshKart consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    image: Customer2,
  },
  {
    id: 3,
    name: "Priya Iyer",
    profession: "Software Engineer",
    rating: 5,
    para: "FreshKart offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Sofia Anderson",
    profession: "Marketing Specialist",
    rating: 4,
    para: "I appreciate the selection of healthy foods and clean-label products. FreshKart has been a great partner in my wellness journey!",
    image: Customer4,
  },
  {
    id: 5,
    name: "Nadia",
    profession: "HR",
    rating: 4,
    para: "Shopping online with FreshKart has saved me so much time. I trust them for my family weekly groceries—always fresh, affordable, and reliable.",
    image: Customer5,
  },
];
