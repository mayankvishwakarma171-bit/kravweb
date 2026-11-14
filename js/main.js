/**
 * KRAVIONEX MACHINERY LLP - Official Interactive System
 * Engineering Precision. Delivering Performance.
 */

// Machine Portfolio Database
const KRAVIONEX_MACHINERY = [
  {
    id: 'circular-batch-fryer-he',
    title: 'Circular Batch Fryer with Pellet Heat Exchanger',
    category: 'batch',
    badge: 'High Thermal Efficiency',
    fuel: 'Pellet / Gas / Diesel / Wooden Boiler',
    pageUrl: 'circular-batch-fryer-he.html',
    image: 'assets/images/circular-batch-fryer-pellet-he.png',
    summary: 'Precision-engineered circular batch fryer integrated with an external pellet-fired heat exchanger, continuous circulation pump, and stainless steel oil holding vessel.',
    application: 'Potato Chips, Banana Chips, Namkeen, Cashews, Peanuts, Extruded Pellets',
    capacity: '40 - 150 kg/hr (Batch dependent)',
    specs: {
      'Material': 'Food-Grade Stainless Steel AISI 304 / 316',
      'Kettle Diameter': '36" – 48"',
      'Heating & Fuel Options': 'Pellet / Gas / Diesel / Wooden Boiler',
      'Oil Circulation': 'High-temperature centrifugal glandless pump',
      'Tilting Mechanism': 'Manual counter-balanced or motorized discharge chute',
      'Control System': 'Digital PID / PLC Touchscreen temperature regulator',
      'Thermal Efficiency': 'Up to 82% fuel utilization with automated combustion'
    }
  },
  {
    id: 'rectangular-batch-fryer',
    title: 'Rectangular Tilting Batch Fryer with Biomass Heat Exchanger',
    category: 'batch',
    badge: 'Tilting Basket System',
    fuel: 'Pellet / Gas / Diesel / Wooden Boiler',
    pageUrl: 'rectangular-batch-fryer.html',
    image: 'assets/images/rectangular-batch-fryer.png',
    summary: 'Heavy-duty rectangular frying kettle featuring motorized basket tilting, continuous oil filtration bucket, air-cooled pump, and automated pellet burner unit.',
    application: 'Potato Chips, Namkeen Batches, Fryums, Kurkure, Banana Slices',
    capacity: '50 - 200 kg/hr',
    specs: {
      'Material': 'AISI 304 food contact surfaces with insulated double jacket',
      'Basket Size': '4 ft x 2.5 ft / 5 ft x 3 ft',
      'Heating & Fuel Options': 'Pellet / Gas / Diesel / Wooden Boiler',
      'Discharge': 'Heavy-duty hydraulic / motorized tilting basket',
      'Filtration': 'Continuous bucket coarse particulate filter',
      'Pump': 'Air-cooled heavy duty thermal oil pump',
      'Oil Quality': 'Rapid oil turnover minimizes free fatty acid (FFA) buildup'
    }
  },
  {
    id: 'continuous-fryer-pellet',
    title: 'Continuous Namkeen & Pellet Fryer with Pellet Heat Exchanger',
    category: 'continuous',
    badge: 'Continuous High-Volume Line',
    fuel: 'Pellet / Gas / Diesel / Wooden Boiler',
    pageUrl: 'continuous-fryer-pellet.html',
    image: 'assets/images/continuous-fryer-pellet-he.png',
    summary: 'Industrial continuous frying system with multi-layer flight conveyor, sediment removal, external high-efficiency pellet heat exchanger, and centralized touchscreen PLC.',
    application: 'Nylon Sev, Ratlami Sev, Boondi, 2D/3D Pellets, Kurkure, Bhujia',
    capacity: '150 - 600 kg/hr continuous output',
    specs: {
      'Conveyor Belt': 'Stainless steel balanced weave with hold-down submersing belt',
      'Pan Construction': 'Low-volume SS-304 pan designed for fast oil turnover',
      'Heating & Fuel Options': 'Pellet / Gas / Diesel / Wooden Boiler',
      'Exhaust Hood': 'Motorized hood lifting arrangement for effortless CIP cleaning',
      'Heat Exchanger': 'High-capacity vertical heat exchanger system',
      'Filtration': 'Continuous continuous mesh filter for fine debris removal',
      'Automation': 'PLC with recipes, variable speed drives (VFD) for dwell time control'
    }
  },
  {
    id: 'continuous-fryer-boiler',
    title: 'Multi Product Continuous Frying System',
    category: 'continuous',
    badge: 'Turnkey Industrial Scale',
    fuel: 'Pellet / Gas / Diesel / Wooden Boiler',
    pageUrl: 'multi-product-continuous-frying-system.html',
    image: 'assets/images/continuous-fryer-boiler.png',
    summary: 'High-throughput continuous multi-product frying system equipped with external vertical thermal oil heater, continuous fine filter, jacketed cooling tank, and multi-sensor PLC cabinet.',
    application: 'Industrial Potato Chips, Multi-grain Snacks, Boondi, Sev, Chana Dal, Pellets',
    capacity: '300 - 1,200 kg/hr',
    specs: {
      'Heating & Fuel Options': 'Pellet / Gas / Diesel / Wooden Boiler',
      'Oil Cooling': 'Rapid drain oil storage tank with integrated cooling system',
      'Filter Unit': 'Dual continuous rotary/wedge wire debris separator',
      'Dwell Time': '30 seconds to 6 minutes adjustable via VFD',
      'Safety Compliance': 'Emergency dump valve, stack temperature monitoring',
      'Control Cabinet': 'Floor-mounted industrial PLC touchscreen control desk'
    }
  },
  {
    id: 'automatic-sev-boondi-line',
    title: 'Fully Automatic Boondi & Nylon Sev Production Line',
    category: 'turnkey',
    badge: 'Turnkey End-to-End Plant',
    fuel: 'Pellet / Gas / Diesel / Wooden Boiler',
    pageUrl: 'automatic-sev-boondi-line.html',
    image: 'assets/images/automatic-sev-boondi-line.png',
    summary: 'Complete automated continuous processing arrangement from slurry preparation, bundi/sev dropping attachment, continuous fryer, continuous hydro de-oiler, cooling conveyor to zig-zag flavouring drum.',
    application: 'Nylon Sev, Bikaneri Bhujia, Sweet & Salted Boondi, Papdi',
    capacity: '200 - 800 kg/hr integrated line',
    specs: {
      'Line Components': 'Slurry Tank -> Dropper Head -> Continuous Fryer -> Hydro De-oiler -> Cooling Conveyor -> Zig-Zag Flavour Drum',
      'Heating & Fuel Options': 'Pellet / Gas / Diesel / Wooden Boiler',
      'De-Oiler': 'Continuous centrifugal hydro system reducing surface oil content',
      'Cooling Section': 'Sanitary mesh conveyor with food-grade cooling blowers',
      'Seasoning System': 'Precision powder dispenser with continuous rotating drum',
      'Material Finish': 'All contact surfaces electro-polished AISI 304'
    }
  },
  {
    id: 'semi-automatic-chips-line',
    title: 'Semi-Automatic Potato Chips Line (50 & 100 kg/hr)',
    category: 'turnkey',
    badge: 'Commercial Enterprise Solution',
    fuel: 'Pellet / Gas / Diesel / Wooden Boiler',
    pageUrl: 'semi-automatic-chips-line.html',
    image: 'assets/images/semi-automatic-chips-line.png',
    summary: 'Modular, high-return processing line featuring peeler, high-speed slicer, rectangular fryer with tilting system, vibro shaker with oil collection, inspection conveyor, and continuous flavour applicator.',
    application: 'Potato Chips (Plain, Ridged, Kettle Style), Plantain/Banana Chips',
    capacity: '50 kg/hr & 100 kg/hr finished product output',
    specs: {
      'Output Rated': '50 kg/hr & 100 kg/hr finished potato chips',
      'Heating & Fuel Options': 'Pellet / Gas / Diesel / Wooden Boiler',
      'Slicing Unit': 'Adjustable thickness circular rotary slicer with wash flume',
      'Oil Collection': 'Vibratory de-watering & oil separation tray',
      'Flavouring': 'Continuous stainless steel seasoning applicator and tumbler',
      'Footprint': 'Compact linear layout suitable for commercial sheds'
    }
  },
  {
    id: 'shell-tube-circular-fryer',
    title: 'Circular Batch Fryer with Shell & Tube External Heat Exchanger',
    category: 'batch',
    badge: 'Sanitary Shell & Tube',
    fuel: 'Pellet / Gas / Diesel / Wooden Boiler',
    pageUrl: 'shell-tube-circular-fryer.html',
    image: 'assets/images/shell-tube-circular-fryer.png',
    summary: 'Advanced circular batch fryer linked with a horizontal shell-and-tube heat exchanger, circulation booster pump, fine bucket filter, and remote electrical control desk.',
    application: 'Premium Potato Chips, Banana Wafers, Nuts, Sweets Frying',
    capacity: '60 - 180 kg/hr',
    specs: {
      'Exchanger Type': 'Multi-pass SS 316L shell and tube thermal exchanger',
      'Heating & Fuel Options': 'Pellet / Gas / Diesel / Wooden Boiler',
      'Oil Velocity': 'Calculated high-velocity flow preventing oil hot-spots',
      'Temperature Precision': '±1.5°C dynamic thermal regulation',
      'Filter': 'Quick-release stainless steel filter basket with safety bypass',
      'Tilting': 'Pneumatic or counterweight ergonomic tilting basket'
    }
  },
  {
    id: 'namkeen-extruder-machine',
    title: 'Heavy-Duty Namkeen & Sev Extruder Machine',
    category: 'extrusion',
    badge: 'Multi-Die Extrusion',
    fuel: 'Electric (415V, 3-Phase) / Line-Integrated',
    pageUrl: 'namkeen-extruder-machine.html',
    image: 'assets/images/namkeen-extruder-machine.png',
    summary: 'Precision overhead namkeen extruder with pivoting counter-balanced arm, quick-change brass and stainless steel dies, adjustable pressing speed, and mobile castor base.',
    application: 'Sev, Gathiya, Papdi, Bhujia, Chakli, Murukku',
    capacity: '80 - 300 kg/hr dough extrusion',
    specs: {
      'Construction': 'Food contact SS-304 cylinder and piston assembly',
      'Power / Drive': 'Electric 415V 3-Phase with Variable Frequency Drive (VFD)',
      'Mounting': 'Rigid swivel arm directly mountable over circular or rectangular fryers',
      'Dies Included': 'Interchangeable dies for Fine Sev, Medium Sev, Thick Gathiya, Papdi',
      'Mobility': 'Heavy-duty lockable castor wheels for multi-pan servicing'
    }
  },
  {
    id: 'potato-slicer-machine',
    title: 'High-Speed Commercial Potato & Plantain Slicer',
    category: 'prep',
    badge: 'Digital Touch Controller',
    fuel: 'Electric (415V, 3-Phase) / Line-Integrated',
    pageUrl: 'potato-slicer-machine.html',
    image: 'assets/images/potato-slicer-machine.png',
    summary: 'High-speed vegetable slicing system featuring water injection feed, digital touchscreen interface, rotary cutting rotor with hardened stainless steel blades, and mobile base.',
    application: 'Potatoes, Sweet Potatoes, Raw Bananas / Plantains, Cassava / Tapioca',
    capacity: '300 - 800 kg/hr raw input',
    specs: {
      'Blade Options': 'Flat plain slices, crinkle/wave cuts, shredding/straw cuts',
      'Thickness Adjustment': '0.8 mm to 3.5 mm micrometer precision gauge',
      'Power Drive': 'Electric 415V 3-Phase with safety proximity interlocking',
      'Water Lubrication': 'Integrated water spray manifold for starch rinsing'
    }
  },
  {
    id: 'potato-peeler-machine',
    title: 'Industrial Abrasive Potato & Root Vegetable Peeler',
    category: 'prep',
    badge: 'Carborundum Abrasive',
    fuel: 'Electric (415V, 3-Phase) / Line-Integrated',
    pageUrl: 'potato-peeler-machine.html',
    image: 'assets/images/potato-peeler-machine.png',
    summary: 'Food-grade vertical abrasive peeler with carborundum lined chamber, continuous water flushing spray, quick discharge door, and stainless steel structural enclosure.',
    application: 'Potatoes, Ginger, Carrots, Taro, Beetroot',
    capacity: '150 - 400 kg/hr (15 - 30 kg per batch cycle)',
    specs: {
      'Cycle Time': '90 to 180 seconds per batch cycle',
      'Lining': 'Long-lasting silicon carbide carborundum bonded disk and walls',
      'Waste Separation': 'Bottom drain with starch and peel collection filter screen',
      'Body': 'Heavy-gauge AISI 304 with vibration damping feet'
    }
  },
  {
    id: 'flavouring-drum-machine',
    title: 'Industrial Octagonal Seasoning & Flavouring Drum',
    category: 'prep',
    badge: 'Gentle Tumble Coating',
    fuel: 'Electric (415V, 3-Phase) / Line-Integrated',
    pageUrl: 'flavouring-drum-machine.html',
    image: 'assets/images/flavouring-drum-machine.png',
    summary: 'Stainless steel octagonal tumbling drum designed for uniform powder adhesion without product breakage, featuring adjustable tilt angle and castor wheels.',
    application: 'Potato Chips, Namkeen, Fried Peanuts, Extruded Pellets, Makhana',
    capacity: '50 - 250 kg/hr batch or continuous mode',
    specs: {
      'Drum Geometry': 'Octagonal facet design engineered for gentle product turnover',
      'Material': 'Mirror-finished AISI 304 food-grade stainless steel',
      'Power / Drive': 'Electric 415V with VFD adjustable rotation speed',
      'Tilt Adjustment': 'Manual screw or motorized tilt angle adjustment'
    }
  },
  {
    id: 'circular-batch-fryer-furnace',
    title: 'Direct-Fired Circular Batch Fryer with Biomass Pellet Furnace',
    category: 'batch',
    badge: 'Economical Biomass Fired',
    fuel: 'Pellet / Gas / Diesel / Wooden Boiler',
    pageUrl: 'circular-batch-fryer-furnace.html',
    image: 'assets/images/circular-batch-fryer-furnace.png',
    summary: 'Rugged circular batch fryer with direct-coupled automated pellet furnace, thermal insulation jacket, analog temperature monitoring, and high-lip discharge chute.',
    application: 'Local & Regional Namkeen, Banana Wafers, Sev, Fafda, Samosa Frying',
    capacity: '30 - 100 kg/hr',
    specs: {
      'Pan Diameter': '36" / 42" / 48" deep-drawn stainless steel pan',
      'Heating & Fuel Options': 'Pellet / Gas / Diesel / Wooden Boiler',
      'Fuel Efficiency': 'Up to 60% fuel cost savings compared to commercial LPG',
      'Discharge': 'Ergonomic wide pour chute with oil strainer'
    }
  }
];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initMegaMenu();
  initMobileDropdowns();
  initCategoryFilters();
  initMachineryCards();
  initModalSystem();
  initRfqForm();
});

