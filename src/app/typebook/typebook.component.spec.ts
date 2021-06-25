import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypebookComponent } from './typebook.component';

describe('TypebookComponent', () => {
  let component: TypebookComponent;
  let fixture: ComponentFixture<TypebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
