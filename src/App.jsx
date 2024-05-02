import React from "react";
import Form from "./component/Form";

const App = () => {
  return (
    <div>
      <div className="container flex mx-auto px-4 py-8">
        {/* Letter image */}
        <div className="w-1/2 bg-slate-600 flex justify-center items-center">
          <img src="/newsletter.png" alt="mail-image" className="bg-slate-400 w-full" />
        </div>
        {/* Subscribe to newsletter form */}
        <div className="w-1/2 flex justify-center items-center">
          <div className="max-w-md">
            <strong className="text-2xl font-normal">Subscribe to our newsletter</strong>
            <h3 className="font-light text-base">Receive our latest news and publications</h3>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
