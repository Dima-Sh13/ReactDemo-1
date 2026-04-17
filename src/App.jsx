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
    <>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title} {...item } />)}
          

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
    </>
  );
}

function sum(a,b){
  console.log("el resultado de a +b es ", a+b)
  return a + b
} 

let calculator = function(a,b) {
  suma: (a,b) => {return a + b}
}

function greeting(name) {
  return "hello" + name
}
function greeting(name) {
  return "hello" + name
}
function greeting(name) {
  return "hello" + name
}
function greeting(name) {
  return "hello" + name
}
function greeting(name) {
  return "hello" + name
}

export default App;
  