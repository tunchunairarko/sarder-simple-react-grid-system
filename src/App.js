import Container from './components/Container';
import Row from './components/Row';
import Column from "./components/Column";
import "./assets/grid.scss"

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Column lg={12}>
            <h1>React Portfolio</h1>
          </Column>
        </Row>
        <Row>
          <Column lg={4} style={{ backgroundColor: "green" }}>
            adsfadsf
          </Column>
          <Column lg={4} style={{ backgroundColor: "green" }}>
            adsfadsf
          </Column>
          <Column lg={4} style={{ backgroundColor: "green" }}>
            adsfadsf
          </Column>
        </Row>
      </Container>
    </div>
  );
}

export default App;
