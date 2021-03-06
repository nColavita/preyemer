import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { GlobalProvider } from "./context/GlobalContext";

import Nav from "./components/Nav/Nav";
import SiteNav from "./components/SiteNav/SiteNav";
import HomePage from "./components/HomePage";
import FashionPage from "./components/FashionPage";
import NaturePage from "./components/NaturePage";
import PatternsPage from "./components/PatternsPage";
import CheckoutPage from "./components/CheckoutPage";
import NotFound from "./components/pages/NotFound";
import Footer from "./components/Footer/Footer";

import "./App.css";

const Container = styled.div`
    width: 100%;
    max-width: 1366px;
    margin: 0 auto;
    padding: 20px 20px 0 20px;
`;

const App = () => {
    return (
        <GlobalProvider>
            {/* basename="/projects/preyemer" */}
            <Router basename="/projects/preyemer">
                <>
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
                    <Footer />
                </>
            </Router>
        </GlobalProvider>
    );
};

export default App;
