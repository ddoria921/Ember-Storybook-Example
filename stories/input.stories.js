import { hbs } from 'ember-cli-htmlbars'
import { set } from '@ember/object'

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
      @onChange={{action this.onChange}}
    />
  `,
  context: {
    email: '',
    onChange(value) {
      set(this, 'email', value);
    }
  }
});

export const errorState = () => ({
  template: hbs`
    <XInput
      placeholder="username"
      @value={{this.email}}
      @label="Username (8 character max)"
      @isError={{this.isError}}
      @errorMessage="Username can't be longer than 8 characters"
      @onChange={{action this.onChange}}
    />
  `,
  context: {
    email: '',
    onChange(value) {
      set(this, 'isError', value.length > 8);
      this.set('email', value);
    }
  }
})
