const logs = [
  { key: 'subway',        name: 'Subway',                       price: '$5 – $15' },
  { key: 'bathbody',      name: 'Bath & Body Works',            price: '$5 – $15' },
  { key: 'amc',           name: 'AMC Theatres',                 price: '$5 – $15' },
  { key: 'yelp',          name: 'Yelp',                         price: '$5 – $15' },
  { key: 'ulta',          name: 'Ulta Beauty',                  price: '$5 – $15' },
  { key: 'onlyfans',      name: 'OnlyFans',                     price: '$5 – $15' },
  { key: 'ihg',           name: 'IHG Hotels',                   price: '$5 – $15' },
  { key: 'discover',      name: 'Discover',                     price: '$5 – $15' },
  { key: 'cinemark',      name: 'Cinemark',                     price: '$5 – $15' },
  { key: 'marriott',      name: 'Marriott Bonvoy',              price: '$5 – $15' },
  { key: 'moes',          name: "Moe's Southwest Grill",        price: '$5 – $15' },
  { key: 'fandango',      name: 'Fandango',                     price: '$5 – $15' },
  { key: 'neimanmarcus',  name: 'Neiman Marcus',                price: '$5 – $15' },
  { key: 'macys',         name: "Macy's",                       price: '$5 – $15' },
  { key: 'smoothieking',  name: 'Smoothie King',                price: '$5 – $15' },
  { key: 'hilton',        name: 'Hilton Hotels & Resorts',      price: '$5 – $15' },
  { key: 'coffeebean',    name: 'Coffee Bean & Tea Leaf',       price: '$5 – $15' },
  { key: 'jcpenney',      name: 'JCPenney',                     price: '$5 – $15' },
  { key: 'texasroadhouse',name: 'Texas Roadhouse',              price: '$5 – $15' },
  { key: 'bloomingdales', name: "Bloomingdale's",               price: '$5 – $15' },
  { key: 'gap',           name: 'GAP',                          price: '$5 – $15' },
  { key: 'petsmart',      name: 'PetSmart',                     price: '$5 – $15' },
  { key: 'aeropostale',   name: 'Aeropostale',                  price: '$5 – $15' },
  { key: 'frontier',      name: 'Frontier Airlines',            price: '$5 – $15' },
  { key: 'roku',          name: 'Roku',                         price: '$5 – $15' },
  { key: 'chewy',         name: 'Chewy',                        price: '$5 – $15' },
  { key: 'alaska',        name: 'Alaska Airlines',              price: '$150 – $200' },
  { key: 'streaming',     name: 'Streaming (Netflix, HBO, UFC & more)', price: '$5 – $15' },
];

const wrap = document.getElementById('tabsWrap');
const logName = document.getElementById('logName');
const logSub = document.getElementById('logSub');
const logPrice = document.getElementById('logPrice');
let activeBtn = null;

logs.forEach((log, i) => {
  const btn = document.createElement('button');
  btn.className = 'tab-btn' + (i === 0 ? ' active' : '');
  btn.textContent = log.name;
  btn.addEventListener('click', () => {
    if (activeBtn) activeBtn.classList.remove('active');
    btn.classList.add('active');
    activeBtn = btn;
    logName.textContent = log.name;
    logSub.textContent = 'Various balances available';
    logPrice.textContent = log.price;
  });
  if (i === 0) activeBtn = btn;
  wrap.appendChild(btn);
});

function copyAddr(btn, addr) {
  navigator.clipboard.writeText(addr).then(() => {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 2000);
  });
}
