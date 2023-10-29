"use client"
import { NavBar } from '@/components';
import React, { useState } from 'react';

const initialBlogs = [
  {
    id: 1,
    title: 'The Art of Growing Paddy: A Farmers Perspective',
    content: `As I stand in the middle of my lush paddy fields, I can't help but feel a profound connection to the earth and a deep sense of pride in what I do. For years, I've been a paddy farmer, and this crop has become more than just a means of livelihood—it's an art form, a way of life.

    Paddy, also known as rice, is a staple food for billions of people around the world. Its cultivation is a complex and rewarding process that requires dedication, knowledge, and a deep understanding of the land. In this blog, I want to share with you the art of growing paddy from the perspective of a seasoned farmer.
    
    Choosing the Right Variety
    
    The first step in paddy cultivation is selecting the right variety of rice to grow. There are thousands of rice varieties, each with its unique characteristics and requirements. Factors such as climate, soil type, and water availability play a crucial role in determining the best variety for a particular region. As a farmer, I've learned to assess these factors and make informed decisions to ensure a successful harvest.
    
    Preparation and Planting
    
    Preparing the land for paddy cultivation is no small task. It involves plowing the fields, leveling the soil, and creating channels for proper water management. The artistry lies in achieving a balance between maintaining an adequate water level and preventing waterlogging, which can be detrimental to the crop. Planting paddy seedlings by hand or using machinery is a meticulous process that requires careful spacing and depth.
    
    Nurturing the Crop
    
    Throughout the growth cycle, paddy plants need constant attention. Weeding, pest control, and disease management are all part of the routine. The timing of irrigation and the right amount of water are critical to healthy growth. It's not just about following a set of rules; it's about understanding the needs of the crop and the land. This knowledge is passed down through generations, enriching the art of paddy farming.
    
    Harvesting and Post-Harvest Processing
    
    When the time comes for harvest, it's a time of celebration and hard work. The ripe paddy fields turn golden, and it's a breathtaking sight to behold. Harvesting the crop efficiently and without waste is an art in itself. Once harvested, the paddy must undergo various post-harvest processes, including threshing, milling, and drying, to make it ready for consumption.
    
    Conclusion
    
    Growing paddy is more than a profession; it's a way of life, an art that demands a deep connection to the land and an understanding of the rhythms of nature. As a paddy farmer, I've come to appreciate the beauty and complexity of this crop, and I'm constantly learning new techniques to improve my yield and protect the environment.
    
    The art of growing paddy is a rich tradition that has been passed down through generations, and I'm honored to be a part of it. As I watch the next generation of farmers learn these skills, I'm filled with hope that this ancient art will continue to thrive and provide sustenance for people worldwide.`,
  },
  {
    id: 2,
    title: 'Maximizing Yields: Modern Innovations in Paddy Farming',
    content: `Paddy farming, also known as rice cultivation, has come a long way from its traditional methods. Modern agriculture and technological advancements have brought about innovations that not only increase yields but also promote sustainability and efficiency. In this blog, we'll explore some of the cutting-edge innovations in paddy farming that are helping farmers around the world maximize their rice production.
    \n
    1. Precision Agriculture
    
    Precision agriculture involves using technology such as GPS, sensors, and data analytics to make precise and informed decisions throughout the farming process. For paddy farmers, this means optimizing water and nutrient use, ensuring even planting and harvesting, and monitoring crop health in real-time. With the help of precision agriculture, farmers can reduce waste and improve crop yields.
    \n
    2. Sustainable Water Management
    
    Water is a critical factor in paddy farming. Traditional flooding methods can be water-inefficient and environmentally unsustainable. Modern innovations, like alternate wetting and drying (AWD), allow farmers to reduce water usage while maintaining crop health. AWD involves periodically allowing the fields to dry out, which not only conserves water but also reduces methane emissions, contributing to a more sustainable farming practice.
    \n
    3. High-Yielding Varieties
    
    Crop breeding has led to the development of high-yielding rice varieties. These new strains are often resistant to pests and diseases and can thrive in various environmental conditions. They provide farmers with increased yields and reduced vulnerability to crop losses, contributing to food security.
    \n
    4. Mechanization and Machinery
    
    Modern machinery, such as rice transplanters and combine harvesters, has revolutionized paddy farming. These machines can significantly reduce labor costs and increase efficiency. The use of mechanization allows farmers to plant and harvest paddy with precision and speed, saving time and resources.
    \n
    5. Smart Pest and Disease Management
    
    Advancements in pest and disease monitoring have made it easier for farmers to protect their crops. Smart sensors and data analysis can help detect early signs of pest infestations or diseases, allowing for prompt and targeted intervention. This reduces the need for excessive pesticide use and minimizes the impact on the environment.
    \n
    6. Organic and Sustainable Farming Practices
    
    The modern paddy farming landscape also includes organic and sustainable farming practices. These approaches prioritize soil health and biodiversity, reducing the reliance on chemical inputs. Practices like integrated pest management (IPM) and organic farming are gaining popularity among environmentally conscious farmers.
    
    Conclusion
    
    Paddy farming is embracing modern innovations, making it more sustainable, efficient, and productive. These innovations not only benefit farmers by increasing their yields and reducing operational costs but also have a positive impact on the environment. As technology continues to advance, paddy farming is likely to evolve even further, ensuring a brighter and more secure future for this vital crop and the communities that depend on it.`,
  },
  {
    id: 3,
    title: 'New scientific methods used for paddy cultivation',
    content: `Paddy, also known as rice, is a staple food for a significant portion of the global population. As the demand for rice continues to grow, so does the need for more efficient and sustainable methods of cultivation. In recent years, science and technology have played a crucial role in transforming paddy farming. This blog delves into some of the new scientific methods and innovations that are revolutionizing the way we cultivate rice.

    1. Genetic Engineering and Crop Improvement
    
    One of the most significant advancements in paddy cultivation has been the use of genetic engineering to develop improved rice varieties. Scientists have been working on creating genetically modified (GM) rice varieties that exhibit resistance to pests, diseases, and environmental stressors. These GM varieties not only promise higher yields but also reduced reliance on chemical pesticides.
    
    2. Precision Agriculture
    
    Precision agriculture, which involves the use of technology such as GPS, drones, and sensors, has made its way into paddy fields. These tools allow farmers to monitor and manage their fields with unprecedented accuracy. With GPS-guided tractors, farmers can precisely plant and harvest their crops, reducing waste and optimizing resource use. Sensors can monitor soil moisture, nutrient levels, and crop health in real-time, providing valuable data for decision-making.
    
    3. Sustainable Water Management
    
    Water management has been a traditional challenge in paddy cultivation, but new scientific methods are helping address this issue. Alternate wetting and drying (AWD) is a practice that allows farmers to reduce water consumption without compromising crop health. Through AWD, farmers periodically allow their fields to dry out, saving water and reducing greenhouse gas emissions.
    
    4. Biofertilizers and Organic Farming
    
    Modern agriculture has witnessed a shift towards more sustainable and environmentally friendly practices. Biofertilizers, which are based on beneficial microorganisms, have gained prominence in paddy farming. These microorganisms help improve soil fertility and nutrient availability, reducing the need for synthetic fertilizers. Organic farming methods are also being adopted, emphasizing soil health, biodiversity, and the reduction of chemical inputs.
    
    5. Data-Driven Decision Making
    
    The digital revolution has transformed paddy farming by making data-driven decisions more accessible. Farmers can now collect and analyze data on weather conditions, soil quality, and crop performance. This information empowers them to make informed choices in terms of planting times, irrigation schedules, and fertilizer applications. As a result, the potential for increased yields and resource efficiency is higher than ever.
    
    6. Integrated Pest Management (IPM)
    
    Pest and disease management is crucial in paddy cultivation. Integrated Pest Management (IPM) is a holistic approach that combines biological, physical, chemical, and cultural practices to control pests and diseases effectively. By using this method, farmers can reduce the need for chemical pesticides, minimizing the environmental impact.
    
    Conclusion
    
    New scientific methods in paddy cultivation are shaping the future of rice production. These innovations offer the promise of increased yields, reduced environmental impact, and improved livelihoods for farmers. As the world's population continues to grow, these methods will be essential in ensuring that rice remains a reliable source of sustenance for billions. Embracing science and technology is not just a choice but a necessity as we strive to meet the global demand for this vital crop while preserving the health of our planet.`
  },
];

