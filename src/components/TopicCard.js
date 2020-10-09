//console.log("test card")

class TopicCard {
    
    constructor(topic){
        this.topic = topic
        this.card = this.render()
        this.addEventListeners()
    }

    render(){
        const {name, id} = this.topic
        const card = document.createElement("div")
        card.classList.add("topic-card")
        const header = document.createElement("h3")
        header.innerText = name
        card.append(header)
        document.querySelector(".topic-container").appendChild(card)
        return card
    }

    addEventListeners(){
        this.card.addEventListener("click",() => new TopicPage(this.topic.id))
        //this.card.addEventListener("click",() => console.log(this.topic.id))

    }

}