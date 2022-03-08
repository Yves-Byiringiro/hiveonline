import Button from "../components/Button";
import React from "react";
import ReactDOM  from "react-dom";
import {render} from '@testing-library/react'
// import "jest-dom/extend-expect";
import "@testing-library/jest-dom";

it("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
})

it("renders button correctly", ()=> {
    const {getByTestId} = render(<Button content="View user info"></Button>)
    expect(getByTestId("button")).toHaveTextContent("View user info");
})

it("renders button correctly", ()=> {
    const {getByTestId} = render(<Button content="Info"></Button>)
    expect(getByTestId("button")).toHaveTextContent("Info");
})