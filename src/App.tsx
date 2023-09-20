import classnames from 'classnames';
import React, { SetStateAction, useState } from 'react';

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
      `${imageFolder}/fxr/fxr-sketch.png`,
      `${imageFolder}/fxr/desktop-vr.gif`,
      `${imageFolder}/fxr/fxr-content.png`,
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

const gridStyles =
  'grid grid-rows lg:grid lg:grid-cols-[1fr_3rem_repeat(2,10rem)_8fr_13rem_10rem_1fr] xl:grid-cols-[1fr_3rem_repeat(2,10rem)_40rem_13rem_10rem_1fr] p-4';

export default () => {
  const [selected, setSelected] = useState<SetStateAction<number | null>>(null);

  return (
    <div className="h-full">
      <div className={classnames(gridStyles)}>
        <div className="hidden lg:block">{/* left space */}</div>
        <div className="lg:py-10 lg:col-span-5">
          <h1 className="uppercase text-lg tracking-wide mb-4">Casey Yee</h1>
          <p className="text-5xl lg:text-7xl">
            Experienced Engineer, <br />
            Designer and Problem Solver
          </p>
        </div>
        <div className="my-6 lg:my-[6rem] col-span-1 flex gap-4">
          <h2 className="text-neutral-500 text-sm uppercase">Contact</h2>
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
        <div className="hidden lg:block">{/* right space */}</div>
      </div>

      <div className={classnames('hidden lg:block', gridStyles)}>
        {['', 'No.', 'Company', 'Title', 'Description', 'Skills', 'Date', ''].map((header) => (
          <div className="uppercase text-sm">{header}</div>
        ))}
      </div>

      {experience.map((job, index) => {
        const isSelected = selected === index;
        return (
          <div
            className={classnames(
              gridStyles,
              'border-solid border-t border-neutral-200 transition duration-200',
              {
                'hover:bg-neutral-100': !isSelected,
              }
            )}
          >
            <div className="hidden lg:block">{/* left space */}</div>
            <div className={classnames('hidden lg:block text-neutral-500 text-sm', {})}>
              {index}
            </div>
            <div className={classnames('lg:mx-0 lg:mt-0 text-neutral-500')}>{job.company}</div>
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
                <>
                  <li
                    className={classnames(
                      'text-sm lg:text-base inline-block bg-neutral-600 text-white m-[1px] p-2',
                      {}
                    )}
                  >
                    {skill}
                  </li>
                </>
              ))}
            </ul>
            <div className="mt-6 lg:mx-0 lg:mt-0 uppercase text-neutral-400 text-sm">
              {job.date}
            </div>
            <div className="hidden lg:block">{/* right space */}</div>

            <div className="hidden lg:block lg:col-span-4">{/* left space */}</div>
            <div
              className={classnames('pt-4 lg:col-span-3', {
                hidden: !isSelected,
              })}
            >
              {isSelected &&
                job.images &&
                job.images.map((image) => {
                  const props = {
                    className: 'lg:w-full shadow-lg',
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
