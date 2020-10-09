class FlashCardsPage {
    constructor(flashcardSetObj){
        //we need .then so that we wait to get all the data from the promise for the next method to run.
        //try refactoring with ARROW function to avoid using .bind
        this.flashcardSet = flashcardSetObj
        this.renderPage()
    }


    renderPage(){
        const {name, topic, questions} = this.flashcardSet
        //console.log(flashcard_sets)
        const body = document.body
        body.innerHTML = ""
        body.classList.add("flashcard-page")

        const header = document.createElement("h1")
        header.innerText = `Flashcards about ${name}`

        const setContainer = document.createElement("div")
        setContainer.classList.add("question-answer-container")

        const backButton = document.createElement("button")
        backButton.innerText = "Go Back"
        backButton.addEventListener("click", () => new TopicPage(topic.id))

        const ShowflashCardButton = document.createElement("button")
        ShowflashCardButton.innerText = "Show Flashcards"
        ShowflashCardButton.addEventListener("click",() => new ShowFlashCardsPage(this.flashcardSet))

        const EditflashCardButton = document.createElement("button")
        EditflashCardButton.innerText = "Edit"
        EditflashCardButton.addEventListener("click",() => console.log("edit"))

        body.append(header, backButton, ShowflashCardButton, EditflashCardButton, setContainer)


        questions.forEach(question => new QuestionAnswer(question))
        
        // questions.forEach(question => {
        //     let li = document.createElement("li")
        //     li.innerText = question.question
        //     body.append(li)
        // })

        //questions.forEach(question => new FlashCard(question))
    }
}