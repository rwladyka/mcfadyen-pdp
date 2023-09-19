import { PRODUCT_DETAILS } from '../../../constraints';
import { ProductDetail } from '../../../types';

type TabsProps = {
  selected: ProductDetail;
  onSelectTab: (detail: ProductDetail) => void;
};

const Tabs = ({ selected, onSelectTab }: TabsProps) => {
  return (
    <ul className="flex justify-between mb-1">
      {PRODUCT_DETAILS.map((detail) => (
        <li
          key={detail.title}
          onClick={() => onSelectTab(detail)}
          className={`uppercase cursor-pointer ${
            selected.title === detail.title
              ? 'text-black font-bold underline'
              : 'text-darkGrey'
          }`}
        >
          {detail.title}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