// 1. Sticky Header & Scroll Effects
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Global Mobile Navigation Functions (Guaranteed access from inline onclick & touch events)
window.openMobileNav = function() {
  const drawer = document.getElementById('mobile-drawer') || document.querySelector('.mobile-drawer');
  const overlay = document.getElementById('drawer-overlay') || document.querySelector('.drawer-overlay');
  if (drawer) {
    drawer.classList.add('open');
    drawer.style.setProperty('right', '0', 'important');
    drawer.style.setProperty('visibility', 'visible', 'important');
    drawer.style.setProperty('display', 'flex', 'important');
  }
  if (overlay) {
    overlay.classList.add('active');
    overlay.style.setProperty('display', 'block', 'important');
    overlay.style.setProperty('opacity', '1', 'important');
    overlay.style.setProperty('visibility', 'visible', 'important');
    overlay.style.setProperty('pointer-events', 'auto', 'important');
  }
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
};

window.closeMobileNav = function() {
  const drawer = document.getElementById('mobile-drawer') || document.querySelector('.mobile-drawer');
  const overlay = document.getElementById('drawer-overlay') || document.querySelector('.drawer-overlay');
  if (drawer) {
    drawer.classList.remove('open');
    drawer.style.setProperty('right', '-110%', 'important');
  }
  if (overlay) {
    overlay.classList.remove('active');
    overlay.style.setProperty('opacity', '0', 'important');
    overlay.style.setProperty('visibility', 'hidden', 'important');
    overlay.style.setProperty('pointer-events', 'none', 'important');
    setTimeout(() => {
      if (overlay && (!drawer || !drawer.classList.contains('open'))) {
        overlay.style.setProperty('display', 'none', 'important');
      }
    }, 250);
  }
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
};

