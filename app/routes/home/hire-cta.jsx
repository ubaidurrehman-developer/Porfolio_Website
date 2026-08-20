import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import styles from './hire-cta.module.css';

export const HireCta = ({ id = 'hire-me', visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.hireCta}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0}>
        {({ visible: isVisible, nodeRef }) => (
          <div className={styles.container} ref={nodeRef} data-visible={isVisible}>
            <div className={styles.card}>
              <div className={styles.badge} data-visible={isVisible}>
                <span className={styles.badgeDot} />
                <span className={styles.badgeText}>Available for High-Impact Projects</span>
              </div>

              <Heading
                className={styles.title}
                data-visible={isVisible}
                level={2}
                id={titleId}
              >
                <DecoderText
                  text="Looking for a proven AI Engineer for your next breakthrough? Hire me."
                  start={isVisible}
                  delay={300}
                />
              </Heading>

              <Text
                className={styles.description}
                data-visible={isVisible}
                size="l"
                as="p"
              >
                I help startups, enterprises, and fast-moving teams architect, deploy, and scale
                production-grade AI solutions — from fine-tuned <strong>Document Intelligence (OCR)</strong> and{' '}
                <strong>Computer Vision</strong> pipelines to resilient <strong>LLM agent systems</strong>.
              </Text>

              <div className={styles.highlightCallout} data-visible={isVisible}>
                <Text size="l" as="p">
                  Have an exciting project in mind or need expert AI execution?{' '}
                  <Link href="/contact" className={styles.highlightLink}>
                    Let's discuss your requirements &rarr;
                  </Link>
                </Text>
              </div>

              <div className={styles.buttonRow} data-visible={isVisible}>
                <Button
                  className={styles.primaryButton}
                  href="/contact"
                  icon="send"
                >
                  Start a Project
                </Button>
                <Button
                  secondary
                  className={styles.cvButton}
                  href="/Ubaid_ur_Rehman_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon="arrow-right"
                >
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
