export const metrics = [
  { value: '1.1B', label: 'parameter OCR model' },
  { value: '88%', label: 'field detection accuracy' },
  { value: '1.2s', label: 'inference latency' },
];

export const skills = [
  {
    title: 'AI & machine learning',
    description: 'Practical models designed around measurable business outcomes.',
    items: ['Python', 'PyTorch', 'Scikit-learn', 'ONNX Runtime'],
  },
  {
    title: 'Vision & document AI',
    description: 'Extraction systems that turn complex documents into reliable data.',
    items: ['GLM-OCR', 'YOLOv11', 'Azure Document AI', 'Tesseract'],
  },
  {
    title: 'LLM applications',
    description: 'Grounded, useful AI workflows with the right evaluation loop.',
    items: ['Multi-agent systems', 'RAG', 'FAISS', 'Automation'],
  },
  {
    title: 'Production systems',
    description: 'End-to-end services with a focus on maintainability and delivery.',
    items: ['Django', 'React', 'Docker', 'PostgreSQL'],
  },
];

export const projects = [
  {
    title: 'GLM-OCR Document Intelligence',
    type: 'AI / document intelligence',
    description:
      'A production OCR pipeline using a 1.1B-parameter GLM-OCR model and Azure Document AI to extract structured fields from complex documents.',
    impact: '88% field detection • 1.2s inference',
    image: 'ocr',
    tags: ['GLM-OCR', 'Azure AI', 'Python'],
  },
  {
    title: 'FormMate',
    type: 'Multi-agent platform',
    description:
      'A document intelligence platform that combines object detection, OCR, and vector search to understand forms from end to end.',
    impact: '85–90% detection • 10–15s end-to-end',
    image: 'yolo',
    tags: ['YOLOv11', 'FAISS', 'Django + React'],
  },
  {
    title: 'Job Automation Pipeline',
    type: 'Workflow automation',
    description:
      'A repeatable workflow that gathers, structures, and delivers relevant job listings with a dramatically lower manual workload.',
    impact: '500+ listings/week • 90% less manual effort',
    image: 'automation',
    tags: ['Selenium', 'n8n', 'Email automation'],
  },
  {
    title: 'House Price Prediction',
    type: 'Predictive analytics',
    description:
      'An interactive price estimation product backed by a soft-voting ensemble trained on a purpose-built real estate dataset.',
    impact: '89–92% model accuracy',
    image: 'housing',
    tags: ['XGBoost', 'Flask', 'Streamlit'],
  },
];

export const experience = [
  {
    period: 'Current',
    company: '10Pearls',
    role: 'AI Engineer',
    description: 'Building practical document intelligence and AI-assisted workflows for real business problems.',
  },
  {
    period: '2024 — 2025',
    company: 'FormMate',
    role: 'Machine Learning Engineer',
    description: 'Developed a multi-agent system for form analysis, extraction, and retrieval.',
  },
  {
    period: 'Foundation',
    company: 'FAST-NUCES',
    role: 'Computer Science',
    description: 'Built the technical foundation in machine learning, systems, and applied software engineering.',
  },
];
