

export function setToken(token) {
    return {
        type : "SET_TOKEN",
        payload : token
    }
}

export function removeToken() {
    return {
        type: "REMOVE_TOKEN"
    }
}