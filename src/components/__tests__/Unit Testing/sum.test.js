import { sum } from "../../sum";

test( "Checking the sum of two numbers", () => {
    const result = sum(5,6);
    expect(result).toBe(11);
}  )