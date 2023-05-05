import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { fetchProducts } from "store/slices/productsSlice";
import FullHeightContainer from "components/FullHeightContainer";
import Navigation from "components/Navigation";
import LoadingOverlay from "components/LoadingOverlay";
import store from "store";

const HomePage = React.lazy(() => import("./HomePage"));

type Props = {};

const View = (props: Props) => {
  useEffect(() => {
    store.dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Navigation />
      <FullHeightContainer>
        {/* <LoadingOverlay isLoading={false}> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        {/* </LoadingOverlay> */}
      </FullHeightContainer>
    </>
  );
};

export default View;
