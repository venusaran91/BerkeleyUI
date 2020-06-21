import { TestBed } from '@angular/core/testing';

import { UserVisitService } from './user-visit.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserVisitService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: UserVisitService = TestBed.get(UserVisitService);
    expect(service).toBeTruthy();
  });
  
});
