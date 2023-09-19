import { useViewPort } from '../../../hooks/useViewPort';
import ProductImagesDesktop from './ProductImagesDesktop';
import ProductSlick from './ProductSlick';

const ProductImages = () => {
  const { isMobile } = useViewPort();
  return (
    <>
      {!isMobile && <ProductImagesDesktop />}
      {isMobile && <ProductSlick />}
    </>
  );
};

export default ProductImages;
