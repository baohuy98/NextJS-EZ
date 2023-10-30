import { LayoutProps } from '@/models/index';
import { Container, Stack } from '@mui/material';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Box } from '@mui/system'

export function MainLayout({ children }: LayoutProps) {
    useEffect(() => {
        console.log('main layout mounting')

        return () => console.log('main layout unmounting')
    }, [])
    return (
        <Stack minHeight='100vh'>
            <Header />

            <Container maxWidth='sm'
                sx={{
                    bgcolor: 'primary.main'
                }}
            >
                SM Container
            </Container>

            <Container maxWidth='md'
                sx={{
                    bgcolor: 'primary.main'
                }}
            >
                MD Container
            </Container>


            <Box flexGrow={1} component='main'>
                <Link href='/'>
                    <span>Home</span>
                </Link>
                <Link href='/blog'>
                    <span>Blog</span>
                </Link>
                <Link href='/works'>
                    <span>Work</span>
                </Link>
                {children}
            </Box>

            <Footer />
        </Stack>
    );
}
