import { proxy } from "valtio";

let logoChange = () => {
    let numVal = 0
    numVal =  Math.random() * 5
    console.log(numVal)
    
    return (numVal > 3) ? './R&threeL.png' : './threejs.png'
}

const state = proxy({
    intro: true,
    color: '#40E0D0',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: logoChange() ,
    fullDecal: './threejs.png'
})

export default state;