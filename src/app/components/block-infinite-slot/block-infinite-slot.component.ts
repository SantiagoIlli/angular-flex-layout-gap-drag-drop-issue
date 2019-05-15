import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-block-infinite-slot',
  templateUrl: './block-infinite-slot.component.html',
  styleUrls: ['./block-infinite-slot.component.css']
})
export class BlockInfiniteSlotComponent implements OnInit {

  @ViewChild(CdkDropList) dropList: CdkDropList;

  get colour(): string {
    return this._colour;
  }

  @Input() set colour(value: string) {
    this._colour = value;
  }

  private _colour: string;

  private counter: number;

  constructor() {
    this.counter = 0;
  }

  ngOnInit() {
  }


  drop(event: CdkDragDrop<{ colour: string, someValue: number }[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      event.container.data = [{colour: this.colour, someValue: ++this.counter}];
    }
  }

  onDragExited() {
    this.dropList.data = [{colour: this.colour, someValue: ++this.counter}];

  }
}
