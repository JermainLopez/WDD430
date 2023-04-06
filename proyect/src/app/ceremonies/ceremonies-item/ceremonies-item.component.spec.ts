import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremoniesItemComponent } from './ceremonies-item.component';

describe('CeremoniesItemComponent', () => {
  let component: CeremoniesItemComponent;
  let fixture: ComponentFixture<CeremoniesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeremoniesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeremoniesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
