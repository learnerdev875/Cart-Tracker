export default function cartReducer(state,action){
    switch(action.type){
        case 'ADD_PRODUCTS':
            return {...state,products:action.payload}
        
        case 'ADD_TO_CART':
            return {...state,cart:[...state.cart,action.payload]}
        
        case 'REMOVE_FROM_CART':
            return {...state,cart:state.cart.filter(item => item.id !==action.payload)}
        
        case 'ADD_QUAN':
            return {...state,cart:state.cart.map(cart => {
                if(cart.id === action.payload.id){
                    return {...cart,quantity:cart.quantity+1}
                }
                return cart
            })}
        
        case 'DECREASE_QUAN':
            return {...state,cart:state.cart.map(cart => {
                if(cart.id === action.payload.id){
                    return {...cart,quantity:cart.quantity-1}
                }
                return cart
            })}
        default:
            return state;
    }
}