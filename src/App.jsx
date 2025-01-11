import { useState } from "react"
import './App.css'
function App() {
  let currentNumber = '';
  let previousNumber = '';
  let operation = null;
  
  function appendNumber(number) {
    if (currentNumber.length < 10) {
      currentNumber += number;
      updateDisplay();
    }
  }
  
  function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = currentNumber || '0';
  }
  
  function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
  }
  
  function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
      calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
  }
  
  function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
  
    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }
  
    currentNumber = result.toString();
    operation = null;
    previousNumber = '';
    updateDisplay();
  }

  return (
    <div class="calculator">
      <h1>hala madrit</h1>
      <div class="display" id="display">0</div>
      <div class="buttons">
        <button onclick="appendNumber(7)">7</button>
        <button onclick="appendNumber(8)">8</button>
        <button onclick="appendNumber(9)">9</button>
        <button onclick="chooseOperation('-')">-</button>
        <button onclick="appendNumber(4)">4</button>
        <button onclick="appendNumber(5)">5</button>
        <button onclick="appendNumber(6)">6</button>
        <button onclick="chooseOperation('+')">+</button>
        <button onclick="appendNumber(1)">1</button>
        <button onclick="appendNumber(2)">2</button>
        <button onclick="appendNumber(3)">3</button>
        <button onclick="calculate()">=</button>
        <button onclick="clearDisplay()">C</button>
        <button onclick="appendNumber(0)">0</button>
        <button onclick="chooseOperation('/')">/</button>
        <button onclick="chooseOperation('*')">*</button>
      </div>
    </div>
  )
}

export default App
