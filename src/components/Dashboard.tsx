import React from "react";

const features = [
  "Auth",
  "Github integration",
  "Analytics",
  "Revenue",
  "Settings",
  "User Profile",
  "Connect Telegram channels",
];

const Dashboard = () => {
  return (
    <section className="text-white py-16 px-10 lg:px-20 h-[100%] w-full text-center justify-center">
      <h2 className="text-4xl font-bold text-center mb-6">Products</h2>

    <div className="m-6">
      <div className="max-w-5xl mx-auto text-center ">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-xl">📊</span>
          <h3 className="text-2xl font-semibold">DASHBOARD</h3>
        </div>
        <p className="text-gray-400 max-w-sm mx-auto">
          Allows users to manage authentication, interact with GitHub repositories, track project data, and modify announcements.
        </p>
      </div>

    <div className=" flex flex-col text-center justify-center items-center">
      <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
        <ul className="text-lg space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              {feature}
            </li>
          ))}
        </ul>

        <div className="relative w-full max-w-3xl px-25">
        <iframe
  className="w-full h-60 lg:h-72 rounded-lg"
  src="https://www.youtube.com/embed/O41hpqmfq_E"
  title="Dashboard Promo"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>
        </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-300 transition">Go to</button>
      </div>
      </div>

      <div className="m-6">
      <div className="max-w-5xl mx-auto text-center ">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-xl">📊</span>
          <h3 className="text-2xl font-semibold">Micro editor</h3>
        </div>
        <p className="text-gray-400 max-w-sm mx-auto">
          Allows users to manage authentication, interact with GitHub repositories, track project data, and modify announcements.
        </p>
      </div>

      <div className=" flex flex-col text-center justify-center items-center">
          <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">

        <div className="relative w-full max-w-3xl px-25">
        <iframe
  className="w-full h-60 lg:h-72 rounded-lg"
  src="https://www.youtube.com/embed/O41hpqmfq_E"
  title="Dashboard Promo"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>
        </div>

           <ul className="text-lg space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              {feature}
            </li>
          ))}
        </ul>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-300 transition">Go to</button>
      </div>
      </div>

      <div className="m-6">
      <div className="max-w-5xl mx-auto text-center ">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-xl">📊</span>
          <h3 className="text-2xl font-semibold">Editor Plugin</h3>
        </div>
        <p className="text-gray-400 max-w-sm mx-auto">
          Allows users to manage authentication, interact with GitHub repositories, track project data, and modify announcements.
        </p>
      </div>

      <div className=" flex flex-col text-center justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
        <ul className="text-lg space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              {feature}
            </li>
          ))}
        </ul>

        <div className="relative w-full max-w-3xl px-25">
          <iframe
  className="w-full h-60 lg:h-72 rounded-lg"
  src="https://www.youtube.com/embed/O41hpqmfq_E"
  title="Dashboard Promo"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>
          
        </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-300 transition">Go to</button>
      </div>
      </div>

      <div className="m-6">
      <div className="max-w-5xl mx-auto text-center ">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-xl">📊</span>
          <h3 className="text-2xl font-semibold">Extension</h3>
        </div>
        <p className="text-gray-400 max-w-sm mx-auto">
          Allows users to manage authentication, interact with GitHub repositories, track project data, and modify announcements.
        </p>
      </div>

      <div className=" flex flex-col text-center justify-center items-center">
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">

        <div className="relative w-full max-w-3xl px-25">
        <iframe
  className="w-full h-60 lg:h-72 rounded-lg"
  src="https://www.youtube.com/embed/O41hpqmfq_E"
  title="Dashboard Promo"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>

        </div>

           <ul className="text-lg space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              {feature}
            </li>
          ))}
        </ul>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-300 transition">Go to</button>
      </div>
      </div>
            
    </section>
  );
};

export default Dashboard;
