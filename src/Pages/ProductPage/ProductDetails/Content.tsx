import { ProductDetail as ProductDetailType } from '../../../types';

type ProductDetailProps = {
  selected: ProductDetailType;
};

const ProductDetail = ({ selected }: ProductDetailProps) => {
  return <div>{selected.content}</div>;
};

export default ProductDetail;
