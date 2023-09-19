import { useState } from 'react';
import { PRODUCT_DETAILS } from '../../../constraints';
import Content from './Content';
import Tabs from './Tabs';
import { ProductDetail as ProductDetailType } from '../../../types';

const ProductDetail = () => {
  const [selected, setSelected] = useState<ProductDetailType>(
    PRODUCT_DETAILS[0]
  );

  return (
    <div className="lg:w-1/4 lg:h-[300px] lg:product-sticky">
      <Tabs selected={selected} onSelectTab={(detail) => setSelected(detail)} />
      <Content selected={selected} />
    </div>
  );
};

export default ProductDetail;
