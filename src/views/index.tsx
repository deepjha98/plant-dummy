import React from "react";
import { Routes, Route } from "react-router-dom";

import FullHeightContainer from "components/FullHeightContainer";
import Navigation from "components/Navigation";

const HomePage = React.lazy(() => import("./HomePage"));

type Props = {};

const View = (props: Props) => {
  return (
    <>
      <Navigation />
      <FullHeightContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </FullHeightContainer>
    </>
  );
};

export default View;
