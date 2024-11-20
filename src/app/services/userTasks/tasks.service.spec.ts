import { TestBed } from '@angular/core/testing';

import { UserTasksService } from './userTasks.service';

describe('TasksService', () => {
  let service: UserTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
