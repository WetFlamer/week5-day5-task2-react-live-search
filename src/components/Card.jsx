import React from "react";
import { useState } from "react";
import "./Card.css";
import ModalH from "./ModalH";

function Card(e) {

  const [card, setCards] = useState([    {
    img: 'https://sneakernews.com/wp-content/uploads/2022/03/nike-air-max-genome-red-october-dr9875-600-2.jpg',
    name: "Nike Sneaker",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, commodi laboriosam.',
    price: 120.999,
  },
  {
    img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/195175/06/fnd/RUS/w/1000/h/1000/fmt/png',
    name: "Кроссовки мужские PUMA Aviator",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, commodi laboriosam.',
    price: 6439,
  },
  {
    img: 'https://www.tradeinn.com/f/13805/138052527/puma-aviator-sp-%D0%91%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F-%D0%9E%D0%B1%D1%83%D0%B2%D1%8C.jpg',
    name: "Puma Aviator SP Беговая Обувь",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, commodi laboriosam.',
    price: 2877.99,
  },
  {
    img: 'https://www.tradeinn.com/f/13855/138552287/nike-revolution-6-nn-%D0%91%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F-%D0%9E%D0%B1%D1%83%D0%B2%D1%8C.jpg',
    name: "Nike Revolution 6 NN Беговая Обувь",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, commodi laboriosam.',
    price: 2860.99,
  },
  {
    img: 'https://www.tradeinn.com/f/13865/138653638/asics-gel-nimbus-24-%D0%91%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F-%D0%9E%D0%B1%D1%83%D0%B2%D1%8C.jpg',
    name: "Asics Gel-Nimbus 24 Беговая Обувь",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, commodi laboriosam.',
    price: 7301.99,
  },
  {
    img: 'https://www.tradeinn.com/f/13896/138960854/adidas-galaxy-6-%D0%91%D0%B5%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F-%D0%9E%D0%B1%D1%83%D0%B2%D1%8C.jpg',
    name: "adidas Galaxy 6 Беговая Обувь",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, commodi laboriosam.',
    price: 2256.99,
  },])

  const [cart, setCart] = useState(false);
  const [buttonStyles, setButtonStyles] = useState("cart_button");
  const [buttonStatus, setButtonStatus] = useState(false);
  const [buttonValue, setButtonValue] = useState("Добавить в корзину");
  const [cartStatus, setCartStatus] = useState(false);

  const cartButtons = () => {
    if (cart === false) {
      setButtonValue("Уже в корзине!");
      setButtonStatus(true);
      setButtonStyles("cart_button_delete");
      setCartStatus(true);
    }
  };
  const changeStatus = () => {
    setButtonValue("Добавить в корзину");
    setButtonStatus(false);
    setButtonStyles("cart_button");
    setCartStatus(false);
  };

  const [modalActive, setModalActive] = useState(false);
  const [text, setText] = useState('')

  const changeText = (e) => {
    setText(e.target.value)
  }

const filteredCards = 
card.filter(card => {
  return card.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
})


return (
    <div>
      <form action="">
        <input value={text} onChange={changeText} className="input" type="text" placeholder="Введите текст"></input>
        </form>


    <div className="bodyS">
      {filteredCards.map((item, index) => (
      
        <ModalH
        key={index}
          img={item.img}
          name={item.name}
          price={item.price}
          description={item.description}
          setCart={setCart}
          cartButtons={cartButtons}
          buttonStatus={buttonStatus}
          modalActive={modalActive}
          setModalActive={setModalActive}
          buttonStyles={buttonStyles}
          buttonValue={buttonValue}
          cartStatus={cartStatus}
          changeStatus={changeStatus}
        />
      ))
}
      </div>
    </div>
  );
}

export default Card;
