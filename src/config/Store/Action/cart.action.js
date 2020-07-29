import { cartConstants } from '../Constant/cart.constant';

export const cartAction = {
    addCart,
    decreaseCart
};

function addCart(params) {
    return { type: cartConstants.ADD_CART, payload:params };

}

function decreaseCart(params) {
    return { type: cartConstants.DECREASE_CART, payload:params };

}

