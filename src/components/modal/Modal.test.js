import { render, screen } from '@testing-library/react';
import CustomModal from './CustomModal';

describe('Modal component', () => {
    it('should be clickable', () => {
        render(<CustomModal />)
        const divElement = screen.getByTestId(/modal_back/)
        expect(divElement).toBeTruthy()
    })

    it('should have child element', () => {
        render(<CustomModal />)
        const childElement = screen.getByTestId("modal_content")
        expect(childElement).toBeEmptyDOMElement()
    })
})