import React from 'react';

const Banner = () => {

    return (
        <div>
            <section
                className="relative bg-[url(https://img.freepik.com/free-vector/camping-colored-composition-tent-camping-equipment-stand-clearing-lake-mountains-vector-illustration_1284-77474.jpg?w=1060&t=st=1697620046~exp=1697620646~hmac=1c135deacd4dc4d1a798866a278f25cd5c58cb4e36e106ec261da8a7bf7f14ae)] bg-cover bg-bottom bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-white/10  sm:from-black/75 sm:to-black/0 sm:bg-gradient-to-r "
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-6xl font-extrabold sm:text-6xl">
                            Adventure is Out There,

                            <strong className="block font-extrabold text-green-500">
                                Are You Ready?
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>

                        <div className="mt-8 flex flex-row mx-auto w-1/2 md:w-full flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="primary-button"
                            >
                                Get Started
                            </a>

                            <a
                                href="#"
                                className="secondary-button"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;