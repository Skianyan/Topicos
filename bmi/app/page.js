import Form from "./components/Form";

export default function Home() {
	return <main className="flex flex-col items-center space-y-5">
    <section >
      <h1 className="text-3xl text-bold mt-10">Indice de Masa Corporal</h1>
    </section>
    <section className="w-[80vw]">
      <Form/>
    </section>
  </main>;
}
