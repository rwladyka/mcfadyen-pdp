import Image1 from '../../../assets/img/imageColor-1.jpg';
import Image2 from '../../../assets/img/imageColor-2.jpg';

const ProductVariationSelector = () => {
  return (
    <div className="flex gap-1">
      <img
        src={Image1}
        alt="Select Color 1"
        className="border border-black cursor-pointer"
      />
      <img
        src={Image2}
        alt="Select Color 2"
        className="border border-lightGrey px-1 py-2 cursor-pointer"
      />
    </div>
  );
};

export default ProductVariationSelector;
