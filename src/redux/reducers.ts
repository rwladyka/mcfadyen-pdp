import { combineReducers } from 'redux';
import { PRODUCT_SIZE_KEY } from '../constraints';

const initialState = localStorage.getItem(PRODUCT_SIZE_KEY) || null;

const productSelectedSize = (
  state = initialState,
  action: {
    type: 'update_product_size';
    payload: { productSelectedSize: string };
  }
) => {
  const { payload } = action;

  switch (action.type) {
    case 'update_product_size':
      return payload.productSelectedSize;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ productSelectedSize });
export type RootState = ReturnType<typeof rootReducer>;
