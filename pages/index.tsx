import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";

import PortalLayout from "../Components/Layouts/Portal";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className="text-[44px] font-bold underline text-red-400 uppercase">tailwindcss</h2>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"></svg>
          </span>
        </div>
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
        </p>
      </div>
    </div>
  );
};

Home.getLayout = (
  page: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined
) => {
  return (
    <PortalLayout
      meta={{
        title: "Home",
        name: "description",
        description: "Create next app project",
      }}>
      {page}
    </PortalLayout>
  );
};

export default Home;
