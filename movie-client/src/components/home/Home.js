import React from 'react'
import Hero from '../hero/Hero'
import { useState, useEffect } from 'react';
function Home({movies}) {
  
  return (
    <Hero movies={movies} />
  )
}

export default Home