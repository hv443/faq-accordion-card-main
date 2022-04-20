const question = document.querySelectorAll(".question")
const answer = document.querySelector(".answer")


question.forEach(q=>{
    q.addEventListener("click", (g)=>{

        if(event.target.innerHTML === q.innerHTML){
            answer.classList.toggle('visible')
            answer.classList.toggle('Nvisible')
            console.log("usahdi")
        }
       
    })
})


