import './App.css';
import Hero from './components/hero/hero';
import Gift from './components/gift/gift';
import Nav from './components/nav/nav';
import Grid from './components/grid/grid'
import Footer from './components/footer/footer'
function App() {
  return (
    <div className="font-roboto">
      
      <head>
        <meta property="og:title" content="Jake Dobler's Apple" />
        <title>Apple Home</title>
        <meta name="description" content="Jake Dobler's Apple Clone"/>
      </head>
      <Nav />
    <Hero >

      </Hero>
      <Gift></Gift>
      <Grid />
      <Footer />
      </div>
  );
}

export default App;
