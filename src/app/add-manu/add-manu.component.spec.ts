import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManuComponent } from './add-manu.component';

describe('AddManuComponent', () => {
  let component: AddManuComponent;
  let fixture: ComponentFixture<AddManuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddManuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddManuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
