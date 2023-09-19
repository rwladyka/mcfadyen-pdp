import ProductDetail from './ProductDetails';
import ProductImages from './ProductImages';
import ProductSlick from './ProductImages/ProductSlick';
import ProductInfo from './ProductInfo';
import ViewMoreLikeThis from './ProductInfo/ViewMoreLikeThis';
import { useViewPort } from '../../hooks/useViewPort';

const ProductPage = () => {
  const { isMobile } = useViewPort();

  return (
    <>
      <div className="lg:container lg:m-auto flex flex-col-reverse lg:flex-row gap-10 mx-[18px]">
        <ProductDetail />
        <div className="lg:w-3/4 flex flex-col lg:flex-row gap-10">
          {!isMobile && <ProductImages />}
          {isMobile && <ProductSlick />}
          <ProductInfo />
        </div>
      </div>
      <ViewMoreLikeThis items={['Jonathan Simkhai', 'Blazers', 'Viscose']} />
    </>
  );
};

export default ProductPage;
