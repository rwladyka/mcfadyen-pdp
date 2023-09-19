import { Dispatch, SetStateAction, createContext, useState } from 'react';
import HeaderIcons from './Components/HeaderIcons';
import Logo from './Components/Logo';
import Menu from './Components/Menu';

type HeaderContextProps = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};

export const HeaderContext = createContext<HeaderContextProps>({
  showMenu: false,
  setShowMenu: () => {},
});

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <HeaderContext.Provider value={{ showMenu, setShowMenu }}>
      <header className="sticky top-0 flex justify-around flex-row w-full py-6 bg-white z-30">
        <Logo />
        <Menu />
        <HeaderIcons />
      </header>
    </HeaderContext.Provider>
  );
};

export default Header;
