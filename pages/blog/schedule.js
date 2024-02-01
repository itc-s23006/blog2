import { client } from 'lib/api'

const Schedule = () => {
  return <h1>記事のタイトル</h1>
}

const getStaticProps = async () => {
  const resPromise = client.get({
    endpoint: 'blogs'
  })
  console.log(resPromise)

  return {
    props: {}
  }
}

export default Schedule
export { getStaticProps }
