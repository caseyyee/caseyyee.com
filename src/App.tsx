import { createRoot } from 'react-dom/client';
import React, { SetStateAction, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const sections = ['experience', 'skills', 'contact'];

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
    <div className="w-5/6 max-w-[100rem] h-full m-auto">
      <div className="flex mt-20 mb-6">
        <div className="flex-1">
          <h1 className="uppercase text-lg tracking-wide ">Casey Yee</h1>

          <p className="text-7xl tracking-wide">
            Experienced Engineer, <br />
            Designer and Problem Solver
          </p>
        </div>

        <div className="py-10 flex gap-4 justify-self-end">
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

      <div className="flex gap-2 my-16">
        {/* {sections.map((section) => (
          <div className="border-solid border px-6 py-3 border-neutral-200 uppercase text-sm">
            {section}
          </div>
        ))} */}
      </div>

      {/* fit-content(theme(spacing.32)) */}
      <div className="grid grid-cols-[2rem_1fr_1fr_30rem_16rem_10rem] gap-4">
        <div className="uppercase text-sm">No.</div>
        <div className="uppercase text-sm">Company</div>
        <div className="uppercase text-sm">Title</div>
        <div className="uppercase text-sm">Description</div>
        <div className="uppercase text-sm">Skills</div>
        <div className="uppercase text-sm">Date</div>
        <div className="col-span-6 border-solid border-t border-neutral-200"></div>

        {experience.map((job, index) => (
          <>
            <div className="text-neutral-500 text-sm">{index}</div>
            <div className="text-neutral-500">{job.company}</div>
            <div className="text-neutral-400">{job.title}</div>
            <div className="text-neutral-500">
              {job.description}

              <div
                className="text-sm underline decoration-neutral-400 cursor-pointer mt-2"
                onClick={() => setSelected(selected === index ? null : index)}
              >
                {selected === index ? '[close]' : job.images?.length && '...more'}
              </div>
            </div>
            <ul>
              {job.skills.map((skill, index) => (
                <>
                  <li className="inline bg-neutral-400 text-white m-1 p-2">{skill}</li>
                  {index % 3 ? <br /> : null}
                </>
              ))}
            </ul>
            <div className="uppercase text-neutral-400 text-sm">{job.date}</div>

            <div className="col-span-3"></div>
            <div className="col-span-3">
              {selected === index &&
                job.images &&
                job.images.map((image) =>
                  image.includes('.mp4') ? (
                    <video autoPlay className="w-3/4 my-2" src={image} />
                  ) : (
                    <img className="w-3/4 my-2" src={image} />
                  )
                )}
            </div>
            {index !== experience.length - 1 && (
              <div className="col-span-6 border-solid border-t border-neutral-200"></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
