import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremonyItemComponent } from './ceremony-item.component';

describe('CeremonyItemComponent', () => {
  let component: CeremonyItemComponent;
  let fixture: ComponentFixture<CeremonyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeremonyItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeremonyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
