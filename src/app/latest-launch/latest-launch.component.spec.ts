import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestLaunchComponent } from './latest-launch.component';

describe('LatestLaunchComponent', () => {
  let component: LatestLaunchComponent;
  let fixture: ComponentFixture<LatestLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
