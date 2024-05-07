import classNames from 'classnames/bind';
import { Col, Row } from 'antd';

import styles from './CountUp.module.scss';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
function CountUp() {
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const marryDate = new Date('May 1 2021').getTime();
      const distance = now - marryDate;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('clock-days').innerHTML = days;
      document.getElementById('clock-hours').innerHTML =
        hours < 10 ? '0' + hours : hours;
      document.getElementById('clock-minutes').innerHTML =
        minutes < 10 ? '0' + minutes : minutes;
      document.getElementById('clock-seconds').innerHTML =
        seconds < 10 ? '0' + seconds : seconds;
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className={cx('count-up')}>
      <div className={cx('container')}>
        <Row align={'middle'} justify={'center'}>
          <Col xs={24} lg={16}>
            <h2 className={cx('title')}>
              <span>We are going on...</span>
              The Advanture
            </h2>
          </Col>
          <Col xs={24} lg={16}>
            <div className={cx('count-up-clock')}>
              <div className={cx('clock')}>
                <div className={cx('box')}>
                  <div className={cx('value')} id={'clock-days'}>
                    800
                  </div>
                  <span>Days</span>
                </div>
                <div className={cx('box')}>
                  <div className={cx('value')} id={'clock-hours'}>
                    03
                  </div>
                  <span>Hours</span>
                </div>
                <div className={cx('box')}>
                  <div className={cx('value')} id={'clock-minutes'}>
                    30
                  </div>
                  <span>Mins</span>
                </div>
                <div className={cx('box')}>
                  <div className={cx('value')} id={'clock-seconds'}>
                    59
                  </div>
                  <span>Secs</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default CountUp;
