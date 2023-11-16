// Dependencies
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

// Component
import { PortfolioScreen } from '../../../screens'

// Tests
describe('<ContactScreen />', () => {
    describe('Content', () => {
        test('Should render main content', () => {
            const { getByText } = render(<PortfolioScreen />)
            expect(getByText('Portfolio Screen')).toBeTruthy()
        })
    })
})