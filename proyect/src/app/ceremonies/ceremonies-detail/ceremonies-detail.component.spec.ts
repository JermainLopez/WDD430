import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremoniesDetailComponent } from './ceremonies-detail.component';

describe('CeremoniesDetailComponent', () => {
  let component: CeremoniesDetailComponent;
  let fixture: ComponentFixture<CeremoniesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeremoniesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeremoniesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
