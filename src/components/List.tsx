import React from 'react'

const List = () => {
    return (
        <>
            {/* <!-- navigation --> */}
            <nav className="bg-slate-100 shadow-md">
                <div
                    className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
                >
                    <a href="/">
                        <img
                            className="h-10"
                            src="./assets/lws.svg"
                            alt="Learn with Sumit"
                        />
                    </a>
                    <div
                        className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                    >
                        {/* <!-- search --> */}
                        <form>
                            <input
                                className="outline-none border-none mr-2"
                                type="search"
                                name="search"
                                placeholder="Search"
                            />
                        </form>
                        <img
                            className="inline h-4 cursor-pointer"
                            src="./assets/search.svg"
                            alt="Search"
                        />
                    </div>
                </div>
            </nav>

         

            {/* <!-- footer --> */}
            <section className="pt-6">
                <div
                    className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400"
                >
                    <div>Copyright 2022 Learn with Sumit.</div>
                    <div>
                        <a
                            href="https://youtube.com/learnwithsumit"
                            target="_blank"
                            rel="noreferrer"
                        >
                            YouTube Channel
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default List