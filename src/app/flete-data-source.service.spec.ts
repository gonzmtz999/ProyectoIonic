import { TestBed } from '@angular/core/testing';

import { FleteDataSourceService } from './flete-data-source.service';

describe('FleteDataSourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FleteDataSourceService = TestBed.get(FleteDataSourceService);
    expect(service).toBeTruthy();
  });
});
