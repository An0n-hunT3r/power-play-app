import React from "react";

import Page from "../components/Page";

const NotFound = () => {
  return (
    <Page>
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <img className="mb-8 h-2/3" src="/notFound.jpg" alt="404 Not Found" />
        <h1 className="text-3xl font-bold text-gray-700">Page Not Found</h1>
      </div>
    </Page>
  );
};

export default NotFound;
