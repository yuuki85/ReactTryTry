import { About } from "./Partials/About";
import { Header } from "./Partials/Header";
import { Navbar } from "./Partials/Navbar";
import { Projects } from "./Partials/Projects";
import { Services } from "./Partials/Services";
import { Skills } from "./Partials/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
