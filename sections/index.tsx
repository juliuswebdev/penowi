import { useState, useEffect } from 'react';



import Header from './Header'
import Main from './Main'
import Footer from './Footer'



import meta_image from './../assets/images/fbmeta2.jpg'
import favicon from './../assets/images/favicon.png'



function App() : JSX.Element {

    const [navActive, setNavActive] = useState(false);
    const [contactActive, setContactActive] = useState(false);
    const [isMessengerLoading, setIsMessengerLoading] = useState(false);


    const handleNavActive = (navActive: boolean) => {
        setNavActive(navActive)
    }

    const handleContactActive = (contactActive : any) => {
        setContactActive(contactActive + Math.random());
    }

    const handleMessengerLoading = (isLoading: boolean) => {
        setIsMessengerLoading(isLoading);
    }

    return (
        <>
   
            <Header navActive={handleNavActive} contactActive={handleContactActive} isContactLoading={isMessengerLoading}  />
            <Main navActive={navActive} />
            <Footer messengerActive={contactActive} messengerLoading={handleMessengerLoading}/>
        </>
    )
}

export default App