import ArticleFooter from './article-footer';
import ArticleHeader from './article-header';
import ArticleMain from './article-main';
import styles from './article.module.css';

const Article = () =>(
    <article className={styles.article}>
        <ArticleHeader/>
        <ArticleMain/>
        <ArticleFooter/>
    </article>
);

export  default Article;