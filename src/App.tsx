import classnames from 'classnames';
import React, { SetStateAction, useState } from 'react';

const imageFolder = '/img/';
const experience = [
  {
    company: 'Unity Technologies',
    date: 'Apr 2021 - Present',
    title: 'Senior Engineer',
    description: 'Parsec, Asset Manager, Product Studio',
    skills: ['TS', 'React', 'WebGL', 'Unity', 'Devops'],
    images: [
      `${imageFolder}/unity/parsec-website.jpg`,
      `${imageFolder}/unity/parsec-app.jpg`,
      `${imageFolder}/unity/product-studio.mp4`,
    ],
    logo: `${imageFolder}/unity-logo.png`,
  },
  {
    company: 'VRIFY',
    date: 'Jul 2020 - Apr 2021',
    title: 'Lead Engineer',
    description: '3D Visualization Platform',
    skills: ['Leadership', 'Vue', 'JS', 'WebGL', 'Devops'],
    images: [`${imageFolder}/vrify/vrify.mp4`],
    logo: `${imageFolder}/vrify-logo.png`,
  },
  {
    company: 'Immertec',
    date: 'Aug 2019 - Apr 2020',
    title: 'Lead Engineer',
    description: 'VR Surgical Training Platform',
    skills: ['Leadership', 'React', 'WebGL', 'Devops', 'ReactNative'],
    images: [`${imageFolder}/medoptic/vr-apps.gif`],
    logo: `${imageFolder}/immertec-logo.jpeg`,
  },
  {
    company: 'Mozilla',
    date: 'Aug 2014 - Mar 2019',
    title: 'UX Engineer',
    description: 'Firefox Reality VR Web Browser, WebXR, Firefox OS',
    skills: ['JS', 'Open Source', 'UX', 'WebGL', 'C#', 'Unity', 'Devrel'],
    images: [
      `${imageFolder}/fxr/fxr-sketch.png`,
      `${imageFolder}/fxr/desktop-vr.gif`,
      `${imageFolder}/fxr/fxr-content.png`,
      `${imageFolder}/fxr/rainbow-membrane.jpg`,
    ],
    logo: `${imageFolder}/mozilla-logo.png`,
  },
  {
    company: 'Blast Radius',
    date: 'Nov 2011 - Mar 2012',
    title: 'Lead Engineer',
    description: 'Nike Air Jordan 12, Jumpman 23',
    skills: ['leadership', 'Javascript', 'Performance'],
    images: [
      `${imageFolder}/aj2012/AJ2012-1.jpg`,
      `${imageFolder}/aj2012/AJ2012-3.jpg`,
      `${imageFolder}/aj2012/AJ2012-4.jpg`,
      `${imageFolder}/aj2012/yt-thumbnail.jpg`,
    ],
    logo: `${imageFolder}/blast-radius-logo.jpeg`,
  },
  {
    company: 'Vancouver Film School',
    date: 'Jan 2010 - Dec 2011',
    title: 'Senior Instructor',
    description: 'Interactive Design and Development, Physical Interfaces',
    skills: ['Javascript', 'Web', 'Arduino', 'Flash'],
    images: [`${imageFolder}/vfs/vfs-logo.svg`, `${imageFolder}/vfs/oomph2.jpg`],
    logo: `${imageFolder}/vfs-logo.png`,
  },
];

const gridStyles = 'grid grid-rows lg:grid lg:grid-cols-[1fr_250px_250px_4fr_2fr_1fr] gap-4 p-4';

const blogPath = import.meta.env.DEV ? 'http://localhost:5174/posts' : '/posts';

export default () => {
  const [selected, setSelected] = useState<SetStateAction<number | null>>(null);

  return (
    <div className="h-full font-[nunito]">
      <div className={classnames(gridStyles)}>
        <div className="hidden lg:block">{/* left space */}</div>
        <div className="lg:py-10 lg:col-span-3">
          <h1 className="text-lg tracking-wide mb-4">Casey Yee</h1>
          <p className="text-5xl lg:text-2l">Curious? Me too.</p>
        </div>
        <div className="my-6 lg:my-[6rem] col-span-1 flex gap-4">
          <h2 className="text-neutral-500 text-sm uppercase">Contact</h2>
          <ul>
            <li className="underline decoration-neutral-400">
              <a href="https://www.linkedin.com/in/whoyee/">LinkedIn</a>
            </li>
            <li className="underline decoration-neutral-400">
              <a href="mailto:caseyyee.ca@gmail.com">Email</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">{/* right space */}</div>
      </div>

      <div className={classnames(gridStyles)}>
        <div className="hidden lg:block">{/* left space */}</div>
        <div className="lg:col-span-4">
          <div className="border border-solid border-neutral-200 rounded">
            <h3>
              <a href={blogPath + '/getting-started.html'}>Getting Started</a>
            </h3>
            <p>Sometimes, you just want to write.</p>
          </div>
        </div>
        <div className="hidden lg:block">{/* right space */}</div>
      </div>

      {experience.map((job, index) => {
        const isSelected = selected === index;
        return (
          <div
            key={`exp-${index}`}
            className={classnames(
              gridStyles,
              'border-solid border-t border-neutral-200 transition duration-200',
              {
                'hover:bg-neutral-100': !isSelected,
              }
            )}
          >
            <div className="hidden lg:block">{/* left space */}</div>
            <div className={classnames('lg:mx-0 lg:mt-0 text-neutral-500')}>
              <div className="grid grid-cols-[2.5rem_1fr] gap-4">
                <div className="grid place-items-center">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="object-cover w-8 h-8 rounded bg-white"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold">{job.company}</div>
                  <div className="text-xs uppercase mt-1">{job.date}</div>
                </div>
              </div>
            </div>
            <div
              className={classnames('lg:mx-0 lg:mt-0 text-neutral-400', {
                'text-neutral-500': isSelected,
              })}
            >
              {job.title}
            </div>
            <div className={classnames('my-6 lg:mx-0 lg:mt-0 text-neutral-500', {})}>
              {job.description}
              <div
                className="text-sm underline decoration-neutral-400 cursor-pointer mt-2 "
                onClick={() => setSelected(isSelected ? null : index)}
              >
                {isSelected ? '[close]' : job.images?.length && '...more'}
              </div>
            </div>
            <ul className="lg:mx-0 lg:mt-0">
              {job.skills.map((skill, index) => (
                <li
                  key={`skill-${index}`}
                  className={classnames(
                    'text-xs inline-block bg-neutral-600 text-white m-[1px] px-2 py-1 whitespace-nowrap uppercase rounded',
                    {}
                  )}
                >
                  {skill}
                </li>
              ))}
            </ul>
            <div className="hidden lg:block">{/* right space */}</div>

            <div className="hidden lg:block lg:col-span-3">{/* left space */}</div>
            <div
              className={classnames('pt-4 lg:col-span-2', {
                hidden: !isSelected,
              })}
            >
              {isSelected &&
                job.images &&
                job.images.map((image) => {
                  const props = {
                    className: 'lg:w-full shadow-lg lg:max-w-[800px]',
                    src: image,
                  };
                  return image.includes('.mp4') ? (
                    <video autoPlay {...props} />
                  ) : (
                    <img {...props} />
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
