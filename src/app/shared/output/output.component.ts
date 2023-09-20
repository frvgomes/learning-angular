import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() public eviarDados = new EventEmitter()

  public list: Array<{nome: string, idade:number}> = [
    {nome:"Maria do Socorro", idade: 30},
    {nome:"Mary Help", idade: 23},
    {nome:"Maria del Socorro", idade: 39},
  ]
  public getDados(event: number){
    this.eviarDados.emit(this.list[event])
  }
}
