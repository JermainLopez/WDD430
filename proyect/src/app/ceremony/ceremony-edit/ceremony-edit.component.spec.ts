import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremonyEditComponent } from './ceremony-edit.component';

describe('CeremonyEditComponent', () => {
  let component: CeremonyEditComponent;
  let fixture: ComponentFixture<CeremonyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeremonyEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeremonyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
