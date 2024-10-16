import styles from './Header.module.css';
import headerImage from './banner_header.png'; 

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          LOGO
        </div>
        <ul className={styles.navbar}>
          <li className={styles['nav-item']}><a className={styles['nav-link']} href="#home">Início</a></li>
          <li className={styles['nav-item']}><a className={styles['nav-link']} href="#product">Produto</a></li>
          <li className={styles['nav-item']}><a className={styles['nav-link']} href="#about">Sobre Nós</a></li>
        </ul>
        
        <ul className={styles.account}>
          <span className={styles.accountIcon}>&#128100;</span>
          <li className={styles['nav-item']}><a className={styles['nav-link']} href="#about">Minha Conta</a></li>
        </ul>     
      </div>
      
      <img src={headerImage} alt="Descrição da imagem" className={styles['header-image']} />
    </>
  );
}

export { Header };
