import { hbs } from 'ember-cli-htmlbars';
import { action } from '@ember/object';
import { action as sbAction } from '@storybook/addon-actions';

export default {
  title: 'Draggable'
};

export const Default = () => ({
  template: hbs`
    <DraggableDropzone
      @onDragEnter={{this.handleDragEnter}}
      @onDragLeave={{this.handleDragLeave}}
      @onDrop={{this.handleDrop}}
      @onDragOver={{this.handleDragOver}}
      as |active|
    >
      <div class="h-20 mb-12 border-2 border-dashed border-gray-600 rounded-md {{if active "border-blue-600 bg-blue-200"}}">
        <p class="text-center text-sm text-gray-700 font-bold uppercase tracking-widest leading-9">
          Drop Zone
        </p>
      </div>
    </DraggableDropzone>

    <DraggableItem @data="hello world" @onDragStart={{this.handleDragStart}}>
      <div class="w-12 h-12 bg-gray-700 rounded-md"></div>
    </DraggableItem>
  `,
  context: {
    handleDragStart: action(sbAction('onDragStart')),

    handleDragEnter: action(sbAction('onDragEnter')),
    handleDragLeave: action(sbAction('onDragLeave')),
    handleDragOver: action(sbAction('onDragOver')),
    handleDrop: action(sbAction('onDrop'))
  }
});
