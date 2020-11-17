import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DraggableDropzoneComponent extends Component {
  @tracked isDraggedOver = false;

  @action
  dragEnter(event) {
    event.stopPropagation();
    event.preventDefault();

    this.isDraggedOver = true;

    if (this.args.onDragEnter) {
      this.args.onDragEnter(event);
    }
  }

  @action
  dragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    if (this.args.onDragOver) {
      this.args.onDragOver(event);
    }
  }

  @action
  drop(event) {
    event.stopPropagation();
    event.preventDefault();

    this.isDraggedOver = false;

    let data = event.dataTransfer.getData('text/data');

    if (event.dataTransfer.items[0].kind === 'file') {
      data = event.dataTransfer.items[0].getAsFile();
    }

    if (this.args.onDrop) {
      this.args.onDrop(data);
    }
  }

  @action
  dragLeave(event) {
    event.stopPropagation();
    event.preventDefault();

    this.isDraggedOver = false;

    if (this.args.onDragLeave) {
      this.args.onDragLeave(event);
    }
  }
}
