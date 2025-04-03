import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      Hello World
      <Card
        id={1}
        paragraph="TypeScript"
        details="TS para FrontEnd e BackEnd"
      />
      <Card id={2} paragraph="HTML" details="HTML para FrontEnd" />
      <Card id={3} paragraph="SQL" details="SQL para Banco de dados" />
    </Layout>
  );
}

export default App;
