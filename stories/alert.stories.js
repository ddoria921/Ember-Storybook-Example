import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Alert',
};

export const Default = () => (
  hbs`
    <Alert @heading="Hello World" @body="An example of what a default alert looks like."/>
  `
);

export const Themes = () => (
  hbs`
    <Alert @heading="Hello World" @body="An example of what an info alert looks like." @type="info"/>

    <div class="my-6"></div>

    <Alert @heading="Success!" @body="An example of what a success alert looks like." @type="success"/>

    <div class="my-6"></div>

    <Alert @heading="Warning" @body="An example of what a warning alert looks like." @type="warning"/>

    <div class="my-6"></div>

    <Alert @heading="Uh oh..." @body="An example of what an error alert looks like." @type="danger"/>
  `
);
