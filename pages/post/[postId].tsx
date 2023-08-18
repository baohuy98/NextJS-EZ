import { useRouter } from 'next/router';
import * as React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

export interface PostPageProps {
    posts: any
}

export default function PostDetailPage({ posts }: PostPageProps) {
    const router = useRouter()
    if (router.isFallback) {
        return <div style={{ color: 'red' }}>Loading...</div>
    }
    if (!posts) return null
    return (
        <div>
            <h1>Post detail page</h1>
            <p>Query: {JSON.stringify(router.query)}</p>
            <p>{posts.title}</p>
        </div>
    );
}


export const getStaticPaths: GetStaticPaths = async () => {
    console.log('Get staitc path')
    const response = await fetch('https://js-post-api.herokuapp.com/api/posts?page=1');
    const data = await response.json()
    return {
        paths: data.map((post: any) => ({ params: { postId: post.id } })),
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (context: GetStaticPropsContext) => {
    console.log('get static props:', context.params?.postId)
    const postId = context.params?.postId
    if (!postId) return { notFound: true }
    const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
    const data = await response.json()
    console.log({ data })
    return {
        props: {
            posts: data
        },
        revalidate: 5
    };
};

