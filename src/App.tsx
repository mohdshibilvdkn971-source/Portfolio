import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Interests", href: "#interests" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
];

const skills = [
  {
    title: "Currently using",
    note: "Tools I have experience using",
    tools: ["QGIS", "ChatGPT"],
    featured: true,
  },
  {
    title: "Exploring & developing",
    note: "Areas I am actively learning about",
    tools: [
      "ArcGIS",
      "Remote sensing",
      "Google Earth Engine",
      "Drone mapping",
      "Computer vision",
      "Artificial intelligence",
      "Machine learning",
      "Python for geological data",
      "Geospatial data science",
    ],
    featured: false,
  },
];

const projects = [
  {
    title: "AI-based rock & mineral identification",
    category: "AI & Machine Learning",
    image: "/images/rock-texture.jpg",
    alt: "Close-up of a rugged natural rock surface",
    description:
      "An idea for exploring how computer vision might assist with recognizing rock and mineral samples.",
    tags: ["Computer vision", "Mineralogy"],
  },
  {
    title: "Satellite-based geological feature detection",
    category: "GIS & Remote Sensing",
    image: "/images/satellite-earth.jpg",
    alt: "Earth observed from orbit against the dark sky",
    description:
      "A concept for studying how satellite imagery can support geological feature interpretation.",
    tags: ["Remote sensing", "Satellite imagery"],
  },
  {
    title: "Machine learning for mineral exploration",
    category: "AI & Machine Learning",
    image: "/images/field-landscape.jpg",
    alt: "A broad, rugged landscape in warm evening light",
    description:
      "A research concept on combining spatial data and machine learning for mineral exploration questions.",
    tags: ["Machine learning", "Exploration"],
  },
  {
    title: "GIS-based groundwater potential mapping",
    category: "GIS & Remote Sensing",
    image: "/images/hero-mountain.jpg",
    alt: "Mountain ridges and a winding valley seen from above",
    description:
      "A project concept for exploring GIS-based approaches to groundwater potential mapping.",
    tags: ["QGIS", "Spatial analysis"],
  },
  {
    title: "Automated geological map interpretation",
    category: "AI & Machine Learning",
    image: "/images/rock-texture.jpg",
    alt: "A patterned geological rock formation",
    description:
      "An idea for investigating ways to use digital tools to support the reading of geological maps.",
    tags: ["AI", "Geological mapping"],
  },
  {
    title: "AI-assisted geological report generation",
    category: "AI & Machine Learning",
    image: "/images/satellite-earth.jpg",
    alt: "A view of Earth from space",
    description:
      "A concept exploring how AI could assist with organizing geological information into clear reports.",
    tags: ["Generative AI", "Geoscience"],
  },
  {
    title: "Remote-sensing land-use analysis",
    category: "GIS & Remote Sensing",
    image: "/images/field-landscape.jpg",
    alt: "A sweeping natural landscape",
    description:
      "A project idea for examining land-use patterns using remote-sensing data and geospatial tools.",
    tags: ["Remote sensing", "Land use"],
  },
];

const researchInterests = [
  "AI applications in geology",
  "Planetary surface analysis",
  "Mineral identification using computer vision",
  "Machine learning for mineral exploration",
  "Remote sensing & geological interpretation",
  "Digital geological mapping",
];

