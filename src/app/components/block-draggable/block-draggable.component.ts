import {Component, OnInit} from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-block-draggable',
  templateUrl: './block-draggable.component.html',
  styleUrls: ['./block-draggable.component.css']
})
export class BlockDraggableComponent implements OnInit {

  constructor(public cdkDrag: CdkDrag) {
  }

  ngOnInit() {
  }

}
