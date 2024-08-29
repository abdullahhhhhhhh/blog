import React from 'react';
import { FaUser } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

function Singleblog() {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    authorPic,
    published_date,
    reading_time,
    content,
  } = data[0];

  return (
    <div className="max-w-7xl mx-auto my-12 flex flex-row">

      {/* Main Content with Wider Area */}
      <main className="max-w-5xl mx-auto px-4 lg:w-full lg:mx-0">
        {/* Header */}
        <header className="py-40 text-center">
          <h3 className="text-2xl lg:text-4xl leading-snug font-bold ">
            {title}
          </h3>
        </header>

        {/* Content */}
        <div className="my-12">
          <div className="lg:grid lg:grid-cols-12 gap-12">
            {/* Image and Details (Column 1) */}
            <div className="lg:col-span-6">
              <img src={image} alt={title} className="w-full rounded-lg" />
              <div className="mt-4 flex items-center space-x-4">
                <FaUser />
                <div>
                  <p className="text-lg font-semibold">{author}</p>
                  <p className="text-gray-400 text-sm">Published on {published_date}</p>
                </div>
              </div>
            </div>

            {/* Content (Column 2) */}
            <div className="lg:col-span-6 prose lg:prose-lg">
              {content}
              <div className="mt-8">
                <p className="text-gray-400 text-base">Reading time: {reading_time} minutes</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Smaller Sidebar */}
      <aside className="hidden lg:block lg:w-1/5 lg:ml-auto">
        <Sidebar />
      </aside>
    </div>
  );
}

export default Singleblog;
