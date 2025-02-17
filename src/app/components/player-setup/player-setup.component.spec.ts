import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSetupComponent } from './player-setup.component';

describe('PlayerSetupComponent', () => {
  let component: PlayerSetupComponent;
  let fixture: ComponentFixture<PlayerSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
