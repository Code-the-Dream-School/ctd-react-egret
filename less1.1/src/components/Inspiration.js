import React, {useState} from 'react';
import styles from './Inspiration.module.css'

const Inspiration = () => {
    const [quote, setQuote] = useState([]);
    let quoteDisplay = '';
    let authorDisplay = '';

    if (quote.length) { 
      const randomNum = Math.floor(Math.random() * (quote.length-1));
      quoteDisplay = quote[randomNum].fields.QuoteText;
      authorDisplay = quote[randomNum].fields.QuoteAuthor;
      console.log(`randomeNum ${randomNum}`);
      console.log(`quoteDisplay есть массив ${quoteDisplay}`);
    } 
   
    React.useEffect(() => {
        fetch(
          `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_QUOTE_ID}/Quote`, 
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,     
            },
          }
        ).then((resp) => resp.json())
        .then((data) => {
          setQuote(data.records);
        })
      }, []);
      console.log(quote);

   return (
    <>
      <p className={styles.text}>
        "{quoteDisplay}" 
      </p>
      <p className={styles.author}>
        - {authorDisplay}
      </p>
    </>
   ) 


};


export default Inspiration;
