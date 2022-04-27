const songs = [
    {
        name: "Somebody That I used To Know",
        artist: "Gotye Featuring Kmbra",
        image: "https://miro.medium.com/max/688/1*AqVrHW4xj8mvBjPNYfZLEw.jpeg",
        rank: "Ranked: 1",
        position: "top30",
    },
    {
        name:"We Are Young",
        artist:"fun. Featuring Janelle Monae",
        image:"https://miro.medium.com/max/688/1*ovAhnKErPKvjLqEQPhOm6Q.jpeg",
        rank:"Ranked: 2",
        position: "top30",
    },
    {
        name:"Payphone",
        artist:"Maroon 5 Featuring Wiz Khalifa",
        image:"https://miro.medium.com/max/688/1*gbuuHM6tt0ouwgAAX9MsrA.jpeg",
        rank:"Ranked: 3",
        position: "top30",
    },
    {
        name:"Call Me Maybe",
        artist:"Carly Rae Jepson",
        image:"https://miro.medium.com/max/688/1*VWxRf5KGPu4WZ_IKvhH1SA.jpeg",
        rank:"Ranked: 4",
        position: "top30",
    },
    {
        name:"Wild Ones",
        artist:"Flo Rida Featuring Sia",
        image:"https://miro.medium.com/max/912/1*mjNmiw9o78sNAKOGjpUdDg.png",
        rank:"Ranked: 5",
        position: "top30",
    },
    {
        name:"Glad You Came",
        artist:"The Wanted",
        image:"https://miro.medium.com/max/914/1*x_u7ZGhcLf-Rcg5VaoMD0w.png",
        rank:"Ranked: 6",
        position: "top30",
    },
    {
        name:"Starship",
        artist:"Nicki Minaj",
        image:"https://miro.medium.com/max/688/1*HeKtwuAilADgTk3dEqP-Pw.jpeg",
        rank:"Ranked: 7",
        position: "top30",
    },
    {
        name:"Boyfriend",
        artist:"Justin Bieber",
        image:"https://miro.medium.com/max/688/1*leyim78NYV-XpuBcck3ZnQ.jpeg",
        rank:"Ranked: 8",
        position: "top30",
    },
    {
        name:"What Makes You Beautiful",
        artist:"One Direction",
        image:"https://miro.medium.com/max/688/1*yStoStfelRqzhYUDA96tZw.jpeg",
        rank:"Ranked: 9",
        position: "top30",
    },
    {
        name:"Stronger",
        artist:"Kelly Clarkson",
        image:"https://miro.medium.com/max/688/1*v47CfbKTQAEWVSfvkCgnOA.jpeg",
        rank:"Ranked: 10",
        position: "top30",
    },
    {
        name:"Drive By",
        artist:"Train",
        image:"https://miro.medium.com/max/922/1*2oSQG8sSzfCmxTry8Is5nQ.png",
        rank:"Ranked: 11",
        position: "top30",
    },
    {
        name:"Feel So Close",
        artist:"Calvin Harris",
        image:"https://miro.medium.com/max/688/1*X4KKCSububDkCK-emswbqw.jpeg",
        rank:"Ranked: 12",
        position: "top30",
    },
    {
        name:"Part Of Me",
        artist:"Katy Perry",
        image:"https://miro.medium.com/max/688/1*FojSIJDyOPbp_nHO5-wSYQ.jpeg",
        rank:"Ranked: 13",
        position: "top30",
    },
    {
        name:"Take Care",
        artist:"Drake Featuring Rihanna",
        image:"https://miro.medium.com/max/688/1*pzUcrOJdiDoih1P0V5dfnw.jpeg",
        rank:"Ranked: 14",
        position: "top30",
    },
    {
        name:"The Motto",
        artist:"Drake Featuring Lil Wayne",
        image:"https://miro.medium.com/max/1202/1*j1hKyseHCY7NjsI5Y0pOlg.png",
        rank:"Ranked: 15",
        position: "top30",
    },
    {
        name:"Rumour Has It",
        artist:"Adele",
        image:"https://miro.medium.com/max/688/1*zZi0L5tt9cHi57_OlTsyCw.jpeg",
        rank:"Ranked: 16",
        position: "top30",
    },
    {
        name:"Climax",
        artist:"User",
        image:"https://miro.medium.com/max/688/1*TjzfDkMb4cLn5pJcvnImOg.jpeg",
        rank:"Ranked: 17",
        position: "top30",
    },
    {
        name:"Both Of Us",
        artist:"B.o.B Featuring Taylor Swift",
        image:"https://miro.medium.com/max/932/1*rNKV_mSwaIH_2Zwc2fybiA.png",
        rank:"Ranked: 18",
        position: "top30",
    },
    {
        name:"Spingsteen",
        artist:"Eric Church",
        image:"https://miro.medium.com/max/688/1*IVgji8leJUomMx_SzpTlaA.jpeg",
        rank:"Ranked: 19",
        position: "top30",
    },
    {
        name:"Dance Again",
        artist:"Jennifer Lopez Featuring Pitbull",
        image:"https://miro.medium.com/max/688/1*07o3y-jCE6YBvrbPX9xKRA.jpeg",
        rank:"Ranked: 20",
        position: "top30",
    },
    {
        name:"Set Fire To The Rain",
        artist:"Adele",
        image:"https://miro.medium.com/max/1182/1*CSvnfBNEG4xEhWE7s5OZOg.png",
        rank:"Ranked: 21",
        position: "top30",
    },
    {
        name:"Turn Me On",
        artist:"David Guetta Featuring Nicki Minaj",
        image:"https://miro.medium.com/max/688/1*6SxKt25wXg5YK_nspcELMQ.jpeg",
        rank:"Ranked: 22",
        position: "top30",
    },
    {
        name:"Eyes Open",
        artist:"Taylor Swift",
        image:"https://miro.medium.com/max/686/1*CdmBY_NPKQiKU4Zer_ZQYQ.jpeg",
        rank:"Ranked: 23",
        position: "top30",
    },
    {
        name:"Birthday Cake",
        artist:"Rihanna Featuring Chris Brown",
        image:"https://miro.medium.com/max/926/1*K7UPS89EbwRqRTc7kryn-A.png",
        rank:"Ranked: 24",
        position: "top30",
    },
    {
        name:"Drunk On You",
        artist:"Luke Bryan",
        image:"https://miro.medium.com/max/910/1*Hq9MZUEvhrj0rn4bWuaoYQ.png",
        rank:"Ranked: 25",
        position: "top30",
    },
    {
        name:"Brokenhearted",
        artist:"Karmin",
        image:"https://miro.medium.com/max/912/1*JhW01dpyI_7KX8KMoamBmA.png",
        rank:"Ranked: 26",
        position: "top30",
    },
    {
        name:"We Found Love",
        artist:"Rihanna Featuring Calvin Harris",
        image:"https://miro.medium.com/max/1204/1*aRt5x6b-QSb8s0Pg8sy6xA.png",
        rank:"Ranked: 27",
        position: "top30",
    },
    {
        name:"Drunk In My Cup",
        artist:"Kirko Bangz",
        image:"https://miro.medium.com/max/924/1*EOv4lBmxjP3nV5ZJhbAomA.png",
        rank:"Ranked: 28",
        position: "top30",
    },
    {
        name:"Where Have You Been",
        artist:"Rihanna",
        image:"https://miro.medium.com/max/1204/1*aRt5x6b-QSb8s0Pg8sy6xA.png",
        rank:"Ranked: 29",
        position: "top30",
    },
    {
        name:"Back In Time",
        artist:"Pitbull",
        image:"https://miro.medium.com/max/928/1*htSd8CneoNs2gHld8GWNnQ.png",
        rank:"Ranked: 30",
        position: "top50",
    }
];

