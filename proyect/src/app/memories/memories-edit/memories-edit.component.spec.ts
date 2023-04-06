import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriesEditComponent } from './memories-edit.component';

describe('MemoriesEditComponent', () => {
  let component: MemoriesEditComponent;
  let fixture: ComponentFixture<MemoriesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoriesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
