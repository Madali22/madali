document.getElementById('yr').textContent = new Date().getFullYear();
document.getElementById('send').addEventListener('click', function () {
  var v = function (id) { return document.getElementById(id).value.trim(); };
  var lines = ['Hi Madali Movers, I would like a quote.'];
  if (v('name')) lines.push('Name: ' + v('name'));
  if (v('from')) lines.push('Moving from: ' + v('from'));
  if (v('to')) lines.push('Moving to: ' + v('to'));
  if (v('items')) lines.push('Items: ' + v('items'));
  if (v('date')) lines.push('Preferred date: ' + v('date'));
  if (v('access')) lines.push('Access/handling: ' + v('access'));
  window.open('https://wa.me/27633549336?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
});

// Match the nav background to the logo's own background colour.
(function () {
  var src = document.querySelector('.logo img').src;
  var probe = new Image();
  probe.crossOrigin = 'anonymous';
  probe.onload = function () {
    try {
      var c = document.createElement('canvas');
      c.width = probe.naturalWidth; c.height = probe.naturalHeight;
      var x = c.getContext('2d');
      x.drawImage(probe, 0, 0);
      var p = x.getImageData(2, 2, 1, 1).data;
      if (p[3] < 200) return; // transparent corner: keep the default white
      var lum = (0.299 * p[0] + 0.587 * p[1] + 0.114 * p[2]) / 255;
      var root = document.documentElement.style;
      root.setProperty('--nav-bg', 'rgb(' + p[0] + ',' + p[1] + ',' + p[2] + ')');
      root.setProperty('--nav-ink', lum < 0.5 ? '#ffffff' : '#161b24');
    } catch (e) { /* image blocked from sampling: keep the default */ }
  };
  probe.src = src;
})();
