import dictionary from '@/dictionary';
import styles from '../article.module.css';

const ArticleFooter = () => (
    <div className={styles.article_footer_target}>
        <h5>{dictionary.article.footer.label}</h5>

        <div className={styles.article_footer_select_box}>
            <div>
                <div className={styles.article_footer_icon}>
                    <img className={styles.article_footer_icon_img} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZElEQVR4nN3XsUuXQRgH8I9aSUNIQRgJGa6OTYJDCOUQIS462eLYXxARDhG0FQaCg6CLUVCDcy4uioNLILQ0RA6pGS1FBhYvnPDyQvqev4c38AsP73DHfTju3rv3JS59eIAxDaUDT/Ebf/CoKXgugYc11AR6t4K+R1sT8EoJ/YEbTaBnSuv6Fbc1lHa8xkNciR78Mqawhm18wCwGSn0uYRJvU/seNvECvSdBR/C9snnK9RHr2D+iz0/cz0FHcXDEgLl1pw7ag2+B6ALO1oGfBaJLdd/rNmwFocXaX1cz1wJnuywjg4HwdA5883/B/YHwuxz4YiBcnONXc/BPgfirHHg+EC7qebrJjs14MFzUKrqPgzvTTRQJ7+BcnVk/CYYfq5kufAlCt9OdXTv3guCJHPQwiy2ib5ww5ytfktXb5zN+/aN9Axe0kM70p7CbdmdxKAynPwjpeQsv074oPpdmWkWduvwFRv+I7CEcSPAAAAAASUVORK5CYII="/>
                    <span>pay</span>
                </div>
            </div>

            <h5>{dictionary.article.footer.selectLabel}</h5>

            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+ElEQVR4nO3YTYrCQBRF4bhDlRYH9grvyapshBZtN6CQpgaC2Imazk+94D2QQaAqvI8ig6QonHPOOeecaxOwknQEdmVZzotgSVoA38BJ0rp2UVVVM+AAVOmSdG5cnCFJ6zTTdT7gJ83ctHh/szAMRn8RabZ94wZgWbMhK0b1iHS/fLbx434jcAE+izzv7Pl+Fkmblx4QAUNXRAQMfSFyYugbkQPDUIgxMYMjxsCMhhgSMzpiCEw2RJ+Y7Ig+MGEQXTDhEP/BhEW0wYRHvIKZDOLZt0O0b5wuJzONk2iBmQ7iAWZ6iGvpl5KkL2Ab8feSc84555x7s34BFII/Z52zf4EAAAAASUVORK5CYII="/>
        </div>

        <div className={styles.article_footer_option_box}>
            {/* Location of options */}
        </div>

    </div>
);

export default ArticleFooter;