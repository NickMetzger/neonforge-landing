# 🌌 NeonForge Pre-Launch Landing Page

Welcome to the official landing page for **NeonForge** — a ritual-infused decentralized ecosystem blending blockchain, lore, and immersive technology.

This page serves as the gateway to the Forge. It is where users, builders, and validators will begin their journey.

---

## ✨ Project Overview

- **Domain**: [https://neonforge.network](https://neonforge.network)
- **Stack**: Next.js (App Router), Tailwind CSS, PM2, Supabase, Nginx
- **Hosted On**: DigitalOcean in VPC alongside NFChain infrastructure
- **Managed With**: PM2 and Nginx reverse proxy
- **Live Now**: ✅

---

## 📦 Features

- 🔥 Immersive landing UI with lore and visual identity
- 🧠 App Router architecture (Next.js 15+)
- 🌐 Deployed on Droplet with full HTTPS (via Cloudflare DNS)
- 💾 Supabase integration for user signups and ritual tracking (coming soon)
- 🧭 Integrated with NFChain ecosystem
- 🦊 Guided by **Lumina**, the soul of the Forge

---

## 🚀 Setup Instructions

```bash
npm install
npm run build
npx serve out # Or use pm2 serve out 3000 --name nf-landing
