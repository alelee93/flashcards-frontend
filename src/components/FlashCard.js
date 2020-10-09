class FlashCard{
    constructor(question){
        this.question = question
        
        this.renderQuestion()
        this.addEventListeners()
        
    }

    renderQuestion(){
        this.status = "Question"
        const {question, answer} = this.question
        //console.log(this.question)
        const flashcardContainer = document.querySelector(".flashcard-container")
        this.flashcard = document.createElement("div")
        this.flashcard.classList.add("flashcard")

        const setQuestion = document.createElement("h4")
        setQuestion.innerText = question
        //console.log(setHeader)
        this.flashcard.append(setQuestion)
        //console.log(setContainer)
        flashcardContainer.appendChild(this.flashcard)
    }

    addEventListeners(){
        const flipButton = document.querySelector(".flip-button")
        flipButton.addEventListener("click",() => {
            const flashcard = document.querySelector(".flashcard-container")
            flashcard.innerHTML = ""
            this.flip()
        })
    }

    flip(){
        if(this.status === "Answer"){
            this.renderQuestion()
        } else {
            this.renderAnswer()
        }
        

    }

    renderAnswer(){
        this.status = "Answer"
        const {question, answer} = this.question
        //console.log(this.question)
        const flashcardContainer = document.querySelector(".flashcard-container")
        this.flashcard = document.createElement("div")
        this.flashcard.classList.add("flashcard")

        const setAnswer = document.createElement("h4")
        setAnswer.innerText = answer
        //console.log(setHeader)
        this.flashcard.append(setAnswer)
        //console.log(setContainer)
        flashcardContainer.appendChild(this.flashcard)
    }
}