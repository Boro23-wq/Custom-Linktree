import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>dev01d</title>
        <link rel="icon" href="favicon.ico" />
        <script
          async
          defer
          data-website-id="39d4097d-a382-4288-94eb-de9889a649e6"
          src="https://umami.dev01d.com/umami.js"
        ></script>
      </Head>

      <main>
        <img className="image" src="profile.jpg" />
        <h3 className="description">jason.behnke</h3>
        <div className="grid">
          <a href="https://jasonbehnke.io" className="card">
            <h3>My Website</h3>
          </a>
          <a href="https://dev.to/dev01d" className="card">
            <h3>Technical writing</h3>
          </a>
          <a
            href="https://vscodethemes.com/e/dev01d.devoid-theme"
            className="card"
          >
            <h3>VSCode Theme</h3>
          </a>
          <a href="https://github.com/dev01d" className="card">
            <h3>Github</h3>
          </a>
          <a href="https://www.twitch.tv/dev01d_" className="card">
            <h3>Twitch</h3>
          </a>
          <a href="mailto:contact@jasonbehnke.io" className="card">
            <h3>Contact</h3>
          </a>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .image {
          border-radius: 50%;
          height: 200px;
          width: 200px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
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
          text-align: center;
          color: black;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 1rem;
        }

        .card {
          margin: 0.5rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          background: #fafafa;

          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          min-width: 350px;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 3rem 0 3rem;
          font-size: 1.5rem;
        }

        /** Dark mode */
        @media (prefers-color-scheme: dark) {
          .container {
            background: rgb(53, 53, 53);
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
