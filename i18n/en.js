const messages =  {
  '|':'|',
  common:{
    title: '<b>i</b>EVE Echoes',
    titleShort: '<b>i</b>EVE',
    login: 'Login',
    signup: 'Register',
    forgotPass: 'Forgot Password',
    resetPass: 'Reset Pass',
    backIndexPage: 'Back to Index',

    smsCode: 'SMS Code',
    sendSms: 'Send SMS',
    sendEmailCode: 'Send Code',
    emailCode: 'Email Code',
    captcha: 'Captcha',
    create: 'Create',
    update: 'Edit',
    view: 'View',
    delete: 'Delete',
    op: 'Operate',
    id: 'ID',

    costCurrency: 'ISK',
    costCharge: '<span>Currently, the test phase is by invitation only. The cost of publishing information is set to an extremely low amount and it will be restored to normal afterwards. Invited accounts are gifted some ISK for the testing purpose.</span><br/><span>In order to prevent spams, a certain amount of ISK will be charged for the message posted, and it cannot be posted if the balance is insufficient</span><br/><span>[NOT IMPLEMENTED YET]Recharge method: send ISK via contract to ieve in the game, add `ieve-Your ieve website account Name`(for me it\'s ieve-DP, your registered account name on the ieve website is very important!!!) in desc part, will recharge the account after received the contract</span><br/><span>It is prohibited to post politics, personal insults, RMT and other inappropriate content. Such post will be deleted without refund. Future violation will lead to account ban without refund.</span>',

    newElement:{
      title: 'Title',
      desc: 'Desc'
    },

    status:{
      save_0: '',
      save_1: '<span class="text-yellow">Saving .... </span>',
      save_9: '<span class="text-red">Failed! </span>',
      save_100: '<span class="text-green">Succeed! </span>',
    },
  },

  title:{
    corp: ' Corporation',
  },

  corp:{
    scoreTitle: 'ip',
    role:{
      cm_role_1: 'CEO',
      cm_role_10: 'Administrator',
      cm_role_20: 'Fleet Commander',
      cm_role_100: 'Fleet Member',
    },
    memberStatus:{
      cm_status_1: 'Applied',
      cm_status_9: 'Rejected',
      cm_status_100: 'Accepted',
    },
    memberScoreType:{
      cmsl_type_1: 'Admin-Adjust',
      cmsl_type_5: 'Admin-Transfer',
      cmsl_type_7: 'Admin-Order',
      cmsl_type_21: 'Corp Event',
      cmsl_type_61: 'Outgoing Transfer',
      cmsl_type_63: 'Incoming Transfer',
      cmsl_type_65: 'Order',
    },
    eventType:{
      ce_type_1: 'PVE',
      ce_type_31: 'PVP',
      ce_type_71: 'Indy',
      ce_type_91: 'Others',
    },
    eventStatus:{
      ce_status_1: 'Draft',
      ce_status_5: 'Hidden',
      ce_status_9: 'Wait for approve',
      ce_status_11: 'Approved',
      ce_status_100: 'Done',
    },
    getMethod:{
      getMethod_1 : 'Credits',
      getMethod_11 : 'ISK',
    },
    cecmStatus:{
      status_1 : 'Incompleted',
      status_100 : 'Completed',
    },
  },

  time:{
    year: "Year",
    month: "Month",
    day: "Day",
    hour: "Hour",
    min: "Min",
    sec: "Sec",
  },

  datasource:{
    demo: 'Demo Data',
    d201912: '201912 Test Data',
    d202007: '202007 Test Data',
    d202008: '202008 Data',
    d202106: '202006 Vxxxx Data',
  },

  btn:{
    new: 'New',
    save: 'Save',
    edit: 'Edit',
    cancel: 'Cancel',
    close: 'Close',
    newLink: 'New Link',
    refresh: 'Refresh',
  },

  status:{

  },
  type:{
    partner: {
      person: 'Person',
      company: 'Company'
    },
    sexy: {
      male: 'Male',
      female: 'Female',
    },
    yon: {
      yes: 'Yes',
      no: 'No',
    },

    ship:{
      frigate: 'Frigate',
      destroyer: 'Destroyer',
      cruiser: 'Cruiser',
      battlecruiser: 'Battle Cruiser',
      battleship: 'BatteShip',
      carrier: 'Carrier',
      industrial: 'Industrial',
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
      t_1: 'UP',
      t_9: 'DOWN',
    },

    slotType:{
      low: 'Low Slot',
      mid: 'Mid Slot',
      high: 'High Slot',

      drone: 'Drone Slot',


      rig_p: 'Combat Rigs',
      rig_m: 'Engineering Rigs',
    },

    weapon:{
      missile: {
        title: 'Missile Launchers',
        qd: 'Small Missile Launcher',
        hj: 'Small Torpedo Launcher',
        qk: 'Medium Rapid Missile Launcher',
        zd: 'Medium Missile Launcher',
        zg: 'Medium Torpedo Launcher',
        zk: 'Large Rapid Missile Launcher',
        xh: 'Large Missile Launcher',
        yl: 'Large Torpedo Launcher',
      },
      hunhe: {
        title: 'Railguns',
        cigui:{
          s: 'Small Rifled Railgun',
          m: 'Medium Rifled Railgun',
          l: 'Large Rifled Railgun',
          xl: 'Extra Large Rifled Railgun',
        },
        jisu:{
          s: 'Small Snubnosed Railgun',
          m: 'Medium Snubnosed Railgun',
          l: 'Large Snubnosed Railgun',
          xl: 'Extra Large Snubnosed Railgun',
        }
      },
      power: {
        title: 'Energy Turrets',
        mcjg:{
          s: 'Small Pulse Laser',
          m: 'Medium Pulse Laser',
          l: 'Large Pulse Laser',
          xl: 'Extra Large Pulse Laser',
        },
        jsjg:{
          s: 'Small Beam Laser',
          m: 'Medium Beam Laser',
          l: 'Large Beam Laser',
          xl: 'Extra Large Beam Laser',
        }
      },
      tanshe: {
        title: 'Projectile Turrets',
        zdjn:{
          s: 'Small Autocannon',
          m: 'Medium Autocannon',
          l: 'Large Autocannon',
          xl: 'Extra Large Autocannon',
        },
        ld:{
          s: 'Small Strike Cannon',
          m: 'Medium Strike Cannon',
          l: 'Large Strike Cannon',
          xl: 'Extra Large Strike Cannon',
        }
      },
      mining: {
        title: 'Harvest Equipment',
        ckjg:'Mining Laser',
        ltck:'Strip Miner',
      },
      liejie: {
        title: 'Decomposer',
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
        title: 'Small Drone '
      },
      m: { 
        title: 'Medium Drone '
      },
      l: { 
        title: 'Large Drone '
      },
      sen: { 
        title: 'Sentry Drone '
      },
    },

    slotMid:{
      ewar: {
        title: 'E-War',
        tzcr:'Stasis Webifier',
        tzbz:'Stasis Grappler',
        yqrd:'Warp Disruptor',
        yqrp:'Warp Scrambler',
      },
      ln: {
        title: 'Energy Nosferatu',
        s: 'Small Energy Nosferatu',
        m: 'Medium Energy Nosferatu',
        l: 'Large Energy Nosferatu',
        xl: 'Extra Large Energy Nosferatu',
      },
      nlzh: {
        title: 'Energy Neutralizer',
        s: 'Small Energy Neutralizer',
        m: 'Medium Energy Neutralizer',
        l: 'Large Energy Neutralizer',
        xl: 'Extra Large Energy Neutralizer',
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
        title: 'Group Shield Booster',
        s: 'Small Group Shield Booster',
        m: 'Medium Group Shield Booster',
        l: 'Large Group Shield Booster',
        xl: 'Extra Large Group Shield Booster',
      },
      qtzjwx: {
        title: 'Group Armor Repairer',
        s: 'Small Group Armor Repairer',
        m: 'Medium Group Armor Repairer',
        l: 'Large Group Armor Repairer',
        xl: 'Extra Large Group Armor Repairer',
      },
      hdlc: {
        title: 'Shield Field Module',
        s: 'Small Shield Field Module',
        m: 'Medium Shield Field Module',
        l: 'Large Shield Field Module',
        xl: 'Extra Large Shield Field Module',
      },
      zjlj: {
        title: 'Armor Link Module',
        s: 'Small Armor Link Module',
        m: 'Medium Armor Link Module',
        l: 'Large Armor Link Module',
        xl: 'Extra Large Armor Link Module',
      },
      ycdrcs: {
        title: 'Remote Capacitor Transmitter',
        s: 'Small Remote Capacitor Transmitter',
        m: 'Medium Remote Capacitor Transmitter',
        l: 'Large Remote Capacitor Transmitter',
        xl: 'Extra Large Remote Capacitor Transmitter',
      },
      qtdrcs: {
        title: 'Group Capacitor Transmitter',
        s: 'Small Group Capacitor Transmitter',
        m: 'Medium Group Capacitor Transmitter',
        l: 'Large Group Capacitor Transmitter',
        xl: 'Extra Large Group Capacitor Transmitter',
      },
    },

    slotLow:{



      drqdc: {
        title: 'Capacitor Battery',
        s: 'Small Capacitor Battery',
        m: 'Medium Capacitor Battery',
        l: 'Large Capacitor Battery',
        xl: 'Extra Large Capacitor Battery',
      },
      hdzq: {
        title: 'Shield Hardener',
        fys:'Reactive Shield Hardener',
        zsy:'Adaptive Invulnerability Field',
      },
      hdkz: {
        title: 'Shield Extender',
        s: 'Small Shield Extender',
        m: 'Medium Shield Extender',
        l: 'Large Shield Extender',
        xl: 'Extra Large Shield Extender',
      },
      hdhc: {
        title: 'Shield Booster',
        s: 'Small Shield Booster',
        m: 'Medium Shield Booster',
        l: 'Large Shield Booster',
        xl: 'Extra Large Shield Booster',
      },
      zjzq: {
        title: 'Armor Hardener',
        fys:'Reactive Armor Hardener',
        zsy:'Adaptive Armor Hardener',
      },
      zjb: {
        title: 'Reinforced Steel Plate',
        s100: '100mm Reinforced Steel Plate',
        s200: '200mm Reinforced Steel Plate',
        m400: '400mm Reinforced Steel Plate',
        m800: '800mm Reinforced Steel Plate',
        l1600: '1600mm Reinforced Steel Plate',

      },
      zjwx: {
        title: 'Armor Repairer',
        s: 'Small Armor Repairer',
        m: 'Medium Armor Repairer',
        l: 'Large Armor Repairer',
        xl: 'Extra Large Armor Repairer',
      },
      jgwx: {
        title: 'Hull Repairer',
        s: 'Small Hull Repairer',
        m: 'Medium Hull Repairer',
        l: 'Large Hull Repairer',
        xl: 'Extra Large Hull Repairer',
      },
      sskz: {
        title: 'Damage Control',
        sskz:'Damage Control',
      },
      tjqgl: {
        title: 'Thruster Upgrade',
        gxwd:'Inertial Stabilizer',
        yqwd:'Warp Core Stabilizer',
      },
      jlrs: {
        title: 'Afterburner',
        s: 'Small Afterburner',
        m: 'Medium Afterburner',
        l: 'Large Afterburner',
        xl: 'Extra Large Afterburner',
      },
      wxyqtj: {
        title: 'Microwarpdrive',
        s: 'Small Microwarpdrive',
        m: 'Medium Microwarpdrive',
        l: 'Large Microwarpdrive',
        xl: 'Extra Large Microwarpdrive',
      },
      yszb: {
        title: 'Cloaking',
        yxzz:'Cloaking Device',
        ymxd:'Covert Ops Cloaking Device',
      },
      wqsj: {
        title: 'Weapon Upgrade',
        src: 'Heat Sink',
        ccwd: 'Magnetic Field Stabilizer',
        hzwd: 'Gyrostabilizer',
        hlzwd: 'Macro Particle Stabilizer',
        ddkz: 'Ballistic Control System',
        ddzd: 'Missile Guidance Computer',
        sdjsj: 'Tracking Computer',
        wrjshzx: 'Drone Damage Amplifier',
        wrjdh: 'Drone Navigation Computer',
        qfwsd: 'Omnidirectional Tracking Link',
      },
    },

    rig_p: {
      wqzq:{
        title: 'Weapon Rig',
        hhwq: 'Railgun Rig',
        ljwq: 'Decomposer Rig',
        nlwq: 'Laser Rig',
        tswq: 'Cannon Rig',
        missile: 'Missile Rig',
        drone: 'Drone Rig',
      },
      fyzq:{
        title: 'Defense Rig',
        hd: 'Shield Rig',
        zj: 'Armor Rig',
        jg: 'Structure Rig',
      },
    },

    rig_m: {
      navigate:{
        title: 'Navigation Rig',
      },
      gongcheng:{
        title: 'Engineering Rig',
      },
      electoric:{
        title: 'Electronic Rig',
      },
      industry:{
        title: 'Industrial Rig',
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
    o_hzs:'Dark Ochre',
    o_pmy:'Gneiss',
    o_kljs:'Crokite',
    o_sdts:'Bistot',
    o_akly:'Arkonor',
    o_jfdy:'Mercoxit',
  },

  debris:{
    t_1 : 'Mordu\'s Legion Ship Debris',
    t_2 : 'Serpentis Ship Debris',
    t_3 : 'Angel Ship Debris',
    t_4 : 'Sansha Ship Debris',
    t_5 : 'Guristas Ship Debris',
    t_6 : 'SOE Ship Debris',
    t_7 : 'Blood Raider Ship Debris',
    t_11  : 'YanJung Ship Debris',

    t_21  : 'Small Damaged ORE Hull Ship Debris',
    t_22  : 'Medium Damaged ORE Hull Ship Debris',
    t_23  : 'Large Damaged ORE Hull Ship Debris',

    t_31  : 'Small Damaged InterBus Hull',
    t_32  : 'Medium Damaged InterBus Hull',
    t_33  : 'Large Damaged InterBus Hull',


    t_104 : 'Lv.4 Amarr Ship Debris',
    t_105 : 'Lv.5 Amarr Ship Debris',
    t_106 : 'Lv.6 Amarr Ship Debris',
    t_107 : 'Lv.7 Amarr Ship Debris',
    t_108 : 'Lv.8 Amarr Ship Debris',
    t_109 : 'Lv.9 Amarr Ship Debris',
    t_110 : 'Lv.10 Amarr Ship Debris',

    t_204 : 'Lv.4 Caldari Ship Debris',
    t_205 : 'Lv.5 Caldari Ship Debris',
    t_206 : 'Lv.6 Caldari Ship Debris',
    t_207 : 'Lv.7 Caldari Ship Debris',
    t_208 : 'Lv.8 Caldari Ship Debris',
    t_209 : 'Lv.9 Caldari Ship Debris',
    t_210 : 'Lv.10 Caldari Ship Debris',

    t_304 : 'Lv.4 Gallente Ship Debris',
    t_305 : 'Lv.5 Gallente Ship Debris',
    t_306 : 'Lv.6 Gallente Ship Debris',
    t_307 : 'Lv.7 Gallente Ship Debris',
    t_308 : 'Lv.8 Gallente Ship Debris',
    t_309 : 'Lv.9 Gallente Ship Debris',
    t_310 : 'Lv.10 Gallente Ship Debris',

    t_404 : 'Lv.4 Minmatar Ship Debris',
    t_405 : 'Lv.5 Minmatar Ship Debris',
    t_406 : 'Lv.6 Minmatar Ship Debris',
    t_407 : 'Lv.7 Minmatar Ship Debris',
    t_408 : 'Lv.8 Minmatar Ship Debris',
    t_409 : 'Lv.9 Minmatar Ship Debris',
    t_410 : 'Lv.10 Minmatar Ship Debris',
  },

  datacore:{
    t_1 : 'Datacore - Amarrian Starship Engineering',
    t_2 : 'Datacore - Caldari Starship Engineering',
    t_3 : 'Datacore - Gallentean Starship Engineering',
    t_4 : 'Datacore - Minmatar Starship Engineering',

    t_11  : 'Datacore - Laser Physics',
    t_12  : 'Datacore - Electromagnetic Physics',
    t_13  : 'Datacore - High Energy Physics',
    t_14  : 'Datacore - Rocket Science',
    t_15  : 'Datacore - Mechanical Engineering',
  },

  race:{
    c: 'Caldari',
    g: 'Gallente',
    a: 'Amarr',
    m: 'Minmatar',
    o: 'Other',
    r_jdl: 'Caldari',
    r_glt: 'Gallente',
    r_am: 'Amarr',
    r_mmt: 'Minmatar',
    r_other: 'Other',
  },

  skill: {
    suiTie: 'Scrap Metal Processing',
    suiTieJJ: 'Advanced Scrap Metal Processing',
    suiTieZZ: 'Expert Scrap Metal Processing',
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
    ship: 'Ship',
    equipment: 'Equipment',
    drone: 'Drone',
    building: 'Building',
  },

  globalItem:{
    type:{
      t_1 : 'Ships',
      t_3 : 'Modules',
      t_11 : 'Resources',
      t_13 : 'Blueprints',
      t_100 : 'Others',
    },
  },

  item:{
    title:{
      e_id: 'ID',
      e_title: 'Title',
      e_isk_market: 'Price',
      r_id: 'ID',
      r_title: 'Title',
      r_isk_market: 'Price',


      e_volumn: 'Volume',
      e_powerCost: 'Powergrid',
      e_gjCost: 'Activation Cost',
      e_damageRate: 'Damage Rate',
      e_runTime: 'Duration',
      e_reloadTime: 'Reload Time',

      e_singleDamage: 'Single Damage',
      e_v_1_mid_2: 'Energy transfer',
      e_v_1_mid_3: 'Neutralization',
      e_v_1_low_13: 'Energy transfer',
      e_v_1_mid_23: 'Energy transfer',
      e_v_1_mid_31: 'Damage Reduction Ratio',
      e_v_1_mid_32: 'Damage Taken Ratio',

      e_shield: 'Shield ',
      e_shield_r: 'Shield Boost Amount',
      e_shield_add: 'Shield Hitpoint Bonus',
      e_armor: 'Armor ',
      e_armor_r: 'Armor Hitpoints Repaired',
      e_armor_add: 'Armor Hitpoint Bonus',
      e_structure: 'Structure ',
      e_structure_r: 'Structure Hitpoints Repaired',
      e_structure_add: 'Structure Hitpoint Bonus',

      e_singleRadius: 'Signature Radius',
      e_scanResolution: 'Scan Resolution',


      e_range: 'Optimal Range',
      e_range_high_1: 'Missile Range',

      e_lostRange: 'Effectiveness Falloff',
      e_followSpeed: 'Follow Speed',
      e_push: 'Push Modifier',
      
      e_ch_flySpeed: 'Fly Speed Bonus',
      e_ch_flySpeed_ac: 'Active-Fly Speed Bonus',  
      e_ch_flyTime: 'Fly Time Bonus',
      e_ch_flyTime_ac: 'Active-Fly Time Bonus',
      e_ch_inertia: 'Inertia Modifier',
      e_ch_inertia_ac: 'Active-Inertia Modifier',
      e_ch_wrapDisrup: 'Warp Scramble Strength',
      e_ch_wrapDisrup_ac: 'Active-Warp Scramble Strength',
      e_ch_scanResolution: 'Scan Resolution Bonus',
      e_ch_scanResolution_ac: 'Active-Scan Resolution Bonus',
      e_ch_signalRadius: 'Signature Radius Modifier',
      e_ch_signalRadius_ac: 'Active-Signature Radius Modifier',
      e_ch_kg: 'Mass Addition',
      e_ch_kg_ac: 'Active-Mass Addition',
      e_ch_damageRate: 'Damage Modifier',
      e_ch_damageRate_ac: 'Active-Damage Modifier',
      e_ch_runTime: 'Duration Modifier',
      e_ch_runTime_ac: 'Active-Duration Modifier',
      e_ch_lostRange: 'Effectiveness Falloff Modifier',
      e_ch_lostRange_ac: 'Active-Effectiveness Falloff Modifier',
      e_ch_range: 'Optimal Range Modifier',
      e_ch_range_ac: 'Active-Optimal Range Modifier',
      e_ch_followSpeed: 'Follow Speed Modifier',
      e_ch_followSpeed_ac: 'Active-Follow Speed Modifier',
      e_ch_exSpeed: 'Explode Speed Modifier',
      e_ch_exSpeed_ac: 'Active-Explode Speed Modifier',
      e_ch_exRadius: 'Explode Radius Modifier',
      e_ch_exRadius_ac: 'Active-Explode Radius Modifier',


      e_exSpeed: 'Explode Speed',
      e_exRadius: 'Explode Radius',
      e_fuel: 'Fuel',



      e_v_1_low_1: 'Capacitor Bonus',
      e_v_2_low_1: 'Temporary Capacitor Bonus',
      e_v_3_low_1: 'Temporary Capacitor Bonus Rate',
      e_v_4_low_1: 'Capacitor Warfare Resistance Bonus',


      e_v_1_low_12: 'Temporary Shield Hitpoint Bonus',
      e_v_2_low_12: 'Temporary Shield Hitpoint Bonus Rate',
      e_v_1_low_22: 'Temporary Armor Hitpoint Bonus',
      e_v_2_low_22: 'Temporary Armor Hitpoint Bonus Rate',

      e_v_1_low_41: 'Active-Damage Resistance',


      e_v_1_low_51_2401: 'Inertia Modifier Rate',
      e_v_1_low_51_2402: 'Warp Scramble Strength Bonus',

      e_v_1_low_53: 'Capacitor Capacity Bonus',

      e_v_1_low_61: 'Sensor Recalibration Time',

      e_v_1_low_71: 'Active-Damage Modifier',
      e_v_2_low_71: 'Active-Duration Modifier',

      e_v_1_low_71_3401: 'Active-Effect Gain',
      e_v_1_low_71_3302: 'Active-Effect Gain',





      r_v_1_rig_p_1_1_1: 'Damage Rate Bonus',
      r_v_1_rig_p_1_1_2: 'Effectiveness Falloff Modifier',
      r_v_1_rig_p_1_1_3: 'Activation Cost Modifier',
      r_v_1_rig_p_1_1_4: 'Duration Modifier',
      r_v_1_rig_p_1_1_5: 'Powergrid Request Modifier',

      r_v_1_rig_p_1_11_11: 'Damage Rate Bonus',
      r_v_1_rig_p_1_11_12: 'Effectiveness Falloff Modifier',
      r_v_1_rig_p_1_11_13: 'Activation Cost Modifier',
      r_v_1_rig_p_1_11_14: 'Duration Modifier',
      r_v_1_rig_p_1_11_15: 'Powergrid Request Modifier',

      r_v_1_rig_p_1_21_21: 'Damage Rate Bonus',
      r_v_1_rig_p_1_21_22: 'Effectiveness Falloff Modifier',
      r_v_1_rig_p_1_21_23: 'Activation Cost Modifier',
      r_v_1_rig_p_1_21_24: 'Duration Modifier',
      r_v_1_rig_p_1_21_25: 'Powergrid Request Modifier',

      r_v_1_rig_p_1_41_41: 'Damage Rate Bonus',
      r_v_1_rig_p_1_41_42: 'Effectiveness Falloff Modifier',
      r_v_1_rig_p_1_41_43: 'Duration Modifier',
      r_v_1_rig_p_1_41_44: 'Powergrid Request Modifier',

      r_v_1_rig_p_1_61_61: 'Explode Speed Bonus',
      r_v_1_rig_p_1_61_62: 'Damage Rate Bonus',
      r_v_1_rig_p_1_61_63: 'Explode Radius Modifier',
      r_v_1_rig_p_1_61_64: 'Fly Time Bonus',
      r_v_1_rig_p_1_61_65: 'Fly Speed Bonus Rate',
      r_v_1_rig_p_1_61_66: 'Duration Modifier',

      r_v_1_rig_p_1_81_81: 'Damage Rate Bonus',
      r_v_1_rig_p_1_81_82: 'Effectiveness Falloff Modifier',
      r_v_1_rig_p_1_81_83: 'Duration Modifier',
      r_v_1_rig_p_1_81_84: 'Drone Control Range Bonus',

      r_v_1_rig_p_2_101_101: 'Duration Modifier',
      r_v_1_rig_p_2_101_102: 'Shield Boost Amount Bonus',
      r_v_1_rig_p_2_101_103: 'Activation Cost Modifier',
      r_v_1_rig_p_2_101_104: 'Shield  Bonus',
      r_v_1_rig_p_2_101_105: 'Shield EM Damage Resistance Bonus',
      r_v_1_rig_p_2_101_106: 'Shield Thermal Damage Resistance Bonus',
      r_v_1_rig_p_2_101_107: 'Shield Kinetic Damage Resistance Bonus',
      r_v_1_rig_p_2_101_108: 'Shield Explosive Damage Resistance Bonus',

      r_v_1_rig_p_2_121_121: 'Duration Modifier',
      r_v_1_rig_p_2_121_122: 'Armor Hitpoints Repaired Bonus',
      r_v_1_rig_p_2_121_123: 'Activation Cost Modifier',
      r_v_1_rig_p_2_121_124: 'Armor  Bonus',
      r_v_1_rig_p_2_121_125: 'Armor EM Damage Resistance Bonus',
      r_v_1_rig_p_2_121_126: 'Armor Thermal Damage Resistance Bonus',
      r_v_1_rig_p_2_121_127: 'Armor Kinetic Damage Resistance Bonus',
      r_v_1_rig_p_2_121_128: 'Armor Explosive Damage Resistance Bonus',

      r_v_1_rig_p_2_141_141: 'Structure  Bonus',
      r_v_1_rig_p_2_141_142: 'Structure EM Damage Resistance Bonus',
      r_v_1_rig_p_2_141_143: 'Structure Thermal Damage Resistance Bonus',
      r_v_1_rig_p_2_141_144: 'Structure Kinetic Damage Resistance Bonus',
      r_v_1_rig_p_2_141_145: 'Structure Explosive Damage Resistance Bonus',

      r_v_1_rig_m_1_1001_1001: 'Activation Cost Modifier',
      r_v_1_rig_m_1_1001_1002: 'Fly Speed Bonus Rate',
      r_v_1_rig_m_1_1001_1003: 'Inertia Modifier',
      r_v_1_rig_m_1_1001_1004: 'Cargo Capacity Bonus',
      r_v_1_rig_m_1_1001_1005: 'Mass Bonus',
      r_v_2_rig_m_1_1001_1005: 'Inertia Modifier',
      r_v_3_rig_m_1_1001_1005: 'Fly Speed Modifier',
      r_v_1_rig_m_1_1001_1006: 'Warp Scramble Strength',
      r_v_1_rig_m_1_1001_1007: 'Warp Speed Bonus',

      r_v_1_rig_m_2_1101_1101: 'Capacity Bonus',
      r_v_1_rig_m_2_1101_1102: 'Capacity Recharge Modifier',
      r_v_1_rig_m_2_1101_1103: 'Powergrid Ouput Bonus',
      r_v_1_rig_m_2_1101_1104: 'Scan Resolution Bonus',

      r_v_1_rig_m_3_1201_1201: 'Scan Intensity Bonus',
      r_v_1_rig_m_3_1201_1202: 'Scan Intensity Bonus',

      r_v_1_rig_m_4_1301_1301: 'Mining Volume Bonus',
      r_v_1_rig_m_4_1301_1302: 'Duration Modifier',
      r_v_1_rig_m_4_1301_1303: 'Optimal Range Modifier',
      r_v_1_rig_m_4_1301_1304: 'Activation Cost Modifier',


      dps: 'DPS',




    }
  },



  footerbar:{
    newBug: 'BUGS Report',
    contact: 'Contact Us',
    msg: 'If u feel good, plz tell your friends, if u fell bad, <a href="https://github.com/016/lm180_iEVE_Echoes/issues/new" target="_blank">plz tell us</a> thx.',
  },
  pub: {
    topbar:{
      index: 'Index',
      about: 'About',
      price: 'Price',
      devPlan: 'Dev Plan',
      dashboard: 'Dashboard',
      project: 'Project',
      signout: 'Sign Out',
      login: 'Login',
      signup: 'Sign Up',
    },
    index:{
      title: 'Welcome',
      subTitle: 'Use iMenu to manage all your projects online',

    },
    about:{
      title: 'About',
      subTitle: 'All Info for iMenu',

    },
    price:{
      title: 'Price',
      subTitle: 'Money you need to pay for your plan',

    },
    devPlan:{
      title: 'Dev Plan',
      202010:{
        subTitle: '202010 v2.0 Dev Plan',
        body:'<ul><li class="text-muted">[Not Start] Existing calculators updated and upgraded, based on user feedback to make the operation suit user habits</li><li class="text-muted">[Not Start] New equipment decomposition calculator, to quickly search the materials obtained from equipment decomposition</li><li class="text-muted">[Not Start] New Corporation Module, the Corporation Module will be a cool module, which will make every corporation administrator loves it.</li><li class="text-muted">[Not Start] New KB (iKillBoard) Module makes PVP become popular! Makes technology become popular! Makes operation become popular! </li ><li class="text-muted">[Not Start] Fully enable Offline Market Module, one more option for out-game transaction, leave a message on ieve, you can find buyers/sellers.</li><li class ="text-muted">[Not Start] New Online Market Module, online real-time prices, historical price cache, price trend prediction, market transaction decisions, etc.</li><li class="text-muted">[Not Start] The upgraded version of the Ship Config Module, complete all the unfinished functions in v1.0, add some new ideas</li><li class="text-muted">[Not Start] Multi-module cross link iKillBoard, online market, Corporation, and Ship Config, it will definitely be a cool experience!</li><li class="text-muted">[Not Start] A richer user system</li></ul>',
      },
      202008:{
        subTitle: '202008 Data Collect Plan',
        body:'<ul><li class="text-green">[Complete] Ship Blueprint research material data</li><li class="text-green">[Complete] Ore refining data</li><li class= "text-green">[Complete] Vessel Debris Refining Data</li><li class="text-green">[Complete] Ship building material data</li><li class="text-green">[Complete] Rig building material data</li><li class="text-green">[Complete] Planetary resource output data (this data is very large and requires more time)</li><li class="text-green ">[Complete] Ship attribute data used for ship config</li><li class="text-green">[Complete] Equipment attribute data used for ship config</li></ul>',
      },
    },

    login:{
      title: 'Sign in to start your session',
      signupSuccess: '<h4><i class="icon fa fa-check"></i> Sign up Success</h4> Please login with your new account.',
      resetPassSuccess: '<h4><i class="icon fa fa-check"></i> Reset Password Success</h4> Please login with your new password.',
      loginExpired: '<h4><i class="icon fa fa-check"></i> Login Info Expired</h4> Please re-login.',
      username: 'Username',
      pass: 'Password',
      email: 'Email',
      phone: 'Phone',
      rememberMe: 'Remember Me',

    },

    signup:{
      title: 'Register a new membership',
      fullname: 'Full Name',
      username: 'Username',
      pass: 'Password',
      passRepeat: 'Retype Password',
      email: 'Email',
      inviteCode: 'Invite Code',
      phone: 'Phone',
      agreeTerm: ' I agree to the <a href="javascript:;">terms</a>',

    },

    forgotPass:{
      title: 'Reset Your Password',
      newPass: 'Password',
      email: 'Email',
      phone: 'Phone',

    },


  },
  account:{
    id: '',
    title: 'Name',
    phone: 'Phone',
    email: 'Email',
    money: 'Account Balance',
    username: 'Username',
    desc: 'Desc',
    sexy: 'Sexy',
    pass: 'Password',
    passOld: 'Old Password',
    passNew: 'New Password',
    passNewRepeat: 'New Password Repeat',

  },
  pri: {
    topbar:{
      dashboard: 'Dashboard',
      materialPrice: 'Material Price',
      volunteer: 'Volunteer Channel',
      donate: 'Donate',
      monument: 'Monument',
      market: 'iEVE Market',
      marketOnline: 'Online Market',
      news: 'iEVE News',
    },
    sidebar:{
      quickTable: 'Quick Table',
      quickTablePaymentPlan: 'Payment Plan Quick Table',
      quickTableOre: 'Ore Quick Table',
      quickTableVesselDebris: 'Vessel Debris Quick Table',
      commonElement: 'Basic Element',
      calculator: 'Common Calculator',
      advCal: 'Adv. Calculator',
      skillPoint: 'Skill Point Calculator',
      planetary: 'Planetary Resource Search',
      shipBlueprintResearch: 'Ship Blueprint Reserach',
      ship: 'Ship Build Calculator',
      equipment: 'Equipment Build Calculator',
      drone: 'Drone Build Calculator',
      building: 'Building Build Calculator',
      ore: 'Ore Calculator',
      oreMix: 'Mix Ore Calculator',
      vesselDebris: 'Vessel Debris Calculator',
      slavagedMaterials: 'Salvaged Material Search',
      rig: 'Rig Build Calculator',
      shipConfig: 'Ship Config',

      market: 'Market',

      corp: 'Corp',
      pubCorp: 'Corp list',

      siteElement: 'Site Element',

      userCenter: 'User Center',
      userInfo: 'User Info',
      changePass: 'Change Pass',
      bindPhone: 'Bind Phone',

      mShipConfig: 'My Ship Config',
      myShipConfig: 'My Ship Config',
      myShipConfigCategory: 'Ship Config Category',
      myShipConfigCollection: 'Favorited Ship Config',
      myShipConfigLike: 'Reviewed Ship Config',

      myTopic: 'My Topic',

      myCorp: 'My Corp',
    },
    dashboard:{
      title: 'Dashboard',
      subTitle: 'All data for this app.',
      welcome: {
        title: 'Welcome to iEVE the EVE Echoes online Tools Box',
        subTitle: 'You can find EVE Echoes\'s online tools here.',        
        body: '<p class="text ">The development of version 2.0 has started, these new features will be seen in the next few months.</p>',
      },

    },

    userCenter:{
      title: 'User Center',
      subTitle: 'Manage User Data Here.',   
      basicTitle: 'User Center',
      basicSubTitle: 'Manage User Data Here.',        
    },
    changePass:{
      title: 'Change Pass',
      subTitle: 'Change Your Pass Here.',           
    },
    bindPhone:{
      title: 'Bind Phone',
      subTitle: 'Bind Your Phone Here.',           
    },

    materialView:{
      title: 'Today\'s Material Price',
      subTitle: 'Here is the list of all basic materials\' price, this price will used in each calculator',
      usageTitle: 'Special Info',
      usageBody: '<ul><li>The price format like 999 / 20000, the 999 is market price(over the past week), the 20000 is system price</li><li>The market price will be a little higher, so that you can easily buy with this price from market</li><li>If the price is not correct for you, just change it in the Calculator</li><li>It\'s a personal project all data is manually entered, so if you find anything wrong, just report a bug. The bug report link is in the bottom footer, thx.</li></ul>',

      typeTitle:{
        t0: 'Ore',
        t1: 'Miner',
        t2: 'Planetary',
        t3: 'Salvaged Material',
        t11: 'Debris',
        t21: 'Datacore',
      },

      table:{
        title:{
          m_title: 'Title',
          m_isk_market: 'Market Price',
          m_isk_system: 'System Price',
          m_updateDate: 'Update Date',
        }
      },
    },

    shipSelector:{
      config: {
        selectShip: 'Select Ship',
        filteredShipCategory: 'Select Category',
        filteredRaceType: 'Select Race',
      },
    },

    shipView:{
      title: 'Build Calculator',
      subTitle: 'Check all kind build elements here. Find out how many are missing.',
      usageTitle: 'Usage',
      usageBody: '<ul><li>We support 4 types now, try switching them!</li><li>FYI, you can only build items with the required Tech Level, so check your Tech Level first!!!</li><li>Select an item and set correct "Build Count", "Material Efficiency" and "Time Efficiency". The "Result" section will show you the required materials.</li><li>Type in how many minerals you have "In Hand" and you will get a "Still Needed" Material Count.</li><li>We use last week\'s average price for price calculations. The sum price for "still need" only includes the still needed items, if you don\'t need this item, the price will be 0 in the calculations.</li><li>"Ore Calculator" is a quick way to find how many ores can be processed into your still needed materials, try setting your correct "Ore Efficiency"</li><li>It\'s a personal project all data is manually entered, so if you find anything wrong, just report a bug. The bug report link is in the bottom footer, thx.</li><li><a href="https://www.bilibili.com/video/av80449531/" target="_blank">Operation Video in Chinese</a></li></ul>',
      config: {
        title: 'Config Params',
        selectItem0: 'Item',
        selectItem1: 'Ship',
        selectItem11: 'Equipment',
        selectItem51: 'Drone',
        selectItem91: 'Building',
        itemCategoryFilter: 'Category',

        buildCnt: 'Build Count',
        buildCostRate: 'Material Efficiency',
        buildTimeRate: 'Time Efficiency',

        data:{
          i_isk_market: "Market Price",
          i_isk_system: "System Price",
          sb_isk_market: "BP Market Price",
          sb_isk_system: "BP System Price",
          sb_isk_build: "Build Cost",
          sb_techLvl: "Tech Lvl",
          sb_time_build: "Time Cost",
          mins: "mins",
          sec: "sec",
        },
      },
      result:{
        title: 'Result',


        table:{
          title:{
            item: 'Material',
            inhand: 'In Hand(Support+-*/)',
            buildCost: 'Build Cost',
            stillNeed: 'Required',
            percent: 'Rate in hand',
            sum: 'Sum',
          },
          option:{
            showItemPrice: 'Show Detail Price',
            showSumPrice: 'Show Sum Price',
          }
        }
      },
      oreConfig: {
        title: 'Ore Calculator Config',
        title_rate: 'Set Ore Efficiency',
        title_rate_small: 'Only need set following Ore Efficiency, other ores use the same efficiency',
        title_oreOpen: 'Ore constraints',
        title_oreOpen_small: 'Only calculates ores after click ',
      },
      oreResult:{
        title: 'Ore Result',
        title_small: 'For "Ore Suggest", Try: Single Click and Double Click',



        table:{
          title:{
            item: 'Mineral Name',
            stillNeed: 'Still Needed',
            oreSuggest: 'Ore Suggest',
          },
        }
      }

    },

    shipBRView:{
      title: 'Ship Blueprint Reserach',
      subTitle: 'Calculate materials and success rate for the blueprint research',

      usageTitle: 'Usage',
      usageBody: '<ul><li>Choose a blueprint to see the required materials and success rate</li></ul>',
      config: {
        title: 'Config Params',

        buildCnt: 'Build Count',
        buildSuccessRate: 'Based Success Rate',
        buildTimeRate: 'Time Efficiency',

        data:{
          r_isk_market: "Market Price",
          r_isk_system: "System Price",

          sb_isk_market: "Blueprint Market Price",
          sb_isk_system: "Blueprint System Price",
          s_isk_market: "Ship Market Price",
          s_isk_system: "Ship System Price",

          sbr_time_build: "Time Cost",
          sbr_isk_build: "ISK Cost",
          sbr_successRate: "Success Rate",
        },
      },
      result:{
        title: 'Result',

        table:{
          title:{
            item: 'Material',
            inhand: 'inhand Count',
            buildResult: 'Build Requirement',
            need: 'Still Need',
            percent: 'Inhand Rate',
            sum: 'Sum',
          },
          option:{
            showItemPrice: 'Show Detail Price',
            showSumPrice: 'Show Sum Price',
          }
        }
      }
    },

    planetaryView:{
      title: 'Planetary Resource Search',
      subTitle: 'Quickly find Planetary Resource position and calculate the output(and price) of your account',
      usageTitle: 'Usage',
      usageBody: '<ul><li>All region data added, plz enjoy!</li><li>Select "Region"/"Constellation"/"Solar System"(one or all) and "Planetary Resource", click "Start Search" will get relatived Planetary Resource info</li><li>The result could be empty, so you have to change the condition if the result is empty.</li><li>"Mining Array" can help calculate one hour\'s output</li><li>"||| / 25.47 / 25.47" in Result means "Resource evaluation / Unit mining volume / Total mining volume"</li><li>We used last week\'s average price for price calcualte</li></ul>',
      config: {
        title: 'Config Params',
        selectRegion: 'Region',
        selectConstellation: 'Constellation',
        selectSolarSystem: 'Solar System',
        selectPType: 'Planetary Resource ',
        startBtn: 'Start Search',

        buildCnt: 'Mining Array',
        buildTime: 'Cost Time',
        showAllResult: 'All Result',

        data:{
          o_isk_market: "Market Price",
          o_isk_system: "System Price",
          o_volumn: "Ore Volume",
        },
      },
      result:{
        title: 'Result',
        emptyResultFound: 'Non useful Planetary Resource found , current condition found zero result, plz change condition and try again',
        dataContributor: 'The Data of {regionTitle} is contributed by {contributorTitle}, thx',

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
            item: 'Planetary Resource',
            sum: 'Sum Price',
          },
          option:{
            showItemPrice: 'Show Detail Price',
            showSumPrice: 'Show Sum Price',
          }
        }
      }

    },

    oreView:{
      title: 'Ore Calculator',
      subTitle: 'Quickly calculate how many minerals you will obtain from your ore',
      usageTitle: 'Usage',
      usageBody: '<ul><li>Select an Ore in "Config Params", and set correct "Ore Count" and "Material Efficiency". The "Result" will show the outputted mineral count.</li><li>"Asteroid belt" is the range where the ore can be found and "Safety level" is the range where the asteroid belt can be found.</li><li>"Ship Volume" is a special param used to calculate how much ore a ship can hold and does not affect the calculations if left blank.</li><li>The ore refining unit is 100, e.g. 199 will only refine 100, leaving 99 remaining.</li><li>Because of decimal points, you may get 1-2 calculated deviation in the result. For example if the result is 135, but in game it\'s 134</li><li>It\'s a personal project all data is manually entered, so if you find anything wrong, just report a bug. The bug report link is in the bottom footer, thx.</li><li><a href="https://www.bilibili.com/video/av80457729/" target="_blank">Operation Video in Chinese</a></li></ul>',
      config: {
        title: 'Config Params',
        selectOre: 'Select Ore ',
        buildCnt: 'Ore Count',
        buildVolume: 'Ship Volume',
        buildCostRate: 'Material Efficiency',

        data:{
          o_isk_market: "Market Price",
          o_isk_system: "System Price",
          o_volumn: "Ore Volume",
          o_asteroidLv: 'Asteroid Lv',
          o_safeLv: 'Safety Lv',
        },
      },
      result:{
        title: 'Result',


        table:{
          title:{
            item: 'Mineral',
            target: 'Target Count',
            buildResult: 'Collected',
            left: 'Still Needed',
            percent: 'Still Needed Rate',
            sum: 'Sum Price',
          },
          option:{
            showItemPrice: 'Show Detail Price',
            showSumPrice: 'Show Sum Price',
          }
        }
      }

    },
    oreMixView:{
      title: 'Mix Ore Calculator',
      subTitle: 'The new calculator for Mix Ore, Just Try It.',
      usageTitle: 'Usage',
      usageBody: '<ul><li> Click "+ New Ore" to add new a new ore and quantity</li><li>It\'s used for more than one ore type, useful for ships like the Retriever</li><li>The ore refining unit is 100, e.g. 199 will only refine 100, leaving 99 remaining.</li><li>Because of decimal points, you may get 1-2 calculated deviation in the result. For example if the result is 135, but in game it\'s 134</li><li>It\'s a personal project all data is manually entered, so if you find anything wrong, just report a bug. The bug report link is in the bottom footer, thx.</li></ul>',
      result:{
        title: 'Mix Ore Result',


        table:{
          title:{
            item: 'Mineral',
            target: 'Target Count',
            buildResult: 'Collected',
            left: 'Still Needed',
            percent: 'Still Needed Rate',
            sum: 'Sum Price',
            cnt: 'Count',
            rate: ' Efficiency',
            volume: 'Volume',
          },
          option:{
            showItemPrice: 'Show Detail Price',
            showSumPrice: 'Show Sum Price',
            addNewOre: '+ New Ore',
          }
        }
      }

    },

    vesselDebrisView:{
      title: 'Vessel Debris Calculator',
      subTitle: 'Quickly calculate how many Salvaged Material will output from processing the Vessel Debris in your hand',
      usageTitle: 'Usage',
      usageBody: '<ul><li>Select one Vessel Debris in "Config Params", and set correct "Vessel Count" and "Material Efficiency". The "Result" section will show the calculated Salvaged Material count.</li><li>The result is rounded, for example with a rate of 2.33: 1 Vessel Debris will output 2 Salvaged Materials, but 10 Vessel Debris will output 23. It\'s good idea to use more Vessel Debris at once.</li><li>The "Material Efficiency" will automatically update from "Select Skill".</li><li>"Target Count", "Still Needed" and "Still Needed Rate" are used for quick calculations.</li><li>It\'s a personal project all data is manually entered, so if you find anything wrong, just report a bug. The bug report link is in the bottom footer, thx.</li><li><a href="https://www.bilibili.com/video/av80457780/" target="_blank">Operation Video in Chinese</a></li></ul>',
      config: {
        title: 'Config Params',
        selectVesselDebris: 'Select Vessel',
        buildCnt: 'Vessel Count',
        buildCostRate: 'Material Efficiency',
        selectSkill: 'Select Skill',

        data:{
          vd_isk_market: "Market Price",
          vd_isk_system: "System Price",
        },
      },
      result:{
        title: 'Result',


        table:{
          title:{
            item: 'Salvaged Material',
            target: 'Target Count',
            buildResult: 'Obtained',
            left: 'Still Needed',
            percent: 'Still Needed Rate',
            sum: 'Sum Price',
          },

          option:{
            showItemPrice: 'Show Detail Price',
            showSumPrice: 'Show Sum Price',
          }
        }
      }

    },

    slavagedMaterialView:{
      title: 'Salvaged Material Search',
      subTitle: 'Quickly Search Salvaged Material\'s source Vessel Debris',
      usageTitle: 'Usage',
      usageBody: '<ul><li>Select one Salvaged Material and the tool will show the source Vessel Debris. The "Material Efficiency" will be taken into account.</li><li>The "Material Efficiency" will automatically be populated from the "Select Skill" field.</li><li>It\'s a personal project all data is manually entered, so if you find anything wrong, just report a bug. The bug report link is in the bottom footer, thx.</li></ul>',
      config: {
        title: 'Config Params',
        selectVesselDebris: 'Salvaged Material',
        buildCostRate: 'Material Efficiency',
        selectSkill: 'Select Skill',

        data:{
          isk_market: "Market Price",
          isk_system: "System Price",
        },
      },
      result:{
        title: 'Result',


        table:{
          title:{
            item: 'Vessel Debris',
          },

          option:{
            showItemPrice: 'Show Detail Price',
          }
        }
      }

    },

    rigSelector:{
      config: {
        selectRig: 'Select Rig',
        filteredRigCategory: 'Select Category',
      },
    },

    rigView:{
      title: 'Rig Build Calculator',
      subTitle: 'You can calculate rigs\' Salvaged Material count here.',

      usageTitle: 'Usage',
      usageBody: '<ul><li>FYI, building is only possible if your Tech Level is high enough, so check your Tech Level first!</li><li>Select a rig in "Config Params", then set correct "Build Count", "Material Efficiency", "Time Efficiency". See what materials you need in "Result".</li><li>It\'s a personal project all data is manually entered, so if you find anything wrong, just report a bug, the bug report link is in the bottom footer, thx.</li></ul>',
      config: {
        title: 'Config Params',
        selectRig: 'Select Rig',
        buildCnt: 'Build Count',
        buildCostRate: 'Material Efficiency',
        buildTimeRate: 'Time Efficiency',

        data:{
          r_isk_market: "Market Price",
          r_isk_system: "System Price",

          rb_techLvl: "Tech Level",
          rb_isk_build: "Build ISK",
          rb_time_build: "Build Time",
          rb_isk_market: "BP Market Price",
          rb_isk_system: "BP System Price",
        },
      },
      result:{
        title: 'Result',

        table:{
          title:{
            item: 'Salvaged Material',
            inhand: 'In Hand',
            buildResult: 'Build Requirement',
            need: 'Still Need',
            percent: 'In Hand Rate',
            sum: 'Sum',
          },
          option:{
            showItemPrice: 'Show Detail Price',
            showSumPrice: 'Show Sum Price',
          }
        }
      }
    },

    skillPointView:{
      title: 'Skill Point Calculator',
      subTitle: 'You can calculate how much time it takes to reache your Skill Point goals',

      usageTitle: 'Usage',
      usageBody: '<ul><li>Set your "Start Points" and your "Target Points" in the "Config Params" section, the time required will be displayed in the "Result" section.</li><li>Selecting a "Tech Level" will automatically set "Target Points"</li><li>"Get Point" is your rate of Skill Points per minute, "Time Efficiency" is a percentage of "Get Point"</li><li>"Extra Points" is for extra skill points per day. This value will attach to "Points per min", then be used in the calculation</li><li>Tech Level data collected by the volunteer "Fish Lord" in our Volunteer Group, thx for him. If you find anything wrong, just report a bug using the link in the footer.</li></ul>',
      config: {
        title: 'Config Params',
        selectSkill: 'Tech Level',
        startSkillPoint: 'Start Points',
        endSkillPoint: 'Target Points',
        min: 'Min',
        day: 'Day',

        skillMinPoint: 'Points per min',
        skillTimeRate: 'Time Efficiency',
        skillDailyPoint: 'Extra Points',
      },
      result:{
        title: 'Result',
        needPoint: 'Sum Point',
        finallyMinPoint: 'Total points per min',
        needMin: 'Min',
        needHour: 'Hour',
        needDay: 'Day',

      }
    },

    shipConfigView:{
      title: '[Beta]Ship Config Calculator',
      subTitle: 'Manage ship config plan on web, share and discuss ship config plan via URL, light and fast',
      usageTitle: 'Usage',
      bodyText: '<ul><li>After 3 months, this version was finally completed. The current version has integrated some data from the public test. Here are some functional descriptions: </li><li>Completed content: <ol><li>View ship properties</li><li>View equipment properties</li><li>View rig properties</li><li>View drone properties</li><li>Save ship config plan</li><li>Manage ship config plan</li><li>Share ship config plan via url</li></ol></li><li>Unfinished content: <ol><li>Skills not add, it will be added after the server is opened</li><li>The formula calculation is not accurate. Considering the subsequent modification, we will start to improve it 1 month after the server is opened</li><li>Equipment Active, via formula adjust</li></ol></li> <li>Our ultimate goal is to complete the ship config on web page. Open the URL and you can see the ship config plan and everyone\'s discussion, so that newbie players can easily copy and use, company/team players can easily communicate and unified configuration , and let the master players enjoy it</li><li>English Translate are still under going, will finish it ASAP.</li></ul>',
      config: {
        title : 'Config Params',
        btn : {
          showEditoForm: 'Edit Attribute',
          showItemDetail: 'Show All Detail',
          collect: 'Favorite',
          save: 'Save',
          reset: 'Refresh',
        },
        form: {
          categoryId: 'Category',
          desc: 'Desc',
          shortDesc: 'Short Desc',
        },
      },

      msg:{
        saved: 'Saved!',
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
        title: 'Set Skill',
        small: '[NOT USE] Select skills and set levels to see the data change',

        newBtn: '+ New Skill',
      },

      condition:{
        title: 'Set Param',
        small: '[NOT USE] Other params will effect ship attributes',

        newBtn: '+ New Param',
      },


      resultBox: {
        topInfo: {
          powergrid: 'Powergrid',
          capa_cargo: 'Cargo Capacity',
          capa_ore: 'Ore Capacity',
          capa_logistics: 'Logistics Capacity',

          skillBonus: 'Skill Bonus',
          specialBonus: 'Special Bonus',
        },
        attack: {
          title: 'Attack',
          missile: 'Missile',
          battery: 'Turret',
          drone: 'Drone',
          mining: 'Mining',
        },
        defense: {
          title: 'Defense',
          shield:'Shield',
          armor:'Armor',
          structure:'Structure',
        },
        capacity: {
          title: 'Capacity',
          hcsj: 'Recharge Time',
          zdhc: 'Max Recharge',
        }, 
        radar: {
          title: 'Radar',

          target: 'Max Target',
          signatureRadius: 'Signature Radius',
          scanResolution: 'Resolution',
          induction: 'Induction',
        }, 
        navigation: {
          title: 'Navigation',
          warpAgainst: 'Warp Against',
          warpSpeed: 'Warp Speed',
          inertiaModifier: 'Inertia Modifier',
          mass: 'Mass',
        }, 
        price: {
          title: 'Price',
          ship: 'Ship',
        }, 

      },

    },

    shipConfigShareFormModal:{
      title: 'Show Share Link'

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
      title: 'Donate for iEVE',
      subTitle: 'Your Donation will make iEVE better!',
      topbar:{
        title: 'Explain',
        subTitle: '',
        bodyText:'<p>iEVE is a free charity project, donations can make it a more stable operation. Here you can join the team that supports iEVE, I believe it will be better if you support it!</p><p>Currently we support in-game donations and cash donations, voluntary donations are not forced, and minors’ donations are rejected.</p><p>In-game donations are very encouraged. Our data volunteers work very hard, and they sacrifice a lot of private time to improve the data. We hope that players in the community can express their affirmation and gratitude to them through in-game donations.</p>',
        donateLinkText: '>>> Donor List <<<',
      },
      inGame:{
        title: 'In-Game Donate',
        subTitle: 'Donations made directly in the game',
        bodyText:'<p>Just make a contact to <span class=\'text-green\'>ieve</span> then we will get your donation(ISK, Plex, Equipment), the role name is <span class=\'text-green\'>ieve</span> No capital, no sign, no spaces!!</p><p>Will accept contract regularly at 1:00 and 13:00 UTC every day, also will confirm it when I see it at other times</p><p>Your donation will be given to volunteers who provide services for iEVE free of charge. I believe they will feel warm with every donation!</p>',
      },
      paypal:{
        title: 'PayPal Donate',
        subTitle: 'Donate via PayPal link',
        bodyText:'<p>The PayPal Link: <a href=\'https://www.paypal.me/xinhualee\' target="_blank" >https://www.paypal.me/XinHuaLee</a></p><p>Your donation will be used to pay for iEVE\'s operating expenses</p>',
      },
      alipay:{
        title: 'Alipay Donate',
        subTitle: 'QR for Chinese users',
        bodyText:'<p><img src="./statics/pics/alipay_qr.jpg" /></p><p>Your donation will be used to pay for iEVE\'s operating expenses</p>',
      },
      wechat:{
        title: 'Wechat Donate',
        subTitle: 'QR for Chinese users',
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
      title: 'Ore Quick Table',
      subTitle: 'Find Ore Output Quickly',
      bodyText: '',

      oreConfig: {
        title: 'Params Config',
        title_rate: 'Set Ore Efficiency',
        title_rate_small: 'Only need set following Ore Efficiency, other ores use the same efficiency',
        title_oreOpen: 'Ore constraints',
        title_oreOpen_small: 'Only calculates ores after click ',
        otherConfig:{
          title: 'Other Params',
          title_small: 'Set other params for better usage',
          showType: {
            title: 'Show Type',
            unit: 'with 1 unit',
            volume: 'with 1 volume',
          }, 
        }
      },

      table:{
        title:{
          o_title: 'Title',
          o_volumn: 'Volume',
          o_volumn_price: 'Ore Price/m<sup>3</sup>',
          o_volumn_price_e: '<b>Ore Price/m<sup>3</sup></b>: based on ore market price, calculated ore 1m<sup>3</sup> price',
          m_volumn_price: 'Mineral Price/m<sup>3</sup>',
          m_volumn_price_e: '<b>Mineral Price/m<sup>3</sup></b>: based on ore market price, calculated ore 1m<sup>3</sup> output mineral price',
          o_asteroidLv: 'Asteroid Lv',
          o_safeLv: 'Safety Lv',
          o_: '',
        }
      },
    },

    quickTableVesselDebrisView:{
      title: 'Vessel Debris Quick Table',
      subTitle: 'Find Vessel Debris Output Quickly',
      bodyText: '',

      config: {
        title: 'Config Params',
        buildCostRate: 'Material Efficiency',
        selectSkill: 'Select Skill',
        race: {
          title: 'Set Race',
          title_small: 'Only show debris when race is "Yes" ',
        },
      },

      table:{
        title:{
          vd_title: 'Title',
        }
      },
    },

    quickTablePaymentPlanView:{
      title: 'Payment Plan Quick Table',
      subTitle: 'Quickly Find Payment Plan',
      bodyText: '',

      config: {
        title: 'Config Params',
        resultUnit: 'Result Unit',
      },

      table:{
        title:{
          techLv_title: 'Tech Lv',
          pointPerMin: ' SP/Min',
        }, 
        data:{
          firstMonthFee: 'First Month Fee',
          secondMonthFee: 'Second Month Fee',
          fourMonthFee: 'Four Monthes Fee',
          firstYearFee: 'First Year Fee',
        }
      },
      tableEx:{
        title:{
          ex_title: 'SP/Min',
          ex_body: 'Desc',
          
        }, 
        data:{
          pointPerMin: ' SP/Min',
          m_30_body: 'Alpha',
          m_35_body: 'Omega 5',
          m_40_body: 'Omega 5 + Book I($1.99)',
          m_45_body: 'Omega 5 + Book I($1.99) + Book II($5.99)',
          m_50_body: 'Omega 5 + Book I($1.99) + Book II($5.99) + Book III($29.99)',
          m_60_body: 'Omega 25 + Book I($1.99)',
          m_65_body: 'Omega 25 + Book I($1.99) + Book II($5.99)',
          m_70_body: 'Omega 5 + Omega 25 + Book I($1.99) + Book II($5.99)',
          m_75_body: 'Omega 5 + Omega 25 + Book I($1.99) + Book II($5.99) + Book III($29.99)',
        }
      },
    },

    newsView:{
      title: 'iEVE News',
      subTitle: 'Official Announcement, Gossip, Legion Recruitment, Rich Player\'s AD, all in iEVE News',
    },

    marketView:{
      title: 'iEVE Market',
      subTitle: 'Not easy to make deals online? Using our iEVE Market, just leave message on the board, you will get contact soon. Fast, efficient, open, transparent!',
    },

    onlineMarketView:{
      title: '[Alpha]Online Market',
      subTitle: 'See market info one web, no need to open the game. Quick, Easy, Simple',

    },
    onlineMarketDetailModal:{
      title:{
        buy : 'Buyer',
        sell : 'Seller',
        history : 'History Price',
      },
      buy:{
        title:{
          regionTitle: 'Region',
          amount: 'Amount',
          price: 'Price',
          location: 'Location',
          expiredAt: 'Expired At',
          updateAt: 'Update At',
        }
      },
      sell:{
        title:{
          regionTitle: 'Region',
          amount: 'Amount',
          price: 'Price',
          location: 'Location',
          expiredAt: 'Expired At',
          updateAt: 'Update At',
        }
      },
      history:{
        zoom: {
          title: 'Quick Select',
          oneW: '1 Week',
          oneM: '1 Month',
          threeM: '3 Months',
          sixM: '6 Months',
          ytd: 'YTD',
          oneY: '1 Year',
          all: 'All',
        },
        series:{
          dailyAveragePrice: 'Daily Average Price',
          minMax: 'Max/Min Price',
          moving5: '5 Days Average Price',
          moving20: '20 Days Average Price',
          donchain: 'Price Change Range',
          volume: 'Sell Volume',
          orderCount: 'Order Count',
          volumePerOrder: 'Single Order Price',
        }
      },

    },


    myShipConfigCategoryView:{
      title: 'My Ship Config Category',
      subTitle: 'Manage My Ship Config Category',
      table:{
        title:{         
          scc_title: 'Title',
          scc_desc: 'Desc',
        }
      }
    },
    shipConfigCategoryView:{
      modal:{
        title: 'Title',
        desc: 'Desc',
      },
    },
    myShipConfigView:{
      title: 'My Ship Config',
      subTitle: 'Manage My Ship Config',
      table:{
        title:{         
          s_title: 'Ship Title',
          scc_title: 'Category',
          sc_shortDesc: 'Short Desc',
          sc_creationDate: 'Creation Date',
          sc_updateDate: 'Update Date',
        }
      }
    },
    myShipConfigCollectionView:{
      title: 'Favorited Ship Config',
      subTitle: 'Manage Favorited Ship Config',
      table:{
        title:{         
          s_title: 'Ship Title',
          scc_title: 'Category',
          sc_shortDesc: 'Short Desc',
          sc_creationDate: 'Creation Date',
          sc_updateDate: 'Update Date',
        }
      }
    },
    myShipConfigLikeView:{
      title: 'Reviewed Ship Config',
      subTitle: 'Manage Reviewed Ship Config',
      table:{
        title:{         
          s_title: 'Ship Title',
          scl_type_id: 'Type',
          scc_title: 'Category',
          sc_shortDesc: 'Short Desc',
          sc_creationDate: 'Creation Date',
          sc_updateDate: 'Update Date',
        }
      }
    },


    myTopicListView:{
      title: 'My Topic List',
      subTitle: 'Manage published topics',
      modal:{
        t_type_id: 'Type',
        t_cnt_publishDay: 'Add Show Days',
        t_cnt_publishDay_hint: 'Account balance not enough, cannot pay for it, plz recharge',
        costPrice: 'Add Day Cost',
        accountBalance: 'Account Balance',
        t_title: 'Title',
        t_title_hint: 'Title is empty or large than 45',
        t_shortDesc: 'Short Desc',
        t_shortDesc_hint: 'Short Desc is empty or large than 100',
        t_desc: 'Content',
        t_desc_hint: 'Content is empty or large than 1000',
      },
      table:{
        title:{         
          t_id: 'ID',
          t_type_id: 'Type',
          t_title: 'Title',
          t_shortDesc: 'Short Desc',
          t_startDate: 'Show Start Date',
          t_endDate: 'Show End Date',
          t_creationDate: 'Creation Date',
          t_updateDate: 'Update Date',
        }
      }
    },

    ////Corp
    pubCorpListView:{
      title: 'Corp list',
      subTitle: 'Create your own corp here',
      table:{
        title:{         
          co_id: 'ID',
          co_title: 'Name',
          co_code: 'Code',
          co_shortDesc: 'Description',
          co_cnt_member: 'number of members',
          co_cnt_km: 'KM statistics(Week/Month/Total)',
          co_creationDate: 'Created time',
        }
      }
    },
    corpFormModal:{
      modal:{
        co_title: 'Name',
        co_title_hint: 'less than 45 characters, cannot be empty',
        co_code: 'Code',
        co_code_hint: 'less than 10 characters, cannot be empty',
        co_rate_iskScore: '1 credit equals to',
        co_rate_iskScore_hint: '"1" means 1 credit equals to 1 ISK; Details are in corp event module',
        co_shortDesc: 'Description',
        co_shortDesc_hint: 'less than 500 characters',
        co_kmUri: 'KM URL',
        co_kmUri_hint: 'Official API for Corp KM, updates every hour',
        co_desc: 'Description',
        co_desc_hint: 'less than 2000 characters',
        co_notice: 'Annoucement',
        co_notice_hint: 'less than 2000 characters',
      },
    },
    corpApplyModal:{
      modal:{
        title: 'Join Corp',
        joining: '<span class=\"fa fa-circle-o-notch text-yellow\"></span> Applicaiton submitted, please wait ......',
        join_fail: '<span class=\"fa fa-close text-red\"></span> Application exists, view in my corp',
        join_success: '<span class=\"fa fa-check text-green\"></span> Applicaiton submitted , view in my corp',
      },
    },
    pubCorpDetailView:{
      title: 'Corp Details',
      subTitle: '',
      corpInfo:{
        title: 'Corp Info',

        co_id: 'ID',
        co_title: 'Name',
        co_code: 'Code',
        co_desc: 'Description',
        co_cnt_member: 'number of members',
        co_cnt_km: 'KM Statistics(Week/Month/Total)',


      },
      manageInfo:{
        title: 'Managing Team',
      },
      historyList:{
        title: 'Corp history',
      },
      kmInfo:{
        title: 'KM statistics',
      },
    },


    myCorpListView:{
      title: 'My corp list',
      subTitle: 'All corps in my list',
      table:{
        title:{         
          co_id: 'ID',
          co_title: 'Name',
          co_code: 'Code',
          co_shortDesc: 'Description',
          co_cnt_member: 'Number of members',
          co_cnt_km: 'KM Statistics(Week/Month/Total)',
          co_creationDate: 'Created time',
          cm_creationDate: 'Joined time',
          cm_role: 'Role',
        }
      }
    },

    corpDetailView:{
      title: 'Corp Detail',
      subTitle: '',
      corpInfo:{
        title: 'Corp Info',

        co_id: 'ID',
        co_title: 'Name',
        co_code: 'Code',
        co_rate_iskScore: 'Creadit to ISK ratio',
        co_desc: 'Description',
        co_cnt_member: 'Number of members',
        co_cnt_km: 'KM Statistics(Week/Month/Total)',


      },
      noticeMsg:{
        title: 'Corp Annoucement',
      },
      manageInfo:{
        title: 'Managing Team',
      },
      historyList:{
        title: 'Corp History',
      },
      kmInfo:{
        title: 'KM Statistics',
      },
    },

    corpMemberListView:{
      title: 'Corp Members',
      subTitle: 'Corp Member List',
      table:{
        title:{         
          cm_id: 'ID',
          cm_title: 'Name',
          cm_score: 'Credits',
          cm_creationDate: 'Join Time',
          cm_role: 'Role',
          cm_status: 'Status',
        }
      }
    },

    corpMemberFormModal:{
      modal:{
        cm_account_id: 'ieve account',
        cm_account_id_hint: 'Leave blank if you don\'t have one. Auto binding with ieve account!!',
        cm_title: 'Name',
        cm_title_hint: 'Less than 100 characters',
        cm_desc: 'Description',
        cm_desc_hint: 'Less than 2000 characters',
        cm_role_id: 'Role',
        cm_status_id: 'Status',
      },
    },

    corpMemberTransferFormModal:{
      modal:{
        title: 'Transfer',
        cmsl_corpMember_id: 'Sender Account',
        cmsl_corpMember_id_hint: 'Can not be blank',
        cmsl_corpMember_id_to: 'Receiver Account',
        cmsl_corpMember_id_to_hint: 'Can not be blank',
        cmsl_desc: 'Description',
        cmsl_desc_hint: 'Less than 2000 characters',
        cmsl_score: 'Transfer Credits',
        cmsl_score_hint: 'Can not be blank',
        successMsg: '<span class=\"fa fa-check text-green\"></span> Transfer completed, refresh to update',
      },
    },

    corpMemberScoreFormModal:{
      modal:{
        title: 'Credit Adjust',
        cmsl_corpMember_id: 'Account',
        cmsl_corpMember_id_hint: 'Can not be blank',
        cmsl_desc: 'Description',
        cmsl_desc_hint: 'Less than 2000 characters',
        cmsl_score: 'Creadits',
        cmsl_score_hint: 'Can not be blank',
        successMsg: '<span class=\"fa fa-check text-green\"></span> Adjust completed, refresh to update',
      },
    },

    corpMemberDetailView:{
      title: 'Corp member details',
      subTitle: '',
      corpMemberInfo:{
        title: 'Member Info',

        cm_id: 'ID',
        cm_title: 'Name',
        cm_desc: 'Description',
        cm_score: 'Credits',
        cm_role_id: 'Role',


      },
      eventLog:{
        title: 'Event History',
      },
      scoreLog:{
        title: 'Credits History',
      },
      kmInfo:{
        title: 'KM Statistics',
      },
    },

    corpEventListView:{
      title: 'Corp Event',
      subTitle: 'Corp Event Lists',
      table:{
        title:{         
          ce_id: 'ID',
          ce_title: 'Name',
          ce_eventDate: 'Event Time',
          ce_creationDate: 'Time Created',
          ce_status: 'Status',
        }
      }
    },

    corpEventFormModal:{
      modal:{
        title: 'New Corp Event',
        ce_title: 'Title',
        ce_title_hint: 'Can not be blank',
        ce_type_id: 'Type',
        ce_type_id_hint: 'Can not be blank',
        ce_eventDate: 'Event Time',
        ce_eventDate_hint: '',
        ce_desc: 'Description',
        ce_desc_hint: 'Less than 2000 characters',
        ce_status_id: 'Status',
        ce_status_id_hint: 'Can not be blank',
      },
    },

    corpEventEditView:{
      title: 'Edit Corp Event',
      subTitle: 'Valid after click "Save"',

      corpEventAttr:{
        ce_title: 'Title',
        ce_code: 'Share Link',
        ce_title_hint: 'Can not be blank',
        ce_type_id: 'Type',
        ce_type_id_hint: 'Can not be blank',
        ce_eventDate: 'Event Time',
        ce_eventDate_hint: '',
        ce_desc: 'Description',
        ce_desc_hint: 'Less than 2000 characters',
        ce_status_id: 'Status',
        ce_status_id_hint: 'Can not be blank',      
        ce_startDate: 'Start Time',
        ce_endDate: 'Finish Time',
        ce_isk_extra: 'Extra ISK',
        ce_isk_sum: 'Total ISK',
        ce_rate_iskShare: 'ISK Ratio',
        ce_isk_share: 'Assign SK',
        ce_rate_iskScore: '1 credit equals',
        ce_score_share: 'Assign Credits',
      },

      basicSection:{
        title: 'Basic Parameters',
      },
      advSection:{
        title: 'Advanced Parameters',
      },
      itemSection:{
        title: 'Resources Setup',
        table:{
          title:{
            type: 'Type',
            title: 'Name',
            count: 'Amount',
            unitPrice: 'Price',
            sumPrice: 'Sum',
            inAllPrice: 'Total',
          },
        },
      },
      memberSection:{
        title: 'Member Setup',
        table:{
          title:{
            cecm_corpMember_id: 'Name',
            cecm_weight: 'Weights',
            cecm_isk_sum: 'Assign ISK',
            cecm_isk_cost: 'Consume ISK',
            cecm_isk_get: 'Get ISK',
            cecm_score_get: 'Get Credits',
            cecm_getMethod_id: 'Type',
            cecm_status_id: 'Status',
          },
        },
      },
      exchangeSection:{
        title: 'Exchange Setup',
        autoPriceRefresh: 'Price updates automatically',
        table:{
          title:{
            cecmcei_corpEventCorpMember_id: 'Members',
            cecmcei_corpEventItem_id: 'Resources',
            cecmcei_isk_unit: 'Price',
            cecmcei_cnt: 'Amounts',
            cecmcei_isk_sum: 'Total',
            cecmcei_desc: 'Description',
          },
        },
      },
    },
    corpEventDetailView:{
      title: 'Share Crop Events',
      subTitle: 'Under dev., events can be shared via URL links',
    },

    corpMemberScoreListTable:{
      title:{
        cmsl_id: 'ID',
        cmsl_type_id: 'Type',
        cmsl_score: 'Credits',
        cmsl_creationDate: 'Time',
        cmsl_desc: 'Description',
      },
      msg:{
        someTypeCannotDelete: '<span class=\"text-muted\"> Corp Events and Orders can not be removed here, please edit in the modules</span>',
      },
    },



  },

  region:{
    10000001: 'Derelik',
    10000002: 'The Forge',
    10000016: 'Lonetrek',
    10000032: 'Sinq Laison',
  }
}

export default messages;
