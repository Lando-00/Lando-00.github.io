export type Project = {
  title: string;
  eyebrow: string;
  status: string;
  year: string;
  summary: string;
  stack: string[];
  repo?: string;
  highlights: string[];
  artifact: {
    type: "terminal" | "commands" | "network" | "chart" | "tiles";
    label: string;
    lines: string[];
  };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Tether",
    eyebrow: "Local AI systems",
    status: "Active development",
    year: "2026",
    summary:
      "A local-first FastAPI service for streaming chat completions from on-device LLMs, with function calling, persistent sessions, and config-driven tools.",
    stack: ["Python", "FastAPI", "SQLite", "MLC-LLM", "MCP"],
    repo: "https://github.com/Lando-00/Tether",
    highlights: [
      "Streams NDJSON/SSE chat events from local models",
      "Keeps session history in SQLite",
      "Explores tool calling and connector-style personal automations"
    ],
    artifact: {
      type: "terminal",
      label: "local stream",
      lines: ["POST /chat/stream", "message_start", "tool_call: weather", "text_delta: local", "message_stop"]
    },
    featured: true
  },
  {
    title: "IronTrail",
    eyebrow: "Fitness data dashboard",
    status: "New project",
    year: "2026",
    summary:
      "A local-first Hevy workout dashboard that turns exported training CSVs into Streamlit analytics, achievement tracking, plateau detection, and Markdown writeback for Obsidian.",
    stack: ["Python", "Streamlit", "Pandas", "Plotly", "scikit-learn", "Obsidian"],
    repo: "https://github.com/Lando-00/Iron-Trail",
    highlights: [
      "Builds five dashboard pages from local Hevy CSV exports",
      "Adds K-Means session archetypes, badges, plateau watch, and Hall of Shame callouts",
      "Writes daily workout notes back into an Obsidian-compatible vault"
    ],
    artifact: {
      type: "chart",
      label: "training signal",
      lines: ["tonnage", "e1RM", "plateau", "badges", "vault"]
    },
    featured: true
  },
  {
    title: "ZAP",
    eyebrow: "Developer tooling",
    status: "Public utility",
    year: "2025",
    summary:
      "A lightweight Python virtual environment manager for Windows, macOS, and Linux that makes creating, activating, and deleting environments predictable.",
    stack: ["Python", "CLI", "Cross-platform"],
    repo: "https://github.com/Lando-00/zap-python-env-manager",
    highlights: [
      "Zero-dependency command-line workflow",
      "Handles multiple Python versions and architecture variants",
      "Evolved from earlier Windows batch tooling"
    ],
    artifact: {
      type: "commands",
      label: "env flow",
      lines: ["zap list", "zap create 3.12 lab", "zap activate lab", "zap delete old-env"]
    },
    featured: true
  },
  {
    title: "Connectionist Project",
    eyebrow: "Machine learning fundamentals",
    status: "Course project",
    year: "2024",
    summary:
      "A from-scratch multi-layer perceptron implementation for XOR classification, sinusoidal regression, and letter-recognition experiments.",
    stack: ["Python", "NumPy", "MLP", "Backpropagation"],
    repo: "https://github.com/Lando-00/Connectionist_Project",
    highlights: [
      "Implements core neural-network mechanics manually",
      "Trains and evaluates across multiple task shapes",
      "Shows fundamentals beyond framework-level usage"
    ],
    artifact: {
      type: "network",
      label: "mlp pass",
      lines: ["input", "hidden", "bias", "weights", "output"]
    }
  },
  {
    title: "Big Mac Index Visual",
    eyebrow: "Data storytelling",
    status: "Notebook project",
    year: "2024",
    summary:
      "A Jupyter Notebook exploration of Big Mac Index data, focused on turning economic CSV data into clearer visual comparisons.",
    stack: ["Jupyter Notebook", "Python", "Data visualization"],
    repo: "https://github.com/Lando-00/BigMacIndexVisual",
    highlights: [
      "Works with historical Big Mac Index datasets",
      "Explores data cleaning and visual comparison",
      "Adds a data-analysis thread to the portfolio"
    ],
    artifact: {
      type: "chart",
      label: "index spread",
      lines: ["2000", "2008", "2014", "2020", "2024"]
    }
  },
  {
    title: "Cascadia",
    eyebrow: "Team software project",
    status: "Completed",
    year: "2023",
    summary:
      "A Java Swing implementation of the Cascadia board game, built as a three-person software engineering project with Scrum and GitHub collaboration.",
    stack: ["Java", "Java Swing", "Scrum", "GitHub"],
    highlights: [
      "Led a three-person implementation team",
      "Built a graphical board-game interface",
      "Practiced version control and delivery ceremonies"
    ],
    artifact: {
      type: "tiles",
      label: "board state",
      lines: ["forest", "river", "elk", "hawk", "trail", "fox"]
    }
  }
];
