
export function addItem(item){
    return {
        type: "ADD_ITEM",
        payload: item
    }
}

export function removeItem(id){
    return{
        type: "REMOVE_ITEM",
        payload: id
    }
}

export function increaseQuantityByOne(id){
    return{
    type: "INCREASE_QUANTITY",
    payload: id
    }
}

export function decreaseQuantityByOne(id){
    return{
    type: "DECREASE_QUANTITY",
    payload: id
    }
}