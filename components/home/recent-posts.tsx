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
import { Post } from "@/models/post";
export interface RecentPostsProps { }

export default function RecentPosts(props: RecentPostsProps) {

    const postList: Post[] = [
        {
            id: "1",
            title: "Making a design system from scratch",
            publishedDate: "1648363391671",
            tagList: ["Design", "Pattern"],
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex natus at eveniet est nulla minima unde quam sapiente. Numquam voluptates quasi voluptatibus voluptatum corporis, consectetur soluta placeat amet reiciendis nisi!",
        },
        {
            id: "2",
            title: "Creating pixel perfect icons in Figma",
            publishedDate: "1648363391671",
            tagList: ["Figma", "Icon Design"],
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex natus at eveniet est nulla minima unde quam sapiente. Numquam voluptates quasi voluptatibus voluptatum corporis, consectetur soluta placeat amet reiciendis nisi!",
        },


    ];

    return (
        <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
            <Container>
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
                    {postList.map(post => (
                        <Box key={post.id}>
                            <PostCard post={post} />
                        </Box>
                    ))}

                </Stack>
            </Container>
        </Box>
    );
}
