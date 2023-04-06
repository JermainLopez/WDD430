import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremoniesEditComponent } from './ceremonies-edit.component';

describe('CeremoniesEditComponent', () => {
  let component: CeremoniesEditComponent;
  let fixture: ComponentFixture<CeremoniesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeremoniesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeremoniesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
