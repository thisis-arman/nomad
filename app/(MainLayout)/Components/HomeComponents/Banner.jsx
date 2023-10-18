import React from 'react';

const Banner = () => {
    return (
        <div>
            <section
                className="relative bg-[url(https://img.freepik.com/free-photo/group-hikers-walking-through-mountain-forest-generated-by-ai_188544-29868.jpg?t=st=1697597886~exp=1697601486~hmac=502d4eec59af52b0789871660de13ebd0b005b9e8cd026065503ee77a4b7646f&w=1060)] bg-cover bg-right bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-white/25  sm:from-black/75 sm:to-black/0 sm:bg-gradient-to-r "
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