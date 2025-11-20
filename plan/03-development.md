# Development Plan

## Overview
This document contains detailed development plans for implementing the website structure defined in `02-structure.md`, incorporating insights from the personality analysis in `01-research.md`.

---

## 3.1 Hero Section

### Current Implementation Analysis

**Current Hero Component Location:** `src/screens/Home/Hero/_Hero.tsx`

#### Current State
```tsx
// Current headline
"Hi, I'm Your best partner if you want to build something AWESOME."

// Current subheadline
"With {yearsOfExperience()}+ years of experience creating software solutions, I can make your dreams true."

// Current social links
- LinkedIn: /in/aleejandroreyna
- GitHub: @aleejandroreyna
- Calendly: /aleejandroreyna
```

#### Current Strengths ✅
- Clean, minimal design
- Social links prominently displayed
- Years of experience calculation (dynamic)
- DaisyUI hero component structure
- Responsive layout
- Dark theme (neutral background)

#### Current Weaknesses ❌
- **Generic messaging** - Doesn't reflect "Code Poet" brand
- **Missing personality** - No artistic/creative angle
- **Lacks differentiation** - Could be any developer's hero
- **No visual interest** - Text-only, no animations or visuals
- **Missing key elements** - No tagline, no tech stack showcase, no CTA buttons
- **Doesn't tell story** - No mention of Guatemala, music, or unique qualities
- **Professional only** - Misses the creative/poetic side

---

### Recommended Hero Improvements

Based on the personality analysis and structure recommendations, here's the enhanced Hero section:

#### 1. **Updated Headline & Messaging**

**Primary Headline:**
```
Alejandro Reyna
Code Poet & Full-Stack Developer
```

**Subheadline/Tagline:**
```
I don't just write code that works—I write code that sings.
```

**Supporting Text:**
```
Full-stack developer from Guatemala who approaches programming as an art form. 
Passionate about Python, JavaScript, TypeScript, and Ruby. 
Full-time learner, occasional musician, and advocate for elegant software solutions.
```

**Alternative Headline Options:**
- "Programming code is another way to write poetry with madness"
- "Where Technical Precision Meets Creative Vision"
- "Crafting Elegant Solutions with Code"

#### 2. **Visual Enhancements**

**Background Elements:**
- Subtle animated code snippets forming patterns
- Gradient overlay (deep navy to purple)
- Particle effects or floating code symbols
- Animated typing effect for headline

**Profile Image:**
- Professional headshot with artistic border/frame
- Positioned on right side (desktop) or above text (mobile)
- Subtle hover effects

**Tech Stack Icons:**
Display primary technologies with animated icons:
- Python (Django)
- TypeScript (React)
- JavaScript (Node.js)
- Ruby
- Next.js
- DaisyUI

#### 3. **Call-to-Action Buttons**

