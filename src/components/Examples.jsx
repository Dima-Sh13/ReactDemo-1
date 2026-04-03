import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
export default function Examples() {
    let [ selectedTopic, setSelectedTopic ] = useState();
    
    
      function handleSelect(selectedButton){
        setSelectedTopic(selectedButton);
        console.log(selectedTopic)
      }
    return(<section id="examples">
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
           
        </section>)
};