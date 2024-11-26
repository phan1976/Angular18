import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConBeComponent } from './con-be.component';

describe('ConBeComponent', () => {
  let component: ConBeComponent;
  let fixture: ComponentFixture<ConBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConBeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
