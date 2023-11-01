import { Post } from "@/models/post";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import * as React from "react";
import { format } from 'date-fns'

export interface PostCardProps {
    post: Post;
}

export default function PostCard({ post }: PostCardProps) {
    if (!post) return null;
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" fontWeight="bold">
                    {post.title}
                </Typography>
                <Typography
                    variant="body1"
                    my={2}
                    sx={{
                        display: "flex",
                    }}
                >

                    {format(Number(post.publishedDate), 'dd MMM yyyy')}

                    <Divider
                        orientation="vertical"
                        sx={{
                            mx: 2,
                        }}
                        flexItem
                    />

                    {post.tagList.join(", ")}
                </Typography>

                <Typography variant="body2">{post.description}</Typography>
            </CardContent>
        </Card>
    );
}