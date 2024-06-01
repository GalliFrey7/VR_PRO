import React from 'react';

const newsItems = [
  {
    date: '2024-06-01',
    title: 'Innovatech VR Pro Official Release Date Announced',
    content: 'We are excited to announce that Innovatech VR Pro will be officially released on July 15, 2024. Stay tuned for more updates!',
  },
  {
    date: '2024-05-20',
    title: 'Innovatech VR Pro Pre-orders Now Open',
    content: 'Pre-orders for Innovatech VR Pro are now open. Reserve your unit today to be among the first to experience the future of virtual reality.',
  },
  {
    date: '2024-05-15',
    title: 'Innovatech VR Pro - Features and Specifications',
    content: 'Discover the cutting-edge features and specifications of Innovatech VR Pro. Read our detailed article to learn more.',
  },
];

const News = () => {
  return (
    <div className="news-page text-black bg-white">
      <section className="hero flexCenter h-screen text-black text-center relative" style={{ backgroundColor: '#f5f5f7', padding: '20px' }}>
        <div className="max-container">
          <h1 className="h1 text-black">Latest News on Innovatech VR Pro</h1>
          <div className="news-feed mt-8">
            {newsItems.map((item, index) => (
              <div key={index} className="news-item mb-8 p-6 border border-gray-300 rounded">
                <h2 className="h2 mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-2">{item.date}</p>
                <p className="regular-15">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
