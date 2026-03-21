
import { CORE_CONCEPTS } from './data.js';
import CoreConcept from './components/CoreConcepts.jsx';
import Header from './components/Header.jsx';




function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept title="Components" description="The core UI building block, that adds complexity and functionality to our code" 
          img={componentsImg}/>
          <CoreConcept title={CORE_CONCEPTS[2].title} img={CORE_CONCEPTS[2].img} description="Data we pass to react components that make them show dynamic data with only 1 component. We do this with HTML"></CoreConcept>
          <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} img={CORE_CONCEPTS[1].img}></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
        </ul>

        </section>
        
      </main>
    </div>
  );
}



export default App;
