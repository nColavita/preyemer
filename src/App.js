import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import "./App.css";

import Nav from "./components/Nav/Nav";

const Container = styled.div`
    max-width: 95vw;
    margin: 0 auto;
    padding-top: 25px;
`;

const App = () => {
    return (
        <Router>
            <Container>
                <Nav />
            </Container>
        </Router>
    );
};

export default App;
