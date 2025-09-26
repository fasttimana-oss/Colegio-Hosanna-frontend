import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelListComponent } from './nivel-list.component';

describe('NivelListComponent', () => {
  let component: NivelListComponent;
  let fixture: ComponentFixture<NivelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NivelListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
