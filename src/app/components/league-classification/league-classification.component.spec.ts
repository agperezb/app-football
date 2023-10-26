import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueClassificationComponent } from './league-classification.component';

describe('LeagueClassificationComponent', () => {
  let component: LeagueClassificationComponent;
  let fixture: ComponentFixture<LeagueClassificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeagueClassificationComponent]
    });
    fixture = TestBed.createComponent(LeagueClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
