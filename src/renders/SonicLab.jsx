/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-empty */
/* eslint-disable camelcase */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
import React from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import paredes from "../assets/paredes.png"
import emerald from "../assets/emerald.gif"
import sonic from "../assets/sonic.gif"

function SonicLab({
  laberinto, width, height, datosSonic,
}) {
  let valorFinalW = parseInt(width, 10)
  valorFinalW *= 3
  valorFinalW += 1

  let valorFinalH = parseInt(height, 10)
  valorFinalH *= 2
  valorFinalH += 1

  const Detalles = css`
    margin-top: 5%;
    text-align: center;
    justify-items: center;
    background: pink;
    display: grid;
    grid-template-columns: repeat(${valorFinalW}, 50px);
    grid-template-rows: repeat(${valorFinalH}, 40px);
  `

  const paredesEstilo = css`
    width: 60px;
    height: 40px;
    background-image: url(${paredes});
  `

  const sonicCss = css`
    width: 20px;
    height: 20px;
    background-color: blue;
  `

  const victoriaCss = css`
    width: 40px;
    height: 40px;
    background-color: green;
    background-image: url("https://static.wikia.nocookie.net/sonic/images/a/ac/SonicMovie2_MasterEmeraldRender.png");
    background-repeat: no-repeat;
  `

  const sonicMovimientos = () => {
    const sonicFlechas = event.key.toLowerCase()

    switch (sonicFlechas) {
      case "arrowleft":
        datosSonic((laberinto1) => {
          const array_datos = [...laberinto1]
          const y = array_datos.findIndex((row) => row.indexOf("p") > -1)
          const x = array_datos[y].findIndex((column) => column === "p")

          if (array_datos[y][x - 1] === "+" || array_datos[y][x - 1] === "|") {
            // eslint-disable-next-line no-console
            console.log("xd")
          } else if (array_datos[y][x - 1] === "g") {
            array_datos[y][x] = " "
            array_datos[y][x - 1] = "p"
            alert("¡Has encontrado la Chaos Emerald!")

            datosSonic(null)
          } else {
            array_datos[y][x] = " "
            array_datos[y][x - 1] = "p"
          }
          return array_datos
        })
        break
      case "a":
        datosSonic((laberinto2) => {
          const array_datos = [...laberinto2]
          const y = array_datos.findIndex((row) => row.indexOf("p") > -1)
          const x = array_datos[y].findIndex((column) => column === "p")

          if (array_datos[y][x - 1] === "+" || array_datos[y][x - 1] === "|") {
          } else if (array_datos[y][x - 1] === "g") {
            array_datos[y][x] = " "
            array_datos[y][x - 1] = "p"
            alert("¡Has encontrado la Chaos Emerald!")

            datosSonic(null)
          } else {
            array_datos[y][x] = " "
            array_datos[y][x - 1] = "p"
          }
          return array_datos
        })
        break
      case "arrowright":
        datosSonic((laberinto3) => {
          const array_datos = [...laberinto3]
          const y = array_datos.findIndex((row) => row.indexOf("p") > -1)
          const x = array_datos[y].findIndex((column) => column === "p")

          if (array_datos[y][x + 1] === "+" || array_datos[y][x + 1] === "|") {
          } else if (array_datos[y][x + 1] === "g") {
            array_datos[y][x] = " "
            array_datos[y][x + 1] = "p"
            alert("¡Has encontrado la Chaos Emerald!")
            datosSonic(null)
          } else {
            array_datos[y][x] = " "
            array_datos[y][x + 1] = "p"
          }
          return array_datos
        })
        break
      case "d":
        datosSonic((laberinto4) => {
          const array_datos = [...laberinto4]
          const y = array_datos.findIndex((row) => row.indexOf("p") > -1)
          const x = array_datos[y].findIndex((column) => column === "p")

          if (array_datos[y][x + 1] === "+" || array_datos[y][x + 1] === "|") {
          } else if (array_datos[y][x + 1] === "g") {
            array_datos[y][x] = " "
            array_datos[y][x + 1] = "p"
            alert("¡Has encontrado la Chaos Emerald!")
            datosSonic(null)
          } else {
            array_datos[y][x] = " "
            array_datos[y][x + 1] = "p"
          }
          return array_datos
        })
        break
      case "arrowup":
        datosSonic((laberinto5) => {
          const array_datos = [...laberinto5]
          const y = array_datos.findIndex((row) => row.indexOf("p") > -1)
          const x = array_datos[y].findIndex((column) => column === "p")

          if (array_datos[y - 1][x] === "+" || array_datos[y - 1][x] === "-") {
          } else if (array_datos[y - 1][x] === "g") {
            array_datos[y][x] = " "
            array_datos[y - 1][x] = "p"
            alert("¡Has encontrado la Chaos Emerald!")
            datosSonic(null)
          } else {
            array_datos[y][x] = " "
            array_datos[y - 1][x] = "p"
          }
          return array_datos
        })
        break
      case "w":
        datosSonic((laberinto6) => {
          const array_datos = [...laberinto6]
          const y = array_datos.findIndex((row) => row.indexOf("p") > -1)
          const x = array_datos[y].findIndex((column) => column === "p")

          if (array_datos[y - 1][x] === "+" || array_datos[y - 1][x] === "-") {
          } else if (array_datos[y - 1][x] === "g") {
            array_datos[y][x] = " "
            array_datos[y - 1][x] = "p"
            alert("¡Has encontrado la Chaos Emerald!")
            datosSonic(null)
          } else {
            array_datos[y][x] = " "
            array_datos[y - 1][x] = "p"
          }
          return array_datos
        })
        break

      case "arrowdown":
        datosSonic((laberinto7) => {
          const array_datos = [...laberinto7]
          const y = array_datos.findIndex((row) => row.indexOf("p") > -1)
          const x = array_datos[y].findIndex((column) => column === "p")

          if (array_datos[y + 1][x] === "+" || array_datos[y + 1][x] === "-") {
          } else if (array_datos[y + 1][x] === "g") {
            array_datos[y][x] = " "
            array_datos[y + 1][x] = "p"
            alert("¡Has encontrado la Chaos Emerald!")
            datosSonic(null)
          } else {
            array_datos[y][x] = " "
            array_datos[y + 1][x] = "p"
          }
          return array_datos
        })
        break
      case "s":
        datosSonic((laberinto8) => {
          const array_datos = [...laberinto8]
          const y = array_datos.findIndex((row) => row.indexOf("p") > -1)
          const x = array_datos[y].findIndex((column) => column === "p")

          if (array_datos[y + 1][x] === "+" || array_datos[y + 1][x] === "-") {
          } else if (array_datos[y + 1][x] === "g") {
            array_datos[y][x] = " "
            array_datos[y + 1][x] = "p"
            alert("¡Has encontrado la Chaos Emerald!")
            datosSonic(null)
          } else {
            array_datos[y][x] = " "
            array_datos[y + 1][x] = "p"
          }
          return array_datos
        })
        break

      default:
        return true
    }
    return 0
  }

  window.onkeydown = sonicMovimientos

  return (
    <div id="gridMaze" css={Detalles}>
      {laberinto.map((row, key1) => row.map((part, key2) => {
        switch (part) {
          case "+":
            return (
              <div
                key={(key1 * 5 + key2 + 2).toString()}
                css={paredesEstilo}
              />
            )
          case "-":
            return (
              <div
                key={(key1 * 5 + key2 + 2).toString()}
                css={paredesEstilo}
              />
            )

          case "|":
            return (
              <div
                key={(key1 * 5 + key2 + 2).toString()}
                css={paredesEstilo}
              />
            )
          case "p":
            return (
              <div key={(key1 * 10 + key2 + 13).toString()} css={sonicCss} src={sonic} />
            )
          case "g":
            return (
              <div
                key={(key1 * 50 + key2 + 16).toString()}
                css={victoriaCss}
              />
            )
          default:
            return <div key={(key1 * 100 + key2 + 3).toString()}>{part}</div>
        }
      }))}
    </div>
  )
}

export default SonicLab
