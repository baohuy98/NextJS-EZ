import { useRouter } from 'next/router';
import React, { use, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { AdminLayout, } from '@/components/layout';
import { Box, Typography } from '@mui/material'
export interface AboutPageProps {
}
const Header: any = dynamic(() => import('@/components/common/Header'), { ssr: true })

export default function AboutPage(props: AboutPageProps) {
    const router = useRouter()
    const [postList, setPostList] = useState([])
    console.log('about query: ', router.query)
    const page = (router.query?.page)
    useEffect(() => {
        if (!page) return
        (async () => {
            const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`);
            const data = await response.json()
            setPostList(data.data)
        })()
    }, [page])
    const handleNextClick = () => {
        router.push({
            pathname: '/about',
            query: {
                page: (Number(page) || 1) + 1
            }
        }, undefined, { shallow: true })
    }
    return (
        <Box>
            <Typography component='h1' variant='h3' color='primary.main'>
                About Page
            </Typography>
            <Header />
            <ul className='post-list'>
                {postList.map((post: any) => <li key={post.id}>{post.title}</li>)}
            </ul>
            <button onClick={handleNextClick}>next page</button>
        </Box>
    );
}

AboutPage.Layout = AdminLayout



export async function getStaticProps() {
    console.log('get static props')
    return {
        props: {}
    }
}