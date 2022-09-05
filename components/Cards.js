import React, { useState, useContext } from 'react'
import { AmazonContext } from '../context/AmazonContext'
import Card from './Card'

const styles = {
    container: `h-full w-full flex flex-col ml-[20px] -mt-[50px]`,
    title: `text-xl font-bolder mb-[20px] mt-[30px] ml-[30px]`,
    cards: `flex items-center flex-wrap gap-[80px]`
}

const Cards = () => {
    const item = {
        id: 0,
        attributes: {
            name: 'Doge',
            price: 2,
            src: "https://media3.giphy.com/media/HifsMXFLaRsmQlx8jo/200w.webp?cid=ecf05e47y86zf0a44okj0fksvb83wc3n7x1xpkvtva6nbqg4&rid=200w.webp&ct=g"
        }
    }
  return (
    <div className={styles.container}>
        <div className={styles.title}>New Release</div>
        <div className={styles.cards}>
            <Card key={item.id} item={item.attributes}/>
        </div>
    </div>
  )
}

export default Cards