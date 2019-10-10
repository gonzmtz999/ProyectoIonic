import { TestBed } from '@angular/core/testing';

import { FleteRepositoryService } from './flete-repository.service';

describe('FleteRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FleteRepositoryService = TestBed.get(FleteRepositoryService);
    expect(service).toBeTruthy();
  });
});
