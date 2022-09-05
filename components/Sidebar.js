import Image from 'next/image'
import React from 'react'
import { ConnectButton } from 'web3uikit'

const Sidebar = () => {
    const isAuthenticated = false;
  return (
    <div className={style.container}>
        <div className={style.profile}>
            {
                
                isAuthenticated && (
                <>
                    <div className={style.profilePicContainer}>
                        <Image 
                            alt='profile'
                            style={style.profilePic}
                            height={100}
                            width={100}
                        />
                    </div>
                    (!userName ? (
                        <>
                            <div className={style.userName}>
                                <input 
                                type='text'
                                placeholder='Username...'
                                className={style.usernameInput}
                                // value={nickname}
                                // onChange={e => setNickname(e.target.value)}
                                />
                            </div>
                            <button className={style.setNickname}
                            onClick = {handleSetUsername}
                            >
                               Set Nickname 
                            </button>
                        </>
                    )) : (
                        <div>
                            <div className={style.welcome}></div>
                        </div>
                    )
                )
            }
        </div>
    </div>
  )
}

export default Sidebar