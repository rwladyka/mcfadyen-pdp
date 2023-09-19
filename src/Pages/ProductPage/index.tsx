import ProductDetail from './ProductDetails';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import ViewMoreLikeThis from './ProductInfo/ViewMoreLikeThis';

const ProductPage = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row gap-10 mx-[18px]">
        <ProductDetail />
        <div className="lg:w-3/4 flex flex-col lg:flex-row gap-10">
          <ProductImages />
          <ProductInfo />
        </div>
      </div>
      <ViewMoreLikeThis items={['Jonathan Simkhai', 'Blazers', 'Viscose']} />
    </>
  );
};

export default ProductPage;
