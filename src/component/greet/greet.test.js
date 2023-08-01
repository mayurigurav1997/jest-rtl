import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

test('greet render correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/Hello/)
    expect(textElement).toBeInTheDocument()
})

test.only("great render with name", () => {
    render(<Greet name="Mayuri" />)
    const textElement = screen.getByText("Hello Mayuri")
    expect(textElement).toBeInTheDocument()
})
//test.skip
//test.only