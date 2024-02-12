import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from "next/image"

const Posts = ({ posts }) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={styles.post} key={slug}>
          <Link legacyBehavior href={`/blog/${slug}`}>
            <a>
              <figure>
                <Image
                  src={eyecatch.url}
                  alt=''
                  placeholder='blur'
                  blurDataURL={eyecatch.blurDataURL}
                  fill
                  sizes='(min-width: 1152px) 576px, 50vw'
                  style={{
                    objectFit: "cover"
                  }} />
              </figure>
              <h2>{title}</h2>
            </a>
          </Link>
        </article>
      ))}
    </div>
  );
}

export default Posts
