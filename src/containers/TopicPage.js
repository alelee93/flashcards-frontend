
// .contentEditable = "true"




class TopicPage {
    constructor(id){
        //we need .then so that we wait to get all the data from the promise for the next method to run.
        //try refactoring with ARROW function to avoid using .bind
        api.getTopic(id).then(this.buildPage.bind(this))
        
    }

    buildPage(topics){
        this.topics = topics
       //console.log(this.topics)
        this.renderPage()
    }


    renderPage(){
        //need to fix name so that it works when no [0] exists
        //const name = this.topics[0].topic.name
        //console.log(this)
        const body = document.body
        body.innerHTML = ""
        body.classList.add("topic-page")

        const header = document.createElement("h1")
        header.innerText = `Flashcard Sets about ${name}`

        const setContainer = document.createElement("div")
        setContainer.classList.add("set-container")

        const backButton = document.createElement("button")
        backButton.innerText = "Go Back"
        backButton.addEventListener("click", () => new TopicContainer)

        body.append(header, backButton, setContainer)

        //works --MAKE THIS A FUNCTION
        // this.topics.forEach((topic) => {
        //     let li = document.createElement("li")
        //     li.innerText = topic.name
        //     body.append(li)

        // })

        this.topics.forEach(set =>new FlashCardSet(set))

        //flashcard_sets.forEach(set => new FlashCardSet(set))
    }

    

      // newFetch(id){
    //     fetch("http://localhost:3000/topics")
    //     .then(res => res.json())
    //     .then(data => data)
    //     .console.log(data)
    // }
}