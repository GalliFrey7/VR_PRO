import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <section className="hero flexCenter linearGradient h-screen text-white text-center">
        <div className="max-container">
          <h1 className="h1 text-black">Innovatech VR Pro</h1>
          <p className="regular-20 mb-8">Experience the future of virtual reality with Innovatech VR Pro.</p>
          <button className="btn_white_hover">Learn More</button>
        </div>
      </section>
      <section className="features py-20 flex flex-col lg:flex-row justify-around text-center text-white">
        <div className="feature flex-1 px-6">
          <h2 className="h2">Immersive Experience</h2>
          <p className="regular-15">Enjoy the most immersive VR experience with our advanced technology.</p>
        </div>
        <div className="feature flex-1 px-6">
          <h2 className="h2">High Resolution</h2>
          <p className="regular-15">See every detail with our high-resolution displays.</p>
        </div>
        <div className="feature flex-1 px-6">
          <h2 className="h2">Comfortable Design</h2>
          <p className="regular-15">Experience VR comfortably with our ergonomic design.</p>
        </div>
      </section>
      <section className="video-tour py-20 text-center">
        <h2 className="h2">Guided Tour</h2>
        <div className="w-screen h-auto">
          <video autoPlay loop muted playsInline className="w-full  object-cover">
            <source src="https://www.apple.com/105/media/us/apple-vision-pro/guided-tour/2024/7c64af40-2add-42ef-886f-18a5725bc188/anim/hero/large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default Home;
