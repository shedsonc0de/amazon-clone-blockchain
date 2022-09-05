import { createContext, useState, useEffect } from "react";
import { useMoralis } from "react-moralis";

export const AmazonContext = createContext();


export const AmazonProvider = ({children}) => { 
    const [username, setUserName] = useState('')
    const [nickname, setNickName] = useState('')

    const {
        authenticate,
        isAuthenticated,
        enableWeb3,
        Moralis,
        user,
        isWeb3Enabled,
    } = useMoralis()

    useEffect(() => {
        ;(async() => {
            if (isAuthenticated) {
                const currentUsername = await user?.get('nickname');
                setUserName(currentUsername)
            }
        })()
    }, [isAuthenticated, user, username])

    const handleSetUsername = () => {
        if (user) {
            if (nickname) {
                user.set('nickname', nickname)
                user.save();
                setUserName('')
            } else console.log("can't set empty username")
        } else {
            console.log('No user');
        }
    }

 return (
    <AmazonContext.Provider
        value={{
            isAuthenticated,
            nickname,
            setNickName,
            username,
            handleSetUsername
        }}
    >
        {children}
    </AmazonContext.Provider>
 )
};

