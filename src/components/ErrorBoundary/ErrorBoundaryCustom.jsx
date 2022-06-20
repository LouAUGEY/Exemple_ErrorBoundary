import React from "react";
import { Alert, Badge } from "react-bootstrap";
import styles from "./ErrorBoundaryCustom.module.scss"

// Le composant de périmètre d'erreur doit nécessairement être de type class-component pour pouvoir utiliser les méthodes
// getDerivedStateFromError et/ou componentDidCatch 

class ErrorBoundaryCustom extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Mettez à jour l'état, de façon à montrer l'UI de repli au prochain rendu.
      console.log('getDerived')
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // Vous pouvez avec componentDidCatch faire appel à des effets de bords, 
      // par exemple envoyer un log d'erreur par requete HTTP à un serveur de logs

      console.log("---ERROR BOUNDARY---");
      console.log("error : " + error);
    }
  
    render() {
      if (this.state.hasError) {
        // l'UI a affiché en cas d'erreur. Vous pouvez utiliser les props passé à l'ErrorBoundary
        return (
          <Alert variant="danger" className={styles.alert_width}>
            Une erreur a été interceptée au niveau du composant : <Badge bg="light" text="dark">{this.props.composant}</Badge>
          </Alert>
        );
      }
  
      return this.props.children;
    }
  }

  export default ErrorBoundaryCustom;