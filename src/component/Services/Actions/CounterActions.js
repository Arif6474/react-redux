import { DECREMENT, INCREMENT, RESET } from "../Constants/CounterConstant"

export const incrementCounter =() => {
    return {
        type: INCREMENT,
    }
}
export const decrementCounter =() => {
    return {
        type: DECREMENT,
    }
}
export const resetCounter =() => {
    return {
        type: RESET,
    }
}

// 1. state - count : 0
// 2. action - increment , decrement , reset counter
// 3. reducer - increment - count => count + 1
//              decrement - count => count - 1
//              reset - count => 0
// 4. store 
// 5. providing store in react 
// 6. use store