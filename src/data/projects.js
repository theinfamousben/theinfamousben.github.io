// Project list for the projects grid
// Each project links to its own Vue page in src/pages/projects/
// To add a new project:
// 1. Create a new Vue file in src/pages/projects/
// 2. Add the route in src/router/index.js
// 3. Add the project info below

export const projects = [
  {
    id: 'mcpkg',
    title: 'mcpkg',
    description:
      'A simple Minecraft Mod Package Manager written in Node.js.',
    tags: ['Node.js', 'JavaScript', 'CLI'],
    emoji: '󰍳',
  },
  {
    id: 'tachyogenesis',
    title: 'Tachyogenesis',
    description: 'A 3D shooter focused on time manipulation and really confusing physics',
    tags: ['Unity', 'C#'],
    emoji: '󰮂',
  },
];
