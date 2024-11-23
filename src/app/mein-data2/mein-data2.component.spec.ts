import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeinData2Component } from './mein-data2.component';

describe('MeinData2Component', () => {
  let component: MeinData2Component;
  let fixture: ComponentFixture<MeinData2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeinData2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeinData2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
