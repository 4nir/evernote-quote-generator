import React, {useState} from 'react';

const QuoteRenderHook = () => {
  // array that stores quotes
  const [quotes, setQuotes] = useState([
    {quote: 'The wise man has no wants.', author: 'Seneca'},
    {quote: 'Productize yourself.', author: 'Naval'},
    {quote: 'Know thy enemy.', author: 'Sun Tzu'}
  ]);
  // string that stores quote
  const [quote, setQuote] = useState('Author goes here');
  const [author, setAuthor] = useState('Quote goes here');

  const generateRandomQuote = () => {
    let quote_object_new = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(quote_object_new.quote);
    setAuthor(quote_object_new.author)
  };

  return (
    <div>
      <div>
        <p id='text'>{quote}</p>
        <p id="author">{author}</p>
        <button onClick={generateRandomQuote} id='new-quote'>
          New Quote
        </button>
        {/* <a href='https://www.w3schools.com'>Visit W3Schools.com!</a>  */}
      </div>
    </div>
  );
}
;

export default QuoteRenderHook;
