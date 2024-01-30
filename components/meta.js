import Head from 'next/head'

/* サイトに関する情報 */
import { siteMeta } from 'lib/constants'
const {
  siteTitle,
  siteDesc,
  siteUrl,
  siteLocale,
  siteType,
  siteIcon
} = siteMeta

const Meta = ({ pageTitle }) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta property='og:title' content={pageTitle} />
    </Head>
  )
}

export default Meta
