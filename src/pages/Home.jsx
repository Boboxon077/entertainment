
function Home() {
  return (
    <>
      {/* Card */}
      <h1 className="md:ml-[153px] m-12 text-white text-2xl my-5">Trending</h1>
      <div className="m-auto flex items-center  flex-wrap gap-1">
        <div className="md:ml-[153px] m-auto card w-96 shadow-xl image-full hover:scale-110 transition-all">
          <figure><img src="https://picsum.photos/500/300" alt="Shoes" className="object-cover" /></figure>
          <div className="card-body">
            <h2 className="absolute bottom-4 left-4 text-white">Beyond Earth</h2>
            <p className="absolute bottom-10 left-4">2019 · Movie · PG</p>
          </div>
        </div>
        <div className="md:ml-[153px] m-auto card w-96 shadow-xl image-full hover:scale-110 transition-all">
          <figure><img src="https://picsum.photos/500/300" alt="Shoes" className="object-cover" /></figure>
          <div className="card-body">
            <h2 className="absolute bottom-4 left-4 text-white">Beyond Earth</h2>
            <p className="absolute bottom-10 left-4">2019 · Movie · PG</p>
          </div>
        </div>
      </div>
      <h1 className="md:ml-[153px] m-12 text-white text-2xl my-5 mt-12">Recommended for you</h1>
      {/* card */}
      <div className="flex flex-wrap">
        <div className="md:ml-[153px] m-auto card w-1/5 bg-base-100 mt-10 shadow-xl">
          <figure><img src="https://picsum.photos/500/300" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className=" card-title text-xs text-slate-500">2019 · Movie · PG</h2>
            <p className="text-2xl ">The Great Lands</p>
          </div>
        </div>
        <div className="md:ml-[153px] m-auto card w-1/5 bg-base-100 mt-10 shadow-xl">
          <figure><img src="https://picsum.photos/500/300" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className=" card-title text-xs text-slate-500">2019 · Movie · PG</h2>
            <p className="text-2xl ">The Great Lands</p>
          </div>
        </div>
        <div className="md:ml-[153px] m-auto card w-1/5 bg-base-100 mt-10 shadow-xl">
          <figure><img src="https://picsum.photos/500/300" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className=" card-title text-xs text-slate-500">2019 · Movie · PG</h2>
            <p className="text-2xl ">The Great Lands</p>
          </div>
        </div>
        <div className="md:ml-[153px] m-auto card w-1/5 bg-base-100 mt-10 shadow-xl">
          <figure><img src="https://picsum.photos/500/300" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className=" card-title text-xs text-slate-500">2019 · Movie · PG</h2>
            <p className="text-2xl ">The Great Lands</p>
          </div>
        </div>
        <div className="md:ml-[153px] m-auto card w-1/5 bg-base-100 mt-10 shadow-xl">
          <figure><img src="https://picsum.photos/500/300" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className=" card-title text-xs text-slate-500">2019 · Movie · PG</h2>
            <p className="text-2xl ">The Great Lands</p>
          </div>
        </div>
        <div className="md:ml-[153px] m-auto card w-1/5 bg-base-100 mt-10 shadow-xl">
          <figure><img src="https://picsum.photos/500/300" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className=" card-title text-xs text-slate-500">2019 · Movie · PG</h2>
            <p className="text-2xl ">The Great Lands</p>
          </div>
        </div>
        <div className="md:ml-[153px] m-auto card w-1/5 bg-base-100 mt-8 shadow-xl">
          <figure><img src="https://picsum.photos/500/300" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className=" card-title text-xs text-slate-500">2019 · Movie · PG</h2>
            <p className="text-2xl ">The Great Lands</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
