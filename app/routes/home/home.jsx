import ocrTexture from '~/assets/ocr-pipeline.jpg';
import ocrTextureLarge from '~/assets/ocr-pipeline.jpg';
import ocrTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import yoloTexture from '~/assets/yolo-detection.jpg';
import yoloTextureLarge from '~/assets/yolo-detection.jpg';
import yoloTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import llmTexture from '~/assets/llm-automation.jpg';
import llmTextureLarge from '~/assets/llm-automation.jpg';
import llmTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'AI Engineer + ML Specialist',
    description: `Portfolio of ${config.name} — an AI Engineer specializing in Computer Vision, Document Intelligence, and Large Language Models (LLMs).`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="GLM-OCR Document Intelligence Pipeline"
        description="Production-grade bilingual (Arabic & English) OCR system using a 1.1B-parameter GLM-OCR model. Achieves 69% accuracy with 1.2s inference latency, integrated with Azure Document AI at 10Pearls."
        model={{
          type: 'laptop',
          alt: 'GLM-OCR Document Intelligence Pipeline Dashboard',
          textures: [
            {
              srcSet: `${ocrTexture} 1280w, ${ocrTextureLarge} 2560w`,
              placeholder: ocrTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="YOLOv11 Real-Time Object Detection"
        description="High-performance real-time object detection system built with YOLOv11 and PyTorch. Supports multi-class detection at 40+ FPS with a custom training pipeline, deployed for surveillance and industrial inspection use cases."
        model={{
          type: 'laptop',
          alt: 'YOLOv11 Real-Time Object Detection Dashboard',
          textures: [
            {
              srcSet: `${yoloTexture} 1280w, ${yoloTextureLarge} 2560w`,
              placeholder: yoloTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="LLM-Powered Document Automation Platform"
        description="AI automation platform leveraging GPT-4 and custom LLM agents for intelligent document processing — extracting, validating, and structuring invoice & form data into structured JSON outputs via agentic function-calling pipelines."
        model={{
          type: 'laptop',
          alt: 'LLM Document Automation Platform',
          textures: [
            {
              srcSet: `${llmTexture} 1280w, ${llmTextureLarge} 2560w`,
              placeholder: llmTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
