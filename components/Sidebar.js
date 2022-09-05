import Image from 'next/image'
import React from 'react'
// import { ConnectButton } from 'web3uikit'
import icon from '../styles/Screenshot 2022-02-08 235521.png'

const isAuthenticated = true;
const username = 'shedrack';

const Sidebar = () => {
    const styles = {
        container: 'h-full w-[300px] flex flex-col bg=[#ff] static',
        profile: 'w-full py-16 flex flex-col justify-center items-center',
        profilePicContainer: 'flex rounded-xl items-center justify-center',
        profilePic: 'rounded-3xl object-cover',
        welcome: 'text-md md-2 font-bold text-2xl text-white',
        username: `flex items-center w-full justify-center`,
        setNickname: `text-lg font-bold flex flex-1 items-center mt-[20px] mb-[20px] text-white`,
        usernameInput: `bg-transparent border-white border-2 rounded-lg w-[80%] py-2 px-4 text-lg mt-[20px] placeholder:text-white focus:outline-none flex justify-center items-center text-white`,
    }

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        {isAuthenticated && (
          <>
            <div className={styles.profilePicContainer}>
              <Image
                src={icon}
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
                    // value={nickname}
                    // onChange={e => setNickname(e.target.value)}
                  />
                </div>
                <button
                  className={styles.setNickname}
                //   onClick={handleSetUsername}
                >
                  Set Nickname
                </button>
              </>
            ) : (
              <div>
                <div className={styles.welcome}>Wecome {username}</div>
              </div>
            )}
          </>
        )}
        </div>
    </div>
  )
}

export default Sidebar