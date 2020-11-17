import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class DraggableItemComponent extends Component {
  @action
  dragStart(event) {
    event.stopPropagation();

    event.dataTransfer.setData('text/data', this.args.data || '');

    if (this.args.onDragStart) {
      this.args.onDragStart(this.args.data, event);
    }
  }
}
