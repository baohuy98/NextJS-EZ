import {
    Box,
    Container,
    Stack,
    Typography,
    Link as MuiLink,
} from "@mui/material";
import * as React from "react";
import Link from "next/link";
import PostCard from "./post-card";
import { Work } from "@/models";
export interface FeatureWorksProps { }

export default function FeatureWorks(props: FeatureWorksProps) {

    const postList: Work[] = [
        {
            id: "1",
            title: "Making a design system from scratch",
            createAt: "1648363391671",
            updatedAt: " 1648363391671",
            tagList: ["Design", "Pattern"],
            thumbnailUrl: '',
            shortDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex natus at eveniet est nulla minima unde quam sapiente. Numquam voluptates quasi voluptatibus voluptatum corporis, consectetur soluta placeat amet reiciendis nisi!",
            fullDescription:
                "orem ipsum dolor sit amet consectetur adipisicing elit. Ex natus at eveniet est nulla minima unde quam sapiente. Numquam voluptates quasi voluptatibus voluptatum corporis, consectetur soluta placeat amet reiciendis nisi!"
        },
        {
            id: "1",
            title: "Making a design system from scratch",
            createAt: "1648363391671",
            updatedAt: " 1648363391671",
            tagList: ["Design", "Pattern"],
            thumbnailUrl: '',
            shortDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex natus at eveniet est nulla minima unde quam sapiente. Numquam voluptates quasi voluptatibus voluptatum corporis, consectetur soluta placeat amet reiciendis nisi!",
            fullDescription:
                "orem ipsum dolor sit amet consectetur adipisicing elit. Ex natus at eveniet est nulla minima unde quam sapiente. Numquam voluptates quasi voluptatibus voluptatum corporis, consectetur soluta placeat amet reiciendis nisi!"
        },


    ];

    return (
        <Box component="section" pt={2} pb={4}>
            <Container>
                <Typography variant="h5">Featured Work</Typography>

                <Stack
                    direction="row"
                    mb={2}
                    justifyContent={{
                        xs: "center",
                        md: "space-between",
                    }}
                >
                    <Typography variant="h5">Recent post</Typography>
                    <Link passHref href="/blog">
                        <MuiLink
                            sx={{
                                display: {
                                    xs: "none",
                                    md: "inline-block",
                                },
                            }}
                        >
                            View all
                        </MuiLink>
                    </Link>
                </Stack>

                <Stack
                    direction={{
                        xs: "column",
                        md: "row",
                    }}
                    spacing={4}
                    sx={{
                        "& > div": {
                            width: {
                                xs: "100%",
                                md: "50%",
                            },
                        },
                    }}
                >
                    {/* {postList.map(post => (
                        <Box key={post.id}>
                            <PostCard post={post} />
                        </Box>
                    ))} */}

                </Stack>
            </Container>
        </Box>
    );
}
