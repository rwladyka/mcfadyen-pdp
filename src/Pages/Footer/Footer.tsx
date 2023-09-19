import EditorName from './EditorNote/EditorName';
import Quote from './EditorNote/Quote';
import Title from './EditorNote/Title';

const editor = {
  name: 'Minna Shim',
  role: 'Fashion Editor',
  title: 'a note from the editor',
  quote:
    'The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky.',
};

const Footer = () => {
  return (
    <footer className="px-4 mb-[69px] lg:mb-[84px]">
      <Title text={editor.title} />
      <Quote text={editor.quote} />
      <EditorName name={editor.name} role={editor.role} />
    </footer>
  );
};

export default Footer;
