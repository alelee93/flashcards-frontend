class ShowFlashCardsPage{
    constructor(flashcardSetObj){
        this.flashcardSet = flashcardSetObj
        console.log(this.flashcardSet)
        console.log("showflashcardspage")
        this.counter = 0
        this.renderPage()
        
    }

    
    renderPage(){
        const {name, topic, questions} = this.flashcardSet
        //console.log(questions.length)
        const body = document.body
        body.innerHTML = ""
        body.classList.add("show-flashcard-page")

        const header = document.createElement("h1")
        header.innerText = `Flashcards about ${name}`

        const flashCardContainer = document.createElement("div")
        flashCardContainer.classList.add("flashcard-container")

        const backButton = document.createElement("button")
        backButton.innerText = "Go Back"
        backButton.addEventListener("click", () => new FlashCardsPage(this.flashcardSet))

        const flipButton = document.createElement("button")
        flipButton.innerText = "Flip"
        flipButton.classList.add("flip-button")

        const NextflashCardButton = document.createElement("button")
        NextflashCardButton.innerText = ">"
        NextflashCardButton.addEventListener("click",() => {
            const flashcard = document.querySelector(".flashcard-container")
            flashcard.innerHTML = ""
            this.counter = Math.min(this.counter + 1, questions.length - 1) 
            //console.log(this.counter)
            new FlashCard(questions[this.counter])
        })

        const PrevflashCardButton = document.createElement("button")
        PrevflashCardButton.innerText = "<"
        PrevflashCardButton.addEventListener("click",() => {
            const flashcard = document.querySelector(".flashcard-container")
            flashcard.innerHTML = ""
            this.counter = Math.max(this.counter - 1, 0) 
            //console.log(this.counter)
            new FlashCard(questions[this.counter])
        })

        body.append(header, backButton,flipButton, PrevflashCardButton, NextflashCardButton, flashCardContainer)
        new FlashCard(questions[this.counter])
        //questions.forEach(question => new FlashCard(question))
    }

}