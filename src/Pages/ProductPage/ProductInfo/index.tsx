import BuyButton from './BuyButton';
import ProductBrand from './ProductBrand';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductVariationName from './ProductVariationName';
import ProductVariationSelector from './ProductVariationSelector';
import SizeSelector from './SizeSelector';

const ProductInfo = () => {
  return (
    <div className="flex flex-col lg:w-1/3 lg:h-[300px] lg:mb-[300px] lg:product-sticky">
      <ProductName />
      <ProductBrand />
      <ProductPrice />
      <div className="my-6">
        <ProductVariationName />
        <ProductVariationSelector />
      </div>
      <SizeSelector />
      <BuyButton />
      <div>
        <span className="mb-4 block">
          Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
        </span>
        <span>Speak to a Personal Stylist CHAT NOW</span>
      </div>
    </div>
  );
};

export default ProductInfo;
