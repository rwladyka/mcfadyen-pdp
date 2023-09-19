import { Icons } from '../../../components/Icons';

const HeartButton = () => (
  <div className="w-full lg:product-sticky right-0">
    <img
      src={Icons.Heart}
      alt="like it"
      className="w-[25px] h-[25px] absolute top-[10px] right-6 cursor-pointer z-20"
    />
  </div>
);

export default HeartButton;
