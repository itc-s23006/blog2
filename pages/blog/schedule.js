import { client } from 'lib/api'

const Schedule = () => {
  return <h1>記事のタイトル</h1>
}

const getStaticProps = async () => {
  console.log('処理1')
  setTimeout(() => console.log('処理2'), 1000)
  console.log('処理3')

  return {
    props: {}
  }
}

export default Schedule
export { getStaticProps }
