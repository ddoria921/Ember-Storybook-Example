import { hbs } from 'ember-cli-htmlbars';
import { action } from '@ember/object;';

export default {
  title: 'Input',
};

export const Default = () => ({
  template: hbs`
    <UI::Input
      placeholder="name@mail.com"
      @value={{this.email}}
      @label="Email"
      @type="email"
      @onChange={{this.onChange}}
    />
  `,
  context: {
    email: '',
    onChange: action(function (value) {
      this.set('email', value);
    }),
  },
});

export const errorState = () => ({
  template: hbs`
    <UI::Input
      placeholder="username"
      @value={{this.username}}
      @label="Username (8 character max)"
      @isError={{this.isError}}
      @errorMessage="Username can't be longer than 8 characters"
      @onChange={{this.onChange}}
    />
  `,
  context: {
    username: '',
    onChange: action(function (value) {
      this.set('isError', value.length > 8);
      this.set('username', value);
    }),
  },
});
