import React, { useContext } from 'react'
import { AmazonContext } from '../context/AmazonContext'
import Cards from './Cards'

const styles = {
    container: `h-full w-full flex flex-col mt-[50px] pr-[50px] overflow-hidden`,
    recentTitle: `text-2x1 font-bold text-center mb0[20px] mt-[40px]`,
    recentTransactionList: 'flex flex-col',
    transactionCard: `flex justify-between mb-[20px] p-[30px] bg-[#42667e] tetx-white rounded-x1 shadow-x1 font-bold gap-[20px] text-x1`
}

const Main = () => {
  return (
    <div className={styles.container}>
        {/* <Header />
        <Featured /> */}
        <Cards />
    </div>
  )
}

export default Main