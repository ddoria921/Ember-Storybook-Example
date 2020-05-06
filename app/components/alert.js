import Component from '@glimmer/component';

export default class AlertComponent extends Component {
  get type() {
    return this.args.type || 'info';
  }

  get themeColor() {
    switch(this.type) {
      case 'success':
        return 'green';
      case 'danger':
        return 'red';
      case 'warning':
        return 'yellow';
      case 'info':
        return 'blue';
      default:
        return 'blue';
    }
  }
}
