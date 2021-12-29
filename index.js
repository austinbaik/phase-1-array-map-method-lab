const tutorials = [
  "What Does The This Keyword Mean?",
          "What Is The Constructor OO Pattern?",
          "Implementing Blockchain Web API",
          "The Test Driven Development Workflow",
          "What Is NaN And How Can We Check For It",
          "What Is The Difference Between StopPropagation And PreventDefault?",
          "Immutable State And Pure Functions",
          "What Is The Difference Between == And ===?",
          "What Is The Difference Between Event Capturing And Bubbling?",
          "What Is JSONP?"
]
function titleCased() {
  return tutorials.map(title => {
    const tempTitle = title.split(" ");
    // console.log(tempTitle)
    tempTitle.map(newTitle => {
      // console.log(newTitle)
       newTitle[0].toUpperCase() + newTitle.substr(1);
      // console.log(newCap)
      return newTitle 
      // return newTitle
    })
    // console.log(tempTitle)
  return tempTitle.join(" ")
  })
}
