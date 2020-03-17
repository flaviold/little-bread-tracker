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
  dataTeste;

  constructor() { }

  ngOnInit() {
    this.dataTeste = new Date(2020, 1);
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

  contadorDias(date2) {
    let ONE_DAY = 1000 * 60 * 60 * 24

    let date1_ms = new Date().getTime()
    let date2_ms = date2.getTime()

    var difference_ms = Math.abs(date1_ms - date2_ms)

    return Math.round(difference_ms / ONE_DAY)
  }
}
