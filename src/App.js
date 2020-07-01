import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { Provider } from "./context";

import Nav from "./components/Nav/Nav";
import SiteNav from "./components/SiteNav/SiteNav";
import HomePage from "./components/HomePage";
import FashionPage from "./components/FashionPage";
import NaturePage from "./components/NaturePage";
import PatternsPage from "./components/PatternsPage";
import CheckoutPage from "./components/CheckoutPage";
import NotFound from "./components/pages/NotFound";

import "./App.css";

const Container = styled.div`
    width: 100%;
    max-width: 1366px;
    margin: 0 auto;
    padding-top: 20px;
`;

const App = () => {
    return (
        <Provider>
            <Router>
                <Container>
                    <Nav />
                    <SiteNav />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) => <HomePage />}
                        ></Route>
                        <Route
                            exact
                            path="/category/fashion"
                            render={(props) => <FashionPage />}
                        ></Route>
                        <Route
                            exact
                            path="/category/nature"
                            render={(props) => <NaturePage />}
                        ></Route>
                        <Route
                            exact
                            path="/category/patterns"
                            render={(props) => <PatternsPage />}
                        ></Route>
                        <Route
                            exact
                            path="/checkout"
                            render={(props) => <CheckoutPage />}
                        ></Route>

                        <Route component={NotFound}></Route>
                    </Switch>
                </Container>
            </Router>
        </Provider>
    );
};

export default App;
