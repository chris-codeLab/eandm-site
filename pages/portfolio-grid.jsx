import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
const PortfolioGridIsotope = dynamic(
  () => import("@/src/components/PortfolioGridIsotope"),
  {
    ssr: false,
  }
);
const PortfolioGrid = () => {
  return (
    <Layout noHeaderBg pageName={"Portfolio 1"}>
      <section
        className="splash-area-section"
        style={{ backgroundImage: "url(assets/img/banner_Products.jpg)" }}
      >
        <div className="container">
          <div className="splash-area">
            <h2>Stay Current</h2>
            <a href="#">In-Person & Remote Learing Resources</a>
          </div>
        </div>
      </section>
      <PortfolioGridIsotope />
    </Layout>
  );
};
export default PortfolioGrid;
