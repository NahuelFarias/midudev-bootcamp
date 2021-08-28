import "./App.css";
import Mensaje from "./Mensaje";

const Description = () => {
  return <>Esta es la app del curso fullstack bootcamp</>;
  /*A esto se le llama fragmentacion´*/
};

const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando" />
      <Mensaje color="green" message="En un curso" />
      <Mensaje color="blue" message="En ReactJS" />
      <Description />
      {/* Siempre que hay llaves se realiza una evalucacion */}
      {/* +new Date() Me da el timestamp value */}
    </div>
  );
};

export default App;
