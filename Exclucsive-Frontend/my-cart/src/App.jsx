import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import TopHeader from './components/Home/TopHeader/TopHeader';
import Navbar from './components/Home/Navbar/Navbar';
import Loader from './Loader/Loader';
const Hero = lazy(() => import('./components/Home/Hero/Hero'));
const Category = lazy(() => import('./components/Home/Category/Category'));
const Products = lazy(() => import('./components/Home/Products/Products'));
const Arrival = lazy(() => import('./components/Home/Arrival/Arrival'));
const Gurantee = lazy(() => import('./components/Home/Gurantee/Gurantee'));
const Footer = lazy(() => import('./components/Home/Footer/Footer'));
const Favourites = lazy(() => import('./components/Home/Favourites/Favourites'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const MyStory = lazy(() => import('./components/About/My Story/MyStory'));
const Positive = lazy(() => import('./components/About/Positive/Positive'));
const Post = lazy(() => import('./components/About/Posts/Post'));
const Details = lazy(() => import('./components/Home/Details/Details'));
const Error = lazy(() => import('./components/Home/Error/Error'));
import DetailId from './components/DetailId.jsx'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };
  useEffect(() => {
  window.scroll(0, 0);
  }, [])
  

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={
          <>
            <TopHeader />
            <Navbar setSearchQuery={setSearchQuery} />
            <Hero />
            <Category onSelectCategory={handleSelectCategory} />
            <Products selectedCategory={selectedCategory} searchQuery={searchQuery} />
            <Arrival />
            <Gurantee />
            <Footer />
          </>
        } />
        <Route path="/favourites" element={
          <>
            <TopHeader />
            <Navbar />
            <Favourites />
          </>
        } />
        <Route path="/contact" element={
          <>
            <TopHeader />
            <Navbar />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <TopHeader />
            <Navbar />
            <MyStory />
            <Positive />
            <Post />
            <Gurantee />
            <Footer />
          </>
        } />
        <Route path="/details/:id" element={
          <>
            <DetailId/>
          </>
        } />
        <Route path="*" element={
          <>
            <TopHeader />
            <Navbar />
            <Error />
            <Footer />
          </>
        } />
      </Routes>
    </Suspense>
  );
}

export default App;
