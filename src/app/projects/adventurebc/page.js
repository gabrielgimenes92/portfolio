import React from 'react';
import Paragraph from '@/components/Paragraph';
import SinglePageHero from '@/components/SinglePageHero';
import TechStack from '@/components/TechStack';
import TextAndImage from '@/components/TextAndImage';

import {
  reactLogo,
  nestJSLogo,
  nativeBaseLogo,
  firebaseLogo,
} from '../../../assets/logos';

const page = () => {
  let featuredImage1 = '/pictures/EveryPage-Feature01.png';
  let featuredImage2 = '/pictures/EveryPage-Feature02.png';
  let featuredImage3 = '/pictures/EveryPage-Feature03.png';

  let introContent = [
    {
      id: '01',
      content:
        'EveryPage is a mobile application created during post degree diploma at Langara College, serving as our final project. This endeavor replicates a professional work environment, encompassing a collaborative effort with designers, developers, and a project manager. It strictly adheres to agile methodology and its associated practices.',
    },
    {
      id: '02',
      content:
        'In my dual role as a project manager and a developer within the team, I actively participated in critical aspects of the project, including design decision-making, data model creation, and the selection of the technological stack, among other responsibilities. My primary focus as a developer was on front-end, utilizing React Native, integrating the Native Base library, and conducting testing through Expo.',
    },
    {
      id: '03',
      content:
        "While the project is no longer available online, the source code is still accessible on the project's GitHub repository. My substantial contributions were concentrated in the 'wishlist' and 'notifications' screens, as well as the development of the promotional website.",
    },
  ];

  let techStack = [
    {
      name: 'React Native',
      logo: reactLogo,
    },
    {
      name: 'NestJS',
      logo: nestJSLogo,
    },
    {
      name: 'NativeBase',
      logo: nativeBaseLogo,
    },
    {
      name: 'Firebase',
      logo: firebaseLogo,
    },
  ];

  let theApplicationParagraph = {
    title: 'The Application',
    paragraphs: [
      {
        id: '01',
        content:
          'EveryPage is a mobile app for book lovers who wish to keep track of their book collections at home as well as meeting other people in the nearby community to exchange books.',
      },
      {
        id: '02',
        content:
          'The app provides an easy-to-use book inventory system allowing users to create their own virtual library where they can add custom information to help them remember the books. In addition, they can share their book collection with other nearby users and create a community where they can borrow and exchange books.',
      },
    ],
  };

  let textAndImage01 = {
    title: 'ISBN Scanner',
    paragraphs: [
      {
        id: '01',
        content:
          'Users can easily add books to their collection by scanning the ISBN barcode and adding manually. Once the book is added, users can personalise the book information, such as personal notes, photos and additional information to help them to organise the books.',
      },
    ],
    image: {
      source: featuredImage1,
      alt: 'An alt description',
    },
  };

  let textAndImage02 = {
    title: 'Virtual Bookshelf On-The-Go',
    paragraphs: [
      {
        id: '01',
        content:
          'Users can access their virtual bookshelf anytime and anywhere. They can also keep track of the reading status, who borrow their books, or where they keep them. Users won’t need to worry if they buy duplicate copies or lose the books.',
      },
    ],
    image: {
      source: featuredImage2,
      alt: 'An alt description',
    },
  };

  let textAndImage03 = {
    title: 'Discover Books',
    paragraphs: [
      {
        id: '01',
        content:
          'Users can share their books with other users by selecting the books they’re willing to share and tagging them as shareable. They can search for available books on the Discover page by book title or author, and nearby location. Users can check on the details of the book, add to their wishlist, and request to borrow the book.',
      },
    ],
    image: {
      source: featuredImage3,
      alt: 'An alt description',
    },
  };

  return (
    <div>
      <SinglePageHero title="Everypage" />
      <Paragraph paragraphs={introContent} />
      <TechStack techStack={techStack} />
      <Paragraph
        title={theApplicationParagraph.title}
        paragraphs={theApplicationParagraph.paragraphs}
      />
      <TextAndImage
        title={textAndImage01.title}
        paragraphs={textAndImage01.paragraphs}
        image={textAndImage01.image}
      />
      <TextAndImage
        title={textAndImage02.title}
        paragraphs={textAndImage02.paragraphs}
        image={textAndImage02.image}
        invertSide={true}
      />
      <TextAndImage
        title={textAndImage03.title}
        paragraphs={textAndImage03.paragraphs}
        image={textAndImage03.image}
      />
    </div>
  );
};

export default page;
