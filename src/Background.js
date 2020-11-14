import React from 'react'
import './App.css';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.birds.min'

class Background extends React.Component {



    constructor() {
        super()
        this.vantaRef = React.createRef()
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }

      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        this.vantaEffect = GLOBE({
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x0,
            color2: 0x2fbdbd,
            colorMode: "variance",
            birdSize: 0.80,
            THREE: THREE
        })
      }

      componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
        window.removeEventListener('resize', this.updateWindowDimensions);
      }

      componentDidUpdate() {
          this.vantaEffect.resize();
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
      render() {
        return <div id='vanta' ref={this.vantaRef}>
        </div>
      }
}

export default Background;