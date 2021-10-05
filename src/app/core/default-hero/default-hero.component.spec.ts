import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultHeroComponent } from './default-hero.component';

describe('DefaultHeroComponent', () => {
  let component: DefaultHeroComponent;
  let fixture: ComponentFixture<DefaultHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
