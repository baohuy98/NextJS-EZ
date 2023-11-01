import * as React from 'react';
import { Box } from '@mui/system'
import HeaderDesktop from './Header-desktop';
import HeaderMobile from './Header-mobile';

export interface HeaderProps {
}

export default function Header(props: HeaderProps) {
    return (
        <Box component='header' py={2} textAlign='center'>
            <HeaderDesktop />
            <HeaderMobile />
        </Box>
    );
}
