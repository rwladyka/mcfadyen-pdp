import Image1 from '../../../assets/img/image1.jpg';
import Image2 from '../../../assets/img/image2.jpg';
import Image3 from '../../../assets/img/image3.jpg';
import Image4 from '../../../assets/img/image4.jpg';
import Image5 from '../../../assets/img/image5.jpg';
import { Icons } from '../../../components/Icons';

const ProductImages = () => {
  return (
    <div className="lg:w-2/3 flex flex-col gap-2 relative">
      <div className="w-full lg:product-sticky right-0">
        <img
          src={Icons.Heart}
          alt="like it"
          className="w-[25px] h-[25px] absolute top-[10px] right-6 cursor-pointer"
        />
      </div>
      <img src={Image1} alt="Product 1" />
      <div className="flex flex-col lg:flex-row">
        <img src={Image2} className="lg:w-1/2" alt="Product 2" />
        <img src={Image3} className="lg:w-1/2" alt="Product 3" />
      </div>
      <img src={Image4} alt="Product 4" />
      <img src={Image5} alt="Product 5" />
    </div>
  );
};

export default ProductImages;
