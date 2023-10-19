'use client'
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const Events = () => {

    const [events, setEvents] = useState([])
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/api/events')
            .then(res => res.json())
            .then(events => setEvents(events))
    }, [])
    return (
        <section className='container mx-auto px-4 py-12'>
            <h1 className='text-4xl font-bold pb-8'>Events</h1>

            <div className='grid gap-8 md:grid-cols-3 grid-cols-1 '>
                {
                    events.slice(0, 6).map((event, i) =>

                        <Link href={'/'} key={i}
                            className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
                        >
                            <img
                                alt="Office"
                                src={event?.imageURL}
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div
                                className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
                            >
                                <div className="p-4 sm:p-6">
                                    <time datetime="2022-10-10" className="block text-lg text-white/90">
                                        {event?.date}
                                    </time>

                                    <a href="#">
                                        <h3 className="mt-0.5 text-2xl font-bold text-white">
                                            {event?.spot}
                                        </h3>
                                    </a>

                                    <p data-aos="fade-right" data-aos-delay="100" className="mt-2 line-clamp-3 w-fit p-1 text-sm/relaxed bg-white px-2 text-black ">
                                        {event?.duration}
                                    </p>
                                    <p data-aos="fade-right" data-aos-delay="200" className="mt-2 line-clamp-3 w-fit p-1 text-sm/relaxed bg-white px-2 text-black ">
                                        {event?.total_seats} available seats
                                    </p>
                                    <p data-aos="fade-right" data-aos-delay="300" className="mt-2 line-clamp-3 w-fit p-1 text-sm/relaxed bg-white px-2 text-black ">
                                        {event?.meeting_place}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    )

                }
            </div>

        </section >
    );
};

export default Events;