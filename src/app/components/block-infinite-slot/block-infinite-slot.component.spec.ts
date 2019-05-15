import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockInfiniteSlotComponent } from './block-infinite-slot.component';

describe('BlockInfiniteSlotComponent', () => {
  let component: BlockInfiniteSlotComponent;
  let fixture: ComponentFixture<BlockInfiniteSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockInfiniteSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockInfiniteSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
