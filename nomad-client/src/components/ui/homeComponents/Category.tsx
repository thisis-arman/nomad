/* eslint-disable no-unsafe-optional-chaining */
import { useState } from "react";
import { useGetAllProductsQuery, useGetProductByCategoryQuery, useGetProductsQuery } from "../../../redux/features/products/productApi";
import { TProduct } from "../ProductCard";

const callouts = [
    {
        name: 'Desk and Office',
        description: 'Work from home accessories',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
]




const ShopByCategory = () => {

    const { data, isLoading } = useGetAllProductsQuery(undefined);
    const [category, setCategory] = useState<string>('')

    const { data: productsByCategory } = useGetProductByCategoryQuery(category)

    if (isLoading) {
        return <p>Loading..</p>
    }

    console.log(data);


    const groupedByCategory = data?.data?.reduce((acc, item: TProduct) => {
        const { category } = item;

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push(item);

        return acc;
    }, {});

    // const fetchCategory = (value: string) => {
    //     console.log(value)

    //     if (isLoading) {
    //         return <p>loading.....</p>
    //     }
    //     setCategory(value)
    //     console.log(productsByCategory)
    // }

    const categories = []

    for (const [key, value] of Object?.entries(groupedByCategory)) {
        categories.push({ name: key, items: value })
    }
    console.log(categories);
    return (
        <div className="bg-gray-100">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">Categories</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {categories?.map((category,i) => (
                            <div key={i} className="group relative flex bg-white hover:shadow-lg hover:border p-4 rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-95 sm:h-52">
                                    <img
                                        alt={category?.items[0]?.productName}
                                        src={category?.items[0]?.images}
                                        className="h-full w-full object-contain opacity-80 z-0 object-center"
                                    />
                                </div>
                                <h3 className="mt-6  text-sm text-gray-500">
                                    <a href={'#'}>
                                        <span className="absolute inset-0" />
                                        <h2 className="text-3xl font-bold text-black"> {category.name}</h2>
                                    </a>
                                    <p className="text-md text-black py-2">{ category?.items?.length} items</p>
                                <p className="text-base font-semibold text-gray-900">{category?.items[0]?.description}</p>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopByCategory;