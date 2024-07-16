import HeroSection from "../components/ui/HeroSection";
import AccordionFAQ from "../components/ui/homeComponents/Accordion";
import ShopByCategory from "../components/ui/homeComponents/Category";
import RecommendedProducts from "../components/ui/homeComponents/RecommendedProducts";


const Home = () => {
    return (
        <div>
            {/* <HeroBanner /> */}
            <HeroSection />
            <ShopByCategory/>
            <RecommendedProducts />
            <AccordionFAQ/>
        </div>
    );
};

export default Home;