const url = "http://localhost:3000"

//Função para cadastrar um aluno
function salvarAluno(){
    //Capturar as informações do aluno
    let nome = document.getElementById('nome').value
    let telefone = document.getElementById('telefone').value
    let status = true

    const aluno = {
        nome: nome,
        telefone: telefone,
        status: status
    }

    //Disparar a requisição POST
    axios.post(`${url}/aluno`, aluno)
    .then(
        (response) => {
            alert(response.data.message)
            window.location.reload()
        } 
    ).catch(err => console.error(err))
}

//Função para cadastrar turma
function salvarTurma(){
    //Capturar as informações da turma
    let nome = document.getElementById('nomeTurma').value

    const turma = {
        nome: nome
    }

    axios.post(`${url}/turma`, turma)
    .then(
        (response) => {
            alert(response.data.message)
            window.location.reload()
        } 
    ).catch(err => console.error(err))
}