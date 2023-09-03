import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <>
            <header className="flex gap-4 justify-end">
                <a href="https://github.com/Maginobion">
                    <i className="fa-brands fa-github text-2xl text-slate-200 hover:text-slate-400"></i>
                </a>
                <a href="https://dylan-gonzales.vercel.app/">
                    <i className="fa-solid fa-suitcase text-2xl text-slate-200 hover:text-slate-400"></i>
                </a>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default DefaultLayout;

