import { Work } from '@/models';
import { Fragment } from 'react'
import {
    Box,
    Divider
} from "@mui/material";
export interface WorkListProps {
    workList: Work[]
}

export default function WorkList({ workList }: WorkListProps) {
    if (workList.length === 0) return null
    return (
        <Box>
            {workList.map((work) => (
                <Fragment key={work.id}>
                    <Box>
                        {work.title}
                    </Box>
                    <Divider sx={{
                        my: 3
                    }} />
                </Fragment>
            ))}

        </Box>
    );
}
