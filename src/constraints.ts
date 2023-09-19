import { Size } from './types';

const PRODUCT_SIZE_KEY = 'productSelectedSize';

const SIZES: Size[] = [
  { label: 'XS', stock: 1 },
  { label: 'S', stock: 1 },
  { label: 'M', stock: 0 },
  { label: 'L', stock: 1 },
  { label: 'XXL', stock: 1 },
];

const PRODUCT_DETAILS = [
  {
    title: 'Details',
    content:
      'The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.',
  },
  {
    title: 'Delivery',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta maximus viverra. Sed pretium elit felis, sed consequat nibh sodales vel. Nam dignissim ultrices tortor, nec malesuada elit sollicitudin eu. Pellentesque erat velit, facilisis ut porttitor non, iaculis at orci. Donec posuere sagittis placerat.',
  },
  {
    title: 'Fit',
    content:
      'Sed ac eros velit. Integer dui turpis, interdum id eleifend laoreet, ullamcorper eu odio. Quisque tincidunt imperdiet maximus. Donec accumsan neque sed tellus ultrices, non imperdiet orci elementum. Etiam vel porttitor felis. Morbi feugiat enim sem, a sollicitudin ex semper sed. Nullam sit amet ligula vulputate, porttitor elit eu, consequat orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in vulputate ex.',
  },
  {
    title: 'Share',
    content:
      'Maecenas pulvinar lectus et gravida faucibus. Nunc hendrerit pharetra purus, in egestas lorem maximus eget. Donec et diam laoreet, malesuada libero in, luctus purus. In ultrices arcu non odio posuere placerat. Nullam faucibus convallis urna a tincidunt. Donec egestas aliquam turpis, non hendrerit risus molestie sit amet.',
  },
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

export { PRODUCT_SIZE_KEY, SIZES, MENU_ITEMS, PRODUCT_DETAILS };
