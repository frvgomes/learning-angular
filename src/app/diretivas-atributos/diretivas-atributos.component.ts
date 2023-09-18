import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent {

  public valor: boolean = true
  public altura: string = "20px"
  public nome: string = ""
  public list:Array<{nome:string}> =[{nome:"Teste1"},{nome:"teste2"}]

  ngOnInit(){
    setInterval(() => {
      if(this.valor){
      this.valor = false
    } else{
      this.valor = true
    }

    if(this.altura === "20px"){
      this.altura = "50px"
    } else{
      this.altura = "20px"
    }
    }, 2000)
  }

  public salvar(){
    this.list.push({nome: this.nome})
    this.nome = ""
  }

}
