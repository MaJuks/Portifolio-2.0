AOS.init();
const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '// É uma linguagem de marcação utilizada na construção de páginas na Web.',
                    '// É um mecanismo para adicionar estilo a um documento web.',
                    '// É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.',
                    '// É uma linguagem que manipula e gerencia dados no banco, o que a torna uma ferramenta essencial para diversas áreas da tecnologia ',
                    '// É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.',
                    '// É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.',
                    '// ...',
                    '// ...'
]

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento1.addEventListener('mouseover', (evento) => {
        descricao.innerHTML = `<p class="texto-descricao" >${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = "// Tecnologias que aprendi nos últimos anos.";
    } )
} );