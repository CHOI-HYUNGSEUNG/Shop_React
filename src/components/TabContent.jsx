import React, { useContext, useEffect, useState } from 'react'
import { Context1 } from '../App';
import '../App.css'

const TabContent = ({tab}) => {
    const [fade, setFade] = useState('');
    const {remain, shoes} = useContext(Context1);

    useEffect(() => {
        const animationTimer = setTimeout(() => {
            setFade('end')
        }, 50);

        return () => {
            setFade('');
            clearTimeout(animationTimer);
        }
    }, [tab])

    return (
        <div className={"text-center start " + fade}>
            {[<div>{remain[0]}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
        </div>
    )
}

export default TabContent