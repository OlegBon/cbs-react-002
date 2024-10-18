import React from 'react';
import mapUkraine from './assets/FlagMap_of_Ukraine.png';
import './App.css';

function App() {

  // За допомогою синтаксису JSX
  const styles = {
    block: {
      marginTop: '40px',
      padding: '40px',
      textAlign: 'center',
      backgroundColor: 'lightgray',
    },
    hSecond: {
      color: 'red',
      fontSize: '48px',
    },
    paragraph: {
      color: 'blue',
      fontSize: '36px',
      lineHeight: '1.2',
    }
  };

  const stylesImg = 'block-img';

  // Використовуючи метод createElement
  const createHSecond = React.createElement('h2', {style: {color: 'blue', fontSize: '48px'}}, 'Використовуючи метод createElement');

  const createParagraph = React.createElement('p', {style: {color: 'red', fontSize: '36px', lineHeight: '1.2'}}, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse suscipit odit doloribus debitis libero voluptatem minima saepe hic, sit at sapiente fugit ullam voluptatibus delectus nam fuga voluptates reiciendis labore!');

  const imgSrc = '/src/assets/FlagMap_of_Ukraine.png'

  const createImg = React.createElement('img', {src: imgSrc}, null);

  // Форма
  const stylesForm = {
    blockForm: {
      marginBottom: '40px',
      marginTop: '40px',
      padding: '40px',
      fontSize: '36px',
      backgroundColor: 'lightgray',
    },
  };

  const onChangeInput = (e) => {
    console.log(e.target.value);
  }

  return (
    <>
      {/* За допомогою синтаксису JSX */}
      <div style={styles.block}> 
        <h2 style={styles.hSecond}>За допомогою синтаксису JSX</h2>
        <p style={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse suscipit odit doloribus debitis libero voluptatem minima saepe hic, sit at sapiente fugit ullam voluptatibus delectus nam fuga voluptates reiciendis labore!</p>
        <img src={mapUkraine} className={stylesImg} alt="Flag Map of Ukraine" />
      </div> 

      {/* Використовуючи метод createElement */}
      <div style={styles.block}> 
        {createHSecond}
        {createParagraph}
        {createImg}
      </div> 

      {/* Форма */}
      <div style={stylesForm.blockForm}> 
        <form>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" onChange={onChangeInput} />
        </form>
      </div> 
    </>
  )
}

export default App
