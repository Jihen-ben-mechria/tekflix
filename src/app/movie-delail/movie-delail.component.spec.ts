import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDelailComponent } from './movie-delail.component';

describe('MovieDelailComponent', () => {
  let component: MovieDelailComponent;
  let fixture: ComponentFixture<MovieDelailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDelailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDelailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
