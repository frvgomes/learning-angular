import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-data-bind></app-data-bind>,
  <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'learning-angular';
}


// Ciclos de vida:
// ngOnChanges: chamado uma vez na criação do componente e sempre que houver alteração
// em uma de suas propriedades de entrada. Ou seja, mudanças no Input() decorator e no
// property binding.

// ngOnInit: chamado uma única vez quando o componente é inicializado (logo após o primeiro
// ngOnChanges).

// ngDoCheck: chamado a cada ciclo de detecção de alterações (processo que percorre o
// componente atrás de mudanças). Portanto use ao invés do ngOnChanges para alterações que
// o Angular não detecta.

// ngOnDestroy: chamado antes do Angular destruir o componente.
// Além disso existem outros 4 ganchos dentro do ngDoCheck:
// ngAfterContentInit: chamado depois que o conteúdo externo é inserido no componente
// (por exemplo, vindo do ng-content).
// ngAfterContentChecked: invocado após a verificação do conteúdo externo.
// ngAfterViewInit: chamado logo após o conteúdo do próprio componente e de seus filhos
// ser inicializado.
// ngAfterViewChecked: chamado cada vez que o conteúdo do componente é verificado pelo
// mecanismo de detecção de alterações do Angular.
