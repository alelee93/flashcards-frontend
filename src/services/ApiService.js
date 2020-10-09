// In charge of making all fetch requests
class ApiService {
    constructor(root){
        this.root = root
    }

    getTopics = () => fetch(this.root+"/topics").then(res => res.json())
    //getTopic = (id) => fetch(this.root+"/topics/" + id).then(res => res.json())

    getTopic = (id) => fetch(this.root+"/topics/" + id+"/flashcard_sets").then(res => res.json())
    //getFlashCardSet = (id) => fetch(this.root+"/flashcard_sets/" + id).then(res => res.json())

}