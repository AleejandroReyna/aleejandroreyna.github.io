'use client';
import { yearsOfExperience } from "@/utils/yearsOfExperience";
import { currentYear } from "@/utils/currentYear";
import { SiGithub } from '@icons-pack/react-simple-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Mail, Heart, Linkedin, Twitter } from 'lucide-react';
import { PythonOriginal } from "devicons-react";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Alejandro Reyna
              </span>
            </h3>
            <p className="text-gray-400 mb-2">Code Poet & Full-Stack Developer</p>
            <p className="text-gray-500 text-sm mb-4">
              {yearsOfExperience()}+ years crafting elegant solutions
            </p>
            <p className="text-gray-400 text-sm italic">
              {`"I don't just write code that works—I write code that sings."`}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a
                href="#home"
                className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                href="#portfolio"
                className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Portfolio
              </a>
              <a
                href="#skills"
                className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Expertise</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Full-Stack Development</li>
              <li>Python & Django</li>
              <li>TypeScript & React</li>
              <li>API Design & Integration</li>
              <li>Database Architecture</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:me@alejandroreyna.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">me@alejandroreyna.com</span>
              </a>
              <p className="text-gray-400 text-sm">Guatemala, Guatemala</p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/AleejandroReyna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <SiGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/aleejandroreyna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://calendly.com/aleejandroreyna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Schedule a call"
              >
                <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {currentYear()} Alejandro Reyna. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500" fill="currentColor" /> in Guatemala
            </p>
            <p className="italic text-gray-600">
              <a href="https://zen-of-python.info/" target="_blank" rel="noopener noreferrer">{`"Simple is better than complex" - Zen of Python`}</a> <PythonOriginal style={{ display: 'inline' }} size={20} />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};