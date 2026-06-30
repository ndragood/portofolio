# Cyber Security Portfolio Website

## Project Overview

Build a modern, professional Cyber Security Portfolio website for a Cyber Security student.

The website should showcase:

* Personal profile
* Technical skills
* Cyber security projects
* Certifications
* Security writeups
* Contact information

The design should combine the aesthetics of a Security Operations Center (SOC) dashboard with a professional security consultant portfolio.

The goal is to create a portfolio that is attractive to recruiters, hiring managers, and cyber security professionals.

---

# Design Principles

* Professional
* Modern
* Technical
* Minimalist
* Fast
* Responsive
* Accessible

Avoid excessive hacker-style effects.

Focus on credibility and professionalism.

---

# Visual Identity

## Color Palette

### Background

```css
#0A0E17
```

### Primary

```css
#00FFB2
```

### Secondary

```css
#00D4FF
```

### Accent

```css
#FF4D4D
```

### Text

```css
#FFFFFF
```

---

# Pages

## Home

### Hero Section

Display:

* Name
* Cyber Security Student
* Professional tagline

Example:

> Focused on Security Operations, Network Security, Threat Detection, and Ethical Hacking.

CTA Buttons:

* View Projects
* Download CV

---

### Quick Stats

Display cards for:

* Projects Completed
* CTF Challenges Solved
* Certificates Earned
* Years Learning IT

---

### Featured Skills

Display:

* Linux
* Python
* Networking
* Nmap
* Wireshark
* Burp Suite
* Docker
* SIEM

---

### Featured Projects

Display top 3 projects.

Each card should include:

* Title
* Description
* Technology Stack
* View Details

---

## About

Display:

* Profile Photo
* Biography
* Education
* Career Goals
* Learning Journey

---

## Skills

### Security

* Nmap
* Wireshark
* Burp Suite
* Metasploit
* OWASP Top 10

### Networking

* TCP/IP
* DNS
* Routing
* Switching

### Programming

* Python
* JavaScript
* TypeScript
* Bash

### Infrastructure

* Linux
* Docker
* Git
* Cloud Fundamentals

---

## Projects

Each project page should contain:

### Overview

Project summary.

### Problem

Problem statement.

### Solution

Implemented solution.

### Technologies Used

List technologies.

### Screenshots

Project images.

### Links

* GitHub Repository
* Live Demo

### Lessons Learned

Key takeaways.

---

### Suggested Projects

* Network Scanner
* Vulnerability Scanner
* Log Analyzer
* Packet Analyzer
* Password Strength Analyzer
* SOC Dashboard
* CTF Writeups

---

## Certifications

Display certifications in card format.

Fields:

* Certificate Name
* Provider
* Issue Date
* Credential URL
* Status

---

## Writeups

Categories:

### CTF Writeups

* TryHackMe
* Hack The Box

### Security Notes

* Nmap
* Wireshark
* Linux Hardening

### Research

* CVE Analysis
* OWASP Top 10
* Threat Intelligence

---

## Contact

### Contact Form

Fields:

* Name
* Email
* Message

Validation:

* Required fields
* Email validation

### Social Links

* GitHub
* LinkedIn
* Email
* Instagram

---

# Advanced Features

## Security Dashboard Widget

Display mock statistics:

* Threats Blocked
* Logs Processed
* Alerts Reviewed
* Systems Monitored

---

## Interactive Terminal

Supported commands:

```bash
help
about
skills
projects
contact
clear
```

---

## Resume Download

Allow users to:

* Download CV
* View CV

---

# Technical Requirements

## Performance

* Lighthouse Score > 90
* First Contentful Paint < 2 seconds
* Optimized image loading
* Lazy loading where appropriate

---

## Responsiveness

Support:

* Mobile (320px+)
* Tablet (768px+)
* Desktop (1024px+)

Use Mobile First Design.

---

## Accessibility

* Semantic HTML
* Keyboard Navigation
* ARIA Labels
* WCAG Compliance

---

## SEO

Implement:

* Meta Title
* Meta Description
* Open Graph
* Sitemap.xml
* Robots.txt

---

## Security

* HTTPS Only
* Secure Headers
* Form Validation
* Input Sanitization

---

## Maintainability

* Reusable Components
* Clean Architecture
* Type Safety
* Modular Folder Structure

---

# Tech Stack

## Frontend

* Next.js 15
* React 19
* TypeScript

---

## Styling

* Tailwind CSS
* shadcn/ui

---

## Animation

* Framer Motion

---

## Icons

* Lucide React

---

## State Management

* Zustand

---

## Forms & Validation

* React Hook Form
* Zod

---

## Development Tools

* ESLint
* Prettier

---

## Deployment

* Vercel

---

## Version Control

* Git
* GitHub

---

## Analytics

* Vercel Analytics

---

## Optional Integrations

### Blog CMS

* Contentlayer

### Authentication

* Clerk

### Email Service

* Resend

---

# Folder Structure

```text
src/
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   └── shared/
├── data/
├── lib/
├── hooks/
├── types/
├── styles/
└── content/
```

---

# Definition of Done

A feature is considered complete when:

* Fully responsive
* Accessible
* No critical bugs
* Lighthouse Score > 90
* Successfully deployed
* Source code pushed to GitHub
* TypeScript passes validation
* ESLint passes without errors

```
```
