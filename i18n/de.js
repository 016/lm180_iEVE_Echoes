const messages =  {
  '|':'|',
  common:{
    title: '<b>i</b>EVE Echoes',
    titleShort: '<b>i</b>EVE',
    login: 'Einloggen',
    signup: 'Registrieren',
    forgotPass: 'Passwort vergessen',
    resetPass: 'Passwort zurücksetzen',
    backIndexPage: 'Zurück zur Startseite',

    smsCode: 'SMS Code',
    sendSms: 'SMS senden',
    sendEmailCode: 'Code senden',
    emailCode: 'Email Code',
    captcha: 'Captcha',
    locale:{
      zh: '切换中文',
      en: 'Use English',
    },
    create: 'Erstellen',
    update: 'Bearbeiten',
    view: 'Anzeigen',
    delete: 'Löschen',
    op: 'Operate',
    id: 'ID',

    costCurrency: 'ISK',
    costCharge: '<span>Currently, the test phase is by invitation only. The cost of publishing information is set to an extremely low amount and it will be restored to normal afterwards. Invited accounts are gifted some ISK for the testing purpose.</span><br/><span>In order to prevent spams, a certain amount of ISK will be charged for the message posted, and it cannot be posted if the balance is insufficient</span><br/><span>[NOT IMPLEMENTED YET]Recharge method: send ISK via contract to ieve in the game, add `ieve-Your ieve website account Name`(for me it\'s ieve-DP, your registered account name on the ieve website is very important!!!) in desc part, will recharge the account after received the contract</span><br/><span>It is prohibited to post politics, personal insults, RMT and other inappropriate content. Such post will be deleted without refund. Future violation will lead to account ban without refund.</span>',

    newElement:{
      title: 'Überschrift',
      desc: 'Beschreibung'
    },
  },

  title:{
    corp: ' Corporation',
  },

  time:{
    year: "Jahr",
    month: "Monat",
    day: "Tag",
    hour: "Stunde",
    min: "Minute",
    sec: "Sekunde",
  },

  datasource:{
    demo: 'Demo Data',
    d201912: '201912 Test Data',
    d202007: '202007 Test Data',
    d202008: '202008 Data',
    d202106: '202006 Vxxxx Data',
  },

  btn:{
    new: 'Neu',
    save: 'Speichern',
    edit: 'Bearbeiten',
    cancel: 'Abbrechen',
    close: 'Schließen',
    newLink: 'Neuer Link',
  },

  status:{

  },
  type:{
    partner: {
      person: 'Person',
      company: 'Firma'
    },
    sexy: {
      male: 'Männlich',
      female: 'Weiblich',
    },
    yon: {
      yes: 'Ja',
      no: 'Nein',
    },

    ship:{
      frigate: 'Fregatte',
      destroyer: 'Zerstörer',
      cruiser: 'Kreuzer',
      battlecruiser: 'Kriegskreuzer',
      battleship: 'Kriegsschiff',
      carrier: 'Trägerschiff',
      industrial: 'Industrieschiff',
    },

    shipMode:{
      SniperTitle: 'Sniper Mode',
      SniperInfo: 'All Weapon Activation Time +100%</br>Turret Tracking Speed -60%</br>Missile Explosion Velocity -60%</br>Ship Flight Velocity -99%</br>Drone control distance +75%</br>Turret ptimal Range +100%</br>Turret Accuracy Falloff +100%</br>Missile Flight Velocity +100%</br>All Damage +50%',
      RechargeTitle: 'Recharge Mode',
      RechargeInfo: 'Ship Signature Radius +100%</br>Ship Flight Velocity -80%</br>Ship Capacitor Recharge Time -50%',
      DefenseTitle: 'Defense Mode',
      DefenseInfo: 'All Damage -90%</br>Ship Flight Velocity -80%</br>Ship Signature Radius -20%</br>All Ship Resistance +50%',
      PropulsionTitle: 'Propulsion Mode',
      PropulsionInfo: 'Ship Capacitor Recharge Time +500%</br>Ship Signature Radius +100%</br>Ship Flight Velocity +100%',
      SiegeTitle: 'Siege Mode',
      SiegeInfo: 'Turret Tracking Speed -95%</br>Missile Explosion Velocity -90%</br>Missile Explosion Radius +1000%</br>Ship Flight Velocity -99%</br>Ship Signature Radius +100%</br>All Damage +100%',
      BombardTitle: 'Bombard Mode',
      BombardInfo: 'Missile Explosion Velocity -50%</br>Missile Explosion Radius +100%</br>Ship Flight Velocity -95%</br>Ship Signature Radius +200%</br>Missile Flight Time +200%</br>All Damage +20%',
    },

    shipConfigLikeType:{
      t_1: 'HOCH',
      t_9: 'RUNTER',
    },

    slotType:{
      low: 'Low Slot',
      mid: 'Mid Slot',
      high: 'High Slot',

      drone: 'Drohnenhangar',


      rig_p: 'Kampfmodifikationen',
      rig_m: 'Ingenieurmodifikationen',
    },

    weapon:{
      missile: {
        title: 'Raketenwerfer',
        qd: 'Kleine Lenkwaffenwerfer',
        hj: 'Kleine Torpedowerfer',
        qk: 'Mittlere Schnelllenkwaffenwerfer',
        zd: 'Mittlere Lenkwaffenwerfer',
        zg: 'Mittlere Torpedowerfer',
        zk: 'Große Schnelllenkwaffenwerfer',
        xh: 'Große Lenkwaffenwerfer',
        yl: 'Große Torpedowerfer',
      },
      hunhe: {
        title: 'Railguns',
        cigui:{
          s: 'Kleine Railguns mit gezogenem Lauf',
          m: 'Mittlere Railguns mit gezogenem Lauf',
          l: 'Große Railguns mit gezogenem Lauf',
          xl: 'Extragroße Railguns mit gezogenem Lauf',
        },
        jisu:{
          s: 'Kleine kurzläufige Railguns',
          m: 'Mittlere kurzläufige Railguns',
          l: 'Große kurzläufige Railguns',
          xl: 'Extragroße kurzläufige Railguns',
        }
      },
      power: {
        title: 'Laser',
        mcjg:{
          s: 'Kleine Impulslaser',
          m: 'Mittlere Impulslaser',
          l: 'Große Impulslaser',
          xl: 'Extragroße Impulslaser',
        },
        jsjg:{
          s: 'Kleine Langstreckenlaser',
          m: 'Mittlere Langstreckenlaser',
          l: 'Große Langstreckenlaser',
          xl: 'Extragroße Langstreckenlaser',
        }
      },
      tanshe: {
        title: 'Maschinenkanonen',
        zdjn:{
          s: 'Kleine Maschinenkanonen',
          m: 'Mittlere Maschinenkanonen',
          l: 'Große Maschinenkanonen',
          xl: 'Extragroße Maschinenkanonen',
        },
        ld:{
          s: 'Kleine Angriffskanonen',
          m: 'Mittlere Angriffskanonen',
          l: 'Große Angriffskanonen',
          xl: 'Extragroße Angriffskanonen',
        }
      },
      mining: {
        title: 'Abbauausrüstung',
        ckjg:'Bergbaulaser',
        ltck:'Strip-Miner',
      },
      liejie: {
        title: 'Zerleger',
        jl:{
          s: 'Small Jetstream Decomposer',
          m: 'Medium Jetstream Decomposer',
          l: 'Large Jetstream Decomposer',
        },
        zd:{
          s: 'Small Concussion Decomposer',
          m: 'Medium Concussion Decomposer',
          l: 'Large Concussion Decomposer',
        }
      },
    },

    drone:{
      s: { 
        title: 'Kleine Drohne '
      },
      m: { 
        title: 'Mittelschwere Drohne '
      },
      l: { 
        title: 'Große Drohne '
      },
      sen: { 
        title: 'Wachdrone '
      },
    },

    slotMid:{
      ewar: {
        title: 'Elektronische Kriegsführung',
        tzcr:'Stasis Webifier',
        tzbz:'Stasis Grappler',
        yqrd:'Warpblocker',
        yqrp:'Warp Scrambler',
      },
      ln: {
        title: 'Energie-Nosferatu',
        s: 'Kleine Energie-Nosferatus',
        m: 'Mittlere Energie-Nosferatus',
        l: 'Große Energie-Nosferatus',
        xl: 'Extragroße Energie-Nosferatus',
      },
      nlzh: {
        title: 'Energie-Neutralisierer',
        s: 'Kleine Energie-Neutralisierer',
        m: 'Mittlere Energie-Neutralisierer',
        l: 'Große Energie-Neutralisierer',
        xl: 'Extragroße Energie-Neutralisierer',
      },
      ychdhc: {
        title: 'Schildfernbooster',
        s: 'Kleine Schildfernbooster',
        m: 'Mittlere Schildfernbooster',
        l: 'Große Schildfernbooster',
        xl: 'Extragroße Schildfernbooster',
      },
      yczjwx: {
        title: 'Panzerungs-Fernreparatursysteme',
        s: 'Kleine Panzerungs-Fernreparatursysteme',
        m: 'Mittlere Panzerungs-Fernreparatursysteme',
        l: 'Große Panzerungs-Fernreparatursysteme',
        xl: 'Extragroße Panzerungs-Fernreparatursysteme',
      },
      qthdhc: {
        title: 'Schildboostgruppe',
        s: 'Kleine Schildboostergruppe',
        m: 'Mittlere Schildboostergruppe',
        l: 'Große Schildboostergruppe',
        xl: 'Extragroße Schildboostergruppe',
      },
      qtzjwx: {
        title: 'Panzerungsreparatursystemgruppe',
        s: 'Kleine Panzerungsreparatursystemgruppe',
        m: 'Mittlere Panzerungsreparatursystemgruppe',
        l: 'Große Panzerungsreparatursystemgruppe',
        xl: 'Extragroße Panzerungsreparatursystemgruppe',
      },
      hdlc: {
        title: 'Schildfeldmodule',
        s: 'Kleine Schildfeldmodule',
        m: 'Mittlere Schildfeldmodule',
        l: 'Große Schildfeldmodule',
        xl: 'Extragroße Schildfeldmodule',
      },
      zjlj: {
        title: 'Armor Link Module',
        s: 'Small Armor Link Module',
        m: 'Medium Armor Link Module',
        l: 'Large Armor Link Module',
        xl: 'Extra Large Armor Link Module',
      },
      ycdrcs: {
        title: 'Energiespeicher-Ferntransmitter',
        s: 'Kleine Energiespeicher-Ferntransmitter',
        m: 'Mittlere Energiespeicher-Ferntransmitter',
        l: 'Große Energiespeicher-Ferntransmitter',
        xl: 'Extragroße Energiespeicher-Ferntransmitter',
      },
      qtdrcs: {
        title: 'Energiespeichertransmittergruppe',
        s: 'Kleine Energiespeichertransmittergruppe',
        m: 'Mittlere Energiespeichertransmittergruppe',
        l: 'Große Energiespeichertransmittergruppe',
        xl: 'Extragroße Energiespeichertransmittergruppe',
      },
    },

    slotLow:{



      drqdc: {
        title: 'Energiespeicher-Batterien',
        s: 'Kleine Energiespeicher-Batterien',
        m: 'Mittlere Energiespeicher-Batterien',
        l: 'Große Energiespeicher-Batterien',
        xl: 'Extragroße Energiespeicher-Batterien',
      },
      hdzq: {
        title: 'Schildhärter',
        fys:'Reaktive Schildhärter',
        zsy:'Anpassungsfähige Schildhärter',
      },
      hdkz: {
        title: 'Schilderweiterungen',
        s: 'Kleine Schilderweiterung',
        m: 'Mittlere Schilderweiterung',
        l: 'Große Schilderweiterung',
        xl: 'Extragroße Schilderweiterung',
      },
      hdhc: {
        title: 'Schildbooster',
        s: 'Kleine Schildbooster',
        m: 'Mittlere Schildbooster',
        l: 'Große Schildbooster',
        xl: 'Extragroße Schildbooster',
      },
      zjzq: {
        title: 'Panzerhärter',
        fys:'Reaktive Panzerhärter',
        zsy:'Anpassungsfähige Panzerhärter',
      },
      zjb: {
        title: 'Panzerplatten',
        s100: '100mm Panzerplatte',
        s200: '200mm Panzerplatte',
        m400: '400mm Panzerplatte',
        m800: '800mm Panzerplatte',
        l1600: '1600mm Panzerplatte',

      },
      zjwx: {
        title: 'Panzerungsreparatursysteme',
        s: 'Kleine Panzerungsreparatursysteme',
        m: 'Mittlere Panzerungsreparatursysteme',
        l: 'Große Panzerungsreparatursysteme',
        xl: 'Extragroße Panzerungsreparatursysteme',
      },
      jgwx: {
        title: 'Hull Repairer',
        s: 'Small Hull Repairer',
        m: 'Medium Hull Repairer',
        l: 'Large Hull Repairer',
        xl: 'Extra Large Hull Repairer',
      },
      sskz: {
        title: 'Schadenkontrolle',
        sskz:'Schadenkontrolle',
      },
      tjqgl: {
        title: 'Schubdüse Upgrade',
        gxwd:'Trägheitsstabilisator',
        yqwd:'Warpkern-Stabilisator',
      },
      jlrs: {
        title: 'Nachbrenner',
        s: 'Kleiner Nachbrenner',
        m: 'Mittlerer Nachbrenner',
        l: 'Großer Nachbrenner',
        xl: 'Extragroßer Nachbrenner',
      },
      wxyqtj: {
        title: 'Mikrowarpantrieb',
        s: 'Kleine Mikrowarpantriebe',
        m: 'Mittlere Mikrowarpantriebe',
        l: 'Große Mikrowarpantriebe',
        xl: 'Extragroße Mikrowarpantriebe',
      },
      yszb: {
        title: 'Tarnvorrichtungen',
        yxzz:'Tarnvorrichtung',
        ymxd:'Covert Ops Tarnvorrichtung',
      },
      wqsj: {
        title: 'Waffenupgrades',
        src: 'Kühlkörper',
        ccwd: 'Magnetischer-Feld-Stabilisator',
        hzwd: 'Kreiselregler',
        hlzwd: 'Makropartikelstabilisatoren',
        ddkz: 'Ballistisches Kontrollsystem',
        ddzd: 'Lenkwaffen-Leitcomputer',
        sdjsj: 'Nachführcomputer',
        wrjshzx: 'Drohnen-Schadensverstärker',
        wrjdh: 'Drohnen-Navigationscomputer',
        qfwsd: 'Omnidirektionales Nachführungsnetzwerk',
      },
    },

    rig_p: {
      wqzq:{
        title: 'Waffenmodifikationen',
        hhwq: 'Railgun Modifikationen',
        ljwq: 'Zerlegermodifikationen',
        nlwq: 'Lasermodifikationen',
        tswq: 'Kanonenmodifikationen',
        missile: 'Lenkwaffenwerfer-Modifikationen',
        drone: 'Drohnenmodifikationen',
      },
      fyzq:{
        title: 'Defensive Modifikationen',
        hd: 'Schildmodifikationen',
        zj: 'Panzermodifikationen',
        jg: 'Strukturmodifikationen',
      },
    },

    rig_m: {
      navigate:{
        title: 'Navigationsmodifikationen',
      },
      gongcheng:{
        title: 'Ingenieurmodifikationen',
      },
      electoric:{
        title: 'Elektro Modifikationen',
      },
      industry:{
        title: 'Industrielle Modifikationen',
      },
    },


    projectConfigData:{
      account: 'Account',
      server: 'Server',
      domain: 'Domain',
    },
    projectFile:{
      locale: 'Locale',
      thrd: '3rd',
    },
  },

  material:{
    m_st: 'Tritanium',
    m_lj: 'Pyerite',
    m_ly: 'Mexallon',
    m_tws: 'Isogen',
    m_cxx: 'Nocxium',
    m_sy: 'Zydrine',
    m_csk: 'Megacyte',
    m_me: 'Morphite',

    p_gz: 'Lustering Alloy',
    p_gc: 'Sheen Compound',
    p_sg: 'Gleaming Alloy',
    p_ns: 'Condensed Alloy',
    p_jm: 'Precious Alloy',
    p_zs: 'Motley Compound',
    p_xw: 'Fiber Composite',
    p_tg: 'Lucent Compound',
    p_dy: 'Opulent Compound',
    p_gh: 'Glossy Compound',
    p_jt: 'Crystal Compound',
    p_ah: 'Dark Compound',
    p_hxqt: 'Reactive Gas',
    p_xyqt: 'Noble Gas',
    p_jc: 'Base Metals',
    p_zhong: 'Heavy Metals',
    p_gjs: 'Noble Metals',
    p_fy: 'Reactive Metals',
    p_yd: 'Toxic Metals',
    p_gyxw: 'Industrial Fibers',
    p_cqlsl: 'Supertensile Plastics',
    p_jfxa: 'Polyaramids',
    p_lqj: 'Coolant',
    p_nsy: 'Condensates',
    p_jzmk: 'Construction Blocks',
    p_nmt: 'Nanites',
    p_gjgzc: 'Silicate Glass',
    p_lqdy: 'Smartfab Units',
    p_zhongshui: 'Heavy Water',
    p_xfdlz: 'Suspended Plasma',
    p_yhcy: 'Liquid Ozone',
    p_lzry: 'Ionic Solutions',
    p_twsrl: 'Oxygen Isotopes',
    p_dlztt: 'Plasmoids',


    s_jssp : ' Metals Scraps',
    s_qhjssp : 'Reinforced Metals Scraps',
    s_wdl : 'Charred Micro Circuit',
    s_jkdl : 'Fried Interface Circuit',
    s_nydl : 'Tripped Power Circuit',
    s_ljdl : 'Burned Logic Circuit',
    s_cfjg : 'Smashed Trigger Unit',
    s_jf : 'Damaged Close-in Weapon System',
    s_yg : 'Scorched Telemetry Processor',
    s_sjwl : 'Damaged Artificial Neural Network',
    s_llzlt : 'Contaminated Lorentz Fluid',
    s_jhdt : 'Conductive Polymer',
    s_nmjht : 'Contaminated Nanite Polymer',
    s_dlb : 'Defective Current Pump',
    s_jccfjg : 'Integrated Trigger Unit',
    s_gzzz : 'Integrated hull Modification Device',
    s_mkkzt : 'Integrated Module Control',
    s_rssl : 'Integrated Thermoplastic',
    s_mnwl : 'Integrated Simulation Network',
    s_djhjt : 'Integrated Single-crystal',
    s_nyfsq : 'Power Generator',
    s_kzzs : 'Capacitor Control Center',
  },

  ore:{
    o_fjs:'Veldspar',
    o_zsy:'Scordite',
    o_gjy:'Pyroxeres',
    o_xcy:'Plagioclase',
    o_obes:'Omber',
    o_sps:'Kernite',
    o_jsbk:'Jaspet',
    o_xmft:'Hemorphite',
    o_twyk:'Hedbergite',
    o_hy:'Spodumain',
    o_hzs:'Dunkles Ochre',
    o_pmy:'Gneiss',
    o_kljs:'Crokite',
    o_sdts:'Bistot',
    o_akly:'Arkonor',
    o_jfdy:'Mercoxit',
  },

  debris:{
    t_1 : 'Mordu\'s Legion-Schiffstrümmer',
    t_2 : 'Serpentis-Schiffstrümmer',
    t_3 : 'Angel-Schiffstrümmer',
    t_4 : 'Sansha-Schiffstrümmer',
    t_5 : 'Guristas-Schiffstrümmer',
    t_6 : 'SOE-Schiffstrümmer',
    t_7 : 'Blood-Schiffstrümmer',
    t_11  : 'YanJung-Schiffstrümmer',

    t_21  : 'Kleiner beschädigter ORE-Rumpf',
    t_22  : 'Mittelgroßer beschädigter ORE-Rumpf',
    t_23  : 'Großer beschädigter ORE-Rumpf',

    t_31  : 'Kleiner beschädigter InterBus-Rumpf',
    t_32  : 'Mittelgroßer beschädigter InterBus-Rumpf',
    t_33  : 'Großer beschädigter InterBus-Rumpf',


    t_104 : 'Amarr-Schiffstrümmer St. 4',
    t_105 : 'Amarr-Schiffstrümmer St. 5',
    t_106 : 'Amarr-Schiffstrümmer St. 6',
    t_107 : 'Amarr-Schiffstrümmer St. 7',
    t_108 : 'Amarr-Schiffstrümmer St. 8',
    t_109 : 'Amarr-Schiffstrümmer St. 9',
    t_110 : 'Amarr-Schiffstrümmer St. 10',

    t_204 : 'Caldari-Schiffstrümmer St. 4',
    t_205 : 'Caldari-Schiffstrümmer St. 5',
    t_206 : 'Caldari-Schiffstrümmer St. 6',
    t_207 : 'Caldari-Schiffstrümmer St. 7',
    t_208 : 'Caldari-Schiffstrümmer St. 8',
    t_209 : 'Caldari-Schiffstrümmer St. 9',
    t_210 : 'Caldari-Schiffstrümmer St. 10',

    t_304 : 'Gallente-Schiffstrümmer St. 4',
    t_305 : 'Gallente-Schiffstrümmer St. 5',
    t_306 : 'Gallente-Schiffstrümmer St. 6',
    t_307 : 'Gallente-Schiffstrümmer St. 7',
    t_308 : 'Gallente-Schiffstrümmer St. 8',
    t_309 : 'Gallente-Schiffstrümmer St. 9',
    t_310 : 'Gallente-Schiffstrümmer St. 10',

    t_404 : 'Minmatar-Schiffstrümmer St. 4',
    t_405 : 'Minmatar-Schiffstrümmer St. 5',
    t_406 : 'Minmatar-Schiffstrümmer St. 6',
    t_407 : 'Minmatar-Schiffstrümmer St. 7',
    t_408 : 'Minmatar-Schiffstrümmer St. 8',
    t_409 : 'Minmatar-Schiffstrümmer St. 9',
    t_410 : 'Minmatar-Schiffstrümmer St. 10',
  },

  datacore:{
    t_1 : 'Datenkern - Amarrian Starship Engineering',
    t_2 : 'Datenkern - Caldari Starship Engineering',
    t_3 : 'Datenkern - Gallentean Starship Engineering',
    t_4 : 'Datenkern - Minmatar Starship Engineering',

    t_11  : 'Datenkern - Laser Physics',
    t_12  : 'Datenkern - Electromagnetic Physics',
    t_13  : 'Datenkern - High Energy Physics',
    t_14  : 'Datenkern - Rocket Science',
    t_15  : 'Datenkern - Mechanical Engineering',
  },

  race:{
    c: 'Caldari',
    g: 'Gallente',
    a: 'Amarr',
    m: 'Minmatar',
    o: 'Andere',
    r_jdl: 'Caldari',
    r_glt: 'Gallente',
    r_am: 'Amarr',
    r_mmt: 'Minmatar',
    r_other: 'Andere',
  },

  skill: {
    suiTie: 'Veredelung von Altmetall',
    suiTieJJ: 'Fortgeschrittene Veredelung von Altmetall',
    suiTieZZ: 'Professionelle Veredelung von Altmetall',
  },

  topicType:{
    normal : 'Normal Topic',
    siteNews : 'iEVE News',
    officialNews : 'Official News',
    thirdNews : '3rd Part News',
    legion : 'Corp News',
    personal : 'Personal News',
    cheater : 'Beware of Liars',
    tradeBuy : 'Buy Order',
    tradeSell : 'Sell Order',
    tradeBoth : 'Mix Order',
    1 : 'Normal Topic',
    11 : 'iEVE News',
    13 : 'Official News',
    15 : '3rd Part News',
    16 : 'Beware of Liars',
    21 : 'Corp News',
    31 : 'Personal News',
    61 : 'Buy Order',
    62 : 'Sell Order',
    69 : 'Mix Order',
  },

  shipBlueprintType:{
    ship: 'Schiffe',
    equipment: 'Ausrüstung',
    drone: 'Drohnen',
    building: 'Gebäude',
  },


  item:{
    title:{
      e_id: 'ID',
      e_title: 'Title',
      e_isk_market: 'Preis',
      r_id: 'ID',
      r_title: 'Title',
      r_isk_market: 'Preis',


      e_volumn: 'Volumen',
      e_powerCost: 'Stromnetz',
      e_gjCost: 'Aktivierungskosten',
      e_damageRate: 'Schadensrate',
      e_runTime: 'Duration',
      e_reloadTime: 'Nachladezeit',

      e_singleDamage: 'Einzelschaden',
      e_v_1_mid_2: 'Energietransfer',
      e_v_1_mid_3: 'Neutralisation',
      e_v_1_low_13: 'Energietransfer',
      e_v_1_mid_23: 'Energietransfer',
      e_v_1_mid_31: '减伤比例',
      e_v_1_mid_32: '承伤比例',

      e_shield: 'Schild ',
      e_shield_r: 'Schild-Boostmenge',
      e_shield_add: 'Schild-Trefferpunkte Bonus',
      e_armor: 'Panzerung ',
      e_armor_r: 'Panzerung-Trefferpunkte repariert',
      e_armor_add: 'Panzerung-Trefferpunkte Bonus',
      e_structure: 'Struktur ',
      e_structure_r: 'Struktur-Trefferpunkte repariert',
      e_structure_add: 'Struktur-Trefferpunkte Bonus',

      e_singleRadius: 'Signaturradius',
      e_scanResolution: 'Scanauflösung',


      e_range: 'Optimale Reichweite',
      e_range_high_1: 'Lenkwaffenreichweite',

      e_lostRange: 'Effektivität Präzisionsabfall',
      e_followSpeed: 'Folgegeschwindigkeit',
      e_push: 'Push Modifier',
      
      e_ch_flySpeed: 'Fluggeschwindigkeit Bonus',
      e_ch_flySpeed_ac: 'Aktive Fluggeschwindigkeit Bonus',  
      e_ch_flyTime: 'Flugzeit Bonus',
      e_ch_flyTime_ac: 'Aktive Flugzeit Bonus',
      e_ch_inertia: 'Trägheitsmodifikator',
      e_ch_inertia_ac: 'Aktiver Trägheitsmodifikator',
      e_ch_wrapDisrup: 'Warp Scramble Stärke',
      e_ch_wrapDisrup_ac: 'Aktive Warp Scramble Stärke',
      e_ch_scanResolution: 'Scauflösung Bonus',
      e_ch_scanResolution_ac: 'Aktive Scanauflösung Bonus',
      e_ch_signalRadius: 'Signaturbonusmodifikator',
      e_ch_signalRadius_ac: 'Aktiver Signaturradiusmodifikator',
      e_ch_kg: 'Massezugewinnung',
      e_ch_kg_ac: 'Aktive Masszugewinnung',
      e_ch_damageRate: 'Schadensmodifikator',
      e_ch_damageRate_ac: 'Aktiver Schadensmodifikator',
      e_ch_runTime: 'Laufzeitmodifikator',
      e_ch_runTime_ac: 'Aktiver Laufzeitmodifikator',
      e_ch_lostRange: 'Effektivität Präzisionsabfallmodifikator',
      e_ch_lostRange_ac: 'Aktiver Effektivität Präzisionsabfallmodifikator',
      e_ch_range: 'Optimale Reichweite Modifikator',
      e_ch_range_ac: 'Aktiver Optimale Reichweite Modifikator',
      e_ch_followSpeed: 'Folgegeschwindigkeitsmodifikator',
      e_ch_followSpeed_ac: 'Aktiver Folgegeschwindigkeitsmodifikator',
      e_ch_exSpeed: 'Explosionsgeschwindigkeitsmodifikator',
      e_ch_exSpeed_ac: 'Aktiver Explosionsgeschwindigkeitsmodifikator',
      e_ch_exRadius: 'Explosionsradiusmodifikator',
      e_ch_exRadius_ac: 'Aktiver Explosionsradiusmodifikator',


      e_exSpeed: 'Explosionsgeschwindigkeit',
      e_exRadius: 'Explosionsradius',
      e_fuel: 'Fuel',



      e_v_1_low_1: 'Stromnetzbonus',
      e_v_2_low_1: 'Temporärer Stromnetzbonus',
      e_v_3_low_1: 'Temporäre Stromnetzbonusrate',
      e_v_4_low_1: 'Stromnetz Kriegsführungsresistenzbonus',


      e_v_1_low_12: 'Temporärer Schildtrefferpunktebonus',
      e_v_2_low_12: 'Temporärer Schildtrefferpunktebonusrate',
      e_v_1_low_22: 'Temporärer Panzerungstrefferpunktebonus',
      e_v_2_low_22: 'Temporärer Panzerungstrefferpunktebonusrate',

      e_v_1_low_41: 'Aktivschadenresistenz',


      e_v_1_low_51_2401: 'Trägheitsmodifikationsrate',
      e_v_1_low_51_2402: 'Warp Scramble Stärkebonus',

      e_v_1_low_53: 'Stromnetzkapazitätsbonus',

      e_v_1_low_61: 'Sensorenrekalibrierungszeit',

      e_v_1_low_71: 'Aktivschadenmodifikator',
      e_v_2_low_71: 'Aktivlaufzeitmodifikator',

      e_v_1_low_71_3401: 'Aktiveffektzugewinn',
      e_v_1_low_71_3302: 'Aktiveffektzugewinn',





      r_v_1_rig_p_1_1_1: 'Schadensratenbonus',
      r_v_1_rig_p_1_1_2: 'Effektivität Präzisionsabfallmodifikator',
      r_v_1_rig_p_1_1_3: 'Aktivierungskostenmodifikator',
      r_v_1_rig_p_1_1_4: 'Laufzeitmodifikator',
      r_v_1_rig_p_1_1_5: 'Stromnetzbedarfmodifikator',

      r_v_1_rig_p_1_11_11: 'Damage Rate Bonus',
      r_v_1_rig_p_1_11_12: 'Effektivität Präzisionsabfallmodifikator',
      r_v_1_rig_p_1_11_13: 'Aktivierungskostenmodifikator',
      r_v_1_rig_p_1_11_14: 'Laufzeitmodifikator',
      r_v_1_rig_p_1_11_15: 'Stromnetzbedarfmodifikator',

      r_v_1_rig_p_1_21_21: 'Damage Rate Bonus',
      r_v_1_rig_p_1_21_22: 'Effektivität Präzisionsabfallmodifikator',
      r_v_1_rig_p_1_21_23: 'Aktivierungskostenmodifikator',
      r_v_1_rig_p_1_21_24: 'Laufzeitmodifikator',
      r_v_1_rig_p_1_21_25: 'Stromnetzbedarfmodifikator',

      r_v_1_rig_p_1_41_41: 'Damage Rate Bonus',
      r_v_1_rig_p_1_41_42: 'Effektivität Präzisionsabfallmodifikator',
      r_v_1_rig_p_1_41_43: 'Laufzeitmodifikator',
      r_v_1_rig_p_1_41_44: 'Stromnetzbedarfmodifikator',

      r_v_1_rig_p_1_61_61: 'Explosionsgeschwindigkeitsbonus',
      r_v_1_rig_p_1_61_62: 'Schadensratenbonus',
      r_v_1_rig_p_1_61_63: 'Explosionsradiusmodifikator',
      r_v_1_rig_p_1_61_64: 'Flugzeitbonus',
      r_v_1_rig_p_1_61_65: 'Fluggeschwindigkeitsbonusrate',
      r_v_1_rig_p_1_61_66: 'Laufzeitmodifikator',

      r_v_1_rig_p_1_81_81: 'Schadensratenbonus',
      r_v_1_rig_p_1_81_82: 'Effektivität Präzisionsabfallmodifikator',
      r_v_1_rig_p_1_81_83: 'Laufzeitmodifikator',
      r_v_1_rig_p_1_81_84: 'Drohnenkontrollreichweitenbonus',

      r_v_1_rig_p_2_101_101: 'Laufzeitmodifikator',
      r_v_1_rig_p_2_101_102: 'Schild-Boostmengenbonus',
      r_v_1_rig_p_2_101_103: 'Aktivierungskostenmodifikator',
      r_v_1_rig_p_2_101_104: 'Schildbonus',
      r_v_1_rig_p_2_101_105: 'EM Schaden Schildresistenzbonus',
      r_v_1_rig_p_2_101_106: 'Thermalschaden Schildresistenzbonus',
      r_v_1_rig_p_2_101_107: 'Kineticschaden Schildresistenzbonus',
      r_v_1_rig_p_2_101_108: 'Explosionsschaden Schildresistenzbonus',

      r_v_1_rig_p_2_121_121: 'Laufzeitmodifikator',
      r_v_1_rig_p_2_121_122: 'Panzerungstrefferpunkte-Reparaturbonus',
      r_v_1_rig_p_2_121_123: 'Activation Cost Modifier',
      r_v_1_rig_p_2_121_124: 'Panzerungsbonus',
      r_v_1_rig_p_2_121_125: 'EM Schaden Panzerungsresistenzbonus',
      r_v_1_rig_p_2_121_126: 'Thermalschaden Panzerungsresistenzbonus',
      r_v_1_rig_p_2_121_127: 'Kineticschaden Panzerungsresistenzbonus',
      r_v_1_rig_p_2_121_128: 'Explosionsschaden Panzerungsresistenzbonus',

      r_v_1_rig_p_2_141_141: 'Strukturbonus',
      r_v_1_rig_p_2_141_142: 'EM Schaden Strukturresistenzbonus',
      r_v_1_rig_p_2_141_143: 'Thermalschaden Strukturresistenzbonus',
      r_v_1_rig_p_2_141_144: 'Kineticschaden Strukturresistenzbonus',
      r_v_1_rig_p_2_141_145: 'Explosionsschaden Strukturresistenzbonus',

      r_v_1_rig_m_1_1001_1001: 'Aktivierungskostenmodifikator',
      r_v_1_rig_m_1_1001_1002: 'Fluggeschwindigkeitsbonusrate',
      r_v_1_rig_m_1_1001_1003: 'Trägheitsmodifikator',
      r_v_1_rig_m_1_1001_1004: 'Frachtraumkapazitätsbonus',
      r_v_1_rig_m_1_1001_1005: 'Massenbonus',
      r_v_2_rig_m_1_1001_1005: 'Trägheitsmodifikator',
      r_v_3_rig_m_1_1001_1005: 'Fluggeschwindigkeitsmodifikator',
      r_v_1_rig_m_1_1001_1006: 'Warp Scramble Stärke',
      r_v_1_rig_m_1_1001_1007: 'Warpgeschwindigkeitsbonus',

      r_v_1_rig_m_2_1101_1101: 'Energiespeicherbonus',
      r_v_1_rig_m_2_1101_1102: 'Energiespeicherladezeitmodifikator',
      r_v_1_rig_m_2_1101_1103: 'Stromnetzkapazitätsbonus',
      r_v_1_rig_m_2_1101_1104: 'Scanauflösungsbonus',

      r_v_1_rig_m_3_1201_1201: 'Scanintensitätsbonus',
      r_v_1_rig_m_3_1201_1202: 'Scanintensitätsbonus',

      r_v_1_rig_m_4_1301_1301: 'Bergbauvolumenbonus',
      r_v_1_rig_m_4_1301_1302: 'Laufzeitmodifikator',
      r_v_1_rig_m_4_1301_1303: 'Optimale Reichweite Bonus',
      r_v_1_rig_m_4_1301_1304: 'Aktivierungskostenmodifikator',


      dps: 'DPS',




    }
  },



  footerbar:{
    newBug: 'Fehler melden',
    contact: 'Kontaktieren',
    msg: 'Bei Problemen <a href="https://github.com/016/lm180_iEVE_Echoes/issues/new" target="_blank">senden Sie uns bitte eine EMail</a>',
  },
  pub: {
    topbar:{
      index: 'Startseite',
      about: 'Über uns',
      price: 'Preis',
      devPlan: 'Entwicklerpläne',
      dashboard: 'Startseite',
      project: 'Projekt',
      signout: 'Ausloggen',
      login: 'Einloggen',
      signup: 'Registrieren',
    },
    index:{
      title: 'Willkommen',
      subTitle: 'Nutze das iMenü um all deine Projekte online zu verwalten',

    },
    about:{
      title: 'Über uns',
      subTitle: 'Alle Informationen rund um das iMenü',

    },
    price:{
      title: 'Preis',
      subTitle: 'Kosten für deinen ausgewählten Kostenplan',

    },
    devPlan:{
      title: 'Entwicklerpläne',
      subTitle: '202007 Finally Test Data Collect Plan',
      body:'<ul><li class="text-green">[Complete] Ship Blueprint research material data</li><li class="text-green">[Complete] Ore refining data</li><li class= "text-green">[Complete] Vessel Debris Refining Data</li><li class="text-green">[Complete] Ship building material data</li><li class="text-green">[Complete] Rig building material data</li><li>[Not started] Planetary resource output data (this data is very large and requires more time)</li><li class="text-green ">[Complete] Ship attribute data used for ship config</li><li class="text-green">[Complete] Equipment attribute data used for ship config</li></ul>',
    },

    login:{
      title: 'Einloggen um eine neue Sitzung zu starten',
      signupSuccess: '<h4><i class="icon fa fa-check"></i> Registrierung erfolgreich!</h4> Bitte logge dich nun mit deinem neuen Account ein.',
      resetPassSuccess: '<h4><i class="icon fa fa-check"></i> Passwortrücksetzung erfolgreich!</h4> Bitte logge dich nun mit deinem neuen Passwort ein.',
      loginExpired: '<h4><i class="icon fa fa-check"></i> Logindaten veraltet</h4> Bitte logge dich erneut ein.',
      username: 'Benutzername',
      pass: 'Passwort',
      email: 'Email',
      phone: 'Telefon',
      rememberMe: 'Login merken',

    },

    signup:{
      title: 'Registrierung',
      fullname: 'Vollständiger Name',
      username: 'Benutzername',
      pass: 'Passwort',
      passRepeat: 'Passwortwiederholung',
      email: 'Email',
      inviteCode: 'Gästecode',
      phone: 'Telefon',
      agreeTerm: ' Ich stimme den<a href="javascript:;">Bedingungen</a> zu',

    },

    forgotPass:{
      title: 'Passwort zurücksetzen',
      newPass: 'neues Passwort',
      email: 'Email',
      phone: 'Telefon',

    },


  },
  account:{
    id: '',
    title: 'Name',
    phone: 'Telefon',
    email: 'Email',
    money: 'Kontostand',
    username: 'Benutzername',
    desc: 'Desc',
    sexy: 'Geschlecht',
    pass: 'Passwort',
    passOld: 'Altes Passwort',
    passNew: 'Neues Passwort',
    passNewRepeat: 'Passwortwiederholung',

  },
  pri: {
    topbar:{
      dashboard: 'Startseite',
      materialPrice: 'Materialpreis',
      volunteer: 'Frewilligenchannel',
      donate: 'Spenden',
      monument: 'Monument',
      market: 'iEVE Markt',
      marketOnline: 'Online Markt',
      news: 'iEVE Neuigkeiten',
    },
    sidebar:{
      quickTable: 'Schnelltabelle',
      quickTablePaymentPlan: 'Payment Plan Schnelltabelle',
      quickTableOre: 'Erz Schnelltabelle',
      quickTableVesselDebris: 'Schifftrümmer Schnelltabelle',
      commonElement: 'Basiselement',
      calculator: 'Standard Rechner',
      advCal: 'Fortg. Rechner',
      skillPoint: 'Skillpunkterechner',
      planetary: 'Planetare Ressourcen Suche',
      shipBlueprintResearch: 'Ship Blueprint Reserach',
      ship: 'Schiffsbaurechner',
      equipment: 'Ausrüstungsrechner',
      drone: 'Drohnenbaurechner',
      building: 'Gebäudebaurechner',
      ore: 'Erzrechner',
      oreMix: 'Gemischte Erze Rechner',
      vesselDebris: 'Schiffstrümmerrechner',
      slavagedMaterials: 'Geborgene Materialien Rechner',
      rig: 'Verbesserungsbaurechner',
      shipConfig: 'Schiffskonfiguration',

      market: 'Markt',

      siteElement: 'Seitenelement',

      userCenter: 'Benutzerzentrum',
      userInfo: 'Benutzerinfo',
      changePass: 'Passwort ändern',
      bindPhone: 'Telefon verknüpfen',

      mShipConfig: 'Mein Schiff konfigurieren',
      myShipConfig: 'Mein Schiff konfigurieren',
      myShipConfigCategory: 'Schiffskonfiguration Kategorie',
      myShipConfigCollection: 'Favorisierte Schiffskonfiguration',
      myShipConfigLike: 'Begutachtete Schiffskonfiguration',

      myTopic: 'Mein Thema',
    },
    dashboard:{
      title: 'Dashboard',
      subTitle: 'All data for this app.',

      welcome: {
        title: 'Willkommen bei iEVE, der EVE Echoes Online-Tools Seite',
        subTitle: 'Hier findest du die EVE Echoes\'s Online-Tools.',        
        body: '<p class="text text-green">20200813 server is officially opened, I wish you all the best. We are improving various data, please see the development plan below for details</p><p>Many data updates need to be performed after the server is turned on, and our volunteers are ready.</p>',
      },

    },

    userCenter:{
      title: 'Benutzerzentrum',
      subTitle: 'Bearbeite Benutzerdaten hier',   
      basicTitle: 'Benutzerzentrum',
      basicSubTitle: 'Bearbeite Benutzerdaten hier',        
    },
    changePass:{
      title: 'Passwort ändern',
      subTitle: 'Ändere dein Passwort hier.',           
    },
    bindPhone:{
      title: 'Telefon verknüpfen',
      subTitle: 'Verknüpfe dein Telefon hier.',           
    },

    materialView:{
      title: 'Today\'s Material Price',
      subTitle: 'Here is the list of all basic materials\' price, this price will used in each calculator',
      usageTitle: 'Special Info',
      usageBody: '<ul><li>The price format like 999 / 20000, the 999 is market price(over the past week), the 20000 is system price</li><li>The market price will be a little higher, so that you can easily buy with this price from market</li><li>If the price is not correct for you, just change it in the Calculator</li><li>It\'s a personal project all data is manually entered, so if you find anything wrong, just report a bug. The bug report link is in the bottom footer, thx.</li></ul>',

      typeTitle:{
        t0: 'Erz',
        t1: 'Erzabbau',
        t2: 'Planeten',
        t3: 'Salvaged Material',
        t11: 'Trümmer',
        t21: 'Datenkern',
      },

      table:{
        title:{
          m_title: 'Title',
          m_isk_market: 'Marktpreis',
          m_isk_system: 'Systempreis',
          m_updateDate: 'Aktualisierungsdatum',
        }
      },
    },

    shipSelector:{
      config: {
        selectShip: 'Wähle Schiff',
        filteredShipCategory: 'Wähle Kategorie',
        filteredRaceType: 'Wähle Rasse',
      },
    },

    shipView:{
      title: 'Build Calculator',
      subTitle: 'Check all kind build elements here. Find out how many are missing.',
      usageTitle: 'Usage',
      usageBody: '<ul><li>We support 4 types now, try switching them!</li><li>FYI, you can only build items with the required Tech Level, so check your Tech Level first!!!</li><li>Select an item and set correct "Build Count", "Material Efficiency" and "Time Efficiency". The "Result" section will show you the required materials.</li><li>Type in how many minerals you have "In Hand" and you will get a "Still Needed" Material Count.</li><li>We use last week\'s average price for price calculations. The sum price for "still need" only includes the still needed items, if you don\'t need this item, the price will be 0 in the calculations.</li><li>"Ore Calculator" is a quick way to find how many ores can be processed into your still needed materials, try setting your correct "Ore Efficiency"</li><li>It\'s a personal project all data is manually entered, so if you find anything wrong, just report a bug. The bug report link is in the bottom footer, thx.</li><li><a href="https://www.bilibili.com/video/av80449531/" target="_blank">Operation Video in Chinese</a></li></ul>',
      config: {
        title: 'Parameter',
        selectItem0: 'Gegenstand',
        selectItem1: 'Schiff',
        selectItem11: 'Ausrüstung',
        selectItem51: 'Drohne',
        selectItem91: 'Gebäude',
        itemCategoryFilter: 'Kategorie',

        buildCnt: 'Anzahl',
        buildCostRate: 'Materialeffizienz',
        buildTimeRate: 'Zeiteffizienz',

        data:{
          i_isk_market: "Marktpreis",
          i_isk_system: "Systempreis",
          sb_isk_market: "Blaupause Marktpreis",
          sb_isk_system: "Blaupause Systempreis",
          sb_isk_build: "Kosten für den Bau",
          sb_techLvl: "Technologielevel",
          sb_time_build: "Zeit",
          mins: "Min.",
          sec: "Sek.",
        },
      },
      result:{
        title: 'Ergebnis',


        table:{
          title:{
            item: 'Material',
            inhand: 'Verfügbar(Support+-*/)',
            buildCost: 'Kosten für den Bau',
            stillNeed: 'Notwendig',
            percent: 'Verfügbar %',
            sum: 'Summe',
          },
          option:{
            showItemPrice: 'Show Detail Price',
            showSumPrice: 'Show Sum Price',
          }
        }
      },
      oreConfig: {
        title: 'Konfiguration Erzrechner',
        title_rate: 'Erzeffizienz',
        title_rate_small: 'Only need set following Ore Efficiency, other ores use the same efficiency',
        title_oreOpen: 'Ore constraints',
        title_oreOpen_small: 'Only calculates ores when set to "Yes" ',
      },
      oreResult:{
        title: 'Ergebnisse: Erze',
        title_small: 'Nutze Einfach- und Doppelklicks bei "Empfohlene Erze"',



        table:{
          title:{
            item: 'Name des Erzes',
            stillNeed: 'noch benötigt',
            oreSuggest: 'Empfohlene Erze',
          },
        }
      }

    },

    shipBRView:{
      title: 'Schiffblaupausenforschung',
      subTitle: 'Berechne die Materialkosten und die Erfolgsrate für die Erforschung von Blaupausen',

      usageTitle: 'Anleitung',
      usageBody: '<ul><li>Wähle eine Blaupause, um die notwendigen Materialien und die Erfolgsrate zu sehen</li></ul>',
      config: {
        title: 'Parameter',

        buildCnt: 'Anzahl Durchläufe',
        buildSuccessRate: 'Basiserfolgsrate',
        buildTimeRate: 'Zeiteffizienz',

        data:{
          r_isk_market: "Marktpreis",
          r_isk_system: "Systempreis",

          sb_isk_market: "Blaupause Marktpreis",
          sb_isk_system: "Blaupause Systempreis",
          s_isk_market: "Schiff Marktpreis",
          s_isk_system: "Schiff Systempreis",

          sbr_time_build: "Zeit",
          sbr_isk_build: "ISK Kosten",
          sbr_successRate: "Erfolgsrate",
        },
      },
      result:{
        title: 'Ergebnis',

        table:{
          title:{
            item: 'Material',
            inhand: 'Verfügbar',
            buildResult: 'Notwendig für den Bau',
            need: 'noch benötigt',
            percent: 'Verfügbar %',
            sum: 'Summe',
          },
          option:{
            showItemPrice: 'Anzeige detaillierter Preis',
            showSumPrice: 'Anzeige Summe',
          }
        }
      }
    },

    planetaryView:{
      title: 'Planetare Produktion',
      subTitle: 'Finde schnell und zielgerichtet einen Ort, wo die gesuchte planetare Ressource gefunden werden kann und berechne den Ertrag und den Wert dessen',
      usageTitle: 'Anleitung',
      usageBody: '<ul><li>All region data added, plz enjoy!</li><li>Select "Region"/"Constellation"/"Solar System"(one or all) and "Planetary Resource", click "Start Search" will get relatived Planetary Resource info</li><li>The result could be empty, so you have to change the condition if the result is empty.</li><li>"Mining Array" can help calculate one hour\'s output</li><li>"||| / 25.47 / 25.47" in Result means "Resource evaluation / Unit mining volume / Total mining volume"</li><li>We used last week\'s average price for price calcualte</li></ul>',
      config: {
        title: 'Parameter',
        selectRegion: 'Region',
        selectConstellation: 'Konstellation',
        selectSolarSystem: 'Solarsystem',
        selectPType: 'planetare Ressource ',
        startBtn: 'Suche starten',

        buildCnt: 'Bergbau-Array',
        buildTime: 'Zeit',
        showAllResult: 'Alle Ergebnisse',

        data:{
          o_isk_market: "Marktpreis",
          o_isk_system: "Systempreis",
          o_volumn: "Erzvolumen",
        },
      },
      result:{
        title: 'Result',
        emptyResultFound: 'Keine Ergebnisse! Bitte wähle etwas anderes aus.',
        dataContributor: 'Ergebisse von {regionTitle} wurden zur Verfügung gestellt von: {contributorTitle}. Danke!',

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
            item: 'planetare Ressource',
            sum: 'Gesamtwert',
          },
          option:{
            showItemPrice: 'Zeige Detailpreis',
            showSumPrice: 'Zeige Gesamtwert',
          }
        }
      }

    },

    oreView:{
      title: 'Berechnung Erze',
      subTitle: 'Berechne hier, wie viele Mineralien du aus deinen Erzen erhälst.',
      usageTitle: 'Anleitung',
      usageBody: '<ul><li>Select an Ore in "Config Params", and set correct "Ore Count" and "Material Efficiency". The "Result" will show the outputted mineral count.</li><li>"Asteroid belt" is the range where the ore can be found and "Safety level" is the range where the asteroid belt can be found.</li><li>"Ship Volume" is a special param used to calculate how much ore a ship can hold and does not affect the calculations if left blank.</li><li>The ore refining unit is 100, e.g. 199 will only refine 100, leaving 99 remaining.</li><li>Because of decimal points, you may get 1-2 calculated deviation in the result. For example if the result is 135, but in game it\'s 134</li><li>It\'s a personal project all data is manually entered, so if you find anything wrong, just report a bug. The bug report link is in the bottom footer, thx.</li><li><a href="https://www.bilibili.com/video/av80457729/" target="_blank">Operation Video in Chinese</a></li></ul>',
      config: {
        title: 'Parameter',
        selectOre: 'Wähle Erz ',
        buildCnt: 'Anzahl Erze',
        buildVolume: 'Erzfrachtraumgröße',
        buildCostRate: 'Materialeffizienz',

        data:{
          o_isk_market: "Marktpreis",
          o_isk_system: "Systempreis",
          o_volumn: "Erzvolumen",
          o_asteroidLv: 'Asteroidenlevel',
          o_safeLv: 'Sicherheitslevel',
        },
      },
      result:{
        title: 'Ergebnis',


        table:{
          title:{
            item: 'Mineral',
            target: 'Benötigt',
            buildResult: 'Bereits gesammelt',
            left: 'Noch benötigt',
            percent: 'Noch benötigt %',
            sum: 'Gesamtwert',
          },
          option:{
            showItemPrice: 'Zeige Detailpreis',
            showSumPrice: 'Zeige Gesamtwert',
          }
        }
      }

    },
    oreMixView:{
      title: 'Berechnung verschiedener Erze',
      subTitle: 'The new calculator for Mix Ore, Just Try It.',
      usageTitle: 'Anleitung',
      usageBody: '<ul><li> Click "+ New Ore" to add new a new ore and quantity</li><li>It\'s used for more than one ore type, useful for ships like the Retriever</li><li>The ore refining unit is 100, e.g. 199 will only refine 100, leaving 99 remaining.</li><li>Because of decimal points, you may get 1-2 calculated deviation in the result. For example if the result is 135, but in game it\'s 134</li><li>It\'s a personal project all data is manually entered, so if you find anything wrong, just report a bug. The bug report link is in the bottom footer, thx.</li></ul>',
      result:{
        title: 'Ergebnis',


        table:{
          title:{
            item: 'Mineral',
            target: 'Benötigt',
            buildResult: 'Bereits gesammelt',
            left: 'Noch benötigt',
            percent: 'Noch benötigt %',
            sum: 'Gesamtwert',
            cnt: 'Anzahl',
            rate: ' Effizienz',
            volume: 'Volumen',
          },
          option:{
            showItemPrice: 'Zeige Detailpreis',
            showSumPrice: 'Zeige Gesamtwert',
            addNewOre: '+ 1 Erzsorte',
          }
        }
      }

    },

    vesselDebrisView:{
      title: 'Schiffsrumpf und -trümmer Rechner',
      subTitle: 'Berechne den Ertrag beim Verwerten von Schiffsrümpfen und -trümmern',
      usageTitle: 'Anleitung',
      usageBody: '<ul><li>Select one Vessel Debris in "Config Params", and set correct "Vessel Count" and "Material Efficiency". The "Result" section will show the calculated Salvaged Material count.</li><li>The result is rounded, for example with a rate of 2.33: 1 Vessel Debris will output 2 Salvaged Materials, but 10 Vessel Debris will output 23. It\'s good idea to use more Vessel Debris at once.</li><li>The "Material Efficiency" will automatically update from "Select Skill".</li><li>"Target Count", "Still Needed" and "Still Needed Rate" are used for quick calculations.</li><li>It\'s a personal project all data is manually entered, so if you find anything wrong, just report a bug. The bug report link is in the bottom footer, thx.</li><li><a href="https://www.bilibili.com/video/av80457780/" target="_blank">Operation Video in Chinese</a></li></ul>',
      config: {
        title: 'Parameter',
        selectVesselDebris: 'Wähle Trümmer',
        buildCnt: 'Anzahl',
        buildCostRate: 'Materialeffizienz',
        selectSkill: 'Wähle Skilllevel',

        data:{
          vd_isk_market: "Makrtpreis",
          vd_isk_system: "Systempreis",
        },
      },
      result:{
        title: 'Ergebnis',


        table:{
          title:{
            item: 'Salvaged Material',
            target: 'Benötigt',
            buildResult: 'Erhalten',
            left: 'noch benötigt',
            percent: 'noch benötigt %',
            sum: 'Gesamtwert',
          },

          option:{
            showItemPrice: 'Zeige Detailpreis',
            showSumPrice: 'Zeige Gesamtwert,
          }
        }
      }

    },

    slavagedMaterialView:{
      title: 'Geborgene Materialien Suche',
      subTitle: 'Finde schnell heraus, aus welchen Schiffstrümmern die benötigten Materialien geborgen werden können',
      usageTitle: 'Anleitung',
      usageBody: '<ul><li>Wähle ein geborgenes Material aus und die Schiffstrümmer, welche die benötigten Materialien beinhalten, werden angezeigt. Materialeffizienz aus dem gewählten Skill wird mit einberechnet.</li><li>Die hier genutzten Daten werden manuell eingegeben. Daher kann es immer wieder zu Fehlern kommen. Fehler bitte bei uns melden. Danke.</li></ul>',
      config: {
        title: 'Parameter',
        selectVesselDebris: 'Geborgene Materialien',
        buildCostRate: 'Materialeffizienz',
        selectSkill: 'Wähle Skill',

        data:{
          isk_market: "Marktpreis",
          isk_system: "Systempreis",
        },
      },
      result:{
        title: 'Ergebnis',


        table:{
          title:{
            item: 'Schiffstrümmer',
          },

          option:{
            showItemPrice: 'Zeige Detailpreis',
          }
        }
      }

    },

    rigSelector:{
      config: {
        selectRig: 'Wähle Verbesserung',
        filteredRigCategory: 'Wähle Kategorie',
      },
    },

    rigView:{
      title: 'Verbesserungsbaurechner',
      subTitle: 'Hier kannst du ausrechnen lassen, was Verbesserungen in der Herstellung kosten.',

      usageTitle: 'Anleitung',
      usageBody: '<ul><li>Die Herstellung von Verbesserungen ist nur mit dem entsprechenden Techlevel möglich. Prüfe daher zunächst dein Techlevel!</li><li>Die hier genutzten Daten werden manuell eingegeben. Daher kann es immer wieder zu Fehlern kommen. Fehler bitte bei uns melden. Danke.</li></ul>',
      config: {
        title: 'Parameter',
        selectRig: 'Wähle Verbesserung',
        buildCnt: 'Anzahl',
        buildCostRate: 'Materialeffizienz',
        buildTimeRate: 'Zeiteffizienz',

        data:{
          r_isk_market: "Marktpreis",
          r_isk_system: "Systempreis",

          rb_techLvl: "Techlevel",
          rb_isk_build: "Herstellungskosten",
          rb_time_build: "Herstellungszeit",
          rb_isk_market: "Blaupausen Marktpreis",
          rb_isk_system: "Blaupausen Systempreis",
        },
      },
      result:{
        title: 'Ergebnisse',

        table:{
          title:{
            item: 'Geborgene Materialien',
            inhand: 'Verfügbar',
            buildResult: 'Herstellungskosten',
            need: 'Noch benötigt',
            percent: 'Verfügbar %',
            sum: 'Summe',
          },
          option:{
            showItemPrice: 'Zeige Detailpreis',
            showSumPrice: 'Zeige Gesamtwert',
          }
        }
      }
    },

    skillPointView:{
      title: 'Skillpunkterechner',
      subTitle: 'Berechne,wie viel Zeit du noch bis zum nächsten Techlevel benötigst.',

      usageTitle: 'Anleitung',
      usageBody: '<ul><li>Set your "Start Points" and your "Target Points" in the "Config Params" section, the time required will be displayed in the "Result" section.</li><li>Selecting a "Tech Level" will automatically set "Target Points"</li><li>"Get Point" is your rate of Skill Points per minute, "Time Efficiency" is a percentage of "Get Point"</li><li>"Extra Points" is for extra skill points per day. This value will attach to "Points per min", then be used in the calculation</li><li>Tech Level data collected by the volunteer "Fish Lord" in our Volunteer Group, thx for him. If you find anything wrong, just report a bug using the link in the footer.</li></ul>',
      config: {
        title: 'Parameter',
        selectSkill: 'Techlevel',
        startSkillPoint: 'Startpunkte',
        endSkillPoint: 'Zielpunkte',
        min: 'Minuten',
        day: 'Tage',

        skillMinPoint: 'Punkte pro Minute',
        skillTimeRate: 'Time Efficiency',
        skillDailyPoint: 'Extrapunkte',
      },
      result:{
        title: 'Ergebnisse',
        needPoint: 'Gesamtpunkte',
        finallyMinPoint: 'Gesamtpunkte pro Minute',
        needMin: 'Minuten',
        needHour: 'Stunden',
        needDay: 'Tage',

      }
    },

    shipConfigView:{
      title: '[Beta]Schiffskonfiguration',
      subTitle: 'Pane deine Schiffskonfiguration und teile sie mit anderen.',
      usageTitle: 'Anleitung',
      bodyText: '<ul><li>After 3 months, this version was finally completed. The current version has integrated some data from the public test. Here are some functional descriptions: </li><li>Completed content: <ol><li>View ship properties</li><li>View equipment properties</li><li>View rig properties</li><li>View drone properties</li><li>Save ship config plan</li><li>Manage ship config plan</li><li>Share ship config plan via url</li></ol></li><li>Unfinished content: <ol><li>Skills not add, it will be added after the server is opened</li><li>The formula calculation is not accurate. Considering the subsequent modification, we will start to improve it 1 month after the server is opened</li><li>Equipment Active, via formula adjust</li></ol></li> <li>Our ultimate goal is to complete the ship config on web page. Open the URL and you can see the ship config plan and everyone\'s discussion, so that newbie players can easily copy and use, company/team players can easily communicate and unified configuration , and let the master players enjoy it</li><li>English Translate are still under going, will finish it ASAP.</li></ul>',
      config: {
        title : 'Parameter',
        btn : {
          showEditoForm: 'Attribute bearbeiten',
          showItemDetail: 'Zeige alle Details',
          collect: 'Favoriten',
          save: 'Speichern',
          reset: 'Zurücksetzen',
        },
        form: {
          categoryId: 'Kategorie',
          desc: 'Beschreibung',
          shortDesc: 'Kurzbeschreibung',
        },
      },

      msg:{
        saved: 'gespeichert!',
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
        title: 'Skill einberechnen',
        small: '[DERZEIT NICHT IN NUTZUNG] Wähle einen Skill aus um die Werte zu beeinflussen.',

        newBtn: '+ Neuer Skill',
      },

      condition:{
        title: 'Parameter',
        small: '[DERZEIT NICHT IN NUTZUNG] Andere Parameter werden die Werte beeiflussen',

        newBtn: '+ Neuer Parameter',
      },


      resultBox: {
        topInfo: {
          powergrid: 'Stromnetz',
          capa_cargo: 'Frachtraumgröße',
          capa_ore: 'Erzfrachtraumgröße',
          capa_logistics: 'Logistikfrachtraumgröße',

          skillBonus: 'Skill Bonus',
          specialBonus: 'Spezialbonus',
        },
        attack: {
          title: 'Angriff',
          missile: 'Lenkwaffen',
          battery: 'Geschütze',
          drone: 'Drohnen',
          mining: 'Bergbau',
        },
        defense: {
          title: 'Verteidigung',
          shield:'Schild',
          armor:'Panzerung',
          structure:'Struktur',
        },
        capacity: {
          title: 'Energiespeicher',
          hcsj: 'Aufladezeit',
          zdhc: 'Maximalenergie',
        }, 
        radar: {
          title: 'Radar',

          target: 'Max. Ziele',
          signatureRadius: 'Signaturradius',
          scanResolution: 'Auflösung',
          induction: 'Induktion',
        }, 
        navigation: {
          title: 'Navigation',
          warpAgainst: 'Warp Against',
          warpSpeed: 'Warpgeschwindigkeit',
          inertiaModifier: 'Trägheitsmodifikator',
          mass: 'Masse',
        }, 
        price: {
          title: 'Preis',
          ship: 'Schiff',
        }, 

      },

    },

    shipConfigShareFormModal:{
      title: 'Zeige Link zum teilen'

    },


    volunteerView:{
      title: '[Recruiting]Volunteer Team',
      subTitle: 'Join our team, do something good for iEVE, do something good for all EVE players',
      plan:{
        title: 'Volunteer Plan',
        subTitle: 'Join Us Do Better Things',
        bodyText:'<p>For english users, we are looking for translators, do things like check typo on iEVE and do special translate later, if you find any typo just report a bug thx. </p><p>You are also welcome to help us share the iEVE website to english users, to be honest, we dont\'t know how to promote in english, thx again. </p>',
      },
      vtLinkText: '>>> Volunteer List <<<',
    },

    donateView:{
      title: 'Spende für iEVE',
      subTitle: 'Deine Spende macht iEVE besser!',
      topbar:{
        title: 'Erläuterung',
        subTitle: '',
        bodyText:'<p>iEVE is a free charity project, donations can make it a more stable operation. Here you can join the team that supports iEVE, I believe it will be better if you support it!</p><p>Currently we support in-game donations and cash donations, voluntary donations are not forced, and minors’ donations are rejected.</p><p>In-game donations are very encouraged. Our data volunteers work very hard, and they sacrifice a lot of private time to improve the data. We hope that players in the community can express their affirmation and gratitude to them through in-game donations.</p>',
        donateLinkText: '>>> Liste der Spender <<<',
      },
      inGame:{
        title: 'In-Game Spenden',
        subTitle: 'Spenden direkt im Spiel',
        bodyText:'<p>Just make a contact to <span class=\'text-green\'>ieve</span> then we will get your donation(ISK, Plex, Equipment), the role name is <span class=\'text-green\'>ieve</span> No capital, no sign, no spaces!!</p><p>Will accept contract regularly at 1:00 and 13:00 UTC every day, also will confirm it when I see it at other times</p><p>Your donation will be given to volunteers who provide services for iEVE free of charge. I believe they will feel warm with every donation!</p>',
      },
      paypal:{
        title: 'PayPal Spende',
        subTitle: 'Spende mittels PayPal',
        bodyText:'<p>The PayPal Link: <a href=\'https://www.paypal.me/xinhualee\' target="_blank" >https://www.paypal.me/XinHuaLee</a></p><p>Your donation will be used to pay for iEVE\'s operating expenses</p>',
      },
      alipay:{
        title: 'Alipay Spende',
        subTitle: 'QR für Chinesen',
        bodyText:'<p><img src="./statics/pics/alipay_qr.jpg" /></p><p>Your donation will be used to pay for iEVE\'s operating expenses</p>',
      },
      wechat:{
        title: 'Wechat Spende',
        subTitle: 'QR für Chinesen',
        bodyText:'<p><img src="./statics/pics/wechat_qr.jpg" /></p><p>Your donation will be used to pay for iEVE\'s operating expenses</p>',
      },
    },

    monumentView:{
      title: 'Monument',
      subTitle: 'iEVE would not be better without you.',
      topbar:{
        title: 'Explanation',
        subTitle: '',
        bodyText:'<ul><li>I want to remember everyone who has helped iEVE.</li><li>All manual data, if you have anything wrong, please contact me.</li><li>Show data as default option, if you want to hide your data please contact me, thank you.</li></ul>',
      },
      typeTitle:{
        t1: 'Special Thx',
        t11: 'Volunteer',
        t21: 'Donor',
      },
      table:{
        title:{
          title: 'Name',
          desc: 'Short Desc',
          p_minusCnt: 'Total minutes contributed',
          p_startDate: 'Join Date',
          p_donateAmount: 'Total donation',
          p_donateDate: 'Donate Date',
        },
      },
    },

    quickTableOreView:{
      title: 'Erze Schnelltabelle',
      subTitle: 'Finde schnell die Erzausstoß heraus.',
      bodyText: '',

      oreConfig: {
        title: 'Parameter',
        title_rate: 'Erzeffizienz',
        title_rate_small: 'Only need set following Ore Efficiency, other ores use the same efficiency',
        title_oreOpen: 'Einschränkungen',
        title_oreOpen_small: 'Nur Erze auf "Ja" werden einberechnet. ',
        otherConfig:{
          title: 'Andrere Parameter',
          title_small: 'Stelle hier andere Parameter ein',
          showType: {
            title: 'Zeige Typ',
            unit: 'mit 1 Einheit',
            volume: 'mit 1 Volumen',
          }, 
        }
      },

      table:{
        title:{
          o_title: 'Titel',
          o_volumn: 'Volumen',
          o_asteroidLv: 'Asteroidenlevel',
          o_safeLv: 'Sicherheitslevel',
          o_: '',
        }
      },
    },

    quickTableVesselDebrisView:{
      title: 'Schiffstrümmer Schnelltabelle',
      subTitle: 'Finde schnell Schiffstrümmerausstoß heraus.',
      bodyText: '',

      config: {
        title: 'Parameter',
        buildCostRate: 'Materaleffizienz',
        selectSkill: 'Wähle Skill',
        race: {
          title: 'Wähle Rasse',
          title_small: 'Es werden nur die Materialien angezeigt, dessen Rasse auf "Ja" steht. ',
        },
      },

      table:{
        title:{
          vd_title: 'Titel',
        }
      },
    },

    quickTablePaymentPlanView:{
      title: 'Zahlungsplan Schnelltabelle',
      subTitle: 'Finde schnell einen Zahlungsplan',
      bodyText: '',

      config: {
        title: 'Parameter',
        resultUnit: 'Ergebnisse',
      },

      table:{
        title:{
          techLv_title: 'Techlevel',
          pointPerMin: ' SP/Min',
        }, 
        data:{
          firstMonthFee: 'Kosten erster Monat',
          secondMonthFee: 'Kosten zweiter Monat',
          fourMonthFee: 'Kosten vier Monate',
          firstYearFee: 'Kosten erstes Jahr',
        }
      },
      tableEx:{
        title:{
          ex_title: 'SP/Min',
          ex_body: 'Beschreibung',
          
        }, 
        data:{
          pointPerMin: ' SP/Min',
          m_30_body: 'Alpha',
          m_35_body: 'Omega 5',
          m_40_body: 'Omega 5 + Book I(€1.99)',
          m_45_body: 'Omega 5 + Book I(€1.99) + Book II(€5.99)',
          m_50_body: 'Omega 5 + Book I(€1.99) + Book II(€5.99) + Book III(€29.99)',
          m_60_body: 'Omega 25 + Book I(€1.99)',
          m_65_body: 'Omega 25 + Book I(€1.99) + Book II(€5.99)',
          m_70_body: 'Omega 5 + Omega 25 + Book I(€1.99) + Book II(€5.99)',
          m_75_body: 'Omega 5 + Omega 25 + Book I(€1.99) + Book II(€5.99) + Book III(€29.99)',
        }
      },
    },

    newsView:{
      title: 'iEVE News',
      subTitle: 'Official Announcement, Gossip, Legion Recruitment, Rich Player\'s AD, all in iEVE News',
    },

    marketView:{
      title: 'iEVE Markt',
      subTitle: 'Not easy to make deals online? Using our iEVE Market, just leave message on the board, you will get contact soon. Fast, efficient, open, transparent!',
    },

    onlineMarketView:{
      title: '[Alpha]Online Markt',
      subTitle: 'See market info one web, no need to open the game. Quick, Easy, Simple',

    },
    onlineMarketDetailModal:{
      title:{
        buy : 'Käufer',
        sell : 'Verkäufer',
        history : 'frühere Preise',
      },
      buy:{
        title:{
          regionTitle: 'Region',
          amount: 'Summe',
          price: 'Preis',
          location: 'Standort',
          expiredAt: 'Läuft ab am',
          updateAt: 'Update am',
        }
      },
      sell:{
        title:{
          regionTitle: 'Region',
          amount: 'Summe',
          price: 'Preis',
          location: 'Standort',
          expiredAt: 'Läuft ab am',
          updateAt: 'Update am',
        }
      },
      history:{
        zoom: {
          title: 'Schnellauswahl',
          oneW: '1 Woche',
          oneM: '1 Monat',
          threeM: '3 Monate',
          sixM: '6 Monate',
          ytd: 'YTD',
          oneY: '1 Jahr',
          all: 'Alle',
        },
        series:{
          dailyAveragePrice: 'Täglicher Durchschnittspreis',
          minMax: 'Max/Min Preis',
          moving5: '5 Tage Durchschnittspreis',
          moving20: '20 Tage Durchschnittspreis',
          donchain: 'Preiskorridor',
          volume: 'Verkaufsvolumen',
          orderCount: 'Bestellanzahl',
          volumePerOrder: 'Einzelner Bestellpreis',
        }
      },

    },


    myShipConfigCategoryView:{
      title: 'Meine Schiffskonfiguration Kategorie',
      subTitle: 'Bearbeite meine Schiffskonfiguration Kategorie',
      table:{
        title:{         
          scc_title: 'Titel',
          scc_desc: 'Beschreibung',
        }
      }
    },
    shipConfigCategoryView:{
      modal:{
        title: 'Titel',
        desc: 'Beschreibung',
      },
    },
    myShipConfigView:{
      title: 'Meine Schiffkonfiguration',
      subTitle: 'Bearbeite meine Schiffkonfiguration',
      table:{
        title:{         
          s_title: 'Schiff Titel',
          scc_title: 'Kategorie',
          sc_shortDesc: 'Kurzbeschreibung',
          sc_creationDate: 'Erstellungsdatum',
          sc_updateDate: 'Update Datum',
        }
      }
    },
    myShipConfigCollectionView:{
      title: 'Favorisierte Schiffskonfiguration',
      subTitle: 'Bearbeite favorisierte Schiffskonfiguration',
      table:{
        title:{         
          s_title: 'Schiff Titel',
          scc_title: 'Kategorie',
          sc_shortDesc: 'Kurzbeschreibung',
          sc_creationDate: 'Erstellungsdatum',
          sc_updateDate: 'Update Datum',
        }
      }
    },
    myShipConfigLikeView:{
      title: 'Eingesehene Schiffskonfiguration',
      subTitle: 'Bearbeite eingesehene Schiffskonfiguration',
      table:{
        title:{         
          s_title: 'Schiff Titel',
          scl_type_id: 'Typ',
          scc_title: 'Kategorie',
          sc_shortDesc: 'Kurzbeschreibung',
          sc_creationDate: 'Erstellungsdatum',
          sc_updateDate: 'Update Datum',
        }
      }
    },


    myTopicListView:{
      title: 'Meine Themenliste',
      subTitle: 'Bearbeite publizierte Themen',
      modal:{
        t_type_id: 'Typ',
        t_cnt_publishDay: 'Anzeigetage hinzufügen',
        t_cnt_publishDay_hint: 'Nicht genügend Guthaben. Bitte aufladen.',
        costPrice: 'Kosten für einen weiteren Tag',
        accountBalance: 'Guthaben',
        t_title: 'Titel',
        t_title_hint: 'Titel ist leer oder hat mehr als 45 Zeichen',
        t_shortDesc: 'Kurzbeschreibung',
        t_shortDesc_hint: 'Kurzbeschreibung ist leer oder hat mehr als 100 Zeichen',
        t_desc: 'Inhalt',
        t_desc_hint: 'Inhalt ist leer oder hat mehr als 1000 Zeichen',
      },
      table:{
        title:{         
          t_id: 'ID',
          t_type_id: 'Typ',
          t_title: 'Titel',
          t_shortDesc: 'Kurzbeschreibung',
          t_startDate: 'Zeige Startdatum',
          t_endDate: 'Zeige Enddatum',
          t_creationDate: 'Erstellungsdatum',
          t_updateDate: 'Update Datum',
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