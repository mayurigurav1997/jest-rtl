import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

describe("Greet", () => {
    test('render correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText(/Hello/)
        expect(textElement).toBeInTheDocument()
    })

    test("render with name", () => {
        render(<Greet name="Mayuri" />)
        const textElement = screen.getByText("Hello Mayuri")
        expect(textElement).toBeInTheDocument()
    })
    //test.skip - skip that test case from the file
    //test.only - test only that test case from the file
})
//describe is used for grouping
//describe.only
//describe.skip
//we can use multipe describe and nested describe