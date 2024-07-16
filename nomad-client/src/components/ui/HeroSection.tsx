import * as React from "react"
import { Carousel, CarouselContent, CarouselItem } from "./carousel"
import { Card, CardContent } from "./card"
import Autoplay from 'embla-carousel-autoplay'
import { useGetProductsQuery } from "../../redux/features/products/productApi"
import AOS from 'aos'
import { Button } from "./button"


const HeroSection = () => {
    const plugin = React.useRef(

        Autoplay({
            delay: 3000,
            stopOnInteraction: true,
            stopOnLastSnap: true,
            playOnInit: true,

        }),


    )

    React.useEffect(() => {
        AOS.init({
            duration: 1200, // animation duration in ms
            // whether animation should happen only once
        });
    }, []);

    const { data, isLoading } = useGetProductsQuery(undefined)
    if (isLoading) {
        return <div className="h-screen w-5/6 mx-auto">
            <h2 className="text-4xl font-bold">loading...</h2>
        </div>
    }

    const products = data?.data;

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full overflow-x-hidden"
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className=" ">
                {products?.map((item, i) => (
                    <CarouselItem key={i} className="" >
                        <div className="p-1">
                            <Card
                                // style={{ backgroundImage: `url(${item?.images})` }}
                                className="relative bg-contain bg-center bg-no-repeat">
                                <CardContent data-aos="fade-up" data-aos-delay="1000" className="flex h-screen max-w-screen items-center justify-around p-6">
                                    <div>
                                        <h2 className="text-4xl font-semibold">{item.productName}</h2>
                                        <p className="py-4 text-lg ">${item?.price}</p>
                                        <Button className="bg-[#2D6A4f] px-8  hover:bg-[#20563e] " ><a href={`/products/${item._id}`}>SHOP NOW</a></Button>
                                    </div>
                                    <img src={item.images} alt="" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

        </Carousel>
    )
}

export default HeroSection;
