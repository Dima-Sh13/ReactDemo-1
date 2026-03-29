import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import CoreConcept from './components/CoreConcepts.jsx';
import Header from './components/Header.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';





function App() {
  let [ selectedTopic, setSelectedTopic ] = useState();


  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic)
  }
  
  
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          
          <CoreConcept title="Components" description="The core UI building block, that adds complexity and functionality to our code" 
          img={CORE_CONCEPTS[0].img}/>
          <CoreConcept title={CORE_CONCEPTS[2].title} img={CORE_CONCEPTS[2].img} description="Data we pass to react components that make them show dynamic data with only 1 component. We do this with HTML"></CoreConcept>
          <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} img={CORE_CONCEPTS[1].img}></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
          
        </ul>

        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === CORE_CONCEPTS[0].title } onSelect={() => handleSelect(CORE_CONCEPTS[0].title)}>{CORE_CONCEPTS[0].title}</TabButton>
            <TabButton isSelected={selectedTopic === CORE_CONCEPTS[1].title } onSelect={() => handleSelect(CORE_CONCEPTS[1].title)}>{CORE_CONCEPTS[1].title}</TabButton>
            <TabButton isSelected={selectedTopic === CORE_CONCEPTS[2].title } onSelect={() => handleSelect(CORE_CONCEPTS[2].title)}>{CORE_CONCEPTS[2].title}</TabButton>
            <TabButton isSelected={selectedTopic === CORE_CONCEPTS[3].title } onSelect={() => handleSelect(CORE_CONCEPTS[3].title)}>{CORE_CONCEPTS[3].title}</TabButton>
            
          </menu>
            {!selectedTopic ? <p>Please select a topic.</p>: <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>

          </div>}
           
        </section>
        
      </main>
    </div>
  );
}
<div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={() => handleSelect("")}>Proceed</button>
        </div>


export default App;
