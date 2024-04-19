import React from "react";
import Img2 from "../../assets/biryani2.png";
const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: "Biryani",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
        id: 2,
        img: Img2,
        name: "Chiken kari",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
    {
        id: 3,
        img: Img2,
        name: "Cold Cofee",
        description:
            "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
];
const Services = () => {
    return (
        <>
            <span id="services"></span>
            <div className="bg-gray-100 dark:bg-gray-950 dark:text-white">
                <div className="container">
                    <div className="text-center py-10  max-w-[400px] mx-auto">
                        <p className="text-primary">Our services</p>
                        <h1 className="font-bold text-3xl">Services</h1>
                        <p className="text-xs text-gray-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Perspiciatis delectus architecto error nesciunt,
                        </p>
                    </div>
                    {/* services data starts here */}
                    <div

                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center
                    py-10 ">
                        {
                            ServicesData.map((service) => (
                                <div
                                    data-aos="zoom-out"
                                    data-aos-duration="400"

                                    className="py-5 rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]">
                                    <div className="h-[100px]">
                                        <img src={service.img} alt=""
                                            className="max-w-[200px] block mx-auto transform -translate-y-14
                                        group-hover:scale-105 group-hover:rotate-6 duration-300" />
                                    </div>
                                    <div className="text-center ">
                                        <h1 className="text-xl font-bold">{service.name}</h1>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;