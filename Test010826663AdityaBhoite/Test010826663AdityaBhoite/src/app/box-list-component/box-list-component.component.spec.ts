import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxListComponentComponent } from './box-list-component.component';

describe('BoxListComponentComponent', () => {
  let component: BoxListComponentComponent;
  let fixture: ComponentFixture<BoxListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxListComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