window.toggleMobileDropdown = function(btn) {
  const item = btn ? btn.closest('.mobile-has-dropdown') : document.querySelector('.mobile-has-dropdown');
  if (item) {
    item.classList.toggle('open');
  }
};

// 2. Mobile Menu Navigation Initializer
function initMobileMenu() {
  const toggleBtns = document.querySelectorAll('.mobile-nav-toggle, #nav-toggle-btn');
  const closeBtns = document.querySelectorAll('.mobile-drawer-close');
  const overlay = document.getElementById('drawer-overlay') || document.querySelector('.drawer-overlay');

  const openHandler = function(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();
    window.openMobileNav();
  };

  const closeHandler = function(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();
    window.closeMobileNav();
  };

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', openHandler);
    btn.addEventListener('touchstart', openHandler, { passive: false });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', closeHandler);
    btn.addEventListener('touchstart', closeHandler, { passive: false });
  });

  if (overlay) {
    overlay.addEventListener('click', closeHandler);
    overlay.addEventListener('touchstart', closeHandler, { passive: false });
  }

  // Close when clicking links inside drawer (excluding dropdown triggers)
  document.querySelectorAll('.mobile-nav-links a:not(.mobile-dropdown-toggle)').forEach(link => {
    link.addEventListener('click', () => {
      window.closeMobileNav();
    });
  });
}

