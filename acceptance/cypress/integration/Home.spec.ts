describe('App', () => {
	it('loads correctly', () => {
		cy.visit('/')
		cy.findByRole('heading', { name: /smarter bullets/i })
	})
})
