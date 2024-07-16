/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
// import { Button } from "../components/ui/button";
// import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";

import ProductCard from "../components/ui/ProductCard";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

import { Slider } from "../components/ui/slider";
import { useGetProductByCategoryQuery, useGetProductsQuery } from "../redux/features/products/productApi";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";



const Products = () => {
    // const [filteredByCategory, setFilteredByCategory] = useState([]);
    const [query, setQuery] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const { data: productsByCategory } = useGetProductByCategoryQuery(category)
    // const [products, setProducts] = useState([]);


    const { data, isLoading } = useGetProductsQuery(query);
    // const [products, setProducts] = useState(data?.data)
    console.log(data);
    if (isLoading) {
        return <p>Loading ...</p>
    }

    const groupedByCategory = data?.data?.reduce((acc, item) => {
        const { category } = item;

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push(item);

        return acc;
    }, {});




    const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value); // Update searchQuery state when input changes
    };

    const productPrices = data?.data?.map((a) => a.price)
    const minimumPriceOfProducts = Math.min(...productPrices);
    const maximumPriceOfProducts = Math.max(...productPrices);



    // const handleSelectChange = (value: string) => {
    //     // setSelectedValue(value);
    //     if (value == 'lowToHigh') {
    //         // Sort the data in ascending order based on price
    //         const sorted = products?.sort((a, b) => a.price - b.price);
    //         // console.log(sorted);
    //         setProducts(sorted);

    //         // Update state or perform other operations with sorted data
    //         // setData({ ...data, data: sorted });  // Assuming you update data state
    //     }
    // };

    const fetchCategory = (value: string) => {
        console.log(value)

        if (isLoading) {
            return <p>loading.....</p>
        }
        setCategory(value)
        console.log(productsByCategory)
    }


    // const filterByCategory = (e: Event, categoryName: string) => {
    //     // e.preventDefault(); // Prevent the default behavior if necessary

    //     const normalizedCategoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase();
    //     const filtered = data?.data.filter(a => a.category === normalizedCategoryName);

    //     console.log(categoryName);
    //     console.log(filtered);
    //     console.log(e);
    //     console.log("checked", categoryName);

    //     setFilteredByCategory(filtered); // Store the filtered products in state

    //     return filtered;
    // };


    const arr = []

    for (const [key, value] of Object.entries(groupedByCategory)) {
        arr.push({ name: key, items: value })
    }




    return (
        <div>


            <div className="my-5 grid md:grid-cols-12 justify-between border gap-4">
                <div className="h-screen  md:col-span-3 p-4 ">
                    <div className="flex justify-between m-4">
                        <Input className="w-24 " type="number" name="minPrice" defaultValue={minimumPriceOfProducts} />
                        <Input className="w-24" type="number" name="maxPrice" defaultValue={maximumPriceOfProducts} />
                    </div>
                    <Slider className="text-[#2D6A4F]" style={{ background: "#2D6A4F" }} defaultValue={[100]} min={0} max={100} step={1} />

                    <h1 className="text-xl font-semibold my-4">Filter by Categories</h1>


                    {/* <div className=" space-y-3">
                        <div className="flex items-center gap-2">
                            <Checkbox onCheckedChange={(e) => filterByCategory(e, 'hiking')} className="" id="terms" name="hiking" value={"hiking"} />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Hiking
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="camping" name="camping" value={'camping'} onCheckedChange={(e) => filterByCategory(e, 'camping')} />
                            <label
                                htmlFor="camping"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Camping
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="traveling" name="traveling" value={'traveling'} onCheckedChange={(e) => filterByCategory(e, 'Travel')} />
                            <label
                                htmlFor="traveling"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Traveling
                            </label>
                        </div>
                    </div> */}

                    {/* <Tabs defaultValue="account" className="">
                        <TabsList className="flex flex-col items-center justify-start gap-4">
                            <TabsTrigger className="" value="account">Account</TabsTrigger>
                            <TabsTrigger className="" value="password">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">Make changes to your account here.</TabsContent>
                        <TabsContent value="password">Change your password here.</TabsContent>
                    </Tabs> */}
                    {
                        arr.map(category =>
                            <div className="px-4 m-2 cursor-pointer hover:bg-[#52B788] hover:text-white font-semibold py-2 bg-slate-100 rounded-sm shadow-sm" onClick={() => fetchCategory(category.name)}>
                                {category.name} <Badge className="bg-gray-200" variant="outline">{category?.items?.length}</Badge>
                            </div>
                        )
                    }




                </div>

                <div className="md:col-span-8 col-span-1 ">
                    <div className="mb-8">
                        <form
                            // onSubmit={(e) => handleSearchQuery(e.target.value)}
                            className=" w-full flex justify-between px-4 mx-auto mt-8" >
                            <div className="flex w-full max-w-sm items-center space-x-2">
                                <Input onChange={(e) => handleSearchQuery(e)} type="text" name="search" placeholder="Search.." />
                                {/* <Button type="submit">Search</Button> */}
                            </div>
                            <Select
                            // onValueChange={(value) => handleSelectChange(value)}
                            >
                                <SelectTrigger className="w-[180px]" >
                                    <SelectValue placeholder="Sort by price" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="lowToHigh" >
                                            Low to High
                                        </SelectItem>
                                        <SelectItem value="highToLow" >
                                            High to Low
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </form>
                    </div>
                    <ProductCard
                        items={data.data || productsByCategory?.data}

                    />

                </div>
            </div>

        </div >
    );
};

export default Products;