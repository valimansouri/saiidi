import Logo from '../UI/logo/logo';
import Menu from '../UI/menu/menu';
import styles from './header.module.css';

const HeaderMain = () => (
        <div className={styles.header_target}>
            <Logo/>
            <Menu/>
        </div>
    );

export default HeaderMain;