import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroDetailsComponent } from './astro-details.component';

describe('AstroDetailsComponent', () => {
  let component: AstroDetailsComponent;
  let fixture: ComponentFixture<AstroDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstroDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
