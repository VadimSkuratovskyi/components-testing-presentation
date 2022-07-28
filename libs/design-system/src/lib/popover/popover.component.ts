import { Component } from '@angular/core';

@Component({
  selector: 'presentation-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css'],
})
export class PopoverComponent {
  isActive = false;

  toggle() {
    this.isActive = !this.isActive;
  }
}
