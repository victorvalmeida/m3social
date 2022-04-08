import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazerComponent } from './fazer.component';

describe('FazerComponent', () => {
  let component: FazerComponent;
  let fixture: ComponentFixture<FazerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
