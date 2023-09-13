import Sliderbar from "../../components/Sliderbar";
import Center from "../../components/Center";
export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hiiden">
      <main className="flex">
        <Sliderbar/>
        <Center/>
      </main>
    </div>  
  );
}
