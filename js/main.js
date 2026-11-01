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

// Sticky Header & Scroll Effects
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
      '</div>' +
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