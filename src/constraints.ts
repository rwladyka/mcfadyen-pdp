import { Size } from './types';

const PRODUCT_SIZE_KEY = 'productSelectedSize';

const SIZES: Size[] = [
  { label: 'XS', stock: 1 },
  { label: 'S', stock: 1 },
  { label: 'M', stock: 0 },
  { label: 'L', stock: 1 },
  { label: 'XXL', stock: 1 },
];

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

export { PRODUCT_SIZE_KEY, SIZES, MENU_ITEMS };
