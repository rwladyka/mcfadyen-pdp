import { AnyAction, Dispatch } from 'redux';
import { PRODUCT_SIZE_KEY } from '../constraints';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './reducers';

export const updateProductSize =
  (productSelectedSize: string): ThunkAction<void, RootState, unknown, any> =>
  (dispatch: (action: AnyAction) => Dispatch<AnyAction>) => {
    localStorage.setItem(PRODUCT_SIZE_KEY, productSelectedSize);
    return dispatch({
      type: 'update_product_size',
      payload: { productSelectedSize },
    });
  };