const BlogList = ({ blogs, onBlogClick }) => {
  return (
    <main>
    <h1 className='text-center font-bold text-4xl text-blue-700 pb-10'>Blogs</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {blogs.map((blog) => (
        <div key={blog.id}>
          <div className="bg-white p-4 rounded shadow-md">
            <h5 className="text-xl font-semibold mb-2">
              <button className="text-blue-500" onClick={() => onBlogClick(blog.id)}>
                {blog.title}
              </button>
            </h5>
            <p className="text-gray-700">{blog.content}</p>
          </div>
        </div>
      ))}
    </div>
    </main>
  );
};

const Blog = ({ blog, isOpen, onToggle }) => {
  return (
    <div>
      <h2>
        <button onClick={onToggle}>{blog.title}</button>
      </h2>
      {isOpen && <p>{blog.content}</p>}
    </div>
  );
};

const App = () => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const handleBlogClick = (blogId) => {
    if (expandedBlogId === blogId) {
      setExpandedBlogId(null);
    } else {
      setExpandedBlogId(blogId);
    }
  };

  return (
    <div className="container mx-auto p-10">
        <NavBar />
      <div className='pt-10'>
      <BlogList blogs={blogs} onBlogClick={handleBlogClick} />
      {/* {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          isOpen={expandedBlogId === blog.id}
          onToggle={() => handleBlogClick(blog.id)}
        />
      ))} */}
      </div>
    </div>
  );
};

export default App;
