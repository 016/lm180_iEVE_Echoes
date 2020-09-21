const messages =  {
  '|':'|',
  common:{
    title: '<b>i</b>EVE Echoes',
    titleShort: '<b>i</b>EVE',
    login: 'Se connecter',
    signup: 'S\'inscire',
    forgotPass: 'Mot de passe oublié',
    resetPass: 'Changer de mot de passe',
    backIndexPage: 'Retour à l\'Index',

    smsCode: 'Code SMS',
    sendSms: 'Envoyer un SMS',
    sendEmailCode: 'Envoyer un Code',
    emailCode: 'Code Email',
    captcha: 'Captcha',
    locale:{
      zh: '切换中文',
      en: 'Use English',
    },
    create: 'Créer',
    update: 'Editer',
    view: 'Voir',
    delete: 'Effacer',
    op: 'Gérer',
    id: 'ID',

    costCurrency: 'ISK',
    costCharge: '<span>Actuellement, la phase de test est sur invitation uniquement. Le coût de publication des informations est fixé à un montant extrêmement bas et sera restauré à la normale après. Les comptes invités reçoivent des ISK à des fins de test.</span><br/><span>Afin d\'éviter les spams, un certain montant d\'ISK sera facturé pour le message publié, et il ne peux pas être posté si le solde est insuffisant</span><br/><span>[PAS ENCORE IMPLÉMENTÉ]Méthode de recharge: envoyer des ISK par contrat à ieve dans le jeu, ajoutez `ieve-Nom de votre compte sur ieve` (pour moi c\'est ieve-DP, votre nom de compte enregistré sur ieve est très important!!!) dans la partie desc, rechargera le compte après avoir reçu le contrat</span><br/><span>Il est interdit de poster des sujets politiques, des insultes personnelles, RMT, et d\'autres contenus inappropriés. De tels postes seront supprimés sans remboursement. Toute future violation entrainera une interdiction de compte sans rmboursement.</span>',

    newElement:{
      title: 'Titre',
      desc: 'Desc'
    },
  },

  title:{
    corp: ' Corporation',
  },

  time:{
    year: "Année",
    month: "Mois",
    day: "Jour",
    hour: "Heure",
    min: "Min",
    sec: "Sec",
  },

  datasource:{
    demo: 'Donnée Demo',
    d201912: '201912 Donnée Test',
    d202007: '202007 Donnée Test',
    d202008: '202008 Donnée',
    d202106: '202006 Vxxxx Donnée',
  },

  btn:{
    new: 'Nouveau',
    save: 'Enregistrer',
    edit: 'Editer',
    cancel: 'Annuler',
    close: 'Fermer',
    newLink: 'Nouveau Lien',
  },

  status:{

  },
  type:{
    partner: {
      person: 'Personne',
      company: 'Corporation'
    },
    sexy: {
      male: 'Homme',
      female: 'Femme',
    },
    yon: {
      yes: 'Oui',
      no: 'Non',
    },

    ship:{
      frigate: 'Frégate',
      destroyer: 'Destroyer',
      cruiser: 'Croiseur',
      battlecruiser: 'Croiseur Cuirassé',
      battleship: 'Cuirassé',
      carrier: 'Transporteur',
      industrial: 'Industriel',
    },

    shipMode:{
      SniperTitle: 'Mode Sniper',
      SniperInfo: 'Délai d\'activation des armes +100%</br>Vitesse de poursuite -60%</br>Vitesse d\'explosion -60%</br>Vitesse de vol -99%</br>Portée de contrôle des drones +75%</br>Portée optimale +100%</br>Perte de précision +100%</br>Vitesse de vol des missiles +100%</br>Tous les dégâts +50%',
      RechargeTitle: 'Mode Recharge',
      RechargeInfo: 'Rayon de signature +100%</br>Vitesse de vol -80%</br>Temps de recharge du capaciteur -50%',
      DefenseTitle: 'Mode Défense',
      DefenseInfo: 'Tous les dégâts -90%</br>Vitesse de vol -80%</br>Rayon de signature -20%</br>Toutes les résistances +50%',
      PropulsionTitle: 'Mode Propulsion',
      PropulsionInfo: 'Temps de recharge du capaciteur +500%</br>Rayon de signature +100%</br>Vitesse de vol +100%',
      SiegeTitle: 'Mode Siège',
      SiegeInfo: 'Vitesse de poursuite -95%</br>Vtesse de vol des missiles -90%</br>rayon d\'explosion +1000%</br>Vitesse de vol -99%</br>Rayon de signature +100%</br>Tous les dégâts +100%',
      BombardTitle: 'Mode Bombardier',
      BombardInfo: 'Vitesse d\'explosion -50%</br>Rayon d\'explosion +100%</br>Vitesse de vol -95%</br>Rayon de signature +200%</br>Temps de vol +200%</br>Tous les dégats +20%',
    },

    shipConfigLikeType:{
      t_1: 'HAUT',
      t_9: 'BAS',
    },

    slotType:{
      low: 'Emplacement Inférieur',
      mid: 'Emplacement Intermédiaire',
      high: 'Emplacement Supérieur',

      drone: 'Empacement Drones',


      rig_p: 'Module d\'optimisation de combat',
      rig_m: 'Module d\'optimisation d\'ingénierie',
    },

    weapon:{
      missile: {
        title: 'Lance-Missiles',
        qd: 'Petit Lance-Missiles',
        hj: 'Petit Lance-Torpilles',
        qk: 'Lance-Missiles Rapides Itermédiaires',
        zd: 'Lance-Missiles Intermédiaires',
        zg: 'Lance-Torpilles Intermédiaires',
        zk: 'Grands Lance-Missiles Rapides',
        xh: 'Grands Lance-Missiles',
        yl: 'Grands Lance-Torpilles',
      },
      hunhe: {
        title: 'Canons à rail',
        cigui:{
          s: 'Petits Canons à Rail à Canon Rayé',
          m: 'Canons à Rail à Canon Rayé Intermédiaire',
          l: 'Grands Canons à Rail à Canon Rayé',
          xl: 'Très Grands Canon à Rail à Canon Rayé',
        },
        jisu:{
          s: 'Petits Canons à Rail à Canon Court',
          m: 'Canons à Rail à Canon Court',
          l: 'Grands Canons à Rail à Canon Court',
          xl: 'Très Grands Canons à Rail à Canon Court',
        }
      },
      power: {
        title: 'Toureles à énergie',
        mcjg:{
          s: 'Petits Lasers à Impulsions',
          m: 'Lasers à Impulsions Intermédiaires',
          l: 'Grands Lasers à Impulsion',
          xl: 'Très Grands Lasers à Impulsion',
        },
        jsjg:{
          s: 'Petits Lasers à Rayons',
          m: 'Lasers à Rayons Intermédiaires ',
          l: 'Grands Lasers à Rayons',
          xl: 'Très Grands Lasers à Rayons',
        }
      },
      tanshe: {
        title: 'Tourelles à projectiles',
        zdjn:{
          s: 'Petits Canons Automatiques',
          m: 'Canons Automatiques Intermédiaires',
          l: 'Grands Canons Automatiques',
          xl: 'Très Grands Canons Automatiques',
        },
        ld:{
          s: 'Petits Canons de Frappe',
          m: 'Canons de Frappe Intermédiaires',
          l: 'Grands Canons de Frappe',
          xl: 'Très Grands Canons de Frappe',
        }
      },
      mining: {
        title: 'Equiopement de collecte',
        ckjg:'Laser d\'extraction',
        ltck:'Laser d\'extraction intensive',
      },
      liejie: {
        title: 'Décomposeur',
        jl:{
          s: 'Petit Décomposeur à Courants-Jets',
          m: 'Décomposeur à Courants-Jets Intermédiaire',
          l: 'Grand Décomposeurs à Courants-Jets',
        },
        zd:{
          s: 'Petit Décomposeur à Choc',
          m: 'Décomposeur à Choc Intermédiaire',
          l: 'Grand Décomposeur à Choc',
        }
      },
    },

    drone:{
      s: { 
        title: 'Petit Drone '
      },
      m: { 
        title: 'Drone Intermédiaire '
      },
      l: { 
        title: 'Grand Drone '
      },
      sen: { 
        title: 'Drone Sentienelle '
      },
    },

    slotMid:{
      ewar: {
        title: 'Guerre électronique',
        tzcr:'Générateur de stase',
        tzbz:'Stasis Grappler',
        yqrd:'Perturbateur de Warp',
        yqrp:'Brouilleur de Warp',
      },
      ln: {
        title: 'Nosferaptu à énergie',
        s: 'Petits Nosferaptus à Energie',
        m: 'Nosferaptus à Energie Intermédiaires',
        l: 'Grands Nosferaptus à Energie',
        xl: 'Très Grands Nosferaptus à Energie',
      },
      nlzh: {
        title: 'Neutralisateur d\'énergie',
        s: 'Petits Neutralisateurs d\'énergie',
        m: 'Neutralisateurs d\'énergie Intermédiaires',
        l: 'Grands Neutralisateurs d\'énergie',
        xl: 'Très Grands Neutralisateurs d\'énergie',
      },
      ychdhc: {
        title: 'Remote Shield Booster',
        s: 'Small Remote Shield Booster',
        m: 'Medium Remote Shield Booster',
        l: 'Large Remote Shield Booster',
        xl: 'Extra Large Remote Shield Booster',
      },
      yczjwx: {
        title: 'Remote Armor Repairer',
        s: 'Small Remote Armor Repairer',
        m: 'Medium Remote Armor Repairer',
        l: 'Large Remote Armor Repairer',
        xl: 'Extra Large Remote Armor Repairer',
      },
      qthdhc: {
        title: 'Booters de bouclier de groupe',
        s: 'Petits Booters de bouclier de groupe',
        m: 'Booters de bouclier de groupe Intermédiaires',
        l: 'Grands Booters de bouclier de groupe',
        xl: 'Très Grands Booters de bouclier de groupe',
      },
      qtzjwx: {
        title: 'Réparateurs de blidage de groupe',
        s: 'Petits Réparateurs de blidage de groupe',
        m: 'Réparateurs de blidage de groupe Intermédiaires',
        l: 'Grands Réparateurs de blidage de groupe',
        xl: 'Très Grands Réparateurs de blidage de groupe',
      },
      hdlc: {
        title: 'Modules de champ de bouclier',
        s: 'Petits Modules de champ de bouclier',
        m: 'Modules de champ de bouclier Intermédiaires',
        l: 'Grands Modules de champ de bouclier',
        xl: 'Très Grands Modules de champ de bouclier',
      },
      zjlj: {
        title: 'Modules d\'interface de blindage',
        s: 'Petits Modules d\'interface de blindage',
        m: 'Modules d\'interface de blindage Intermédiaires',
        l: 'Grands Modules d\'interface de blindage',
        xl: 'Très Grands Modules d\'interface de blindage',
      },
      ycdrcs: {
        title: 'Transmetteur de capaciteur à distance',
        s: 'Petits Transmetteurs de capaciteur à distance',
        m: 'Transmetteurs de capaciteur à distance Intermédiaires',
        l: 'Grands Transmetteurs de capaciteur à distance',
        xl: 'Très Grands Transmetteurs de capaciteur à distance',
      },
      qtdrcs: {
        title: 'Transmetteur de capaciteur de groupe',
        s: 'Petits Transmetteurs de capaciteur de groupe',
        m: 'Transmetteurs de capaciteur de groupe Intermédiaires',
        l: 'Grands Transmetteurs de capaciteur de groupe',
        xl: 'Très Grands Transmetteurs de capaciteur de groupe',
      },
    },

    slotLow:{



      drqdc: {
        title: 'Batterie de capaciteur',
        s: 'Petits Batteries de capaciteur',
        m: 'Batteries de capaciteur Intermédiaires',
        l: 'Grands Batteries de capaciteur',
        xl: 'Très Grands Batteries de capaciteur',
      },
      hdzq: {
        title: 'Renforcement de bouclier',
        fys:'Renforcements de bouclier réactifs',
        zsy:'Renforcements de bouclier adaptatifs',
      },
      hdkz: {
        title: 'Extenseur de bouclier',
        s: 'Petits Extenseurs de bouclier',
        m: 'Extenseurs de bouclier Intermédiaires',
        l: 'Grands Extenseurs de bouclier',
        xl: 'Très Grands Extenseurs de bouclier',
      },
      hdhc: {
        title: 'Booster de bouclier',
        s: 'Petits Boosters de bouclier',
        m: 'Boosters de bouclier Intermédiaires',
        l: 'Grands Boosters de bouclier',
        xl: 'Très Grands Boosters de bouclier',
      },
      zjzq: {
        title: 'Renforcement de blindage',
        fys:'Renforcements de blindage réactifs',
        zsy:'Renforcements de blindage adaptatifs',
      },
      zjb: {
        title: 'Plaque d\'acier renforcée',
        s100: 'Plaque d\'acier renforcée 100mm',
        s200: 'Plaque d\'acier renforcée 200mm',
        m400: 'Plaque d\'acier renforcée 400mm',
        m800: 'Plaque d\'acier renforcée 800mm',
        l1600: 'Plaque d\'acier renforcée 1600mm',

      },
      zjwx: {
        title: 'Réparateur de blidange',
        s: 'Petits Réparateurs de blidange',
        m: 'Réparateurs de blidange Intermédiaires',
        l: 'Grands Réparateurs de blidange',
        xl: 'Très Grands Réparateurs de blidange',
      },
      jgwx: {
        title: 'Réparateur de srtucture',
        s: 'Petits Réparateurs de srtucture',
        m: 'Réparateurs de srtucture Intermédiaires',
        l: 'Grands Réparateurs de srtucture',
        xl: 'Très Grands Réparateurs de srtucture',
      },
      sskz: {
        title: 'Contrôle des dégâts',
        sskz:'Contrôle des dégâts',
      },
      tjqgl: {
        title: 'Amélioration du propulseur',
        gxwd:'Stabilisateur d\'inertie',
        yqwd:'Stabilisateur de réacteur warp',
      },
      jlrs: {
        title: 'Post-combustion',
        s: 'Petits Systèmes de Post-combustion',
        m: 'Système de Post-combustion Intermédiaires',
        l: 'Grands Systèmes de Post-combustion',
        xl: 'Très Grands Systèmes de Post-combustion',
      },
      wxyqtj: {
        title: 'Propulseur de Microwarp',
        s: 'Petits Propulseurs de Microwarp',
        m: 'Propulseurs de Microwarp Intermédiaires',
        l: 'Grands Propulseurs de Microwarp',
        xl: 'Très Grands Propulseurs de Microwarp',
      },
      yszb: {
        title: 'Dispositifs de Camouflage',
        yxzz:'Dispositifs de Camouflage',
        ymxd:'Opérations Secrètes',
      },
      wqsj: {
        title: 'Amélioration de l\'armement',
        src: 'Dissipateur Thermique',
        ccwd: 'Stabililsateur de Champ Magnétique',
        hzwd: 'Gyrostabilisateur',
        hlzwd: 'Stabilisateurs à Microparticules',
        ddkz: 'Système de Contrôle Balistique',
        ddzd: 'Ordinateur de Guidage de Missiles',
        sdjsj: 'Ordinateur de Suivi',
        wrjshzx: 'Amplificateur de Dégâts de Drone',
        wrjdh: 'Ordinateur de Navigation de Drone',
        qfwsd: 'Interfaces de Poursuite Omnidirectionnelle',
      },
    },

    rig_p: {
      wqzq:{
        title: 'Module d\'Optimisation d\'Arme',
        hhwq: 'Modules d\'Optimisation de Canon à Rail',
        ljwq: 'Modules d\'Optimisation de Décomposeur',
        nlwq: 'Modules d\'Optimisation de Laser',
        tswq: 'Modules d\'Optimisation de Cannon',
        missile: 'Modules d\'Optimisation de Missiles',
        drone: 'Drone Optimisés',
      },
      fyzq:{
        title: 'Modules d\'Optimisation Défensifs',
        hd: 'Bouclier Optimisé',
        zj: 'Blindage Optimisé',
        jg: 'Modules d\'Optimisation de Structure',
      },
    },

    rig_m: {
      navigate:{
        title: 'Modules d\'Optimisation de Navigation',
      },
      gongcheng:{
        title: 'Modules d\'Optimisation d\'Ingénierie',
      },
      electoric:{
        title: 'Modules d\'Optimisation Electronique',
      },
      industry:{
        title: 'Modules d\'Optimisation Industriels',
      },
    },


    projectConfigData:{
      account: 'Compte',
      server: 'Serveur',
      domain: 'Domaine',
    },
    projectFile:{
      locale: 'Locale',
      thrd: '3rd',
    },
  },

  material:{
    m_st: 'Tritanium',
    m_lj: 'Pyérite',
    m_ly: 'Mexallon',
    m_tws: 'Isogène',
    m_cxx: 'Nocxium',
    m_sy: 'Zydrine',
    m_csk: 'Mégacyte',
    m_me: 'Morphite',

    p_gz: 'Alliage Brillant',
    p_gc: 'Composés Lustre',
    p_sg: 'Alliage Etincellant',
    p_ns: 'Alliage Condensé',
    p_jm: 'Alliage Précieux',
    p_zs: 'Composé Disparate',
    p_xw: 'Composé Velours',
    p_tg: 'Composé Clair',
    p_dy: 'Composé Opulent',
    p_gh: 'Composé Brillant',
    p_jt: 'Composé Crystal',
    p_ah: 'Composé Sombre',
    p_hxqt: 'Gaz Réactif',
    p_xyqt: 'Gaz Noble',
    p_jc: 'M&étaux de Base',
    p_zhong: 'Métaux Lourds',
    p_gjs: 'Métaux Nobles',
    p_fy: 'Métaux Réactifs',
    p_yd: 'Métaux Toxiques',
    p_gyxw: 'Fibres Industrielles',
    p_cqlsl: 'Plastiques Supertensibles',
    p_jfxa: 'Polyaramides',
    p_lqj: 'Réfrigérant',
    p_nsy: 'Condensés',
    p_jzmk: 'Blocs de Construction',
    p_nmt: 'Nanites',
    p_gjgzc: 'Verre de Silice',
    p_lqdy: 'Unités Smartfabs',
    p_zhongshui: 'Eau Lourde',
    p_xfdlz: 'Plasma Suspendu',
    p_yhcy: 'Ozone Liquide',
    p_lzry: 'Solutions d\'Ions',
    p_twsrl: 'Isotopes d\'Oxygène',
    p_dlztt: 'Plasmoïdes',


    s_jssp : 'Fragments de Métal',
    s_qhjssp : 'Fragments de Métal Renforcé',
    s_wdl : 'Microcircuit Carbonisé',
    s_jkdl : 'Circuit d\'Interface Grillé',
    s_nydl : 'Circuit d\'Alimentation Disjoncté',
    s_ljdl : 'Cicuit Logique Brûlé',
    s_cfjg : 'Déclancheur Eclaté',
    s_jf : 'Système d\'Armement pour les Combats Rapprochés Endommagé',
    s_yg : 'Processeur de Télémétrie',
    s_sjwl : 'Réseau Neuronal Artificiel Endommagé',
    s_llzlt : 'Fluide de Lorentz contaminé',
    s_jhdt : 'Polymère Conducteur',
    s_nmjht : 'Composé de Nanite Contaminé',
    s_dlb : 'Pompe à Courant Défecteuse',
    s_jccfjg : 'Unité de Déclanchement Intégrée',
    s_gzzz : 'Dispositif de Modification de Coque Intégré',
    s_mkkzt : 'Contrôle de Module Intégré',
    s_rssl : 'Thermoplastique Intégré',
    s_mnwl : 'Réseau de Simulation Intégré',
    s_djhjt : 'Monocrystal Intégré',
    s_nyfsq : 'Générateur de Courant',
    s_kzzs : 'Centre de Contrôle des Capaciteur',
  },

  ore:{
    o_fjs:'Veldspar',
    o_zsy:'Scordite',
    o_gjy:'Pyroxérès',
    o_xcy:'Plagioclase',
    o_obes:'Omber',
    o_sps:'Kernite',
    o_jsbk:'Jaspet',
    o_xmft:'Hémorphite',
    o_twyk:'Hedbergite',
    o_hy:'Spodumain',
    o_hzs:'Ocre Sombre',
    o_pmy:'Gneiss',
    o_kljs:'Crokite',
    o_sdts:'Bistot',
    o_akly:'Arkonor',
    o_jfdy:'Mercoxit',
  },

  debris:{
    t_1 : 'Débris de vaisseau de la Mordu\'s Legion',
    t_2 : 'Débris de vaisseau des Serpentis',
    t_3 : 'Débris de vaisseau des Angel',
    t_4 : 'Débris de vaisseau Sansha',
    t_5 : 'Débris de vaisseau Guristas',
    t_6 : 'Débris de vaisseau des SOE',
    t_7 : 'Débris de vaisseau Blood Raider',
    t_11  : 'Débris de vaisseau YanJung',

    t_21  : 'Petite coque ORE endommagée',
    t_22  : 'Coque ORE moyenne endommagée',
    t_23  : 'Grande coque ORE endommagée',

    t_31  : 'Petit coque InterBus endommagée',
    t_32  : 'Coque InterBus moyenne endommagée',
    t_33  : 'Grande coque InterBus endommagée',


    t_104 : 'Débris de vaisseau Amarr niv.4',
    t_105 : 'Débris de vaisseau Amarr niv.5',
    t_106 : 'Débris de vaisseau Amarr niv.6',
    t_107 : 'Débris de vaisseau Amarr niv.7',
    t_108 : 'Débris de vaisseau Amarr niv.8',
    t_109 : 'Débris de vaisseau Amarr niv.9',
    t_110 : 'Débris de vaisseau Amarr niv.10',

    t_204 : 'Débris de vaisseau Caldari niv.4',
    t_205 : 'Débris de vaisseau Caldari niv.5',
    t_206 : 'Débris de vaisseau Caldari niv.6',
    t_207 : 'Débris de vaisseau Caldari niv.7',
    t_208 : 'Débris de vaisseau Caldari niv.8',
    t_209 : 'Débris de vaisseau Caldari niv.9',
    t_210 : 'Débris de vaisseau Caldari niv.10',

    t_304 : 'Débris de vaisseau Gallente niv.4',
    t_305 : 'Débris de vaisseau Gallente niv.5',
    t_306 : 'Débris de vaisseau Gallente niv.6',
    t_307 : 'Débris de vaisseau Gallente niv.7',
    t_308 : 'Débris de vaisseau Gallente niv.8',
    t_309 : 'Débris de vaisseau Gallente niv.9',
    t_310 : 'Débris de vaisseau Gallente niv.10',

    t_404 : 'Débris de vaisseau Minmatar niv.4',
    t_405 : 'Débris de vaisseau Minmatar niv.5',
    t_406 : 'Débris de vaisseau Minmatar niv.6',
    t_407 : 'Débris de vaisseau Minmatar niv.7',
    t_408 : 'Débris de vaisseau Minmatar niv.8',
    t_409 : 'Débris de vaisseau Minmatar niv.9',
    t_410 : 'Débris de vaisseau Minmatar niv.10',
  },

  datacore:{
    t_1 : 'Banque de données - Ingénierie des vaisseaux Amarr',
    t_2 : 'Banque de données - Ingénierie des vaisseaux Caldari',
    t_3 : 'Banque de données - Ingénierie des vaisseaux Gallente',
    t_4 : 'Banque de données - Ingénierie des vaisseaux Minmatar',

    t_11  : 'Banque de données - Physique du laser',
    t_12  : 'Banque de données - Physique Electromagnétique',
    t_13  : 'Banque de données - Physique des hautes énergies',
    t_14  : 'Banque de données - Fuséologie',
    t_15  : 'Banque de données - Génie Mécanique',
  },

  race:{
    c: 'Caldari',
    g: 'Gallente',
    a: 'Amarr',
    m: 'Minmatar',
    o: 'Autre',
    r_jdl: 'Caldari',
    r_glt: 'Gallente',
    r_am: 'Amarr',
    r_mmt: 'Minmatar',
    r_other: 'Autre',
  },

  skill: {
    suiTie: 'Traitement de la feraille',
    suiTieJJ: 'Traitement de la feraille avancée',
    suiTieZZ: 'Traitement de la feraille expert',
  },

  topicType:{
    normal : 'Sujet Normal',
    siteNews : 'Actualités iEVE',
    officialNews : 'Actualités Officielles',
    thirdNews : 'Information Tiers',
    legion : 'Actualités Corporations',
    personal : 'Actualités Personnelles',
    cheater : 'Attention aux Menteurs',
    tradeBuy : 'Ordre d\'achat',
    tradeSell : 'Ordre de vente',
    tradeBoth : 'Ordre mélangé',
    1 : 'Sujet Normal',
    11 : 'Actualités iEVE',
    13 : 'Actualités Officielles',
    15 : 'Informations Tiers',
    16 : 'Attention aux Menteurs',
    21 : 'Actualités Corporations',
    31 : 'Actualités Personnelles',
    61 : 'Ordre d\'Achat',
    62 : 'Ordre de Vente',
    69 : 'Ordre Mélangés',
  },

  shipBlueprintType:{
    ship: 'Vaisseau',
    equipment: 'Equipement',
    drone: 'Drone',
    building: 'Construction',
  },


  item:{
    title:{
      e_id: 'ID',
      e_title: 'Titre',
      e_isk_market: 'Prix',
      r_id: 'ID',
      r_title: 'Titre',
      r_isk_market: 'Prix',


      e_volumn: 'Volume',
      e_powerCost: 'Puissance du Réseau d\'alimentation',
      e_gjCost: 'Coût d\'activation',
      e_damageRate: 'Bonus de dégâts',
      e_runTime: 'Délai d\'activation',
      e_reloadTime: 'Délai de réactivation',

      e_singleDamage: 'Dégât unique',
      e_v_1_mid_2: 'Transfert d\'énergie',
      e_v_1_mid_3: 'Neutralisation',
      e_v_1_low_13: 'Transfert d\'énergie',
      e_v_1_mid_23: 'Transfert d\'énergie',
      e_v_1_mid_31: 'Taux de réduction aux dégâts',
      e_v_1_mid_32: 'Taux de dégâts',

      e_shield: 'Bouclier ',
      e_shield_r: 'Quantité de boost de bouclier',
      e_shield_add: 'Augmentation du bouclier',
      e_armor: 'Blindage ',
      e_armor_r: 'Réparation de blindage',
      e_armor_add: 'Augmentation de blindage',
      e_structure: 'Structure ',
      e_structure_r: 'Réparation de structure',
      e_structure_add: 'Augmentation de structure',

      e_singleRadius: 'Rayon de signature',
      e_scanResolution: 'Résolution du scan',


      e_range: 'Portée Optimale',
      e_range_high_1: 'Portée des missiles',

      e_lostRange: 'Perte de précision',
      e_followSpeed: 'Vitesse de poursuite',
      e_push: 'Modificateur de poussée',
      
      e_ch_flySpeed: 'Bonus de vitesse de vol',
      e_ch_flySpeed_ac: 'Bonus de vitesse de vol actif',  
      e_ch_flyTime: 'Bonus de temps de vol',
      e_ch_flyTime_ac: 'Bonus de temps de vol actif',
      e_ch_inertia: 'Modificateur d\'inertie',
      e_ch_inertia_ac: 'Modificateur d\'inertie actif',
      e_ch_wrapDisrup: 'Force de brouilleur de warp',
      e_ch_wrapDisrup_ac: 'Force de brouilleur de warp actif',
      e_ch_scanResolution: 'Bonus de résolution de scan',
      e_ch_scanResolution_ac: 'Bonus de résolution de scan actif',
      e_ch_signalRadius: 'Modificateur du rayon de signature',
      e_ch_signalRadius_ac: 'Modificateur du rayon de signature actif',
      e_ch_kg: 'Augmentation de la masse',
      e_ch_kg_ac: 'Augmentation de la masse active',
      e_ch_damageRate: 'Modificateur de dégât',
      e_ch_damageRate_ac: 'Modificateur de dégât actif',
      e_ch_runTime: 'Modificateur du délai d\'activation',
      e_ch_runTime_ac: 'Modificateur du délai d\'activation actif',
      e_ch_lostRange: 'Modificateur de perte de précision',
      e_ch_lostRange_ac: 'Modificateur de perte de précision actif',
      e_ch_range: 'Modificateur de la portée optimale',
      e_ch_range_ac: 'Modificateur de la portée otimale actif',
      e_ch_followSpeed: 'Modificateur de la vitesse de poursuite',
      e_ch_followSpeed_ac: 'Modificateur de la vitesse de poursuite actif',
      e_ch_exSpeed: 'Modificateur de la vitesse d\'explosion',
      e_ch_exSpeed_ac: 'Modificateur de la vitesse d\'explosion actif',
      e_ch_exRadius: 'Modifcateur du rayon d\'explosion',
      e_ch_exRadius_ac: 'Modificateur du rayon d\'explosion actif',


      e_exSpeed: 'Vitesse d\'explosion',
      e_exRadius: 'Rayon d\'explosion',
      e_fuel: 'Carburant',



      e_v_1_low_1: 'Bonus de capaciteur',
      e_v_2_low_1: 'Bonus temporaire de capaciteur',
      e_v_3_low_1: 'Taux de bonus temporaire de capaciteur',
      e_v_4_low_1: 'Bonus de résistance à la guerre de capaciteur',


      e_v_1_low_12: 'Bonus temporaire de bouclier',
      e_v_2_low_12: 'Taux de bonus temporaire de bouclier',
      e_v_1_low_22: 'Bonus temporaire de blindage',
      e_v_2_low_22: 'Taux de bonus temporaire de blindage',

      e_v_1_low_41: 'Résistance aux dégâts actifs',


      e_v_1_low_51_2401: 'Taux du modificateur d\'inertie',
      e_v_1_low_51_2402: 'Bonus de force de brouillage warp',

      e_v_1_low_53: 'Multiplicateur de charge du capaciteur',

      e_v_1_low_61: 'Temps de recalibration du détecteur',

      e_v_1_low_71: 'Modificateur des dégâts actifs',
      e_v_2_low_71: 'Modificateur du délai d\'activation actif',

      e_v_1_low_71_3401: 'Gain d\'effet actif',
      e_v_1_low_71_3302: 'Gain d\'effet actif',





      r_v_1_rig_p_1_1_1: 'Bonus de taux de dégât',
      r_v_1_rig_p_1_1_2: 'Modificateur de la perte de précision',
      r_v_1_rig_p_1_1_3: 'Modificateur du coût d\'activation',
      r_v_1_rig_p_1_1_4: 'Modificateur du délai d\'activation',
      r_v_1_rig_p_1_1_5: 'Modificateur en besoins en réseau d\'alimentation',

      r_v_1_rig_p_1_11_11: 'Bonus de taux de dégât',
      r_v_1_rig_p_1_11_12: 'Modificateur de la perte de précision',
      r_v_1_rig_p_1_11_13: 'Modificateur du coût d\'activation',
      r_v_1_rig_p_1_11_14: 'Modificateur du délai d\'activation',
      r_v_1_rig_p_1_11_15: 'Modificateur en besoins en réseau d\'alimentation',

      r_v_1_rig_p_1_21_21: 'Bonus de taux de dégât',
      r_v_1_rig_p_1_21_22: 'Modificateur de la perte de précision',
      r_v_1_rig_p_1_21_23: 'Modificateur du coût d\'activation',
      r_v_1_rig_p_1_21_24: 'Modificateur du délai d\'activation',
      r_v_1_rig_p_1_21_25: 'Modificateur en besoins en réseau d\'alimentation',

      r_v_1_rig_p_1_41_41: 'Bonus de taux de dégât',
      r_v_1_rig_p_1_41_42: 'Modificateur de la perte de précision',
      r_v_1_rig_p_1_41_43: 'Modificateur du délai d\'activation',
      r_v_1_rig_p_1_41_44: 'Modificateur en besoins en réseau d\'alimentation',

      r_v_1_rig_p_1_61_61: 'Bonus de la vitesse d\'explosion',
      r_v_1_rig_p_1_61_62: 'Bonus de taux de dégât',
      r_v_1_rig_p_1_61_63: 'Modificateur du rayon d\'explosion',
      r_v_1_rig_p_1_61_64: 'Bonus de temps de vol',
      r_v_1_rig_p_1_61_65: 'Taux de bonus de vitesse de vol',
      r_v_1_rig_p_1_61_66: 'Modificateur du délai d\'activation',

      r_v_1_rig_p_1_81_81: 'Bonus de taux de dégât',
      r_v_1_rig_p_1_81_82: 'Modificateur de la perte de précision',
      r_v_1_rig_p_1_81_83: 'Modificateur du délai d\'activation',
      r_v_1_rig_p_1_81_84: 'Bonus de la portée de contrôle de drone',

      r_v_1_rig_p_2_101_101: 'Modificateur du délai d\'activation',
      r_v_1_rig_p_2_101_102: 'Bonus de quantité de boost de bouclier',
      r_v_1_rig_p_2_101_103: 'Modificateur du coût d\'activation',
      r_v_1_rig_p_2_101_104: 'Bonus de bouclier',
      r_v_1_rig_p_2_101_105: 'Bonus de résistance du bouclier aux dégâts EM',
      r_v_1_rig_p_2_101_106: 'Bonus de résistance du bouclier aux dégâts thermiques',
      r_v_1_rig_p_2_101_107: 'Bonus de résistance du bouclier aux dégâts cinétiques',
      r_v_1_rig_p_2_101_108: 'Bonus de résistance du bouclier aux dégâts explosifs',

      r_v_1_rig_p_2_121_121: 'Modificateur du coût d\'activation',
      r_v_1_rig_p_2_121_122: 'Bonus de réparation de blindage',
      r_v_1_rig_p_2_121_123: 'Modificateur du coût d\'activation',
      r_v_1_rig_p_2_121_124: 'Bonus de blindage',
      r_v_1_rig_p_2_121_125: 'Bonus de résistance du blindage aux dégâts EM',
      r_v_1_rig_p_2_121_126: 'Bonus de résistance du blindage aux dégâts thermiques',
      r_v_1_rig_p_2_121_127: 'Bonus de résistance du blindage aux dégâts cinétiques',
      r_v_1_rig_p_2_121_128: 'Bonus de résistance du blindage aux dégâts explosifs',

      r_v_1_rig_p_2_141_141: 'Bonus de structure',
      r_v_1_rig_p_2_141_142: 'Bonus de résistance de la structure aux dégâts EM',
      r_v_1_rig_p_2_141_143: 'Bonus de résistance de la structure aux dégâts thermiques',
      r_v_1_rig_p_2_141_144: 'Bonus de résistance de la structure aux dégâts cinétiques',
      r_v_1_rig_p_2_141_145: 'Bonus de résistance de la structure aux dégâts explosifs',

      r_v_1_rig_m_1_1001_1001: 'Modificateur du coût d\'activation',
      r_v_1_rig_m_1_1001_1002: 'Taux de bonus de vitesse de vol',
      r_v_1_rig_m_1_1001_1003: 'Modificateur d\'inertie',
      r_v_1_rig_m_1_1001_1004: 'Bonus à la capacité de soute de chargement',
      r_v_1_rig_m_1_1001_1005: 'Bonus de masse',
      r_v_2_rig_m_1_1001_1005: 'Modificateur d\'inertie',
      r_v_3_rig_m_1_1001_1005: 'Modificateur de vitesse de vol',
      r_v_1_rig_m_1_1001_1006: 'Force de brouillage de warp',
      r_v_1_rig_m_1_1001_1007: 'Bonus de vitesse de Warp',

      r_v_1_rig_m_2_1101_1101: 'Bonus de capacité',
      r_v_1_rig_m_2_1101_1102: 'Modificateur de recharge de capacité',
      r_v_1_rig_m_2_1101_1103: 'Bonus au réseau d\'alimentation',
      r_v_1_rig_m_2_1101_1104: 'Bonus de résolution du scan',

      r_v_1_rig_m_3_1201_1201: 'Bonus d\'intensité du scan',
      r_v_1_rig_m_3_1201_1202: 'Bonus d\'intensité du scan',

      r_v_1_rig_m_4_1301_1301: 'Bonus de minerai extrait',
      r_v_1_rig_m_4_1301_1302: 'Bonus du délai d\'activation',
      r_v_1_rig_m_4_1301_1303: 'Modificateur de la portée optimale',
      r_v_1_rig_m_4_1301_1304: 'Bonus du coût d\'activation',


      dps: 'DPS',




    }
  },



  footerbar:{
    newBug: 'Rapport de BUGS',
    contact: 'Contactez Nous',
    msg: 'Si tu t\'sens bien, dit le à tes amis s\'te plaît, si tu t\'sens mal, <a href="https://github.com/016/lm180_iEVE_Echoes/issues/new" target="_blank">dit le nous s\'te plaît</a> thx.',
  },
  pub: {
    topbar:{
      index: 'Index',
      about: 'A propos',
      price: 'Prix',
      devPlan: 'Plan Dev',
      dashboard: 'Acceuil',
      project: 'Projet',
      signout: 'Déconnexion',
      login: 'Se connecter',
      signup: 'S\'inscrire',
    },
    index:{
      title: 'Bienvenue',
      subTitle: 'Utilsez iMenu pour gérer tous vos projets en ligne',

    },
    about:{
      title: 'A propos',
      subTitle: 'Toutes les infos pour iMenu',

    },
    price:{
      title: 'Prix',
      subTitle: 'Argent que tu as besoin pour payer ton plan',

    },
    devPlan:{
      title: 'Plan Dev',
      subTitle: '202008 Plan de collecte de données',
      body:'<ul><li class="text-green">[Terminé] Données de matériau de recherche de plan de vaisseau</li><li class="text-green">[Terminé] Données du raffinage des minerais</li><li class= "text-green">[Terminé] Données du raffinage des débris de vaisseau</li><li class="text-green">[Terminé] Données de matériau pour la construction de vaisseau</li><li class="text-green">[Terminé] Données de matériau pour la construction des modules d\'optimisation</li><li class="text-green">[Terminé] Données de sortie des resources planétaires (Ces données sont très volumineuses et demandent plus de temps)</li><li class="text-green ">[Terminé] Informations des attributs de vaisseau pour la configuration des vaisseaux</li><li class="text-green">[Terminé] Données des attributs des équpements utilisées pour la configuration des vaisseaux</li></ul>',
    },

    login:{
      title: 'Connecte toi pour démarrer ta session',
      signupSuccess: '<h4><i class="icon fa fa-check"></i> Inscription Réussie</h4> Tu peux te connecter avec ton nouveau compte.',
      resetPassSuccess: '<h4><i class="icon fa fa-check"></i> Changement de mot de passe Réussie</h4> Tu peux te connecter avec ton nouveau mot de passe.',
      loginExpired: '<h4><i class="icon fa fa-check"></i> Info de connexion Expirée</h4> Reconnecte toi, s\'il te plaît.',
      username: 'Pseudo',
      pass: 'Mot de passe',
      email: 'Email',
      phone: 'Téléphone',
      rememberMe: 'Se souvenir de moi',

    },

    signup:{
      title: 'Register a new membership',
      fullname: 'Nom complet',
      username: 'Pseudo',
      pass: 'Mot de passe',
      passRepeat: 'Confirmation mot de passe',
      email: 'Email',
      inviteCode: 'Code d\'invitation',
      phone: 'Téléphone',
      agreeTerm: ' J\'accepte les <a href="javascript:;">conditions</a>',

    },

    forgotPass:{
      title: 'Changer ton mot de passe',
      newPass: 'Mot de passe',
      email: 'Email',
      phone: 'Téléphone',

    },


  },
  account:{
    id: '',
    title: 'Nom',
    phone: 'Téléphone',
    email: 'Email',
    money: 'Solde du compte',
    username: 'Pseudo',
    desc: 'Desc',
    sexy: 'Sexe',
    pass: 'Mot de passe',
    passOld: 'Ancien mot de pass',
    passNew: 'Nouveau Mot de passe',
    passNewRepeat: 'Confirme nouveau mot de passe',

  },
  pri: {
    topbar:{
      dashboard: 'Accueil',
      materialPrice: 'Prix Minéral',
      volunteer: 'Canal des bénévoles',
      donate: 'Don',
      monument: 'Monument',
      market: 'Marché iEVE',
      marketOnline: 'Marché en ligne',
      news: 'Actualités iEVE',
    },
    sidebar:{
      quickTable: 'Tableau Rapide',
      quickTablePaymentPlan: 'Tableau Rapide Plan Paiement',
      quickTableOre: 'Tableau Rapide Minerais',
      quickTableVesselDebris: 'Tableau Rapide Débris Vaisseaux',
      commonElement: 'Elément Basique',
      calculator: 'Calculatrice Commune',
      advCal: 'Calculatrice Adv.',
      skillPoint: 'Calculatrice Point Compétences',
      planetary: 'Recherche Ressources Planétaires',
      shipBlueprintResearch: 'Recherche Plan Vaisseaux',
      ship: 'Calculatrice Construction Vaisseaux',
      equipment: 'Calculatrice Construction Equipement',
      drone: 'Calculatrice Construction Drone',
      building: 'Calculatrice Construction Structures',
      ore: 'Calculatrice Minerais',
      oreMix: 'Calculatrice Multi Minerais',
      vesselDebris: 'Calculatrice Debris Vaisseaux',
      slavagedMaterials: 'Recherche Matériaux Récupérés',
      rig: 'Calculatrice Construction Module Optimisation',
      shipConfig: 'Config Vaisseaux',

      market: 'Marché',

      siteElement: 'Elément du site',

      userCenter: 'Centre Utilisateur',
      userInfo: 'Info Utilisateur',
      changePass: 'Changer MDP',
      bindPhone: 'Lier Téléphone',

      mShipConfig: 'Mes Config Vaisseaux',
      myShipConfig: 'Mes Config Vaisseaux',
      myShipConfigCategory: 'Catégorie Config Vaisseau',
      myShipConfigCollection: 'Config Vaisseaux Favoris',
      myShipConfigLike: 'Config Vaisseaux Révisée',

      myTopic: 'Mon Topic',
    },
    dashboard:{
      title: 'Accueil',
      subTitle: 'Toutes les données pour cette app.',

      welcome: {
        title: 'Bienvenue sur iEve la Tool Box en ligne de Eve Echoes',
        subTitle: 'Vous pouvez trouver des outils de Eve Echoes en ligne ici.',        
        body: '<p class="text ">Après un mois de travail, les données de base ont été ajoutées, et plus de fonctions seront rajoutées dans le future. Je vous souhaite le meilleur. Vous êtes les bienvenues pour partager vos suggestions. </p>',
      },

    },

    userCenter:{
      title: 'Centre Utilisateur',
      subTitle: 'Gérez Données Utilisteur Ici.',   
      basicTitle: 'Centre Utilisateur',
      basicSubTitle: 'Gérez Données Utilisteur Ici.',        
    },
    changePass:{
      title: 'Changer MDP',
      subTitle: 'Change Ton MDP Ici.',           
    },
    bindPhone:{
      title: 'Lier Téléphone',
      subTitle: 'Lier Votre Téléphone Ici.',           
    },

    materialView:{
      title: 'Prix Matériaux Actuel',
      subTitle: 'Voici la liste des prix de tous les matériaux de base, ce prix sera utilisé dans chaque calculatrice',
      usageTitle: 'Special Info',
      usageBody: '<ul><li>Le format de prix comme 999 / 20000, le 999 est le prix du marché (au cours de la semaine dernière), le 20000 est le prix du système.</li><li>Le prix du marché sera un petit peu plus élevé, afin que vous puissiez facilement acheter avec ce prix du marché</li><li>Si le prix n\'est pas correcte pour vous, changez-le simplement dans la Calculatrice</li><li> C\'est un projet personnel toutes les données sont entrées manuellement, donc si vous trouvez quelque chose de faux, signalez juste le bug. Le lien du rapport de bug est dans le pied de page, thx.</li></ul>',

      typeTitle:{
        t0: 'Minerai',
        t1: 'Minéral',
        t2: 'Planétaire',
        t3: 'Matériau Récupéré',
        t11: 'Débris',
        t21: 'Banque de données',
      },

      table:{
        title:{
          m_title: 'Titre',
          m_isk_market: 'Prix du marché',
          m_isk_system: 'Prix du système',
          m_updateDate: 'Date de mise à jour',
        }
      },
    },

    shipSelector:{
      config: {
        selectShip: 'Sélectionnez Vaisseau',
        filteredShipCategory: 'Sélectionnez Categorie',
        filteredRaceType: 'Séléctionnez Race',
      },
    },

    shipView:{
      title: 'Calculatrice Construction',
      subTitle: 'Vérifiez tous les éléments de contruction ici. Découvrez combien il en manque.',
      usageTitle: 'Usage',
      usageBody: '<ul><li>Nous prennons en charge 4 types maintenant, essayez de les changer!</li><li>Pour votre information, vous ne pouvez que fabriquer les objets avec le niveau Tech requis, alors vérifiez d\'abord votre niveau Tech!!!</li><li>Sélectionnez un objet et définissez correctement le "Nombre Construction", "Efficacité Matérielle" et "Efficacité Temps". La section "Résultat" vous montrera les matériaux requis.</li><li>Tapez combien de matériaux vous avez dans "En Possession" et vous obtiendrez un nombre de matériaux "Encore Besoin".</li><li>Nous utilisons le prix moyen de la semaine dernière pour les calculs. Le prix total pour "Encore Besoin" ne comprend que les articles encore nécessaires, si vous n\'avez pas besoin de cet article, le prixw sera de 0 dans les calculs.</li><li>"Calculatrice Minerais" est un moyen rapide de déterminer combien de minerais peuvent être raffinés parmi vos matériaux encore nécessaires, essayez de définir correctement votre "Rendement Minerai"</li><li>C\'est un projet personnel toutes les données sont entrées manuellement, donc si vous trouvez quelque chose de faux, signalez le bug. Le lien de rapport de bug se trouve dans le pied de page, thx.</li><li><a href="https://www.bilibili.com/video/av80449531/" target="_blank">Vidéo d'opération en chinois</a></li></ul>',
      config: {
        title: 'Config Paramètres',
        selectItem0: 'Objets',
        selectItem1: 'Vaisseau',
        selectItem11: 'Equipement',
        selectItem51: 'Drone',
        selectItem91: 'Construction',
        itemCategoryFilter: 'Categorie',

        buildCnt: 'Nombre Construction',
        buildCostRate: 'Efficacité Matérielle',
        buildTimeRate: 'Efficacité Temps',

        data:{
          i_isk_market: "Prix Marché",
          i_isk_system: "Prix Système",
          sb_isk_market: "Prix Marché Plan",
          sb_isk_system: "Prix Système Plan",
          sb_isk_build: "Coût Construction",
          sb_techLvl: "Niv Tech",
          sb_time_build: "Durée Production",
          mins: "mins",
          sec: "sec",
        },
      },
      result:{
        title: 'Résultat',


        table:{
          title:{
            item: 'Matériaux',
            inhand: 'En Possession(Supporte+-*/)',
            buildCost: 'Coût Construction',
            stillNeed: 'Obligatoire',
            percent: 'Taux en possession',
            sum: 'Total',
          },
          option:{
            showItemPrice: 'Montrer Prix Détaillé',
            showSumPrice: 'Montrer Prix Total',
          }
        }
      },
      oreConfig: {
        title: 'Config Calculatrice Minerais',
        title_rate: 'Définir Rendement Minerais',
        title_rate_small: 'Seulement besoin de définir Efficacité Minerais, les autres minerais utilisent le même rendement',
        title_oreOpen: 'Contraintes Minerais',
        title_oreOpen_small: 'Calcule uniquement les minerais lorsque défini sur "Oui" ',
      },
      oreResult:{
        title: 'Résultat Minerais',
        title_small: 'Pour "Suggérer Minerai", essayez: Clic simple et double clic',



        table:{
          title:{
            item: 'Nom Minerais',
            stillNeed: 'Encore Besoin',
            oreSuggest: 'Suggérer Minerais',
          },
        }
      }

    },

    shipBRView:{
      title: 'Recherche Plan Vaisseau Ship Blueprint Reserach',
      subTitle: 'Calculer les matériaux et le taux de réussite pour la recherche de plan',

      usageTitle: 'Usage',
      usageBody: '<ul><li>Choisissez un plan pour voir les matériaux requis et le taux de réussite</li></ul>',
      config: {
        title: 'Config Paramètres',

        buildCnt: 'Nombre Construction',
        buildSuccessRate: 'Taux de Réussite',
        buildTimeRate: 'Efficacité Temps',

        data:{
          r_isk_market: "Prix Marché",
          r_isk_system: "Prix Système",

          sb_isk_market: "Prix Marché Plan",
          sb_isk_system: "Prix Marché Système",
          s_isk_market: "Prix Marché Vaisseau",
          s_isk_system: "Prix Système Vaisseau",

          sbr_time_build: "Temps Production",
          sbr_isk_build: "Coût ISK",
          sbr_successRate: "Taux de Succès",
        },
      },
      result:{
        title: 'Résultat',

        table:{
          title:{
            item: 'Matériaux',
            inhand: 'Nombre En Possession',
            buildResult: 'Nécessaire Construction',
            need: 'Encore Besoin',
            percent: 'Taux En Possession',
            sum: 'Total',
          },
          option:{
            showItemPrice: 'Montrer Prix Détaillé',
            showSumPrice: 'Montrer Prix Total',
          }
        }
      }
    },

    planetaryView:{
      title: 'Recherche Ressource Planétaire',
      subTitle: 'Trouvez rapidement la position de la ressource planétaire et calculez le rendement (et le prix) de votre compte',
      usageTitle: 'Usage',
      usageBody: '<ul><li>Toutes les données sont ajoutées, amusez-vous!</li><li>Sélectionnez "Région"/"Constellation"/"Système solaire"(un ou tous) et "Ressource Planétaire", cliquez "Démarrer Recherche" renverra des informations relatives aux ressources planétaires</li><li>Le résultat pourrait être vide, il faut donc changer la condition si le résultat est vide.</li><li>"Tableau Minier" peut aider au calcul de sortie d\'une heure</li><li>"||| / 25.47 / 25.47" dans Résultat signifie «Évaluation des ressources / Volume minier unitaire / Volume minier total»</li><li>Nous utilisons le prix de la semaine dernière pour calculer le prix</li></ul>',
      config: {
        title: 'Config Paramèrtes',
        selectRegion: 'Région',
        selectConstellation: 'Constellation',
        selectSolarSystem: 'Système Solaire',
        selectPType: 'Ressource Planétaire ',
        startBtn: 'Démarrer Recherche',

        buildCnt: 'Tableau Minier',
        buildTime: 'Durée',
        showAllResult: 'Tout Résultat',

        data:{
          o_isk_market: "Prix Marché",
          o_isk_system: "Prix Système",
          o_volumn: "Volume Minerais",
        },
      },
      result:{
        title: 'Résultat',
        emptyResultFound: 'Ressource planétaire inutile trouvée, la condition actuelle a trouvé un résultat nul, veuillez changer la condition et réessayer',
        dataContributor: 'Les données de {regionTitle} sont fournies par {contributorTitle}, thx',

        planetLvl:{
          0: '',
          null: '',
          1: '| ',
          2: '|| ',
          3: '||| ',
          4: '|||| ',
        },


        table:{
          title:{
            item: 'Ressource Planétaire',
            sum: 'Prix Total',
          },
          option:{
            showItemPrice: 'Montrer Prix Détaillé',
            showSumPrice: 'Montrer Prix Total',
          }
        }
      }

    },

    oreView:{
      title: 'Calculatrice Minerais',
      subTitle: 'Calculez rapidement le nombre de minéraux que vous obtiendrez de votre minerai',
      usageTitle: 'Usage',
      usageBody: '<ul><li>Sélectionnez un minerai dans "Config Paramètres", et définissez "Montant Minerais" et "Efficacité Matérielle". Le "Résultat" affichera le nombre de minéraux en sortie.</li><li>"Ceinture Astéroïde" est la plage où se trouve le minerai et "Niveau Sécurité" est la plage où se trouve la ceinture d\'astéroïdes.</li><li>"Volume Vaisseau" est un paramètre spécial utilisé pour calculer la quantité de minerai qu\'un vaisseau peut contenir et n\'affecte pas les calculs s\'il est laissé vide.</li><li>L\'unité de raffinage du minerai est de 100, ex. 199 ne fera que raffiner 100, laissant 99 restants.</li><li>En raison des points décimaux, vous pouvez obtenir 1-2 écarts calculés dans le résultat. Par exemple si le résultat est 135, mais dans le jeu, c\'est 134</li><li>C\'est un projet personnel toutes les données sont ajoutées manuellement, donc si vous trouver quelque chose de faux, signalez le bug. Le lien du rapport de bug se trouve dans le pied de page, thx.</li><li><a href="https://www.bilibili.com/video/av80457729/" target="_blank">Vidéo d'opération en chinois</a></li></ul>',
      config: {
        title: 'Config Paramètres',
        selectOre: 'Sélectionnez Minerais ',
        buildCnt: 'Montant Minerai',
        buildVolume: 'Volume Vaisseau',
        buildCostRate: 'Efficacité Matérielle',

        data:{
          o_isk_market: "Prix Marché",
          o_isk_system: "Prix Systèm",
          o_volumn: "Volume Minerais",
          o_asteroidLv: 'Niv Astéroïde',
          o_safeLv: 'Niv Sécurité',
        },
      },
      result:{
        title: 'Résultat',


        table:{
          title:{
            item: 'Minéral',
            target: 'Nombre Cible',
            buildResult: 'Collecté',
            left: 'Encore Besoin',
            percent: 'Taux Encore Besoin',
            sum: 'Prix Total',
          },
          option:{
            showItemPrice: 'Montrer Prix Détaillé',
            showSumPrice: 'Montrer Prix Total',
          }
        }
      }

    },
    oreMixView:{
      title: 'Calculatrice Multi Minerais',
      subTitle: 'La nouvelle calculatrice pour multi minerai, essayez-le.',
      usageTitle: 'Usage',
      usageBody: '<ul><li> Cliquez "+ Nouveau Minerai" pour ajouter un nouveau minerai et la quantité</li><li>C\'est utilisé pour plus qu\'un seul type de minerai, utile pour les vaisseaux tel que le Retriever</li><li>L\'unité de raffinage des minerais est de 100, ex. 199 ne fera que raffiner 100, laissant 99 restants.</li><li>En raison des points décimaux, vous pouvez obtenir 1-2 écarts calculés dans le résultat. Par exemple si le résultat est 135, mais dans le jeu, c\'est 134</li><li>C\'est un projet personnel toutes les données sont ajoutées manuellement, donc si vous trouver quelque chose de faux, signalez le bug. Le lien du rapport de bug se trouve dans le pied de page, thx.</li></ul>',
      result:{
        title: 'Résultat',


        table:{
          title:{
            item: 'Minéral',
            target: 'Nombre Cible',
            buildResult: 'Collecté',
            left: 'Encore Besoin',
            percent: 'Taux Encore Besoin',
            sum: 'Prix Total',
            cnt: 'Nombre',
            rate: ' Efficacité',
            volume: 'Volume',
          },
          option:{
            showItemPrice: 'Montrer Prix Détaillé',
            showSumPrice: 'Montrer Prix Total',
            addNewOre: '+ Nouveau Minerais',
          }
        }
      }

    },

    vesselDebrisView:{
      title: 'Calculatrice Débris Vaisseau',
      subTitle: 'Calculez rapidement le nombre de matériaux récupérés provenant du traitement des débris de vaisseau en votre possession',
      usageTitle: 'Usage',
      usageBody: '<ul><li>Sélectionnez un Débris Vaisseau dans "Config Paramètres", et définissez "Nombre Vaisseau" et "Efficacité Matérielle". La section "Résultat" affichera le nombre de matériaux récupérés calculé.</li><li>Le résultat est arrondi, par exemple avec un taux de 2,33: 1 Débris de vaisseau produira 2 matériaux récupérés, mais 10 débris de vaisseau en produiront 23. C\'est une bonne idée d\'utiliser plus de débris de vaisseau à la fois.</li><li>Le "Efficacité Matérielle" se mettra automatiquement à jour à partir de "Sélectionner Compétence".</li><li>"Nombre Cible", "Encore Besoin" et "Taux Encore Besoin" sont utilisés pour des calculs rapides.</li><li>C\'est un projet personnel toutes les données sont ajoutées manuellement, donc si vous trouver quelque chose de faux, signalez le bug. Le lien du rapport de bug se trouve dans le pied de page, thx.</li><li><a href="https://www.bilibili.com/video/av80457780/" target="_blank">Vidéo d'opération en chinois</a></li></ul>',
      config: {
        title: 'Config Paramètres',
        selectVesselDebris: 'Sélectionnez Vaisseau',
        buildCnt: 'Nombre Vaisseau',
        buildCostRate: 'Material Efficiency',
        selectSkill: 'Sélectionnez Compétence',

        data:{
          vd_isk_market: "Prix Marché",
          vd_isk_system: "Prix Système",
        },
      },
      result:{
        title: 'Résultat',


        table:{
          title:{
            item: 'Matériau Récupéré',
            target: 'Nombre Cible',
            buildResult: 'Obtenu',
            left: 'Encore Besoin',
            percent: 'Taux Encore Besoin',
            sum: 'Prix Total',
          },

          option:{
            showItemPrice: 'Montrer Prix Détaillé',
            showSumPrice: 'Montrer Prix Total',
          }
        }

      }

    },

    slavagedMaterialView:{
      title: 'Recherche Matériau Récupéré',
      subTitle: 'Recherchez rapidement les débris de vaisseau de la source des matériaux récupérés',
      usageTitle: 'Usage',
      usageBody: '<ul><li>Sélectionnez un Matériau Récupéré et l\'outil affichera la source des débris du vaisseau. Le "Efficacité Matérielle" sera pris en compte.</li><li>Le "Efficacité Matérielle" sera automatiquement renseigné à partir du champ "Sélectionnez Compétence".</li><li>C\'est un projet personnel toutes les données sont ajoutées manuellement, donc si vous trouver quelque chose de faux, signalez le bug. Le lien du rapport de bug se trouve dans le pied de page, thx.</li></ul>',
      config: {
        title: 'Config Paramètres',
        selectVesselDebris: 'Matériau Récupéré',
        buildCostRate: 'Efficacité Matérielle',
        selectSkill: 'Sélectionnez Comptétence',

        data:{
          isk_market: "Prix Marché",
          isk_system: "Prix Système",
        },
      },
      result:{
        title: 'Résultat',


        table:{
          title:{
            item: 'Débris Vaisseau',
          },

          option:{
            showItemPrice: 'Monter Prix Détaillé',
          }
        }
      }

    },

    rigSelector:{
      config: {
        selectRig: 'Sélectinnez Module Optimisation',
        filteredRigCategory: 'Sélectionnez Categorie',
      },
    },

    rigView:{
      title: 'Calculatrice Construction Module Optimisation',
      subTitle: 'Vous pouvez calculer le nombre de Matériau Récupéré des modules d\'optimisation ici.',

      usageTitle: 'Usage',
      usageBody: '<ul><li>Pour votre information, la construction n\'est possible que si votre niveau Tech est suffisamment élevé, alors vérifiez d\'abord votre niveau Tech!</li><li>Sélectionnez un module d\'optimsation dans "Config Paramètres", puis définissez le "Nombre Construction", "Efficacité Matérielle", "Temps Efficacité". Découvrez les matériaux dont vous avez besoin dans "Résultat".</li><li>C\'est un projet personnel toutes les données sont ajoutées manuellement, donc si vous trouver quelque chose de faux, signalez le bug, le lien du rapport de bug se trouve dans le pied de page, thx.</li></ul>',
      config: {
        title: 'Config Paramètres',
        selectRig: 'Sélectionnez Module Optimisation',
        buildCnt: 'Nombre Construction',
        buildCostRate: 'Efficacité Matérielle',
        buildTimeRate: 'Temps Efficacité',

        data:{
          r_isk_market: "Prix Marché",
          r_isk_system: "Prix Système",

          rb_techLvl: "Niv Tech",
          rb_isk_build: "Construction ISK",
          rb_time_build: "Temps Construction",
          rb_isk_market: "Prix Marché Plan",
          rb_isk_system: "Prix Système Plan",
        },
      },
      result:{
        title: 'Résultat',

        table:{
          title:{
            item: 'Matériau Récupéré',
            inhand: 'En Possession',
            buildResult: 'Obligatoire Construction',
            need: 'Encore Besoin',
            percent: 'Taux En Possession',
            sum: 'Total',
          },
          option:{
            showItemPrice: 'Montrer Prix Détaillé',
            showSumPrice: 'Montrer Prix Total',
          }
        }
      }
    },

    skillPointView:{
      title: 'Calculatrice Point Compétence',
      subTitle: 'Vous pouvez calculer le temps nécessaire pour atteindre vos objectifs en points de compétence',

      usageTitle: 'Usage',
      usageBody: '<ul><li>Définissez vos "Points Départ" et vos "Points Cibles" dans la section "Config Paramètres", le temps nécessaire sera affiché dans la section "Résultat".</li><li>La sélection d\'un "Niv Tech" définira automatiquement les "Points Cibles"</li><li>"Obtenir Point" est votre taux de points de compétence par minute, "Temps Efficiency" est un pourcentage de "Obtenir Point"</li><li>"Extra Points" est pour des points de compétence supplémentaires par jour. Cette valeur s\'attachera à "Points par min", puis sera utilisée dans le calcul</li><li>Données Niv Tech Collectées par le volontaire "Fish Lord" dans notre groupe de volontaire, merci pour lui. Si vous trouvez quelque chose de faux, signalez un bug en utilisant le lien dans le pied de page.</li></ul>',
      config: {
        title: 'Config Paramètres',
        selectSkill: 'Niv Tech',
        startSkillPoint: 'Points Départ',
        endSkillPoint: 'Points Cibles',
        min: 'Min',
        day: 'Jour',

        skillMinPoint: 'Points par min',
        skillTimeRate: 'Temps Efficacité',
        skillDailyPoint: 'Extra Points',
      },
      result:{
        title: 'Résultat',
        needPoint: 'Point Total',
        finallyMinPoint: 'Points Total par min',
        needMin: 'Min',
        needHour: 'Heure',
        needDay: 'Jour',

      }
    },

    shipConfigView:{
      title: '[Beta]Calculatrice Config Vaisseau',
      subTitle: 'Gérez le plan de configuration du navire sur le Web, partagez et discutez du plan de configuration du navire via URL, léger et rapide',
      usageTitle: 'Usage',
      bodyText: '<ul><li>Après 3 mois, cette version était finalement complétée. La version actuelle a intégré certaines dnonées du test public. Voici quelques descriptions fonctionnelles: </li><li>Contenu terminé: <ol><li>Afficher les propriétés du vaisseau</li><li>Afficher les propriétés de l\'équipement</li><li>Afficher les propriétés des modules d\'optimisation</li><li>Afficher les propriétés des drones</li><li>Enregistrer le plan de configuration du vaisseau</li><li>Gérer le plan de configuration du vaisseau</li><li>Partager le plan de configuration du vaisseau via URL</li></ol></li><li>Contenu inachevé: <ol><li>Compétences pas ajoutées, il sera ajouté dès que le serveur es ouvert</li><li>La formule du calcul n\'est pas précis. Compte tenu de la modification ultérieure, nous commencerons à l\'améliorer 1 mois après l\'ouverture du serveur</li><li>Équipement actif, via ajustement de formule</li></ol></li> <li>Notre objectif ultime est de compléter la configuration de vaisseau sur la page web. Ouvrir l\'URL et vous pouvez voir la configuration du vaisseau et la discussion pour tout le monde, pour que les joueurs débutants puissent facilement les copier et les utiliser, corporation/joueur en équipe pourront facilement communiquer et unifiée les configurations, et laisser les joueurs maîtres en profiter</li><li>La traduction Anglaise est toujours en cours, sera fini dès que possible.</li></ul>',
      config: {
        title : 'Config Paramètres',
        btn : {
          showEditoForm: 'Editer Attribut',
          showItemDetail: 'Montrer Tous Détails',
          collect: 'Favoris',
          save: 'Enregistrer',
          reset: 'Actualiser',
        },
        form: {
          categoryId: 'Categorie',
          desc: 'Desc',
          shortDesc: 'Courte Desc',
        },
      },

      msg:{
        saved: 'Enregistré!',
      },

      item:{
        title:{
          small:{
            low: '',
            mid: '',
            high: '',
            drone: '',
            rig_p: '',
            rig_m: '',
          },
        }
      },

      skill:{
        title: 'Définir Compétence',
        small: '[NE PAS UTILISER] Sélectionner les compétences et définissez leurs niveaux pour voir le changement de données',

        newBtn: '+ Nouvelle Compétence',
      },

      condition:{
        title: 'Définir Paramètres',
        small: '[NE PAS UTILISER] D\'autres paramètres qui affecteront l\'attributs des vaisseaux',

        newBtn: '+ Nouveau Paramètre',
      },


      resultBox: {
        topInfo: {
          powergrid: 'Réseau d\'alimentation',
          capa_cargo: 'Capacité de la soute de chargement',
          capa_ore: 'Capacité de la soute de minerais',
          capa_logistics: 'Capacité de la soute de livraison',

          skillBonus: 'Copmpétence Bonus',
          specialBonus: 'Bonus Spécial',
        },
        attack: {
          title: 'Attaque',
          missile: 'Missile',
          battery: 'Turrelle',
          drone: 'Drone',
          mining: 'Miner',
        },
        defense: {
          title: 'Défense',
          shield:'Bouclier',
          armor:'Blindage',
          structure:'Structure',
        },
        capacity: {
          title: 'Capaciteur',
          hcsj: 'Temps de recharge',
          zdhc: 'Temps de recharge max',
        }, 
        radar: {
          title: 'Radar',

          target: 'Cible Max',
          signatureRadius: 'Rayon de signature',
          scanResolution: 'Résolution du scan',
          induction: 'Puissance de détecteur',
        }, 
        navigation: {
          title: 'Navigation',
          warpAgainst: 'Anti Warp',
          warpSpeed: 'Vitesse de Warp',
          inertiaModifier: 'Modificateur d\'intertie',
          mass: 'Masse',
        }, 
        price: {
          title: 'Prix',
          ship: 'Vaisseau',
        }, 

      },

    },

    shipConfigShareFormModal:{
      title: 'Afficher Lien Paratage'

    },


    volunteerView:{
      title: '[Recrutement]Equipe Bénévole',
      subTitle: 'Rejoignez notre équipe, faite quelque chose de bien pour iEve, faite quelque chose de bien pour tous les joueurs de Eve',
      plan:{
        title: 'Plan bénévole',
        subTitle: 'Rejoignez Nous Pour Faire Mieux',
        bodyText:'<p>Pour les utiliseurs anglais, nous recherchons des traducteurs, faite des choses comme vérifier les fautes de frappe sur iEve et faite une traduction spécial plus tard, si vous trouvez des fautes de frappe rapportez le bug thx. </p><p>Vous êtes également les bienvenues à nous aider à partager le site internet iEve aux utilisateurs Anglais, pour être honnête, nous ne savons pas comment promouvoir en anglais, thx again. </p>',
      },
      vtLinkText: '>>> Liste Bénévoles <<<',
    },

    donateView:{
      title: 'Faites un don pour iEve',
      subTitle: 'Votre don rendra iEve meilleur!',
      topbar:{
        title: 'Présentation',
        subTitle: '',
        bodyText:'<p>iEVE est un projet caritatif gratuit, les dons peuvent en faire une opération plus stable. Ici, vous pouvez rejoindre l\'équipe qui prend en charge iEve, je croie que ça sera mieux si tu nous soutiens!</p><p>Actuellement, nous soutenons les dons en jeu et les dons en espèces, les dons volontaires ne sont pas forcés, et les dons des mineurs sont refusés.</p><p>Les dons en jeu sont très encouragés. Nos bénévoles des données travaillent très dur, et ils sacrifient beaucoup de temps privé pour améliorer les données. Nous espérons que les joueurs de la communauté pourront leur exprimer leur affirmation et leur gratitude grâce à des dons en jeu.</p>',
        donateLinkText: '>>> Liste Donateurs <<<',
      },
      inGame:{
        title: 'Donation en jeu',
        subTitle: 'Les dons effectués directement dans le jeu',
        bodyText:'<p>Prenez simplement contact avec <span class=\'text-green\'>ieve</span> alors nous recevrons votre don (ISK, Plex, Equipement), le nom du rôle est <span class=\'text-green\'>ieve</span> pas de majuscule, pas de signe, pas d\'espaces!!</p><p>Acceptera le contrat régulièrement a 1:00 et 13:00 UTC chaque jour, le confirmera également lorsque je le verrai à d\'autres moments</p><p>Votre don sera remis aux bénévoles qui fournissent gratuitement des services pour iEve. Je crois qu\'ils se sentiront chaleureux à chaque don!</p>',
      },
      paypal:{
        title: 'Donation PayPal',
        subTitle: 'Faire un don via le lien PayPal',
        bodyText:'<p>Le lien PayPal: <a href=\'https://www.paypal.me/xinhualee\' target="_blank" >https://www.paypal.me/XinHuaLee</a></p><p>Votre don sera utilisé pour payer les frais de fonctionnement d\'iEve</p>',
      },
      alipay:{
        title: 'Donation Alipay',
        subTitle: 'QR pour les utilisateurs chinois',
        bodyText:'<p><img src="./statics/pics/alipay_qr.jpg" /></p><p>Votre don sera utilisé pour payer les frais de fonctionnement d\'iEve</p>',
      },
      wechat:{
        title: 'Donation Wechat',
        subTitle: 'QR for Chinese users',
        bodyText:'<p><img src="./statics/pics/wechat_qr.jpg" /></p><p>Votre don sera utilisé pour payer les frais de fonctionnement d\'iEve</p>',
      },
    },

    monumentView:{
      title: 'Monument',
      subTitle: 'iEVE ne serait pas mieux sans vous.',
      topbar:{
        title: 'Explication',
        subTitle: '',
        bodyText:'<ul><li>Je veux me souvenir de tous ceux qui ont aidé iEve.</li><li>Toutes les données manuelles, si vous voyez quelque chose de faux, contactez-moi s\'il vous plaît.</li><li>Afficher les données comme option par defaut, si vous souhaitez masquer vos données merci de me contacter, merci.</li></ul>',
      },
      typeTitle:{
        t1: 'Remerciement Spécial',
        t11: 'Bénévoles',
        t21: 'Donateurs',
      },
      table:{
        title:{
          title: 'Nom',
          desc: 'Courte Desc',
          p_minusCnt: 'Nombre total de minutes de contribution',
          p_startDate: 'Dte d\'inscription',
          p_donateAmount: 'Don total',
          p_donateDate: 'Date de don',
        },
      },
    },

    quickTableOreView:{
      title: 'Tableau Rapide Minerais',
      subTitle: 'Trouvez rapidement la sortie des minerais',
      bodyText: '',

      oreConfig: {
        title: 'Config Paramètres',
        title_rate: 'Définir Efficacité Rendement',
        title_rate_small: 'Seulement besoin de fixer les rendement des minerais ci-après, les autres minerais utilisent le même rendement',
        title_oreOpen: 'Contraintes de minerais',
        title_oreOpen_small: 'Calule seulement les minerais définient à "Oui" ',
        otherConfig:{
          title: 'Autres Paramètres',
          title_small: 'Definissez les autres paramètres pour un meilleur usage',
          showType: {
            title: 'Montrer le type',
            unit: 'avec 1 unité',
            volume: 'avec 1 volume',
          }, 
        }
      },

      table:{
        title:{
          o_title: 'Titre',
          o_volumn: 'Volume',
          o_asteroidLv: 'Niv Astéroïde',
          o_safeLv: 'Niv Sécurité',
          o_: '',
        }
      },
    },

    quickTableVesselDebrisView:{
      title: 'Tableau Rapide Débris Vaisseau',
      subTitle: 'Trouvez rapidement les sorties des débris de vaisseau',
      bodyText: '',

      config: {
        title: 'Config Paramètres',
        buildCostRate: 'Efficacité Matérielle',
        selectSkill: 'Sélectionnez Compétence',
        race: {
          title: 'Définissez Race',
          title_small: 'Afficher seulement les débris quand la race est à "Oui" ',
        },
      },

      table:{
        title:{
          vd_title: 'Titre',
        }
      },
    },

    quickTablePaymentPlanView:{
      title: 'Tableau Rapide Plan Paiement',
      subTitle: 'Trouvez rapidement le plan de paiement',
      bodyText: '',

      config: {
        title: 'Config Paramètres',
        resultUnit: 'Unité de Résultat',
      },

      table:{
        title:{
          techLv_title: 'Niv Tech',
          pointPerMin: ' PC/Min',
        }, 
        data:{
          firstMonthFee: 'Frais du premier mois',
          secondMonthFee: 'Frais du second mois',
          fourMonthFee: 'Frais de quatre mois',
          firstYearFee: 'Frais de première année',
        }
      },
      tableEx:{
        title:{
          ex_title: 'PC/Min',
          ex_body: 'Desc',
          
        }, 
        data:{
          pointPerMin: ' PC/Min',
          m_30_body: 'Alpha',
          m_35_body: 'Omega 5',
          m_40_body: 'Omega 5 + Puce I($1.99)',
          m_45_body: 'Omega 5 + Puce I($1.99) + Puce II($5.99)',
          m_50_body: 'Omega 5 + Puce I($1.99) + Puce II($5.99) + Puce III($29.99)',
          m_60_body: 'Omega 25 + Puce I($1.99)',
          m_65_body: 'Omega 25 + Puce I($1.99) + Puce II($5.99)',
          m_70_body: 'Omega 5 + Omega 25 + Puce I($1.99) + Puce II($5.99)',
          m_75_body: 'Omega 5 + Omega 25 + Puce I($1.99) + Puce II($5.99) + Puce III($29.99)',
        }
      },
    },

    newsView:{
      title: 'Actualités iEVE',
      subTitle: 'Annonce officielle, potins, recrutement de la Légion, publicité du joueur riche, le tout dans les Actualités iEVE',
    },

    marketView:{
      title: 'Marché iEVE',
      subTitle: 'Pas facile de faire des affaires en ligne? En utilisant notre marché iEVE, laissez simplement un message sur le tableau, vous serez bientôt contacté. Rapide, efficace, ouvert, transparent!',
    },

    onlineMarketView:{
      title: '[Alpha]Marché en ligne',
      subTitle: 'Voir les informations sur le marché sur un site Web, pas besoin d\'ouvrir le jeu. Rapide, facile, simple',

    },
    onlineMarketDetailModal:{
      title:{
        buy : 'Acheteur',
        sell : 'Vendeur',
        history : 'Historique des prix',
      },
      buy:{
        title:{
          regionTitle: 'Région',
          amount: 'Montant',
          price: 'Prix',
          location: 'Emplacement',
          expiredAt: 'Expiré à',
          updateAt: 'Mettre à jour à',
        }
      },
      sell:{
        title:{
          regionTitle: 'Région',
          amount: 'Montant',
          price: 'Prix',
          location: 'Emplacement',
          expiredAt: 'Expiré à',
          updateAt: 'Modifié à',
        }
      },
      history:{
        zoom: {
          title: 'Sélection rapide',
          oneW: '1 Semaine',
          oneM: '1 Mois',
          threeM: '3 Mois',
          sixM: '6 Mois',
          ytd: 'CDA',
          oneY: '1 Année',
          all: 'Tous',
        },
        series:{
          dailyAveragePrice: 'Prix Moyen Quotidien',
          minMax: 'Prix Max/Min',
          moving5: 'Prix moyen sur 5 jours',
          moving20: 'Prix moyen sur 20 jours',
          donchain: 'Gamme de changement de prix',
          volume: 'Volume de vente',
          orderCount: 'Nombre de commande',
          volumePerOrder: 'Prix de la commande unique',
        }
      },

    },


    myShipConfigCategoryView:{
      title: 'Catégorie Ma Config Vaisseau',
      subTitle: 'Gérer Catégorie Ma Config Vaisseau',
      table:{
        title:{         
          scc_title: 'Titre',
          scc_desc: 'Desc',
        }
      }
    },
    shipConfigCategoryView:{
      modal:{
        title: 'Titre',
        desc: 'Desc',
      },
    },
    myShipConfigView:{
      title: 'Ma Config Vaiseau',
      subTitle: 'Gérer Ma Config Vaisseau',
      table:{
        title:{         
          s_title: 'Titre Vaisseau',
          scc_title: 'Catégorie',
          sc_shortDesc: 'Courte Desc',
          sc_creationDate: 'Date de création',
          sc_updateDate: 'Date de modification',
        }
      }
    },
    myShipConfigCollectionView:{
      title: 'Config Vaisseau Favoris',
      subTitle: 'Gérer Ma Config Vaisseau Favoris',
      table:{
        title:{         
          s_title: 'Titre Vaisseau',
          scc_title: 'Catégorie',
          sc_shortDesc: 'Courte Desc',
          sc_creationDate: 'Date de Création',
          sc_updateDate: 'Date de modification',
        }
      }
    },
    myShipConfigLikeView:{
      title: 'Config Vaisseau Revue',
      subTitle: 'Gérer Vaisseau Config Revue',
      table:{
        title:{         
          s_title: 'Titre Vaisseau',
          scl_type_id: 'Type',
          scc_title: 'Catégorie',
          sc_shortDesc: 'Courte Desc',
          sc_creationDate: 'Date de création',
          sc_updateDate: 'Date de modification',
        }
      }
    },


    myTopicListView:{
      title: 'Liste de mes sujets',
      subTitle: 'Gérer les sujet publiés',
      modal:{
        t_type_id: 'Type',
        t_cnt_publishDay: 'Add Show Days',
        t_cnt_publishDay_hint: 'Solde de compte insuffisant, impossible de le payer, rechargez s\'il vous plaît',
        costPrice: 'Add Day Cost',
        accountBalance: 'Solde du Compte',
        t_title: 'Titre',
        t_title_hint: 'Le titre est vide ou dépasse 45',
        t_shortDesc: 'Courte Desc',
        t_shortDesc_hint: 'Courte Desc est vide ou dépasse 100',
        t_desc: 'Contenu',
        t_desc_hint: 'Le contenu est vide ou dépasse 1000',
      },
      table:{
        title:{         
          t_id: 'ID',
          t_type_id: 'Type',
          t_title: 'Titre',
          t_shortDesc: 'Courte Desc',
          t_startDate: 'Show Start Date',
          t_endDate: 'Show End Date',
          t_creationDate: 'Date de création',
          t_updateDate: 'Date de modification',
        }
      }
    },


  },

  region:{
    10000001: '德里克',
    10000002: '伏尔戈',
    10000016: '长征',
    10000032: '金纳泽',
  }
}

export default messages;
