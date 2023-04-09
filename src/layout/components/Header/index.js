import styles from './Header.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);
function Header() {
  return (
    <div className={cx('wrapper')}>
      <h2>Header</h2>
    </div>
  );
}

export default Header;