const filters = ["All ideas", "AI & Machine Learning", "GIS & Remote Sensing"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All ideas");
  const shouldReduceMotion = useReducedMotion();
  const visibleProjects =
    activeFilter === "All ideas"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top" className="min-h-screen bg-paper text-ink">
      <header className="site-header">
        <a
          className="wordmark"
          href="#top"
          aria-label="Mohamed Shibil Vadakkan, home"
          onClick={closeMenu}
        >
          <span className="wordmark-mark">MSV</span>
          <span className="wordmark-label">Geoscience<br />&amp; technology</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} strokeWidth={1.6} /> : <Menu size={21} strokeWidth={1.6} />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Contact <ArrowUpRight size={13} strokeWidth={1.6} />
          </a>
        </nav>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <motion.p
            className="eyebrow hero-eyebrow"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="status-dot" />
            Aspiring geoscientist <span className="eyebrow-divider">/</span> Science meets technology
          </motion.p>

          <motion.h1
            id="hero-title"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>Mohamed</span>
            <span>Shibil</span>
            <span className="hero-last-name">Vadakkan<span className="name-period">.</span></span>
          </motion.h1>

          <motion.div
            className="hero-lower"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <p className="hero-role">Aspiring Geoscientist <span>·</span> Science Meets Technology</p>
            <p className="hero-intro">
              Exploring the Earth through geology, geospatial technologies, and emerging
              possibilities in artificial intelligence.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">
                Explore my work <ArrowDownRight size={16} strokeWidth={1.7} />
              </a>
              <a className="button button-text" href="/Mohamed-Shibil-Vadakkan-CV.txt" download>
                Download CV <Download size={15} strokeWidth={1.7} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.figure
          className="hero-image"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.15, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/images/hero-mountain.jpg"
            alt="Snow-covered mountain ridges above a broad alpine valley"
            fetchPriority="high"
          />
          <div className="image-wash" aria-hidden="true" />
          <figcaption className="image-caption">
            <span>Geoscience / 01</span>
            <span>Earth, in layers</span>
          </figcaption>
          <a className="hero-contact" href="mailto:mohdshibilvdkn971@gmail.com">
            <span className="contact-icon"><Mail size={15} /></span>
            <span><small>Get in touch</small><strong>Email Mohamed</strong></span>
            <ArrowUpRight size={16} />
          </a>
        </motion.figure>

        <a className="scroll-cue" href="#about">
          <span>Scroll to explore</span>
          <span className="scroll-line" aria-hidden="true" />
        </a>
        <span className="hero-index" aria-hidden="true">Geology / Technology</span>
      </section>

      <section id="about" className="about-section section-shell" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="eyebrow">01 / About me</p>
          <span className="section-rule" />
        </div>
        <div className="about-grid">
          <div className="portrait-frame" role="img" aria-label="Placeholder for Mohamed's portrait">
            <div className="portrait-placeholder">
              <span className="portrait-initials">MSV</span>
              <span className="portrait-prompt">Your portrait<br />will go here</span>
              <span className="portrait-caption">PERSONAL FIELD NOTES / 01</span>
            </div>
            <span className="photo-note">Portrait placeholder — add your photo</span>
          </div>
          <div className="about-copy">
            <h2 id="about-title">A geologist’s curiosity.<br /><span>A digital way of seeing.</span></h2>
            <p>
              I’m a geology student interested in how the Earth works and how new technologies
              can help us understand it. My interests bring together geological sciences, GIS,
              remote sensing, and AI-assisted research.
            </p>
            <p>
              I’m especially drawn to igneous petrology and planetary geology, and to learning
              practical geospatial tools that make geological questions easier to explore.
            </p>
            <div className="about-tags">
              <span>Geological sciences</span>
              <span>Spatial thinking</span>
              <span>Curious by nature</span>
            </div>
            <a className="text-link" href="#interests">What I’m curious about <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section id="interests" className="interests-section section-shell" aria-labelledby="interests-title">
        <div className="section-heading">
          <p className="eyebrow">02 / Areas of interest</p>
          <span className="section-rule" />
        </div>
        <div className="section-title-row">
          <h2 id="interests-title">Questions worth<br /><em>looking closer at.</em></h2>
          <p>Areas of geology and technology I’m interested in exploring further.</p>
        </div>
        <div className="interest-cards">
          <article className="interest-card interest-card-image">
            <img src="/images/rock-texture.jpg" alt="Layered texture in a naturally weathered rock" loading="lazy" />
            <div className="interest-card-overlay" />
            <span className="interest-number">01</span>
            <h3>Igneous<br />petrology</h3>
            <p>Rocks, minerals, and the processes that shape them.</p>
          </article>
          <article className="interest-card interest-card-image">
            <img src="/images/satellite-earth.jpg" alt="Earth viewed from space" loading="lazy" />
            <div className="interest-card-overlay" />
            <span className="interest-number">02</span>
            <h3>Planetary<br />geology</h3>
            <p>Reading the surfaces and stories of other worlds.</p>
          </article>
          <article className="interest-card interest-card-image">
            <img src="/images/hero-mountain.jpg" alt="Mountain terrain across a wide valley" loading="lazy" />
            <div className="interest-card-overlay" />
            <span className="interest-number">03</span>
            <h3>GIS &amp; spatial<br />analysis</h3>
            <p>Finding patterns in place-based geological data.</p>
          </article>
          <article className="interest-card interest-card-image">
            <img src="/images/field-landscape.jpg" alt="A natural mountain landscape seen from a high ridge" loading="lazy" />
            <div className="interest-card-overlay" />
            <span className="interest-number">04</span>
            <h3>Remote<br />sensing</h3>
            <p>Observing the Earth through images and data.</p>
          </article>
          <article className="interest-card interest-card-last">
            <span className="interest-number">05</span>
            <span className="interest-mark" aria-hidden="true">↗</span>
            <h3>Geological<br />exploration</h3>
            <p>Asking better questions about what lies beneath.</p>
          </article>
        </div>
      </section>

      <section id="skills" className="skills-section" aria-labelledby="skills-title">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">03 / Tools &amp; skills</p>
            <span className="section-rule" />
          </div>
          <div className="section-title-row">
            <h2 id="skills-title">Building a toolkit,<br /><em>one question at a time.</em></h2>
            <p>Clear about what I use now and what I’m still learning.</p>
          </div>
          <div className="skill-groups">
            {skills.map((group) => (
              <article className={`skill-group${group.featured ? " skill-group-current" : ""}`} key={group.title}>
                <div className="skill-group-heading">
                  <span className={`skill-dot${group.featured ? " skill-dot-active" : ""}`} />
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.note}</p>
                  </div>
                </div>
                <ul className="skill-list">
                  {group.tools.map((tool) => <li key={tool}>{tool}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section section-shell" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="eyebrow">04 / Selected directions</p>
          <span className="section-rule" />
        </div>
        <div className="section-title-row projects-title-row">
          <h2 id="projects-title">Ideas taking<br /><em>geological shape.</em></h2>
          <p>
            These are project concepts, not completed work. I’ll share maps, code, and findings
            here as projects take shape.
          </p>
        </div>
        <div className="project-filters" role="group" aria-label="Filter project concepts">
          {filters.map((filter) => (
            <button
              className={`filter-button${activeFilter === filter ? " is-active" : ""}`}
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
              {filter === "All ideas" && <span>{projects.length}</span>}
            </button>
          ))}
        </div>
        <div className="project-grid" aria-live="polite">
          {visibleProjects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="project-card-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="concept-badge"><span /> Research concept</span>
              </div>
              <div className="project-card-copy">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tags" aria-label="Project topics">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="field-notes" className="field-section" aria-labelledby="field-title">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">05 / Field notes</p>
            <span className="section-rule" />
          </div>
          <div className="field-layout">
            <div>
              <h2 id="field-title">The Earth,<br /><em>in observation.</em></h2>
              <p>A visual journal for fieldwork, geological forms, and landscapes. Captions and locations will be added when I have actual field photos to share.</p>
            </div>
            <div className="field-gallery">
              <figure className="field-photo field-photo-tall">
                <img src="/images/hero-mountain.jpg" alt="Mountain range and valley from above" loading="lazy" />
                <figcaption><span>Landscape / 01</span><span>Geological forms</span></figcaption>
              </figure>
              <figure className="field-photo field-photo-short">
                <img src="/images/rock-texture.jpg" alt="Close view of a naturally patterned rock surface" loading="lazy" />
                <figcaption><span>Texture / 02</span><span>Rock in detail</span></figcaption>
              </figure>
              <figure className="field-photo field-photo-wide">
                <img src="/images/field-landscape.jpg" alt="Expansive natural terrain in evening light" loading="lazy" />
                <figcaption><span>Terrain / 03</span><span>Reading the land</span></figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="research-section section-shell" aria-labelledby="research-title">
        <div className="section-heading">
          <p className="eyebrow">06 / Research interests</p>
          <span className="section-rule" />
        </div>
        <div className="research-layout">
          <h2 id="research-title">Where geology<br />meets the <em>new.</em></h2>
          <div className="research-list">
            {researchInterests.map((interest, index) => (
              <div className="research-item" key={interest}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{interest}</p>
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </div>
            ))}
            <p className="research-disclaimer">Developing interests — not a list of completed research.</p>
          </div>
        </div>
      </section>

      <section id="journey" className="journey-section" aria-labelledby="journey-title">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">07 / Education &amp; experience</p>
            <span className="section-rule" />
          </div>
          <div className="section-title-row">
            <h2 id="journey-title">A path still<br /><em>being written.</em></h2>
            <p>I’ll add verified education, field experience, and training details here.</p>
          </div>
          <div className="journey-grid">
            <article className="journey-entry">
              <span className="journey-index">01</span>
              <div><p>Education</p><h3>Degree &amp; college</h3><span>Add your course, college, and university</span></div>
              <span className="journey-pending">Details to add</span>
            </article>
            <article className="journey-entry">
              <span className="journey-index">02</span>
              <div><p>Academic experience</p><h3>Field visits &amp; semester work</h3><span>Add dates and details when ready</span></div>
              <span className="journey-pending">Details to add</span>
            </article>
            <article className="journey-entry">
              <span className="journey-index">03</span>
              <div><p>Professional experience</p><h3>Internships &amp; workshops</h3><span>Add verified training or internship details</span></div>
              <span className="journey-pending">Details to add</span>
            </article>
          </div>
        </div>
      </section>

      <section className="credentials-section section-shell" aria-labelledby="credentials-title">
        <div className="section-heading">
          <p className="eyebrow">08 / Credentials &amp; writing</p>
          <span className="section-rule" />
        </div>
        <div className="credentials-grid">
          <article>
            <p className="eyebrow">Learning &amp; development</p>
            <h2 id="credentials-title">Courses &amp;<br />certifications</h2>
            <p>Verified certifications and technical courses will be listed here as they’re added.</p>
            <span className="credential-empty">No certifications added yet</span>
          </article>
          <article>
            <p className="eyebrow">Research &amp; reports</p>
            <h2>Publications &amp;<br />academic reports</h2>
            <p>Only published work and completed academic reports will appear in this space.</p>
            <span className="credential-empty">No publications added yet</span>
          </article>
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="contact-inner">
          <p className="eyebrow"><span className="status-dot" /> 09 / Let’s connect</p>
          <h2 id="contact-title">Curious about the Earth.<br /><em>Let’s talk about what’s next.</em></h2>
          <p className="contact-intro">Interested in geoscience, spatial technologies, or sharing ideas? I’d be glad to hear from you.</p>
          <div className="contact-links">
            <a href="mailto:mohdshibilvdkn971@gmail.com">
              <span className="contact-icon"><Mail size={17} strokeWidth={1.6} /></span>
              <span><small>Email me</small><strong>mohdshibilvdkn971@gmail.com</strong></span>
              <ArrowUpRight size={16} />
            </a>
            <a href="tel:+91904845091">
              <span className="contact-icon"><Phone size={17} strokeWidth={1.6} /></span>
              <span><small>Call me</small><strong>+91 90484 5091</strong></span>
              <ArrowUpRight size={16} />
            </a>
            <a href="/Mohamed-Shibil-Vadakkan-CV.txt" download>
              <span className="contact-icon"><Download size={17} strokeWidth={1.6} /></span>
              <span><small>Download</small><strong>My CV</strong></span>
              <ArrowDown size={16} />
            </a>
          </div>
          <p className="contact-signoff">Curious about the Earth. Interested in what technology can reveal.</p>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#top">
          <span className="wordmark-mark">MSV</span>
          <span className="wordmark-label">Mohamed Shibil<br />Vadakkan</span>
        </a>
        <p>Aspiring geoscientist<br />Science meets technology</p>
        <a className="footer-top" href="#top">Back to top <ArrowUpRight size={14} /></a>
      </footer>
    </main>
  );
}

export default App;
