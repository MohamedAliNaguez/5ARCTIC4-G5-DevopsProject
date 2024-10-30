import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkierDetailComponent } from './skier-detail.component';

describe('SkierDetailComponent', () => {
  let component: SkierDetailComponent;
  let fixture: ComponentFixture<SkierDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkierDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkierDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
