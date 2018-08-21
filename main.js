var buttons = document.getElementsByClassName('selection')
var compChoiceText = document.getElementById('compChoice')
var winnerText = document.getElementById('result')

var winsText = document.getElementById('wins')
var losesText = document.getElementById('loses')
var tiesText = document.getElementById('ties')
var totalText = document.getElementById('total')

var wins = 0
var loses = 0
var ties = 0

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', calculateWinner)
}

function calculateWinner(user_selection) {
  user_selection = user_selection.target.id
  computer_selection = getComputerSelection()

  var result
  if (user_selection === 'rock'){
    if (computer_selection === 'rock') {
      result = 'tied'
      ties++
    } else if (computer_selection === 'paper'){
      result = 'lose'
      loses++
    } else if (computer_selection === 'scissors') {
      result = 'win'
      wins++
    }
  } else if (user_selection === 'paper') {
    if (computer_selection === 'rock') {
      result = 'win'
      wins++
    } else if (computer_selection === 'paper') {
      result = 'tied'
      ties++
    } else if ( computer_selection === 'scissors') {
      result = 'lost'
      loses++
    }
  } else if (user_selection === 'scissors') {
    if (computer_selection === 'rock') {
      result = 'lost'
      loses++
    } else if (computer_selection === 'paper') {
      result = 'win'
      wins++
    } else if (computer_selection === 'scissors') {
      result = 'tied'
      ties++
    }
  }
  
  compChoiceText.innerHTML = "The computer chose: " + computer_selection + "."
  winnerText.innerHTML = "You " + result + "!"

  winsText.innerHTML = "Wins: " + wins + " - " + ((wins / getTotalGames()) * 100).toFixed(2) + "%"
  losesText.innerHTML = "Loses: " + loses + " - " + ((loses / getTotalGames()) * 100).toFixed(2) + "%"
  tiesText.innerHTML = "Ties: " + ties + " - " + ((ties / getTotalGames()) * 100).toFixed(2) + "%"
  totalText.innerHTML = "Total games played: " + getTotalGames()
}

function getTotalGames() {
  return wins + ties + loses
}

function getComputerSelection() {
  var possibleSelections = ['rock', 'paper', 'scissors']
  return possibleSelections[Math.floor(Math.random() * possibleSelections.length)]
}