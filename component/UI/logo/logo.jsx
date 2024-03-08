import styles from './logo.module.css';


const Logo = () => (
    <div className={styles.logo_target}>
        
        <div className={styles.logo_icon}>
            <span></span>
            <span className={styles.logo_icon_smal_circle}></span>
        </div>

        <h2>
            MoonPay
        </h2>

    </div>
);

export default Logo;