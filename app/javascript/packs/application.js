// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require materialize-sprockets
//= require jquery3
//= require jquery_ujs

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "trix"
import "@rails/actiontext"


Rails.start()
Turbolinks.start()
ActiveStorage.start()

/* CUSTOM SCROLL BAR */
$(window).scroll(function() {
  var scroll  = $(window).scrollTop(),
  dh = $(document).height(),
  wh = $(window).height();
  var scrollPercent = (scroll / (dh-wh)) * 100;
  $('#progressBar').css('height', scrollPercent + '%');
})
/* CUSTOM SCROLL BAR */

require("trix")
require("@rails/actiontext")
