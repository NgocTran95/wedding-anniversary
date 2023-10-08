import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Drawer } from 'antd';

import styles from './Header.module.scss';

export const navLinks = [
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
  const [openDrawer, SetOpenDrawer] = useState(false);
  const showDrawer = () => {
    SetOpenDrawer(true);
  };

  const onClose = () => {
    SetOpenDrawer(false);
  };
  return (
    <header className={cx('container')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <span>N</span>
          <FontAwesomeIcon icon={faHeart} className={cx('logo-heart')} />
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
        <button onClick={showDrawer} className={cx('menu-btn')}>
          <FontAwesomeIcon icon={faBars} className={cx('menu-btn-icon')} />
        </button>
      </div>
      <Drawer placement="left" onClose={onClose} open={openDrawer}>
        <ul className={cx('menu-nav-list')}>
          {navLinks.map((link) => (
            <li className={cx('menu-nav-item')} key={link.to}>
              <NavLink
                to={link.to}
                className={cx('menu-nav-link')}
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? 'bold' : '',
                    color: isActive ? 'red' : 'black',
                  };
                }}
                onClick={onClose}
              >
                {link.page}
              </NavLink>
            </li>
          ))}
        </ul>
      </Drawer>
    </header>
  );
}

export default Header;
