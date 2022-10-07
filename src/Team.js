import './Team.css';

function Team() {
  const team = [
    "Katerina Loschinina",
    "Andrey Novikov",
    "Lucy Onischenko",
    "Alex Ostrovsky",
    "Paulo Ricca",
    "Inessa Demidova",
    "Ilya Tikhonov",
    "Santiago Carbon",
    "Katya Marchenko",
    "Andrey Lapov",
    "Ivan Isakov",
    "Ilya Batii",
    "Nik Nightingale",
    "Oleg Gergel",
    "PARANORMA",
    "MoonCows",
    "Milo Bird",
    "Michal Haber",
  ]

  return (
    <section className="ko-team">
      <div className="team">
        <ul>
          {team.sort((a,b) => a.localeCompare(b)).map((name) => (<li className="ko-li">{name}</li>))}
        </ul>
      </div>
    </section>
  );
}

export default Team;
