import { render, screen } from '@testing-library/react';
import AddContact from './AddContact';
import { FormikTest } from 'pages/Home';


describe('Add contact component', () => {
    
    const testFormik = FormikTest()

    it('should have a form', () => {
        render(<AddContact formik={testFormik}/>)
        const inputElement = screen.getAllByRole('textbox')
        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveFormValues()

        const labelElement = screen.getByLabelText(/name/i)
        expect(labelElement).toBeInTheDocument()
    })

    it('should be disabled', () => {
        render(<AddContact formik={testFormik}/>)
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement).toBeDisabled()
    })
})