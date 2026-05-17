import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

const expectedFiles = [
  "index.html",
  "gallery.html",
  "gallery/index.html",
  "favicon.svg",
  "Images/WA001.jpg",
  "Images/WA003.jpg",
  "Images/WA004.jpg",
  "Images/WA005.jpg",
  "Images/WA006.jpg",
  "Images/WA007.jpg",
  "Images/WA008.jpg",
  "Images/WA009.jpg",
  "Images/WA0010.jpg",
  "Images/WA0011.jpg"
];

const checks = [
  {
    name: "dist directory exists",
    pass: () => existsSync(dist)
  },
  ...expectedFiles.map((file) => ({
    name: `${file} exists`,
    pass: () => existsSync(join(dist, file))
  })),
  {
    name: "homepage includes current positioning",
    pass: () => read(join(dist, "index.html")).includes("developer who turns rough ideas into useful systems")
  },
  {
    name: "homepage includes featured projects",
    pass: () => read(join(dist, "index.html")).includes("Featured projects")
  },
  {
    name: "homepage includes IronTrail project",
    pass: () => {
      const html = read(join(dist, "index.html"));
      return html.includes("IronTrail") && html.includes("https://github.com/Lando-00/Iron-Trail");
    }
  },
  {
    name: "homepage does not include AgentOS-lite",
    pass: () => {
      const html = read(join(dist, "index.html"));
      return !html.includes("AgentOS-lite") && !html.includes("AgentOs-lite");
    }
  },
  {
    name: "project cards support cursor-follow spotlight",
    pass: () => {
      const html = read(join(dist, "index.html"));
      return html.includes("data-spotlight-card") && html.includes("--spotlight-x");
    }
  },
  {
    name: "projects render as an interactive card deck",
    pass: () => {
      const html = read(join(dist, "index.html"));
      return html.includes("data-project-deck")
        && html.includes("data-project-tab")
        && html.includes("data-project-panel")
        && html.includes('role="tablist"')
        && html.includes("pointerenter")
        && !html.includes('addEventListener("wheel"');
    }
  },
  {
    name: "project artifacts render for every project type",
    pass: () => {
      const html = read(join(dist, "index.html"));
      return ["terminal", "commands", "network", "chart", "tiles"].every((type) =>
        html.includes(`data-artifact="${type}"`)
      );
    }
  },
  {
    name: "deck progress controls render without scroll hijacking",
    pass: () => {
      const html = read(join(dist, "index.html"));
      return html.includes("data-deck-progress")
        && html.includes("data-deck-status")
        && html.includes("--deck-progress")
        && html.includes("Page scroll stays normal")
        && !html.includes("event.preventDefault();\n          wheelLocked");
    }
  },
  {
    name: "homepage links to gallery route",
    pass: () => read(join(dist, "index.html")).includes('href="/gallery/"')
  },
  {
    name: "gallery has real home navigation",
    pass: () => read(join(dist, "gallery/index.html")).includes('href="/"')
  },
  {
    name: "legacy gallery.html redirects to gallery route",
    pass: () => read(join(dist, "gallery.html")).includes("url=/gallery/")
  },
  {
    name: "gallery avoids history back behavior",
    pass: () => !read(join(dist, "gallery/index.html")).includes("history.back")
  },
  {
    name: "gallery images have descriptive alt text",
    pass: () => !read(join(dist, "gallery/index.html")).includes('alt="Photo ')
  },
  {
    name: "built output has no oversized HTML files",
    pass: () => collectFiles(dist, ".html").every((file) => statSync(file).size < 150_000)
  }
];

let failed = 0;

for (const check of checks) {
  try {
    if (check.pass()) {
      console.log(`PASS ${check.name}`);
    } else {
      failed += 1;
      console.error(`FAIL ${check.name}`);
    }
  } catch (error) {
    failed += 1;
    console.error(`FAIL ${check.name}`);
    console.error(error instanceof Error ? error.message : String(error));
  }
}

if (failed > 0) {
  process.exitCode = 1;
}

function read(path) {
  return readFileSync(path, "utf8");
}

function collectFiles(directory, extension) {
  const files = [];

  if (!existsSync(directory)) {
    return files;
  }

  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    const stats = statSync(path);

    if (stats.isDirectory()) {
      files.push(...collectFiles(path, extension));
    } else if (path.endsWith(extension)) {
      files.push(path);
    }
  }

  return files;
}
