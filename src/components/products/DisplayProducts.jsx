import { Helmet, HelmetProvider } from "react-helmet-async";
import ScrollTop from "../ScrollTop";
import "./DisplayProducts.css";

export default function DisplayProducts({ props }) {
  const { image, name } = props;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>High-Quality Plastic Packaging Products | Innovation Plastic Cans Ltd.</title>
          <meta name="description" content="Explore premium plastic packaging products including bottles, containers, jars, and custom packaging solutions. Durable, eco-friendly, and made to perfection." />
          <meta name="keywords" content="plastic packaging, plastic bottles, plastic containers, custom packaging, eco-friendly packaging, durable plastic packaging, packaging solutions" />

          <link rel="canonical" href="https://innovation-plastic.com/products" />
        </Helmet>
      </HelmetProvider>
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
              src={`/Products/${image}`}
              alt={image}
              loading="lazy"
            />

            {/* Hover effects */}
            <span className="img-shadow"></span>
            <div className="glass-reflect"></div>

            {/* Product Name */}
            <div className="product-name">
              {name}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
