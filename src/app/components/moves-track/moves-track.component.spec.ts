import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovesTrackComponent } from './moves-track.component';

describe('MovesTrackComponent', () => {
  let component: MovesTrackComponent;
  let fixture: ComponentFixture<MovesTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovesTrackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovesTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
