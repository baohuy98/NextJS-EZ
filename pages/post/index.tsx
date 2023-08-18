import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface PostPageProps {
    posts: any[]
}

export default function PostPage({ posts }: PostPageProps) {
    // console.log(posts)
    return (
        <div>
            <h1>Post page</h1>
            <ul>
                {posts.map(post => <li key={post.id}>
                    <Link href={`/post/${post.id}`}>
                        <p>{post.id} - {post.title}</p>
                    </Link>
                </li>)}
            </ul>
        </div>
    );
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (context: GetStaticPropsContext) => {
    console.log('static props')
    // server side và chỉ chạy lúc build time
    // do function này chạy phía server nên có thể xem nó là 1 node  nhỏ có thể query data 
    const response = await fetch('https://js-post-api.herokuapp.com/api/posts?page=1');
    const data = await response.json()
    console.log({ data })
    return {
        props: {
            posts: data, // return về gì thì component chứa hàm này sẽ nhận được props là cái đó
        },
    };
};
