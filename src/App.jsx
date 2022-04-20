import React from 'react'
import bird from './pictures/bird.png'
import bushes1 from './pictures/bushes1.png'
import bushes2 from './pictures/bushes2.png'
import fire from './pictures/fire.png'
import fishLeft from './pictures/fishLeft.png'
import fishRight from './pictures/fishRight.png'
import skyPink from './pictures/skyPink.png'
import skyStarts from './pictures/skyStarts.png'
import sun from './pictures/sun.png'
import trees1 from './pictures/trees1.png'
import trees2 from './pictures/trees2.png'
import tent from './pictures/tent.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    <Parallax pages={2}>
      <ParallaxLayer
        offset={0}
        speed={0}
        style={{
          backgroundImage: `url(${skyPink})`,
          backgroundSize: 'cover'
        }}
      ></ParallaxLayer>

      <ParallaxLayer offset={0} speed={-1}>
        <img src={sun} style={{ width: '100%' }}></img>
      </ParallaxLayer>

      <ParallaxLayer offset={0.2} speed={0.2}>
        <img src={trees1} style={{ width: '100%' }}></img>
      </ParallaxLayer>

      <ParallaxLayer offset={0.9} speed={1.5} style={{ zIndex: '1' }}>
        <ParallaxLayer horizontal speed={-2}>
          <img src={bird} style={{ width: '20%', marginLeft: '15%' }}></img>
        </ParallaxLayer>
      </ParallaxLayer>

      <ParallaxLayer offset={0.7} speed={0.7} style={{ fontSize: '0px', zIndex: '2' }}>
        <img src={trees2} style={{ width: '100%' }}></img>
        <img src={skyStarts} style={{ width: '100%' }}></img>
      </ParallaxLayer>

      <ParallaxLayer offset={1.3} speed={-0.1} style={{ zIndex: '3' }}>
        <img src={bushes1} style={{ width: '100%' }}></img>
      </ParallaxLayer>

      <ParallaxLayer offset={1.1} speed={0.7} style={{ zIndex: '4' }}>
        <img src={tent} style={{ width: '50%', marginLeft: '65%' }}></img>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1.1}
        speed={2}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '4'
        }}
      >
        <img src={fire} style={{ width: '40%' }}></img>
      </ParallaxLayer>

      <ParallaxLayer offset={1.5} style={{ zIndex: '5' }}>
        <ParallaxLayer offset={1} horizontal speed={0.8}>
          <img src={fishRight} style={{ width: '25%' }}></img>
        </ParallaxLayer>
      </ParallaxLayer>

      <ParallaxLayer offset={1.5} style={{ zIndex: '5' }}>
        <ParallaxLayer offset={-1} horizontal speed={-0.8} style={{ zIndex: '5' }}>
          <img src={fishLeft} style={{ width: '25%' }}></img>
        </ParallaxLayer>
      </ParallaxLayer>

      <ParallaxLayer offset={1.1} speed={0.2} style={{ zIndex: '6' }}>
        <img src={bushes2} style={{ width: '100%' }}></img>
      </ParallaxLayer>
    </Parallax>
  )
}

export default App
