const RECEIVE_CART = "RECEIVE_CART"
const REMOVE_CART = "REMOVE_CART"

export const receiveCart = produceId => {
    return {
        type: RECEIVE_CART,
        produceId 
    }
}

export const removeCart = produceId => {
    return {
        type: REMOVE_CART,
        produceId 
    }
}



const cartReducer = (state = {}, action) => {
    const oldObj = Object.assign({}, Object.freeze(state));
    let newObj = {}
    switch(action.type) {
        case RECEIVE_CART:
                newObj = {
                ...oldObj,
                [action.produceId]: { id: action.produceId, count: 1}
              };
            return newObj;
            case REMOVE_CART:
                newObj = {
                    ...oldObj
                }
                delete newObj[action.produceId]
                return newObj
         default:
            return newObj;
    }
}

export default cartReducer