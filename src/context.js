import React, { Component } from "react";

const Context = new React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [action.payload, ...state.cart],
            };

        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        cart: [],
        dispatch: (action) => this.setStat((state) => reducer(state, action)),
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
