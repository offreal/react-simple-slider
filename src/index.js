import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

const dataSlides = [
  {
    id: 0,
    title: 'Slide 1',
    text:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas repudiandae sunt, fugiat dolorum illum eaque nam ipsa incidunt similique aliquam, maxime odio, tenetur recusandae reprehenderit aliquid? Ab rerum excepturi eius?',
  },
  {
    id: 1,
    title: 'Slide 2',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eveniet illo ex, ducimus quibusdam corrupti architecto sequi voluptate doloremque ab. In impedit consectetur numquam dicta cum totam necessitatibus eius culpa at natus, doloribus debitis!',
  },
  {
    id: 2,
    title: 'Slide 3',
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat similique sapiente inventore provident dicta cupiditate.',
  },
  {
    id: 3,
    title: 'Slide 4',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero delectus aliquam quis deleniti asperiores blanditiis? Quod corporis, libero possimus cumque laboriosam rerum suscipit dolore quibusdam aspernatur minus impedit consectetur adipisci qui consequatur dolores vel pariatur nisi ad nobis laborum nostrum aliquid, officiis soluta sunt. Impedit ipsam, error fuga quia quos iusto dolor.',
  },
  {
    id: 4,
    title: 'Slide 5',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia, officia dignissimos, perspiciatis enim reprehenderit nemo, aut accusamus ut nobis facilis temporibus explicabo distinctio ipsam recusandae voluptates voluptatum. Reiciendis!',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App slides={dataSlides} />
  </React.StrictMode>,
  document.getElementById('root')
);
