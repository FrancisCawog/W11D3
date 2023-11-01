const RECEIVE_CART = "RECEIVE_CART"

export const receiveCart = produceId => {
    return {
        type: RECEIVE_CART,
        produceId 
    }
}
const cartReducer = (state = {}, action) => {
    const oldObj = Object.assign({}, Object.freeze(state));
    
    switch(action.type) {
        case RECEIVE_CART:
            const newObj = {
                ...oldObj,
                [action.produceId]: { id: action.produceId, count: 1}
              };
            return newObj;
         default:
            return oldObj;
    }
}

export default cartReducer