**Primary CTA:**
```tsx
<button className="btn btn-primary btn-lg">
  View My Work
  <ArrowRight />
</button>
```
Links to: Portfolio section (#portfolio)

**Secondary CTA:**
```tsx
<button className="btn btn-outline btn-lg">
  Get in Touch
  <Mail />
</button>
```
Links to: Contact section (#contact)

**Tertiary CTA (Optional):**
```tsx
<button className="btn btn-ghost">
  Download Resume
  <Download />
</button>
```

#### 4. **Quick Stats Section**

Display achievements prominently:
```tsx
<div className="stats stats-vertical lg:stats-horizontal shadow">
  <div className="stat">
    <div className="stat-value">86+</div>
    <div className="stat-title">Repositories</div>
  </div>
  <div className="stat">
    <div className="stat-value">246+</div>
    <div className="stat-title">Contributions</div>
  </div>
  <div className="stat">
    <div className="stat-value">4</div>
    <div className="stat-title">Organizations</div>
  </div>
  <div className="stat">
    <div className="stat-value">⭐</div>
    <div className="stat-title">Arctic Code Vault</div>
  </div>
</div>
```

#### 5. **Enhanced Social Links**

Keep current social links but enhance with:
- Hover effects with color transitions
- Tooltips showing full URLs
- Additional links:
  - Twitter: @aleejandroreyna
  - Email: me@alejandroreyna.com
  - Website badge/indicator

**Improved Layout:**
```tsx
<div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
  <a href="https://linkedin.com/in/aleejandroreyna" 
     target="_blank"
     className="btn btn-ghost gap-2 hover:btn-primary transition-all">
    <LinkedinPlain size={24} />
    <span className="hidden sm:inline">LinkedIn</span>
  </a>
  <a href="https://github.com/aleejandroreyna" 
     target="_blank"
     className="btn btn-ghost gap-2 hover:btn-primary transition-all">
    <SiGithub size={24} />
    <span className="hidden sm:inline">GitHub</span>
  </a>
  <a href="https://calendly.com/aleejandroreyna" 
     target="_blank"
     className="btn btn-ghost gap-2 hover:btn-primary transition-all">
    <FontAwesomeIcon icon={faCalendarAlt} />
    <span className="hidden sm:inline">Schedule Call</span>
  </a>
  <a href="mailto:me@alejandroreyna.com" 
     className="btn btn-ghost gap-2 hover:btn-primary transition-all">
    <Mail size={24} />
    <span className="hidden sm:inline">Email</span>
  </a>
</div>
```

#### 6. **Availability Badge**

Show current status:
```tsx
<div className="badge badge-success gap-2">
  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
  Open to Opportunities
</div>
```

Roles seeking:
- Full-Stack Engineer
- Django Developer
- JavaScript/TypeScript Developer

---

### Improved Hero Component Structure

```tsx
export const Hero = () => {
  return (
    <section className="hero min-h-screen bg-gradient-to-br from-neutral to-neutral-focus relative overflow-hidden">
      {/* Background Animation/Effects */}
      <div className="absolute inset-0 opacity-10">
        {/* Animated code snippets or particles */}
      </div>

      <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-7xl mx-auto px-4">
        {/* Profile Image Section */}
        <div className="flex-shrink-0">
          <div className="avatar">
            <div className="w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="/profile.jpg" alt="Alejandro Reyna" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center lg:text-left">
          {/* Availability Badge */}
          <div className="mb-4">
            <div className="badge badge-success gap-2">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              Open to Opportunities
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Alejandro Reyna
          </h1>

          {/* Tagline */}
          <h2 className="text-2xl lg:text-4xl font-semibold mb-6 text-base-content">
            Code Poet & Full-Stack Developer
          </h2>

          {/* Philosophy Statement */}
          <p className="text-xl lg:text-2xl mb-6 text-base-content/80 italic">
            "I don't just write code that works—I write code that sings."
          </p>

          {/* Description */}
          <p className="text-lg mb-8 text-base-content/70 max-w-2xl">
            Full-stack developer from Guatemala who approaches programming as an art form. 
            Passionate about Python, JavaScript, TypeScript, and Ruby. 
            Full-time learner, occasional musician, and advocate for elegant software solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
            <a href="#portfolio" className="btn btn-primary btn-lg gap-2">
              View My Work
              <ArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline btn-lg gap-2">
              Get in Touch
              <Mail />
            </a>
            <a href="/resume.pdf" className="btn btn-ghost gap-2">
              Download Resume
              <Download />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start mb-8">
            {/* Social links as shown above */}
          </div>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
            <div className="tooltip" data-tip="Python/Django">
              <SiPython size={32} className="hover:scale-110 transition-transform" />
            </div>
            <div className="tooltip" data-tip="TypeScript">
              <SiTypescript size={32} className="hover:scale-110 transition-transform" />
            </div>
            <div className="tooltip" data-tip="React">
              <SiReact size={32} className="hover:scale-110 transition-transform" />
            </div>
            <div className="tooltip" data-tip="Node.js">
              <SiNodedotjs size={32} className="hover:scale-110 transition-transform" />
            </div>
            <div className="tooltip" data-tip="Next.js">
              <SiNextdotjs size={32} className="hover:scale-110 transition-transform" />
            </div>
            <div className="tooltip" data-tip="Ruby">
              <SiRuby size={32} className="hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
        <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-200/80 backdrop-blur-sm w-full">
          <div className="stat place-items-center">
            <div className="stat-value text-primary">86+</div>
            <div className="stat-title">Repositories</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-value text-secondary">246+</div>
            <div className="stat-title">Contributions</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-value text-accent">4</div>
            <div className="stat-title">Organizations</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-value">⭐</div>
            <div className="stat-title">Arctic Code Vault</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-base-content/50" />
      </div>
    </section>
  );
};
```

---

### Animation Recommendations

#### 1. **Typing Effect for Headline**
Use a library like `react-type-animation` or create custom typing effect:
```tsx
<TypeAnimation
  sequence={[
    'Code Poet',
    2000,
    'Full-Stack Developer',
    2000,
    'Technology Evangelist',
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
/>
```

#### 2. **Fade-in Animations**
Stagger animations for different elements:
```tsx
// Using Framer Motion (recommended)
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  {/* Content */}
</motion.div>
```

#### 3. **Icon Hover Effects**
```css
.tech-icon {
  transition: all 0.3s ease;
}

.tech-icon:hover {
  transform: scale(1.2) rotate(5deg);
  filter: drop-shadow(0 0 10px currentColor);
}
```

#### 4. **Background Particles**
Use `react-particles` or `tsparticles` for subtle code-themed particles:
- Floating brackets: `{ } [ ] < >`
- Semicolons and operators
- Very subtle, low opacity

---

### Responsive Design Considerations

#### Mobile (< 768px)
- Stack content vertically
- Profile image above text
- Smaller font sizes
- Full-width buttons
- Stats in vertical layout
- Hide some secondary elements

#### Tablet (768px - 1024px)
- Side-by-side layout begins
- Medium font sizes
- Horizontal stats
- Show all elements

#### Desktop (> 1024px)
- Full side-by-side layout
- Large, impactful typography
- All animations and effects
- Maximum visual impact

---

### Accessibility Improvements

1. **Semantic HTML**
   - Use proper heading hierarchy (h1 for name)
   - ARIA labels for icon-only buttons
   - Alt text for profile image

2. **Keyboard Navigation**
   - All interactive elements focusable
   - Visible focus indicators
   - Skip to content link

3. **Screen Reader Support**
   - Descriptive link text
   - ARIA labels for decorative elements
   - Proper heading structure

4. **Color Contrast**
   - Ensure WCAG AA compliance
   - Test with contrast checker
   - Provide sufficient contrast for all text

---

### Performance Optimization

1. **Image Optimization**
   - Use Next.js Image component
   - Lazy load below-fold content
   - Optimize profile image (WebP format)

2. **Animation Performance**
   - Use CSS transforms (GPU-accelerated)
   - Limit particle count on mobile
   - Use `will-change` sparingly

3. **Code Splitting**
   - Lazy load animation libraries
   - Dynamic imports for heavy components

---

### Content Updates Needed

#### New Assets Required
1. **Profile Image**
   - Professional headshot
   - High resolution (at least 512x512)
   - Optimized for web (WebP format)

2. **Resume PDF**
   - Updated with latest experience
   - Downloadable from hero CTA

3. **Icons**
   - Ensure all tech stack icons are imported
   - Add any missing social icons

#### Copy Updates
- Update years of experience calculation
- Ensure all links are correct
- Add email address
- Verify social media URLs

---

### Implementation Checklist

#### Phase 1: Structure & Content
- [ ] Update headline to "Code Poet & Full-Stack Developer"
- [ ] Add philosophy statement: "I write code that sings"
- [ ] Add extended bio with Guatemala, music mentions
- [ ] Add availability badge
- [ ] Update social links with enhanced styling

#### Phase 2: Visual Enhancements
- [ ] Add profile image with ring styling
- [ ] Implement gradient background
- [ ] Add tech stack icons with tooltips
- [ ] Create stats section with DaisyUI stats component
- [ ] Add scroll indicator

#### Phase 3: Interactive Elements
- [ ] Add CTA buttons (View Work, Contact, Resume)
- [ ] Implement hover effects on social links
- [ ] Add icon hover animations
- [ ] Implement typing animation for tagline

#### Phase 4: Advanced Features
- [ ] Add background particles/code snippets
- [ ] Implement fade-in animations with Framer Motion
- [ ] Add smooth scroll to sections
- [ ] Optimize for mobile responsiveness

#### Phase 5: Polish
- [ ] Test accessibility with screen reader
- [ ] Verify keyboard navigation
- [ ] Check color contrast
- [ ] Optimize images and performance
- [ ] Cross-browser testing

---

### Code Dependencies to Add

```bash
# Animation libraries
npm install framer-motion
npm install react-type-animation

# Additional icons (if needed)
npm install lucide-react  # For ArrowRight, Mail, Download, ChevronDown

# Particles (optional)
npm install @tsparticles/react @tsparticles/slim
```

---

### Testing Checklist

#### Visual Testing
- [ ] Desktop (1920px, 1440px, 1280px)
- [ ] Tablet (1024px, 768px)
- [ ] Mobile (414px, 375px, 320px)
- [ ] Dark mode appearance
- [ ] Light mode appearance (if implemented)

#### Functional Testing
- [ ] All links work correctly
- [ ] CTAs navigate to correct sections
- [ ] Social links open in new tabs
- [ ] Resume downloads successfully
- [ ] Animations perform smoothly
- [ ] No layout shifts (CLS)

#### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] Color contrast passes WCAG AA
- [ ] Focus indicators visible
- [ ] Alt text present on images

#### Performance Testing
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s
- [ ] No console errors
- [ ] Smooth 60fps animations

---

### Success Metrics

#### User Engagement
- Time spent on hero section
- CTA click-through rate
- Social link clicks
- Resume downloads

#### Technical Metrics
- Lighthouse performance score
- Core Web Vitals (LCP, FID, CLS)
- Mobile vs desktop engagement
- Bounce rate from hero

---

### Next Steps After Hero Completion

Once the Hero section is complete and tested:

1. **Update context.md** - Document the implemented changes
2. **Create 3.2 About Section** - Next development section
3. **Test integration** - Ensure Hero works with rest of HomeScreen
4. **Gather feedback** - Get user testing on new Hero
5. **Iterate** - Refine based on metrics and feedback

---

## Summary

The improved Hero section transforms from a generic developer introduction to a powerful, personality-driven first impression that:

✅ **Establishes "Code Poet" Brand** - Unique positioning from first glance  
✅ **Showcases Technical Excellence** - Stats, tech stack, achievements  
✅ **Reflects Authentic Personality** - Guatemala, music, artistic approach  
✅ **Drives Action** - Clear CTAs for engagement  
✅ **Creates Visual Impact** - Animations, gradients, professional design  
✅ **Optimized for All Devices** - Responsive, accessible, performant  

This Hero section sets the tone for the entire website and immediately differentiates Alejandro Reyna from other developers in the market.
