import classNames from 'classnames/bind';

import styles from './HomePage.module.scss';
import Header from '../../components/Header';
import Banner from './Banner';
import Couple from './Couple';

const cx = classNames.bind(styles);
function HomePage() {
  return (
    <div className={cx('container')}>
      <Header />
      <Banner />
      <Couple />
    </div>
  );
}

export default HomePage;
