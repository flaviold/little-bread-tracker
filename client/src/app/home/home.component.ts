import { Component, OnInit } from '@angular/core';
import { Paozinho } from '../models/paozinho.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listaAniversarios: Array<any> = [{ tipo: 1, data: '20/08/2020'}, { tipo: 2, data: '12/05/2020' }, { tipo: 3,data: '10/06/2020' }, { tipo: 1, data: '10/07/2020' }];
  proximoPao: any;
  constructor() { }

  ngOnInit() {
    this.proximoPao = {
      tipo: 1,
      data: '18/08/2000',
      nome: 'Waschington',
    }
  }

  buscarTipo(){
    if(this.proximoPao.tipo == 1) {
      return 'Aniversário';
    }else if(this.proximoPao.tipo == 2){
      return 'Férias';
    }else {
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

}

