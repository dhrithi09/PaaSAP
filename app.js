const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
/*<!DOCTYPE html>
<html>
  <head>
  <title>Addition of Numbers</title>
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
  <style>
    @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");

    html {
      font-family: neo-sans;
      font-weight: 700;
      font-size: calc(52rem / 16);
    }

    body {
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #f2f2f2;
      padding: 1em;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    label {
      font-weight: bold;
    }

    input[type="number"],
    input[type="text"] {
      padding: 0.5em;
      margin-bottom: 1em;
      border-radius: 4px;
      border: 1px solid #ccc;
    }

    input[type="button"] {
      padding: 0.5em 1em;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    input[type="button"]:hover {
      background-color: #45a049;
    }
  </style>
  <script>
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        disableForReducedMotion: true
      });
    }, 500);

    function addNumbers() {
      // Get the input values
      var num1 = parseInt(document.getElementById("num1").value);
      var num2 = parseInt(document.getElementById("num2").value);

      // Add the numbers
      var sum = num1 + num2;

      // Set the result
      document.getElementById("result").value = sum;
    }
  </script>
</head>
  <body>
    <section>
      Enter two numbers to add:
    </section>
    <form>
    <label for="num1">Number 1:</label>
    <input type="number" id="num1" name="num1"><br><br>

    <label for="num2">Number 2:</label>
    <input type="number" id="num2" name="num2"><br><br>

    <input type="button" value="Add" onclick="addNumbers()"><br><br>

    <label for="result">Result:</label>
    <input type="text" id="result" readonly><br><br>
  </form>
  </body>
</html>
`*/
<!DOCTYPE html>
<html>
<head>
  <title>Addition of Numbers</title>
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
  <style>
    @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");

    html {
      font-family: neo-sans;
      font-weight: 700;
      font-size: calc(52rem / 16);
    }

    body {
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #f2f2f2;
      padding: 1em;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    label {
      font-weight: bold;
    }

    input[type="number"],
    input[type="text"] {
      padding: 0.5em;
      margin-bottom: 1em;
      border-radius: 4px;
      border: 1px solid #ccc;
    }

    input[type="button"] {
      padding: 0.5em 1em;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    input[type="button"]:hover {
      background-color: #45a049;
    }
  </style>
  <script>
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        disableForReducedMotion: true
      });
    }, 500);

    function addNumbers() {
      // Get the input values
      var num1 = parseInt(document.getElementById("num1").value);
      var num2 = parseInt(document.getElementById("num2").value);

      // Add the numbers
      var sum = num1 + num2;

      // Set the result
      document.getElementById("result").value = sum;
    }
  </script>
</head>
<body>
  <form>
    <h2>Addition of Numbers</h2>

    <label for="num1">Number 1:</label>
    <input type="number" id="num1" name="num1">

    <label for="num2">Number 2:</label>
    <input type="number" id="num2" name="num2">

    <input type="button" value="Add" onclick="addNumbers()">

    <label for="result">Result:</label>
    <input type="text" id="result" readonly>
  </form>
</body>
</html>
`
