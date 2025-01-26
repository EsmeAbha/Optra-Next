import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Next.js Analytics | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

const AnalyticsPage = () => {
  return (
    <DefaultLayout>
      <Analytics/>
    </DefaultLayout>
  );
};

export default AnalyticsPage;
