import profileImage from '~/assets/profile.jpg';
import ocrImage from '~/assets/ocr-pipeline.jpg';
import yoloImage from '~/assets/yolo-detection.jpg';
import automationImage from '~/assets/llm-automation.jpg';
import housingImage from '~/assets/house-price.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import { experience, metrics, projects, skills } from './portfolio-data';
import styles from './home.module.css';

const projectImages = {
  ocr: ocrImage,
  yolo: yoloImage,
  automation: automationImage,
  housing: housingImage,
};

export const meta = () =>
  baseMeta({
    title: 'AI Engineer & ML Specialist',
    description: `Portfolio of ${config.name}, an AI Engineer building reliable computer vision, document intelligence, and LLM applications.`,
  });

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export const Home = () => (
  <div className={styles.home}>
    <section className={styles.hero} id="intro" aria-labelledby="hero-title">
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}><span /> Available for AI / ML roles & selected projects</p>
        <p className={styles.kicker}>AI Engineer · Pakistan</p>
        <h1 id="hero-title">Building AI systems that <em>ship.</em></h1>
        <p className={styles.lede}>
          I’m Ubaid ur Rehman — an AI Engineer who turns computer vision, document intelligence,
          and LLM capabilities into dependable products.
        </p>
        <div className={styles.actions}>
          <a className={styles.primaryAction} href="#work">Explore selected work <ArrowIcon /></a>
          <a className={styles.secondaryAction} href="/contact">Start a conversation</a>
        </div>
      </div>
      <aside className={styles.profileCard} aria-label="Profile summary">
        <div className={styles.profileImageWrap}>
          <img src={profileImage} alt="Ubaid ur Rehman" width="480" height="640" fetchPriority="high" />
          <span className={styles.profileStamp}>UR<br />AI</span>
        </div>
        <div className={styles.profileDetails}>
          <div><strong>Ubaid ur Rehman</strong><span>AI Engineer & ML Specialist</span></div>
          <span className={styles.location}>● Pakistan</span>
        </div>
      </aside>
    </section>

    <section className={styles.metrics} aria-label="Selected engineering metrics">
      {metrics.map(metric => <div className={styles.metric} key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
      <div className={styles.metricNote}>Focused on measurable outcomes<br />and production-ready delivery.</div>
    </section>

    <section className={styles.section} id="about" aria-labelledby="about-title">
      <div className={styles.sectionIntro}>
        <p className={styles.sectionLabel}>01 — About</p>
        <h2 id="about-title">Technical depth,<br /><em>clear outcomes.</em></h2>
      </div>
      <div className={styles.aboutCopy}>
        <p>
          I specialize in high-signal AI applications: systems that reliably extract, classify,
          retrieve, and automate. I balance model performance with the details that make products
          usable — latency, evaluation, integration, and thoughtful interfaces.
        </p>
        <a className={styles.textLink} href="/contact">Let’s work together <ArrowIcon /></a>
      </div>
    </section>

    <section className={`${styles.section} ${styles.skillsSection}`} aria-labelledby="skills-title">
      <div className={styles.sectionIntro}>
        <p className={styles.sectionLabel}>02 — Capabilities</p>
        <h2 id="skills-title">A stack built for<br /><em>applied AI.</em></h2>
      </div>
      <div className={styles.skillGrid}>
        {skills.map((skill, index) => (
          <article className={styles.skillCard} key={skill.title}>
            <span className={styles.cardIndex}>0{index + 1}</span>
            <h3>{skill.title}</h3><p>{skill.description}</p>
            <ul>{skill.items.map(item => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>

    <section className={`${styles.section} ${styles.workSection}`} id="work" aria-labelledby="work-title">
      <div className={styles.sectionIntro}>
        <p className={styles.sectionLabel}>03 — Selected work</p>
        <h2 id="work-title">Projects with<br /><em>proof behind them.</em></h2>
      </div>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <article className={styles.projectCard} key={project.title}>
            <div className={styles.projectVisual}>
              <img src={projectImages[project.image]} alt="" loading={index > 1 ? 'lazy' : 'eager'} />
              <span>{project.type}</span>
            </div>
            <div className={styles.projectContent}>
              <p className={styles.impact}>{project.impact}</p><h3>{project.title}</h3><p>{project.description}</p>
              <ul className={styles.tags}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className={`${styles.section} ${styles.experienceSection}`} id="experience" aria-labelledby="experience-title">
      <div className={styles.sectionIntro}>
        <p className={styles.sectionLabel}>04 — Experience</p>
        <h2 id="experience-title">Moving ideas<br /><em>into impact.</em></h2>
      </div>
      <ol className={styles.timeline}>
        {experience.map(item => <li key={`${item.company}-${item.role}`}><span>{item.period}</span><div><h3>{item.company}</h3><strong>{item.role}</strong><p>{item.description}</p></div></li>)}
      </ol>
    </section>

    <section className={styles.contactCta} aria-labelledby="contact-title">
      <p className={styles.sectionLabel}>05 — Contact</p>
      <h2 id="contact-title">Have a challenging<br /><em>problem to solve?</em></h2>
      <p>Let’s make the next useful AI product together.</p>
      <a className={styles.primaryAction} href="/contact">Send a message <ArrowIcon /></a>
    </section>
    <Footer />
  </div>
);

export default Home;
