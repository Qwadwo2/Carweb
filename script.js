// ...existing code...
// ====== Manu Rentals Scripts ======
const cars = [
  {
    id: 'eco-01',
    name: 'Toyota Corolla 1.6L',
    class: 'economy',
    pricePerDay: 350, // GHS
    img: 'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1200&auto=format&fit=crop',
    specs: ['Auto', '5 seats', 'Aircon', 'Petrol']
  },
  {
    id: 'exec-01',
    name: 'Mercedes-Benz C300',
    class: 'executive',
    pricePerDay: 1200,
    img: 'https://images.unsplash.com/photo-1511914262565-6d3da6b56de9?q=80&w=1200&auto=format&fit=crop',
    specs: ['Auto', '5 seats', 'Leather', 'Wi‑Fi']
  },
  {
    id: 'suv-01',
    name: 'Toyota Fortuner 2.8D',
    class: 'suv',
    pricePerDay: 1000,
    img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop',
    specs: ['Auto', '7 seats', '4x4', 'Diesel']
  },
  {
    id: 'eco-02',
    name: 'Hyundai Accent 1.4L',
    class: 'economy',
    pricePerDay: 300,
    img: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1200&auto=format&fit=crop',
    specs: ['Manual', '5 seats', 'Aircon', 'Petrol']
  },
  {
    id: 'exec-02',
    name: 'BMW 5 Series',
    class: 'executive',
    pricePerDay: 1500,
    img: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1200&auto=format&fit=crop',
    specs: ['Auto', '5 seats', 'Leather', 'Premium Sound']
  },
  {
    id: 'suv-02',
    name: 'Nissan Patrol V8',
    class: 'suv',
    pricePerDay: 1300,
    img: 'https://images.unsplash.com/photo-1592198083874-8f1d3e09f3d9?q=80&w=1200&auto=format&fit=crop',
    specs: ['Auto', '7 seats', '4x4', 'Petrol']
  }
];

// Populate car cards and select options
const carGrid = document.getElementById('carGrid');
const carSelect = document.getElementById('carSelect');
const classFilter = document.getElementById('classFilter');

function renderCars(list) {
  carGrid.setAttribute('aria-busy', 'true');
  carGrid.innerHTML = '';
  list.forEach(car => {
    const card = document.createElement('article');
    card.className = 'card car-card';
    card.innerHTML = `
      <div class="car-media"><img src="${car.img}" alt="${car.name}"/></div>
      <div>
        <div class="car-title">
          <h3>${car.name}</h3>
          <span class="price">GHS ${car.pricePerDay}/day</span>
        </div>
        <div class="car-specs">${car.specs.map(s=>`<span>${s}</span>`).join('')}</div>
        <div class="car-actions">
          <button class="btn btn-ghost" data-id="${car.id}" data-action="details">Details</button>
          <button class="btn btn-primary" data-id="${car.id}" data-action="select">Select</button>
        </div>
      </div>
    `;
    carGrid.appendChild(card);
  });
  carGrid.setAttribute('aria-busy', 'false');
}

// delegated handler for car actions (select / details)
carGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;
  const id = btn.dataset.id;
  if (action === 'select') {
    quickSelect(id);
  } else if (action === 'details') {
    const car = cars.find(c => c.id === id);
    if (car) {
      // lightweight details view for demo
      alert(`${car.name}\n\nSpecs: ${car.specs.join(' • ')}\nPrice: GHS ${car.pricePerDay}/day`);
    }
  }
});

function populateSelect() {
  carSelect.innerHTML = '<option value="">Choose a car</option>' + cars.map(c=>`<option value="${c.id}">${c.name} — GHS ${c.pricePerDay}/day</option>`).join('');
}

function filterCars() {
  const v = classFilter.value;
  const list = v === 'all' ? cars : cars.filter(c => c.class === v);
  renderCars(list);
}

function quickSelect(id) {
  carSelect.value = id;
  carSelect.dispatchEvent(new Event('change', { bubbles: true }));
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

// Booking logic
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const priceSummary = document.getElementById('priceSummary');

function setMinDates() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth()+1).padStart(2,'0');
  const dd = String(today.getDate()).padStart(2,'0');
  const ymd = `${yyyy}-${mm}-${dd}`;
  startDate.min = ymd;
  endDate.min = ymd;
}

