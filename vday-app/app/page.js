import Image from "next/image";

export default function Home() {
  return (
    <div >
      <main>
        <div className="flex-container">
          
          <div className="wrapper">
            <div className="lid one"></div>
            <div className="lid two"></div>
            <div className="envelope"></div>
            <div className="text-center content transform-style-preserve">
              <h1 className="main-text">Will you be my Valentine?</h1>

              <div className="flex justify-center gap-6 mt-4">
                <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-full">
                  Yes
                </button>
                <button className="bg-red-500 text-white font-bold py-2 px-6 rounded-full">
                  No
                </button>
              </div>

            </div>
          
          </div>
          
          
            
        </div>
      </main>
    </div>
  );
}
