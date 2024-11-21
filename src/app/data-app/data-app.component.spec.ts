import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAppComponent } from './data-app.component';

describe('DataAppComponent', () => {
  let component: DataAppComponent;
  let fixture: ComponentFixture<DataAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
