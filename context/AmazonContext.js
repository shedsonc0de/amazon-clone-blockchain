import { createContext, useState, useEffect } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";

export const AmazonContext = createContext();


export const AmazonProvider = ({children}) => { 
    const [username, setUserName] = useState('')
    const [nickname, setNickName] = useState('')
    const [assets, setAssets] = useState([])

    const {
        authenticate,
        isAuthenticated,
        enableWeb3,
        Moralis,
        user,
        isWeb3Enabled,
    } = useMoralis()

    const {
       data: assetsData,
       error: assetsDataError, 
       isLoading: assetsDataisLoading
    } = useMoralisQuery('assets')
    useEffect(() => {
        ;(async() => {
            if (isAuthenticated) {
                const currentUsername = await user?.get('nickname');
                setUserName(currentUsername)
            }
        })()
    }, [isAuthenticated, user, username])

    useEffect(() => {
        ;(async() => {
            if(isWeb3Enabled) {
                await getAssets()
            }
        })()
    }, [assetsData, isWeb3Enabled, assetsDataisLoading])

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

    const getAssets = async () => {
        try {
            await enableWeb3()
            setAssets(assetsData)
        } catch(err) {
            console.log(err)
        }
    }

 return (
    <AmazonContext.Provider
        value={{
            isAuthenticated,
            nickname,
            setNickName,
            username,
            handleSetUsername,
            assets,
            assetsData
        }}
    >
        {children}
    </AmazonContext.Provider>
 )
};