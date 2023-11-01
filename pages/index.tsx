"use-client";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "../models";
import { Box } from "@mui/system";
import HeroSection from "@/components/home/Hero";
import RecentPosts from "@/components/home/recent-posts";

const Home: NextPageWithLayout = () => {

  return (
    <Box>
      <HeroSection />
      <RecentPosts />
    </Box>
  )
};

Home.Layout = MainLayout;

export default Home;
