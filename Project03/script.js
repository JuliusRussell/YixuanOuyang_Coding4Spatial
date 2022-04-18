const songs = [
    {
        name: "Somebody That I used To Know",
        artist: "Gotye Featuring Kmbra",
        image: "https://miro.medium.com/max/688/1*AqVrHW4xj8mvBjPNYfZLEw.jpeg",
        rank: "1",
    },
    {
        name:"We Are Young",
        artist:"fun. Featuring Janelle Monae",
        image:"https://miro.medium.com/max/688/1*ovAhnKErPKvjLqEQPhOm6Q.jpeg",
        rank:"2",
    },
    {
        name:"Payphone",
        artist:"Maroon 5 Featuring Wiz Khalifa",
        image:"https://miro.medium.com/max/688/1*gbuuHM6tt0ouwgAAX9MsrA.jpeg",
        rank:"3",
    },
    {
        name:"Call Me Maybe",
        artist:"Carly Rae Jepson",
        image:"https://miro.medium.com/max/688/1*VWxRf5KGPu4WZ_IKvhH1SA.jpeg",
        rank:"4",
    },
    {
        name:"Wild Ones",
        artist:"Flo Rida Featuring Sia",
        image:"https://miro.medium.com/max/912/1*mjNmiw9o78sNAKOGjpUdDg.png",
        rank:"5",
    },
    {
        name:"Glad You Came",
        artist:"The Wanted",
        image:"https://miro.medium.com/max/914/1*x_u7ZGhcLf-Rcg5VaoMD0w.png",
        rank:"6",
    },
    {
        name:"Starship",
        artist:"Nicki Minaj",
        image:"https://miro.medium.com/max/688/1*HeKtwuAilADgTk3dEqP-Pw.jpeg",
        rank:"7",
    },
    {
        name:"Boyfriend",
        artist:"Justin Bieber",
        image:"https://miro.medium.com/max/688/1*leyim78NYV-XpuBcck3ZnQ.jpeg",
        rank:"8",
    },
    {
        name:"What Makes You Beautiful",
        artist:"One Direction",
        image:"https://miro.medium.com/max/688/1*yStoStfelRqzhYUDA96tZw.jpeg",
        rank:"9",
    },
    {
        name:"Stronger",
        artist:"Kelly Clarkson",
        image:"https://miro.medium.com/max/688/1*v47CfbKTQAEWVSfvkCgnOA.jpeg",
        rank:"10",
    },
    {
        name:"Drive By",
        artist:"Train",
        image:"https://miro.medium.com/max/922/1*2oSQG8sSzfCmxTry8Is5nQ.png",
        rank:"11",
    },
    {
        name:"Feel So Close",
        artist:"Calvin Harris",
        image:"https://miro.medium.com/max/688/1*X4KKCSububDkCK-emswbqw.jpeg",
        rank:"12",
    },
    {
        name:"Part Of Me",
        artist:"Katy Perry",
        image:"https://miro.medium.com/max/688/1*FojSIJDyOPbp_nHO5-wSYQ.jpeg",
        rank:"13",
    },
    {
        name:"Take Care",
        artist:"Drake Featuring Rihanna",
        image:"https://miro.medium.com/max/688/1*pzUcrOJdiDoih1P0V5dfnw.jpeg",
        rank:"14",
    },
    {
        name:"The Motto",
        artist:"Drake Featuring Lil Wayne",
        image:"https://miro.medium.com/max/1202/1*j1hKyseHCY7NjsI5Y0pOlg.png",
        rank:"15",
    },
    {
        name:"Rumour Has It",
        artist:"Adele",
        image:"https://miro.medium.com/max/688/1*zZi0L5tt9cHi57_OlTsyCw.jpeg",
        rank:"16",
    },
    {
        name:"Climax",
        artist:"User",
        image:"https://miro.medium.com/max/688/1*TjzfDkMb4cLn5pJcvnImOg.jpeg",
        rank:"17",
    },
    {
        name:"Both Of Us",
        artist:"B.o.B Featuring Taylor Swift",
        image:"https://miro.medium.com/max/932/1*rNKV_mSwaIH_2Zwc2fybiA.png",
        rank:"18",
    },
    {
        name:"Spingsteen",
        artist:"Eric Church",
        image:"https://miro.medium.com/max/688/1*IVgji8leJUomMx_SzpTlaA.jpeg",
        rank:"19",
    },
    {
        name:"Dance Again",
        artist:"Jennifer Lopez Featuring Pitbull",
        image:"https://miro.medium.com/max/688/1*07o3y-jCE6YBvrbPX9xKRA.jpeg",
        rank:"20",
    },
    {
        name:"Set Fire To The Rain",
        artist:"Adele",
        image:"https://miro.medium.com/max/1182/1*CSvnfBNEG4xEhWE7s5OZOg.png",
        rank:"21",
    },
    {
        name:"Turn Me On",
        artist:"David Guetta Featuring Nicki Minaj",
        image:"https://miro.medium.com/max/688/1*6SxKt25wXg5YK_nspcELMQ.jpeg",
        rank:"22",
    },
    {
        name:"Eyes Open",
        artist:"Taylor Swift",
        image:"https://miro.medium.com/max/686/1*CdmBY_NPKQiKU4Zer_ZQYQ.jpeg",
        rank:"23",
    },
    {
        name:"Birthday Cake",
        artist:"Rihanna Featuring Chris Brown",
        image:"https://miro.medium.com/max/926/1*K7UPS89EbwRqRTc7kryn-A.png",
        rank:"24",
    },
    {
        name:"Drunk On You",
        artist:"Luke Bryan",
        image:"https://miro.medium.com/max/910/1*Hq9MZUEvhrj0rn4bWuaoYQ.png",
        rank:"25",
    },
    {
        name:"Brokenhearted",
        artist:"Karmin",
        image:"https://miro.medium.com/max/912/1*JhW01dpyI_7KX8KMoamBmA.png",
        rank:"26",
    },
    {
        name:"We Found Love",
        artist:"Rihanna Featuring Calvin Harris",
        image:"https://miro.medium.com/max/1204/1*aRt5x6b-QSb8s0Pg8sy6xA.png",
        rank:"27",
    },
    {
        name:"Drunk In My Cup",
        artist:"Kirko Bangz",
        image:"https://miro.medium.com/max/924/1*EOv4lBmxjP3nV5ZJhbAomA.png",
        rank:"28",
    },
    {
        name:"Where Have You Been",
        artist:"Rihanna",
        image:"https://miro.medium.com/max/1204/1*aRt5x6b-QSb8s0Pg8sy6xA.png",
        rank:"29",
    },
    {
        name:"Back In Time",
        artist:"Pitbull",
        image:"https://miro.medium.com/max/928/1*htSd8CneoNs2gHld8GWNnQ.png",
        rank:"30",
    }
]

const ul = document

function renderSongstoPage(songs){
    for(i = 0; i < songs.length;i++){
      let list_item = document.createElement("li");
      list_item.classList.add(songs[i].color, 'card')
      let title = document.createElement("h3");
      let artist = document.createElement("p");
      let image = document.createElement("img");
      image.setAttribute("src", songs[i].image)
      ul.appendChild(list_item);
      list_item.appendChild(title)
      list_item.appendChild(color)
      list_item.appendChild(iamge)
    }
  }





