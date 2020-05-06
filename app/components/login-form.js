import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {
  username = ''
  password = ''

  @action
  handleSubmit(event) {
    event.preventDefault();

    // stub out success & error scenario
    if (this.username === 'john@mail.com' && typeof this.args.onSuccess === 'function') {
      this.args.onSuccess();
    } else if (typeof this.args.onError === 'function') {
      this.args.onError();
    }
  }

  @action
  updateProperty(prop, event) {
    this[prop] = event.target.value;
  }
}
