import Header from "./components/Header/Header";
import Liens from "./components/Liens/Liens";
import Tableau from "./components/Tableau/Tableau";
import ErrorBoundaryCustom from "./components/ErrorBoundary/ErrorBoundaryCustom"

const App = (props) => {

  return (
    <ErrorBoundaryCustom composant="App">
      <Header />

      <div className="main">

        <ErrorBoundaryCustom composant="Tableau">
            <Tableau />
        </ErrorBoundaryCustom>

        <ErrorBoundaryCustom composant="Liens">
            <Liens /> 
        </ErrorBoundaryCustom>
        
      </div>
    </ErrorBoundaryCustom>
  )
}

export default App;
