import React from 'react'

const Index = () => {
  return (
    <>
    

      


        {/* <!-- pagination--> */}
        <section className="pt-12">
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end"
            >
                <div className="bg-blue-600 text-white px-4 py-1 rounded-full">
                    1
                </div>
                <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
                    2
                </div>
                <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
                    3
                </div>
                <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
                    4
                </div>
            </div>
        </section>

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

export default Index