/* =====================================================================
 * longclick.js v0.0.1
 * https://github.com/djreimer/jquery-longclick
 * =====================================================================
 * Copyright (c) 2015 Derrick Reimer
 * ===================================================================== */

(function($) {

  // LONGCLICK CLASS DEFINITION
  // ==========================

  var Longclick = function(el, options) {
    var that = this;

    this.el = el;
    this.timer = null;
    this.held = false
    this.options = options;

    if (el.innerText) {
      this.originalText = el.innerText;
    } else {
      this.originalText = el.value;
    }

    $(el).on("mousedown", function() {
      var $this = $(this);
      that.reset(options.holdText);

      that.timer = window.setTimeout(function() {
        if (options.heldText) {
          that.reset(options.heldText);
        } else {
          that.reset();
        }

        that.held = true;
        $this.trigger("longclick");
      }, options.duration);

      return false;

    }).on("mouseup mouseleave", function() {
      if (!that.held || !options.sticky) that.reset();
      clearTimeout(that.timer);
      return false;
    });
  }

  Longclick.prototype = {
    constructor: Longclick

  , reset: function(value) {
      value = value || this.originalText;

      if (this.el.innerText) {
        this.el.innerText = value;
      } else {
        this.el.value = value;
      }
    }
  }

  Longclick.DEFAULTS = {
    duration: 1000,
    holdText: "Hold...",
    heldText: null,
    sticky: true
  }

  // LONGCLICK PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function() {
      var $this = $(this);
      var data  = $this.data('longclick');
      var options = $.extend({}, Longclick.DEFAULTS, typeof option == 'object' && option);

      if (!data) $this.data('longclick', (data = new Longclick(this, options)));
      if (typeof option == 'string') data[option].call(data);
    })
  }

  $.fn.longclick = Plugin;
})(jQuery);