// 3. Desktop Products Mega-Menu
function initMegaMenu() {
  const dropdownItems = document.querySelectorAll('.nav-has-dropdown');
  if (!dropdownItems.length) return;

  dropdownItems.forEach(item => {
    let closeTimer = null;

    item.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      item.classList.add('open');
    });

    item.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => {
        item.classList.remove('open');
      }, 120);
    });

    const trigger = item.querySelector('.nav-link-dropdown');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        const isCaret = e.target.closest('.caret');
        if (isCaret) {
          e.preventDefault();
          e.stopPropagation();
          item.classList.toggle('open');
        }
      });
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-has-dropdown')) {
      dropdownItems.forEach(item => item.classList.remove('open'));
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdownItems.forEach(item => item.classList.remove('open'));
    }
  });
}

// 4. Mobile Menu Dropdown Accordion
function initMobileDropdowns() {
  document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parent = toggle.closest('.mobile-has-dropdown');
      if (parent) {
        parent.classList.toggle('open');
      }
    });
  });
}
// Category Label Helper
function getCategoryLabel(cat) {
  const map = {
    'batch': 'Batch Frying System',
    'continuous': 'Continuous Frying Line',
    'turnkey': 'Turnkey Production Line',
    'extrusion': 'Namkeen & Extrusion',
    'prep': 'Preparation & Seasoning'
  };
  return map[cat] || 'Industrial Machinery';
}

