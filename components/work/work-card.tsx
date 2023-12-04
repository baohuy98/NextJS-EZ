import { Work } from "@/models";
import * as React from "react";
import {
    Box,
    Container,
    Stack,
    Typography,
    Chip,
    Link as MuiLink,
} from "@mui/material";
import Image from "next/image";
export interface WorkCardProps {
    work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
    return (
        <Stack
            direction={{
                xs: "column",
                md: "row",
            }}
            spacing={2}
        >
            <Box
                width={{
                    xs: "100%",
                    md: "246px",
                }}
                flexShrink={0}
            >
                <Image src={work.thumbnailUrl} alt="imgWork" width={246} height={180} />
            </Box>

            <Box>
                <Typography variant="h4">{work.title}</Typography>

                <Stack direction="row">
                    <Chip color="default" label={work.createAt} size="small" />

                    {work.tagList.join(", ")}
                </Stack>

                <Typography>{work.shortDescription}</Typography>
            </Box>
        </Stack>
    );
}
