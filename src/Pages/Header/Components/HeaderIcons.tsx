import { useContext } from 'react';
import { Icon, Icons } from '../../../components/Icons';
import IconButton from '../../../components/Icons/IconButton';
import { HeaderContext } from '../Header';

const HeaderIcons = () => {
  const { showMenu, setShowMenu } = useContext(HeaderContext);

  return (
    <div className="flex justify-center gap-x-3 1/2 lg:w-1/6 px-3 z-30">
      <IconButton>
        <span className="flex justify-center text-xs absolute w-full h-full">
          0
        </span>
        <Icon SVGIcon={Icons.Bag} alt="Bag" />
      </IconButton>
      <IconButton>
        <Icon SVGIcon={Icons.Search} alt="Search" />
      </IconButton>
      <IconButton className="hidden lg:block">
        <Icon SVGIcon={Icons.Account} alt="Account" />
      </IconButton>
      <IconButton className="lg:hidden" onClick={() => setShowMenu(!showMenu)}>
        <Icon SVGIcon={Icons.Nav} alt="Nav" />
      </IconButton>
    </div>
  );
};

export default HeaderIcons;
