import './App.css';
import React, { useState } from 'react';
import MovieList from './MovieList';

import { BrowserRouter as Router, Routes, Route ,Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import TrailerLink from './pages/trailerLink';


function App() {
  
  const [movies, setMovies] = useState([
    
    {
      id: 1,
      title:"LUCIFER",
      description:"After an old acquaintance meets a violent fate, the charming Lucifer vows revenge on the perpetrators and makes an unexpected alliance.",
      im:"https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      back:"https://ntvb.tmsimg.com/assets/p18480237_b_h8_ac.jpg?w=1280&h=720",
      rate:5,
      gener: "Drama" ,
      trailerLink: "https://youtu.be/X4bF_quwNtw",
  },
  {
    id: 2,
    title:"FROM",
  description:"Unravel the mystery of a city in middle U.S.A. that imprisons everyone who enters",
  im:"https://m.media-amazon.com/images/M/MV5BNDQxOGI4ZjItM2NhZC00Y2FhLWEwZTAtZTc2MmJmNzY1MjViXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
  back:"https://i.ytimg.com/vi/5KvMLgeh3jA/maxresdefault.jpg",
  rate:5,
  gener:'Mystery',
  trailerLink: "",
},
  {
    id: 3,
    title:"BRIGHT",
  description:"In an alternate present day, humans, orcs, elves and fairies have been coexisting since the beginning of time.",
  im:"https://m.media-amazon.com/images/M/MV5BMTcyNzk5NDg1Nl5BMl5BanBnXkFtZTgwNTM5MDQxNDM@._V1_.jpg",
  back:"https://thelancerlink.com/wp-content/uploads/2018/02/DRCtIglXcAErrFZ-900x506.jpg",
  rate:5,
  gener: "Drama" ,
  trailerLink: "",
},
{
  id: 4,
  title:"LUPIN: PART 1",
description:"Part 1 (2021) No. Assane Diop plans the theft of an expensive diamond necklace, once owned by Marie-Antoinette, which his father Babakar had been accused of stealing from the wealthy Pellegrini family 25 years earlier. He enlists the help of a group of loan sharks, to whom he owes money.",
im:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19204904_b_v13_al.jpg",
back:"https://d1gbp99v447ls8.cloudfront.net/wp-content/uploads/2021/02/21190749/30877ed5-a90f-45a2-a3ac-2b3d71f057d4-e1613952476390.jpg",
rate:5,
gener: "Drama" ,
trailerLink: "",
},
{ 
  id: 5,
  title:"LUPIN: PART 2",
description:"Season 2 of Lupin picks up where the finale of season 1, stops—with the kidnapping of Assane Diop's (Omar Sy) son, Raoul (Etan Simon). Assane was introduced to Maurice Leblanc's Arsène Lupin, by his father Babakar (Fargass Assandé) and in turn introduces Raoul to the gentleman thief.",
im:"https://resizing.flixster.com/i6Tzks6-0MJnC7fD7nrQx4pr9Rc=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vMmJkNzExNTItMWM0MS00ODBjLWJkNGMtMTIwMmI4YTc3YTg3LmpwZw==",
back:"https://images.ctfassets.net/4cd45et68cgf/5qto2ttkHTghPl3s9tsY6Z/9f311b42dac0a13ae231ff8764e2a384/LUPIN_S2_16X9_EN-US.jpg?w=2000",
rate:5,
gener: "Drama" ,
trailerLink: "",
},
{
  id: 6,
  title:"LUPIN: PART 3",
description:" France's most-wanted gentleman thief is on the run, but he's heading back to Paris when Lupin returns for Part 3, now streaming on Netflix",
im:"https://m.media-amazon.com/images/M/MV5BMDdlNGMyZjktYzM0Yi00ZWE3LTk0NTEtMmU1OWIxNmU4OWQ2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
back:"https://i0.wp.com/popvaulture.com/wp-content/uploads/2023/10/Ontwerp-zonder-titel-3.png?fit=768%2C402&ssl=1",
rate:5,
gener: "Drama" ,
trailerLink: "",
},
{
  id: 7,
  title:"AVATAR",
description:"A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
im:"https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_streamingupdate_2096_0908fa1b.jpeg?region=0%2C0%2C540%2C810",
back:"https://i.ytimg.com/vi/L_rWhEYQrZs/maxresdefault.jpg",
rate:5,
gener: "Drama" ,
trailerLink: "",
},
{
  id: 8,
  title:"breaking bad",
  description:"Created by Vince Gilligan, the series follows the exploits of Walter White, a modest high school chemistry teacher, who discovers a new purpose in life when he learns he has terminal cancer and turns to a life of crime to provide for his family.",
  im:"https://upload.wikimedia.org/wikipedia/en/e/e0/BreakingBadS2DVD.jpg",
  back:"https://nanuetknighttimes.org/wp-content/uploads/2023/01/breaking-bad-title.jpg",
  rate:5,
  gener: "Drama" ,
  trailerLink: "",
},
{
  id: 9,
  title:"SQUID GAME",
  description:"A story of people who fail at life for various reasons, but suddenly receive a mysterious invitation to participate in a survival game to win more than 38 million US dollars",
  im:"https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
  back:"https://phantom-marca.unidadeditorial.es/258ad815aefd93fd14bc6c129c1702e2/crop/0x0/1597x899/resize/1200/f/jpg/assets/multimedia/imagenes/2021/10/01/16330974723192.png",
  rate:5,
  gener: "Drama" ,
  trailerLink: "",
},
{
  id: 10,
  title:"peaky blinders",
  description:"Peaky Blinders is a crime drama centred on a family of mixed Irish Traveller and Romani origins based in Birmingham, England, starting in 1919, several months after the end of the First World War. It centres on the Peaky Blinders street gang and their ambitious, cunning crime boss Tommy Shelby.",
  im:"https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg",
  back:"https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg",
  rate:5,
  gener: "Drama" ,
  trailerLink: "",
},
{ 
  id: 11,
  title:"THE 100",
  description:"The 100 follows post-apocalyptic survivors from a space habitat, the Ark, who return to Earth nearly a century after a devastating nuclear apocalypse. The first people sent to Earth are a group of juvenile delinquents who encounter descendants of survivors of the nuclear disaster on the ground.",
  im:"https://resizing.flixster.com/LHH5SvybzNWHdHxRfyh-ZMDQIFE=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEyODEwMS53ZWJw",
  back:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIqKR3Tpqs-v2ty22M-Pkqzf7vlil7jY6SwMmUowybYaZZ2xysBlvM-grrvrrfHcqhYM&usqp=CAU",
  rate:5,
  gener: "Drama" ,
  trailerLink: "",
}, 
{
  id: 12,
  title:"DAHMER",
  description:"The story of a cannibalistic serial killer named Jeffrey Dahmer, a.k.a. the Milwaukee Monster.",
  im:"https://m.media-amazon.com/images/M/MV5BM2IwNWY2YWEtNTU4Ni00MmE2LTljZjItNWQ0NzBlNjJiMzBiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
  back:"https://occ-0-34-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUpB8TXOKZD-a5AdE4FNtPiyWu4QoTs9cM9g9HMKWwxi_mJOiWrwlpRHZPosVTDBANUbOQpyGduYY3rnSOT8OADMzvcTO618mboNF2Nl-QvIFhYMBUV7q7Xvx7dPH2JtZ75VBA.jpg?r=385",
  rate:5,
  gener: "Drama" ,
  trailerLink: "",
}, 
{
  id: 13,
  title:"MAN VS BEE",
  description:"As the title suggests, the series is about a bumbling house sitter who takes on a bumblebee. Hired to keep an eye on a mansion filled with high-end art while the owners are on vacation, Trevor (Atkinson) discovers the cushy job is far tougher than he thought when a buzzing, annoying bee enters the space.",
  im:"https://m.media-amazon.com/images/M/MV5BMGExOWU4YmItMjkxOC00NjdjLTk2ZWEtZGViMGM1ZGFhZmQxXkEyXkFqcGdeQXVyODQyOTY2OTA@._V1_QL75_UX190_CR0,0,190,281_.jpg",
  back:"https://metro.co.uk/wp-content/uploads/2022/04/MASTER_EN-US_MVB_Teaser_Horizontal_RGB_PRE-1b2f.jpg?quality=90&strip=all",
  rate:5,
  gener: "Comedy" ,
  trailerLink: "",
}, 
{
  id: 14,
  title:"THE WALKING DEAD",
  description:"Based on the comic book series written by Robert Kirkman, this gritty drama portrays life in the months and years that follow a zombie apocalypse. A group of survivors travel in search of safety and security, constantly on the move in search of a secure home.",
  im:"https://m.media-amazon.com/images/I/510R9guJruL._AC_UF894,1000_QL80_.jpg",
  back:"https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVTbt3muZudeb6SosW6ahEPQncYTzvhsYXzzaPG4dHGIuqdG_E4sQnYry53uDWLVZJPzkBJhkoOq4MGPpv6A_f_cujMetnLpN4-pXT04Xcfq.png?r=888",
  rate:5,
  gener: "Drama" ,
  trailerLink: "",
},
{
  id: 15,
  title:" JOHNNY ENGLISH",
  description:"Rowan Atkinson plays JOHNNY ENGLISH, a low-level bureaucrat in England's spy service who dreams of being a field agent. When all of the agents are wiped out through his ineptitude, he gets his chance. England's crown jewels have been stolen by French zillionaire Pascal Sauvage",
  im:"https://i0.wp.com/www.heyuguys.com/images/2018/04/F236524F-668F-4F99-B0A3-4B321D4216B9.jpeg?resize=443%2C650&ssl=1",
  back:"https://cdn.comedy.co.uk/images/library/comedies/900x450/j/johnny_english.jpg",
  rate:5,
  gener: "Comedy" ,
  trailerLink: "",
},
{
  id: 16,
  title:"DAY SHIFT",
  description:"Day Shift is a 2022 American action comedy film directed by J. J. Perry in his directorial debut, written by Tyler Tice and Shay Hatten from a story by Tice, and starring Jamie Foxx as a blue-collar father whose pool-cleaning job is a front for his work as a vampire hunter.",
  im:"https://m.media-amazon.com/images/M/MV5BNjQ5NWUyZjgtYzg1Mi00NzZiLWFhN2EtMzJiN2ZmMDNjNTI3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
  back:"https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABWyssWH42yPoRSGMPdesYpn0r2ybzOLJ68HxzTZ5R5P67YPA6M1ozPGBP8KYA0NkegmZEleQbgFTfCA5SS4DHRsdR9cnaDQ6tUb8.jpg?r=7bb",
  rate:5,
  gener: "comedy" ,
  trailerLink: "",
},
{
  id: 17,
  title:"CENTRAL INTELLIGENCE",
  description:"The film stars Kevin Hart and Dwayne Johnson as two old high school classmates who go on the run after one of them joins the CIA to save the world from a terrorist who intends to sell satellite codes.",
  im:"https://images.moviesanywhere.com/85373ff29e53d8798332de11eb578e89/32984944-6315-48ea-92d5-54c63c3b984e.jpg",
  back:"https://straightfromamovie.com/wp-content/uploads/2016/06/Central-Intelligence-movie.jpg",
  rate:5,
  gener: "comedy" ,
  trailerLink: "",
},
{
  id: 18,
  title:"he's all that",
  description:"A teenage girl sets out to give a nebbish classmate the ultimate high school makeover. An updated remake of the 1999 film, 'She's All That. ' It's His Turn for a Makeover.",
  im:"https://static.kino.de/wp-content/uploads/2021/04/Einer-wie-keiner-Poster-2021.jpg",
  back:"https://static1.srcdn.com/wordpress/wp-content/uploads/2021/08/Hes-All-That-Cast-Character-Guide.jpg",
  rate:5,
  gener: "comedy" ,
  trailerLink: "",
},
{
  id: 19,
  title:"CHARLIE CHOCOLATE",
  description:"Summaries. A young boy wins a tour through the most magnificent chocolate factory in the world, led by the world's most unusual candy maker. Charlie Bucket desperately wants to eat more than cabbage soup every day. But, even more than that, he longs to see Wonka's enormous chocolate factory.",
  im:"https://nerdipop.co.za/wp-content/uploads/2015/03/charlie-and-the-chocolate-factory-53273584b6e29.jpg",
  back:"https://img.clickviewapp.com/v2/thumbnails/91yPZy?size=Medium",
  rate:5,
  gener: "comedy" ,
  trailerLink: "",
},
{
  id: 20,
  title:"SHREK",
  description:"A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.",
  im:"https://images.moviesanywhere.com/5948f139cd669fb5984d2c782e7678be/99cedd1f-ae78-4026-a3e8-b79840b71cbc.jpg",
  back:"https://ntvb.tmsimg.com/assets/p27575_v_h8_aa.jpg?w=1280&h=720",
  rate:5,
  gener: "comedy" ,
  trailerLink: "",
},
{
  id: 21,
  title:"ONE PIECE",
  description:"Monkey D. Luffy sails with his crew of Straw Hat Pirates through the Grand Line to find the treasure One Piece and become the new king of the pirates.",
  im:"https://fumettologica.it/wp-content/uploads/2023/01/one-piece-netflix-670x838.jpg",
  back:"https://cdn.fandomwire.com/wp-content/uploads/2023/09/18124213/Luffy-Has-Been-Hiding-One-Thing-About-His-Pirate-Dream-Netflix-Might-Consider-this-Wild-Fan-Theory-For-One-Piece-Season-2.jpg",
  rate:5,
  gener: "Action,comedy" ,
  trailerLink: "",
},
{
  id: 22,
  title:"lacasa de papel",
  description:"Ocho ladrones toman rehenes en la Fábrica Nacional de Moneda y Timbre de España, mientras el líder de la banda manipula a la policía para cumplir con su plan. Ve todo lo que quieras. Serie atrapante reconocida como mejor drama en los premios Iris (donde se llevó otros seis), Fénix y Emmy Internacional.",
  im:"https://fr.web.img6.acsta.net/pictures/21/08/02/16/08/1706767.jpg",
  back:"https://imageio.forbes.com/specials-images/imageserve/5d30c8e5eab9270008f9bd2a/Casa-de-Papel-3/960x0.jpg?format=jpg&width=960",
  rate:5,
  gener: "Action" ,
  trailerLink: "",
},
{
  id: 23,
  title:"TUXEDO",
  description:"A hapless chauffeur must take a comatose Secret Agent's place using his special gadget-laden tuxedo. A hapless chauffeur must take a comatose Secret Agent's place using his special gadget-laden tuxedo.",
  im:"https://upload.wikimedia.org/wikipedia/en/c/cf/The_Tuxedo_film.jpg",
  back:"https://cache.diomedia.com/diocomp/01/B9/QU/comp/01B9-QU5C.jpg",
  rate:5,
  gener: "Action" ,
  trailerLink: "",
},
{
  id: 24,
  title:"EVIL DEAD RISE",
  description:"Evil Dead Rise is a 2023 American supernatural horror film written and directed by Lee Cronin. It is a standalone entry and the fifth installment in the Evil Dead film series. The film stars Lily Sullivan and Alyssa Sutherland as two estranged sisters trying to survive and save their family from deadites.",
  im:"https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_.jpg",
  back:"https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1683272163.webp",
  rate:5,
  gener: "HORROR" ,
  trailerLink: "",
},
{
  id: 25,
  title:"INSIDIOUS THE RED DOOR",
  description:" the terrifying story of a family who, shortly after moving, discovers that dark spirits have possessed their home and that their son has inexplicably fallen into a coma.",
  im:"https://www.sonypictures.ca/sites/canada/files/2023-08/DP_7164177_InsidiousTheRedDoor_2000x3000-min.jpg",
  back:"https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1688624438.webp",
  rate:5,
  gener: "HORROR" ,
  trailerLink: "",
},
{
  id: 26,
  title:"LOVE AGAIN",
  description:" romantic comedy, dealing with the loss of her fiancé, Mira Ray sends a series of romantic texts to his old cell phone number…",
  im:"https://www.acadlly.com/wp-content/uploads/2023/07/love-again.jpg",
  back:"https://www.loveagain.movie/assets/images/desktopbanner.jpg",
  rate:5,
  gener: "drama" ,
  trailerLink: "",
},
{
  id: 27,
  title:"DACHRA-دشرة",
  description:" تسعى كلّ من ياسمين الطّالبة بمعهد الصّحافة وصديقيها وليد وبلال إلى كشف غموض جريمة قديمة اقترفت منذ أكثر من خمس وعشرين سنة. وأثناء هذا البحث يعثرون على امرأة مبتورة الأطراف متروكة لحتفها. وقد أدّى بهم الاستقصاء إلى غابة حيث توجد دشرة معزولة، وفي خضم هذا المحيط المجهول، يحاول هذا الثّلاثي الهروب من الرّعب، فهل ينجحون في الإفلات ؟",
  im:"https://pictures.artify.tn/media/r9p6ux7liv6q4pxabgwi.jpg",
  back:"https://www.alaraby.co.uk/sites/default/files/styles/large_16_9/public/media/images/14312816-5FD4-4033-878C-931A18F85387.jpg?h=d1cb525d&itok=Kl-AoV-6",
  rate:5,
  gener: "drama,HORROR" ,
  trailerLink: "",
},

  ])

 const [searchValue, setSearchValue] = useState('');
  const handleSearch = () => {
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.rate.toString().includes(searchValue) ||
        movie.gener.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setMovies(filteredMovies);
  };

  const [selectedGenre, setSelectedGenre] = useState('');
  const addMovie = (movie) => {
    setMovies(movies.concat(movie));
    
  };



  return (
    
    <div className="app">
    
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Rate or Genre"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Sport">Sport</option>
          <option value="Mystery">Mystery</option>
        </select>
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
        
        
      </div>
      <Routes>
      <Route path="/" element={<Home movies={movies} />} />
      <Route path="/TrailerLink" element={<TrailerLink />} />
    </Routes>

      <div></div>
      <MovieList movies={movies} addMovie={addMovie} />  
    </div>
  ); 
   
};
const Home = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
export default App;