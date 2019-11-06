import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapEmployeeComponent } from './map-employee.component';

describe('MapEmployeeComponent', () => {
  let component: MapEmployeeComponent;
  let fixture: ComponentFixture<MapEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
