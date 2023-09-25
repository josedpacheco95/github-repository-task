import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import AuthenticationForm from '../src/components/AuthenticationForm'

describe('<AuthenticationForm />', () => {
    const setup = () => {
        const utils = render(<AuthenticationForm />)
        const emailInput = screen.getByLabelText('email')
        const passwordInput = screen.getByLabelText('password')
        return {
          emailInput,
          passwordInput,
          ...utils,
        }
      }

    test('The component should have the email input', () => {
        const form = render(<AuthenticationForm />)
        const emailElement = screen.getByText('')
    })
})
