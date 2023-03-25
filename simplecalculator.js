const express = require("express")
const app = express()
const res = require("express/lib/response")

app.get("/", (req, res) => {
    res.send("I am a calculator!")
})

app.get("/plus/:number1/:number2", (req, res) => {
  try {
  const number1 = parseFloat(req.params.number1)
  const number2 = parseFloat(req.params.number2)

  if (isNaN(number1)) {
      throw new Error("First number incorrectly defined");
  }

  if (isNaN(number2)) {
      throw new Error("Second number incorrectly defined");
  }
  
  if (number1 === NaN || number2 === NaN) {
      console.log()
      throw new Error("Parsing Error");
  }

  const added = (number1 + number2).toString()
  res.send(added)
  }

  catch(error) { 
    console.error(error)
    res.status(500).json({statuscocde:500, msg: error.toString() })
  }

});

app.get("/minus/:number1/:number2", (req, res) => {
  try {
  const number1 = parseFloat(req.params.number1)
  const number2 = parseFloat(req.params.number2)
  const takenaway = (number1 - number2).toString()

  if(number1 || number2 || takenaway < 0)  {
    throw new Error("Please do not subtract by negative numbers")
  }

  res.send(takenaway)
  }

  catch(error) { 
    console.error(error)
    res.status(500).json({statuscocde:500, msg: error.toString() })
  }

})


app.get("/times/:number1/:number2", (req, res) => {
  const number1 = parseFloat(req.params.number1)
  const number2 = parseFloat(req.params.number2)
  const times = (number1 * number2).toString()
  res.send(times)
}) 

app.get("/divide/:number1/:number2", (req, res) => {
  try {

  const number1 = parseFloat(req.params.number1)
  const number2 = parseFloat(req.params.number2)
  const divided = (number1 / number2).toString()

  if (number2 == 0) {
    throw new Error("Please do not define number2 as 0.");
}
  res.send(divided)
  }

  catch(error) { 
  console.error(error)
  res.status(500).json({statuscocde:500, msg: error.toString() })
  }

})

app.listen(8080, function () {
  console.log("Successfully started express application!")
})
