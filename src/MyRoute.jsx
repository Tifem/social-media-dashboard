import React from "react";
import { Route, Routes } from "react-router";
import Feed from "./component/Feed";

const MyRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </>
  );
};

export default MyRoute;