const ul = document.querySelector('ul');


function renderSongstoPage(songs){
    for(i = 0; i < songs.length;i++){
      let list_item = document.createElement("li");
      list_item.classList.add(songs[i].position, 'card')


      let title = document.createElement("h3");
      title.textContent = songs[i].name;

      let artist = document.createElement("p");
      artist.textContent = songs[i].artist;

      let image = document.createElement("img");
      image.setAttribute("src", songs[i].image);

      let rank = document.createElement("rank");
      rank.textContent = songs[i].rank;

      ul.appendChild(list_item);
      list_item.appendChild(image)
      list_item.appendChild(title)
      list_item.appendChild(rank)
      list_item.appendChild(artist)


    }
  }

renderSongstoPage(songs)

const filterBtns = document.querySelector('.filters');
const cards = document.querySelectorAll('.card');

function filterFn(event){
    if(event.target.classList.contains("filter-bn")){
        const filterValue = event.target.getAttribute('data-filter');
        for(let i = 0; i < cards.length; i++){
            if(cards[i].classList.contains(filterValue) || filterValue === "All"){
                cards[i].classList.remove("hide");
                cards[i].classList.add("show");
            } else {
                cards[i].classList.remove("show");
                cards[i].classList.add("hide");
            }
        }
    }
}

filterBtns.addEventListener('click',filterFn)

