import dynamic from "next/dynamic";

const App = dynamic(() => import("../../components/AppShell"), {
  ssr: false,
});

export const dynamicParams = true;

export async function generateStaticParams() {
  return [
    { all: ["home"] },
    { all: ["resources"] },
    { all: ["library"] },
    { all: ["profile"] },
  ];
}

export default function Page() {
  return <App />;
}
