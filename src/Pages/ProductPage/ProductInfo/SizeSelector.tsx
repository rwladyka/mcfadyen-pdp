import { useDispatch, useSelector } from 'react-redux';
import { updateProductSize } from '../../../redux/actions';
import { Size } from '../../../types';
import { SIZES } from '../../../constraints';
import { Dispatch } from 'redux';

const SizeSelector = () => {
  const selectedSize = useSelector(
    (state: { productSelectedSize: string }) => state.productSelectedSize
  );
  const dispatch: Dispatch<any> = useDispatch();

  const getSizeColor = (size: Size) => {
    if (!size.stock) return 'text-grey';

    if (size.label === selectedSize) return 'bg-black text-white';

    return 'bg-white text-black';
  };

  return (
    <>
      <div className="flex justify-between mb-3">
        <div className="uppercase">
          <span className="font-bold">Size </span>
          <span data-testid="selected-size">{selectedSize}</span>
        </div>
        <div className="uppercase underline">Size guide</div>
      </div>
      <div className="flex justify-between flex-wrap">
        {SIZES.map((size) => (
          <button
            key={size.label}
            disabled={!size.stock}
            className={`border border-lightGrey py-2 w-[78px] rounded-[100px] mb-[6px] ${getSizeColor(
              size
            )}`}
            onClick={() => dispatch(updateProductSize(size.label))}
            data-testid={`btn-select-size-${size.label}`}
          >
            {!size.stock && (
              <span
                className="w-7 h-px bg-grey mt-[11px] origin-center rotate-15 absolute ml-[-7px] -rotate-12"
                data-testid={`strike-size-oos-${size.label}`}
              />
            )}
            {size.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default SizeSelector;
