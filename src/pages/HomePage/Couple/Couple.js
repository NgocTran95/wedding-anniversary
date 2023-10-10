import classNames from 'classnames/bind';
import styles from './Couple.module.scss';
import { Row, Col } from 'antd'

import broomImg from '../../../assets/images/broom.jpg';
import brideImg from '../../../assets/images/bride.jpg'

const cx = classNames.bind(styles);
function Couple() {
  return <section className={cx('container')}>
    <div className={cx('inner')}>
        <Row justify={'center'} align={'middle'} className={cx('row')}>
            <Col className={cx('portrait')} xs={24} md={24} lg={12}>
                <img src={broomImg} alt='brom-image' className={cx('image')}/>
            </Col>
            <Col className={cx('details')} xs={24} md={24} lg={12}>
                <h3 className={cx('title')}>The Groom</h3>
                <p className={cx('quote')}>Hi I am suntina , dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                <span className={cx('signature')}>Trần Ngọc</span>
            </Col>
        </Row>
        <Row justify={'center'} align={'middle'} className={cx('row')}>
            <Col className={cx('details')} xs={24} md={24} lg={12}>
                <h3 className={cx('title')}>The Bride</h3>
                <p className={cx('quote')}>Hi I am suntina , dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                <span className={cx('signature')}>Sa Sa</span>
            </Col>
            <Col className={cx('portrait')} xs={24} md={24} lg={12}>
                <img src={brideImg} alt='bride-image' className={cx('image')}/>
            </Col>
        </Row>
    </div>
  </section>;
}

export default Couple;
