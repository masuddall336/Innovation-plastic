import React, { Suspense, useEffect, useRef, useState } from "react";
import "./Products.css";
import DisplayProducts from "./DisplayProducts";

const Products = () => {
    const [products, setProducts] = useState([]);
    const cardsRef = useRef([]);

    // Fetch REST API
    useEffect(() => {
        fetch("/Products/Products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("API Error:", err));
    }, []);
    return (
        <Suspense fallback={<h1>Loading....</h1>}>
            <section className="products-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
                {
                    products.map((sigleProducts) => <DisplayProducts key={sigleProducts.id} props={sigleProducts}></DisplayProducts>)
                }
            </section>
        </Suspense>
    );
};

export default Products;
