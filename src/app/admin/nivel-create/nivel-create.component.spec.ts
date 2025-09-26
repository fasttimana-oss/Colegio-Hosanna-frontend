import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelCreateComponent } from './nivel-create.component';

describe('NivelCreateComponent', () => {
  let component: NivelCreateComponent;
  let fixture: ComponentFixture<NivelCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NivelCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
