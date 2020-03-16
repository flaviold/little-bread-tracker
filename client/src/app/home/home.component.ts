import { Component, OnInit } from '@angular/core';
import { Paozinho } from '../models/paozinho.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listaAniversarios: Array<any> = [{ tipo: 1, nome: 'Waschington', data: '20/08/2020' }, { tipo: 2, nome: 'Flavio', data: '12/05/2020' }, { tipo: 3, data: '10/06/2020', nome: 'Ronny' }, { tipo: 1, nome: 'Chico', data: '10/07/2020' }, { tipo: 2, nome: 'Teste', data: '10/07/2020' }];
  proximoPao: any;
  constructor() { }

  ngOnInit() {
   // this.contador();
  }

  buscarTipo(item) {
    if (item.tipo == 1) {
      return 'Aniversário';
    } else if (item.tipo == 2) {
      return 'Férias';
    } else {
      return 'Admissão'
    }
  }

  escolherIcon(item) {
    if (item.tipo == 1) { //Aniversário
      return 'fas fa-birthday-cake';
    } else if (item.tipo == 2) {
      return 'fas fa-umbrella-beach'
    } else {
      return 'far fa-user'
    }
  }

//   function days_between(date1, date2) {

//   // The number of milliseconds in one day
//   var ONE_DAY = 1000 * 60 * 60 * 24

//   // Convert both dates to milliseconds
//   var date1_ms = date1.getTime()
//   var date2_ms = date2.getTime()

//   // Calculate the difference in milliseconds
//   var difference_ms = Math.abs(date1_ms - date2_ms)

//   // Convert back to days and return
//   return Math.round(difference_ms / ONE_DAY)

// }
}
