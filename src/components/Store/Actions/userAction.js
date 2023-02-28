

function setUserData(data) {
    return {
        type: "SET_USER_DATA",
        payload: data
    };
}
export default setUserData;

export function removeUserData(data) {
    return {
        type: "REMOVE_USER_DATA",
        payload: data
    }
}


