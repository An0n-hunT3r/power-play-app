import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import callFakeStoreAPI from "../utils/callFakeStoreAPI";
import { FAKE_STORE_URLS } from "../constants";
import addToCart from "../utils/addToCart";
import removeFromCart from "../utils/removeFromCart";
import isProductInCart from "../utils/isProductInCart";
import Page from "../components/Page";
import Loader from "../components/Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const { data } = await callFakeStoreAPI(
          `${FAKE_STORE_URLS.PRODUCTS}/${id}`,
          {
            method: "GET",
          }
        );
        setProductDetails(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product detail:", error);
        setIsLoading(true);
      }
    };

    fetchProductDetail();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(
      id,
      productDetails.title,
      productDetails.image,
      productDetails.price
    );
    navigate("/cart");
  };
  const handleRemoveFromCart = () => {
    removeFromCart(id);
    navigate("/dashboard");
  };
  const isInCart = isProductInCart(id);

  return (
    <Page>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 lg:w-1/2 mb-4">
              <img
                className="w-full h-auto"
                src={productDetails.image}
                alt={productDetails.title}
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 mb-4">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    {productDetails.title}
                  </h2>
                  <p className="text-gray-700 m-4">
                    {productDetails.description}
                  </p>
                  <p className="text-blue-600 text-lg font-bold m-4">
                    ${productDetails.price}
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <button
                    className={`${
                      isInCart ? "bg-gray-400" : "bg-blue-500"
                    } text-white px-4 py-2 rounded`}
                    disabled={isInCart}
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                  <button
                    className={`${
                      isInCart ? "bg-red-500" : "bg-gray-400"
                    } text-white px-4 py-2 rounded`}
                    disabled={!isInCart}
                    onClick={handleRemoveFromCart}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Page>
  );
};

export default ProductDetails;
