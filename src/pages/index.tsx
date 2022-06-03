import type { NextPage } from "next";
import dynamic from "next/dynamic";
const DynamicIndexPage = dynamic(() => import("../components/IndexPage"), { loading: () => <div>loading...</div>, ssr: false });

const Home: NextPage = () => {
  return (
    <DynamicIndexPage />
  );
};

export default Home;
