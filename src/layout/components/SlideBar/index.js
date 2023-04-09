import styles from './SlideBar.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function SlideBar() {
  return (
    <div className={cx('wrapper')}>
      <h2>SlideBar</h2>
    </div>
  );
}

export default SlideBar;
