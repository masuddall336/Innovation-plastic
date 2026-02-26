import { Helmet } from "react-helmet-async";
import ScrollTop from "../ScrollTop";
import "./DisplayProducts.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../firebase/AuthContext";

export default function DisplayProducts({ props }) {
  const { user } = useContext(AuthContext)
  const { image, name, description } = props;

  return (
    <>
      <Helmet>
        <meta name="robots" content="index, follow" />
        <title>High-Quality Plastic Packaging Products | Innovation Plastic Cans Ltd.</title>
        <meta name="description" content="Explore premium plastic packaging products including bottles, containers, jars, and custom packaging solutions. Durable, eco-friendly, and made to perfection." />
        <meta name="keywords" content="plastic packaging, plastic bottles, plastic containers, custom packaging, eco-friendly packaging, durable plastic packaging, packaging solutions" />

        <link rel="canonical" href="https://innovation-plastic.com/products" />
      </Helmet>
      <div className="pack-card animate-card">
        <ScrollTop></ScrollTop>
        <div className="card-image">
          {/* === BACKGROUND EFFECTS === */}
          <div className="circle-rotate  "></div>
          <div className="circle-rotate_2 "></div>
          <div className="circle-rotate_3 "></div>

          {/* <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div> */}

          {/* === PRODUCT IMAGE === */}
          <div className="img-wrapper">
            <img
              title="Product Image"
              width='100%'
              height='100%'
              src={`/Products/${image}`}
              alt={image}
              loading="lazy"
            />

            {/* Hover effects */}
            <span className="img-shadow"></span>
            <div className="glass-reflect"></div>

            {/* Product Name */}
            <div className="product-name">
              <h2 className="text-2xl text-[#00A651] font-bold text-shadow-xs text-shadow-amber-50"> {name}</h2>
              <p>{description}</p>
              <div className="flex gap-2 justify-end pr-2 pt-2">
                <NavLink className='bg-[#00A651] py-1 px-2 rounded-xs self-end-safe'>Quick View</NavLink>
                {
                  user ? <> <NavLink className='bg-[#00A651] py-1 px-2 rounded-xs self-end-safe'>Edit</NavLink>
                    <NavLink className='bg-[#00A651] py-1 px-2 rounded-xs self-end-safe'>Delet</NavLink> </> : <></>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
