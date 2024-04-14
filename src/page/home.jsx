import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function Home() {
	return (
		<>
			<div className=" bg-slate-900">
				<Header />
			</div>
			<div className="bg-fond-one bg-cover h-screen">
				<p> hello </p>
			</div>
			<div className="bg-fond-two bg-cover h-screen">
				<p> hello </p>
			</div>
			<div className="bg-fond-three bg-cover h-screen">
				<p> hello </p>
			</div>
			<div className="">
				{" "}
				<Footer />{" "}
			</div>
		</>
	);
}
