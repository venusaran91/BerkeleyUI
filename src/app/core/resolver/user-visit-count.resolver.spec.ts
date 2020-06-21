import { TestBed } from '@angular/core/testing';

import { UserVisitCountResolver } from './user-visit-count.resolver';
import { UserVisitService } from '../service/user-visit.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserVisitCountResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[UserVisitService]
  }));

  it('should be created', () => {
    const resolver: UserVisitCountResolver = TestBed.get(UserVisitCountResolver);
    expect(resolver).toBeTruthy();
  });
});
