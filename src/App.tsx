import { createRoot } from 'react-dom/client';
import React, { SetStateAction, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const imageFolder = '/img/';
const experience = [
  {
    company: 'Unity Technologies',
    date: 'Apr 2021 - Present',
    title: 'Software Engineer',
    description: '3D viewer and Asset manager for Digital Twins, Realtime collaboration, Dashboard',
    skills: ['React', 'react-three-fiber', 'three.js', 'C#', 'Unity', 'Dev ops'],
    images: [`${imageFolder}/unity/product-studio.mp4`],
  },
  {
    company: 'VRIFY',
    date: 'Jul 2020 - Apr 2021',
    title: 'Lead Product Engineer',
    description: '3D data presentation platform',
    skills: ['Vue', 'Javascript', 'three.js'],
    images: [`${imageFolder}/vrify/vrify.mp4`],
  },
  {
    company: 'Immertec',
    date: 'Aug 2019 - Apr 2020',
    title: 'Lead Product Engineer',
    description: 'VR Surgical training platform',
    skills: ['React', 'Javascript', 'react-three-fiber', 'three.js'],
    images: [`${imageFolder}/medoptic/vr-apps.gif`],
  },
  {
    company: 'Mozilla',
    date: 'Aug 2014 - Mar 2019',
    title: 'UX Engineer',
    description: 'Firefox Reality, WebXR, Firefox OS',
    skills: [
      'C#',
      'Unity',
      'Javascript',
      'W3C',
      'Web Standards',
      'Open Source',
      'three.js',
      'webgl',
    ],
    images: [
      `${imageFolder}/fxr/desktop-vr.gif`,
      `${imageFolder}/fxr/fxr-content.png`,
      `${imageFolder}/fxr/fxr-sketch.png`,
      `${imageFolder}/fxr/rainbow-membrane.jpg`,
    ],
  },
  {
    company: 'Blast Radius',
    date: 'Nov 2011 - Mar 2012',
    title: 'Lead Web Engineer',
    description: 'Air Jordan 2012, Nike',
    skills: ['Javascript', 'Web'],
    images: [
      `${imageFolder}/aj2012/AJ2012-1.jpg`,
      `${imageFolder}/aj2012/AJ2012-3.jpg`,
      `${imageFolder}/aj2012/AJ2012-4.jpg`,
      `${imageFolder}/aj2012/yt-thumbnail.jpg`,
    ],
  },
  {
    company: 'Vancouver Film School',
    date: 'Jan 2010 - Dec 2011',
    title: 'Senior Instructor',
    description: 'Digital Design, Physical Interfaces, Web development ciriculams',
    skills: ['Javascript', 'Web', 'Arduino', 'Flash'],
    images: [`${imageFolder}/vfs/vfs-logo.svg`, `${imageFolder}/vfs/oomph2.jpg`],
  },
  {
    company: 'Big Green',
    date: '2004 - 2009',
    title: 'Co-Founder',
    description: 'Realestate marketing technologies',
    skills: ['Visualization', 'Web', 'Installation'],
  },
];

export default () => {
  const [selected, setSelected] = useState<SetStateAction<number | null>>(null);

  return (
    <div className="md:w-5/6 max-w-[100rem] h-full m-auto">
      <div className="m-6 md:mx-0 md:my-20 lg:flex">
        <div className="flex-1">
          <h1 className="uppercase text-lg tracking-wide mb-4">Casey Yee</h1>

          <p className="text-5xl md:text-7xl">
            Experienced Engineer, <br />
            Designer and Problem Solver
          </p>
        </div>

        <div className="mt-6 md:mt-12 flex gap-4 justify-self-end">
          <h2 className="text-neutral-500 text-sm uppercase mb-4">Contact</h2>
          <ul>
            <li className="underline decoration-neutral-400">
              <a href="https://www.linkedin.com/in/whoyee/">LinkedIn</a>
            </li>
            <li className="underline decoration-neutral-400">
              <a href="https://github.com/caseyyee">Github</a>
            </li>
            <li className="underline decoration-neutral-400">
              <a href="http://twitter.com/whoyee">Twitter</a>
            </li>
            <li className="underline decoration-neutral-400">
              <a href="mailto:caseyyee.ca@gmail.com">Email</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-rows md:grid md:grid-cols-[2rem_1fr_1fr_30rem_16rem_10rem] md:gap-4">
        {['No.', 'Company', 'Title', 'Description', 'Skills', 'Date'].map((header) => (
          <div className="uppercase text-sm hidden md:block">{header}</div>
        ))}

        <div className="md:block md:col-span-6 border-solid border-t border-neutral-200"></div>

        {experience.map((job, index) => (
          <>
            <div className="hidden md:block text-neutral-500 text-sm">{index}</div>
            <div className="mx-6 mt-6 md:mx-0 md:mt-0 text-neutral-500">{job.company}</div>
            <div className="mx-6 md:mx-0 md:mt-0 text-neutral-400">{job.title}</div>
            <div className="mx-6 my-6 md:mx-0 md:mt-0 text-neutral-500">
              {job.description}
              <div
                className="text-sm underline decoration-neutral-400 cursor-pointer mt-2"
                onClick={() => setSelected(selected === index ? null : index)}
              >
                {selected === index ? '[close]' : job.images?.length && '...more'}
              </div>
            </div>
            <ul className="mx-6 md:mx-0 md:mt-0">
              {job.skills.map((skill, index) => (
                <>
                  <li className="text-sm md:text-base inline-block bg-neutral-600 text-white m-[1px] p-2">
                    {skill}
                  </li>
                </>
              ))}
            </ul>
            <div className="mx-6 my-6 md:mx-0 md:mt-0 uppercase text-neutral-400 text-sm">
              {job.date}
            </div>
            <div className="hidden md:block md:col-span-3">{/* empty */}</div>
            <div className="md:col-span-3">
              {selected === index &&
                job.images &&
                job.images.map((image) => {
                  const props = {
                    className: 'md:w-3/4 my-2 last:my-0',
                    src: image,
                  };
                  return image.includes('.mp4') ? (
                    <video autoPlay {...props} />
                  ) : (
                    <img {...props} />
                  );
                })}
            </div>
            {index !== experience.length - 1 && (
              <div className="md:col-span-6 border-solid border-t border-neutral-200"></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
