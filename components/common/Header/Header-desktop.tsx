import * as React from "react";
import { Box } from "@mui/system";
import { Container, Stack, Link as MUILink } from "@mui/material";
import { ROUTE_LIST } from "./routes";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
export interface HeaderDesktopProps { }

export default function HeaderDesktop(props: HeaderDesktopProps) {
    const router = useRouter();
    return (
        <Box display={{ xs: "none", lg: "block" }}>
            Header Desktop
            <Container>
                <Stack direction="row" justifyContent="flex-end">
                    {ROUTE_LIST.map((route) => (
                        <Link key={route.path} href={route.path} passHref>
                            <MUILink
                                sx={{
                                    ml: 2,
                                }}
                                className={clsx({ active: (router.pathname === route.path) })}
                            >
                                {route.label}
                            </MUILink>
                        </Link>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
