import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

import { Favorite, Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const navLinks = [
  {
    to: '/',
    page: 'Home',
  },
  {
    to: '/story',
    page: 'Story',
  },
  {
    to: '/album',
    page: 'Album',
  },
  {
    to: '/upload',
    page: 'Upload',
  },
];

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <div className={cx('logo')}>
          <span>N</span>
          <Favorite className={cx('logo-heart')} />
          <span>S</span>
        </div>
        <nav>
          <ul className={cx('nav-list')}>
            {navLinks.map((link) => (
              <li className={cx('nav-item')} key={link.to}>
                <NavLink
                  to={link.to}
                  className={cx('nav-link')}
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? 'bold' : '',
                      color: isActive ? 'red' : 'black',
                    };
                  }}
                >
                  {link.page}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <IconButton className={cx('menu-btn')}>
          <Menu fontSize="large" />
        </IconButton>
      </div>
    </header>
  );
}

export default Header;
