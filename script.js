const logs = [
  { name: 'Subway', price: '$5 – $15' },
  { name: 'AMC Theatres', price: '$5 – $15' },
  { name: 'Yelp', price: '$5 – $15' },
  { name: 'Ulta Beauty', price: '$5 – $15' }
];

const wrap = document.getElementById('tabsWrap');
const logName = document.getElementById('logName');
const logPrice = document.getElementById('logPrice');

let activeBtn = null;

logs.forEach((log, i) => {
  const btn = document.createElement('button');
  btn.className = 'tab-btn' + (i === 0 ? ' active' : '');
  btn.textContent = log.name;

  btn.onclick = () => {
    if (activeBtn) activeBtn.classList.remove('active');
    btn.classList.add('active');
    activeBtn = btn;

    logName.textContent = log.name;
    logPrice.textContent = log.price;
  };

  if (i === 0) activeBtn = btn;
  wrap.appendChild(btn);
});

function copyAddr(btn, addr) {
  navigator.clipboard.writeText(addr).then(() => {
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = 'Copy', 2000);
  });
}
