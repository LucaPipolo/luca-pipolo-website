import Head from "next/head";
import sanityClient from "../graphql/sanity-client";
import { AllPostsDocument, AllPostsQuery, Post } from "../types/graphql";

interface HomeProps {
  posts: Post[]
}

export default function Home({ posts }: HomeProps ) {
  return (
    <>
      <Head>
        <title>Luca Pipolo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1>Luca Pipolo Website</h1>
        { posts.map((post) => (
          <p key={post._id}>{post.title}</p>
        )) }
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await sanityClient.query<AllPostsQuery>({
    query: AllPostsDocument,
  });

  return {
    props: {
      posts: data.allPost,
    },
  };
};
