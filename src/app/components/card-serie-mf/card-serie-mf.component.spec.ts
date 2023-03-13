import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSerieMfComponent } from './card-serie-mf.component';

describe('CardSerieMfComponent', () => {
  let component: CardSerieMfComponent;
  let fixture: ComponentFixture<CardSerieMfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSerieMfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSerieMfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
