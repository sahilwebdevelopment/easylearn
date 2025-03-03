export default function Home() {
  return (
    <div>
<div className="flex items-center justify-between mt-10 shodow-xl rounded-lg flex-col">
<div className="p-5 text-center shadow-xl rounded-lg mt-10">
<div className="text-2xl">Test your knowledge:</div>
<a className="bg-orange-400 p-2 text-xl text-white rounded-lg my-5 cursor-pointer block" href="/numbers">Atomic Number</a>
<a className="bg-orange-400 p-2 text-xl text-white rounded-lg my-5 cursor-pointer block" href="/masses">Atomic Mass</a>
<a className="bg-orange-400 p-2 text-xl text-white rounded-lg my-5 cursor-pointer block" href="/elements">Element Names</a>
</div>
</div>
    </div>
  );
}
