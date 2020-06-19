import { hbs } from 'ember-cli-htmlbars'
import { action } from '@storybook/addon-actions';

export default {
  title: 'Input'
}

export const Default = () => ({
  template: hbs`
    <XInput
      placeholder="name@mail.com"
      @value={{this.email}}
      @label="Email"
      @type="email"
      @enterPressed={{action this.handleEnterPress}}
      @onChange={{action this.handleInput}}
    />
  `,
  context: {
    email: '',
    handleEnterPress: action('enterPressed'),
    handleInput(value) {
      this.set('email', value);
      action('onChange')(...arguments);
    }
  }
})
