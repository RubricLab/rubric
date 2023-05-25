import { Button, Header } from "ui";
import BackgroundGrid from "./components/BackgroundGrid";

export default function Page() {
  return (
    <div className="h-full w-full center bg-off-white flex-col relative overflow-y-hidden">
      <BackgroundGrid className="absolute translate-y-10 w-full" />
      <div className="center flex-col space-y-4 z-10">
        <Header text="Rubric" />
        <Button />
      </div>
    </div>
  );
}
