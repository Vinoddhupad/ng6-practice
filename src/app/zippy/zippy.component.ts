import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  visible = true;
  @Output() open = new EventEmitter<any>(true);
  @Output() close = new EventEmitter<any>(true);

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit('Visible');
    } else {
      this.close.emit('NotVisible');
    }

    this.open.subscribe(val => console.log(`Value emmitted : ${val}`));
  }


}
