import { TestBed } from '@angular/core/testing';

import { ApiNewsService } from './api-news.service';

describe('ApiNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiNewsService = TestBed.get(ApiNewsService);
    expect(service).toBeTruthy();
  });
});
