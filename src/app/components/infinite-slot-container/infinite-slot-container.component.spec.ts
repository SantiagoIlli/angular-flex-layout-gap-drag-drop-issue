import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteSlotContainerComponent } from './infinite-slot-container.component';

describe('InfiniteSlotContainerComponent', () => {
  let component: InfiniteSlotContainerComponent;
  let fixture: ComponentFixture<InfiniteSlotContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteSlotContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteSlotContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
