import React from "react";
import styled from "styled-components";

import NewArrivals from "./NewArrivals/NewArrivals";
import BestSellers from "./BestSellers/BestSellers";

const HomePageContainer = styled.div``;

const HomePage = () => {
    return (
        <HomePageContainer>
            <NewArrivals />
            <BestSellers />
        </HomePageContainer>
    );
};

export default HomePage;
