import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanchesDetailsComponent } from './lanches-details.component';

describe('LanchesDetailsComponent', () => {
  let component: LanchesDetailsComponent;
  let fixture: ComponentFixture<LanchesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanchesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanchesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
