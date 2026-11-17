import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cv } from './cv';

describe('Cv', () => {
  let component: Cv;
  let fixture: ComponentFixture<Cv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('opens the selected CV when its list entry is clicked', () => {
    const view: HTMLElement = fixture.nativeElement;
    const entries = view.querySelectorAll<HTMLButtonElement>('app-item-cv button');
    expect(entries.length).toBe(4);
    expect(view.querySelector('app-detail-cv')).toBeNull();
    entries.forEach((entry, index) => {
      entry.click();
      fixture.detectChanges();
      const personne = component.personnes[index];
      expect(view.querySelector('app-detail-cv .name')?.textContent?.trim())
        .toBe(personne.firstname + ' ' + personne.name);
    });
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
