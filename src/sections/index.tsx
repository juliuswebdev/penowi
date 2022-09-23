import { useState, useEffect } from 'react';

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import { Helmet } from "react-helmet"

import meta_image from './../assets/images/fbmeta2.jpg'
import favicon from './../assets/images/favicon.png'

const { VITE_SITE_URL, VITE_FACEBOOK_ID } = import.meta.env

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
            <Helmet>
                <link rel="icon" type="image/svg+xml" href={VITE_SITE_URL + favicon} />
                <meta name="theme-color" content="#4285f4" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="We are selling good quality products with a low price." />
                <meta name="keywords" content="Support local, Apparel, Clothing, Dress, Sew, Needle, Shirt, Fuckboy Shirt" />
                <link rel="canonical" href="https://penowi.netlify.app/" />
                <meta property="og:title" content="Penowi Apparel & Clothing" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://penowi.netlify.app/" />
                <meta property="fb:app_id" content={VITE_FACEBOOK_ID} />
                <meta property="og:image" content={VITE_SITE_URL + meta_image} />
                <meta property="og:site_name" content="Penowi" />
                <meta name="twitter:title" content="Penowi Apparel & Clothing" />
                <meta name="twitter:description" content="Modern fashion and style" />
                <meta name="twitter:image" content={VITE_SITE_URL + meta_image} />
                <meta name="twitter:card" content="summary_large_image" />
                <title>Penowi - 🕺💃</title>
            </Helmet>
            <Header navActive={handleNavActive} contactActive={handleContactActive} isContactLoading={isMessengerLoading}  />
            <Main navActive={navActive} />
            <Footer messengerActive={contactActive} messengerLoading={handleMessengerLoading}/>
        </>
    )
}

export default App