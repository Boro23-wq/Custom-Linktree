import Head from 'next/head';
import {
  FACEBOOK_IMAGE_URL,
  INSTAGRAM_IMAGE_URL,
  LINKEDIN_IMAGE_URL,
} from '../images-export.js';

import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Sintu Boro | Profile</title>
        <link rel='icon' href='icon.png' />
      </Head>

      <main>
        <img className='image' src='profile.jpg' />
        <h3 className='description'>@SintuBoro</h3>
        <div className='location'>
          <FontAwesomeIcon
            height='20px'
            width='8px'
            color='rgba(255, 255, 255, 0.5)'
            icon={faMapPin}
          />
          <h4 className='subtitle'>Bangalore, KA</h4>
        </div>
        <iframe
          class='iframe-placeholder'
          src='https://open.spotify.com/embed/playlist/1y9lApZ1pj4dgqXwToxLAj'
          width='300'
          height='80'
          frameborder='0'
          allowtransparency='true'
          allow='encrypted-media'
        ></iframe>
        <div className='grid'>
          <a
            href='https://sintu-boro.netlify.app/'
            target='_blank'
            className='card'
          >
            <h3>PORTFOLIO</h3>
          </a>

          <a
            href='https://boro-ui-ux.webflow.io/'
            target='_blank'
            className='card'
          >
            <h3>UI/UX PORTFOLIO</h3>
          </a>

          <a
            href='https://boro-blogs.netlify.app/'
            target='_blank'
            className='card'
          >
            <h3>TECHNICAL BLOG</h3>
          </a>
          <a
            href='https://sboro2899.medium.com/'
            target='_blank'
            className='card'
          >
            <h3>MEDIUM</h3>
          </a>
          <a
            href='https://github.com/Boro23-wq'
            target='_blank'
            className='card'
          >
            <h3>GITHUB</h3>
          </a>
          <div className='social-div'>
            {/* LINKEDIN */}
            <a
              className='social-card'
              href='https://www.linkedin.com/in/sintu-boro/'
              target='_blank'
            >
              <img className='social-icons' src={LINKEDIN_IMAGE_URL} />
            </a>
            {/* INSTAGRAM */}
            <a
              className='social-card'
              target='_blank'
              href='https://www.instagram.com/x.middlechild/'
            >
              <img className='social-icons' src={INSTAGRAM_IMAGE_URL} />
            </a>
            {/* FACEBOOK */}
            <a
              className='social-card'
              target='_blank'
              href='https://www.facebook.com/404slimboysavage/'
            >
              <img className='social-icons' src={FACEBOOK_IMAGE_URL} />
            </a>
          </div>
        </div>
        <footer className='footer'>© All rights reserved – Sintu Boro</footer>
      </main>

      <style jsx global>{`
        .location {
          display: flex;
          flex-direction: row;
          margin-bottom: 1.5rem;
        }

        .iframe-placeholder {
          background: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100% 100%"><text fill="%23240b36" x="50%" y="50%" font-family="\'Kanit\', sans-serif" font-size="18" text-anchor="middle">Loading...</text></svg>')
            0px 0px no-repeat;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: linear-gradient(to right, #c31432, #240b36);
          // background-image: linear-gradient(to right, #1cd8d2, #93edc7);
        }

        main {
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .image {
          border-radius: 50%;
          height: 85px;
          width: 90px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #fff;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .description {
          color: white;
          text-align: center;
          line-height: 1.5;
          font-size: 1rem;
          margin: 0.5rem 1rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 400px;
          margin-top: 1rem;
        }

        .card {
          margin: 0.5rem;
          padding: 1rem;
          text-align: center;
          background: transparent;

          color: white;
          text-decoration: none;
          border: 1px solid #f5f5f5;
          border-radius: 45px;
          transition: color 0.5s ease, border-color 0.1s ease;
          min-width: 200px;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #000;
          background: #f5f5f5;
          border-color: #f5f5f5;
        }

        .card h3 {
          margin: 0 1rem 0 1rem;
          font-size: 0.9rem;
        }

        .subtitle {
          margin: 0;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          margin-left: 10px;
        }

        .footer {
          color: white;
          margin-top: 60px;
          font-size: 0.75rem;
        }

        .social-div {
          display: flex;
        }

        .social-icons {
          max-width: 20px;
        }

        .social-card {
          margin: 0.75rem;
          text-align: center;
          background: transparent;

          color: white;
          text-decoration: none;
          border-radius: 45px;
          transition: color 0.5s ease, border-color 0.1s ease;
          min-width: 46px;
        }

        /** Dark mode */
        @media (prefers-color-scheme: dark) {
          .container {
            background-image: linear-gradient(to right, #c31432, #240b36);
            // background-image: linear-gradient(to right, #8e2de2, #4a00e0);
            // background-image: linear-gradient(to right, #1cd8d2, #93edc7);
          }
          .description {
            color: white;
          }
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        @media (max-width: 350px) {
          .card h3 {
            margin: 0 3rem 0 3rem;
            font-size: 1.25rem;
          }
          .card {
            min-width: 275px;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Kanit, Segoe UI, Kanit, -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
