import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiftContentComponent } from './sift-content.component';

describe('SiftContentComponent', () => {
  let component: SiftContentComponent;
  let fixture: ComponentFixture<SiftContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiftContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiftContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
