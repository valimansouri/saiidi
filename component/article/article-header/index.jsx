import Logo from '@/component/UI/logo/logo';
import styles from '../article.module.css';
import dictionary from '@/dictionary';

const ArticleHeader = () =>(
  <div className={styles.article_header_target}>
    <span>{dictionary.article.title}</span>
    <Logo/>
  </div>
);

export default ArticleHeader;