import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-block-infinite-slot',
  templateUrl: './block-infinite-slot.component.html',
  styleUrls: ['./block-infinite-slot.component.css']
})
export class BlockInfiniteSlotComponent implements OnInit {

  get colour(): string {
    return this._colour;
  }

  @Input() set colour(value: string) {
    this._colour = value;
  }

  private _colour: string;

  constructor() {
  }

  ngOnInit() {
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
