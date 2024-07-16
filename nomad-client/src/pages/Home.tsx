import HeroSection from "../components/ui/HeroSection";
import AccordionFAQ from "../components/ui/homeComponents/Accordion";
import RecommendedProducts from "../components/ui/homeComponents/RecommendedProducts";


const Home = () => {
    return (
        <div>
            {/* <HeroBanner /> */}
            <HeroSection />
            <RecommendedProducts />
            <AccordionFAQ/>
        </div>
    );
};

export default Home;