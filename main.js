const question = document.querySelectorAll(".question")
const answer = document.querySelectorAll(".answer")


const que = new Array(question)

question.forEach(q=>{
    q.addEventListener('click', ()=>{

        if(q.parentNode.classList.contains('active')){
            q.parentNode.classList.toggle('active')
        }
        else{
           question.forEach(q=>{
            q.parentNode.classList.remove('active')
           })
           q.parentNode.classList.add('active')
        }
    })
})