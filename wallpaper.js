 // this is just some starter code to get you going
  let app_el = document.getElementById("app")
  let random = ['🤖','😂','😈','😱','😷']
  
  // You'll probably want to put this in a loop!
  for (let i =0;  i<120; i++){
//     console.log(i)
    let card = document.createElement("span")
    // and use conditionals to determine the content
    card.textContent = i%2==0 ? "🍅" : "🤢" 
    card.onclick = function(e) {
      this.textContent = random[Math.floor(random.length*Math.random())] 
      console.log("clicked")
    }
    app_el.appendChild(card)

  }

  