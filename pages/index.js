import Head from 'next/head';
import { NEXTJS_IMAGE_URL } from '../images-export.js';
import SpotifyPlayer from '../components/SpotifyPlayer.js';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Sintu Boro | Profile</title>
        <link rel='icon' href='icon-1.png' />
      </Head>

      <main>
        <img className='image' src='icon-1.png' />
        <a
          className='description'
          href='https://github.com/Boro23-wq'
          target='_blank'
        >
          Boro (@Boro23-wq)
        </a>
        {/* status indicator */}
        <div className='status'>
          <small>Status:</small>
          <small className='status-indicator'></small>
          <h4 className='subtitle'>Writing some code today!</h4>
        </div>
        
        <SpotifyPlayer />

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
          <div className='social-div'>
            {/* GITHUB */}
            <a
              className='social-card'
              target='_blank'
              href='https://github.com/Boro23-wq'
            >
              <svg
                role='img'
                className='social-icons'
                viewBox='0 0 24 24'
                fill='#888'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>GitHub icon</title>
                <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
              </svg>
            </a>
            {/* LINKEDIN */}
            <a
              className='social-card'
              href='https://www.linkedin.com/in/sintu-boro/'
              target='_blank'
            >
              <svg
                role='img'
                className='social-icons'
                viewBox='0 0 24 24'
                fill='#888'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>LinkedIn icon</title>
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
              </svg>
            </a>
            {/* INSTAGRAM */}
            <a
              className='social-card'
              target='_blank'
              href='https://www.instagram.com/x.middlechild/'
            >
              <svg
                role='img'
                className='social-icons'
                viewBox='0 0 24 24'
                fill='#888'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Instagram icon</title>
                <path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' />
              </svg>
            </a>
          </div>
        </div>
        <footer className='footer'>
          © Boro 🤘 - Powered by
          <img className='footer-next-icon' src={NEXTJS_IMAGE_URL} />{' '}
          {/* <span className='x-span'>x</span>{' '}
          <img className='footer-vercel-icon' src={VERCEL_IMAGE_URL} /> */}
        </footer>
      </main>

      <style jsx global>{`
        .social-div {
          display: flex;
        }

        .social-icons {
          max-width: 20px;
          transition: 0.2s;
        }

        .social-icons:hover {
          fill: #fff;
        }

        .footer {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: row;
          color: white;
          margin-top: 60px;
          font-size: 0.75rem;
        }

        .x-span {
          margin-top: 1px;
        }

        .footer-next-icon {
          max-width: 28px;
          margin-top: 3px;
          margin-left: 5px;
          margin-right: 6.75px;
        }

        .footer-vercel-icon {
          max-width: 11px;
          margin-left: 6.75px;
          margin-right: 6.75px;
        }

        .status {
          display: flex;
          flex-direction: row;
          color: white;
          margin: 0.5rem auto;
          padding: 0.3rem 0.45rem;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 0.25rem;
        }

        .status-indicator {
          width: 10px;
          height: 10px;
          border-radius: 100%;
          margin-top: 0.3rem;
          margin-left: 0.5rem;
          background-color: #ff006a;
        }

        .location {
          display: flex;
          flex-direction: row;
          margin-bottom: 1.5rem;
        }

        .iframe-placeholder {
          margin-top: 0.5rem;
          background: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100% 100%"><text fill="%23808080" x="50%" y="50%" font-family="sans-serif" font-size="14" text-anchor="middle">Loading Spotify...</text></svg>')
            0px 0px no-repeat;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: linear-gradient(to right, #000, #14061f);
          // background-image: linear-gradient(to right, #c31432, #240b36);
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
          color: #999;
          text-align: center;
          line-height: 1.5;
          font-size: 1rem;
          margin: 0.5rem 1rem;
          transition: 0.3s;
        }

        .description:hover {
          color: #fff;
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
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 45px;
          transition: 0.4s;
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
          color: #999;
          margin-left: 10px;
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
            background-image: linear-gradient(to right, #000, #14061f);
            // background-image: linear-gradient(to right, #c31432, #240b36);
            // background-image: linear-gradient(to right, #8e2de2, #4a00e0);
            // background-image: linear-gradient(to right, #1cd8d2, #93edc7);
          }
          .description {
            // color: white;
            color: #999;
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
