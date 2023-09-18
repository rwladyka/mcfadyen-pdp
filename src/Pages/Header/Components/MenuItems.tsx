const MENU_ITEMS = [
  {
    label: 'The Edit',
    link: '#',
  },
  {
    label: 'New Arrivals',
    link: '#',
  },
  {
    label: 'Designers',
    link: '#',
  },
  {
    label: 'Clothing',
    link: '#',
  },
  {
    label: 'Shoes',
    link: '#',
  },
  {
    label: 'Bags',
    link: '#',
  },
  {
    label: 'Accessories',
    link: '#',
  },
  {
    label: 'Jewelry',
    link: '#',
  },
  {
    label: 'Beauty',
    link: '#',
  },
  {
    label: 'home',
    link: '#',
  },
];

const MenuItems = () => (
  <ul className="flex flex-col lg:flex-row justify-between uppercase gap-x-4 text-sm gap-y-2">
    {MENU_ITEMS.map(({ label, link }) => (
      <li key={`${link}-${label}`}>
        <a href={link} title={label}>
          {label}
        </a>
      </li>
    ))}
  </ul>
);

export default MenuItems;
