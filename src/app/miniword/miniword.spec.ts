import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Miniword } from './miniword';

describe('Miniword', () => {
  let component: Miniword;
  let fixture: ComponentFixture<Miniword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Miniword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Miniword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
