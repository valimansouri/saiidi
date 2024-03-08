
import dictionary from '@/dictionary';
import HeaderMain from '../header/header-main';
import styles from './layout.module.css';

const Layout = ({children}) =>{


    return (
        <div className={styles.layout}>
            <HeaderMain/>

            <div className={styles.layout_title_box}>
                <h3>{dictionary.layout.title}</h3>
            </div>

            {children}

        </div>
    );
};

export default Layout;