import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-infinite-slot-container',
  templateUrl: './infinite-slot-container.component.html',
  styleUrls: ['./infinite-slot-container.component.css']
})
export class InfiniteSlotContainerComponent implements OnInit {
  colours: string[];

  constructor() {
    this.colours = ['yellow', 'aqua', 'black', 'red', 'brown', 'blue'];
  }

  ngOnInit() {
  }



}
