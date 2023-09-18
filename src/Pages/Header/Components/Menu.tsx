import { useContext } from 'react';
import { HeaderContext } from '../Header';
import Overlay from '../../../components/Overlay/Overlay';
import { Icon, IconButton, Icons } from '../../../components/Icons';
import MenuItems from './MenuItems';

const Menu = () => {
  const { showMenu, setShowMenu } = useContext(HeaderContext);

  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <nav
        className={`justify-center lg:w-4/6 items-center lg:flex z-30 bg-white transition-all ease-out duration-100 lg:relative fixed top-0 right-0  ${
          showMenu ? 'h-full w-32 px-4' : 'w-0 '
        }`}
        data-testid="menu"
      >
        {showMenu && (
          <IconButton
            className="w-full flex justify-end text-lg py-4"
            onClick={closeMenu}
            testid="btn-close"
          >
            <Icon SVGIcon={Icons.Close} alt="Close" />
          </IconButton>
        )}
        <MenuItems />
      </nav>
      <Overlay show={showMenu} onClick={closeMenu} />
    </>
  );
};

export default Menu;
