import Button from "../components/Button";
import React from "react";
import ReactDOM  from "react-dom";
import {render} from '@testing-library/react'
import "@testing-library/jest-dom";


// different tests to test both the render and the text of the button

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