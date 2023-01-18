
const INITIAL_STATE = [];

function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_ITEM": return [...state, action.payload]

        case "REMOVE_ITEM":
            const filterdItems = state.filter(item => item.id !== action.payload)
            return [...filterdItems]

        case "INCREASE_QUANTITY":
            const cartItems = state.map(item => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }

                return item
            })
            return [...cartItems]

        case "DECREASE_QUANTITY":
            const cartItemsDecrease = state.map(item => {
                if (item.id === action.payload && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 }
                }

                return item
            })
            return [...cartItemsDecrease]

        // case "CLEAR_CART":
        //     return INITIAL_STATE

        default: return state
    }
}

export default cartReducer;