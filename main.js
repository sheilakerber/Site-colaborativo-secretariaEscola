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
        'Francês', 'Física', 'Matemática', 'Biologia'
    ],
};

function teacherList() {
    console.log(teacher.name);
};

teacherList();

//função que lista alunos e pagamentos//

var students = {
    name: [
        'Alice',
        'Breno',
        'Caio',
        'Luísa',
        'Paulo'
    ],
    payment: [''],
};

function showStudents() {
    console.log(students.name);
}

showStudents();


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