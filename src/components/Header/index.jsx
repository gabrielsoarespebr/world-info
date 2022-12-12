import Logo from '../../assets/images/worldSpinning.gif';
import styles from './styles.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <img className={styles.img} src={Logo} alt="Logo" />
                <h1 className={styles.title}>World Info</h1>
            </div>
            <input type="search" placeholder="Insert country here." />

        </header>
    )
}