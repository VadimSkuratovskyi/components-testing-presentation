import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AlertComponent, PopoverComponent],
})
export class DesignSystemModule {}
