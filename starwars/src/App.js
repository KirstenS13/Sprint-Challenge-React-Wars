import React from 'react';
import './App.css';
import styled from 'styled-components';

import CharacterList from './components/CharacterList';

const Headline = styled.h1`
  font-size: 4rem;
  color: black;
  font-family: 'Lucida Console', Courier, monospace;
  margin: 20px 0;
`

const SubHeader = styled.h2`
  font-size: 2rem;
  color: black;
  font-family: 'Lucida Console', Courier, monospace;
  margin: 10px 0;
`

const HeadlineContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  //Need state for characters
  //const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  return (
    <div className="App">
      <HeadlineContainer>
        <Headline className="Header">Star Wars Characters</Headline>
        <SubHeader>And Their Physical Attributes</SubHeader>
      </HeadlineContainer>
      <CharacterList/>
    </div>
  );
}

export default App;