// 5. Render Machinery Cards & Interactive Range Slider
function initMachineryCards() {
  // A. Render Home Page Showcase Slider
  const sliderTrack = document.getElementById('machinery-slider-track');
  if (sliderTrack) {
    sliderTrack.innerHTML = '';
    KRAVIONEX_MACHINERY.forEach(m => {
      const card = document.createElement('div');
      card.className = 'slider-machine-card';
      card.setAttribute('data-category', m.category);
      card.innerHTML = `
        <div class="slider-machine-image">
          <span class="slider-machine-badge">${m.badge || 'Industrial Precision'}</span>
          <img src="${m.image}" alt="${m.title}" loading="lazy">
        </div>
        <div class="slider-machine-body">
          <div class="slider-machine-category">${getCategoryLabel(m.category)}</div>
          <h3 class="slider-machine-title">${m.title}</h3>
          
          <div class="slider-specs-box">
            <div class="slider-specs-row">
              <span class="label">Capacity</span>
              <span class="val">${m.capacity}</span>
            </div>
            <div class="slider-specs-row">
              <span class="label">Heating / Fuel</span>
              <span class="val" style="color: var(--accent-gold-dark);">${m.fuel}</span>
            </div>
          </div>

          <p class="slider-machine-desc">${m.summary}</p>

          <div class="slider-machine-actions">
            <a href="${m.pageUrl}" class="btn btn-primary" style="width: 100%; justify-content: center; font-size: 0.88rem; padding: 0.65rem 1rem;">
              Explore Full Specifications &rarr;
            </a>
            <a href="https://api.whatsapp.com/send?phone=919930985514&text=Hello%20Kravionex%2C%20I%20would%20like%20to%20request%20a%20quotation%20for%20the%20${encodeURIComponent(m.title)}." target="_blank" class="btn btn-outline-dark" style="width: 100%; justify-content: center; font-size: 0.85rem; padding: 0.55rem 1rem; border-color: #25D366; color: #25D366; font-weight: 700;">
              <svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:currentColor;margin-right:6px;"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.076-2.023-.474-1.616-.669-2.656-2.316-2.736-2.423-.079-.107-.648-.863-.648-1.646 0-.783.407-1.168.552-1.328.144-.16.315-.2.42-.2.106 0 .212.001.304.006.098.005.228-.037.357.273.131.312.447 1.092.486 1.172.04.08.066.174.013.28-.053.107-.079.174-.158.267-.08.093-.168.207-.24.278-.08.08-.163.167-.07.327.093.16.413.682.886 1.103.61.543 1.123.711 1.283.791.16.08.253.067.346-.04.094-.107.4-.467.507-.627.106-.16.213-.133.359-.08.147.053.931.44 1.091.52.16.08.267.12.306.187.04.066.04.386-.104.791zM12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.662 1.441 5.176L2 22l4.981-1.397C8.423 21.493 10.154 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
              Quick WhatsApp RFQ
            </a>
          </div>
        </div>
      `;
      sliderTrack.appendChild(card);
    });

    setupMachinerySliderEvents(sliderTrack);
  }

  // B. Render Products.html Catalog Grid
  const productsGrid = document.querySelector('section .machinery-grid');
  if (productsGrid && productsGrid.children.length === 0) {
    productsGrid.innerHTML = '';
    KRAVIONEX_MACHINERY.forEach(m => {
      const card = document.createElement('div');
      card.className = 'machine-card';
      card.setAttribute('data-category', m.category);
      card.innerHTML = `
        <div class="machine-card-image">
          <span class="machine-badge">${m.badge || 'Engineered in Maharashtra'}</span>
          <img src="${m.image}" alt="${m.title}" loading="lazy">
        </div>
        <div class="machine-card-body">
          <div class="machine-category-name">${getCategoryLabel(m.category)}</div>
          <h3 style="font-family: var(--font-serif); font-size: 1.25rem; margin: 0 0 0.5rem;">${m.title}</h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${m.summary}</p>
          <div style="background: var(--bg-surface-warm); padding: 0.5rem 0.75rem; border-radius: 4px; font-size: 0.8rem; margin-bottom: 1rem;">
            <div><strong>Capacity:</strong> ${m.capacity}</div>
            <div style="margin-top: 2px;"><strong>Fuel:</strong> <span style="color: var(--accent-gold-dark);">${m.fuel}</span></div>
          </div>
          <div class="machine-card-footer" style="margin-top: auto; display: flex; gap: 0.5rem;">
            <a href="${m.pageUrl}" class="btn btn-primary btn-sm" style="flex: 1; justify-content: center;">Full Details &rarr;</a>
            <a href="https://api.whatsapp.com/send?phone=919930985514&text=Hello%20Kravionex%2C%20I%20want%20a%20quotation%20for%20${encodeURIComponent(m.title)}" target="_blank" class="btn btn-outline-dark btn-sm" style="border-color: #25D366; color: #25D366;">WhatsApp</a>
          </div>
        </div>
      `;
      productsGrid.appendChild(card);
    });
  }
}

