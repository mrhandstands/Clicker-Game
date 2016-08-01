/* global $ */

let points = 0
let clickBase = 1
let perClick = 1

let modifier = 1
let autoBots = 0

let modCost = 100
let botCost = 100

function randomNumber () {
  let random = Math.random() * 255
  return random.toFixed(0)
}

function counter () {
  points = points + (clickBase * modifier)
  return points
}

function increaseMod () {
  if (points >= modCost) {
    points = points - modCost
    modCost = (modCost * 1.5).toFixed(0)
    modifier = modifier + clickBase
    perClick = (clickBase * modifier)
  }
  return modifier
}

function increaseAutoBots () {
  if (points >= botCost) {
    points = points - botCost
    botCost = (botCost * 1.5).toFixed(0)
    autoBots++
  }
  return autoBots
}

function autoClick () {
  points = points + (autoBots * perClick)
  $('#top').html(`Points: ${points}`)
}

setInterval(autoClick, 1000)

$(document).ready(function () {
$('#centerButton').html(`+${clickBase} ppc`)

  $('#centerButton').click(function () {
    $('#top').html(`Points: ${counter(points)}`)
  })

  $('#leftButton').click(function () {
    $('#lTop').html(`Modifier: ${increaseMod()}`)
    $('#top').html(`Points: ${points}`)
    $('#centerButton').html(`+${perClick} ppc`)
    $('#lBottom').html(`Cost: ${modCost}`)
  })

  $('#rightButton').click(function () {
    $('#rTop').html(`AutoBots: ${increaseAutoBots()}`)
    $('#top').html(`Points: ${points}`)
    $('#rBottom').html(`Cost: ${botCost}`)
  })

  $('#colorButton').click(function () {
    let ranColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    $('#right').css('background-color', ranColor)
    $('#left').css('background-color', ranColor)
    $('#center').css('background-color', `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`)
    $('#top').css('background-color', `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`)
    $('#top').css('color', `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`)
    $('.button').css('background-color', `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`)

    ranColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    $('.topText').css('background-color', ranColor)
    $('.bottomText').css('background-color', ranColor)

    ranColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
    $('#right').css('border', `2px solid ${ranColor}`)
    $('#left').css('border', `2px solid ${ranColor}`)
    $('#top').css('border', `2px solid ${ranColor}`)
  })
})
