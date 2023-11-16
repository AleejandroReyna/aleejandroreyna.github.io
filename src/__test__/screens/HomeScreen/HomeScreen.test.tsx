// Dependencies
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

// Component
import { HomeScreen } from '../../../screens'

// Tests
describe('<HomeScreen />', () => {
    describe('Content', () => {
        test('Should render main content', () => {
            const { getByText } = render(<HomeScreen />)
            expect(getByText('Home Screen')).toBeTruthy()
        })
    })
})