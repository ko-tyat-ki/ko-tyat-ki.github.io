import './Team.css';

function Team() {
  const team = [
    "Katerina Loschinina",
    "Andrey Novikov",
    "Lucy Onischenko",
    "Katya Marchenko",
    "Luna Snieskaite",
    "Kirill Burenkov",
    "Matthew Lai",
  ]

  const specialThanks = [
    "Santiago Carbon",
    "Alex Ostrovsky",
    "Paulo Ricca",
    "Inessa Demidova",
    "Ilya Tikhonov",
    "Andrey Lapov",
    "Ivan Isakov",
    "Ilya Batii",
    "Nik Nightingale",
    "Oleg Gergel",
    "MoonCows",
    "Bennie",
    "Eugene Kozlov (WestSteel)",
    "Milo Bird",
    "Ela SIWY",
    "Joe Giacomet",
    "Petr Balabanov",
    "Alex Belov",
    "Amita Goyal",
    "Shai Yeshanov",
  ]

  return (
    <section className="ko-team" id="team">
      <div className="team">
        <h3>team</h3>
        <ul>
          {team.sort((a,b) => a.localeCompare(b)).map((name) => (<li className="ko-li">{name}</li>))}
        </ul>
      </div>
      <div className="team">
        <h3>special thanks to</h3>
        <ul>
          {specialThanks.sort((a,b) => a.localeCompare(b)).map((name) => (<li className="ko-li">{name}</li>))}
        </ul>
      </div>
    </section>
  );
}

export default Team;
