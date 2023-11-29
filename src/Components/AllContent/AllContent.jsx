import React from 'react';
import './AllContent.css';

const features = [
  { id: 1, title: 'Free Courses', description: 'We provide several free courses to support the availability of education for underprivileged communities.' },
  { id: 2, title: 'Access Forever', description: 'All courses that you have registered can be accessed forever so that your learning is more comfortable and not rushed.' },
  { id: 3, title: 'Consulting Group', description: 'There is a consultation group which is useful if you want to ask a question and you can also open a new discussion.' },
  { id: 4, title: 'More Directed Learning', description: 'The course provides courses from basic to expert level so that everyone can learn with the services we provide.' },
  { id: 5, title: 'Personalized Learning Paths', description: 'Our platform offers personalized learning paths tailored to your individual pace and style, ensuring a unique and effective learning experience.' },
  { id: 6, title: 'Top OutComes', description: 'We present the top 5 courses available on the internet, offering accurate and comprehensive content.' }
  // Add more benefits here
];

const AllContent = () => {
  return (
    <div>
      <h1 className="main-heading">Benefits of joining in MentorMind</h1>
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature">
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllContent;
