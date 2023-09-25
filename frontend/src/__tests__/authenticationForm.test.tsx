import { render, fireEvent, screen } from "@testing-library/react";
import {
  BrowserRouter 
} from "react-router-dom";

import AuthenticationForm from '../components/AuthenticationForm'


describe('<AuthenticationForm />', () => {

    test("Renders the component", () => {render(<  BrowserRouter ><AuthenticationForm/></  BrowserRouter >)})


})
