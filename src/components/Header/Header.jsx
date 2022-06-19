import styles from './Header.module.scss'

const Header = (props) => {

    /* let variableError = null;
    if(variableError.length > 0) {
      // quelque chose qui provoque une erreur
    } */

    return (
        <div className={styles.header_exemple}>
            <h1>Error Boundaries</h1>
            <h4>Une application d'exemple pour montrer le fonctionnement des périmètres d'erreurs</h4>
        </div>
    )
}

export default Header;