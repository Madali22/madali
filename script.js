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
