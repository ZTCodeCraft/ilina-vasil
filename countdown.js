// Target: 12 September 2026 at 17:00 Bulgaria time (EEST = UTC+3)
const TARGET = new Date('2026-09-12T17:00:00+03:00');

function pad(n) {
  return String(n).padStart(2, '0');
}

function update() {
  const now  = new Date();
  const diff = TARGET - now;

  if (diff <= 0) {
    document.getElementById('days').textContent    = '0';
    document.getElementById('hours').textContent   = '00';
    document.getElementById('minutes').textContent = '00';
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById('days').textContent    = days;
  document.getElementById('hours').textContent   = pad(hours);
  document.getElementById('minutes').textContent = pad(minutes);
}

update();
setInterval(update, 10000); // refresh every 10 s
