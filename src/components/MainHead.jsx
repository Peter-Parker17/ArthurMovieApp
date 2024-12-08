import React from 'react';
import Movies from '../Pages/Movies';
import "./Todo.css";
import "./button.css";
import Title from './Title';
import footerlogo from "../images/movie-collage.webp"



function MainHead() {
    return (
        <>
            <Title />
            <div>
                <img className="todo__wrapper" src={footerlogo} alt="" />
                <Movies />
            </div>
        </>
    )
}

export default MainHead;