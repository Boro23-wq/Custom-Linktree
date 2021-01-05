import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Sintu Boro</title>
        <link rel='icon' href='favicon.ico' />
      </Head>

      <main>
        <img className='image' src='profile.jpg' />
        <h3 className='description'>@SintuBoro</h3>
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
            href='https://www.linkedin.com/in/sintu-boro-5a5aa415b/'
            target='_blank'
            className='card'
          >
            <h3>LINKEDIN</h3>
          </a>
          <a
            href='https://www.instagram.com/x.middlechild/'
            target='_blank'
            className='card'
          >
            <h3>INSTAGRAM</h3>
          </a>
          <a
            href='https://github.com/Boro23-wq'
            target='_blank'
            className='card'
          >
            <h3>GITHUB</h3>
          </a>
        </div>
        <footer className='footer'>© All rights reserved – Sintu Boro</footer>
      </main>

      <style jsx global>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
          color: black;
          text-align: center;
          line-height: 1.5;
          font-size: 1rem;
          margin: 0.5rem 1rem;
          // background: -webkit-linear-gradient(72deg, #4776e6, #8e54e9);
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
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
          // #d7f379 #3925ec
        }

        .card h3 {
          margin: 0 1rem 0 1rem;
          font-size: 0.9rem;
        }

        .footer {
          color: white;
          margin-top: 60px;
          font-size: 0.75rem;
        }

        /** Dark mode */
        @media (prefers-color-scheme: dark) {
          .container {
            background-image: linear-gradient(
              to right,
              #5433ff,
              #a6ffcb
            );
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