// 6. Interactive Machinery Slider Navigation Engine
function setupMachinerySliderEvents(track) {
  const prevBtn = document.getElementById('machinery-prev-btn');
  const nextBtn = document.getElementById('machinery-next-btn');
  const counterEl = document.getElementById('machinery-slider-counter');
  const dotsContainer = document.getElementById('machinery-slider-dots');
  const cards = track.querySelectorAll('.slider-machine-card');
  const totalCards = cards.length;

  if (!totalCards) return;

  // Generate Navigation Dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    cards.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = 'slider-dot-btn' + (idx === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
      dot.addEventListener('click', () => {
        scrollToSlideIndex(idx);
      });
      dotsContainer.appendChild(dot);
    });
  }

  function getCardWidth() {
    const card = cards[0];
    const gap = 24; // 1.5rem
    return card ? card.offsetWidth + gap : 340;
  }

  function getCurrentIndex() {
    const scrollLeft = track.scrollLeft;
    const cardWidth = getCardWidth();
    return Math.min(Math.round(scrollLeft / cardWidth), totalCards - 1);
  }

  function scrollToSlideIndex(idx) {
    const cardWidth = getCardWidth();
    track.scrollTo({
      left: idx * cardWidth,
      behavior: 'smooth'
    });
  }

  function updateSliderStatus() {
    const activeIdx = getCurrentIndex();
    if (counterEl) {
      counterEl.textContent = `${activeIdx + 1} / ${totalCards}`;
    }
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.slider-dot-btn');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIdx);
      });
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const curr = getCurrentIndex();
      const target = curr > 0 ? curr - 1 : totalCards - 1;
      scrollToSlideIndex(target);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const curr = getCurrentIndex();
      const target = curr < totalCards - 1 ? curr + 1 : 0;
      scrollToSlideIndex(target);
    });
  }

  // Scroll listener for counter & dots
  let scrollTimeout = null;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateSliderStatus, 50);
  }, { passive: true });

  // Optional subtle auto-sliding (pauses on hover)
  let autoSlideTimer = null;
  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideTimer = setInterval(() => {
      const curr = getCurrentIndex();
      const nextIdx = (curr + 1) % totalCards;
      scrollToSlideIndex(nextIdx);
    }, 6000);
  };
  const stopAutoSlide = () => {
    if (autoSlideTimer) clearInterval(autoSlideTimer);
  };

  track.addEventListener('mouseenter', stopAutoSlide);
  track.addEventListener('mouseleave', startAutoSlide);
  track.addEventListener('touchstart', stopAutoSlide, { passive: true });
  startAutoSlide();
}

