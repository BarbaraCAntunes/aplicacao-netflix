import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSerieHpComponent } from './card-serie-hp.component';

describe('CardSerieHpComponent', () => {
  let component: CardSerieHpComponent;
  let fixture: ComponentFixture<CardSerieHpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSerieHpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSerieHpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
