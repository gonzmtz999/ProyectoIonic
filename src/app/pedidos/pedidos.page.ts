import { Component, OnInit } from '@angular/core';
import { FleteRepositoryService } from '../flete-repository.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  valor='';
  constructor(private fleteRepository: FleteRepositoryService) { }

  ngOnInit() {
    console.log(this.fleteRepository);
  }
  get fletes() {
    return this.fleteRepository.getFletes();
  }
}
