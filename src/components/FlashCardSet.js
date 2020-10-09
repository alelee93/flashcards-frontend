// let li = document.createElement("li")
//             li.innerText = topic.name
//             body.append(li)



class FlashCardSet {
    constructor(set){
        this.set = set
        //console.log(set)
        this.render()
        this.addEventListeners()
    }

    render(){
        const setContainer = document.querySelector(".set-container")
        this.setCard = document.createElement("div")
        this.setCard.classList.add("set-card")

        const setHeader = document.createElement("h4")
        setHeader.innerText = this.set.name
        //console.log(setHeader)
        this.setCard.append(setHeader)
        //console.log(setContainer)
        setContainer.appendChild(this.setCard)
    }

    addEventListeners(){
        //console.log(this.setCard)

        this.setCard.addEventListener("click", () => console.log(this.set))

        this.setCard.addEventListener("click", () => new FlashCardsPage(this.set))
        
        //document.querySelector(".set-card").addEventListener("click", console.log("test"))
    }

    
}