import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

import ProductCard from "../components/ui/ProductCard";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../components/ui/select";
import { Slider } from "../components/ui/slider";
import { useGetProductsQuery } from "../redux/features/products/productApi";



const Products = () => {
    const { data, isLoading } = useGetProductsQuery(undefined);
    if (isLoading) {
        return <p>Loading ...</p>
    }


    const productPrices = data?.data?.map((a) => a.price)
    const minimumPriceOfProducts = Math.min(...productPrices);
    const maximumPriceOfProducts = Math.max(...productPrices);


    return (
        <div>


            <div className="my-5 grid md:grid-cols-12 justify-between border gap-4">
                <div className="h-screen bg-slate-500 md:col-span-3 p-4 ">
                    <div className="flex justify-between m-4">
                        <Input className="w-24 " type="number" name="minPrice" defaultValue={minimumPriceOfProducts} />
                        <Input className="w-24 " type="number" name="maxPrice" defaultValue={maximumPriceOfProducts} />
                    </div>
                    <Slider defaultValue={[100]} min={0} max={100} step={1} />

                </div>

                <div className="md:col-span-8 col-span-1">
                    <ProductCard items={data.data} />

                </div>
            </div>

        </div >
    );
};

export default Products;