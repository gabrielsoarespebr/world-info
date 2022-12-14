import Logo from '../../assets/images/worldSpinning.gif';
import styles from './styles.module.css';
import { searchbar } from '../../services/searchbar';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <img className={styles.img} src={Logo} alt="Logo" />
                <h1 className={styles.title}>World Info</h1>
            </div>
            <input id="headerSearchbar" type="search" placeholder="Insert country here." onChange={searchbar} />
            <a href="#" target="_blank">About</a>

        </header>
    )
}