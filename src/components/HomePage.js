import React from "react";
import styled from "styled-components";

import NewArrivals from "../components/Products/NewArrivals/NewArrivals";
import BestSellers from "../components/Products/BestSellers/BestSellers";

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
