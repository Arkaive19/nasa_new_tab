# 🌌 NASA New Tab

A personalized browser extension that replaces your blank new tab page with stunning space visuals, powered by the official NASA API and featuring custom canvas animations.

![Project Preview](public/screenshot.png) <!-- Pro-tip: Replace this with a real screenshot path or GIF later! -->

## 🚀 What It Is

This project is a mission guide submission for Hack Club's Stardance. I wanted to dive into the Stardance missions, and the NASA API offered the perfect blend of data and imagery to build something unique.

Instead of staring at a plain, boring white screen every time you open a new tab, this extension transforms your browser into a gateway to space exploration.

## ✨ Features & Upgrades

This project served as a creative warmup where I focused on elevating the default layout with a modern, dark-themed aesthetic:

- **Drifting Blocks Animation:** Added a custom, smooth background particle animation of floating blocks to give the page depth.
- **Modern UI Styling:** Redesigned the interface from scratch, replacing the default plain look with a sleek, space-inspired dark theme.
- **NASA API Integration:** Fetches and displays dynamic space imagery and mission data directly on your screen.

## 🛠️ Built With

- **Framework:** React / Vite
- **Styling:** CSS / HTML5 Canvas (for background animations)
- **Data Source:** NASA Open APIs

## 💻 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org) installed.

### Installation

1. Clone this repository to your local directory.
2. Navigate into the project folder:
   ```bash
   cd ~/Projects/Xenogenous/newTab
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the local development server:
   ```bash
   npm run dev
   ```

### Loading into your Browser

To test this as a live browser extension:

1. Run `npm run build` to generate the production files.
2. Open your browser and navigate to the Extensions page (`chrome://extensions` or `edge://extensions`).
3. Enable **Developer mode** (usually a toggle in the top right corner).
4. Click **Load unpacked** and select the `dist` folder generated inside this directory.
