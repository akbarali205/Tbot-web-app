import React, { useState } from "react";
import './card.css';
import Button from "../Button/Button";

function Courses({ data, onAddItem, onRemoveItem }) {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
        onAddItem(data);
    };
    const handleDecrement = () => {
        if(count > 0) {
            setCount(0);
            onRemoveItem(data);
        }
    };

    return (
        <div className="card">
            <div className={count > 0 ? "card__badge" : "card__badgeHidden"}>
                {count}
            </div>
            <div className="card__logo">
                <img src={data.image} alt="logo" width={"200px"} />
            </div>
            <div className="card__body">
                    <h1 className="card__title">{data.name}</h1>
                    <div className="about__course">{data.description}</div>
                <div className="card__price">
                    ${data.price}
                </div>
                <hr />
                <div className="btn__container">
                    <Button title={'➕'} type={'add'} onClick={handleIncrement} />
                    {
                        count > 0 ? <Button title={'❌'} type={'remove'} onClick={handleDecrement} /> : ""
                    }
                </div>
            </div>
        </div>
    );
}

export default Courses;
