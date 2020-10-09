class QuestionAnswer{
    constructor(questionObj){
        this.questionObj = questionObj
        this.renderQuestionsAnswers()
        
    }

    renderQuestionsAnswers(){
        const {question, answer} = this.questionObj

        const questionContainer = document.querySelector(".question-answer-container")
        this.questionCard = document.createElement("div")
        this.questionCard.classList.add("question-card")

        this.answerCard = document.createElement("div")
        this.answerCard.classList.add("answer-card")

        const questionLi = document.createElement("li")
        questionLi.innerText = question

        const answerLi = document.createElement("p")
        answerLi.innerText = answer

        this.questionCard.append(questionLi)
        this.answerCard.append(answerLi)

        questionContainer.appendChild(this.questionCard)
        questionContainer.appendChild(this.answerCard)
    }


}