import { Component, OnInit } from '@angular/core';
import { FleteRepositoryService } from '../flete-repository.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
})
export class PedidosComponent implements OnInit {

  constructor(private fleteRepository: FleteRepositoryService) { }

  ngOnInit() {
    console.log('init');
  }
  get fletes() {
    return this.fleteRepository.getFletes();
  }

}
