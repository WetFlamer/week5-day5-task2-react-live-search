import React from 'react';
import Modal from "./Modal";

function ModalH(props) {
    return (
        
        <div className="card">
        <img className="images" src={props.img} alt="Nike" />
        <div className="title">{props.name}</div>

        <button onClick={() => {props.setModalActive(true)}} className="info_button">Детали</button>
        <Modal active={props.modalActive} setActive={props.setModalActive}/>
        <div className="price">{props.price} ₽</div>
        <hr />
        <p className="description">
         {props.description}
        </p>
        <button onClick={props.cartButtons} disabled={props.buttonStatus} className={props.buttonStyles}>{props.buttonValue}</button>
        {props.cartStatus === true  && (
          <div onClick={props.changeStatus} className="cart-delete">Удалить с корзины!</div>
        )}
      </div>
    );
}

export default ModalH;