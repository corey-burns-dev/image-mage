# Image Mage — The Ultimate Web Image Toolkit

**Image Mage** is a powerful, privacy-focused web application for batch image conversion and compression. Built with **Next.js 15**, it provides a seamless experience for optimizing your visual assets with professional-grade controls—all directly in your browser.

## ✨ Features

- 🚀 **Batch Processing**: Drag-and-drop multiple files and process them all at once.
- 🔄 **Universal Conversion**: Seamlessly convert between `WebP`, `AVIF`, `JPEG`, `PNG`, `TIFF`, and `GIF`.
- 💎 **Smart Compression**: Use intelligent presets (`Tiny`, `Small`, `Balanced`, `Crisp`) or set custom quality targets.
- 🎯 **Target Size Mode**: Set a specific file size (KB) and let Image Mage find the optimal quality settings.
- 📏 **Advanced Resizing**: Pro-level controls for resizing (`Inside`, `Cover`, `Contain`) and metadata management.
- 📦 **Effortless Exports**: Download individual files or a combined ZIP for batch jobs.
- 🔒 **Privacy First**: All processing happens on the edge or in-browser. Your images never sit on a server.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI & Logic**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Engine**: Sharp (Edge-compatible)
- **Deployment**: Cloudflare Workers via OpenNext

## 🚀 Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to start optimizing.

## 📦 Scripts

- `bun run dev`: Start development server.
- `bun run build`: Build for production.
- `bun run deploy`: Deploy to Cloudflare.
- `bun run lint`: Run linting checks.
