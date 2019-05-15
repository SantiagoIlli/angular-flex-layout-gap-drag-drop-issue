import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockDraggableComponent } from './block-draggable.component';

describe('BlockDraggableComponent', () => {
  let component: BlockDraggableComponent;
  let fixture: ComponentFixture<BlockDraggableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockDraggableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockDraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
