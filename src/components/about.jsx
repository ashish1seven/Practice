import React from 'react';

const About = () => {
    return (
      <div className="flex flex-wrap justify-between p-6 mx-32 my-10 shadow-2xl">
        <div className="w-[49%] p-5">
          <h1 className="text-2xl text-center">About</h1>
          <br />
          <p>
            I have experience in various programming languages such as C, C++,
            Java, and Python with a keen interest in web development. Aspiring
            to a challenging position to see myself grow efficiently and
            strengthen my performance. A self-motivated achiever with the
            ability to plan and execute.
          </p>
        </div>
        <div className='w-[49%] p-5'>
                <h1 className="text-2xl text-center">Basic Information</h1>
                <br />
                Age : 22
                <br />
                Mail : ashishbobbari@gmail.com
                <br />
                Address : Bilaspur, Chhattisgarh. 495009
                <br />
                Language : Hindi, English, Telugu
        </div>
      </div>
    );
}

export default About;
