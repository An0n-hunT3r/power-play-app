import React, { useState, useEffect } from "react";

import callFakeStoreAPI from "../utils/callFakeStoreAPI";
import { FAKE_STORE_URLS } from "../constants";
import Card from "../components/Card";
import Page from "../components/Page";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await callFakeStoreAPI(FAKE_STORE_URLS.PRODUCTS, {
          method: "GET",
        });
        setProducts(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Page>
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </Page>
  );
};

export default Dashboard;
