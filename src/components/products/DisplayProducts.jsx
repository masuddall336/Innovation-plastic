import { Helmet } from "react-helmet-async";
import { FaEdit, FaTrash, FaEye, FaTimes } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../firebase/AuthContext";
import "./DisplayProducts.css";

export default function DisplayProducts({ props }) {
  const { title, name, category, capacity, material, img_url, description } = props;
  const { user } = useContext(AuthContext);

  // Modal State
  const [isOpen, setIsOpen] = useState(false);

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

        {/* IMAGE AREA */}
        <div className="card-image">

          <div className="circle-rotate"></div>
          <div className="circle-rotate_2"></div>
          <div className="circle-rotate_3"></div>


          <div className="img-wrapper relative">
            <img src={img_url} alt={name} />

            <div className="img-shadow"></div>
            <div className="glass-reflect"></div>

            {/* Centered View Button */}
            <div
              className="view-btn absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
            >
              <button
                className=" border-1 border-[#ffffffad] bg-[#77767665] cursor-pointer text-[#fff] px-4 py-2 rounded-lg flex items-center gap-2 font-bold shadow"
                onClick={() => setIsOpen(true)}
              >
                View More
              </button>
            </div>

            <div className="product-name">
              <h3>{title}</h3>
            </div>
          </div>
        </div>

        {/* DETAILS */}
        <div className=" pl-1 space-y-1 bg-white">
          <h4 className=" text-[#3b4042] font-extrabold text-xl">{name}</h4>
          {/* <p className="text-sm text-gray-500">Category: {category}</p>
          <p className="text-sm text-gray-500">Capacity: {capacity}</p>
          <p className="text-sm text-gray-500">Material: {material}</p> */}
          <p className="text-md font-bold text-[#7e7e7e] text-shadow-2xs">{description}</p>

          <div className="flex justify-between">
            {
              user ? <><button className="border px-3 py-1 rounded flex items-center gap-2 hover:bg-gray-100">
                <FaEdit /> Edit
              </button>

                <button className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-2 hover:bg-red-600">
                  <FaTrash /> Delete
                </button></> : <></>
            }
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg w-11/12 md:w-1/2 lg:w-1/3 p-6 relative shadow-lg">
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={20} />
            </button>

            <img src={img_url} alt={name} className="w-full h-64 object-contain mb-4" />

            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 font-medium mb-1">{name}</p>
            <p className="text-gray-500 mb-1">Category: {category}</p>
            <p className="text-gray-500 mb-1">Capacity: {capacity}</p>
            <p className="text-gray-500 mb-1">Material: {material}</p>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>
        </div>
      )}
    </>
  );
}