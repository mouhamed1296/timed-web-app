//create express server
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.static("public"));

/* middleware pour les routes de l'api autorisant l'accès à la page seulement 
si le jour et l'heure sont dans les limites de travail (9h-17h)  
et si le jour est un jour de travail (lundi-vendredi)  
et si le serveur est en marche
 */
const workingHours = (req, res, next) => {
  const workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const date = new Date();
  const hours = date.getHours();
  //getDay() returns the day of the week
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  if (workingDays.includes(day) && hours >= 9 && hours <= 17) {
    next();
  } else {
    res.json({ closed: true });
  }
};

// route pour la vérification de l'heure de travail (9h-17h) et du jour de travail (lundi-vendredi)
app.get("/api/isworkingtime", workingHours, (req, res) => {
  res.json({ closed: false });
});

// allume le serveur
app.listen(8000, () => {
  console.log("listening on port 8000");
});
