import styles from './Home.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <h2>HomePage</h2>
    </div>
  );
}

export default Home;
