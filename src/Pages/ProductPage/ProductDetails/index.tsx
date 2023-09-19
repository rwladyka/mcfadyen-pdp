import Content from './Content';
import Tabs from './Tabs';

const ProductDetail = () => {
  return (
    <div className="lg:w-1/4 lg:h-[300px] lg:product-sticky">
      <Tabs selected="Details" />
      <Content />
    </div>
  );
};

export default ProductDetail;
