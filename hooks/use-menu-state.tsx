import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface MenuStateContextType {
  isMenuOpen: boolean;
  setMenuState: (state: boolean) => void;
}
const MenuStateContext = createContext<MenuStateContextType>(
  {} as MenuStateContextType
);

export const MenuStateProvider = ({ children }: PropsWithChildren) => {
  const [isMenuOpen, setMenuState] = useState<boolean>(false);

  return (
    <MenuStateContext.Provider value={{ isMenuOpen, setMenuState }}>
      {children}
    </MenuStateContext.Provider>
  );
};

export default function useMenuState() {
  return useContext(MenuStateContext);
}
