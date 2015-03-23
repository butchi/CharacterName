(function (win, doc, $) {
  var partsLi = [
    'outline',
    'eyes',
    'hair',
    'mouse',
    'accessory'
  ];

  var elmLi = {};

  function hideAll() {
    // display to none
    partsLi.forEach(function(part) {
      elmLi[part].forEach(function(elm) {
        $(elm).hide();
      });
    });
  }

  function init() {
    $('#nameInput').on('keyup', function() {
      update();
    });

    partsLi.forEach(function(part) {
      elmLi[part] = [];
      $('#' + part + ' > g').each(function(i, elm) {
        elmLi[part].push(elm);
      });
    });

    hideAll();
    $('.character').show();
  }

  function update() {
    var str = $('#nameInput').text();
    str = str.replace(/\s/g, '');

    hideAll();

    var i;
    for(i = 0; i < 5; i++) {
      var charCode = (str[i] || '' ).charCodeAt();
      var partArr = elmLi[partsLi[i]];
      var len = partArr.length;
      var idx = charCode % len;

      $(partArr[idx]).show();
    }
  }

  $(init);
}(window, document, jQuery));
