import { useViewport } from '../../../hooks/useViewports';
import ProductImagesDesktop from './ProductImagesDesktop';
import ProductSlick from './ProductSlick';

const ProductImages = () => {
  const { isMobile } = useViewport();
  return (
    <>
      {!isMobile && <ProductImagesDesktop />}
      {isMobile && <ProductSlick />}
    </>
  );
};

export default ProductImages;
