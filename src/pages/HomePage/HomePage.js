import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';

const cx = classNames.bind(styles);
function HomePage() {
  return (
    <div className={cx('container')}>
      <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;
