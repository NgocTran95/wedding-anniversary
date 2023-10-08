import classNames from 'classnames/bind';

import styles from './HomePage.module.scss';
import Banner from '../../components/Banner';
import Header from '../../components/Header';

const cx = classNames.bind(styles);
function HomePage() {
  return (
    <div className={cx('container')}>
      <Header />
      <Banner />
    </div>
  );
}

export default HomePage;
