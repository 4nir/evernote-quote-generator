import React, {useState} from 'react';

const QuoteRenderHook = () => {
  // array that stores quotes
  const [quotes, setQuotes] = useState(['first', 'second', 'third', 'fourth', 'fifth']);
  // string that stores quote
  const [quote, setQuote] = useState('first load from hooks');

  const generateRandomQuote = () => {
    let new_text = quotes[Math.floor(Math.random() * quotes.length)];
    console.log('new_text: ', new_text);
    setQuote(new_text);
  };

  return (
    <div>
      <div>
        <p id='text'>{quote}</p>
        <p id="author">Some author</p>
        <button onClick={generateRandomQuote} id='new-quote'>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteRenderHook;
