define(function(require, exports, module){
  'use strict';
  var Backbone = require('backbone');
  var PropertyView = require('./PropertyView');
  var InputColor = require('Abstract/ui/InputColor');

	module.exports = PropertyView.extend({

		renderTemplate: function(){},

		renderInput: function() {
			if (!this.input) {
				var inputColor = new InputColor({
					target: this.target,
					model: this.model,
					ppfx: this.ppfx
				});
				this.input = inputColor.render();
				this.$el.append(this.input.$el);
				this.$input = this.input.inputEl;
				this.$color = this.input.colorEl;
			}
			this.setValue(this.componentValue);
		},

		setValue: function(value){
			this.input.setValue(value, {silent: 1});
		},

	});
});