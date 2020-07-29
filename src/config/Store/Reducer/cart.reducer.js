import { cartConstants } from '../Constant/cart.constant';

const initialState = {
    count:0,
    data:[
      {
        id:0,
        count:0,
        nama:'Wortel',
        isDiskon:1,
        berat:'100 gr',
        hargaDiskon:10000,
        harga:15000,
        image:[
          {
            url : '../../assets/icon/wortel.jpg'
          },
          {
            url : '../../assets/icon/wortel.jpg'
          }
        ]
      },
      {
        id:1,
        count:0,
        nama:'Kentang',
        isDiskon:1,
        berat:'500 gr',
        hargaDiskon:10000,
        harga:15000,
        image:[
          {
            url : '../../assets/icon/wortel.jpg'
          },
          {
            url : '../../assets/icon/wortel.jpg'
          }
        ]
      },
      {
        id:2,
        count:0,
        nama:'Bayam',
        isDiskon:0,
        berat:'700 gr',
        hargaDiskon:10000,
        harga:15000,
        image:[
          {
            url : '../../assets/icon/wortel.jpg'
          },
          {
            url : '../../assets/icon/wortel.jpg'
          }
        ]
      }
    ],
    cartItems:[],
    total:0
};

export function cart(state = initialState, action) {
    switch (action.type) {
      case cartConstants.ADD_CART:
        const { id, hargaJual } = action.payload;
        state.data.find(item => item.id == id ).count = state.data.find(item => item.id == id ).count + 1 ;
        return {
          ...state, count:state.count + 1, total: state.total + hargaJual
        };
        case cartConstants.DECREASE_CART:
            if( state.count > 0) {
              const { id, hargaJual } = action.payload;
              state.data.find(item => item.id == id ).count = state.data.find(item => item.id == id ).count - 1 ;
                return {
                    ...state, count:state.count - 1, total: state.total - hargaJual
                  };
            }
            
        default:
        return state
        
  }
}