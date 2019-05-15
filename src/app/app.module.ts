import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlockDraggableComponent } from './components/block-draggable/block-draggable.component';
import { BlockInfiniteSlotComponent } from './components/block-infinite-slot/block-infinite-slot.component';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { LeftContainerComponent } from './components/left-container/left-container.component';
import { InfiniteSlotContainerComponent } from './components/infinite-slot-container/infinite-slot-container.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockDraggableComponent,
    BlockInfiniteSlotComponent,
    LeftContainerComponent,
    InfiniteSlotContainerComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    DragDropModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
