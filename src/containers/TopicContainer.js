
class TopicContainer {
    constructor(){
        api.getTopics().then(this.renderTopics)
    }

    renderTopics(topics){
        const body = document.body
        body.innerHTML = ""
        const header = document.createElement("h1")
        header.innerText = "Flashcard Topics"

        const container = document.createElement("div")
        container.classList.add("topic-container")

        body.append(header, container)
        //console.log(topics)
        topics.forEach(topic => new TopicCard(topic))
    }
}