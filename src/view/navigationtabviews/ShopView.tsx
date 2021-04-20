import {useEffect, useState} from 'react'

export const ShopView = () => {
    const [counter, setCounter] =  useState(0)

    //useEffect(() => {alert('first render!')})
    useEffect(() => {
        alert('First')
        return () => {
            alert('last')
        }
    },[counter])

    return (
        <div>
            <h1 onClick={()=> setCounter(counter + 1)}>{counter}</h1>
            <h1>this is ShopView</h1>
        </div>
    )
    }
