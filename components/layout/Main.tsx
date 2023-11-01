import { LayoutProps } from '@/models/index';
import { Container, Stack } from '@mui/material';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Footer from '../common/Footer';
import { Box } from '@mui/system'
import Header from '../common/Header';

export function MainLayout({ children }: LayoutProps) {
    useEffect(() => {
        console.log('main layout mounting')

        return () => console.log('main layout unmounting')
    }, [])
    return (
        <Stack minHeight='100vh'>
            <Header />

            <Box flexGrow={1} component='main'>

                {children}
            </Box>

            <Footer />
        </Stack>
    );
}