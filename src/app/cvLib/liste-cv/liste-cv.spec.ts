import { Personne } from '../../Model/Personne';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCv } from './liste-cv';

describe('ListeCv', () => {
  let component: ListeCv;
  let fixture: ComponentFixture<ListeCv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCv);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('personnes', [new Personne()]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
