import { TestBed } from '@angular/core/testing';

import { BookRecommendedCategoryService } from './book-recommended-category.service';

describe('BookRecommendedCategoryService', () => {
  let service: BookRecommendedCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRecommendedCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
