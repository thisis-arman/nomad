import { toast } from "sonner";
import { Button } from "../components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useAddProductsMutation, useDeleteProductsMutation, useGetProductsQuery } from "../redux/features/products/productApi";
import Swal from "sweetalert2";

export const ProductManagement = () => {

    const [addProduct, { data: response }] = useAddProductsMutation();
    const [deleteProducts] = useDeleteProductsMutation();


    const { data, isLoading } = useGetProductsQuery('');
    if (isLoading) {
        return <div>
            loading...
        </div>
    }

    console.log(data);

    const handleAddProduct = async (e: Event) => {
        e.preventDefault();
        const event = e.target!
        const productName = event?.name.value;
        const images = event?.image.value;
        const price = event?.price.value;
        const category = event?.category.value;
        const stockQuantity = event?.quantity.value;

        try {
            await addProduct({ productName, images, category, stockQuantity, price, ratings: 4.5 }).unwrap();
            toast.success('Product has been Added successfully')
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteProduct = async (_id: string) => {




        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProducts(_id)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your product has been deleted ",
                    icon: "success"
                });
            }
        });



    }


    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 m-8">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg py-4">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        Product Management
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="mt-3 md:mt-0">
                    <a
                        href="javascript:void(0)"
                        className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                    >

                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="">Add Product</button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] md:max-w-xl lg:max-w-2xl">
                                <form onSubmit={(e) => handleAddProduct(e)} >
                                    <DialogHeader>
                                        <DialogTitle>Add Product</DialogTitle>
                                        <DialogDescription>
                                            Make changes to your profile here. Click save when you're done.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="name" className="">
                                                Product Title
                                            </Label>
                                            <Input name="name" type="text" className="col-span-4" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <span className="col-span-2">
                                                <Label htmlFor="username" className="">
                                                    Price
                                                </Label>
                                                <Input name="price" type="number" className="" />
                                            </span>
                                            <span className="col-span-2">
                                                <Label htmlFor="username" className="">
                                                    Quantity
                                                </Label>
                                                <Input name="quantity" type="number" className="" />
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="image" className="">
                                                Image
                                            </Label>
                                            <Input name="image" type="url" className="col-span-4" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="username" className="">
                                                Category
                                            </Label>
                                            <Input name="category" className="col-span-4" />
                                        </div>
                                    </div>
                                    <DialogClose asChild >
                                        <Button type="submit" className="bg-green-600 hover:bg-green-700">Save changes</Button>

                                    </DialogClose>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </a>
                </div>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left ">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr className="text-left">
                            <th className="py-3 px-6">Product Image</th>
                            <th className="py-3 px-6">Name</th>
                            <th className="py-3 px-6">Price</th>
                            <th className="py-3 px-6">Category</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                            {/* <th className="py-3 px-6"></th> */}

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            data?.data?.map((item, i: number) => (
                                <tr key={i}>
                                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                        <img src={item.images} className="w-14 h-16 " />

                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold">{item.productName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                                    <td className="text-center px-6 whitespace-nowrap">
                                        <a href="javascript:void()" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Edit
                                        </a>
                                        <button onClick={() => handleDeleteProduct(item._id)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}