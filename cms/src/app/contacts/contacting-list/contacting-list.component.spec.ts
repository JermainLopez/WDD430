import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactingListComponent } from './contacting-list.component';

describe('ContactingListComponent', () => {
  let component: ContactingListComponent;
  let fixture: ComponentFixture<ContactingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
