import styles from './Header.module.css'

const Header = (props) => {

    return (
        <div className={styles.header_exemple}>
            <h1>Error Boundaries</h1>
            <h4>Une application d'exemple pour montrer le fonctionnement des périmètres d'erreurs</h4>
        </div>
    )
}

export default Header;