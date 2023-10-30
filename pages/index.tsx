"use-client";
import { useRouter } from "next/router";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "../models";
import { Box } from "@mui/system";

const Home: NextPageWithLayout = () => {
  const router = useRouter();
  function goToDetailPage() {
    router.push({
      pathname: "post/[postId]",
      query: {
        postId: 123, // path param
        ref: "social", // query param url.com/path?...
      },
    });
  }
  return <Box>Home Page</Box>;
};

Home.Layout = MainLayout;

export default Home;
