import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi, I'm Ubaid" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm Ubaid ur Rehman, an AI Engineer &amp; ML Specialist based in Pakistan. I design,
      build, and deploy intelligent systems across the full AI spectrum — from Computer Vision
      and Document Intelligence to Large Language Models (LLMs), RAG pipelines, and autonomous
      workflow automations at <Link href="https://10pearls.com">10Pearls</Link> and{' '}
      <Link href="https://formmate.ai">FormMate</Link>.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Ready to evolve your product with AI? From initial concept to production scale, I help
      forward-thinking teams turn ambitious ideas into fast, reliable, and intelligent applications
      that deliver real business impact.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Have an exciting project in mind or looking to bring intelligent capabilities to your stack?
      Feel free to <Link href="/contact">reach out and let's build something exceptional together &rarr;</Link>
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <div className={styles.buttonGroup} data-visible={visible}>
                <Button
                  secondary
                  className={styles.button}
                  data-visible={visible}
                  href="/contact"
                  icon="send"
                >
                  Send me a message
                </Button>
                <Button
                  className={styles.button}
                  data-visible={visible}
                  href="/Ubaid_ur_Rehman_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon="arrow-right"
                >
                  Download CV
                </Button>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Ubaid ur Rehman — AI Engineer & ML Specialist"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    writingMode="vertical-rl"
                    fontFamily="serif"
                    fontSize="108"
                    fontWeight="700"
                    letterSpacing="16"
                    fill="currentColor"
                  >ウバイド</text>
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
