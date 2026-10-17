const portfolioProjects = [
  {
    "id": "fitfoot-ar",
    "title": "FitFoot AR",
    "category": "AR / 3D",
    "description": "An augmented reality shoe try-on experience that shows shoes on your feet in real time.",
    "detailedDescription": "A browser-based AR footwear concept combining live shoe visualization with a catalog and a roadmap for measurement-based recommendations.",
    "tags": [
      "Augmented Reality",
      "Real-time Try-on",
      "Footwear"
    ],
    "caseStudy": {
      "label": "PROJECT CASE STUDY · PROPOSAL-INFORMED",
      "sections": [
        {
          "title": "Problem",
          "text": "Shoppers cannot judge the appearance of shoes on their own feet from product photographs alone. Shared physical try-ons also create a need for contact-free visual previews."
        },
        {
          "title": "Objective & approach",
          "text": "Overlay a 3D shoe on a live camera feed and let shoppers switch styles within the same session. The proposal calls this platform PerfectMatch; it is presented here as FitFoot AR."
        },
        {
          "title": "Prototype & planned features",
          "text": "The proposal reports an existing AR try-on prototype. The supplied interface includes manual measurement entry and a shoe catalog. Computer-vision measurements, arch/shape classification, a database-backed catalog and retailer integration are planned extensions."
        },
        {
          "title": "Proposed technology",
          "text": "DeepAR SDK and .deepar shoe effects for tracking and rendering; WebRTC MediaDevices for camera access; HTML, CSS/SCSS and Bootstrap 5 for the responsive interface."
        },
        {
          "title": "Development & validation",
          "text": "Refine the prototype, prepare shoe effects, implement the catalog backend, develop measurement and recommendation modules, then test across devices and conduct a retailer pilot."
        },
        {
          "title": "Expected outcome & boundaries",
          "text": "Help customers visualize styles before purchase. Better buying confidence and fewer returns are goals to evaluate, not measured results. A virtual preview or size estimate does not establish physical fit. Payments, inventory management and a multi-retailer rollout are outside the proposed phase."
        }
      ]
    }
  },
  {
    "id": "school-mgmt-system",
    "title": "School Management System",
    "category": "Fullstack",
    "icon": "school",
    "description": "Comprehensive management system built with Python and SQL for school academic records, attendance, and administrative workflows.",
    "detailedDescription": "A full-featured educational portal allowing teachers, administrators, and students to manage course registrations, grade books, automated reporting, and tuition status.",
    "tags": [
      "Python",
      "SQL",
      "Database",
      "React"
    ]
  },
  {
    "id": "bioview-3d-system",
    "title": "BioView 3D System",
    "category": "AR / 3D",
    "description": "An interactive 3D anatomy learning application for exploring human organs, anatomical information and guided lessons.",
    "detailedDescription": "An interactive browser-based anatomy learning system that connects 3D organ exploration with structured explanations and practice.",
    "tags": [
      "Three.js",
      "React",
      "3D Anatomy",
      "Interactive Learning"
    ],
    "caseStudy": {
      "label": "PROJECT CASE STUDY · PROPOSAL-INFORMED",
      "sections": [
        {
          "title": "Problem",
          "text": "Textbooks and flat diagrams can make it difficult to understand the shape, internal structure and spatial relationships of human organs."
        },
        {
          "title": "Objective & audience",
          "text": "Support medical students and other anatomy learners with a visual way to explore structures from multiple angles, identify parts and practise anatomical terminology."
        },
        {
          "title": "Experience & scope",
          "text": "The supplied screens show an interactive organ viewer, organ atlas and guided information. The proposal covers nine models: heart, brain, lungs, liver, kidneys, eye, intestine, pancreas and skin. Hotspots, rotation, zoom, isolation, cross-section/wireframe views, quizzes and multilingual content form the documented scope."
        },
        {
          "title": "Proposed technology",
          "text": "React and TypeScript for the interface; Three.js and WebGL for rendering; GLTFLoader for GLB/glTF assets; Blender for model preparation; Tailwind CSS for responsive styling."
        },
        {
          "title": "Development & validation",
          "text": "Prepare anatomical models, build the viewer and hotspots, add visualization modes, languages and quizzes, then refine accessibility, model caching and memory use before integration testing."
        },
        {
          "title": "Expected outcome & boundaries",
          "text": "Make anatomy study more visual and engaging. Learning improvements are intended outcomes, not measured findings. The proposal specifies a web-based 3D application; headset VR support is not established by the supplied material."
        }
      ]
    }
  },
  {
    "id": "ai-text-summarization",
    "title": "AI Text Summarization",
    "category": "AI / Automation",
    "icon": "summarizer",
    "description": "A document summarization project combining text preprocessing, multiple NLP strategies and reviewable shortened output.",
    "detailedDescription": "Intelligent Multi-Strategy NLP-based Text Summarization System: a project exploring extractive, abstractive and hybrid methods, document analysis and measurable evaluation. The showcased interface and the presentation describe different stages of its scope.",
    "tags": [
      "Python",
      "NLP",
      "TF-IDF",
      "DistilBART"
    ],
    "caseStudy": {
      "label": "PROJECT CASE STUDY · PRESENTATION-INFORMED",
      "sections": [
        {
          "title": "Problem",
          "text": "Students, researchers, teachers and professionals spend substantial time reading lengthy papers and reports. Sentence selection can miss context, while generated summaries can be difficult to explain or verify. The project proposes a controlled environment for comparing summarization methods."
        },
        {
          "title": "Aim & intended users",
          "text": "Develop a local Windows summarization application for academic documents, with PDF, DOCX, TXT and direct-text input. The presentation targets offline core processing without cloud APIs, alongside transparent document analysis and export."
        },
        {
          "title": "Proposed summarization strategies",
          "text": "Extractive summarization ranks original sentences with TF-IDF. Abstractive summarization uses DistilBART to generate concise wording. The proposed hybrid pipeline selects relevant text before abstractive refinement, enabling comparison of the three approaches."
        },
        {
          "title": "Showcased workflow & planned extensions",
          "text": "The supplied screenshots show document input, preprocessing, method selection, original-text and removed-sentence review, export controls and history. That interface preserves original wording and uses AI analysis internally. The presentation describes a broader desktop direction with generated summaries, research-paper analysis, multiple-document processing, keywords, semantic redundancy detection and consistency checks; those extensions are not verified by the screenshots."
        },
        {
          "title": "Proposed technology & methodology",
          "text": "Python and CustomTkinter form the proposed desktop application. NLTK handles text processing; scikit-learn provides TF-IDF; Hugging Face Transformers, DistilBART and PyTorch support inference. PDF extraction, python-docx and ReportLab cover document handling and export. Development progresses from ingestion and preprocessing through summarization, document intelligence, evaluation and interface refinement."
        },
        {
          "title": "Evaluation plan & expected outcomes",
          "text": "The presentation proposes ROUGE and BLEU where reference summaries are available, plus compression ratio, processing time and estimated reading-time reduction. Sentence-Transformers and NLI are planned for semantic redundancy and consistency analysis. More explainable summaries and reduced reading effort are intended outcomes; no benchmark scores, measured time savings or completed consistency-validation results are supplied."
        }
      ]
    }
  },
  {
    "id": "computer-explorer-3d",
    "title": "Computer Explorer 3D",
    "category": "AR / 3D",
    "description": "An interactive 3D computer explorer with PC assembly and integrated AI assistance.",
    "detailedDescription": "A guided 3D hardware learning platform linking component inspection, virtual PC assembly and connection checks. Team leader: Salaar Mahdi, as listed in the proposal.",
    "tags": [
      "3D Visualization",
      "PC Assembly",
      "AI Integration"
    ],
    "caseStudy": {
      "label": "PROJECT CASE STUDY · PROPOSAL-INFORMED",
      "sections": [
        {
          "title": "Problem & motivation",
          "text": "Teaching observations in private computer training centres in Tharushah and the wider Naushahro Feroze district, together with university laboratory observations, revealed a gap between naming hardware and understanding where parts fit or how they connect."
        },
        {
          "title": "Objective & audience",
          "text": "Help computing students connect hardware theory with spatial understanding and assembly practice, while giving instructors a repeatable demonstration tool."
        },
        {
          "title": "Prototype & learning workflow",
          "text": "An existing browser prototype is the starting point. The proposed workflow moves from inspecting components to drag-and-drop assembly, prerequisite checks, manual monitor and power connections, and simulated build verification. Labels, immediate feedback, undo, restart and day/night themes support practice."
        },
        {
          "title": "Technology & AI boundaries",
          "text": "React, Next.js, TypeScript, Three.js, React Three Fiber/Drei and local GLB/glTF assets support the web application. Optional Gemini explanations use a server-side API. Explicit application rules—not AI—validate assembly. Blender refinements are planned; Unity is an optional comparison prototype, not a web dependency."
        },
        {
          "title": "Evaluation plan",
          "text": "Test valid and invalid placements, prerequisites, mismatched cables, disconnections, undo and restart. A proposed supervised pilot of approximately 10–15 students would record identification performance, completion time, errors and usability feedback; results are not yet supplied."
        },
        {
          "title": "Expected outcome & boundaries",
          "text": "Deliver a locally runnable, repeatable preparation tool that complements supervised hardware practice. The simulation uses one assumed-compatible build; it does not certify real component compatibility or replace safety training. Operating-system installation, fault missions and examinations are outside scope. Core local practice can run without AI connectivity after setup; AI needs internet access."
        }
      ]
    }
  },
  {
    "id": "chronfit-ar",
    "title": "Chronfit AR",
    "category": "AR / 3D",
    "description": "An AR-based virtual watch try-on application that lets users preview 3D watches on their wrist in real time.",
    "detailedDescription": "A browser-based AR watch try-on experience combining a 3D collection, wrist tracking, visual fitting controls and snapshots. The updated proposal describes the prototype and its planned refinement and evaluation.",
    "tags": [
      "Augmented Reality",
      "3D Watches",
      "Virtual Try-on",
      "Wrist Tracking"
    ],
    "caseStudy": {
      "label": "PROJECT CASE STUDY · PROPOSAL-INFORMED",
      "sections": [
        {
          "title": "Problem",
          "text": "Static watch photographs do not show how a design looks on an individual wrist. In AR, unstable tracking, incorrect scale, poor alignment and visible rear strap sections can also make a preview unconvincing."
        },
        {
          "title": "Objective & experience",
          "text": "Provide a browser-based virtual watch try-on that keeps the selected model consistent between the catalog, 3D preview and live camera view, with controls for visual fitting and customization."
        },
        {
          "title": "Documented prototype & scope",
          "text": "The updated proposal describes twelve FBX watch models: eleven generated models and one imported model. Its workflow combines hand landmarks, automatic alignment, motion smoothing, approximate wrist masking and rear-strap clipping. Supported material and lighting options, manual position/fit controls and snapshots complete the experience."
        },
        {
          "title": "Size guidance",
          "text": "Users can enter wrist width or circumference, or estimate width from a photograph calibrated with a ruler. These inputs support approximate case-size suggestions; they do not verify bracelet fit, exact product dimensions or physical fitting accuracy."
        },
        {
          "title": "Technology & development",
          "text": "JavaScript and HTML/CSS support the interface; Three.js and FBXLoader render the watches; MediaPipe Hands supplies tracking landmarks. Browser camera APIs, Canvas and WebGL combine video and 3D rendering. The proposal includes Blender for asset preparation and Node.js/webpack for development, builds and testing."
        },
        {
          "title": "Evaluation & expected outcomes",
          "text": "The proposed refinement plan covers model identity, wrist alignment, masking, permission handling, hand loss and camera restart. Compatibility and usability checks would examine different devices, lighting, backgrounds and hand positions. Stable tracking and responsive rendering are evaluation goals; measured performance results are not supplied."
        }
      ]
    }
  },
  {
    "id": "wordpress-frontend-projects",
    "title": "WordPress Frontend Projects",
    "category": "Frontend",
    "icon": "globe",
    "description": "Custom designed frontend themes, corporate landing pages, and customized client web solutions.",
    "detailedDescription": "Collection of tailored corporate websites, landing page conversion designs, custom CSS styling, and responsive elementor/Gutenberg layouts.",
    "tags": [
      "WordPress",
      "CSS3",
      "PHP",
      "Web Design"
    ]
  },
  {
    "id": "tomato-care",
    "title": "Tomato Care",
    "category": "AI / Automation",
    "description": "An AI-assisted tomato leaf analysis and care application designed to identify possible diseases from photos and explain practical next steps.",
    "detailedDescription": "An AI-assisted tomato leaf analysis and care-guidance application designed to connect local classification with understandable reports and optional multimodal AI explanations.",
    "tags": [
      "Python",
      "React",
      "FastAPI",
      "TensorFlow",
      "Computer Vision"
    ],
    "caseStudy": {
      "label": "PROJECT CASE STUDY · PROPOSAL-INFORMED",
      "sections": [
        {
          "title": "Problem",
          "text": "Tomato leaf spots, yellowing and curling can have similar-looking causes. A predicted label alone does not explain what symptoms mean or what to do next, leaving growers and learners to search across multiple sources."
        },
        {
          "title": "Objective & audience",
          "text": "Give growers, home gardeners and agricultural learners a single place to upload a leaf photograph, review suspected conditions and understand practical care steps."
        },
        {
          "title": "Proposed workflow & features",
          "text": "Validate a JPG, PNG or WebP photo, accept optional symptom notes and region information, then offer local CNN, Gemini or OpenAI analysis. Reports are designed to cover visible symptoms, possible causes, immediate actions, prevention and follow-up. Supporting features include a disease library, the latest 30 reports in browser storage, care checklists, downloads and printing."
        },
        {
          "title": "Model & language scope",
          "text": "The local classifier covers bacterial spot, early blight, healthy leaves, late blight, leaf mold, mosaic virus, Septoria leaf spot and yellow leaf curl virus. Optional cloud reports support English and Roman Urdu and provider-supported web research. Local care notes remain in English; model scores are not confirmed disease probabilities."
        },
        {
          "title": "Proposed technology & evaluation",
          "text": "React provides the interface; Python, FastAPI/Uvicorn and TensorFlow/tf-keras handle local inference. Pillow and NumPy prepare images, while HTTPX and Pydantic support provider requests and report validation. The plan includes held-out model evaluation, error analysis, integration tests and performance review; no measured accuracy results are supplied."
        },
        {
          "title": "Expected outcome & boundaries",
          "text": "Deliver a locally runnable analysis and care-guidance application with a Windows launcher and server-side API configuration. Cloud analysis needs internet access and a valid API key. The project offers suspected conditions rather than confirmed diagnoses; laboratory confirmation, pesticide-dose prescribing and farm automation are outside scope."
        }
      ]
    }
  }
];
