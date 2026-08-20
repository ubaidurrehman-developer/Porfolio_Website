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
      <DecoderText text="About Me" start={visible} delay={500} />
    </Heading>    
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I design, build, and deploy AI systems across the modern AI landscape — from Computer Vision and Document Intelligence to LLMs, RAG pipelines, AI agents, and autonomous workflow automation. I’ve worked on real-world AI solutions at <Link href="#project">FormMate</Link>, helping transform complex challenges into scalable, reliable, and impactful products.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      <strong>Ready to put AI to work?</strong><br />
      Whether you're starting with an idea, improving an existing product, or looking to bring intelligent capabilities into your tech stack, I can help take it from concept to production. Together, we can build AI solutions that are not just impressive — but fast, reliable, scalable, and built to create real business value.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Have an exciting project in mind? Let's turn it into something exceptional.
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
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Let's Talk
              </Button>
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
