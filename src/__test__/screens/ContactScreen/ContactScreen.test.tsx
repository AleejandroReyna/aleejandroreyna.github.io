// Dependencies
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

// Component
import { ContactScreen } from '../../../screens'

// Tests
describe('<ContactScreen />', () => {
    describe('Content', () => {
        test('Should render main content', () => {
            const { getByText } = render(<ContactScreen />)
            expect(getByText('Contact Screen')).toBeTruthy()
        })
    })
})