import { render } from '@testing-library/react'
import React from 'react'
import App from '../src/App'

describe('App', () => {
    test('should render the Home page', () => {
        const { getByTestId } = render(<App />)
        const homePage = getByTestId('home.page')
        expect(homePage).toBeInTheDocument()
    })
})
