import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesGroupComponent } from './courses-group.component';

describe('CoursesGroupComponent', () => {
  let component: CoursesGroupComponent;
  let fixture: ComponentFixture<CoursesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
