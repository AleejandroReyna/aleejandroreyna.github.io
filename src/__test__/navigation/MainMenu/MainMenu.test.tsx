// Dependencies
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

// Component
import App from '../../../App'

// Tests
describe('<MainMenu />', () => {
    describe('Content', () => {
        test('Should render all items', () => {
            const { getByText } = render(<App />)
            expect(getByText('Home')).toBeDefined()
            expect(getByText('Portfolio')).toBeDefined()
            expect(getByText('Contact')).toBeDefined()
        })
    })
})