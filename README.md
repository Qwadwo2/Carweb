
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Manu Rentals — Premium Car Hire in Ghana</title>
  <meta name="description" content="Modern car rental service with premium vehicles, flexible plans, and instant booking. Explore, compare, and book your ride in minutes." />
  <meta name="keywords" content="car rental, Ghana car hire, premium cars, affordable rentals, SUV, sedan, booking" />

  <!-- Open Graph / Social -->
  <meta property="og:title" content="Manu Rentals — Premium Car Hire in Ghana" />
  <meta property="og:description" content="Book premium cars, SUVs, and economy rides with transparent pricing and instant confirmation." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1200&auto=format&fit=crop" />
  <meta property="og:url" content="https://example.com" />

  <!-- Favicon -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🚗</text></svg>">

  <!-- Google Font (optional online resource) -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="site-header">
    <nav class="nav" aria-label="Primary">
      <a class="logo" href="#" aria-label="Manu Rentals home">
        <span class="logo-mark">MR</span>
        <span class="logo-type">Manu Rentals</span>
      </a>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">☰</button>
      <ul class="nav-links">
        <li><a href="#cars">Cars</a></li>
        <li><a href="#booking">Booking</a></li>
        <li><a href="#insights">Insights</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="actions">
        <button id="themeToggle" class="btn btn-ghost" aria-label="Toggle theme">🌙</button>
        <a class="btn btn-primary" href="#booking">Book Now</a>
      </div>
    </nav>
  </header>

  <main>
    <!-- HERO -->
    <section class="hero" role="banner">
      <div class="hero-media" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600&auto=format&fit=crop" alt="Premium cars parked" />
        <div class="gradient-overlay"></div>
      </div>
      <div class="hero-content container">
        <h1>Drive in Comfort. Arrive in Style.</h1>
        <p>Premium cars, transparent pricing, and instant confirmation across Ghana.</p>
        <div class="hero-cta">
          <a class="btn btn-primary btn-lg" href="#booking">Book Your Ride</a>
          <a class="btn btn-ghost btn-lg" href="#cars">Browse Cars</a>
        </div>
        <ul class="trust-badges" aria-label="Service highlights">
          <li>✅ 24/7 Support</li>
          <li>✅ Free Cancellations</li>
          <li>✅ No Hidden Fees</li>
        </ul>
      </div>
    </section>

    <!-- CAR SHOWCASE -->
    <section id="cars" class="section container">
      <header class="section-header">
        <h2>Featured Vehicles</h2>
        <p>Explore our curated selection — economy, executive, and SUVs.</p>
      </header>

      <div class="filters">
        <label>
          <span class="sr-only">Filter by class</span>
          <select id="classFilter" aria-label="Filter cars by class">
            <option value="all" selected>All classes</option>
            <option value="economy">Economy</option>
            <option value="executive">Executive</option>
            <option value="suv">SUV</option>
          </select>
        </label>
      </div>

      <div class="car-grid" id="carGrid" aria-live="polite" aria-busy="false">
        <!-- Cards injected by script.js -->
      </div>
    </section>

    <!-- BOOKING FORM -->
    <section id="booking" class="section section-alt">
      <div class="container grid-2">
        <div>
          <header class="section-header">
            <h2>Quick Booking</h2>
            <p>Pick your dates and destination. We'll handle the rest.</p>
          </header>
          <form id="bookingForm" class="card form" novalidate>
            <div class="form-row">
              <label for="pickLocation">Pick-up Location</label>
              <select id="pickLocation" required>
                <option value="">Select location</option>
                <option>Takoradi</option>
                <option>Sekondi</option>
                <option>Accra</option>
                <option>Kumasi</option>
              </select>
              <small class="error"></small>
            </div>
            <div class="form-row">
              <label for="dropLocation">Drop-off Location</label>
              <select id="dropLocation" required>
                <option value="">Select location</option>
                <option>Takoradi</option>
                <option>Sekondi</option>
                <option>Accra</option>
                <option>Kumasi</option>
              </select>
              <small class="error"></small>
            </div>
            <div class="form-row grid-2">
              <div>
                <label for="startDate">Start Date</label>
                <input type="date" id="startDate" required />
                <small class="error"></small>
              </div>
              <div>
                <label for="endDate">End Date</label>
                <input type="date" id="endDate" required />
                <small class="error"></small>
              </div>
            </div>
            <div class="form-row">
              <label for="carSelect">Vehicle</label>
              <select id="carSelect" required>
                <option value="">Choose a car</option>
              </select>
              <small class="error"></small>
            </div>
            <div class="form-row">
              <label for="fullName">Full Name</label>
              <input type="text" id="fullName" placeholder="e.g., Manu Richard" required />
              <small class="error"></small>
            </div>
            <div class="form-row">
              <label for="phone">Phone</label>
              <input type="tel" id="phone" placeholder="e.g., +233 24 123 4567" required />
              <small class="error"></small>
            </div>
            <div class="form-row">
              <div class="price-summary" id="priceSummary" aria-live="polite">Total: GHS 0</div>
            </div>
            <div class="form-actions">
              <button type="submit" class="btn btn-primary">Confirm Booking</button>
              <p class="fine-print">By continuing, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.</p>
            </div>
          </form>
        </div>
        <aside>
          <div class="card highlight">
            <h3>Why Choose Manu Rentals?</h3>
            <ul>
              <li>🚘 New & well-maintained fleet</li>
              <li>🛡️ Comprehensive insurance options</li>
              <li>⛽ Flexible fuel & mileage plans</li>
              <li>🕒 Free 1-hour grace period</li>
              <li>🌍 Airport & hotel delivery</li>
            </ul>
          </div>
          <div class="card info">
            <h4>Need a Chauffeur?</h4>
            <p>Add a professional driver to any booking at GHS 200/day.</p>
          </div>
        </aside>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="section container" id="testimonials">
      <header class="section-header">
        <h2>What Customers Say</h2>
      </header>
      <div class="testimonial-grid">
        <figure class="card testimonial">
          <blockquote>
            “Smooth experience from pick-up to drop-off. Highly recommend!”
          </blockquote>
          <figcaption>— Ama, Takoradi</figcaption>
        </figure>
        <figure class="card testimonial">
          <blockquote>
            “Transparent pricing and a spotless SUV. Will book again.”
          </blockquote>
          <figcaption>— Kojo, Accra</figcaption>
        </figure>
        <figure class="card testimonial">
          <blockquote>
            “Booked online and got instant confirmation. Excellent service.”
          </blockquote>
          <figcaption>— Esi, Kumasi</figcaption>
        </figure>
      </div>
    </section>

    <!-- INSIGHTS / BLOG -->
    <section id="insights" class="section section-alt">
      <div class="container">
        <header class="section-header">
          <h2>Insights & Tips</h2>
          <p>Guides to help you get the most from your rental.</p>
        </header>
        <div class="insight-grid">
          <article class="card insight">
            <img src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1200&auto=format&fit=crop" alt="Highway" />
            <div class="content">
              <h3>Best Weekend Getaways near Takoradi</h3>
              <p>Discover scenic routes and hidden gems perfect for short trips.</p>
              <a href="#" class="link">Read more →</a>
            </div>
          </article>
          <article class="card insight">
            <img src="https://images.unsplash.com/photo-1502877338535-8d8c1dfdbf22?q=80&w=1200&auto=format&fit=crop" alt="SUV" />
            <div class="content">
              <h3>SUV vs Sedan: Which is Right for You?</h3>
              <p>Compare comfort, capacity, and fuel economy for your needs.</p>
              <a href="#" class="link">Read more →</a>
            </div>
          </article>
          <article class="card insight">
            <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop" alt="Car interior" />
            <div class="content">
              <h3>How to Save on Rentals</h3>
              <p>Insider tips on booking times, insurance, and extras.</p>
              <a href="#" class="link">Read more →</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section container">
      <header class="section-header">
        <h2>About Us</h2>
        <p>Local expertise, nationwide reach. We’re committed to safe, comfortable journeys.</p>
      </header>
      <div class="about-grid">
        <div class="card">
          <h3>Our Mission</h3>
          <p>To make car hire effortless and reliable with a premium customer experience.</p>
        </div>
        <div class="card">
          <h3>Locations</h3>
          <p>Operating in Takoradi, Sekondi, Accra, Kumasi — and expanding.</p>
        </div>
        <div class="card">
          <h3>Contact</h3>
          <p>📞 +233 24 123 4567<br/>✉️ hello@manurentals.com</p>
        </div>
      </div>
    </section>
  </main>

  <footer id="contact" class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="logo" href="#"><span class="logo-mark">MR</span> <span class="logo-type">Manu Rentals</span></a>
        <p>Premium car rentals across Ghana. Transparent, dependable, and tailored to you.</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="#cars">Cars</a></li>
          <li><a href="#booking">Booking</a></li>
          <li><a href="#insights">Insights</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
      <div>
        <h4>Follow</h4>
        <div class="social">
          <a href="#" aria-label="Instagram">📸</a>
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="X">🕊️</a>
        </div>
      </div>
    </div>
    <div class="legal">© <span id="year"></span> Manu Rentals. All rights reserved.</div>
  </footer>

  <!-- JSON-LD Structured Data (sample) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Manu Rentals",
    "url": "https://example.com",
    "logo": "https://example.com/logo.png",
    "sameAs": ["https://www.facebook.com/example", "https://www.instagram.com/example"],
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+233241234567",
      "contactType": "customer service",
      "areaServed": "GH"
    }]
  }
  </script>

  <script src="script.js"></script>
</body>
</html>

