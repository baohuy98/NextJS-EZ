import { Button, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import avatar from "@/images/avatar.jpg";
import Image from "next/image";

export default function HeroSection() {
    return (
        <Box component="section" pt={18}>
            <Container>
                <Stack
                    spacing={8}
                    pb={{ xs: 7, md: 9 }}
                    pt={{ xs: 4, md: 8 }}
                    direction={{ xs: "column-reverse", md: "row" }}
                    alignItems={{ xs: "center", md: "flex-start" }}
                    textAlign={{ xs: "center", md: "left" }}
                >
                    <Box>
                        <Typography component="h1" variant="h3" fontWeight="bold" mb={{ xs: 3.5, md: 5 }}>
                            Hi, I am Huy
                            <br />
                            Front-end Developer
                        </Typography>
                        <Typography variant="body1" mb={{ xs: 3.5, md: 5 }}>
                            Good day, everyone! I'm Huy Le, a 25-year-old man from HCM city.
                            I'm a Fresher Front-end Developer with 1-year experience of
                            working as a web developer at HCMC.
                        </Typography>
                        <Button variant="contained">Download Resume</Button>
                    </Box>

                    <Box
                        sx={{
                            minWidth: "240px",
                            boxShadow: "-15px 2px ",
                            color: "secondary.light",
                            borderRadius: "50%",
                        }}
                    >
                        <Image
                            style={{ borderRadius: "50%" }}
                            src={avatar}
                            alt="avatar"
                            width={240}
                        />
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}

// section
// container
//      flex-contianer (Stack)
//          flex-item(Box left)
//              h1, p , button
//          flex-item(Box right)
