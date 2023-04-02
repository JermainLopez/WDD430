import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremonyDetailComponent } from './ceremony-detail.component';

describe('CeremonyDetailComponent', () => {
  let component: CeremonyDetailComponent;
  let fixture: ComponentFixture<CeremonyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeremonyDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeremonyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
