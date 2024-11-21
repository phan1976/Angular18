import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeinDataComponent } from './mein-data.component';

describe('MeinDataComponent', () => {
  let component: MeinDataComponent;
  let fixture: ComponentFixture<MeinDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeinDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeinDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
