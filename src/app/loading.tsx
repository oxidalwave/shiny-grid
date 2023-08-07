import Spinner from "~/components/common/Spinner";

export default function HomePageLoading() {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-700 bg-opacity-50 z-10">
      <Spinner />
    </div>
  );
}
