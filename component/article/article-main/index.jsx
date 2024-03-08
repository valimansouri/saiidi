import dictionary from '@/dictionary';
import styles from '../article.module.css';

const ArticleMain = () => (
    <div className={styles.article_main_target}>

        <div className={styles.article_main_title_box}>
            <h4>{dictionary.article.label}</h4>
        </div>

        <div className={styles.article_main_data_box}>
            <span>~ 0.1 BTC G USD 5857.4141</span>
            <span>USD 585.74</span>
            <span>Moonpay Fee</span>
            <span>USD 26.36</span>
            <span>Your Company Fee</span>
            <span>USD 5.86</span>
            <span>Total</span>
            <span>USD 617.96</span>
        </div>

    </div>
);

export default ArticleMain;