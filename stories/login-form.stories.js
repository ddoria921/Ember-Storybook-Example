import { hbs } from 'ember-cli-htmlbars';
import { action } from '@ember/object';
import { action as sbAction } from '@storybook/addon-actions';

export default {
  title: 'LoginForm'
};

export const Default = () => ({
  template: hbs`
    <div class="max-w-md mx-auto mt-8">
      <LoginForm
        @onSuccess={{this.handleSuccess}}
        @onError={{this.handleError}}
      />
    </div>
  `,
  context: {
    handleSuccess: action(sbAction('onSuccess')),
    handleError: action(sbAction('onError'))
  }
});
