import { Icons } from '../../../components/Icons';

const BuyButton = () => (
  <button className="bg-black text-white flex justify-center gap-2 py-2 rounded-[100px] my-6 uppercase font-normal">
    <span>Add to Bag</span>
    <img src={Icons.Arrow} alt="arrow buy" className="my-auto" />
  </button>
);

export default BuyButton;
