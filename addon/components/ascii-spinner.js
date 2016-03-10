import Ember from 'ember';
import layout from '../templates/components/ascii-spinner';
import spinners from '../spinners';


const {on, run, get, set} = Ember;

export default Ember.Component.extend({
  layout,
  tagName: 'span',
  classNames: ['ascii-spinner'],

  // Options
  timer: null,
  counter: 0,
  spinner: 'dots',
  interval: 150,
  custom: null,

  initializeSpinner: on('didInsertElement', function() {
    // Initialize spinner
    run.later(this, this.startSpinner);
  }),

  destroySpinner: on('willDestroyElement', function() {
    // Cleanup timer once unmounted
    clearInterval(get(this, 'timer'));
  }),

  /*
   * Start spinning
   */
  startSpinner() {
    let spinner = this.getSpinner();
    let interval = get(this, 'interval');

    if (!interval) {
      interval = spinner['interval']
    }

    let timer = setInterval(() => {
      this.updateSpinner.apply(this, [spinner['frames']]);
    }, interval);

    set(this, 'timer', timer);
  },

  /*
   * Update screen and increment counter
   */
  updateSpinner(spinner) {
    let counter = get(this, 'counter');

    if (counter > spinner.length - 1) {
      set(this, 'counter', 0);
    }

    if (spinner[counter - 1]) {
      this.$().html(spinner[counter - 1].trim());
    }

    this.incrementProperty('counter');
  },

  /*
   * Returns spinner sequence if custom
   * spinner specified custom spinner returned
   */
  getSpinner() {
    let custom = get(this, 'custom');
    let spinner = spinners[get(this, 'spinner')];

    set(this, 'interval', spinner['interval']);

    if (custom) {
      return {
        interval: get(this, 'interval'),
        frames: custom.split(' ')
      };
    }

    return spinner;
  }
});
