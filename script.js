let disciplinas = [];
class Disciplina{
  constructor(nome, professor, cargaHoraria){
    this.nome = nome;
    this.professor = professor;
    this.cargaHoraria = cargaHoraria;
  }
}

function cadastrarDisciplina(){
  let nome = byId("nomeDisciplina").value;
  let professor = byId("professorMinistrante").value;
  let cargaHoraria = byId("cargaHoraria").value;
  let disciplina = new Disciplina(nome, professor, cargaHoraria);
  disciplinas.push(disciplina);
  apresentarDisciplina();
}

function apresentarDisciplina(){
  let tabela = byId("disciplinas");
  let listar = "<ol>"
  for(let disciplina of disciplinas){
    listar += `<li>${disciplina.nome}(${disciplina.professor})(${disciplina.cargaHoraria})</li>`
  }
  listar += "</ol>"
      tabela.innerHTML = listar;
}

function byId(id){
  return document.getElementById(id)
}