import useTranslation from 'next-translate/useTranslation'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'
import { PageSEO } from '@/components/SEO'

export async function getStaticProps({ locale, locales }) {
  return { props: { locale, availableLocales: locales } }
}

export default function Projects({ locale, availableLocales }) {
  const { t } = useTranslation()

  return (
    <>
      <PageSEO
        title={`${t('headerNavLinks:projects')} - ${siteMetadata.author}`}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
      <div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t('projects:title')}
          </h1>
        </div>
        <div className="container w-full py-12">
          {projectsData.map((d) => (
            <ProjectCard
              key={d.title}
              title={d.title}
              description={d.description}
              image={`https://res.cloudinary.com/raf-ar/image/upload/v1651409847/blog/projects/${d.title.toLowerCase()}.jpg`}
              link={d.link}
            />
          ))}
        </div>
      </div>
    </>
  )
}
