import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataApp1Component } from './data-app1.component';

describe('DataApp1Component', () => {
  let component: DataApp1Component;
  let fixture: ComponentFixture<DataApp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataApp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataApp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
