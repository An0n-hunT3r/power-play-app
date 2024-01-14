import React, { useState, useEffect } from "react";

import callFakeStoreAPI from "../utils/callFakeStoreAPI";
import { FAKE_STORE_URLS } from "../constants";
import Card from "../components/Card";
import Page from "../components/Page";
import Loader from "../components/Loader";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await callFakeStoreAPI(FAKE_STORE_URLS.PRODUCTS, {
          method: "GET",
        });
        setProducts(data || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(true);
      }
    };

    fetchData();
  }, []);

  return (
    <Page>
      {isLoading ? (
        <Loader />
      ) : (
        products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))
      )}
    </Page>
  );
};

export default Dashboard;
