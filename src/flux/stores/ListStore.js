var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {
  items: [],

  getAll: function () {
    return this.items;
  },

  addNewItemHandler: function (text) {
    console.log('addNewItemHandler');
    this.items.push(text);
  },

  emitChange: function () {
    console.log('emitChange');
    this.emit('change');
  },

  addChangeListener: function(callback) {
    console.log('addChangeListener');
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    console.log('removeChangeListener');
    this.removeListener('change', callback);
  }
});

module.exports = ListStore;
