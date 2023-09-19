import { useState } from 'react';

const SIZES: Size[] = [
  { label: 'XS', stock: 1 },
  { label: 'S', stock: 1 },
  { label: 'M', stock: 0 },
  { label: 'L', stock: 1 },
  { label: 'XXL', stock: 1 },
];

type Size = {
  label: string;
  stock: number;
};

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState('');

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
          <span>{selectedSize}</span>
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
            onClick={() => setSelectedSize(size.label)}
          >
            {!size.stock && (
              <span className="w-7 h-px bg-grey mt-[11px] origin-center rotate-15 absolute ml-[-7px] -rotate-12" />
            )}
            {size.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default SizeSelector;
