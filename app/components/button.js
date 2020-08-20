import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ButtonComponent extends Component {
  get theme() {
    return this.args.theme || 'info';
  }

  get themeColor() {
    switch (this.theme) {
      case 'success':
        return 'green';
      case 'danger':
        return 'red';
      case 'info':
        return 'blue';
      default:
        return 'blue';
    }
  }

  @action
  onClick() {
    if (this.args.onClick) {
      this.args.onClick();
    }
  }
}
