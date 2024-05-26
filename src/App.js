import './App.css';
import data from './data/data';
import Courses from './components/Courses/Courses';
import Cart from './components/Cart/Cart';
import { useCallback, useEffect, useState } from 'react';

const telegram = window.Telegram.WebApp;

function App() {
  const { dat } = data();

  useEffect(() => {
    telegram.ready();
  }, [])


  const [cartItems, setCartItems] = useState([]);

  const onAddItem = (item) => {
    const existItem = cartItems.find(i => i.id == item.id);

    if (existItem) {
      setCartItems(cartItems.map(i => i.id == item.id? {...i, count: i.count + 1 } : i));
    } else {
      setCartItems([...cartItems, {...item, count: 1 }]);
    }
    console.log(existItem, cartItems);
  }
  const onRemoveItem = (item) => {
    setCartItems(cartItems.filter(i => i.id!== item.id));
    console.log(cartItems);

  }

  const onCheckout = () => {
    telegram.MainButton.text = "Sotib olish";
    telegram.MainButton.show();
  }

  const onSendData = useCallback(() => {
    telegram.MainButton.hide();
    telegram.sendData(JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    telegram.onEvent('mainButtonClicked', onSendData);

    return () => telegram.offEvent('mainButtonClicked', onSendData);
  }, [onSendData]);
  return (
    <>
      <h1 className='main__title'>Online Courses</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <div className="App">
        {dat.map((item) => {
          return <>
            <Courses key={item.id} data={item} onAddItem={onAddItem} onRemoveItem={onRemoveItem} />
          </>
        })}
      </div>
    </>
  );
}

export default App;
