import { Injectable } from '@angular/core';
import {Flete} from './coches';
import {FleteDataSourceService} from './flete-data-source.service';

@Injectable({
  providedIn: 'root'
})
export class FleteRepositoryService {
  private fletes: Flete[] = [];
  constructor(private dataSource: FleteDataSourceService) {
    this.dataSource.getFletes()
    .subscribe((response) => {
      this.fletes = response.fletes;
    });
  }
  getFletes(): Flete[] {
    return this.fletes;
  }
}
