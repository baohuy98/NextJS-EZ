import * as React from 'react';
import { Box } from '@mui/system'
import clsx from 'clsx';


export interface HeaderMobileProps {
}

export default function HeaderMobile(props: HeaderMobileProps) {
    return (
        <Box display={{ xs: 'block', lg: 'none' }}>
            header mobile
        </Box>
    );
}
