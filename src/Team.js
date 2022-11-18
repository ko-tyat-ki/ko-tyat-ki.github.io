import './Team.css';

function Team() {
  const team = [
    "Katerina Loschinina",
    "Andrey Novikov",
    "Lucy Onischenko",
    "Santiago Carbon",
    "Katya Marchenko",
    "Milo Bird",
    "Michael Haber",
    "Ela SIWY",
    "Ryan McElhone",
    "Monica Leonova",
    "Ryan McClure",
    "Eugene Kozlov (WestSteel)",
  ]

  const specialThanks = [
    "Alex Ostrovsky",
    "Paulo Ricca",
    "Inessa Demidova",
    "Ilya Tikhonov",
    "Andrey Lapov",
    "Ivan Isakov",
    "Ilya Batii",
    "Nik Nightingale",
    "Oleg Gergel",
    "PARANORMA & Shay Berenstein",
    "MoonCows",
    "Bennie",
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
