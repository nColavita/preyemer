import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import { Container } from "./styled/Container";

import Nav from "./components/Nav/Nav";

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
