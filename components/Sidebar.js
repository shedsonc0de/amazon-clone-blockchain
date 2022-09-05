import Image from 'next/image'
import React, { useContext } from 'react'
import { AmazonContext } from '../context/AmazonContext'
import { ConnectButton } from 'web3uikit'
import Link from 'next/link'
import logo from '../assets/amazon_logo.png'
import logoFull from '../assets/amazon_logo_full.png'
import { FaBox } from 'react-icons/fa'
import { BsFillBookmarkFill, BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineHistory } from 'react-icons/ai'
import icon from '../styles/Screenshot 2022-02-08 235521.png'



const Sidebar = () => {
    const styles = {
        container: 'h-full w-[300px] flex flex-col bg=[#fff] static',
        profile: 'w-full py-16 flex flex-col justify-center items-center',
        profilePicContainer: 'flex rounded-xl items-center justify-center bg-blue-200',
        profilePic: 'rounded-3xl object-cover',
        welcome: 'text-md md-2 font-bold text-2xl text-black',
        username: `flex items-center w-full justify-center`,
        setNickname: `text-lg font-bold flex flex-1 items-center mt-[20px] mb-[20px] text-white`,
        usernameInput: `bg-transparent border-black border-2 rounded-lg w-[80%] py-2 px-4 text-lg mt-[20px] placeholder:text-black focus:outline-none flex justify-center items-center text-white`,
        menu: `flex flex-col w-full h-full px-10 gap-10`,
        menuItem: `flex items-center text-lg font-bold cursor-pointer gap-2`,
        amazonLogo: `mr-4 flex object-cover`,
    }

    const {
        //isAuthenticated,
        // nickname,
        setNickName,
        username,
        handleSetUsername
    } = useContext(AmazonContext)

    const nickname = 'shedrack'
    const isAuthenticated = true

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        {isAuthenticated && (
            // i will turn i to <></> back
          <div className=' bg-slate-600 flex flex-col justify-center items-center'> 
            <div className={styles.profilePicContainer}>
              <Image
                src={`https://avatars.dicebear.com/api/miniavs/${username}.svg`}
                alt='profile'
                className={styles.profilePic}
                height={100}
                width={100}
              />
            </div>
            {!username ? (
              <>
                <div className={styles.username}>
                  <input
                    type='text'
                    placeholder='Username....'
                    className={styles.usernameInput}
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                  />
                </div>
                <button
                  className={styles.setNickname}
                  onClick={handleSetUsername}
                >
                  Set Nickname
                </button>
              </>
            ) : (
              <div>
                <div className={styles.welcome}>Welcome {username}</div>
              </div>
            )}
          </div>
        )}
        <div className={styles.connectButton}>
              <ConnectButton /> 
        </div>
        <div className={styles.menu}>
                <Link href='/'>
                    <div className={styles.menuItem}>
                        <Image 
                            src={logo}
                            height={30}
                            width={30}
                            className={styles.amazonLogo}
                        />
                        My Amazon 
                        <br /> board
                    </div>
                </Link>
                <div className={styles.menuItem}>
                    <FaBox />
                    collections
                </div>
                <div className={styles.menuItem}>
                    <BsFillBookmarkFill />
                    Saved
                </div>
                <div className={styles.menuItem}>
                    <BsFillPersonFill />
                    Saved
                </div>
            <Link href='/history'>
                <div className={styles.menuItem}>
                    <AiOutlineHistory />
                    Transaction History
                </div>
            </Link>
        </div>
        <div className={styles.companyName}>
                <Image src={logoFull} alt='amazon' height={100} width={100} />
        </div>
        </div>
    </div>
  )
}

export default Sidebar