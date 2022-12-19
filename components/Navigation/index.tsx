import DarkModeSwitch from '../Header/DarkModeSwitch';
import List from './List';
import Nav from './Nav';

interface NavigationItem {
  to: string;
  name: string;
}

const navigation: NavigationItem[] = [
  { to: '/', name: 'Intro' },
  { to: '/blog', name: 'Blog' }
  // { to: '/uses', name: 'Uses' },
  // { to: '/contact', name: 'Contact' }
];

const Navigation = () => {
  return (
    <div className="hidden lg:block">
      <Nav>
        {navigation.map((item: NavigationItem) => (
          <Nav.Item to={item.to} key={item.to}>
            {item.name}
          </Nav.Item>
        ))}
        <li>
          <DarkModeSwitch />
        </li>
      </Nav>
    </div>
  );
};

const Menu = () => {
  return (
    <List>
      {navigation.map((item: NavigationItem) => (
        <List.Item to={item.to} key={item.to}>
          {item.name}
        </List.Item>
      ))}
    </List>
  );
};

export { Navigation, Menu };
