import classNames from 'classnames/bind';

import styles from './Banner.module.scss';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
function Banner() {
  useEffect(() => {
    const heartAnimation = (e) => {
      let banner = document.getElementById('banner');
      let heart = document.createElement('span');
      heart.classList.add(cx('heart'));
      let x = e.offsetX;
      let y = e.offsetY;

      let size = Math.random()*80;
      heart.style.width = 20 + size + 'px';
      heart.style.height = 20 + size + 'px';

      let tranformValue = Math.random()*360;
      heart.style.transform = 'rotate('+ tranformValue+'deg)';
      heart.style.left = x+'px';
      heart.style.top = y+'px';
      banner.appendChild(heart);
      setTimeout(() => {
        heart.remove();
      },1000);
    }
    document.addEventListener('mousemove', heartAnimation);
    return () => {
      document.removeEventListener('mousemove', heartAnimation)
    }
  })
  return (
    <div className={cx('container')} id={'banner'}>
      <div className={cx('information')}>
        <div className={cx('banner-content')}>
          <h1 className={cx('couple-name')}>Trần Ngọc & Sa Sa</h1>
          <h4 className={cx('slogan')}>Save the date</h4>
          <p className={cx('wedding-date')}>01-05-2021</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
