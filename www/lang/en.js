{
    "preloader" : {
        "headline" : "Guia de Cidade",
        "title" : "Rio Branco",
        "btn_text" : "Explorar"
    },

    "routes" : [
        {
            "route" : "^\\/?$",
            "section" : "splash"
        },
        {
            "route" : "^home\\/?$",
            "section" : "home"
        },
        {
            "route" : "^home\\/mood\\/?$",
            "section" : "mood"
        },
        {
            "route" : "^home\\/(mood|location)\\/[A-Za-z-_!0-9]+\\/?$",
            "section" : "location-list"
        },
        {
            "route" : "^home\\/(mood|location)\\/[A-Za-z-_!0-9]+\\/[A-Za-z-_!0-9]+\\/?$",
            "section" : "overview"
        },
        {
            "route" : "^home\\/schedule\\/?$",
            "section" : "schedule"
        },
        {
            "route" : "^home\\/schedule\\/(events|my-plans)\\/?$",
            "section" : "schedule"
        },
        {
            "route" : "^home\\/schedule\\/(events|my-plans)\\/[A-Za-z-_!0-9]+\\/?$",
            "section" : "overview"
        },
        {
            "route" : "^home\\/search\\/?$",
            "section" : "location-list"
        },
        {
            "route" : "^home\\/search\\/[A-Za-z-_!0-9]+\\/?$",
            "section" : "location-list"
        },
        {
            "route" : "^home\\/search\\/[A-Za-z-_!0-9]+\\/[A-Za-z-_!0-9]+\\/?$",
            "section" : "overview"
        }
    ],

    "header" : {
        "home" : "Rio Branco"
    },

    "about" : {
        "logo_text" : "Sobre o app",
        "copy" : "aQui alli Guia, mostra experiências de interface do usuário, que se tornam possíveis com filtros.",
        "share_title" : "FROM",
        "icons" : [
            {
                "id" : "github",
                "name" : "Github",
                "link" : "https://github.com/brenothales"
            }
        ]
    },

    "schedule_prompt" : {
        "events_title" : "Eventos",
        "my_plans_title" : "Programando",
        "default_note" : "Digite sua nota aqui",
        "close" : "Fechar",
        "save" : "Savar no Calendario",
        "cancel" : "Cancelar"
    },

    "sections" : {
        "splash" : {
            "headline" : "Guia de Cidade",
            "title" : "Rio Branco",
            "btn_text" : "Explorar",
            "image" : "assets/images/main/bg.jpg"
        },
        "home" : {
            "items" : [
                {
                    "id" : "mood",
                    "name" : "Humor",
                    "link" : "home/mood",
                    "color" : "#df8052"
                },
                {
                    "id" : "schedule",
                    "name" : "Eventos",
                    "link" : "home/schedule",
                    "color" : "#7dac94"
                },
                {
                    "id" : "search",
                    "name" : "Encontrar",
                    "link" : "home/search",
                    "color" : "#4f5b6c"
                }
            ]
        },
        "mood" : {
            "items" : [
                {
                    "id" : "do",
                    "name" : "Fazer",
                    "link" : "home/mood/do",
                    "color" : "#00bdd3",
                    "highlight_color" : "#00cfe7"
                },
                {
                    "id" : "see",
                    "name" : "Ver",
                    "link" : "home/mood/see",
                    "color" : "#63344b",
                    "highlight_color" : "#834664"
                },
                {
                    "id" : "buy",
                    "name" : "Comprar",
                    "link" : "home/mood/buy",
                    "color" : "#b44437",
                    "highlight_color" : "#c74d3f"
                },
                {
                    "id" : "eat",
                    "name" : "Comer",
                    "link" : "home/mood/eat",
                    "color" : "#a4a730",
                    "highlight_color" : "#bbbe38"
                }
            ]
        },
        "schedule" : {
            "events" : {
                "title" : "Eventos",
                "prompt_btn" : "Ver",
                "link" : "schedule/events",
                "hue_from" : 142,
                "hue_to" : 55
            },
            "my_plans" : {
                "title" : "Meus Planos",
                "prompt_btn" : "Editar",
                "link" : "schedule/my-plans",
                "hue_from" : 18,
                "hue_to" : 62
            }
        },

        "location-list" : {
            "search-default" : "Digite aqui o que você está procurando",
            "result" : " Resultado",
            "colors" : [
                {
                    "id" : "home/mood/do",
                    "hue_from" : 209,
                    "hue_to" : 180
                },
                {
                    "id" : "home/mood/see",
                    "hue_from" : 357,
                    "hue_to" : 331
                },
                {
                    "id" : "home/mood/buy",
                    "hue_from" : 6,
                    "hue_to" : 40
                },
                {
                    "id" : "home/mood/eat",
                    "hue_from" : 82,
                    "hue_to" : 62
                },
                {
                    "id" : "default",
                    "hue_from" : 285,
                    "hue_to" : 170
                }
            ]
        },
        "overview" : {
            "logo-text" : "Rio Branco",
            "favorites" : "Favoritos",
            "schedule" : "Schedule it",
            "images" : {
                "see" : "assets/images/locations/see/see.png",
                "do" : "assets/images/locations/do/do.png",
                "buy" : "assets/images/locations/buy/buy.png",
                "eat" : "assets/images/locations/eat/eat.png"
            }
        }
    },

    "schedules" : {
        "events" : [

            {
                "location_id" : "laderby-dolls",
                "datetime" : "2013-04-10T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "librarytower",
                "datetime" : "2013-04-11T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "echopark",
                "datetime" : "2013-04-12T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "swingersdiner",
                "datetime" : "2013-04-13T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "cicada",
                "datetime" : "2013-04-14T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "downtownart-walk",
                "datetime" : "2013-04-15T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "losangeles-county-museum-of-art-lacma",
                "datetime" : "2013-04-16T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "japaneseamerican-national-museum",
                "datetime" : "2013-04-17T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "thelos-angeles-central-public-library",
                "datetime" : "2013-04-18T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "venicecanals",
                "datetime" : "2013-04-19T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "cemeterymovie-screenings",
                "datetime" : "2013-04-10T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "capuccioptics",
                "datetime" : "2013-05-11T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "jewelrydistrict",
                "datetime" : "2013-05-12T12:00",
                "note" : "foobar"
            }


        ],
        "my_plans" : [
            {
                "location_id" : "thebradbury-building",
                "datetime" : "2013-04-10T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "japaneseamerican-national-museum",
                "datetime" : "2013-04-10T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "rodeodrive-and-beverly-drive",
                "datetime" : "2013-04-10T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "thevista-theatre",
                "datetime" : "2013-04-10T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "thegrove",
                "datetime" : "2013-04-10T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "monsiermarcel",
                "datetime" : "2013-04-10T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "swingersdiner",
                "datetime" : "2013-04-10T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "labrea-bakery-cafe",
                "datetime" : "2013-04-10T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "cicada",
                "datetime" : "2013-04-10T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "littletokyo",
                "datetime" : "2013-04-10T12:00",
                "note" : "foobar"
            },
            {
                "location_id" : "faheykleingallery",
                "datetime" : "2013-04-10T12:00",
                "note" : "foobar"
            }
        ]
    },

    "locations" : [
        {
            "id": "jankessner-gallery",
            "name": "Jan Kessner Gallery",
            "mood": "see",
            "description": "164N. La Brea Avenue, Rio Branco, CA, 90036, Tel: +1-323-938-6834",
            "like": 19
        },
        {
            "id": "californiascience-center",
            "name": "California Science Center",
            "mood": "see",
            "description": "700Exposition Park Drive, Exposition Park. Every day 10AM-5PM. Best times to visitare weekdays after 1:30PM or weekends. Weekdays to 1:30PM are often busy.Permanent exhibition galleries free.",
            "like": 98
        },
        {
            "id": "walkof-fame",
            "name": "Walkof Fame",
            "mood": "see",
            "description": "AlongHollywood Boulevard and also Vine Street. The Hollywood Walk of Fame consistsof a series of stars embedded in the sidewalk to commemorate famous movie,radio, theatre, and TV personalities. Since 1960, over two thousand stars havebeen immortalized; the schedule for upcoming star ceremonies is listed on theWalk of Fame's website.",
            "like": 11
        },
        {
            "id": "gettymuseum-center-and-villa",
            "name": "Getty Museum Center and Villa",
            "mood": "see",
            "description": "Eachwith their unusual architecture which houses an exceptional collection of art,sculptures, gardens and featuring innovative spaces that encourages interactionwith some of the exhibits, the Center and the Villa are a &quot;must sees&quot;for your visit to the west side. The Getty Center is located at 1200 GettyDrive, off the 405 Freeway. Admission is always free. It is open Tuesday thruSunday from 10:00AM to 6:00PM, with later hours on Friday and Saturday (openuntil 9:00PM); parking on-site is $8 and is subject to availability. The GettyVilla, is in beautiful Malibu at 17985 Pacific Coast Highway (PCH) andadmission is always free; advance, timed tickets are required for eachindividual and can be obtained online or by call 310/440-7300. On site parkingis available for all ticket holder for $8. No walk-ins are permitted except byshowing a bus receipt or transfer, along with a Villa ticket. Hours areThursday through Monday 10:00AM to 5:00PM.",
            "like": 15
        },
        {
            "id": "geffencontemporary",
            "name": "Geffen Contemporary",
            "mood": "see",
            "description": "152N. Central Avenue, Rio Branco, CA, 90013. A branch of MOCA tucked away inLittle Tokyo. Same opening hours and shared tickets as MOCA on Grand.",
            "like": 20
        },
        {
            "id": "faheykleingallery",
            "name": "Fahey/ KleinGallery",
            "mood": "see",
            "description": "148N. La Brea Avenue, Rio Branco, CA, 90036, Tel: +1-323-934-2250. Home ofsome great photographers, such as Herb Ritts",
            "like": 23
        },
        {
            "id": "losangeles-fire-department-hollywood-museum-27",
            "name": "Rio Branco Fire Department Hollywood Museum 27",
            "mood": "see",
            "description": "1355N. Caheunga Boulevard, Tel: +1 323 464-2727. Sa: 10AM-4PM. Thismuseum is in the old Rio Branco City Fire Station 27, opened in 1930. It isfully restored to how it appeared in 1930 and contains historic fire apparatus.",
            "like": 85
        },
        {
            "id": "thebradbury-building",
            "name": "The Bradbury Building",
            "mood": "see",
            "description": "304South Broadway, Rio Branco, CA, 90013. Built in 1893, the Bradbury Building isone of Southern California's most remarkable architectural achievements. Behindits modest exterior lies a magical light-filled Victorian court that rises 50feet with open cage elevators, marble stairs and ornate iron railings. Thebuilding has been a set for many movies, including Blade Runner in 1982.Visitors without business in the building are allowed into the lobby and up tothe first landing of the staircase.",
            "like": 65
        },
        {
            "id": "laderby-dolls",
            "name": "L ADerby Dolls",
            "mood": "see",
            "description": "1910Temple St. LA has revived a sport that peaked in the 1970s, and tickets toroller derby matches can be purchased by those 21 and over. The sport isprobably best summarized with a quote from the Derby Doll's own site:&quot;Quad Skates. Short Skirts. Scars.&quot; $15.",
            "like": 46
        },
        {
            "id": "japaneseamerican-national-museum",
            "name": "Japanese American National Museum",
            "mood": "see",
            "description": "369E. First Street, Rio Branco, CA, 90012, Tel: +1-213-625-0414. Tu-Su:10AM-5PM. Covers the Japanese-American experience, with a special emphasis onthe concentration camps of World War II. $8.",
            "like": 54
        },
        {
            "id": "olverastreet",
            "name": "Olvera Street",
            "mood": "see",
            "description": "This is where LA was founded as El Pueblo de Rio Branco. You can take a tourof the city's oldest house to see what it looked like at that time. The plazais mostly filled with Mexican trinket stands and Mexican restaurants.",
            "like": 89
        },
        {
            "id": "stvincent-court",
            "name": "St. Vincent court",
            "mood": "see",
            "description": "7thStreet, between Broadway and Hill. A tranquil hideaway tucked in the heart ofthe Jewelry District.",
            "like": 53
        },
        {
            "id": "naturalhistory-museum-of-los-angeles-county",
            "name": "Natural History Museum of Rio Branco County",
            "mood": "see",
            "description": "900Exposition Boulevard, Exposition Park. Every day 9:30AM-5PM. A crown jewel ofRio Branco' museums. A national leader in exhibitions, education and research,the Museum was L.A.'s first cultural institution to open its doors to thepublic in 1913. It is the largest natural and historical museum in the WesternUnited States, safeguarding more than 35 million spectacular, diverse specimensand artifacts. $12.",
            "like": 82
        },
        {
            "id": "littletokyo",
            "name": "Little Tokyo",
            "mood": "see",
            "description": "Also known as J-Town, the Japanese district features restaurants, museums, andshops. It sits in the area between Temple and about 5th and Spring throughAlameda.",
            "like": 80
        },
        {
            "id": "theautry-in-griffith-park",
            "name": "The Autry in Griffith Park",
            "mood": "see",
            "description": "4700Western Heritage Way. Tu-F 10AM-4PM, Sa-Su 11AM-5PM. The Autry National Centerwas formed by the merger of the Autry Museum of Western Heritage with theSouthwest Museum of the American Indian and the Women of the West Museum. Adult$10.",
            "like": 90
        },
        {
            "id": "hollywoodsign",
            "name": "Hollywood Sign",
            "mood": "see",
            "description": "Hollywood'smost recognizable landmark is easy to spot high up on Mount Lee in GriffithPark. You can drive part way up for a closer look, but you can't hike all theway to the sign.",
            "like": 58
        },
        {
            "id": "grammymuseum",
            "name": "Grammy Museum",
            "mood": "see",
            "description": "800W. Olympic Boulevard (entrance on Figueroa St), Tel: +1-213-765-6800. M-F 11:30AM-7:30PM, Sa-Su 10AM-7:30PM. History of music, withlistening posts. Adult $12.95.",
            "like": 17
        },
        {
            "id": "museumof-contemporary-art-moca",
            "name": "Museumof Contemporary Art (MOCA)",
            "mood": "see",
            "description": "250 S. Grand Avenue, Rio Branco, CA, 90012, Tel: +1-213-626-6222. Th-M:11AM-5PM. The permanent collection is fairly interesting, but the changing exhibitionscan be more hit or miss. The museum has no 'traditional' art, so bring an openmind. The gift shop (free entrance) is fun for at least 20 minutes of wonderand awe. $12, $7 student (includes admission to Geffen Contemporary).",
            "like": 23
        },
        {
            "id": "graumanschinese-theater",
            "name": "Grauman's Chinese Theater",
            "mood": "see",
            "description": "6925Hollywood Boulevard, Tel: +1 323 464-8111. The most famousmovie theatre in the world, Grauman's Chinese Theatre opened in 1927 and ishome to the cement footprints, handprints, and (in some cases) otherprintsof many of history's most famous movie stars. The theatre is also a former homeof the Oscars, and today hosts many movie premieres. The forecourt thatshowcases the star's prints is free to all visitors. Movies are shown for $10,and half-hour walking tours are available for $5.",
            "like": 58
        },
        {
            "id": "wattstowers-of-simon-rodia",
            "name": "Watts Towers of Simon Rodia",
            "mood": "see",
            "description": "17interconnected structures, two of which reach heights of over 99 feet (30 m).An example of non-traditional vernacular architecture and naïve art. The Towersare located near and visible from the 103rd Street-Kenneth Hahn Station of theMetro Rail LACMTA Blue Line. Next to the Towers is a small museum and acultural center.",
            "like": 77
        },
        {
            "id": "rodeodrive-and-beverly-drive",
            "name": "Rodeo Drive and Beverly Drive",
            "mood": "see",
            "description": "Famousstreets in Beverly Hills, very pleasant to walk through",
            "like": 41
        },
        {
            "id": "losangeles-county-museum-of-art-lacma",
            "name": "Rio Branco County Museum of Art (LACMA)",
            "mood": "see",
            "description": "5905Wilshire Boulevard, Tel: +1-323-857-6000. M/T/Th: 12:00pm-8:00pm, F:12:00pm-9:00pm, Sat/Sun: 11:00am-8:00pm. Has great permanent and changingexhibitions. $15.",
            "like": 25
        },
        {
            "id": "librarytower",
            "name": "Library Tower",
            "mood": "see",
            "description": "(USBank Tower), 633 W. Fifth Street, Rio Branco, CA, 90071 (across FifthStreet from the downtown central library). At 73 floors and 1,017 feet, itis said to be the tallest building between Chicago and Hong Kong. Note tophotographers: the Library Tower's security personnel will try to discourageyou from taking pictures of this building. As long as you are standing on apublic sidewalk you may legally take any picture you like in the United States.",
            "like": 94
        },
        {
            "id": "pagemuseum",
            "name": "Page Museum",
            "mood": "see",
            "description": "PageMuseum at the La Brea Tar Pits, 5801 Wilshire Boulevard, Tel: +1-323-934-PAGE (7243). 9:30AM-5PM daily. Displays fossils of animals –including saber-toothed cats, dire wolves and mammoths – That got stuck in tarpits during the Ice Age 10,000 to 40,000 years ago. Visitors can watch fossilsbeing prepared. The Pleistocene Garden in Hancock Park, outside the Museum, haslife-size replicas of extinct mammals. Adults $11. Free 1st Tu of the month,except July and August.",
            "like": 51
        },
        {
            "id": "theshrine-auditorium",
            "name": "The Shrine Auditorium",
            "mood": "see",
            "description": "Ahuge venue that holds the Emmy's and other award shows. Located on JeffersonBlvd and Figueroa Street across the street from the University of SouthernCalifornia, famous for its red bricks and nightlife. Closed to visitors.",
            "like": 29
        },
        {
            "id": "thelos-angeles-central-public-library",
            "name": "The Rio Branco Central Public Library",
            "mood": "see",
            "description": "630W. 5th Street, Rio Branco, CA, 90071, Tel: +1-213-228-7000. Hugelibrary rebuilt in the 1980s and '90s. Almost always has a public exhibitiongoing.",
            "like": 90
        },{
            "id": "leimertpark-coffee-shop",
            "name": "Leimert Park coffee shop",
            "mood": "do",
            "description": "Atnight for some spoken word or freestyle rap.",
            "like": 58
        },
        {
            "id": "hollywoodbowl",
            "name": "HollywoodBowl",
            "mood": "do",
            "description": "2301North Highland Avenue, Tel: +1 323 426-2829. America's mostfamous outdoor theatre hosts the Rio Branco Philharmonic Orchestra as well asnumerous other concert events. Traffic and parking can be a nightmare, so the$5 round-trip public shuttles [14] are highlyrecommended.",
            "like": 48
        },
        {
            "id": "studiotours",
            "name": "Studio Tours",
            "mood": "do",
            "description": "WarnerBrothers, NBC and Disney studios are all headquartered in Burbank, and all (except Disney)offer some kind of public tour. Universal Studios is in Universal City. CBS studiosis in Studio City but doesnot offer public tours.",
            "like": 76
        },
        {
            "id": "silverlake-reservoir",
            "name": "Silver Lake Reservoir",
            "mood": "do",
            "description": "Encompassedby a nice walking and jogging path. Just over 2 miles long, it offers abeautiful way to get outdoors.",
            "like": 35
        },
        {
            "id": "baptistor-ame-african-american-church",
            "name": "Baptist(or AME) African-American Church",
            "mood": "do",
            "description": "Fora peek into local spiritual culture.",
            "like": 37
        },
        {
            "id": "staplescenter",
            "name": "Staples Center",
            "mood": "do",
            "description": "Hometo five of LA's pro sports franchises; Lakers (NBA), Kings (NHL), Clippers(NBA), Avengers (AFL), and Sparks (WNBA), plus many concerts, shows andconventions.",
            "like": 71
        },
        {
            "id": "marinadel-reys-fishermans-village",
            "name": "Marinadel Rey's Fisherman's Village",
            "mood": "do",
            "description": "Takea trip to New England without ever leaving the Westside! This replica of a NewEngland seaport and fishing town is the place to go to get out on the water.There are several companies to rent boats -- both sail and motor, kayaks,wind-surfboards and more. Charter a harbor cruise or reserve your place on oneof the public dinner cruises or Sunday Champagne Brunch cruises. Or join one ofthe exciting fishing adventures with Marina del Rey Sportfishing's open party trips.Both 1/2 day and 3/4 day trips are available with rod rentals, tackle, bait andfishing licenses available. Enjoy waterfront dining, shop for souvenirs, orstroll along the cobblestone paths to enjoy views of the Marina. On theweekends (weather permitting) there are free outdoor concerts in the LighthousePlaza area.",
            "like": 68
        },
        {
            "id": "lasangelitas-del-pueblo",
            "name": "Las Angelitas del Pueblo",
            "mood": "do",
            "description": "Thisis a group of volunteer docents who give free tours of El Pueblo de Rio Brancoto the public.",
            "like": 21
        },
        {
            "id": "laconservancy-walking-tours",
            "name": "L. A.Conservancy Walking Tours",
            "mood": "do",
            "description": "Seethe grand Vaudeville/Movie theaters of the 20s and the impressive Art Decooffice buildings in several easy to handle walking tours. Strongly recommendedfor those wanting to grasp a feel of LA's history. Reservations are stronglyrecommended.",
            "like": 42
        },
        {
            "id": "venicecanals",
            "name": "Venice Canals",
            "mood": "do",
            "description": "(parkon Dell near Washington Blvd.) and see some of the most interestingarchitecture and local gardens that the Westside has to offer.",
            "like": 76
        },
        {
            "id": "downtownart-walk",
            "name": "DowntownArt Walk",
            "mood": "do",
            "description": "Afree monthly self guided tour--and free walking tours, reservations required--heldon the second Thursday of every month, to art galleries and museums in DowntownL.A.",
            "like": 60
        },
        {
            "id": "losangeles-beaches-bike-trail",
            "name": "Rio Branco Beaches Bike Trail",
            "mood": "do",
            "description": "Over22 miles of a paved bike path streching from Will Rogers State Beach north, toTorrance Beach south. With numerous outlets for renting bikes, rest stops andfood concessions this gentle, fairly flat path is an easy ride for the entirefamily.",
            "like": 15
        },
        {
            "id": "angelsflight",
            "name": "Angel'sFlight",
            "mood": "do",
            "description": "351South Hill Street (on the north side of Grand Central Market), [34]. 6:45am-10pm. Ride the world'sshortest railway - at only 298'(91m) long, Angel's Flight is functionally anelevator which takes you from Hill Street to California Plaza on Grand Ave. Foronly 50 cents! $0.50.",
            "like": 37
        },
        {
            "id": "dolbytheatre",
            "name": "DolbyTheatre",
            "mood": "do",
            "description": "6801Hollywood Bld, Tel: +1 323 308-6300. Located at the Hollywood & HighlandCenter (see &quot;Buy&quot; below). Hosts a wide range of live performances,including the annual Academy Awards.",
            "like": 24
        },
        {
            "id": "thestrand",
            "name": "The Strand",
            "mood": "do",
            "description": "Abike and skate path on the beach stretches from upper Santa Monica in the northall the way to Redondo Beachin the SouthBay and ends at Torrance Beach. It passes by many interesting places, suchas the Marina del Rey waterfront area with it's boats and numerous restaurants,the Venice Beach shops, and Santa Monica pier.",
            "like": 13
        },
        {
            "id": "losangeles-memorial-coliseum",
            "name": "Rio Branco Memorial Coliseum",
            "mood": "do",
            "description": "Hometo the University of Southern California Trojans NCAA football team, members ofthe Pacific Twelve conference. Site was host to the Olympics in 1932 and 1984,the home to LA's former NFL franchises the Rio Branco Rams and Raiders from1946-1979 and 1982-1994 respectively, and the home of UCLA football until 1982,when they moved to the Rose Bowl.",
            "like": 70
        },
        {
            "id": "thereal-black-dahlia-bus-tour",
            "name": "The Real Black Dahlia bus tour",
            "mood": "do",
            "description": "Atrue crime and social history tour that intimately explores the last weeks ofElizabeth Short's life, asking not &quot;who killed her?&quot; but &quot;whowas she?&quot; $58.",
            "like": 37
        },
        {
            "id": "griffithpark",
            "name": "Griffith Park",
            "mood": "do",
            "description": "Alarge municipal park at the eastern end of the Santa Monica Mountains in LosFeliz. The park covers 4,210 acres of land, making it one of the largest urbanparks in North America. It has also been referred to as the Central Park of LosAngeles, but it is much larger and with a much more untamed, rugged character.",
            "like": 64
        },
        {
            "id": "thevista-theatre",
            "name": "The Vista Theatre",
            "mood": "do",
            "description": "AnLA landmark, is a large cinema with one screen, typically screening popularfilms.",
            "like": 50
        },
        {
            "id": "elcid-theatre",
            "name": "El Cid Theatre",
            "mood": "do",
            "description": "Wasbuilt around turn of the century and, after several reincarnations, offers oneof the only dinner theatre options left in Rio Branco. The menu is heavilySpanish and the shows differ depending on the night and range from flamencoperformances to tongue-in-cheek burlesque.",
            "like": 15
        },
        {
            "id": "echopark",
            "name": "Echo Park",
            "mood": "do",
            "description": "Anice lakeside park which is good for picnics, but is frequently very crowded.The area is a hub for underground/indie culture and houses a number of venues.",
            "like": 30
        },
        {
            "id": "mulhollanddrive",
            "name": "MulhollandDrive",
            "mood": "do",
            "description": "MulhollandDrive (Hollywood Hills). If you have a car, it is worth driving up toMulholland Drive - the home of the stars. Apart from star seeking, the viewsacross Rio Branco and San Fernando Valley are breathtaking.",
            "like": 29
        },
        {
            "id": "cemeterymovie-screenings",
            "name": "Cemetery Movie Screenings",
            "mood": "do",
            "description": "HollywoodForever Cemetery, 6000 Santa Monica Blvd. Saturdays at 7PM, May-September. TheCinespia film society screens creepy older movies (recent showings include TheShining, Pee Wee's Big Adventure and Invasion of the BodySnatchers) every Saturday during the summer in the Hollywood ForeverCemetery, with most proceeds going toward cemetery restoration. Crowds can behuge, so arrive prior to gates opening if you want a good vantage point. Mostpeople bring a picnic dinner, blanket and jacket, and a DJ plays music prior tothe showing to create a fun outdoor atmosphere. Parking is free within thecemetery, but a $10 donation is required for each person.",
            "like": 57
        },
        {
            "id": "barnsdallart-park",
            "name": "Barnsdall Art Park",
            "mood": "do",
            "description": "4800Hollywood Blvd. A small hill with sweeping views and a Frank Lloyd Wrightcomplex on top serves as an art park for the community.",
            "like": 30
        },
        {
            "name": "Fashion District",
            "mood": "buy",
            "description": "Wherestyle and cheap textiles smash together. Important for the addicted shopper.You can find the district in the Southeast corner of Downtown roughly whereSpring and Main meet going Southeast.",
            "like": 31,
            "id": "fashiondistrict"
        },
        {
            "name": "Flower District",
            "mood": "buy",
            "description": "(766Wall Street} The best place to get the best cut and potted flowers andplants, plus just a great site to see.",
            "like": 29,
            "id": "flowerdistrict"
        },
        {
            "name": "Jewelry District",
            "mood": "buy",
            "description": "Wonderwhere all of those West Coast Rappers get their bling bling? Well, if they arefrugal, they get it in the Jewelry District. Bounded by Olive-Broadway and6th-7th, it is conveniently close to Pershing Square (parking and Red lineaccess).",
            "like": 59,
            "id": "jewelrydistrict"
        },
        {
            "name": "Mikawaya",
            "mood": "buy",
            "description": "(800E. 4th St. Little Tokyo), Their moto says it best: &quot;The finest name inJapanese pastries since 1910&quot;",
            "like": 94,
            "id": "mikawaya"
        },
        {
            "name": "Capucci Optics",
            "mood": "buy",
            "description": "(7th+FigMall), Great place to get a pair of great glasses, sunglasses or contactsat a reasonable price. Ask for Fatima for friendly service.",
            "like": 92,
            "id": "capuccioptics"
        },
        {
            "name": "Santee Alley",
            "mood": "buy",
            "description": "(FashionDistrict), Home of knock off designer labels and everything else you couldpossibly imagine, located between Santee Street and Maple Avenue, starting onOlympic Boulevard.",
            "like": 14,
            "id": "santeealley"
        },
        {
            "name": "Los Feliz Village",
            "mood": "buy",
            "description": "Ahip and trendy strip of N. Vermont Ave, with shops such as X-Large,Weltenbuerger, and Squaresville.",
            "like": 82,
            "id": "losfeliz-village"
        },
        {
            "name": "Sunset Junction",
            "mood": "buy",
            "description": "(roughlySunset Blvd. and Santa Monica Blvd.) in Silverlake has long been known forcheap furniture and antique shops, and now is home to several trendy clothingstores and some good restaurants and cafés. It's also the center of asummertime street fair of the same name known for its indie rock shows.",
            "like": 13,
            "id": "sunsetjunction"
        },
        {
            "name": "Beverly Center",
            "mood": "buy",
            "description": "8500Beverly Center. This shopping center includes 200 stores over 8 differentlevels. Great view of the city from the top floor of the mall.",
            "like": 17,
            "id": "beverlycenter"
        },
        {
            "name": "The Grove",
            "mood": "buy",
            "description": "189The Grove Drive, Tel: (888) 315-8883. Shopping and entertainment complex thatwill appeal to tourists that want to shop, while locals stop by to pick upfresh produce from the nearby Farmers Market.",
            "like": 60,
            "id": "thegrove"
        },
        {
            "name": "Hollywood& Highland Center",
            "mood": "buy",
            "description": "6801Hollywood Boulevard. Home of the Dolby Theatre (where the Oscars are held) andGrauman's Chinese Theatre, the 387,000-square-foot Hollywood & Highlandcenter is also a major shopping destination.",
            "like": 34,
            "id": "hollywoodamp-highland-center"
        },
        {
            "name": "Amoeba Music",
            "mood": "buy",
            "description": "6400Sunset Blvd, Tel: +1 323-245-6400. The country's largest independent musicstore, Amoeba has three locations including Hollywood, Berkeley and San Francisco. Prices areslightly higher than at the discount stores, but the selection is enormous andjust about any obscure record you could imagine is to be found somewhere on theshelves.",
            "like": 96,
            "id": "amoebamusic"
        },
        {
            "name": "Decades",
            "mood": "buy",
            "description": "8214Melrose Ave, Tel: (323) 655-1960. This Melrose Avenue shop is the place togo for vintage 1960s and 1970s couture and accessories.",
            "like": 16,
            "id": "decades"
        },
        {
            "name": "Frederick'sof Hollywood",
            "mood": "buy",
            "description": "6751Hollywood Blvd., Tel: (323) 957-5953. During the golden years of Hollywood, allthe superstars were wearing Fredericks, from Greta Garbo to Mae West to MarilynMonroe. Today, the store is a lot less polished but still a good place to pickup glamorous lingerie.",
            "like": 22,
            "id": "fredericksof-hollywood"
        },
        {
            "name": "I PEDFoot Spa",
            "mood": "buy",
            "description": "6767Sunset Blvd Suite 22 (Sunset & Highland), Tel: 323-466-1038. 11am-10pm. 6767 Sunset blvd (cross road highland). Easy to reachlocation. If you are tired of walking a long day in Hollywood. Iped offers 1hour foot massage for as less as $25. 25+.",
            "like": 73,
            "id": "ipedfoot-spa"
        },
        {
            "name": "Monsier Marcel",
            "mood": "buy",
            "description": "6333W 3rd St, Tel: +1 (323) 939 7792. If you enjoy cheese and wine, thenyou'll love shopping here! Monsier Marcel is a delightful French deli in theFarmers Markets on 3rd Avenue where you can stock up on a range of gourmetproduce, but most importantly there's over 500 vintage of wine on offer with arange of experienced staff to help you make your decisions.",
            "like": 38,
            "id": "monsiermarcel"
        },
        {
            "id": "ciaotrattoria",
            "name": "Ciao Trattoria",
            "mood": "eat",
            "description": "815W. Seventh St (near Figueroa). Harry Hagani's homage to fantasticItalian food is a cozy and elegant restaurant popular at lunchtime with thebusy executive crowd.",
            "like": 43
        },
        {
            "id": "demitasse",
            "name": "Demitasse",
            "mood": "eat",
            "description": "(LittleTokyo), 135 S. San Pedro Street (On the corner of 2nd & San Pedro).7am-10pm weekdays; 8am-10pm weekends. Demitasse serves up coffee, tea &pastries in what looks like a tidy inventor's laboratory. Friendly staff, nicepatio. Free wifi! $4-$6.",
            "like": 80
        },
        {
            "id": "elcholo",
            "name": "El Cholo",
            "mood": "eat",
            "description": "1121S. Western Ave., Koreatown. One of the original LA Mexican restaurants iswildly popular, especially for their green corn tamales, when they're inseason.",
            "like": 15
        },
        {
            "id": "kendallsbrasserie",
            "name": "Kendall's Brasserie",
            "mood": "eat",
            "description": "135N. Grand Ave (at the Music Center), Tel: +1-213-972-7322. GreatFrench menu at a perfect location to catch any of the great evening programs atthe surrounding venues. Whatever you order, do not miss their French Fries!Mains from $15.",
            "like": 29
        },
        {
            "id": "campanile",
            "name": "Campanile",
            "mood": "eat",
            "description": "624S. La Brea Ave., Tel: +1 323-938-1447 It's been around for years, and itsItalian menu just keeps getting better.",
            "like": 96
        },
        {
            "id": "zucca",
            "name": "Zucca",
            "mood": "eat",
            "description": "801S. Figueroa St (at Eighth Ave), Tel: +1-213-614-7800. JoachimSplichal (of Patina) and chef Giancarlo Gottardo strike the right chord withtheir sleek, alluring bistro featuring classic Italian fare. The pastas andfresh fish are wonderful - one entrée representing every major region in Italy.Between the cuisine and pleasing milieu, it's quite a lovely dining experience.",
            "like": 10
        },
        {
            "id": "swingersdiner",
            "name": "Swingers Diner",
            "mood": "eat",
            "description": "8020Beverly Blvd (at Laurel Ave), Tel: +1 323-653-5858. Overly trendy andvery popular for an update on diner-style food. Great for breakfast at anytimeof the day... and salads, sandwiches, a large menu. Prepare to be assaulted byhipness.",
            "like": 28
        },
        {
            "id": "cheebo",
            "name": "Cheebo",
            "mood": "eat",
            "description": "7533W. Sunset Blvd, Tel: +1 323-850-7070. Everyone loves the Cheeb! A play on&quot;cibo&quot; (Italian for food), this place has great and creative food anda fun atmosphere. All-day breakfasts, excellent sandwiches, salads, pizzas bythe foot and nice dinners to boot. Eat here for breakfast and you'll be backfor lunch.",
            "like": 24
        },
        {
            "id": "toast",
            "name": "Toast",
            "mood": "eat",
            "description": "8221W 3rd St, Tel: +1 323-655-5018. Serves traditional American breakfastall day for a reasonable price. Also great lunch food! Popular with famouspeople.",
            "like": 93
        },
        {
            "id": "labrea-bakery-cafe",
            "name": "La Brea Bakery Cafe",
            "mood": "eat",
            "description": "624South La Brea Ave, Tel: +1 323-939-6813. Excellent bread, sandwiches, cookies,pastries and coffee.",
            "like": 21
        },
        {
            "id": "mcafe",
            "name": "M Café",
            "mood": "eat",
            "description": "7119Melrose Ave, Tel: +1 323-525-0588. M-Sa 9AM-10PM, Su 9AM-9PM. One of thehottest new places in Hollywood. If you've been infected with Organica orMacrobiotica, head here now. It's often impossibly crowded and parking'sa nightmare. They've got lots of premade things that are handy if you're shorton time, otherwise it's better to order fresh, considering how far you'll beset back. Most mains hover around the $10-15 range.",
            "like": 67
        },
        {
            "id": "gardenof-taxco",
            "name": "Gardenof Taxco",
            "mood": "eat",
            "description": "inWest Hollywood offers an unforgettable experience, with the &quot;menu&quot;recited by colorful waiters.",
            "like": 51
        },
        {
            "id": "thenickel-diner",
            "name": "The Nickel Diner",
            "mood": "eat",
            "description": "(OldBank district), 524 S Main St (between 5th & 6th). 8am-3pm,6pm-10:30pm, closed Mondays. early 1900s style diner, lots of choices forbreakfast (try the polenta, or the mountain of french toast) and home ofnovelty pastries - bacon donuts, homemade pop tarts! Open for lunch &dinner, too. $7-$15.",
            "like": 79
        },
        {
            "id": "cicada",
            "name": "Cicada",
            "mood": "eat",
            "description": "617S. Olive St (at 7th St), Tel: +1-213-488-9488. M-Fr 5:30PM-9PM.Situated in the beautiful Arts Deco Oviatt Building, Cicada deftly blendselegance of design and superior Italian fare. A chic bar is upstairs, completewith marble dance floor. A perfect place for special occasions, a fine mealbefore the theatre or just any excuse to be dazzled, both by the atmosphere andthe cooking.",
            "like": 30
        },
        {
            "id": "colespacific-electric-buffet",
            "name": "Cole's Pacific Electric Buffet",
            "mood": "eat",
            "description": "118E. 6th Street, Rio Branco, CA, 90014 (on 6th, between Main and Rio Branco),Tel:+1-213-622-4090. Daily: 9AM-10PM. Bar/restaurant in nearly continuous operationsince 1908, but recently shut for a year and a extensive upscale redesign.Along with Philippe The Original, one of the possible originators of the FrenchDip sandwich.",
            "like": 93
        },
        {
            "id": "grandcentral-market",
            "name": "Grand Central Market",
            "mood": "eat",
            "description": "317S. Broadway, Rio Branco, CA, 90013, Tel: +1-213-624-2378. Daily 9AM-6PM. Hugeindoor bazaar of Central and South American vendors. Get fresh tortillas, hugeMexican papayas and tasty Tortas. On Hill and Broadway between 3rd and 4th(closer to 3rd). Conveniently near the Bradbury Building (unique architecture)and the Pershing Square Red line stop (Northeast access).",
            "like": 61
        },
        {
            "id": "allangelo-ristorante",
            "name": "All' Angelo Ristorante",
            "mood": "eat",
            "description": "7166melrose ave. - Rio Branco - CA 90046, Tel: +1 323 933-9540. Lunch -Friday: 12 - 2:30PM / Dinner - M-Sa: 6 - 10:30PM / Closed Sunday. Thisauthentic Italian eatery combines the relaxed atmosphere of a Rio Brancorestaurant with a menu that's as close to a ticket to Rome as you can getwithout a passport. Their seasonal menu includes mouth watering timbale ofcauliflower, authentic tripe, gourmet pastas, and hearty entrees. The ownersbring a warm Italian sensibility to fresh dishes that would please any palate.This place is perfect for that special occasion!",
            "like": 75
        },
        {
            "id": "theoriginal-pantry-cafe",
            "name": "The Original Pantry Cafe",
            "mood": "eat",
            "description": "877S. Figueroa Street, Rio Branco, CA, 90017, Tel: +1-213-972-9279. ThePantry boasts that it has never closed or been without a customer since itfirst opened in 1924. (Want proof? The front entrance has no lock on it). Comehere on any morning and you will see a line stretching around the block - thewait is worth it, and the fast service will have hot plate of food in front ofyou within minutes of sitting down. Best place for breakfast after midnight.Cash only.",
            "like": 38
        },
        {
            "id": "cefiore",
            "name": "ce Fiore",
            "mood": "eat",
            "description": "6922Hollywood Blvd #107, Tel: +1 323-465-9097. Everyday 11AM-11PM.Right across the street from Grauman's Chinese Theatre you'll find one of LA'sbest places for tart Italian non-fat frozen yogurt and yogurt smoothies. Choosefrom 4 different frozen yogurt flavors: Original, Blackberry,Raspberry-Pomogranate, and Green Tea, along with a wide variety of fresh fruitsand dry toppings. They also offer smoothies, herbal teas, and coffees.",
            "like": 40
        },
        {
            "id": "malo",
            "name": "Malo",
            "mood": "eat",
            "description": "4326W. Sunset Blvd., Silverlake, Tel: +1 323-664-1011. A very cool bar andrestaurant with good Mexican food, best known for its giant selection oftequilas and mojitos. Valet parking.",
            "like": 75
        },
        {
            "id": "tomamp-toms",
            "name": "Tom & Tom's",
            "mood": "eat",
            "description": "333 S Alameda St, Ste 108 (entrance on 4th at Alameda, in the Little Tokyo Shopping Center). 7am-2am. This place seems to have been built for the kind of customer who brings a laptop or book and stays all day. There are plenty of tables and even some glass-walled booths to have meetings in. Tons of power outlets. Free wifi. (be careful getting here - it's right on the edge of Skid Row.) $2-$6",
            "like": 13
        },
        {
            "id": "yamashiro",
            "name": "Yamashiro",
            "mood": "eat",
            "description": "1999N. Sycamore Avenue, Tel: +1-323-466-5125. This Japanese restaurant is perchedabove Hollywood, and on most nights provides an unbeatable view of the city,from downtown to Palos Verdes. The food is excellent, the gardens andarchitecture are elegant, and the restaurant has a fascinating history (thestory's on the menu). Look for the small sign just west of the Magic Castle;valet parking only.",
            "like": 43
        }
    ]


}