function calcDays() {
  if (!startDate.value || !endDate.value) return 0;
  const s = new Date(startDate.value);
  const e = new Date(endDate.value);
  // normalize to midnight to avoid timezone shifts
  s.setHours(0,0,0,0);
  e.setHours(0,0,0,0);
  if (e < s) return 0;
  const msPerDay = 1000 * 60 * 60 * 24;
  const diffDays = Math.round((e - s) / msPerDay) + 1; // inclusive days
  return diffDays;
}

function currentCar() {
  const id = carSelect.value;
  return cars.find(c => c.id === id);
}

function updatePrice() {
  const days = calcDays();
  const car = currentCar();
  let total = 0;
  if (days >= 1 && car) {
    total = days * car.pricePerDay;
  }
  priceSummary.textContent = `Total: GHS ${total}`;
  priceSummary.setAttribute('aria-live', 'polite');
}

// Form validation
const bookingForm = document.getElementById('bookingForm');
function validateField(el) {
  const container = el.closest('.form-row') || el.parentElement;
  const small = container ? container.querySelector('small.error') : null;
  if (!small) return true;
  if (typeof el.checkValidity !== 'function') { small.textContent = ''; return true; }
  if (el.checkValidity()) { small.textContent = ''; return true; }
  if (el.validity && el.validity.valueMissing) small.textContent = 'This field is required';
  else small.textContent = 'Invalid value';
  return false;
}

// attach validation + price updates for fields inside the booking form
[...bookingForm.querySelectorAll('input, select')].forEach(el => {
  el.addEventListener('change', () => { validateField(el); updatePrice(); });
  el.addEventListener('input', () => { validateField(el); updatePrice(); });
});

// ensure endDate.min follows startDate and never becomes earlier
startDate.addEventListener('change', () => {
  if (startDate.value) {
    endDate.min = startDate.value;
    // if end is earlier than start, set it to start
    if (endDate.value && new Date(endDate.value) < new Date(startDate.value)) {
      endDate.value = startDate.value;
    }
  }
  updatePrice();
});

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let ok = true;
  [...bookingForm.querySelectorAll('input, select')].forEach(el => { ok = validateField(el) && ok; });

  const days = calcDays();
  const car = currentCar();
  if (!days || days < 1) {
    ok = false;
    const small = bookingForm.querySelector('#endDate').closest('.form-row').querySelector('small.error');
    if (small) small.textContent = 'End date must be the same or after start date';
  }
  if (!car) {
    ok = false;
    const small = bookingForm.querySelector('#carSelect').closest('.form-row').querySelector('small.error');
    if (small) small.textContent = 'Please choose a vehicle';
  }

  if (!ok) return;

  const totalAmount = days * car.pricePerDay;

  const data = {
    pickLocation: document.getElementById('pickLocation').value,
    dropLocation: document.getElementById('dropLocation').value,
    startDate: startDate.value,
    endDate: endDate.value,
    carId: car.id,
    fullName: document.getElementById('fullName').value,
    phone: document.getElementById('phone').value,
    total: totalAmount
  };

  // In real use, send data to your backend. For static demo:
  alert(`Booking submitted!\n\n${JSON.stringify(data, null, 2)}`);
  bookingForm.reset();
  // restore endDate min to today after reset
  setMinDates();
  updatePrice();
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'light') root.classList.add('light'); else root.classList.remove('light');
  try { localStorage.setItem('theme', theme); } catch (e) { /* ignore */ }
  themeToggle.textContent = theme === 'light' ? '☀️' : '🌙';
}

const savedTheme = (() => { try { return localStorage.getItem('theme'); } catch(e){ return null; } })() || 'dark';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const now = document.documentElement.classList.contains('light') ? 'dark' : 'light';
  applyTheme(now);
});

// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

// wire filter control
if (classFilter) classFilter.addEventListener('change', filterCars);

// Init
setMinDates();
populateSelect();
renderCars(cars);
updatePrice();

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
// ...existing code...
