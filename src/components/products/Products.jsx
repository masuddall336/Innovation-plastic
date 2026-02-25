import React, { Suspense, useEffect, useRef, useState } from "react";
import "./Products.css";
import DisplayProducts from "./DisplayProducts";

const Products = () => {
    const [products, setProducts] = useState([]);

    // Fetch REST API
    useEffect(() => {
        fetch("/Products/Products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("API Error:", err));
    }, []);
    return (
        <Suspense fallback={<h1>Loading....</h1>}>
            <div>

                <section className="products-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
                    <div className="pt-5 col-span-4 pb-5">
                        <h1 className="text-center text-4xl font-extrabold border-b-1 text-[#fff]  ">Our Innovative Products</h1>
                    </div>
                    {
                        products.map((sigleProducts) => <DisplayProducts key={sigleProducts.id} props={sigleProducts}></DisplayProducts>)
                    }
                </section>
            </div>
        </Suspense>
    );
};

export default Products;
