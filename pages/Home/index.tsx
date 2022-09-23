import { StyledHomeContainer, StyledHomeContent, StyledHeroImage } from './index.styled'
import  { useState } from 'react'
import { useTransition, animated } from '@react-spring/web'

import Image from 'next/image'

import image_hero1 from './../../assets/images/hero/hero1.jpg'
import image_hero2 from './../../assets/images/hero/hero2.jpg'

import icon_lazada from './../../assets/images/icons/lazada.png';
import icon_shopee from './../../assets/images/icons/shopee.png';


const slides = [
    image_hero1,
    image_hero2
];

function Home() : JSX.Element {
    const [index, set] = useState(0)
    const transitions = useTransition(index, {
      key: index,
      from: { opacity: 0 },
      enter: { opacity: .5 },
      leave: { opacity: 0 },
      config: { duration: 3000 },
      onRest: (_a, _b, item) => {
        if (index === item) {
          set(state => (state + 1) % slides.length)
        }
      },
      exitBeforeEnter: true,
    })
    return (
        <StyledHomeContainer>
            <StyledHomeContent>
              <div className="loading">In Progress <span>Loading</span></div>
              <h1 style={{
                backgroundImage: `url(${icon_lazada})`,
              }}>Soon Available in:</h1>
              <ul>
                <li><a href="#"><span>Lazada</span><Image alt="image" src={icon_lazada} /></a></li>
                <li><a href="#"><span>Shopee</span><Image alt="image" src={icon_shopee} /></a></li>
              </ul>
            </StyledHomeContent>
            {transitions((style, i) => (
                <StyledHeroImage> 
                  <animated.div 
                    key={i} 
                    style={{ ...style, backgroundImage: `url(${slides[i].src})` }}
                  > 
                  </animated.div>
                </StyledHeroImage> 
            ))}
        </StyledHomeContainer>
    )
}

export default Home;