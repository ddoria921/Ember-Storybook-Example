'use strict';

define("ember-storybook-20200501/tests/integration/components/alert-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | alert', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Alert />
      */
      {
        id: "tbtYaZnX",
        block: "{\"symbols\":[],\"statements\":[[7,\"alert\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Alert>
              template block text
            </Alert>
          
      */
      {
        id: "L/8h3fMs",
        block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n      \"],[7,\"alert\",[],[[],[]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-storybook-20200501/tests/integration/components/button-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Button />
      */
      {
        id: "Iov/84NP",
        block: "{\"symbols\":[],\"statements\":[[7,\"button\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Button>
              template block text
            </Button>
          
      */
      {
        id: "o8D3pjzM",
        block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n      \"],[7,\"button\",[],[[],[]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-storybook-20200501/tests/integration/components/card-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Card />
      */
      {
        id: "29o4xm1t",
        block: "{\"symbols\":[],\"statements\":[[7,\"card\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Card>
              template block text
            </Card>
          
      */
      {
        id: "9FApPbBS",
        block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n      \"],[7,\"card\",[],[[],[]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-storybook-20200501/tests/integration/components/link-button-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | link-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <LinkButton />
      */
      {
        id: "JHVUwMbe",
        block: "{\"symbols\":[],\"statements\":[[7,\"link-button\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <LinkButton>
              template block text
            </LinkButton>
          
      */
      {
        id: "EK3EMH5k",
        block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n      \"],[7,\"link-button\",[],[[],[]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-storybook-20200501/tests/integration/components/login-form-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | login-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <LoginForm />
      */
      {
        id: "MA0c+LlP",
        block: "{\"symbols\":[],\"statements\":[[7,\"login-form\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <LoginForm>
              template block text
            </LoginForm>
          
      */
      {
        id: "H2VsNgwL",
        block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n      \"],[7,\"login-form\",[],[[],[]],[[\"default\"],[{\"statements\":[[1,1,0,0,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[1,1,0,0,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-storybook-20200501/tests/test-helper", ["ember-storybook-20200501/app", "ember-storybook-20200501/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('ember-storybook-20200501/config/environment', [], function() {
  var prefix = 'ember-storybook-20200501';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-storybook-20200501/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
