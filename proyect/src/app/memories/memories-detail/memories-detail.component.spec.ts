import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriesDetailComponent } from './memories-detail.component';

describe('MemoriesDetailComponent', () => {
  let component: MemoriesDetailComponent;
  let fixture: ComponentFixture<MemoriesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoriesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoriesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
