import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Home from '../../src/pages/Home'

describe('Home', () => {
  it('should render application title, smarter bullets', () => {
    setup()

    const appTitle = screen.getByText(/smarter bullets/i)
    expect(appTitle).toBeVisible()
  })

  it('should display a textbox that can be typed in to input bullets', async () => {
    const { user } = setup()

    const bulletInputTextbox = screen.getByRole('textbox', { name: /Input Bullets Here:/i })

    const bulletText = 'this is a test bullet'
    await user.type(bulletInputTextbox, bulletText)

    expect(bulletInputTextbox).toBeVisible()
    expect(bulletInputTextbox).toHaveTextContent(bulletText)
  })

  it('should display a textbox that displays formatted bullets', () => {
    setup()

    const bulletOutputTextbox = screen.getByRole('textbox', { name: /View Output Here:/i })
    expect(bulletOutputTextbox).toBeVisible()
  })
})

const setup = () => {
  return {
    user: userEvent.setup(),
    ...render(<Home />)
  }
}
