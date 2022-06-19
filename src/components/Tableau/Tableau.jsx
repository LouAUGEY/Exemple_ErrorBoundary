import Table  from "react-bootstrap/Table";
import styles from "./Tableau.module.scss"

const Tableau = (props) => {

    /* let variableError = null;
    if(variableError.length > 0) {
      // quelque chose qui provoque une erreur
    } */
  

    return(
        <Table striped bordered className={styles.tableau}>
            <thead>
                <tr>
                    <th>Composant</th>
                    <th>Fonction</th>
                    <th>Type </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Header</td>
                    <td>Composant affichant un bandeau de titre</td>
                    <td>Fonction-based</td>
                </tr>
                <tr>
                    <td>Tableau</td>
                    <td>Composant affichant un tableau listant les composants </td>
                    <td>Fonction-based</td>
                </tr>
                <tr>
                    <td>Liens</td>
                    <td>Composant affichant un carousel avec une liste de liens utiles </td>
                    <td>Fonction-based</td>
                </tr>
                <tr>
                    <td>ErrorBoundary</td>
                    <td>Composant permettant d'intercepter les erreurs javascripts </td>
                    <td>Class-based</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Tableau;