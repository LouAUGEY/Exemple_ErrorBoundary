import Table  from "react-bootstrap/Table";
import styles from "./Tableau.module.css"

const Tableau = (props) => {

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
            </tbody>
        </Table>
    )
}

export default Tableau;