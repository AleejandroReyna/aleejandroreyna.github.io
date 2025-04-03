import { yearsOfExperience } from "@/utils/yearsOfExperience";

import Link from "next/link"

import { SiGithub } from '@icons-pack/react-simple-icons';
import { LinkedinPlain } from 'devicons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { currentYear } from "@/utils/currentYear";
import { PythonOriginal } from "devicons-react";

export const Footer = () => {
  return (
    <>
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        <Link className="text-xl font-semibold" href={'/'}>
          <h1>Alejandro Reyna</h1>
        </Link>
        <p>
          Senior Software Developer
          <br />
          With {yearsOfExperience()}+ years of experience        
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Info</h6>
        <Link href={'/about'} className="link link-hover">About me</Link>
        <Link href={'/experience'} className="link link-hover">Experience</Link>
        <Link href={'/portfolio'} className="link link-hover">Porfolio</Link>
        <Link href={'/contact'} className="link link-hover">Contact</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link href={'/'} className="link link-hover">Backend Development</Link>
        <Link href={'/'} className="link link-hover">Frontend Development</Link>
        <Link href={'/'} className="link link-hover">Web Development</Link>
        <Link href={'/'} className="link link-hover">App Development</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">

          <a target='_blank' href="https://linkedin.com/in/aleejandroreyna">
            <LinkedinPlain color="#ffffff" size={24} />
          </a>

          <a target='_blank' href="https://github.com/aleejandroreyna">
            <SiGithub color="#ffffff" size={24} />
          </a>

          <a target='_blank' href="https://calendly.com/aleejandroreyna">
            <FontAwesomeIcon icon={faCalendarAlt} size='2x' color="#ffffff" className='mr-4' />
          </a>
        </div>
      </nav>
    </footer>
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content px-10 py-4">
      <aside className="flex justify-between items-center w-full">
        <p>© All rights reserved - {currentYear()}</p>
        <p className="ops text-lg"><a href="#">Simple is better than complex</a> <PythonOriginal style={{display: 'inline'}} size={20} /></p>
      </aside>
    </footer>
    </>
  )
}