const restaurants = {
    'ma-cantine-thai': {
        badge: 'jusqu\'à -20%',
        title: 'Ma Cantine Thaï',
        verifie: true,
        stitle: '56 rue Richer',
        scity: 'Paris 9ème',
        szip: '75009',
        coordinates: { lat: 48.874093, lng: 2.342877 },
        image: "https://ik.imagekit.io/resandco/ma-cantine-thai/45577670_696108444093647_1150228534342451200_o-1200x675_rCMzYH00ev.jpg",
        gallerie: [
            "https://ik.imagekit.io/resandco/ma-cantine-thai/110187553_626836098250757_4907096043537717425_n_GKnmQOdoEs.jpg",
            "https://ik.imagekit.io/resandco/ma-cantine-thai/109828368_270233987610730_226588165942920836_n_j3wFX2NXA.jpg",
            "https://ik.imagekit.io/resandco/ma-cantine-thai/109914501_593930324643817_2668679964449695222_n_7DrRxZBaS.jpg",
        ],
        tags: ['Asiatique', 'Thaï'],
        creneaux: {
            'mardi midi': ['14h15', '14h30', '14h45'],
            'vendredi midi': ['14h15', '14h30', '14h45'],
        },
        menus: [
            {
                menu: "entrée + plat ou plat + dessert",
                prix: 10
            },
            {
                menu: "entrée + plat ou plat + dessert - végétarien",
                prix: 10
            },
            {
                menu: "plat",
                prix: 7.9
            },
            {
                menu: "plat - végétarien",
                prix: 7.9
            }
        ],
        description: `
### L’ambiance

Envie d’évasion ? Ma Cantine Thaï est l’endroit idéal ! Proche des Grands Boulevards parisiens, venez découvrir ce restaurant chaleureux, décoré avec goût, alliant modernité et tradition asiatique. Son mobilier brut et sa décoration épurée vous transportera en Asie du Sud-Est et ce, en restant en plein cœur de Paris, pour découvrir de délicieuses saveurs exotiques : Bo Bùn, nems, poulet curry… Ces plats d’ailleurs raviront vos envies de voyages et vous transporteront sur une plage thaïlandaise ou dans un petit village cambodgien. Ouvert depuis mai 2018, cette cantine thaï propose un buffet pour composer vos plats à vos envies. Mais attention, votre menu reste une surprise !

### L’équipe

Au sein de ce restaurant familial, faites la rencontre de Charlotte, Théodore et leur famille, souriants et agréables, ils partageront avec vous les saveurs de la cuisine thaïlandaise, laotienne et vietnamienne issues de leurs racines.

### Et l’anti-gaspi ?

Déjà convaincue de l’importance de la lutte contre le gaspillage alimentaire, Ma Cantine Thaï renforce son engagement en devenant partenaire RES&CO. Une belle façon d’allier convivialité et consommation responsable.
        `,
        infos: [
            "Animaux acceptés",
            "Climatisé",
            "Option végétarienne",
            "Wifi",
            "Option sans gluten",
        ]
         ,
        allergenes: [
            "Arachides",
            "Soja",
            "Fruits à coque",
            "Graines de sésame",
        ]
    },
    'opium-la-cabane': {
        title: 'Opium, La Cabane',
        badge: '-20%',
        stitle: '44 Rue du Dauphine',
        scity: 'Paris 6ème',
        szip: '75006',
        coordinates: { lat: 48.854150, lng: 2.338720 },
        image: "https://ik.imagekit.io/resandco/opium-la-cabane/41768518_666678753716538_636533506389835776_n_KNrA1F7rV.jpg",
        gallerie: [
            "https://ik.imagekit.io/resandco/opium-la-cabane/IMG_20200713_141556_GAVYY2krA.jpg",
            "https://ik.imagekit.io/resandco/opium-la-cabane/IMG_20200713_141424_XpqNZmtcb.jpg",
            "https://ik.imagekit.io/resandco/opium-la-cabane/IMG_20200713_141522_zDLTxzdsF.jpg",
        ],
        tags: ['Français', 'Bar à huîtres'],
        creneaux: {
            'lundi midi': ['12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'lundi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h', '22h30', '23h', '23h30'],
            'mardi midi': ['12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'mardi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h', '22h30', '23h', '23h30'],
            'mercredi midi': ['12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'mercredi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h', '22h30', '23h', '23h30'],
            'jeudi midi': ['12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'jeudi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h', '22h30', '23h', '23h30'],
            'vendredi midi': ['12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'vendredi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h', '22h30', '23h', '23h30'],
            'samedi midi': ['12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'samedi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h', '22h30', '23h', '23h30'],
            'dimanche midi': ['12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'dimanche soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h', '22h30', '23h', '23h30'],
        },
        menus: [
            {
                menu: "Plateau de 12 huîtres Fines de Claire",
                prix: 20
            },
            {
                menu: "Plateau de 12 huîtres Spéciales de Claire",
                prix: 24
            },
            {
                menu: "Plateau de 12 huîtres Pousses en Claire",
                prix: 36
            },
            {
                menu: "Plateau de 12 huîtres bretonnes",
                prix: 44
            },
            /*{
                menu: "assortiment de douze huîtres",
                prix: 20
            },
            {
                menu: "de la mer",
                prix: 20
            },
            {
                menu: "de la terre",
                prix: 20
            },*/
        ],
        description: `
### L’ambiance

Déguster des bons produits de la mer à Paris ? C'est possible ! Le petit restaurant Opium La Cabane est un restaurant spécialisé pour ses huîtres, son saumon fumé d'Ecosse et ses crevettes roses. Pour les jours d'hiver, la soupe de poisson est un vrai régal !
Vous n'êtes pas fan de poisson ? Pas de panique, le restaurant propose de délicieux carpaccio et son lard fumé de Toscane.

### L’équipe

Pascal, le gérant d'Opium la Cabane est un véritable artiste. Issu du monde de la mode, il travaille tous les jours de l'année dans sa nouvelle cabane restaurant, son nouveau terrain de jeu artistique depuis 2012. 
Chez lui, les clients y sont accueillis comme des rois.
        `,
        infos: [
            "Animaux acceptés",
            "Climatisé",
            "Option sans gluten",
            "Wifi",
        ],
        allergenes: [
            "Crustacés",
            "Poissons",
            "Mollusques",
        ]
    },
    'casadiagana': {
        title: 'Casadiagana',
        badge: 'jusqu\'à -20%',
        verifie: true,
        stitle: '78 Avenue de la République',
        scity: 'Paris 11ème',
        szip: '75011',
        coordinates: { lat: 48.864427, lng: 2.378987 },
        image: "https://ik.imagekit.io/resandco/Casadiagana/Casadiagana-1055-site_BD1594975128554_-b3vhZCqq.jpg",
        gallerie: [
            "https://ik.imagekit.io/resandco/Casadiagana/IMG_20200904_182951_H5YPofbGaG.jpg",
            "https://ik.imagekit.io/resandco/Casadiagana/Casadiagana-1017_HD1595530160548_RzojxgyK-S.jpg",
            "https://ik.imagekit.io/resandco/Casadiagana/IMG_20200904_181411_7V6vNYoxr.jpg",
            "https://ik.imagekit.io/resandco/Casadiagana/Casadiagana-1036-site_HD1594974835479_hHnvKgxNm.jpg"
        ],
        tags: ['Traiteur', 'Sandwicherie', 'Africain'],
        creneaux: {
            'vendredi midi': ['14h30', '15h', '15h30', '16h', '16h30'],
            'vendredi soir': ['17h', '17h30', '18h']
        },
        menus: [
            {
                menu: "plat",
                prix: 6
            },
            {
                menu: "plat - végétarien",
                prix: 6
            },
            {
                menu: "entrée + plat",
                prix: 7.5
            },
            {
                menu: "entrée + plat - végétarien",
                prix: 7.5
            },
            {
                menu: "entrée + plat - végétarien",
                prix: 7.5
            },
            {
                menu: "sandwich ou salade + pastels",
                prix: 6
            },
            {
                menu: "sandwich ou salade + pastels - végétarien",
                prix: 6
            },
        ],
        description: `
### L’ambiance et l'équipe

Casadiagana, c'est un traiteur africain et une sandwicherie. Ils proposent chaque jour des plats fait maison, sur place, pour une pause déjeuner sur le pouce avec leurs soupes, sandwiches, salades et pastels. Si vous passez avant 19h30, vous pourrez même prendre votre dîner avec les délicieux plats chauds africains : yassa, tieb, mafé... 
Fatou et son équipe font tout pour combler le plaisir de leurs clients. L'objectif : partir en ayant l'estomac plein et avec le sourire !
Ils décident de changer de carte tous les jours, pour ne pas lasser leurs clients.

### Et l'anti-gaspi ?

Casadiagana est déjà engagé depuis un an dans la lutte contre le gaspillage alimentaire. C'est le vendredi qu'il y a le plus de restes.
        `,
        infos: [
            "Terrasse",
            "Option végétarienne",
        ]
    },
    'carmen-ragosta': {
        title: 'Carmen Ragosta',
        badge: 'fermé pendant confinement',
        verifie: true,
        stitle: '8 Rue de la Grange aux Belles',
        scity: 'Paris 10ème',
        szip: '75010',
        coordinates: { lat: 48.873615, lng: 2.364612 },
        image: "https://ik.imagekit.io/resandco/carmen-ragosta/Carmen_Ragosta_2_-_site_internet_Iwm3vobhaP.png",
        gallerie: [
            "https://ik.imagekit.io/resandco/carmen-ragosta/Carmen_Ragosta_1_-_site_internet_vyfCOyZc4.png",
            "https://ik.imagekit.io/resandco/carmen-ragosta/Carmen_Ragosta_4_-_photo_perso_jKnXNCt_8.jpg",
            "https://ik.imagekit.io/resandco/carmen-ragosta/Carmen_Ragosta_7_-_photo_perso_xp2HXpWEI.jpg",
            "https://ik.imagekit.io/resandco/carmen-ragosta/Carmen_Ragosta_5_-_site_internet_dRJKZRvm9.png",
            "https://ik.imagekit.io/resandco/carmen-ragosta/Carmen_Ragosta_4_-_site_internet_fjdWOb8mc.png",
            "https://ik.imagekit.io/resandco/carmen-ragosta/Carmen_Ragosta_6_-_site_internet_-F5Pfrgp_.png",
            "https://ik.imagekit.io/resandco/carmen-ragosta/Carmen_Ragosta_3_-_site_internet_rzQI_fTMk.png",
        ],
        tags: ['Créative', 'Italien', 'Végan'],
        creneaux: {
            /*'mercredi midi': ['12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'mercredi soir': ['17h', '17h30', '18h', '18h30'],
            'jeudi midi': ['12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'jeudi soir': ['17h', '17h30', '18h', '18h30'],
            'vendredi midi': ['12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'vendredi soir': ['17h', '17h30', '18h', '18h30'],*/
        },
        menus: [
            {
                menu: "plat - végan",
                prix: 19
            },
            {
                menu: "entrée + plat - végan",
                prix: 25
            },
            {
                menu: "plat + dessert - végan",
                prix: 25
            },
            {
                menu: "entrée + plat + dessert - végan",
                prix: 29
            }
        ],
        description: `
### L’ambiance et l'équipe

De l’extérieur, impossible de se douter qu’il est possible d'y déguster des plats italiens, vegan et responsables chez Carmen Ragosta. C’est au coeur du quartier du Canal Saint Martin que Carmen, styliste et créatrice de plats a ouvert sa boutique-restaurant il y a maintenant 18 ans. Son accent chantant italien et sa bonne humeur emplissent le lieu d’une atmosphère chaleureuse, intime et familiale. Vous aurez l’opportunité de déjeuner tous les midis dans ce lieu haut en couleurs mélangeant vêtements, accessoires et nourriture italienne. Les murs en pierre, le carrelage vintage et la décoration parfaitement choisie par Carmen vous transportent immédiatement dans une ambiance chaleureuse à l’italienne. Côté cuisine, Carmen propose un large choix de plats vegans, toujours parfaitement assaisonnés et savoureux. N’hésitez surtout pas à goûter son tiramisú, si bon qu’elle préfère ne pas partager sa recette.

### Et l’anti-gaspi ?

Carmen a toujours été très attentive à l’anti-gaspi. D'ailleurs, c'est menu surprise depuis toujours chez Carmen Ragosta. Tous les plats sont cuisinés dans sa boutique-restaurant et sont confectionnés à partir d’ingrédients frais, issus de l’agriculture biologique et toujours de saison. Pour lutter contre le gaspillage alimentaire, Carmen a décidé de n’acheter qu’un petit réfrigérateur dans son restaurant pour ne pas stocker trop de nourriture. Elle achète ses ingrédients tous les jours en fonction de ses besoins. Sachez que ses engagements environnementaux ne se traduisent pas seulement dans sa manière de cuisiner mais aussi dans son rôle de styliste puisqu’elle utilise de plus en plus de pièces recyclées dans ses créations.        `,
       
        infos: [
            "Animaux acceptés",
            "100% vegan",
            "Option sans gluten",
            "Bio",
            "Accessibilité handicapé",
            "Terrasse",
            "Kids friendly",
        ],
        allergenes: [
            "Céréales contenant du gluten",
            "Crustacés",
            "Oeufs",
            "Poissons",
            "Arachides",
            "Soja",
            "Lait",
        ]
    },
    'comptoir-43': {
        title: 'Comptoir 43 Bio Ô Top',
        badge: 'fermé pendant confinement',
        stitle: '43 Rue de l\'Arbre Sec',
        scity: 'Paris 1er',
        szip: '75001',
        coordinates: { lat: 48.861129, lng: 2.342405 },
        image: "https://ik.imagekit.io/resandco/comptoir-43/Comptoir_43_-_site_internet_2_J4EHG61t5.jpg",
        gallerie: [
            "https://ik.imagekit.io/resandco/comptoir-43/Comptoir_43_-_site_internet_1_4oKFRTIOj9.jpg",
            "https://ik.imagekit.io/resandco/comptoir-43/Comptoir_43_-_site_internet_3_E2fdSHAsr.jpg",
        ],
        tags: ['Français', 'Epicerie fine', 'Bio'],
        creneaux: {
            /*'mardi midi': ['12h', '12h30', '13h', '13h30', '14h', '14h30', '15h'],
            'jeudi midi': ['12h', '12h30', '13h', '13h30', '14h', '14h30', '15h'],*/
        },
        menus: [
            {
                menu: "plat + dessert",
                prix: 12
            },
            {
                menu: "plat + dessert - végétarien",
                prix: 12
            },
        ],
        description: `
### L’ambiance

Venez comme vous êtes, vous restaurer au restaurant Comptoir 43 - Bio Ô Top en plein cœur du 1er arrondissement. Dans ce restaurant, on y mange, et on y achète des produits français et bio. De quoi faire, d’une pierre deux coups !
Le décor est à l’image des deux fondatrices, authentiques et chaleureux, pour en faire un lieu décontracté, d’échange et de partage. Grâce à la terrasse donnant sur une rue calme, vous vous sentirez coupé de l’effervescence parisienne. 
Dans votre assiette, que du bio et des produits français.
Sur quoi craquerez-vous en premier ? Une salade fraîche, une tourte et en dessert, saurez-vous résister à la délicieuse salade de fruits frais de saison ? Nous ne pensons pas !
En tout cas, au Comptoir 43 - Bio Ô Top, on s’y sent vraiment bien !

### L’équipe

Vous serez chaleureusement accueillis par Valérie et Julie, les co-fondatrices. Elles respirent la bonne humeur ! Toujours le sourire, elles prendront plaisir à vous accueillir dans leur restaurant comptoir - épicerie fine.

### Et l’anti-gaspi ?

Le comptoir 43 - Bio Ô Top était déjà engagé au niveau anti-gaspi. Cependant, il renforce sa lutte contre le gaspillage en devenant restaurant partenaire avec RES&CO. En effet, Valérie, sensible à cette cause souhaite limiter toute perte à l’issue de son service et c’est pour cette raison qu’elle vous accueille, de 12h à 15h, le mardi et le jeudi dans son restaurant, au 43 rue de l’Arbre Sec !
`,
   
        infos: [
            "Accès handicapé",
            "Animaux acceptés",
            "Climatisé",
            "Option végétarienne",
            "Option végane",
            "Bio",
            "Option sans gluten",
            "Terrasse",
            "Wifi",
        ]
    },
    'cafezen': {
        badge: 'fermé pendant confinement', /*'jusqu\'à -38%',*/
        title: 'CaféZen',
        verifie: true,
        stitle: '3 Rue Poissonnière',
        scity: 'Paris 2ème',
        szip: '75002',
        coordinates: { lat: 48.868752, lng: 2.347661 },
        image: "https://ik.imagekit.io/resandco/cafezen/Cafe_Zen_-_site_internet_2_Y8XqRHLoE.jpeg",
        gallerie: [
            "https://ik.imagekit.io/resandco/cafezen/Cafe_Zen_-_perso_3_dtc9tVxLoJ.jpeg",
            "https://ik.imagekit.io/resandco/cafezen/Cafe_Zen_-_site_interet_3_wqRo2af2i.jpeg",
            "https://ik.imagekit.io/resandco/cafezen/Cafe_Zen_-_perso_2__einyN4Crm.jpeg",
            "https://ik.imagekit.io/resandco/cafezen/Cafe_Zen_-_site_internet_8_PPeU7323Gs.jpeg",
            "https://ik.imagekit.io/resandco/cafezen/Cafe_Zen_-_site_internet_11_udK8AdvI5J.jpeg",
            "https://ik.imagekit.io/resandco/cafezen/Cafe_Zen_-_site_internet_7_dljoZAZDKf.jpeg",
            "https://ik.imagekit.io/resandco/cafezen/Cafe_Zen_-_site_internet_10_VkydIFGMsW.jpeg",
            "https://ik.imagekit.io/resandco/cafezen/Cafe_Zen_-_site_internet_9_pt9vv02p1m.jpeg",
            "https://ik.imagekit.io/resandco/cafezen/Cafe_Zen_-_site_internet_1_lShm-hdV9D.jpeg",
            "https://ik.imagekit.io/resandco/cafezen/Cafe_Zen_-_perso_1_ICKGjtT6i.jpeg",
            "https://ik.imagekit.io/resandco/cafezen/Cafe_Zen_-_site_internet_4_P9p1cEiao.jpeg",
            "https://ik.imagekit.io/resandco/cafezen/Cafe_Zen_-_site_internet_6_FTROTCpQZp.jpeg",
            "https://ik.imagekit.io/resandco/cafezen/Cafe_Zen_-_site_internet_12_sjP42nte2V.jpeg",
        ],
        tags: ['Français', 'Scandinave', 'Co-working', 'Coffee shop'],
        creneaux: {
            /*'lundi matin': ['9h', '9h30', '10h', '10h30', '11h'],
            'lundi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h'],
            'lundi soir': ['16h30', '17h', '17h30', '18h', '18h30'],
            'mardi matin': ['9h', '9h30', '10h', '10h30', '11h'],
            'mardi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h'],
            'mardi soir': ['16h30', '17h', '17h30', '18h', '18h30'],
            'mercredi matin': ['9h', '9h30', '10h', '10h30', '11h'],
            'mercredi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h'],
            'mercredi soir': ['16h30', '17h', '17h30', '18h', '18h30'],
            'jeudi matin': ['9h', '9h30', '10h', '10h30', '11h'],
            'jeudi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h'],
            'jeudi soir': ['16h30', '17h', '17h30', '18h', '18h30'],
            'vendredi matin': ['9h', '9h30', '10h', '10h30', '11h'],
            'vendredi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h'],
            'vendredi soir': ['16h30', '17h', '17h30', '18h', '18h30'],
            'samedi matin': ['10h', '10h30', '11h'],
            'samedi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h'],
            'samedi soir': ['16h30', '17h', '17h30', '18h', '18h30'],*/
        },
        menus: [
            {
                menu: "petit déjeuner avec jus à l'extracteur (25cl)",
                prix: 9
            },
            {
                menu: "entrée + plat ou plat + dessert - végétarien",
                prix: 16
            },
            {
                menu: "entrée + plat ou plat + dessert",
                prix: 16
            },
            {
                menu: "gourmandise sucrée + jus à l'extracteur (25cl)",
                prix: 6.5
            }
        ],
        description: `
### L’ambiance

CaféZen, c'est un café co-working et restaurant healthy en plein coeur du quartier Sentier.
Le décor est boisé, chaleureux et moderne, sur les tons bleu et rose. Le bon goût d'Estelle allié aux origines Scandinaves d'Anders en font un très joli lieu de vie "hygge".
- Pour prendre un bain de soleil en regardant les passants, installez-vous sur la petite terrasse.
- Pour les gourmands, direction le comptoir où l'on retrouve un ensemble de gâteaux, cookies et autres gourmandises sucrées.
- Pour les entrepreneurs ou étudiants, le co-working découpé en plusieurs espaces est idéal pour travailler dans un cadre apaisant et avec une bonne connexion wifi.
- Pour les amoureux, direction le sous-sol, vous y trouverez un espace canapé  intimiste pour partager un bon repas en tête à tête.
- Pour les entreprises, la salle de réunion au sous-sol est l'idéale !

Depuis son ouverture en 2019, CaféZen a su fidéliser sa clientèle grâce à ses délicieux jus à l'extracteur. De quoi se remettre d'aplomb un matin difficile.
PS : Ils proposent même des ateliers d'aide à la gestion administrative pour les entrepreneurs ou particuliers débordés !

### L’équipe

CaféZen c'est un lieu de vie créé par Estelle et Anders. Derrière le comptoir, vous pourrez retrouver Pauline ou leur fille Signe. C'est avec bonne humeur et douceur qu'ils vous serviront vos menus surprises !

### Et l’anti-gaspi ?

Au CaféZen, c'est une carte changeante, composée de plats sains et frais, préparés le jour même.
Les jus frais sont leur spécialité, mais leur conservation est de courte durée !

`,
        infos: [
            "Animaux acceptés",
            "Climatisé",
            "Compost",
            "Bio",
            "Option sans gluten",
            "Option végane",
            "Option végétarienne",
            "Terrasse",
            "Wifi",
        ],
        allergenes: [
            "Cérérales contenant du gluten",
            "Oeufs",
            "Poissons",
            "Arachides",
            "Soja",
            "Lait",
            "Fruits à coque",
            "Graines de sésame",
            "Moutarde",
        ]
    },
    'seunsep': {
        badge: 'fermé pendant le confinement', /*'jusqu\'à -42%',*/
        title: 'Seunsep',
        verifie: true,
        stitle: '46 Passage Choiseul',
        scity: 'Paris 2ème',
        szip: '75002',
        coordinates: { lat: 48.868019104003906, lng: 2.335505723953247 },
        image: "https://ik.imagekit.io/resandco/seunsep/Seunsep_-_perso_1_3kFVrSaz3.jpg",
        gallerie: [
            "https://ik.imagekit.io/resandco/seunsep/Seunsep_-_internet_1_HmJ-9JhS2g.jpg",
            "https://ik.imagekit.io/resandco/seunsep/Seunsep_-_perso_3_yuRUbAV1sE.jpg",
            "https://ik.imagekit.io/resandco/seunsep/Seunsep_-_internet_2_iIbcsotGAh.jpg",
            "https://ik.imagekit.io/resandco/seunsep/Seunsep_-_internet_4_GsMevlplRS.jpg",
            "https://ik.imagekit.io/resandco/seunsep/Seunsep_-_perso_1_3kFVrSaz3.jpg",
            "https://ik.imagekit.io/resandco/seunsep/Seunsep_-_perso_4_W-xNJTP2Ew.jpg",
        ],
        tags: ['Asiatique', 'Thaï-lao', 'Street-food'],
        creneaux: {
            /*'mercredi midi': ['14h', '14h30', '15h'],*/
        },
        menus: [
            {
                menu: "plat",
                prix: 7
            },
            {
                menu: "plat - végétarien",
                prix: 7
            },
            {
                menu: "entrée + plat",
                prix: 10
            },
            {
                menu: "entrée + plat",
                prix: 10
            }
        ],
        description: `
### L’ambiance

Que vous soyez fan, amateur ou que vous souhaitiez simplement découvrir la délicieuse cuisine Thaï-Lao, le Seunsep est l’adresse qu’il vous faut. Une cuisine traditionnelle avec des produits de qualité, le tout préparé sur place par des chefs passionnés ce qui assure des plats uniques qui sauront régaler vos papilles. Une fois en bouche, c’est l’explosion de saveurs qui vous fera voyager instantanément dans les contrées lointaines de la Thaïlande ou du Laos; mais pas que!
Sur place il y en a pour tous les goûts, que vous soyez plus terre ou plus mer : bo bun, poulet curry, nems, nouilles sautées etc…
Par ailleurs le cadre est lumineux, apaisant et moderne tout en rappelant les racines de sa cuisine traditionnelle grâce aux différents tableaux aux murs. Le restaurant se dispose de 3 étages, refaites à neuf. Tout est fait pour que vous vous y sentez bien, et que le temps d’un instant, vous puissiez vous évader de la routine parisienne sous ce fameux toit du passage Choiseul. 
Alors, convaincu ? Il ne reste plus qu’à vous y rendre et de déguster la délicieuse cuisine des chefs !
Bon appétit !

### L’équipe

L’équipe se compose d’une famille passionnée par la cuisine Thaï-Lao qui véhicule ces saveurs à travers ces délicieux petits plats depuis 2018. C'est notamment Bounnhong et Cédric qui sont là pour chouchouter la clientèle.

### Et l’anti-gaspi ?

L’anti-gaspi apparaît clairement être une priorité pour le Seunsep. En effet, le restaurant souhaite s’engager en limitant le gaspillage alimentaire et être plus responsable. C’est ainsi qu’à l’issue du service du mercredi et du jeudi, le Seunsep vous accueille de 14h à 15h afin de limiter toute perte de nourriture de son buffet. 

`,
        infos: [
            "Animaux acceptés",
            "Option sans gluten",
            "Option végane",
            "Option végétarienne",
            "Terrasse",
            "Wifi",
        ],
        allergenes: [
            "Cérérales contenant du gluten",
            "Crustacés",
            "Oeufs",
            "Poissons",
            "Arachides",
            "Graines de sésame",
        ]
    },
    'yuman': {
        badge: 'fermé pendant confinement' /*'jusqu\'à -52%'*/,
        title: 'Yuman',
        verifie: true,
        stitle: '70 Rue du Chevaleret',
        scity: 'Paris 13ème',
        szip: '75013',
        coordinates: { lat: 48.8306509, lng: 2.3750197 },
        image: "https://ik.imagekit.io/resandco/yuman/Yuman_-_Gabetsouah_6_ll68oWX0r.jpg",
        gallerie: [
            "https://ik.imagekit.io/resandco/yuman/Yuman_-_Gabetsouah_1_dHDcvqNtb.jpg",
            "https://ik.imagekit.io/resandco/yuman/Yuman_-_Gabetsouah_4_ToK2auDw1.jpg",
            "https://ik.imagekit.io/resandco/yuman/Yuman_-_Gabetsouah_9_RqKO3SG7Z.jpg",
            "https://ik.imagekit.io/resandco/yuman/Yuman_-_Gabetsouah_3_wT06NyBfa.jpg",
            "https://ik.imagekit.io/resandco/yuman/Yuman_-_Gabetsouah_2_jG4afzj3Z.jpg",
            "https://ik.imagekit.io/resandco/yuman/10c7652d-25af-4c09-ae2a-9c4c346c4e63_mXH9puNNO.jpeg",
            "https://ik.imagekit.io/resandco/yuman/80779977_1233724673497400_8911725434580762624_n_JmtETaSyy3.jpg",
            
        ],
        tags: ['Bio', 'Cuisine créative', 'Français', 'Cuisine engagée'],
        creneaux: {
            /*'jeudi midi': ['13h30', '14h', '14h40'],
            'jeudi soir': ['19h', '19h30', '20h', '20h30', '21h', '21h30', '22h', '22h30'],*/
        },
        menus: [
            {
                menu: "midi : entrée + plat ou plat + dessert",
                prix: 14
            },
            {
                menu: "midi : entrée + plat ou plat + dessert - végétarien",
                prix: 14
            },
            {
                menu: "soir : entrée + plat ou plat + dessert",
                prix: 18
            },
            {
                menu: "soir : entrée + plat ou plat + dessert - végétarien",
                prix: 18
            },
            {
                menu: "enfant : entrée + plat ou plat + dessert",
                prix: 10
            }
        ],
        description: `
### L’ambiance

Yuman est un restaurant atypique, à la fois contemporain avec ses murs bruts bétonnés et ses charpentes apparentes dans un style industriel, mais aussi un endroit apaisant. Des éclairages élégants, des touches de jaune et de bois viennent réchauffer l’espace. Le restaurant se découpe en trois univers bien distincts. À l’entrée, retrouvez tables longues et tabourets pour un effet « cantine moderne ». Le fond du restaurant dévoile une mezzanine cocooning, à la croisée entre le salon de thé et la bibliothèque cosy. Enfin, découvrez la petite salle confidentielle du sous-sol avec sa longue tablée commune flanquée de chaises hautes, nichée entre la cave à vin et la cuisine. Yuman, c’est également une épicerie fine. Pas facile de faire son choix parmi la sélection pointue de vins, cafés, thés, biscuits, cakes, confitures, sans parler de la charcuterie et du fromage à la coupe, du pain, des œufs et des paniers bio à emporter !

### L’équipe

Chez Yuman, faites la rencontre de Gilles, Malo et Julie. Une équipe soudée, agréable et attentive. Souriants et passionnés, ils ne manquent pas de vous apporter une explication approfondie sur vos plats et le choix des ingrédients, afin de vous faire vivre la meilleure des expériences !

### Et l’anti-gaspi ?

Les recettes sont préparées à partir d’ingrédients ultra frais, 100% bio et de saison. La plupart des fruits et légumes sont cultivés en France et si possible, à moins de 200 km de Paris, par des agriculteurs raisonnés. Chaque jeudi, Yuman s’est lancé le défi ambitieux de changer sa carte afin de s’adapter aux saisons, et proposer un renouvellement continuel des saveurs. Lors de ce changement, certains produits à disposition ne seront donc plus utilisés dans les menus de la semaine. C’est donc à ce moment-là que les menus surprises anti-gaspi prennent tout leur sens. En mangeant chez Yuman, vous faites honneur aux ingrédients rescapés du menu de la semaine précédente !        `,
       
            infos: [
            "Accès handicapé",
            "Bio",
            "Wifi",
            "Climatisé",
        ]
    },
    'bmk-paris-bamako': {
        badge: 'jusqu\'à -46%',
        title: 'BMK Paris-Bamako',
        verifie: true,
        stitle: '14 Rue de la Fidélité ',
        scity: 'Paris 10ème',
        szip: '75010',
        coordinates: { lat: 48.874613, lng: 2.3565 },
        image: "https://ik.imagekit.io/resandco/bmk-paris-bamako/BMK_1_5hQUiQnsG-.jpg",
        gallerie: [
            "https://ik.imagekit.io/resandco/bmk-paris-bamako/BMK_4_N-pv7bb0x.jpg",
            "https://ik.imagekit.io/resandco/bmk-paris-bamako/BMK_3_OVuM1vRiv.jpg",
            "https://ik.imagekit.io/resandco/bmk-paris-bamako/BMK_1_5hQUiQnsG-.jpg",
            "https://ik.imagekit.io/resandco/bmk-paris-bamako/BMK_-_Gabetsouah_1_h2hEOcoxXC.jpg",
        ],
        tags: ['Africain', 'Epicerie'],
        creneaux: {
            'mardi soir': ['20h30', '21h', '21h30'/*'22h', '22h30'*/],
            'mercredi soir': ['20h30', '21h', '21h30'/*'22h', '22h30'*/],
            'jeudi soir': ['20h30', '21h', '21h30'/*'22h', '22h30'*/],
            'vendredi soir': ['20h30', '21h', '21h30'/*'22h', '22h30'*/],
            'samedi soir': ['20h30', '21h', '21h30'/*'22h', '22h30'*/],
        },
        menus: [
            {
                menu: "plat + dessert",
                prix: 15
            },
            {
                menu: "plat + dessert - végétarien",
                prix: 15
            },
            {
                menu: "enfant : plat + dessert",
                prix: 6
            }
        ],
        description: `
### L’ambiance

Le décor de cette cantine et épicerie africaine est soigné et puise son inspiration au coeur des multiples diasporas africaines : masques, statuettes, photographies… Un léger son de djembé se laisse entendre et rythme l’ambiance musicale. BMK Paris-Bamako met parfaitement en valeur l’art africain ! Des touches de wax, ce tissu ultra coloré, presque psychédélique, parsèment les tables et les étagères, et habillent les chaises en rotin. Tout juste installées, on s’y sent déjà bien ! Le petit plus ? La cuisine séparée de la salle par une jolie verrière. On a bien envie d’aller jeter un petit coup d’oeil à ce qu’il se passe en cuisine…

### L’équipe

Abdou, Naceur et son équipe vous serviront avec bonne humeur leurs plats africains traditionnels préparés avec passion.

### Et l’anti-gaspi ?

BMK est fermé tous les lundis. Le gaspillage alimentaire est donc plus important le dimanche soir lors de la fermeture du restaurant.
C'est donc le dimanche soir, que BMK a choisit d'ouvrir des créneaux de réservation de menu surprise anti-gaspi. 
`,
        infos: [
            "Option végétarienne",
            "Kids friendly",
        ],
        allergenes: [
            "Céréales contenant du gluten",
            "Oeufs",
            "Arachides",
            "Poissons",
            "Lait",
            "Fruits à coque",   
        ]
    },
    'nos-grands-meres-ont-du-talent': {
        badge: 'fermé pendant le confinement', /*'jusqu\'à -32%',*/
        title: 'Nos Grands-Mères ont du Talent',
        verifie: true,
        stitle: '43 Rue des Petits Carreaux',
        scity: 'Paris 2ème',
        szip: '75002',
        coordinates: { lat: 48.868239, lng: 2.347445 },
        image: "https://ik.imagekit.io/resandco/ngmodt/NGMODT_-_perso_3_cjSaPkezc.jpg",
        gallerie: [
            "https://ik.imagekit.io/resandco/ngmodt/NGMODT_-_site_internet_2_zK9tpZQ9tA.jpg",
            "https://ik.imagekit.io/resandco/ngmodt/NGMODT_-_site_internet_3_nClwZ2hDJ.jpg",
            "https://ik.imagekit.io/resandco/ngmodt/NGMODT_-_perso_2_eM2jD40nDi.jpg",
            "https://ik.imagekit.io/resandco/ngmodt/NGMODT_-_site_internet_1_-jPJK7X84U.jpg",
            "https://ik.imagekit.io/resandco/ngmodt/NGMODT_-_perso_1_GPoZQaOwsR.jpg",
            "https://ik.imagekit.io/resandco/ngmodt/NGMODT_-_perso_3_cjSaPkezc.jpg",
        ],
        tags: ['Français', 'Restauration Rapide'],
        creneaux: {
            /*'mardi midi': ['13h45', '14h', '14h30', '15h'],
            'mercredi midi': ['13h45', '14h', '14h30', '15h'],
            'jeudi midi': ['13h45', '14h', '14h30', '15h'],
            'vendredi midi': ['13h45', '14h', '14h30', '15h'],*/
        },
        menus: [
            {
                menu: "entrée + plat ou plat + dessert",
                prix: 9
            },
            {
                menu: "entrée + plat ou plat + dessert - végétarien",
                prix: 9
            },
        ],
        description: `
### L’ambiance

Tout le monde sait qu'il n'y a pas meilleur moment que d'aller déjeuner chez mamie le dimanche ! On sait d'avance que l'on va se régaler avec des plats délicieux, copieux et toujours faits avec de bons produits !  
Dans un cadre atypique qui rappelle la cuisine de grand maman, Nos Grands-Mères ont du Talent vous invite à découvrir chaque semaine de nouvelles recettes traditionnelles savoureuses remises au goût du jour !  Des plats cuisinés pour tous les goûts, des salades exquises gorgées de fraîcheur et des desserts gourmands dignes de ceux de nos grands-mères !

### L’équipe

Nos Grands-Mères ont du Talent a été créé en 2015 par deux entrepreneurs débordant d'énergie : Arthur et Jean.
Leur idée ? Valoriser la cuisine des grands-mères et favoriser l’emploi des séniors.

### Et l’anti-gaspi ?

Engagés dans une démarche éco-responsable, Arthur et Jean ont tout de suite dit oui à la valorisation de leurs invendus. Ça serait bête de jeter des plats de Mère-Grand !
`,
        infos: [
            "Option végétarienne",
            "Terrasse",
            "Wifi",
            "Emploi senior"
        ],
        allergenes: [
            "Céréales contenant du gluten",
            "Lait",
            "Moutarde",
            "Anhydride sulfureux et sulfites",
        ]
    },
    'cafe-cote-rive': {
        badge: 'jusqu\'à -51%',
        title: 'Café Côté Rive',
        verifie: true,
        stitle: '284 Boulevard Jean Jaurès',
        scity: 'Boulogne-Billancourt',
        szip: '92100',
        coordinates: { lat: 48.8249769, lng: 2.2455377 },
        image: "https://ik.imagekit.io/resandco/cafe-cote-rive/Cafe__Co_te__Rive_-_site_internet_1_BVRDyv9ID.jpg",
        gallerie: [
            "https://ik.imagekit.io/resandco/cafe-cote-rive/Cafe__Cote__rIve_-_site_internet_2_vmz9jW6Xo.jpg",
            "https://ik.imagekit.io/resandco/cafe-cote-rive/Cafe__Cote__rIve_-_perso_12_6sL8DGox_b.jpeg",
            "https://ik.imagekit.io/resandco/cafe-cote-rive/Cafe__Cote__rIve_-_site_internet_4_8WiDuCoP1.jpg",
            "https://ik.imagekit.io/resandco/cafe-cote-rive/Cafe__Cote__rIve_-_site_internet_3_lr9tCGiim.jpg",
        ],
        tags: ['Français', 'Brasserie'],
        creneaux: {
            'samedi midi': ['12h', '12h30', '13h', '13h30', '14h', '14h30'],
            'samedi soir': ['19h', '19h30', '20h', '20h30', /*'21h', '21h30', '22h', '22h30'*/],
        },
        menus: [
            {
                menu: "entrée + plat ou plat + dessert",
                prix: 15
            },
            {
                menu: "entrée + plat ou plat + dessert - végétarien",
                prix: 14
            },
        ],
        description: `
### L’ambiance

Brasserie française, le Café Côté Rive propose plusieurs ambiances rassemblées en un même lieu. Venez découvrir le coin salon, la terrasse chauffée pour l'hiver et idéale pour les jours d'été ensoleillés, et bien sur le restaurant.
Après avoir passé la large devanture digne des plus beaux cafés parisiens, le Café Côté Rive de Boulogne vous réserve un décor spacieux, convivial, dans des tons bruns, beiges et crèmes, baigné d'une lumière tamisée. Des fauteuils confortables semblent être là rien que pour vous !

### L’équipe

Le personnel met son enthousiasme et son savoir-faire à votre disposition et vous propose de jolis plats, parfois typiques, parfois originaux, et toujours délicieux, ainsi que des formules bien pensées et un bel accueil. Et après le repas, une petite promenade digestive le long de la Seine, située à 10 mètres, est toujours bienvenue !

`,
        infos: [
            "Accessibilité handicapées",
            "Option végétarienne",
            "Accepte les animaux",
            "Climatisé",
            "Terrasse",
            "Wifi",
            "Kids friendly",
        ]
    },
    'tiki-bowls': {
        badge: 'jusqu\'à -40%',
        title: 'Tiki Bowls',
        stitle: '12 Rue de Castellane',
        scity: 'Paris 8ème',
        szip: '75008',
        coordinates: { lat: 48.872727, lng: 2.324529 },
        image: "https://ik.imagekit.io/resandco/tiki-bowls/Tiki_Bowls-Photos-13_tSCgHmxGS6.jpg",
        gallerie: [
            "https://ik.imagekit.io/resandco/tiki-bowls/Tiki_en_photos-lieu-06_ek_gNYsMEi.jpg",
            "https://ik.imagekit.io/resandco/tiki-bowls/Tiki_en_photos-lieu-01_T7Q1AFWTlt.jpg",
            "https://ik.imagekit.io/resandco/tiki-bowls/Tiki_Bowls-Photos-34_we7w1oa3bS.jpg",
            "https://ik.imagekit.io/resandco/tiki-bowls/Tiki_en_photos-lieu-03_5mtQcmvban.jpg",
            "https://ik.imagekit.io/resandco/tiki-bowls/Tiki_Bowls-Photos-32_GhxDbtCwiZ.jpg",
            "https://ik.imagekit.io/resandco/tiki-bowls/Tiki_Bowls-Photos-18_2m1pzg2Ri.jpg",
            "https://ik.imagekit.io/resandco/tiki-bowls/Tiki_en_photos-lieu-02_NUFq4edUR.jpg",
        ],
        tags: ['Hawaïen', 'Poké', 'Healthy'],
        creneaux: {
            'vendredi midi': ['12h', '12h30', '13h', '13h30', '14h', '14h30'],
        },
        menus: [
            {
                menu: "petit bol + dessert",
                prix: 7
            },
            {
                menu: "petit bol + dessert - végétarien",
                prix: 7
            },
            {
                menu: "grand bol + dessert",
                prix: 9
            },
            {
                menu: "grand bol + dessert - végétarien",
                prix: 9
            }
        ],
        description: `
### L’ambiance et l'équipe

Chez Tiki, on s'évade dans l'univers des plages et des vacances à Hawaï. Leurs spécialités : les bols sucrés pour le petit déjeuner, et les bols salés pour un déjeuner healthy. Ils proposent aussi des tartines. Vous ne trouverez pas de viande, uniquement du poisson. Ouvert en 2017 par Marie, ce lieu est idéal pour pause gourmande, saine et à petit prix.

### Et l’anti-gaspi ?

Tiki Bowls est fermé le week-end. Les pertes alimentaires sont donc essentiellement le vendredi, à la fin du service. C'est pour cette raison que nos menus surprises anti-gaspi sont disponibles uniquement le vendredi midi !
        `,
        infos: [
            "Option végétarienne",
            "Option végane",
            "Terrasse",
            "Animaux acceptés",
            "Climatisé",
            "Wifi",
            "Option sans gluten",
        ]
         ,
        allergenes: [
            "Céréales contenant du gluten",
            "Crustacés",
            "Oeufs",
            "Poissons",
            "Arachides",
            "Soja",
            "Lait",
            "Fruits à coque",
            "Graines de sésame",
            "Moutarde",
            "Mollusques",
        ]
    },
    'bar-bol': {
        title: 'Bar Bol',
        badge: 'jusqu\'à -15%',
        verifie: true,
        stitle: '3bis Rue de Vaugirard',
        scity: 'Paris 6ème',
        szip: '75006',
        coordinates: { lat: 48.849010, lng: 2.340342 },
        image: "https://ik.imagekit.io/resandco/bar-bol/121699103_792897407939343_3123092142266481611_n_k3fZdD8YAt.jpg",
        gallerie: [
            "https://ik.imagekit.io/resandco/bar-bol/121629264_2687870774862321_5694144547547571565_n_2RXFXJYXGN.jpg",
            "https://ik.imagekit.io/resandco/bar-bol/121564518_1373244736363114_4361378519185792611_n_VBxfM9QUjJ.jpg",
            "https://ik.imagekit.io/resandco/bar-bol/121699103_792897407939343_3123092142266481611_n_k3fZdD8YAt.jpg",
            "https://ik.imagekit.io/resandco/bar-bol/121541146_399699831032219_8234539388690704283_n_XB25DBgO35F-.jpg",
            "https://ik.imagekit.io/resandco/bar-bol/121645318_1262786907412626_3262946073193933546_n_OmvCVcXSQ3.jpg",
            "https://ik.imagekit.io/resandco/bar-bol/121547274_413694492966157_2753976060741265428_n_gTjN4KbpZW.jpg",
            "https://ik.imagekit.io/resandco/bar-bol/121542772_358430588689190_5996482935606606149_n_Woj10jBCuseu.jpg",
        ],
        tags: ['Hawaïen', 'Poké'],
        creneaux: {
            'lundi soir': ['18h', '18h30', '19h', '19h30'],
            'mardi soir': ['18h', '18h30', '19h', '19h30'],
            'mercredi soir': ['18h', '18h30', '19h', '19h30'],
        },
        menus: [
            {
                menu: "grand bol",
                prix: 11.90
            },
            {
                menu: "grand bol - végétarien",
                prix: 11.90
            },
            {
                menu: "grand bol + dessert",
                prix: 14.90
            },
            {
                menu: "grand bol + dessert - végétarien",
                prix: 14.90
            },
        ],
        description: `
### L’ambiance

Bar Bol, c'est un lieu où la cuisine et l'art ne font qu'un. Situé à deux pas du Jardin du Luxembourg, le Bar Bol offre une décoration d'intérieure unique signée Philippe Saade et Richard Orlinski.

### Au menu

Vous y dégusterez un large choix de bols, dont les bols signatures du célèbre chef Philippe Legendre, triplement étoilé. Ces bols sont des associations de saveurs pour un plaisir à la fois gustatif et visuel. Vos bols sont servis telles des oeuvres d'art ! 

Votre menu est surprise ! Mais voici quelques informations sur ce que vous pourrirez retrouver dans votre menu.

Les grands bols sont composés de : 1 base + 1 protéine + 3 mix-in + 2 toppings + 1 sauce

- Bases : Riz vinaigré, Riz Tropical, Riz Betterave framboise, Riz Soja, Quinoa

- Protéines : Saumon Cru, Dorade Cru, Thon Rouge Cru, Lieu fumé, Poulet rôti

- Mix-in : Edamame, Avocat, Mangue, Choux rouge, Choux Blanc, Radis, Oignons rouge, Concombre, Grenade, Betterave, Gingembre, Ciboulette

Tous les bols peuvent être végétariens, ou végan si besoin.

Les desserts peuvent être par exemple : riz au lait, crème chocolat, crème caramel, panna cotta, mousse au chocolat, salade de fruits...

### Et l'anti-gaspi alors ?

Faire partie de l’aventure RES&CO ce n’est pas pour rien. Avec produits de qualité, frais et gourmands, il n'est pas question de gaspiller !

Le Bar Bol n'est pas uniquement engagé dans la lutte contre le gaspillage alimentaire, mais aussi la lutte contre le cancer, en reversant un pourcentage de leur chiffre d'affaires à la Ligue contre le Cancer. 

Chez Bar Bol, c'est un repas de qualité, sain, copieux, et engagé, avec des prix abordables pour tous !

N’hésitez plus, rendez-vous dans ce bar gastronomique pour un voyage 100% hawaïen et sain.
        `,
        infos: [
            "Option végétarienne",
            "Option végane",
            "Produits bio",
            "Animaux acceptés",
            "Terrasse",
            "Option sans gluten",
            "Wifi",
        ],
        allergenes: [
            "Céréales contenant du glutent",
            "Oeufs",
            "Poissons",
            "Soja",
            "Graines de sésame",
            "Anhydride sulfureux et sulfites",
        ]
    },
    'verde': {
        title: 'Verdé',
        badge: 'jusqu\'à -25%',
        verifie: true,
        stitle: '138 Rue Victor Hugo',
        scity: 'Levallois-Perret',
        szip: '92300',
        coordinates: { lat: 48.898146, lng: 2.294886 },
        image: "https://ik.imagekit.io/resandco/verde/IMG_6389_9yBImsPtJY.jpg",
        gallerie: [
            "https://ik.imagekit.io/resandco/verde/2791910D-BE2B-4E91-85C2-5A4DA3D35C1F_b5s-aki1MS.JPG",
            "https://ik.imagekit.io/resandco/verde/IMG_6193_W2l6DabFZ5IMP.jpg",
            "https://ik.imagekit.io/resandco/verde/14129029-B5E9-4A03-A4EE-D76CD539AD45_yuc_vbkEw4.JPG",
            "https://ik.imagekit.io/resandco/verde/IMG_6079_DHxxtp7ur-.jpg",
            "https://ik.imagekit.io/resandco/verde/IMG_6288_jCfnlh3hdzJm3.jpg",
            "https://ik.imagekit.io/resandco/verde/IMG_6235_Qe0fZAjArAhGc.jpg",
        ],
        tags: ['Salade', 'Poké', 'Quiche', 'Soupe'],
        creneaux: {
            'lundi midi': ['12h', '12h30', '13h', '13h30'],
            'mardi midi': ['12h', '12h30', '13h', '13h30'],
            'mercredi midi': ['12h', '12h30', '13h', '13h30'],
            'jeudi midi': ['12h', '12h30', '13h', '13h30'],
            'vendredi midi': ['12h', '12h30', '13h', '13h30'],
        },
        menus: [
            {
                menu: "plat",
                prix: 6
            },
            {
                menu: "plat + dessert",
                prix: 9
            },
            {
                menu: "plat - végétarien",
                prix: 6
            },
            {
                menu: "plat + dessert - végétarien",
                prix: 9
            },
        ],
        description: `
### L’ambiance

Le comptoir à salade Verdé a vu le jour en septembre 2020 à Levallois-Perret Comptoir à salade oui, mais pas que, quiches, pokés, soupes et pâtisseries sont à déguster. Le tout, préparé à partir de produits extra-frais de saison. La décoration verte et boisée fait du Verdé un vrai petit coin de nature en plein Levallois, et si vous tendez l'oreille vous parviendrez même à entendre le chant des oiseaux !

### Au menu

Le comptoir à salade Verdé, c’est le rêve de Nathalie Fernandes, une entrepreneure dynamique. Après une reconversion professionnelle, elle décide de se former et d’ouvrir un lieu à son image. Et ce n’est certainement pas la crise sanitaire qui allait la stopper !

### Et l'anti-gaspi alors ?

Engagée pour la valorisation des légumes et fruits, Nathalie déborde d’idées de recettes à vous faire découvrir ! C’est le mercredi et le vendredi qu’il y a le plus de restes alimentaires. Alors réservez vite votre menu surprise pour un déjeuner équilibré et engagé !

Après votre dégustation vous serez amenés vous même à débarrasser votre plateau et à trier vos déchets. Chez Verdé chaque chose à sa place et le plastique, les couverts et les cartons ont tous un emplacement réservé pour le bonheur de dame nature.
        `,
        infos: [
            "Option végétarienne",
            "Option végane",
            "Option sans gluten",
            "Compost",
        ],
        allergenes: [
            "Céréales contenant du gluten",
            "Oeufs",
            "Poissons",
            "Soja",
            "Lait",
            "Fruits à coque",
            "Moutarde",
            "Graines de sésame",
        ]
    },
        'new-shri-ganesh': {
        title: 'New Shri Ganesh',
        badge: 'Offre Spéciale Confinement',
       
        stitle: '52 avenue Marceau',
        scity: 'Courbevoie',
        szip: '92400',
        coordinates: { lat: 48.900523, lng: 2.245154 },
        image: "https://ik.imagekit.io/resandco/new-shri-ganesh/2017-08-31_CR8a0dWZeW.jpg",
        gallerie: [ "https://ik.imagekit.io/resandco/new-shri-ganesh/2017-08-30_tA3vktgjS.jpg",
                   "https://ik.imagekit.io/resandco/new-shri-ganesh/IMG_3271_W_xGdxKv2-dU.jpeg",
        ],
        tags: ['Indien', 'Offre Spéciale Confinement'],
        creneaux: {
            'lundi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'lundi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h'],
            'mardi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'mardi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h'],
            'mercredi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'mercredi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h'],
            'jeudi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'jeudi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h'],
            'vendredi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'vendredi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h'],
            'samedi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'samedi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h'],
            'dimanche midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'dimanche soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h'],
        },
        menus: [
            {
                menu: "entrée + plat + dessert",
                prix: 13.5
            },
        ],
        description: `
Installé en plein cœur de Courbevoie, le restaurant New Shri Ganesh vous propose une évasion culinaire dans le nord de l’Inde : grillades, plats en sauces, plats végétariens, curry…
Vous pourrez vous régaler dans ce restaurant indien complètement typique. Leurs plats sont épicés et parfumés mais pas forcément pimentés. 

En raison du confinement, le service sera assuré uniquement à emporter. 
        `,
        infos: [ 
        ],
        allergenes: [
          
        ]
    },
        'cantine-populaire': {
        title: 'Cantine Populaire',
        badge: 'offre spéciale Confinement',
        stitle: '21 Henri Barbusse',
        scity: 'Clichy',
        szip: '92110',
        coordinates: { lat: 48.898647, lng: 2.302957 },
        image: "https://ik.imagekit.io/resandco/cantine-populaire/40407581_532304780552105_3408748610341306368_o_mTE_3-lwMfyN.jpg",
        gallerie: ["https://ik.imagekit.io/resandco/cantine-populaire/40407581_532304780552105_3408748610341306368_o_mTE_3-lwMfyN.jpg",
                   "https://ik.imagekit.io/resandco/cantine-populaire/ob_211a33_menu-a-emporter-la-cantine-populaire-r_S8UuNRU_A.jpg",
                   "https://ik.imagekit.io/resandco/cantine-populaire/20201029_163613_ve7s3D46u6.jpg",
                   "https://ik.imagekit.io/resandco/cantine-populaire/photo0jpg_BRHwHqU3QRTWe.jpg",
                   "https://ik.imagekit.io/resandco/cantine-populaire/ob_703ac2_tarte-normande-la-cantine-populaire-re_CPw9_-bPkyTqN.jpg",
        ],
        tags: ['cantine', 'Offre Spéciale Confinement'],
        creneaux: {
            'lundi matin': ['8h', '8h30', '9h', '9h30', '10h', '10h30', '11h'],
            'lundi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h'],
            'mardi matin': ['8h', '8h30', '9h', '9h30', '10h', '10h30', '11h'],
            'mardi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h'],
            'mercredi matin':  ['8h', '8h30', '9h', '9h30', '10h', '10h30', '11h'],
            'mercredi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h'],
            'jeudi matin': ['8h', '8h30', '9h', '9h30', '10h', '10h30', '11h'],
            'jeudi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h'],
            'vendredi matin': ['8h', '8h30', '9h', '9h30', '10h', '10h30', '11h'],
            'vendredi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h'],
        },
        menus: [
            {
                menu: "entrée + plat ou plat + dessert",
                prix: 13
            },
            {
                menu: "entrée + plat + dessert",
                prix: 15
            },
        ],
        description: `
La Cantine populaire vous propose une cuisine familiale saine et gourmande 100% fait maison avec amour. 
 
En raison du confinement, le service sera assuré uniquement à emporter. 
        `,
        infos: [
          
        ],
        allergenes: [
          
        ]
    },
    'l-assiette-de-rebecca': {
        title: 'L\'assiette de Rebecca',
        badge: 'Offre Spéciale Confinement',
        stitle: '14 rue Mercoeur',
        scity: 'Paris',
        szip: '75011',
        coordinates: { lat: 48.858177, lng: 2.384472 },
        image: "https://ik.imagekit.io/resandco/l-assiette-de-rebecca/original_cuisine-senegalaise-mafe_3hdNHjK3b2lX.jpg",
        gallerie: [
            "https://ik.imagekit.io/resandco/l-assiette-de-rebecca/original_cuisine-senegalaise-mafe_3hdNHjK3b2lX.jpg",        
        ],
        tags: ['Africain', 'Offre Spéciale Confinement'],
        creneaux: {
            'mardi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'mardi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
            'mercredi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'mercredi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
            'jeudi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'jeudi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
            'vendredi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'vendredi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
            'samedi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'samedi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
            'dimanche midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'dimanche soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
        },
        menus: [
            {
                menu: "plat",
                prix: 8.9
            },
            {
                menu: "entrée + plat ou plat + dessert",
                prix: 10.9
            },
            {
                menu: "entrée + plat + dessert",
                prix: 13.9
            },
        ],
        description: `
Restaurant africain qui vous propose un voyage dans le continent africain à travers leurs différents plats. Leurs plats sont cuisinés  avec des produits frais par leur chef tous les jours.

En raison du confinement, le service sera assuré uniquement à emporter. 

Plus d'informations sur www.lassiette-de-rebecca.fr 
        `,
        infos: [
          
        ],
        allergenes: [
          
        ]
    },
    'chok-dee': {
        title: 'Chok Dee',
        badge: 'offre spéciale Confinement',
        stitle: '54 rue Lafayette',
        scity: 'Paris',
        szip: '75009',
        coordinates: { lat: 48.875501, lng: 2.341864 },
        image: "https://ik.imagekit.io/resandco/chok-dee/DSCF0884_3HVmIAGU1kXw.jpg",
        gallerie: [
            "https://ik.imagekit.io/resandco/chok-dee/DSCF0731_rxb0itiqT.jpg",
            "https://ik.imagekit.io/resandco/chok-dee/DSCF0649_W47JjDPNy.jpg",
            "https://ik.imagekit.io/resandco/chok-dee/DSCF0641_7m5gIZ8AgT8m.jpg",
        ],
        tags: ['Brasserie', 'Asiatique', 'Thaï', 'Offre Spéciale Confinement'],
        creneaux: {
            'lundi midi': ['11h', '11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'lundi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
            'mardi midi': ['11h', '11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'mardi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
            'mercredi midi': ['11h', '11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'mercredi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
            'jeudi midi': ['11h', '11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'jeudi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
            'vendredi midi': ['11h', '11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'vendredi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
            'samedi midi': ['11h', '11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'samedi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
            'dimanche midi': ['11h', '11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'dimanche soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
        },
        menus: [
            {
                menu: "entrée + plat ou plat + dessert",
                prix: 16.5
            },
            {
                menu: "entrée + plat + dessert",
                prix: 20.5
            },
        ],
        description: `
"Chok Dee Café est une brasserie thaïlandaise « à la parisienne ».
C’est dans un décor végétal, aux chics allures contemporaines, que nous vous proposons de découvrir une cuisine thaïlandaise traditionnelle et soignée élaborée à partir de produits premium, frais et bio.
Nous favorisons les circuits courts et la qualité de nos produits choisis en fonction des saisons et des disponibilités."

En raison du confinement, le service sera assuré uniquement à emporter. 

Plus d'informations sur www.chokdeecafe.com
        `,
        infos: [
          
        ],
        allergenes: [
          
        ]
    },
    'saveurs-du-monde': {
        title: 'Saveurs du monde',
        badge: 'En livraison ou à emporter',
        stitle: '55 rue de la charité',
        scity: 'Lyon 2e',
        szip: '69002',
        coordinates: { lat: 45.750270, lng: 4.830275 },
        image: "https://ik.imagekit.io/resandco/saveurs-du-monde/123801109_661835127833791_1823386090005053462_n_QxluJ0tGj.jpg",
        gallerie: [
            "https://ik.imagekit.io/resandco/saveurs-du-monde/123801109_661835127833791_1823386090005053462_n_QxluJ0tGj.jpg",
            "https://ik.imagekit.io/resandco/saveurs-du-monde/123856749_839171070152494_3240175817640180472_n_68qR9hmGYgA5r.jpg",
            "https://ik.imagekit.io/resandco/saveurs-du-monde/123907891_880996128971787_4236354405004895616_n_DghLR7ie9.jpg",
            "https://ik.imagekit.io/resandco/saveurs-du-monde/123551477_994683807704678_7942670629398486502_n_c_DDOzZ4Q7bj.jpg",
            "https://ik.imagekit.io/resandco/saveurs-du-monde/123738183_3997867400241763_5665585955128079970_n_uY19KhVoeeLj.jpg",
            "https://ik.imagekit.io/resandco/saveurs-du-monde/123365049_2897914123641403_4625769503621430336_n_DnInGk0sBLaJ.jpg",
            "https://ik.imagekit.io/resandco/saveurs-du-monde/123524869_2894096490827693_6318062346654306517_n_NUqBKZeng.jpg",
            "https://ik.imagekit.io/resandco/saveurs-du-monde/123763606_2764571003790030_7864632122463096900_n_sETJyKS2S.jpg",
        ],
        tags: ['Asiatique', 'Viet', 'Vente à emporter', 'livraison', 'option végane'],
        creneaux: {
            'mardi soir': ['18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
            'mercredi soir': ['18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
            'jeudi soir': ['18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
        },
        menus: [
            {
                menu: "plat",
                prix: 10.5
            },
            {
                menu: "entrée + plat",
                prix: 16
            },
        ],
        description: `
Découvrez la cuisine fusion asiatique du traiteur « Saveur du monde », bobun traditionnel ou végan, samoussa veggie ou encore nems savoureux. N’hésitez pas à commander votre menu à emporter ! 
Toutes les commandes doivent être passées avant 15h pour une livraison/retrait le jour-même. Toute commande passée après 15h ne pourra pas être prise en compte.
Le service sera assuré uniquement à emporter ou en livraison (+2€). 
        `,
        infos: [
            "Option végétarienne",
            "Option végane",
            "Option sans gluten",
            "Fruits et légumes locaux",
        ],
        allergenes: [
            "Crustacé",
            "Oeuf",
            "Poisson",
            "Soja",
            "Lait",
            "Graines de sésame",
        ]
     },
    'mr-burritos': {
        title: 'Mr Burritos',
        badge: 'Offre spéciale confinement',
        stitle: '26 Rue Custine',
        scity: 'Paris 18e',
        szip: '75018',
        coordinates: { lat: 48.889343, lng: 2.347359 },
        image: "https://ik.imagekit.io/resandco/mr-burritos/2020-06-11_G_98snmue.jpg",
        gallerie: [
            "https://ik.imagekit.io/resandco/mr-burritos/120128022_3342144615877858_1724071122403569176_o_ZL2ScO494.jpg",
            "https://ik.imagekit.io/resandco/mr-burritos/120479105_3358544904237829_5300903864857860246_o_CrmREuXhKkkd.jpg",
        ],
        tags: ['Mexicain', 'Vente à emporter', 'Offre spéciale confinement'],
        creneaux: {
            'lundi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30'],
            'lundi soir': ['18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h', '22h30'],
            'mardi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30'],
            'mardi soir': ['18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h', '22h30'],
            'mercredi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30'],
            'mercredi soir': ['18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h', '22h30'],
            'jeudi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30'],
            'jeudi soir': ['18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h', '22h30'],
            'vendredi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30'],
            'vendredi soir': ['18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h', '22h30'],
            'samedi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30'],
            'samedi soir': ['18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h', '22h30'],
            'dimanche midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30'],
            'dimanche soir': ['18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h', '22h30'],
        },
        menus: [
            {
                menu: "plat",
                prix: 10.9
            },
        ],
        description: `
Le Mexique reste loin et inaccessible encore , mais leurs tacos et burritos sont là pour pimenter votre confinement. Leurs spécialités mexicaines sont préparées de façon traditionnelle !
Le plat est surprise, il sera composé d'un des plats suivants : quesadillas, bowls, burritos.
Le service sera assuré uniquement à emporter.
        `,
        infos: [
          
        ],
        allergenes: [
          
        ]
    },
    'delice-de-henan': {
        title: 'Délice de Henan',
        stitle: '18 route de genas',
        scity: 'Lyon 3e',
        szip: '69003',
        coordinates: { lat: 45.75536559066979, lng: 4.879239313841082 }, 
        image: "https://ik.imagekit.io/resandco/delice-de-henan/51752266_312363542753621_2917545312505561088_n_xrT66G4bcYvm.jpg",
        gallerie: [
            "https://ik.imagekit.io/resandco/delice-de-henan/52816619_317155065607802_6245043067275968512_o_1WbDvhJlV.jpg",
            "https://ik.imagekit.io/resandco/delice-de-henan/52877858_317155342274441_7239055029653471232_o_0Z--Gk4Mt.jpg",
            "https://ik.imagekit.io/resandco/delice-de-henan/52876799_317155372274438_1985507262898110464_o_Vo3TF0kuS.jpg",
            "https://ik.imagekit.io/resandco/delice-de-henan/52661117_317155042274471_1165291182218018816_o_cruYOGloV.jpg",
            "https://ik.imagekit.io/resandco/delice-de-henan/53160348_317155408941101_5508084240434069504_o_vhn7yORdLL.jpg",
            "https://ik.imagekit.io/resandco/delice-de-henan/52961255_317155145607794_865530605582942208_o_lpIoppFwenBB.jpg",
            "https://ik.imagekit.io/resandco/delice-de-henan/52729390_317155272274448_5330184358571540480_o_e75q2_av0.jpg",
        ],
        tags: ['Asiatique', 'Vente à emporter'],
        creneaux: {
            'lundi midi': ['12h30', '13h', '13h30', '14h', '14h30'],
            'lundi soir': ['18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h'],
            'mardi midi': ['12h30', '13h', '13h30', '14h', '14h30'],
            'mardi soir': ['18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h'],
            'mercredi midi': ['12h30', '13h', '13h30', '14h', '14h30'],
            'mercredi soir': ['18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h'],
            'jeudi midi': ['12h30', '13h', '13h30', '14h', '14h30'],
            'jeudi soir': ['18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h'],
            'vendredi midi': ['12h30', '13h', '13h30', '14h', '14h30'],
            'vendredi soir': ['18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h'],
            'samedi midi': ['12h30', '13h', '13h30', '14h', '14h30'],
            'samedi soir': ['18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h'],
            'dimanche soir': ['18h30', '19h', '19h30', '20h', '20h30', '21h', '21h30', '22h'],
        },
        menus: [
            {
                menu: "plat + entrée ou accompagnement ou dessert",
                prix: 10
            },
            {
                menu: "plat + entrée ou accompagnement ou dessert - végétarien",
                prix: 10
            },
        ],
        description: `
Le plat est surprise, il sera composé d'un des plats suivants : soupe de boulettes, nouilles sautées, soupe de nouilles, bo bun...
Le service sera assuré uniquement à emporter ou en livraison (+2€).
        `,
        infos: [
         "Option végétarienne",
         "Vente à emporter"
        ],
        allergenes: [
          
        ]
    },
    'tim-la-princesse': {
        title: 'Tim la Princesse',
        badge: 'Offre Spéciale Confinement',
        stitle: '46 Rue Marcadet',
        scity: 'Paris 18e',
        szip: '75018',
        coordinates: { lat: 48.891433738048946, lng: 2.352889936443292 }, 
        image: "",
        gallerie: [
        ],
        tags: ['Africain', 'Traiteur', 'Vente à emporter'],
        creneaux: {
            'mardi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'mardi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
            'mercredi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'mercredi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
            'jeudi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'jeudi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
            'vendredi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'vendredi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
            'samedi midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'samedi soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'], 
            'dimanche midi': ['11h30', '12h', '12h30', '13h', '13h30', '14h', '14h30', '15h', '15h30', '16h', '16h30'],
            'dimanche soir': ['17h', '17h30', '18h', '18h30', '19h', '19h30', '20h', '20h30', '21h'],
        },
        menus: [
            {
                menu: "plat",
                prix: 6,9
            },
        ],
        description: `
Le plat est surprise, il sera composé d'un des plats suivants : 
Le service sera assuré uniquement en vente à emporter pendant toute la durée du confinement.
        `,
        infos: [
         "Vente à emporter"
        ],
        allergenes: [
          
        ]
    },
}

Object.keys(restaurants).forEach((restaurantId) => (
    restaurants[restaurantId].id = restaurantId
))

module.exports = restaurants
