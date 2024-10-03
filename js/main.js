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

//Função para alimentar os selects para listar alunos e turmas
function listarDados(){

    axios.get(`${url}/alunos`)
    .then(
        (response) => {
            let alunos = response.data
            let selectAlunos = document.getElementById('listaAlunos')
            let html = '<option selected disabled hidden>Escolha uma opção</option>'

            for(let aluno of alunos){
                html += `<option value="${aluno.id}">${aluno.nome}</option>`
            }

            selectAlunos.innerHTML = html
        }
    ).catch(err => console.error(err))

    axios.get(`${url}/turmas`)
    .then(
        (response) => {
            let turmas = response.data
            let selectTurmas = document.getElementById('listaTurmas')
            let html = '<option selected disabled hidden>Escolha uma opção</option>'

            for(let turma of turmas){
                html += `<option value="${turma.id}">${turma.nome}</option>`
            }

            selectTurmas.innerHTML = html
        }
    ).catch(err => console.error(err))
}

function matricular(){

    let selectAluno = document.getElementById('listaAlunos')
    let optionAluno = selectAluno.options[selectAluno.selectedIndex].value

    let selectTurma = document.getElementById('listaTurmas')
    let optionTurma = selectTurma.options[selectTurma.selectedIndex].value

    const data = {
        aluno_id: optionAluno,
        turma_id: optionTurma
    }

    axios.put(`${url}/matricula`, data)
    .then(
        (response) => {
            alert(response.data.message)
            window.location.reload()
        }
    ).catch(err => console.error(err))
}

function criarTabela(){
    axios.get(`${url}/lista`)
    .then(
        (response) => {
            let matriculas =  response.data
            let table = document.getElementById('table-matriculas')
            let html = ''

            for(let matricula of matriculas){
                html += `
                    <tr>
                    <td>${matricula.id}</td>
                    <td>${matricula.aluno}</td>
                    <td>${matricula.turma}</td>
                    <td><button class="btn" onclick="">Desmatricular</button></td>
                    </tr>
                `
            }

            table.innerHTML = html
        }
    )
}