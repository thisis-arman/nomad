import HeroSection from "../components/ui/HeroSection";
import AccordionFAQ from "../components/ui/homeComponents/Accordion";
import ShopByCategory from "../components/ui/homeComponents/Category";
import NewsLetter from "../components/ui/homeComponents/Newsletter";
import RecommendedProducts from "../components/ui/homeComponents/RecommendedProducts";


const Home = () => {
    return (
        <div>
            {/* <HeroBanner /> */}
            <HeroSection />
            <ShopByCategory/>
            <RecommendedProducts />
            <AccordionFAQ />
            <NewsLetter/>
        </div>
    );
};

export default Home;