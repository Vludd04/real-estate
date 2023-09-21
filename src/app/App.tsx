import Header from "./components/header";
import Footer from "./components/footer";
import { useRoutes } from "react-router-dom";
import routes from "../routes";

function App() {
  const elements = useRoutes(routes());
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      {elements}
      <Footer />
    </div>
  );
}

export default App;
