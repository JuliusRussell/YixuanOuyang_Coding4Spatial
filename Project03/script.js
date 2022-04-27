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
        position: "top30",
    },
    {
        name:"Ass Back Home",
        artist:"Gym Class Heroes Featuring Neon Hitch",
        image:"https://miro.medium.com/max/934/1*mQrB2XR9l444bpFyO-_PfQ.png",
        rank:"Ranked: 31",
        postion: "top50",
    },
    {
        name:"So Good",
        artist:"B.o.B",
        image:"https://miro.medium.com/max/1182/1*jvHSIDiqYc1Qqtv_CT7LhQ.png",
        rank:"Ranked: 32",
        position:"top50",
    },
    {
        name:"Good Girl",
        artist:"Carrie Underwood",
        image:"https://miro.medium.com/max/1198/1*VXBdTdc_TdsZZhEFOTCQQg.png",
        rank:"Ranked: 33",
        position:"top50",
    },
    {
        name:"Fly Over States",
        artist:"Jason Aldean",
        image:"https://miro.medium.com/max/1176/1*n64X9Nk9WgGe9g3o1quBRg.png",
        rank:"Ranked: 34",
        position:"top50",
    },
    {
        name:"Lights",
        artist:"Ellie Goulding",
        image:"https://miro.medium.com/max/1200/1*-_zi-49KFYcl1DAf-8R4TA.png",
        rank:"Ranked: 35",
        position:"top50",
    },
    {
        name:"Mercy",
        artist:"Kanye West, Big Sean, Pusha T, 2 Chainz",
        rank:"Ranked: 36",
        position:"top50",
        image:"https://miro.medium.com/max/1202/1*4xjFxFeNacXhL7WohIrD8A.png",
    },
    {
        name:"Good Feeling",
        artist:"Flo Rida",
        rank:"Ranked; 37",
        position:"top50",
        image:"https://miro.medium.com/max/1186/1*eALlXRMUyFuLD2wqCwr6iw.png",
    },
    {
        name:"Young, Wild & Free",
        artist:"Snoop Dogg & Wiz Khalifa Featuring Bruno Mars",
        rank:"Ranked; 38",
        position:"top50",
        image:"https://miro.medium.com/max/1182/1*awcQwzYvC8Oq0hfdbDuGfw.png",
    },
    {
        name:"Over You",
        artist:"Miranda Lambert",
        rank:"Ranked: 39",
        position:"top50",
        image:"https://miro.medium.com/max/1180/1*a2HJoZJLQPUJrapkd6b91Q.png",
    },
    {
        name:"I Won't Give Up",
        artist:"Jason Mraz",
        rank:"Ranked: 40",
        position:"top50",
        image:"https://miro.medium.com/max/1172/1*VtPJozQkNhHOMoRL2zrh6A.png",
    },
    {
        name:"Faded",
        artist:"Tyga Featuring Lil Wayne",
        rank:"Ranked: 41",
        position:"top50",
        image:"https://miro.medium.com/max/1198/1*_4CYVD0h3LxDQiUYhyXN4A.png",
    },
    {
        name:"Sexy And I Know It",
        artist:"LMFAO",
        rank:"Ranked: 42",
        position:"top50",
        image:"https://miro.medium.com/max/1182/1*40i1_vtHroP52Htfc7r0Iw.png",
    },
    {
        name:"Somethin''Bout A Truck",
        artist:"Kip Moore",
        rank:"Ranked: 43",
        position:"top50",
        image:'https://miro.medium.com/max/1178/1*LRCjjvlWBel03icwosM12Q.png',
    },
    {
        name:"Party Rock Anthem",
        artist:"LMFAO Featuring Lauren Bennett & GoonRock",
        rank:"Ranked: 44",
        position:"top50",
        image:"https://miro.medium.com/max/1170/1*uNp7017rr306Mpc1nx9m-g.png",
    },
    {
        name:"Rack City",
        artist:"Tyga",
        rank:"Ranked: 45",
        position:"top50",
        image:'https://miro.medium.com/max/1174/1*WcQTQMbOk8Dq6Igi0llpqQ.png',
    },
    {
        name:"Scream",
        artist:"Usher",
        rank:"Ranked: 46",
        position:"top50",
        image:'https://miro.medium.com/max/1170/1*nXBEaAE2NvbERxhZLL8cvA.png',
    },
    {
        name:"Work Hard, Play Hard",
        artist:"Wiz Khalifa",
        rank:"Ranked: 47",
        position:"top50",
        image:"https://miro.medium.com/max/1178/1*Z9PWic704kiO-jVGsX3bLQ.png",
    },
    {
        name:"Paradise",
        artist:"Coldplay",
        rank:"Ranked: 48",
        position:"top50",
        image:"https://miro.medium.com/max/1170/1*G2EZnVyQODeU6YDNA8tKyA.png",
    },
    {
        name:"Moves Like Jagger",
        artist:"Maroon 5 Featuring Christina Aguilera",
        rank:"Ranked: 49",
        position:"top50",
        image:"https://miro.medium.com/max/1180/1*PkmB1khVGMoeK2uDpQnc4Q.png",
    },
    {
        name:"UP!",
        artist:"LoveRance Featuring IamSu & Skipper or 50 Cent",
        rank:"Ranked: 50",
        position:"top50",
        image:"https://miro.medium.com/max/1176/1*NQpHh-fUQwXLE4tz8fEXNg.png",
    },
    {
        name:"Titanuim",
        artist:"David Guetta Featuring Sia",
        rank:"Ranked: 51",
        position:"top100",
        image:"https://miro.medium.com/max/1170/1*Ihj-4V7kzAxVLwZBJJipaw.png",
    },
    {
        name:"A Woman Like You",
        artist:"Lee Brice",
        rank:"Ranked: 52",
        position:"top100",
        image:"https://miro.medium.com/max/1186/1*B2oUueKf1OKeqM3CqFy52w.png",
    },
    {
        name:"Ayy Ladies",
        artist:"Travis Porter Featuring Tyga",
        rank:"Ranked: 53",
        position:"top100",
        image:"https://miro.medium.com/max/1208/1*0bDtwVoD440NGetApcv4qA.png",
    },
    {
        name:"Leave You Alone",
        artist:"Young Jeezy Featuring Ne-Yo",
        rank:"Ranked: 54",
        position:"top100",
        image:"https://miro.medium.com/max/1174/1*xsz3nfurKgQRcSABQJ0aZQ.png",
    },
    {
        name:"Dancin' Away With My Heart",
        artist:"Lady Antebellum",
        rank:"Ranked: 55",
        position:"top100",
        image:"https://miro.medium.com/max/1194/1*B7Y5If2_jXOvhsjBtlX44w.png",
    },
    {
        name:"Banjo",
        artist:"Rascal Flatts",
        rank:"Ranked: 56",
        position:"top100",
        image:"https://miro.medium.com/max/1170/1*RSqT-rN1qvFHpoaeKqlGpg.png",
    },
    {
        name:"Drink On It",
        artist:"Blake Shelton",
        rank:"Ranked: 57",
        position:"top100",
        image:"https://miro.medium.com/max/1170/1*RSqT-rN1qvFHpoaeKqlGpg.png",
    },
    {
        name:"No Hurry",
        artist:"Zac Brown Band",
        rank:"Ranked: 58",
        position:"top100",
        image:"https://miro.medium.com/max/1184/1*dAgObDPswfW0tGUECMSEpg.png",
    },
    {
        name:"Better Than I Used To Be",
        artist:"Tim McGraw",
        rank:"Ranked: 59",
        position:"top100",
        image:"https://miro.medium.com/max/1174/1*PjbhJUNAgM1JjCUMSy-lGA.png",
    },
    {
        name:"Feel Like A Rock Star",
        artist:"Kenny Chesney & Time McGraw",
        rank:"Ranked: 60",
        position:"top100",
        image:"https://miro.medium.com/max/1192/1*9P2idnYVkC9U5QPNbp_-xA.png",
    },
    {
        name:"Beez In The Trap",
        artist:"Nicki Minaj Featuring 2 Chainz",
        rank:"Ranked: 61",
        position:"top100",
        image:"https://miro.medium.com/max/1182/1*F_fzKtj5ZDKAksKQ-aZ0bw.png",
    },
    {
        name:"Give Your Heart A Break",
        artist:"Demi Lovato",
        rank:"Ranked: 62",
        position:"top100",
        image:"https://miro.medium.com/max/1182/1*F_fzKtj5ZDKAksKQ-aZ0bw.png",
    },
    {
        name:"Cashin' Out",
        artist:"Ca$h Out",
        rank:"Ranked: 63",
        position:"top100",
        image:"https://miro.medium.com/max/1182/1*YjfpscaKG4t2iZD0fZdKEA.png",
    },
    {
        name:"Even If It Breaks Your Beart",
        artist:"Eli Young Band",
        rank:"Ranked: 64",
        position:"top100",
        image:"https://miro.medium.com/max/1170/1*SMnTYRiX2JCPAlroDtbjmg.png",
    },
    {
        name:"Turn Up The Music",
        artist:"Chris Brown",
        rank:"Ranked: 65",
        position:"top100",
        image:"https://miro.medium.com/max/1184/1*gxLVGdO2JJIqA96r9zghrw.png",
    },
    {
        name:"Blown Away",
        artist:"Carrie Underwood",
        rank:"Ranked: 66",
        position:"top100",
        image:"https://miro.medium.com/max/1158/1*TGKtqYbHjGgq04IJmqSpnA.png",
    },
    {
        name:"Talk That Talk",
        artist:"Rihanna Featuring Jay-Z",
        rank:"Ranked: 67",
        position:"top100",
        image:"https://miro.medium.com/max/1178/1*j9N6sK4qT_QItOcFONVRyw.png",
    },
    {
        name:"Everybody Talks",
        artist:"Neon Trees",
        rank:"Ranked: 68",
        position:"top100",
        image:"https://miro.medium.com/max/1182/1*sHXBZ3zHO9mjvmfeA77ufg.png",
    },
    {
        name:"HYFR",
        artist:"Drake Featuring Lil Wayne",
        rank:"Ranked: 69",
        position:"top100",
        image:"https://miro.medium.com/max/1182/1*sHXBZ3zHO9mjvmfeA77ufg.png",
    },
    {
        name:"It's A Man's,Man's,Man's World",
        artist:"Juliet Simms",
        rank:"Ranked: 70",
        position:"top100",
        image:"https://miro.medium.com/max/1196/1*Q7XS7ff0q3Er1lCxOOOgAQ.png",
    },
    {
        name:"Shake It Out",
        artist:"Glee Cast",
        rank:"Ranked: 71",
        position:"top100",
        image:"https://miro.medium.com/max/1200/1*3l2Gw-y2MAxwOR3dpN_RSw.png",
    },
    {
        name:"We Run The Night",
        artist:"Havana Brown Featuring Pitbull",
        rank:"Ranked: 72",
        position:"top100",
        image:"https://miro.medium.com/max/1196/1*5AQ8ejTt1CN_NV0KOQyRww.png",
    },
    {
        name:"Burn It Down",
        artist:"Linkin Park",
        rank:"Ranked: 73",
        position:"top100",
        image:"https://miro.medium.com/max/1178/1*edG8CPFN0R_WZ6CZD4pKAQ.png",
    },
    {
        name:"You Don't Know Her Like I Do",
        artist:"Brantley Gilbert",
        rank:"Ranked: 74",
        position:"top100",
        image:"https://miro.medium.com/max/1152/1*angDBxgCj0tX-_LBUbiW4w.png",
    },
    {
        name:"Too Close",
        artist:"Alex Clare",
        rank:"Ranked: 75",
        position:"top100",
        image:"https://miro.medium.com/max/1172/1*Z5Uvp5AvfEMEQYOUdSBI8g.png",
    },
    {
        name:"Some Nights",
        artist:"fun.",
        rank:"Ranked:76",
        position:"top100",
        image:"https://miro.medium.com/max/1174/1*e6erWDLLeIzKXTti_9J2Jw.png",
    },
    {
        name:"Midnight City",
        artist:"M83.",
        rank:"Ranked: 77",
        position:"top100",
        image:"https://miro.medium.com/max/1178/1*kME2eDtoBQ4TMK0_1xuqYg.png",
    },
    {
        name:"Right By My Side",
        artist:"Nicki Minaj Featuring Chris Brown",
        rank:"Ranked: 78",
        position:"top100",
        image:"https://miro.medium.com/max/1178/1*LpQ2fXW6UoppVBV7Rmv9ng.png",
    },
    {
        name:"Beers Ago",
        artist:"Toby Keith",
        rank:"Ranked: 79",
        position:"top100",
        image:"https://miro.medium.com/max/1182/1*sxGj_s1yosW2y5QnaEZqGw.png",
    },
    {
        name:"Tonight (Best You Ever Had)",
        artist:"John Legend Featuring Ludacris",
        rank:"Ranked: 80",
        position:"top100",
        image:"https://miro.medium.com/max/1190/1*hnf2-w29A6abDNXAkOiKYA.png",
    },
    {
        name:"Heart Attack",
        artist:"Trey Songz",
        rank:"Ranked: 81",
        position:"top100",
        image:"https://miro.medium.com/max/1188/1*YveFp78rAnKs4UbNC7GRcw.png",
    },
    {
        name:"One Thing",
        artist:"One Direction",
        rank:"Ranked: 82",
        position:"top100",
        image:"https://miro.medium.com/max/1180/1*o0SIZRwsPPnyR2vDGNpV1g.png",
    },
    {
        name:"Take It To The Head",
        artist:"DJ Khaled Featuring Chris Brown, Rick Ross, Nicki Minaj & Lil Wayne",
        rank:"Ranked: 83",
        position:"top100",
        image:"https://miro.medium.com/max/1172/1*GqmewlZ0uYRfkWmhrzNrtg.png",
    },
    {
        name:"(Kiss You)Good Night",
        artist:"Glorina",
        rank:"Ranked: 84",
        position:"top100",
        image:"https://miro.medium.com/max/1190/1*8tMUsJAZwi0mB8LYzNw7iQ.png",
    },
    {
        name:"Little Talks",
        artist:"Of Monster And Men",
        rank:"Ranked: 85",
        position:"top100",
        image:"https://miro.medium.com/max/1174/1*4WXns2Z-lSNQ0Qxc_zlvBg.png",
    },
    {
        name:"Safe & Sound",
        artist:"Taylor Swift Featuring The Civil Wars",
        rank:"Ranked: 86",
        position:"top100",
        image:"https://miro.medium.com/max/1194/1*vPAi1_5WA7rRndZ6eoEFPA.png",
    },
    {
        name:"Time Is Love",
        artist:"Josh Turner",
        rank:"Ranked: 87",
        position:"top100",
        image:"https://miro.medium.com/max/1186/1*RSpMd9PetS_E5qjcj55Rgg.png",
    },
    {
        name:"Wanted",
        artist:"hunter Hayes",
        rank:"Ranked: 88",
        position:"top100",
        image:"https://miro.medium.com/max/1178/1*kC6_pEWojEYjuwfbzUk8ww.png",
    },
    {
        name:"Crew Love",
        artist:"Drake Featuring The Weeknd",
        rank:"Ranked: 89",
        position:"top100",
        image:"https://miro.medium.com/max/1174/1*C8T2hzleHCJ5G58iDwVNqQ.png",
    },
    {
        name:"Ai Se EU Te Pego",
        artist:"Michel Telo",
        rank:"Ranked: 90",
        position:"top100",
        image:"https://miro.medium.com/max/1164/1*cogufuAPy-5iPpnQuyqxJA.png",
    },
    {
        name:"Fine By Me",
        artist:"Andy Grammer",
        rank:"Ranked: 91",
        position:"top100",
        image:"https://miro.medium.com/max/1184/1*UMsNwnuffny9bXk4cVKBDg.png",
    },
    {
        name:"Bangarang",
        artist:"Skrillex Featuring Sirah",
        rank:"Ranked: 92",
        position:"top100",
        image:"https://miro.medium.com/max/1176/1*vWfPCy-IIbVGBpSnKKz7-g.png",
    },
    {
        name:"Got My Country On",
        artist:"Chris Cagle",
        rank:"Ranked: 93",
        position:"top100",
        image:"https://miro.medium.com/max/1178/1*Iwj5UeS4VxTO5iZ80Af7Nw.png",
    },
    {
        name:"This Ole Boy",
        artist:"Craig Morgan",
        rank:"Ranked: 94",
        position:"top100",
        image:"https://miro.medium.com/max/1198/1*Bpc7kX5yZxSMC9_2hhjQrg.png",
    },
    {
        name:"Whistle",
        artist:"Flo Rida",
        rank:"Ranked: 95",
        position:"top100",
        image:"https://miro.medium.com/max/1168/1*ZOpiVBXmzvYdZCJhV0fK-A.png",
    },
    {
        name:"Another Round",
        artist:"Fat Joe Featuring Chris Brown",
        rank:"Ranked: 96",
        position:"top100",
        image:"https://miro.medium.com/max/1178/1*TmhDJ4RfJGwOb-cv_ZbuNA.png",
    },
    {
        name:"Why Ya Wanna",
        artist:"Jana Kramer",
        rank:"Ranked: 97",
        position:"top100",
        image:"https://miro.medium.com/max/1190/1*BUSSUqC-zQIOVCtjPBOGRw.png",
    },
    {
        name:"Scary Monsters And Nice Sprites",
        artist:"Skrillex",
        rank:"Ranked: 98",
        position:"top100",
        image:"https://miro.medium.com/max/1170/1*s_Rx9DqpAketgOCw7RY_1g.png",
    },
    {
        name:"Same Damn Time",
        artist:"Future",
        rank:"Ranked: 99",
        position:"top100",
        image:"https://miro.medium.com/max/1182/1*qNdzyliWjnOKrXAyuWE3yA.png",
    },
    {
        name:"Postcard From Paris",
        artist:"The Band Perry",
        rank:"Ranked: 100",
        position:"top100",
        image:"https://miro.medium.com/max/1176/1*P-FLtzzchZmByIJwmw6pYg.png",
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

