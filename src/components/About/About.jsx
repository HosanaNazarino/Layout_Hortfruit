import styles from './About.module.css';

function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sobre Nós</h1>
            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur exercitationem maiores fugit dignissimos quidem nulla iste praesentium, ea aperiam! Temporibus qui voluptatem eaque nemo quae tempore architecto impedit, possimus eos.
            </p>
            <p className={styles['learn-more']}>Saiba mais</p>
        </div>
    );
}

export { About };
