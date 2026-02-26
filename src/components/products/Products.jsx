import React, { Suspense, useContext, useEffect, useRef, useState } from "react";
import "./Products.css";
import DisplayProducts from "./DisplayProducts";
import { NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthContext";

const Products = () => {
    const allProducts = useLoaderData()
    console.log("data comes from db", allProducts);

    const [products, setProducts] = useState([]);
    const { user } = useContext(AuthContext)

    // Fetch REST API
    useEffect(() => {
        fetch("/Products/Products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("API Error:", err));
    }, []);
    return (
        <Suspense fallback={<h1>Loading....</h1>}>
            <div className="">

                <section className="products-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
                    <div className="pt-5 col-span-4 pb-5">
                        {/* <h1 className="text-center text-4xl font-extrabold border-b-1 text-[#fff]  "></h1> */}
                    </div>
                    {
                        products.map((sigleProducts) => <DisplayProducts key={sigleProducts.id} props={sigleProducts}></DisplayProducts>)
                    }
                </section>
                {
                    user ? <><div className="my-3 flex justify-center-safe">
                        <NavLink to='/products/add-product' className='bg-amber-300 py-2 px-3 rounded '>Add New Product</NavLink>
                    </div></> : <></>
                }

            </div>
        </Suspense>
    );
};

export default Products;
