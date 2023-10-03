import React from 'react';

const Skills = () => {
    return (
      <div>
        <h1 className="text-3xl font-semibold text-center">
          Professional Skills
        </h1>
        <div className="flex flex-wrap justify-between p-6 mx-32 my-10 shadow-2xl">
          <div className="w-[49%] p-3">
            HTML
            <div className="bar">
              <div className="progrs"></div>
            </div>
            Javascript
            <div className="bar">
              <div className="progrs"></div>
            </div>
          </div>
          <div className="w-[49%] p-3">
            CSS
            <div className="bar">
              <div className="progrs"></div>
            </div>
            React
            <div className="bar">
              <div className="progrs"></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Skills;
