import { Component } from '@angular/core';
import { Disciplina } from './disciplina';

@Component({
  selector: 'app-exibe-disciplinas',
  templateUrl: './exibe-disciplinas.component.html',
  styleUrl: './exibe-disciplinas.component.css'
})
export class ExibeDisciplinasComponent {
    disciplinas: Disciplina[]
    logotipo: string; 

    constructor(){
      this.logotipo = "https://dados.ifrn.edu.br/base/images/logo-ifrn.png"
      this.disciplinas = []
    }
    adicionar(nome: string, doc: string, ch: number){
      if (nome && doc && ch){
        let disc = new Disciplina(nome, doc, ch)
        this.disciplinas.push(disc)
      }

    }
}