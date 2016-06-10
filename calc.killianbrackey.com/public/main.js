var calcTotal = '0';
var calcPending = '0';
var operator = '';
var maxLength = 24;
var socket = io();
var calc_history = [];
var equals = false;

var calcDisplay = document.getElementById('calc-display');
var calcBelow = document.getElementById('calc-below');


function appendNumber(num) {
    if (calcPending.length > maxLength) {
        calcPending = 'ERROR: Exceeded max length';
    } else if ((parseFloat(calcPending) === 0) && calcPending.indexOf('.') === -1) {
        calcPending = num;
    } else {
        calcPending = calcPending + num;
    }
    updateDisplay();
}

function appendDecimal() {
    if (calcPending.length === 0) {
        calcPending = '0.';
    } else if (calcPending.indexOf('.') === -1) {
        calcPending = calcPending + '.';
    }
    updateDisplay();
}

function updateDisplay() {
    calcDisplay.textContent = calcPending;
    calcBelow.textContent = calcTotal;
}

socket.on('button', function(msg){
    $('#history').append($('<li>').text(msg));
  });

socket.on('history', function(history) {
  console.log(history);
  for (var j = 0; j < history.length; j++) {
      calc_history.push(history[j]);
  }
  calc_history = history;
  console.log("calc hist: " + calc_history);
  for (var i = 0; i < calc_history.length; i++) {
    $('#history').append($('<li>').text(calc_history[i]));
  }
});

function clearPending() {
    calcPending = '0';
    updateDisplay();
}

function clearAll() {
    calcPending = '0';
    calcTotal = '0';
    operator = '';
    updateDisplay();
}

function appendOperator(oper) {
    if (parseFloat(calcPending) > 0) {
        calculate(operator);
    }

    operator = oper;

    if (parseFloat(calcTotal) !== 0) {
        if (calcPending === '' || parseFloat(calcPending) === 0) {
            calcPending = calcTotal;
        }
    }

    calcTotal = calcPending;
    calcPending = '';
    updateDisplay();
}

function calculate() {
      var summary = parseFloat(calcTotal) + operator + parseFloat(calcPending) + "=";
    if (operator === '+') {
        calcPending = parseFloat(calcTotal) + parseFloat(calcPending);
    } else if (operator === '-') {
        calcPending = parseFloat(calcTotal) - parseFloat(calcPending);
    } else if (operator === '*') {
        calcPending = parseFloat(calcTotal) * parseFloat(calcPending);
    } else if (operator === '/') {
        calcPending = parseFloat(calcTotal) / parseFloat(calcPending);
    }
    summary += calcPending;

    //socket.emit('button', calcTotal);
    if (equals === true) {
      socket.emit('button', summary);
      equals = false;
      summary = '';
    }

    operator = '';
    if (calcPending !== '') {
        calcTotal = calcPending;
    }
    calcPending = '';
    updateDisplay();
}

function percent() {
    calcPending = (calcPending * (calcTotal / 100));
}

// Events
$('#key-ac').click(function() {
    console.log("All clear");
    clearAll();
});

$('#key-ce').click(function() {
    clearPending();
});

$('#key-one').click(function() {
    appendNumber('1');
});

$('#key-two').click(function() {
    appendNumber('2');
});

$('#key-three').click(function() {
    appendNumber('3');
});

$('#key-four').click(function() {
    appendNumber('4');
});

$('#key-five').click(function() {
    appendNumber('5');
});

$('#key-six').click(function() {
    appendNumber('6');
});

$('#key-seven').click(function() {
    appendNumber('7');
});

$('#key-eight').click(function() {
    appendNumber('8');
});

$('#key-nine').click(function() {
    appendNumber('9');
});

$('#key-zero').click(function() {
    appendNumber('0');
});

$('#key-decimal').click(function() {
    appendDecimal();
});

$('#key-divide').click(function() {
    appendOperator('/');
});

$('#key-multiply').click(function() {
    appendOperator('*');
});

$('#key-subtract').click(function() {
    appendOperator('-');
});

$('#key-add').click(function() {
    appendOperator('+');
});

$('#key-equate').click(function() {
    equals=true;
    calculate();
});

$('#key-percent').click(function() {
    percent();
    calculate();
});
