import { Component } from '@angular/core';


@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent {
  public condition: boolean = true
  public conditionClick: boolean = true
  public list:Array<{nome: string, idade: number}> = [
    {nome:'Francisco', idade: 29},
    {nome:'Rosemberg', idade: 20},
    {nome:'Viana', idade: 25},
    {nome:'Gomes', idade: 30}
  ]


  ngOnInit(){
    setInterval(() => {
      if(this.condition){
      this.condition = false
    } else{
      this.condition = true
    }
    }, 2000)
  }

  public qualquerNome(){
    if(this.conditionClick){
      this.conditionClick = false
    } else{
      this.conditionClick = true
    }
  }

  public onClickAddList(){
    this.list.push({nome: "Novo", idade:55})
  }

  public onClickEventList(event: number){
    this.list.splice(event, 1)

  }

  public cor: string = "";

}
