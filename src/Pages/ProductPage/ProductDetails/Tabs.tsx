const TabTitles = ['Details', 'Delivery', 'Fit', 'Share'];

type TabsProps = {
  selected: string;
};

const Tabs = ({ selected }: TabsProps) => {
  return (
    <ul className="flex justify-between mb-1">
      {TabTitles.map((title) => (
        <li
          key={title}
          className={`uppercase ${
            selected === title
              ? 'text-black font-bold underline'
              : 'text-darkGrey'
          }`}
        >
          {title}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
