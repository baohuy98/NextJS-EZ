import { useRouter } from 'next/router';
import * as React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

export interface PostPageProps {
    posts: any
}

export default function PostDetailPage({ posts }: PostPageProps) {
    const router = useRouter()
    if (!posts) return null
    return (
        <div>
            <h1>Post detail page</h1>
            <p>Query: {JSON.stringify(router.query)}</p>
            <p>{posts.post_title}</p>
        </div>
    );
}


export const getStaticPaths: GetStaticPaths = async () => {
    console.log('Get staitc path')
    const response = await fetch('https://64a65fcb096b3f0fcc7fa31a.mockapi.io/post');
    const data = await response.json()
    return {
        paths: data.map((post: any) => ({ params: { postId: post.id } })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (context: GetStaticPropsContext) => {
    console.log('get static props:', context.params?.postId)
    const postId = context.params?.postId
    if (!postId) return { notFound: true }
    const response = await fetch(`https://64a65fcb096b3f0fcc7fa31a.mockapi.io/post/${postId}`);
    const data = await response.json()
    console.log({ data })
    return {
        props: {
            posts: data
        },
    };
};

