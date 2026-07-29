# 📓 English Master Binder

A custom-built, highly stylized digital notebook for mastering English grammar and vocabulary. 

Instead of a generic blog layout, this project was designed from the ground up to perfectly mimic the aesthetic of a **physical student binder**—complete with graph paper backgrounds, spiral binding holes, red margin lines, and realistic handwriting typography.

## ✨ The Aesthetic & UX
I wanted my digital notes to feel like real, tactile study materials. To achieve this, the UI features:
- **Notebook Paper Simulation:** Procedurally generated CSS graph paper (`bg-[size:24px_24px]`) mapped against a dark slate "desk" background.
- **Handwriting Typography:** Leveraging the Google `Caveat` font to simulate blue ink notes, contrasting beautifully with the `Inter` font used for standard UI elements.
- **Marker Highlights:** Custom CSS classes that simulate realistic yellow and green highlighter strokes over text.
- **Instant Local Search:** Powered by **Pagefind**, allowing me to instantly search across all my grammar rules and vocabulary without a backend database.

## 🛠️ Tech Stack
This project leverages a modern, ultra-fast static site architecture:
- **Framework:** [Astro](https://astro.build/) (v5)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Content:** [MDX](https://mdxjs.com/) & Astro Content Collections
- **Search:** [Pagefind](https://pagefind.app/)
- **Package Manager:** Bun

## ✍️ Custom MDX Workflow
To keep the aesthetic perfectly consistent without having to write raw HTML every time I take a note, I built a custom **MDX Component Library**. 

When I learn a new English topic, I simply create a new `.mdx` file and use my custom tags:

```mdx
---
title: "Present Unreal Conditionals"
date: "15 | 07 | 26"
tags: ["Grammar", "Conditionals"]
description: "Used to imagine a different present reality."
vocab:
  - term: "Conditional"
    def: "a sentence expressing a condition and its consequence"
---
import RuleBox from '../../components/mdx/RuleBox.astro';
import Highlight from '../../components/mdx/Highlight.astro';

<RuleBox title="The Golden Rule">
  Always use <Highlight color="yellow">were</Highlight> for ALL subjects in the "if" clause.
</RuleBox>
```
The application dynamically parses this frontmatter to generate the left sidebar (Tags & Vocabulary) and renders the MDX into beautifully styled notebook blocks on the right. Standard Markdown tables and quotes are automatically upgraded by global CSS to fit the notebook theme.

## 🚀 Running Locally

Want to explore the binder? You can run it locally in seconds.

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Start the development server:**
   ```bash
   bun run dev
   ```

3. **Build for production (and generate search index):**
   ```bash
   bun run build
   ```

---
*Built as a personal passion project to merge front-end development skills with language learning.*