// <div>(Tela 1) Professores Matriculados</div>

//       <div>(Tela 2) Informações Alunos
//       </div>

//       <div>(Tela 3) Cadastramento de turmas
//       </div>

//deixar aqui pra vermos

// função que lista professores////

var teacher = {
    name: [
        'Lara',
        'Marzeu',
        'Almir',
        'Diogo',
        'Sheila'
    ],
    classes: [
        'Francês', 'Física', 'Matemática', 'Biologia', 'Biologia'
    ],
};


function createTable(text) {
    const div = document.getElementById('createTable');

    for (var i = 0; i < text.name.length; i++) {
        const p = document.createElement('p');
        p.innerText = `${text.name[i]}` + ' - ' + `${text.classes[i]}`;
        div.appendChild(p);
    };
};

//função que lista alunos e pagamentos//

var students = {
    name: [
        'Alice',
        'Breno',
        'Caio',
        'Luísa',
        'Paulo'
    ],
    classes: [
        'SIM',
        'SIM',
        'NÃO',
        'SIM',
        'NÃO'
    ],
};

//função criar turma//

var turma = {
    name: [''],
    teacher: [''],
    students: ['']
};

function createClass() {
    turma.name = '';
    turma.teacher = '';
    turma.students = '';
}