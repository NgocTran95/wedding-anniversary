import classNames from 'classnames/bind';
import styles from './StoryPage.module.scss';

const cx = classNames.bind(styles);
function StoryPage() {
  return (
    <div className={cx('container')}>
      <h1>StoryPage</h1>
    </div>
  );
}

export default StoryPage;
