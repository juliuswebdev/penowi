import { useEffect, useState } from 'react'
import { MessengerChat, showMessenger } from "react-messenger-chat-plugin"

import { StyledFooterMessenger, StyledFooterMessengerTest } from "./index.styled"

const { VITE_FACEBOOK_ID } = import.meta.env;

function Footer( { messengerActive, messengerLoading } : any ) : JSX.Element {
  
    const [ isMessengerActive, setIsMessengerActive ] = useState(false);
    let isActive = messengerActive ? true : false

    useEffect(() => {
        setIsMessengerActive(isActive);
        showMessenger(isActive);
    }, [messengerActive])

    const handleMessengerDialog = (isActive : boolean) => {
        setIsMessengerActive(isActive);
    }
    
    const handleMessengerLoading = (isLoading: boolean) => {
        messengerLoading(isLoading);
    }

    return (
        <>
            <StyledFooterMessenger>
                <MessengerChat
                    pageId={VITE_FACEBOOK_ID}
                    language="en_US"
                    themeColor={"#000000"}
                    bottomSpacing={40}
                    loggedInGreeting="loggedInGreeting"
                    loggedOutGreeting="loggedOutGreeting"
                    greetingDialogDisplay={"icon"}
                    debugMode={true}
                    onMessengerDialogShow={() => handleMessengerDialog(true)}
                    onMessengerDialogHide={() => handleMessengerDialog(false)}
                    onMessengerLoad={() => {
                        handleMessengerLoading(true);
                        console.log('fire');
                    }}
                />
            </StyledFooterMessenger>
        </>
    )
}

export default Footer;