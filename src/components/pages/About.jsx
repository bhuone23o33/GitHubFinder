import React from 'react'

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <div>
            <p className='mb-4 text-2xl font-light'>
            The GitHub Finder App is a React-based project that lets users search for GitHub repositories using the GitHub API.
             It offers a user-friendly interface to enter search queries, view repository details like stars and language, and provides links to the actual repositories. 
             
            </p>
            <p className='text-lg text-gray-400'>
                Version <span className='text-white'>1.0.0</span>
            </p>
            
        </div>
    </div>
  )
}

export default About
