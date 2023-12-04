"use-client";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "../models";
import { Box } from "@mui/system";
import HeroSection from "@/components/home/Hero";
import RecentPosts from "@/components/home/recent-posts";
import FeatureWorks from "@/components/home/featured-work";

const Home: NextPageWithLayout = () => {

  return (
    <Box>
      <HeroSection />
      <RecentPosts />
      <FeatureWorks />
    </Box>
  )
};

Home.Layout = MainLayout;

export default Home;
