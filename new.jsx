/*
--------Dynamic content excercise-------------------- CE. 10
export default function App() {
    let [ selectedTopic, setSelectedTopic ] = useState();
    

    function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    }
    let warningContent = <button onClick={() => handleSelect("warning")}>Delete</button> 
    
    if (selectedTopic) {
        warningContent = (
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick= {() => handleSelect(null)}>Proceed</button>
        </div>
        );
    }
        
    return (
      <div>
        {warningContent}
        
      </div>    
    );
}

*/