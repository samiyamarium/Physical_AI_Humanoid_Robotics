import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  // Files inside docs/front_matter
  const frontMatter = [
    "Abstract_Acknowlegrment_Synopsis_Table_of_contents/Abstract",
    "Abstract_Acknowlegrment_Synopsis_Table_of_contents/Acknowledgement",
    "Abstract_Acknowlegrment_Synopsis_Table_of_contents/Synopsis",
    "Abstract_Acknowlegrment_Synopsis_Table_of_contents/Toc"
  ];

  // 13 chapters inside docs/book
  const bookChapters = [
    "CHAPTERS/chapter-01",
    "CHAPTERS/chapter-02",
    "CHAPTERS/chapter-03",
    "CHAPTERS/chapter-04",
    "CHAPTERS/chapter-05",
    "CHAPTERS/chapter-06",
    "CHAPTERS/chapter-07",
    "CHAPTERS/chapter-08",
    "CHAPTERS/chapter-09",
    "CHAPTERS/chapter-10",
    "CHAPTERS/chapter-11",
    "CHAPTERS/chapter-12",
    "CHAPTERS/chapter-13"
  ];

  // Files inside docs/back_matter
  const backMatter = [
    "References_Bibliography/bibliography",
    "References_Bibliography/references"
  ];

  // Combine everything
  const allDocs = [...frontMatter, ...bookChapters, ...backMatter];

  return (
    <Layout
      title={siteConfig.title}
      description="Humanoid Robot Book"
    >      
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>

      <main className="container">
        <h2 style={{textAlign: "center", marginTop: "2rem"}}>Contents</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          {allDocs.map((file, idx) => (
            <Link
              key={file}
              className="button button--outline button--lg"
              to={`/docs/${file}`}
            >
              {file
                .split("/")[1]
                .replace(/_/g, " ")
                .replace(/\b\w/g, c => c.toUpperCase())}
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
