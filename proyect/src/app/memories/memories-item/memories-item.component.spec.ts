import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriesItemComponent } from './memories-item.component';

describe('MemoriesItemComponent', () => {
  let component: MemoriesItemComponent;
  let fixture: ComponentFixture<MemoriesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoriesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoriesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
