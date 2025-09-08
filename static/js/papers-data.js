// TacEval papers/sensors data. Update this array to add/edit entries.
// Fields: id, title (sensor/model name), category (use as Mechanism), conference (optional), paperUrl, websiteUrl, description.

window.tacEvalPapers = [
  {
    id: "digit",
    title: "DIGIT",
    category: "IMM",
    conference: "TBD",
    paperUrl: "https://arxiv.org/abs/2005.14679",
    websiteUrl: "#",
    description:
      "Sensing area of 304 mm²; spatial resolution of 0.15 mm; normal force resolution of 6 mN; shear force resolution of 12 mN; sample rate of 60 Hz.",
  },
  {
    id: "omnitact",
    title: "OmniTact",
    category: "IMM",
    conference: "TBD",
    paperUrl: "https://arxiv.org/abs/2003.06965",
    websiteUrl: "#",
    description:
      "Multi-directional sensing with high spatial resolution; achieved 80% success rate in insertion tasks using both top and side cameras, compared to 17% with the OptoForce sensor.",
  },
  {
    id: "9dtact",
    title: "9DTact",
    category: "IMM",
    conference: "TBD",
    paperUrl: "https://arxiv.org/abs/2308.14277",
    websiteUrl: "#",
    description:
      "Sensing area of 432 mm²; accurate 3D shape reconstruction with a mean absolute error (MAE) of 0.0462 mm and standard deviation of 0.0304 mm; generalizable 6D (1D normal, 2D shear, and 3D torque) force estimation capabilities.",
  },
  {
    id: "tactip",
    title: "TacTip",
    category: "MDM",
    conference: "TBD",
    paperUrl: "https://arxiv.org/abs/2105.14455",
    websiteUrl: "#",
    description:
      "High spatial resolution due to use of MegaPixel arrays; temporal resolution typically between 30–120 frames per second; suitable for efficient tactile sensing.",
  },
  {
    id: "chromatouch",
    title: "ChromaTouch",
    category: "IMM",
    conference: "TBD",
    paperUrl: "https://mwiertlewski.github.io/pdf/pub/2020-XL-AB-MW.pdf",
    websiteUrl: "#",
    description:
      "High color-contrast-based deformation tracking; accurate force estimation; suitable for texture recognition tasks.",
  },
  {
    id: "deltact",
    title: "DelTact",
    category: "IMM",
    conference: "TBD",
    paperUrl: "https://arxiv.org/abs/2202.02179",
    websiteUrl: "#",
    description:
      "Capable of providing tactile measurements with low error and high frequency (40 Hz).",
  },
  {
    id: "gelslim-3-0",
    title: "GelSlim 3.0",
    category: "IMM",
    conference: "TBD",
    paperUrl: "https://arxiv.org/abs/2103.12269",
    websiteUrl: "#",
    description:
      "Sensing area of 675 mm²; capable of measuring high-resolution shape, estimating 3D contact force distribution, and detecting incipient slip.",
  },
  {
    id: "densetact-2-0",
    title: "DenseTact 2.0",
    category: "IMM",
    conference: "TBD",
    paperUrl: "https://arxiv.org/abs/2209.10122",
    websiteUrl: "#",
    description:
      "Shape reconstruction accuracy: 0.3633 mm per pixel; force measurement accuracy: 0.410 N; torque measurement accuracy: 0.387 N·m.",
  },
  {
    id: "uvtac",
    title: "UVTac",
    category: "IMM",
    conference: "TBD",
    paperUrl: "https://ieeexplore.ieee.org/document/9745352/",
    websiteUrl: "#",
    description:
      "Utilizes ultraviolet (UV) illumination to enhance contrast in tactile sensing; specific quantitative performance metrics are not provided in the available sources.",
  },
  {
    id: "fingervision",
    title: "FingerVision",
    category: "MDM",
    conference: "TBD",
    paperUrl: "https://www.cs.cmu.edu/~cga/papers/fingervision.pdf",
    websiteUrl: "#",
    description:
      "Combines vision-based tactile sensing with high-speed cameras; capable of detecting slip and estimating contact forces; specific quantitative performance metrics are not provided in the available sources.",
  },
  {
    id: "vitactip",
    title: "ViTacTip",
    category: "MDM+MFM",
    conference: "TBD",
    paperUrl: "https://arxiv.org/abs/2402.00199",
    websiteUrl: "#",
    description:
      "Grating identification accuracy: 99.72%; pose estimation error: 0.08 mm; force estimation error: 0.03 N.",
  },
  {
    id: "spectac",
    title: "SpecTac",
    category: "IMM+MFM",
    conference: "TBD",
    paperUrl: "https://ieeexplore.ieee.org/document/9812348/",
    websiteUrl: "#",
    description:
      "Utilizes ultraviolet (UV) illumination to enhance contrast in tactile sensing; specific quantitative performance metrics are not provided in the available sources.",
  },
  {
    id: "sts",
    title: "STS",
    category: "IMM+MFM",
    conference: "TBD",
    paperUrl: "https://arxiv.org/abs/2011.09552",
    websiteUrl: "#",
    description:
      "Employs a translucent coating and adjustable lighting to enable transition between tactile and visual sensing modalities; specific quantitative performance metrics are not provided in the available sources.",
  },
  {
    id: "vistact",
    title: "VisTac",
    category: "IMM+MFM",
    conference: "TBD",
    paperUrl: "https://ieeexplore.ieee.org/document/10242327",
    websiteUrl: "#",
    description:
      "Integrates visual and tactile sensing modalities; specific quantitative performance metrics are not provided in the available sources.",
  },
  {
    id: "tirgel",
    title: "TIRgel",
    category: "IMM+MFM",
    conference: "TBD",
    paperUrl:
      "https://www.researchgate.net/publication/373227157_TIRgel_A_Visuo-Tactile_Sensor_with_Total_Internal_Reflection_Mechanism_for_External_Observation_and_Contact_Detection",
    websiteUrl: "#",
    description:
      "Utilizes total internal reflection for contact detection; specific quantitative performance metrics are not provided in the available sources.",
  },
  {
    id: "hivtac",
    title: "HiVTac",
    category: "IMM+MFM",
    conference: "TBD",
    paperUrl:
      "https://openreview.net/forum?id=lkKUuOvsdX&referrer=%5Bthe+profile+of+Masahiro+Hirano%5D%28%2Fprofile%3Fid%3D%7EMasahiro_Hirano1%29",
    websiteUrl: "#",
    description:
      "Force magnitude estimation error: 0.0098 N; force direction estimation error: 0.32°; sampling rate: 100 Hz; processing frequency: 1.3 kHz.",
  },
  {
    id: "minsight",
    title: "Minsight",
    category: "IMM+MFM",
    conference: "TBD",
    paperUrl: "https://arxiv.org/abs/2304.10990",
    websiteUrl: "#",
    description:
      "Force magnitude estimation error: 0.07 N; contact location error: 0.6 mm; sampling rate: 60 Hz.",
  },
  {
    id: "insight",
    title: "Insight",
    category: "IMM+MFM",
    conference: "TBD",
    paperUrl: "https://www.nature.com/articles/s42256-021-00439-3",
    websiteUrl: "#",
    description:
      "Sensing area: 4,800 mm²; force magnitude estimation error: 0.03 N; shear force error: 0.03 N; angle error: 5°; ResNet-based force mapping.",
  },
  {
    id: "gelforce",
    title: "GelForce",
    category: "IMM+MDM",
    conference: "TBD",
    paperUrl: "#",
    websiteUrl: "#",
    description:
      "Capable of measuring both normal and shear forces; specific quantitative performance metrics are not provided in the available sources.",
  },
  {
    id: "dtact",
    title: "DTact",
    category: "IMM",
    conference: "TBD",
    paperUrl: "https://arxiv.org/abs/2209.13916",
    websiteUrl: "#",
    description:
      "Capable of high-resolution 3D geometry measurement; robust under various illumination conditions; easy fabrication process; specific quantitative performance metrics are not provided in the available sources.",
  },
  {
    id: "thintact",
    title: "ThinTact",
    category: "IMM",
    conference: "TBD",
    paperUrl: "https://arxiv.org/abs/2501.09273",
    websiteUrl: "#",
    description:
      "Thickness: less than 10 mm; sensing area: over 200 mm²; utilizes lensless imaging technique; real-time tactile sensing capabilities.",
  },
]; 