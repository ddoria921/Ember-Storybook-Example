import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class InputComponent extends Component {
  @action
  handleInput(event) {
    if (this.args.onChange) {
      this.args.onChange(event.target.value);
    }
  }
}
