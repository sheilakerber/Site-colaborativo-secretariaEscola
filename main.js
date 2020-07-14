// <div>(Tela 1) Professores Matriculados</div>

//       <div>(Tela 2) Informações Alunos
//       </div>

//       <div>(Tela 3) Cadastramento de turmas
//       </div>

//deixar aqui pra vermos

// função que lista professores////

var teacher = {
  name: ["Lara", "Marzeu", "Almir", "Diogo", "Sheila"],
  classes: ["Francês", "Física", "Matemática", "Biologia", "Biologia"],
};

function createTable(text) {
  const div = document.getElementById("createTable");

  for (var i = 0; i < text.name.length; i++) {
    const p = document.createElement("p");
    p.innerText = `${text.name[i]}` + " - " + `${text.classes[i]}`;
    div.appendChild(p);
  }
}

//função que lista alunos e pagamentos//

// var students = {
//   name: ["Alice", "Breno", "Caio", "Luísa", "Paulo"],
//   classes: ["Pago", "Pendente", "Dívida", "Pago", "Pendente"],
// };

function listarAlunos() {
  var aluno1nome = document.getElementById("aluno1-nome").value;
  var aluno2nome = document.getElementById("aluno2-nome").value;
  var aluno3nome = document.getElementById("aluno3-nome").value;
  var aluno4nome = document.getElementById("aluno4-nome").value;
  var aluno5nome = document.getElementById("aluno5-nome").value;

  var aluno1turma = document.getElementById("aluno1-turma").value;
  var aluno2turma = document.getElementById("aluno2-turma").value;
  var aluno3turma = document.getElementById("aluno3-turma").value;
  var aluno4turma = document.getElementById("aluno4-turma").value;
  var aluno5turma = document.getElementById("aluno5-turma").value;

  var aluno1status = document.getElementById("aluno1-status").value;
  var aluno2status = document.getElementById("aluno2-status").value;
  var aluno3status = document.getElementById("aluno3-status").value;
  var aluno4status = document.getElementById("aluno4-status").value;
  var aluno5status = document.getElementById("aluno5-status").value;

  var students = {
    nome: [aluno1nome, aluno2nome, aluno3nome, aluno4nome, aluno5nome],
    turma: [aluno1turma, aluno2turma, aluno3turma, aluno4turma, aluno5turma],
    status: [
      aluno1status,
      aluno2status,
      aluno3status,
      aluno4status,
      aluno5status,
    ],
  };
  console.log(students);
}

//função criar turma//

var turma = {
  name: [""],
  teacher: [""],
  students: [""],
};

function createClass() {
  turma.name = "";
  turma.teacher = "";
  turma.students = "";
}
