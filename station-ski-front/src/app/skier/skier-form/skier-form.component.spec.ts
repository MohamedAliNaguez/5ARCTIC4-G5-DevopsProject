import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkierFormComponent } from './skier-form.component';

describe('SkierFormComponent', () => {
  let component: SkierFormComponent;
  let fixture: ComponentFixture<SkierFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkierFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
