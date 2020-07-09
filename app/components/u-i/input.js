import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class InputComponent extends Component {
  get twInputClasses() {
    let classes = [];

    if (this.args.disabled) {
      classes.push('opacity-50 cursor-not-allowed');
    }

    if (this.args.isError) {
      classes.push('border-red-500 text-red-500');
    }

    return classes.join(' ');
  }

  @action
  handleInput(event) {
    if (this.args.onChange) {
      this.args.onChange(event.target.value);
    }
  }
}
