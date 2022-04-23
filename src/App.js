import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Services, Contact, Closed, NotFound } from "./pages";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isWorkingTime, setIsWorkingTime] = useState(false);
  /* verification de l'heure de travail 
  et du jour de travail (lundi-vendredi) 
  et de la fermeture du site (9h-17h)*/
  useEffect(() => {
    document.title = "Timed Web App";
    const isWorkingPeriod = async () => {
      const response = await fetch("/api/isworkingtime");
      return await response.json();
    };
    isWorkingPeriod().then((webapp) => {
      setIsLoading(false);
      if (!webapp.closed) {
        setIsWorkingTime(true);
      }
    });
  }, []);

  // affichage du loader lors de la vérification de l'heure de travail et du jour de travail
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // vue à afficher si le site est fermé
  if (!isWorkingTime) {
    return <Closed />;
  }
  // vue à afficher au heure de travail et au jour de travail
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/*vue à afficher si la page n'existe pas  (404)*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
