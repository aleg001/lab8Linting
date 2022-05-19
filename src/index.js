/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/function-component-definition */
import React from "react"
import ReactDOM from "react-dom/client"

import { css, jsx } from "@emotion/react"
import SonicLab from "./renders/SonicLab.jsx"

/** @jsx jsx */

const StartGame = () => {
  const url = "http://soundfxcenter.com/video-games/sonic-the-hedgehog/8d82b5_Sonic_Green_Hill_Zone_Theme_Song.mp3"
  const startGame = new Audio(url)
  startGame.play()
}

const SonicH1 = css`
margin-top:1%;
font-family: 'Oswald', Helvetica, sans-serif;
margin-bottom:5%;
letter-spacing: 2px;
word-spacing: -8px;
color: blue;
transform: skewY(5deg);
text-shadow: 
  -1px -1px 0 firebrick,
  -2px -2px 0 firebrick,
  -3px -3px 0 firebrick,
  -4px -4px 0 firebrick,
  -5px -5px 0 firebrick,
  -6px -6px 0 firebrick,
  -7px -7px 0 firebrick,
  -8px -8px 0 firebrick,
  -30px 20px 40px dimgrey;
}
`

const widthHeight = css`
  background-color: white;
  margin-right: 5%;
  justify-content: center;
  text-align: center;
  -webkit-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3);
`
const config = css`
  padding: 5%;
  height: 10%;
  text-align: center;
  border-radius: 10px;
  background: lightgreen;
  border-bottom: 1px solid #d8d8d8;
`

const generateSonicMaze = css`
  background: white;
  width: 100%;
  height: 38px;
  box-shadow: 0 0 8px rgb(207, 207, 207);
  color: #124f00;
  margin-left: 5%;
  margin-top: 2%;
  text-align: center;
  border-radius: 2px;
  box-shadow: inset 0 0 8px #f9f8fc;
`
const sonicTitleBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const sonicFetch = async (w, h) => {
  const juanElMaze = `https://maze.juanelcaballo.club/?type=json&w=${w}&h=${h}`
  const sonicLab = await fetch(juanElMaze)
    .then((response) => response.json())
    .then((responseInJSON) => responseInJSON)
  return sonicLab
}

const App = () => {
  const [Maze, setMaze] = React.useState(null)
  const [width, setWidth] = React.useState(4)
  const [height, setHeight] = React.useState(4)

  const largoValor = (numero) => {
    const inputw = numero.target.value
    setWidth(inputw)
  }

  const alturaValor = (numero) => {
    const inputh = numero.target.value
    setHeight(inputh)
  }

  const crearSonicLab = async () => {
    StartGame()
    const NewM = await sonicFetch(width, height)
    setMaze(NewM)
  }

  const esmeraldasChaos = async (xd) => {
    setMaze(xd)
  }

  return (
    <div id="xd" css={sonicTitleBox}>
      <div css={config}>
        <h1 id="123" css={SonicH1}>
          Sonic's Laberynth!
        </h1>
        <label htmlFor="width">Ingresa el largo: </label>
        <input
          css={widthHeight}
          id="width"
          type="number"
          placeholder="Largo del laberinto"
          onChange={largoValor}
        />
        <label htmlFor="width">Ingresa la altura: </label>
        <input
          css={widthHeight}
          id="height"
          type="number"
          placeholder="A de altura"
          onChange={alturaValor}
        />
        <button onClick={crearSonicLab} css={generateSonicMaze}>
          ¡Ingresar al mundo de Sonic!
        </button>
      </div>
      {Maze && (
        <SonicLab
          laberinto={Maze}
          width={width}
          height={height}
          datosSonic={esmeraldasChaos}
        />
      )}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