// 7. Category Filter System
function initCategoryFilters() {
  const pills = document.querySelectorAll('.category-pill');
  if (!pills.length) return;

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');

      // Filter on slider track (Home page)
      const sliderTrack = document.getElementById('machinery-slider-track');
      if (sliderTrack) {
        const sliderCards = sliderTrack.querySelectorAll('.slider-machine-card');
        sliderCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
        sliderTrack.scrollTo({ left: 0, behavior: 'smooth' });
      }

      // Filter on products.html grid
      const gridCards = document.querySelectorAll('.machinery-grid .machine-card');
      gridCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 8. Modal System
function initModalSystem() {
  const modal = document.getElementById('machine-modal');
  if (!modal) return;
  
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal());
  }
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function closeModal() {
  const modal = document.getElementById('machine-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// =============================================
// RFQ SYSTEM: DIRECT WHATSAPP SALES DESK (+91 9930985514)
// =============================================

function extractRFQFormData(formOrBtn) {
  var form = (formOrBtn && formOrBtn.tagName === 'FORM') ? formOrBtn : (formOrBtn ? formOrBtn.closest('form') : null);
  if (!form) return null;

  var nameEl = form.querySelector('[name="name"], #rfq-name');
  var phoneEl = form.querySelector('[name="phone"], #rfq-phone');
  var emailEl = form.querySelector('[name="email"], #rfq-email');
  var companyEl = form.querySelector('[name="company"], #rfq-company');
  var messageEl = form.querySelector('[name="message"], #rfq-message');
  var machineInput = form.querySelector('[name="machine"]');
  var equipSelect = form.querySelector('#rfq-equipment');
  var capacityInput = form.querySelector('#rfq-capacity, [name="capacity"]');

  var name = nameEl ? nameEl.value.trim() : '';
  var phone = phoneEl ? phoneEl.value.trim() : '';
  var email = emailEl ? emailEl.value.trim() : '';
  var company = companyEl ? companyEl.value.trim() : '';
  var message = messageEl ? messageEl.value.trim() : '';

  var equipment = '';
  if (machineInput && machineInput.value) {
    equipment = machineInput.value.trim();
  } else if (equipSelect) {
    equipment = equipSelect.options[equipSelect.selectedIndex] ? (equipSelect.options[equipSelect.selectedIndex].text || equipSelect.value) : equipSelect.value;
  } else {
    var pageHeading = document.querySelector('h1, .hero-title, .machine-title');
    equipment = pageHeading ? pageHeading.innerText.trim() : 'Food Processing Machinery';
  }

  var capacity = capacityInput ? capacityInput.value.trim() : 'Standard Production Model';

  return { form: form, name: name, phone: phone, email: email, company: company, message: message, equipment: equipment, capacity: capacity };
}

function sendMachineRFQWhatsApp(formOrBtn) {
  var data = extractRFQFormData(formOrBtn);
  if (!data) return false;

  if (!data.name) {
    alert('Please enter your Name before sending the enquiry.');
    var n = data.form.querySelector('[name="name"], #rfq-name');
    if (n) n.focus();
    return false;
  }

  if (!data.phone) {
    alert('Please enter your Contact / WhatsApp phone number.');
    var p = data.form.querySelector('[name="phone"], #rfq-phone');
    if (p) p.focus();
    return false;
  }

  var whatsappText = 
'*NEW MACHINERY ENQUIRY - KRAVIONEX MACHINERY LLP*\n' +
'----------------------------------------\n' +
'*Equipment:* ' + data.equipment + '\n' +
'*Client Name:* ' + data.name + '\n' +
'*Company / Brand:* ' + (data.company || 'N/A') + '\n' +
'*Contact / WhatsApp:* ' + data.phone + '\n' +
'*Email:* ' + (data.email || 'N/A') + '\n' +
'*Target Capacity:* ' + data.capacity + '\n' +
'*Project Requirements:*\n' +
(data.message || 'Please share detailed technical quotation, GA drawings, and pricing.') + '\n' +
'----------------------------------------\n' +
'_Dispatched via Kravionex Official Website_';

  var targetNumber = '919930985514';
  var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + targetNumber + '&text=' + encodeURIComponent(whatsappText);

  renderRFQNotification(data.form, data.name, data.company, data.equipment, data.phone, whatsappUrl);
  window.open(whatsappUrl, '_blank');
  return true;
}

function renderRFQNotification(form, name, company, equipment, phone, whatsappUrl) {
  var statusBox = form.querySelector('[id$="status-msg"], .rfq-status-msg');
  if (!statusBox) {
    statusBox = document.createElement('div');
    statusBox.className = 'rfq-status-msg';
    form.appendChild(statusBox);
  }

  var waHref = whatsappUrl || ('https://api.whatsapp.com/send?phone=919930985514&text=' + encodeURIComponent('Hello Kravionex, I have submitted an RFQ for ' + equipment + ' - ' + name));

  statusBox.innerHTML = 
    '<div style="background: rgba(37, 211, 102, 0.12); border: 1.5px solid #25D366; padding: 1.25rem; border-radius: 8px; margin-top: 1.25rem; color: #FFFFFF; text-align: left;">' +
      '<div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">' +
        '<span style="background: #25D366; color: #141C22; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.9rem;">&#10003;</span>' +
        '<h4 style="color: #6EE7B7; margin: 0; font-family: var(--font-sans); font-size: 1.05rem;">' +
          'Enquiry Dispatched to Domestic Sales Desk (+91 9930985514)' +
        '</h4>' +
      </div>' +
      '<p style="font-size: 0.9rem; color: #E2E8F0; line-height: 1.6; margin-bottom: 0.85rem;">' +
        'Thank you, <strong>' + name + '</strong>' + (company ? ' (' + company + ')' : '') + '. Your specifications for <strong>' + equipment + '</strong> have been formatted for our WhatsApp sales desk.' +
      '</p>' +
      '<div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">' +
        '<a href="' + waHref + '" target="_blank" class="btn btn-primary btn-sm" style="background-color: #25D366; border-color: #25D366; color: #141C22; font-weight: 700;">' +
          '&#128241; Open in WhatsApp Desk (+91 9930985514)' +
        '</a>' +
      '</div>' +
    '</div>';
  statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Global scope bindings
window.sendMachineRFQWhatsApp = sendMachineRFQWhatsApp;
window.handleRFQ = function(e, machine) {
  if (e && e.preventDefault) e.preventDefault();
  return sendMachineRFQWhatsApp(e ? (e.target || e) : document);
};

// Form and Button Initializer
function initRfqForm() {
  // Catch all RFQ forms
  var forms = document.querySelectorAll('form[id^="rfq-form"], form.rfq-form');
  forms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      sendMachineRFQWhatsApp(form);
    });
  });

  // Attach to WhatsApp RFQ buttons
  document.querySelectorAll('.btn-wa, .btn-whatsapp, [data-action="rfq-whatsapp"]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      sendMachineRFQWhatsApp(btn);
    });
  });
}