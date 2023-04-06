import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremoniesListComponent } from './ceremonies-list.component';

describe('CeremoniesListComponent', () => {
  let component: CeremoniesListComponent;
  let fixture: ComponentFixture<CeremoniesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeremoniesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeremoniesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
