import { hbs } from 'ember-cli-htmlbars';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [withKnobs]
};

export const Default = () => ({
  template: hbs`
    <Button @disabled={{this.isDisabled}} @theme={{this.theme}}>
      {{this.buttonText}}
    </Button>
  `,
  context: {
    buttonText: text('Button Text', 'Click me!'),
    isDisabled: boolean('Disabled', false),
    theme: select('Theme', ['info', 'danger', 'success'], 'info')
  }
});

export const Disabled = () => ({
  template: hbs`
    <Button @disabled={{true}}>
      Hello world, Click me!
    </Button>
  `,
  context: {}
});

export const Themes = () => ({
  template: hbs`
    <Button @theme="danger">
      Danger
    </Button>
    <Button @theme="success">
      Success
    </Button>
  `,
  context: {}
});
