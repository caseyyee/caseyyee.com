import React, { SetStateAction, useState } from 'react';
import clsx from 'clsx';
import { ArrowRight, Linkedin, Mail, Plus, Minus } from 'lucide-react';
import SectionContainer from './components/SectionContainer';
import Zipper from './components/Zipper';

const imageFolder = '/img/';
const videoFolder = '/vids/';

const experience = [
  {
    company: 'Unity Technologies',
    date: 'Apr 2021 - Present',
    title: 'Senior Engineer',
    description: (
      <>
        <b>Parsec, Unity Asset Manager</b>
        <br />
        High performance remote desktop and application streaming.
        <br />
        3D Visualization and product configurator tools.
      </>
    ),
    skills: ['TS', 'React', 'WebGL', 'Unity', 'DevOps'],
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
    description: <>Multi-user, Realtime 3D Visualization and Presentation Platform</>,
    skills: ['Leadership', 'Vue', 'JS', 'WebGL', 'Devops'],
    images: [`${imageFolder}/vrify/vrify.mp4`],
    logo: `${imageFolder}/vrify-logo.png`,
  },
  {
    company: 'Immertec',
    date: 'Aug 2019 - Apr 2020',
    title: 'Lead Engineer',
    description: 'VR Surgical Training Platform',
    links: [
      {
        label: 'More about Medoptic',
        href: '/blog/medoptic',
      },
    ],
    skills: ['Leadership', 'React', 'WebGL', 'Devops', 'ReactNative'],
    images: [`${imageFolder}/medoptic/vr-apps.gif`],
    logo: `${imageFolder}/immertec-logo.jpeg`,
  },
  {
    company: 'Mozilla',
    date: 'Aug 2014 - Mar 2019',
    title: 'UX Engineer',
    description: 'Firefox Reality XR Web Browser, WebXR, Firefox OS',
    links: [
      {
        label: 'Firefox Reality Browser',
        href: '/blog/firefox-reality',
      },
      {
        label: 'WebXR Content Tools',
        href: '/blog/webxr',
      },
      {
        label: 'Firefox OS',
        href: '/blog/firefox-os',
      },
    ],
    skills: ['JS', 'Open Source', 'UX', 'WebGL', 'C#', 'Unity', 'Devrel'],
    images: [
      `${imageFolder}/fxr/fxr-sketch.png`,
      `${imageFolder}/aframe/aframe.gif`,
      `${imageFolder}/fxr/fxr-content.png`,
      `${imageFolder}/fxos/fxos-2.jpg`,
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

const articles = [
  {
    title: '2025 Web Stack 🥞',
    description:
      'What helped me move faster, more efficiently, and ship higher quality products in the last year. Here is the tech and patterns I would choose when starting my next project.',
    href: '/blog/2025-web-app-stack',
  },
  // {
  //   title: 'Software Development in the Age of AI',
  //   description:
  //     "How I'm choosing to navigate my way through learing and applying new AI technologies to my work.",
  //   href: '/blog/software-development-in-the-age-of-ai',
  // },
  // {
  //   title: 'Ship Value, Not Tech',
  //   description:
  //     'Fight to work on what is important. How to make an impact and deliver business value.',
  //   href: '/blog/2025-web-app-stack',
  // },
];

export const gridStyles =
  'grid grid-rows lg:grid lg:grid-cols-[1fr_250px_250px_4fr_2fr_1fr] gap-y-6 lg:gap-y-0 lg:gap-x-4 px-4 py-6';

const isDev = import.meta.env.DEV;

const blogPath = isDev ? 'http://localhost:5174' : '';

export default () => {
  const [selected, setSelected] = useState<SetStateAction<number | null>>(null);

  return (
    <div className="h-full font-[nunito] m-0 p-0">
      <Zipper />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="bg-gradient-to-r from-amber-500 to-pink-500 absolute -right-12 -top-10 lg:top-16 lg:-left-24 w-48 h-48 -z-1 rounded-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-60 relative lg:left-16 brightness-150"
          >
            <source src={`${videoFolder}/snapshot.mov`} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className={clsx(gridStyles)}>
        <div className="hidden lg:block">{/* left space */}</div>
        <div className="lg:py-7 lg:col-span-3">
          <h1 className="text-lg tracking-wide mb-4 font-bold ">Casey Yee</h1>
          <p className="text-5xl leading-tight lg:leading-snug">
            Everything Engineer
            <br />
            Full-Stack Web, 3D, UX
          </p>
          <p className="mt-5 text-2xl leading-tight lg:leading-snug lg:text-2l w-3/4">
            I Have Worked on Browsers, Operating Systems and Shipped Apps at Scale. Now and Always
            Looking for a Good Challenge.
          </p>
        </div>
        <div className="my-6 lg:my-[6rem] col-span-1 flex gap-4">
          <h2 className="text-neutral-500 text-sm uppercase">Contact</h2>
          <ul>
            <li className="underline decoration-neutral-400 flex gap-2 items-center">
              <Linkedin size={16} fill="black" strokeWidth={0} />
              <a href="https://www.linkedin.com/in/whoyee/">LinkedIn</a>
            </li>
            <li className="underline decoration-neutral-400 flex gap-2 items-center">
              <Mail size={16} />
              <a href="mailto:caseyyee.ca@gmail.com">Email</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">{/* right space */}</div>
      </div>

      <SectionContainer>
        <div className="lg:col-span-4">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {articles.map((article, index) => (
              <li
                key={`article-${index}`}
                className="rounded-lg p-6 border border-neutral-200 shadow-lg bg-white"
              >
                <a href={`${blogPath}/blog/2025-web-app-stack`} className="flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 hover:underline">{article.title}</h3>

                  <p className="text-neutral-500">{article.description}</p>

                  <div className="mt-4">
                    <button className="flex items-center text-sm gap-1 px-3 py-1 rounded-lg transition-colors transition-duration-300 border border-neutral-200 bg-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-pink-500 hover:text-white cursor-pointer">
                      <span>Read</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="lg:col-span-4">
          <h2 className="text-xl font-bold">Work Timeline</h2>
        </div>
      </SectionContainer>

      {experience.map((job, index) => {
        const isSelected = selected === index;
        return (
          <div
            key={`exp-${index}`}
            className={clsx(
              gridStyles,
              'border-solid border-t border-neutral-200 transition duration-300 hover:bg-neutral-100',
              {
                'bg-neutral-100': isSelected,
              }
            )}
          >
            <div className="hidden lg:block">{/* left space */}</div>
            <div className={clsx('lg:mx-0 lg:mt-0 text-neutral-500')}>
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
              className={clsx('lg:mx-0 lg:mt-0 text-neutral-400', {
                'text-neutral-500': isSelected,
              })}
            >
              {job.title}
            </div>
            <div className={clsx('lg:mx-0 lg:mt-0 text-neutral-500 order-last lg:order-none')}>
              {job.description}

              <button
                className={clsx(
                  'text-sm cursor-pointer block text-neutral-800 px-3 py-1 rounded-lg transition-colors transition-duration-300 border border-neutral-200 bg-white mt-4',
                  {
                    'hover:bg-gradient-to-r hover:from-amber-500 hover:to-pink-500 hover:text-white':
                      !isSelected,
                  }
                )}
                onClick={() => setSelected(isSelected ? null : index)}
              >
                <div className="flex gap-2 items-center">
                  {isSelected ? (
                    <>
                      <span>Close</span> <Minus size={16} />
                    </>
                  ) : (
                    job.images?.length && (
                      <>
                        <span>More</span> <Plus size={16} />
                      </>
                    )
                  )}
                </div>
              </button>
            </div>
            <ul className="lg:mx-0 lg:mt-0">
              {job.skills.map((skill, index) => (
                <li
                  key={`skill-${index}`}
                  className={clsx(
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
              className={clsx('pt-4 lg:col-span-2', {
                hidden: !isSelected,
              })}
            >
              {isSelected &&
                job.images &&
                job.images.map((image) => {
                  const props = {
                    className: 'lg:w-full shadow-lg lg:max-w-[800px] rounded my-2',
                    src: image,
                  };
                  return image.includes('.mp4') ? (
                    <video autoPlay {...props} />
                  ) : (
                    <img {...props} />
                  );
                })}

              {job.links?.length && (
                <ul className="mt-4 mb-4 flex items-start flex-col gap-2">
                  {job.links?.map((link, index) => (
                    <li
                      key={`link-${index}`}
                      className="flex gap-2 items-center justify-center rounded-lg py-1 px-3 bg-gradient-to-r from-amber-500 to-pink-500  shadow-lg text-white whitespace-nowrap"
                    >
                      <a
                        href={blogPath + link.href}
                        className={clsx('hover:underline drop-shadow cursor-pointer')}
                      >
                        {link.label}
                      </a>
                      <ArrowRight size={16} className="text-white" />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
