import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagUserRoleComponent } from './manag-user-role.component';

describe('ManagUserRoleComponent', () => {
  let component: ManagUserRoleComponent;
  let fixture: ComponentFixture<ManagUserRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagUserRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagUserRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
