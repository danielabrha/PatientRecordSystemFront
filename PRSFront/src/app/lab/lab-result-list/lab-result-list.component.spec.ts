import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabResultListComponent } from './lab-result-list.component';

describe('LabResultListComponent', () => {
  let component: LabResultListComponent;
  let fixture: ComponentFixture<LabResultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabResultListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
