import React from 'react';
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const Banner = () => {
    return (
        <div className="carousel w-full rounded-md">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item bg-cover relative w-full sm:h-[300px] md:h-[300px] lg:h-[400px]">
                <img
                    src={pic1}
                    className="w-full h-[400px] object-cover"
                    alt="Slide 1"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
                    <h2 className="text-3xl font-bold">Building Trust</h2>
                    <p className="text-lg mt-2">Together, we create opportunities.</p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle text-2xl bg-transparent hover:bg-black hover:bg-opacity-20">
                        <IoIosArrowDropleftCircle className="text-white" />
                    </a>
                    <a href="#slide2" className="btn btn-circle text-2xl bg-transparent hover:bg-black hover:bg-opacity-20">
                        <IoIosArrowDroprightCircle className="text-white" />
                    </a>
                </div>
            </div>
            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full sm:h-[300px] md:h-[300px] lg:h-[400px]">
                <img
                    src={pic2}
                    className="w-full h-[400px] object-cover"
                    alt="Slide 2"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
                    <h2 className="text-3xl font-bold">Empowering Contributions</h2>
                    <p className="text-lg mt-2">Your support fuels dreams.</p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle text-2xl bg-transparent hover:bg-black hover:bg-opacity-20">
                        <IoIosArrowDropleftCircle className="text-white" />
                    </a>
                    <a href="#slide3" className="btn btn-circle text-2xl bg-transparent hover:bg-black hover:bg-opacity-20">
                        <IoIosArrowDroprightCircle className="text-white" />
                    </a>
                </div>
            </div>
            {/* Slide 3 */}
            <div id="slide3" className="carousel-item relative w-full sm:h-[300px] md:h-[300px] lg:h-[400px]">
                <img
                    src={pic3}
                    className="w-full h-[400px] object-cover"
                    alt="Slide 3"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
                    <h2 className="text-3xl font-bold">Financial Growth</h2>
                    <p className="text-lg mt-2">Join us to make a lasting impact.</p>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle text-2xl bg-transparent hover:bg-black hover:bg-opacity-20">
                        <IoIosArrowDropleftCircle className="text-white" />
                    </a>
                    <a href="#slide1" className="btn btn-circle text-2xl bg-transparent hover:bg-black hover:bg-opacity-20">
                        <IoIosArrowDroprightCircle className="text-white" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
