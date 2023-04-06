import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriesListComponent } from './memories-list.component';

describe('MemoriesListComponent', () => {
  let component: MemoriesListComponent;
  let fixture: ComponentFixture<MemoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoriesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
