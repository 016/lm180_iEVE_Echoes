const messages =  {
  '|':'|',
  common:{
    title: '<b>i</b>EVE Echoes',
    titleShort: '<b>i</b>EVE',
    login: 'Entrar',
    signup: 'Registrarse',
    forgotPass: 'Olvidé mi contraseña',
    resetPass: 'Resetablecer contraseña',
    backIndexPage: 'Volver al índice',

    smsCode: 'Código SMS',
    sendSms: 'Enviar SMS',
    sendEmailCode: 'Enviar código por Email',
    emailCode: 'Código de Email',
    captcha: 'Captcha',
    locale:{
      zh: '????',
      en: 'Use English',
    },
    create: 'Crear',
    update: 'Editar',
    view: 'Examinar',
    delete: 'Borrar',
    op: 'Operate',
    id: 'ID',

    costCurrency: 'ISK',
    costCharge: '<span>Actualmente, la fase de pruebas es solo por invitacíon. El costo de la publicacion de información se establece en una cantidad relativamente baja y luego se restablecerá a la normalidad. Las cuentas invitadas reciben algo de ISK con propositos de prueba.</span><br/><span>Para evitar Spam, se cobrará una cierta cantidad de ISK por el mensaje publicado y no se podra publicar si el saldo es insuficiente</span><br/><span>[AÚN NO SE HA IMPLEMENTADO]Método de recarga: envíe ISK a través de un contrato de ieve en el juego, agrega `ieve-tú ieve Nombre de cuenta del sitio web`(Para mí\ es ieve-DP, tu nombre de cuenta resgistrada en el sitio web de iEVE es muy importante!!!) in desc part, recargará la cuenta depues de recibir el contrato</span><br/><span>Está prhibido publicar insultos personales, RMT(intercambio de dinero real) o cualquier otro contenido inapropiado. Dicha publicación sera eliminada sin reembolso. La violacion de estas condiciones dara a lugar la prohibición de la cuenta sin reembolso.</span>',

    newElement:{
      title: 'Título',
      desc: 'Descripción'
    },
  },

  title:{
    corp: ' Corporación',
  },

  time:{
    year: "Año",
    month: "Mes",
    day: "Dia",
    hour: "Hora",
    min: "Minuto",
    sec: "Segundo",
  },

  datasource:{
    demo: 'Demo Data',
    d201912: '201912 Test Data',
    d202007: '202007 Test Data',
    d202008: '202008 Data',
    d202106: '202006 Vxxxx Data',
  },

  btn:{
    new: 'Nuevo',
    save: 'guardar',
    edit: 'Editar',
    cancel: 'Cancelar',
    close: 'Cerrar',
    newLink: 'Nuevo Link',
  },

  status:{

  },
  type:{
    partner: {
      person: 'Persona',
      company: 'Compañia'
    },
    sexy: {
      male: 'Hombre',
      female: 'Mujer',
    },
    yon: {
      yes: 'Si',
      no: 'No',
    },

    ship:{
      frigate: 'Fragata',
      destroyer: 'Destructor',
      cruiser: 'Crucero',
      battlecruiser: 'Crucero de Batalla',
      battleship: 'Acorazado',
      carrier: 'Carrier',
      industrial: 'Industrial',
    },

    shipMode:{
      SniperTitle: 'Modo Franctirador',
      SniperInfo: 'Tiempo de activacion de todas las armas +100%</br>Velocidad de rastreo de las armas -60%</br>Velocidad de explosión vuelo de misiles -60%</br>Velocidad de la nave -99%</br>Control de distancia para los drones +75%</br>Daño Optimo de armas +100%</br>Alcance Optimo de armas +100%</br>Velocidad de los misiles +100%</br>Todos los daños +50%',
      RechargeTitle: 'Recharge Mode',
      RechargeInfo: 'Radio de lectura de la nave +100%</br>Velocidad de la nave -80%</br>Tiempo de recarga del capacitor(condensador) -50%',
      DefenseTitle: 'Modo Defensivo',
      DefenseInfo: 'Todos los daños -90%</br>velocidad de vuelo de la nave -80%</br>Radio de lectura de la nave -20%</br>Todas las ressitencias de la nave +50%',
      PropulsionTitle: 'Modo Propulsion',
      PropulsionInfo: 'Tiempo de recarga del capacitor(condensador) de la nave +500%</br>Radio de lectura de la nave +100%</br> Velocidad de la nave +100%',
      SiegeTitle: 'Siege Mode',
      SiegeInfo: 'Velocidad de rastreo de armas -95%</br>Velocidad de exploción de misiles -90%</br>Radio de explosión de misiles +1000%</br>Velocidad de la nave -99%</br>Radio de lectura de la nave +100%</br> Todos los daños +100%',
      BombardTitle: 'Modo Bombardero',
      BombardInfo: 'Velocidad de explosion de misiles -50%</br>Radio de explosion de misiles +100%</br>Velocidad de nave -95%</br>Radio de lectura de la nave +200%</br>Tiempo de vuelo de misiles +200%</br>Todos los daños +20%',
    },

    shipConfigLikeType:{
      t_1: 'UP',
      t_9: 'DOWN',
    },

    slotType:{
      low: 'Ranura Inferior',
      mid: 'Ranura Intermedia',
      high: 'Ranura superior',

      drone: 'Drones de la nave',


      rig_p: 'Modificadores de combate',
      rig_m: 'Modificadores de Ingeniería',
    },

    weapon:{
      missile: {
        title: 'Lanzamisiles',
        qd: 'Lanzamisiles Pequeño',
        hj: 'Lanzatorpedos Pequeño',
        qk: 'Lanzamisiles rapidos Medianos',
        zd: 'Lanzamisiles Medianos',
        zg: 'Lanzatorpedos medianos',
        zk: 'Lanzamisiles rapidos Medianos',
        xh: 'Lanzamisiles Grandes',
        yl: 'Lanzatorpedos Grandes',
      },
      hunhe: {
        title: 'Cañon de Riel',
        cigui:{
          s: 'Cañon de Riel Rayado Pequeño',
          m: 'Cañon de Riel Rayado Mediano',
          l: 'Cañon de Riel Rayado Grande',
          xl: 'Cañon de Riel Rayado Extra grande',
        },
        jisu:{
          s: 'Cañon de Riel Chato Pequeño',
          m: 'Cañon de Riel Chato Mediano',
          l: 'Cañon de Riel Chato Grande',
          xl: 'Cañon de Riel Chato Extra grande',
        }
      },
      power: {
        title: 'Láseres',
        mcjg:{
          s: 'Láser de pulso Pequeño',
          m: 'Láser de pulso Mediano',
          l: 'Láser de pulso Grande',
          xl: 'Láser de pulso Extra grande',
        },
        jsjg:{
          s: 'Rayo Láser pequeño',
          m: 'Rayo Láser Mediano',
          l: 'Rayo Láser Grande',
          xl: 'Rayo Láser Extra grande',
        }
      },
      tanshe: {
        title: 'Cañones',
        zdjn:{
          s: 'Cañones Auntomaticos Pequeños',
          m: 'Cañones Auntomaticos Mediano',
          l: 'Cañones Auntomaticos Grande',
          xl: 'Cañones Auntomaticos Extra grandes',
        },
        ld:{
          s: 'Cañones de Combate Pequeño',
          m: 'Cañones de Combate Mediano',
          l: 'Cañones de Combate Grande',
          xl: 'Cañones de Combate Extragrande',
        }
      },
      mining: {
        title:'Equipo de Minería(Equipo de Recogida)',
        ckjg:'Laser Minero',
        ltck:'Minero a cielo abierto',
      },
      liejie: {
        title: 'Descomponedores',
        jl:{
          s: 'Descomponedores por Corriente Pequeños',
          m: 'Descomponedores por corriente Medianos',
          l: 'Descomponedores por Corrienter Grandes',
        },
        zd:{
          s: 'Descomponedores por Impacto Pequeños',
          m: 'Descomponedores por Impacto Medianos',
          l: 'Descomponedores por Impacto Grandes',
        }
      },
    },

    drone:{
      s: { 
        title: 'Drones Pequeños '
      },
      m: { 
        title: 'Drones Medianos '
      },
      l: { 
        title: 'Drones Grandes '
      },
      sen: { 
        title: 'Drones Centinela'
      },
    },

    slotMid:{
      ewar: {
        title: 'Guerra Electrónica',
        tzcr:'Redificador de Estasis',
        tzbz:'Stasis Grappler',
        yqrd:'Disruptores de Salto',
        yqrp:'Codificador de Salto',
      },
      ln: {
        title: 'Nosferatus de Energia ',
        s: 'Nosferatu de Energia Pequeños',
        m: 'Nosferatu de Energia Medianos',
        l: 'Nosferatu de Energia Grandes',
        xl: 'Nosferatu de Energia Extra grandes',
      },
      nlzh: {
        title: 'Neutralziadores de Energia',
        s: 'Neutralziadores de Energia Pequeños',
        m: 'Neutralziadores de Energia Medianos',
        l: 'Neutralziadores de Energia Grandes',
        xl: 'Neutralziadores de Energia Extra grandes',
      },
      ychdhc: {
        title: 'Potenciador de Escudos Remotos',
        s: 'Potenciador de Escudos Remotos Pequeños',
        m: 'Potenciador de Escudos Remotos Medianos',
        l: 'Potenciador de Escudos Remotos Grandes',
        xl: 'Potenciador de Escudos Remotos Extra grandes',
      },
      yczjwx: {
        title: 'Reparadores de Blindaje Remotos',
        s: 'Reparadores de Blindaje Remotos Pequeños',
        m: 'Reparadores de Blindaje Remotos Medianos',
        l: 'Reparadores de Blindaje Remotos Grandes',
        xl: 'Reparadores de Blindaje Remotos Extra grandes',
      },
      qthdhc: {
        title: 'Potenciador de Escudos Grupales',
        s: 'Potenciador de Escudos Grupales Pequeños',
        m: 'Potenciador de Escudos Grupales Medianos',
        l: 'Potenciador de Escudos Grupales Grandes',
        xl: 'Potenciador de Escudos Grupales Extra grandes',
      },
      qtzjwx: {
        title: 'Reparadores de Blindaje Grupales',
        s: 'Reparadores de Blindaje Grupales Pequeños',
        m: 'Reparadores de Blindaje Grupales Medianos',
        l: 'Reparadores de Blindaje Grupales Grades',
        xl: 'Reparadores de Blindaje Grupales Extra grandes',
      },
      hdlc: {
        title: 'Modulos de Campo de Escudos',
        s: 'Modulos de Campo de Escudos Pequeños',
        m: 'Modulos de Campo de Escudos Medianos',
        l: 'Modulos de Campo de Escudos Grandes',
        xl: 'Modulo de Campo de Escudos Extragrandes',
      },
      zjlj: {
        title: 'Modulos de Vinculo de Blindaje',
        s: 'Modulos de Vinculo de Blindaje Pequeños',
        m: 'Modulos de Vinculo de Blindaje Medianos',
        l: 'Modulos de Vinculo de Blindaje Grandes',
        xl: 'Modulos de Vinculo de Blindaje Extragrandes',
      },
      ycdrcs: {
        title: 'Transmisores de Capacitores Remotos',
        s: 'Transmisores de Capacitores Remotos Pequeños',
        m: 'Transmisores de Capacitores Remotos Medianos',
        l: 'Transmisores de Capacitores Remotos Grandes',
        xl: 'Transmisores de Capacitores Remotos Extra grandes',
      },
      qtdrcs: {
        title: 'Transmisores de Capacitor Grupales',
        s: 'Transmisores de Capacitor Grupales Pequeños',
        m: 'Transmisores de Capacitor Grupales Medianos',
        l: 'Transmisores de Capacitor Grupales Grandes',
        xl: 'Transmisores de Capacitor Grupales Extra grandes',
      },
    },

    slotLow:{



      drqdc: {
        title: 'Baterías de Capacitor',
        s: 'Baterías de Capacitor Pequeñas',
        m: 'Baterías de Capacitor Medianas',
        l: 'Baterías de Capacitor Grandes',
        xl: 'Baterías de Capacitor Extragrandes',
      },
      hdzq: {
        title: 'Endurecedores de Escudo',
        fys:'Endurecedores de Escudo Reactivos',
        zsy:'Campo de Invulnerabilidad Adaptativos',
      },
      hdkz: {
        title: 'Extensor de Escudos',
        s: 'Extensor de Escudos Pequeños',
        m: 'Extensor de Escudos Medianos',
        l: 'Extensor de Escudos Grandes',
        xl: 'Extensor de Escudos Extragrandes',
      },
      hdhc: {
        title: 'Potenciadores de Escudo',
        s: 'Potenciadores de Escudo Pequeño',
        m: 'Potenciadores de Escudo Mediano',
        l: 'Potenciadores de Escudo Grande',
        xl: 'Potenciadores de Escudo Extra grandes',
      },
      zjzq: {
        title: 'Endurecedores de Escudo',
        fys:'Endurecedores de Escudo Reactivos',
        zsy:'Endurecedores de Escudo Adaptativos',
      },
      zjb: {
        title: 'Placas de Blindaje',
        s100: '100mm Placas de Acero Reforzado',
        s200: '200mm Placas de Acero Reforzado',
        m400: '400mm Placas de Acero Reforzado',
        m800: '800mm Placas de Acero Reforzado',
        l1600: '1600mm Placas de Acero Reforzado',

      },
      zjwx: {
        title: 'Reparadores de Blindaje',
        s: 'Reparadores de Blindaje Pequeñas',
        m: 'Reparadores de Blindaje Medianas',
        l: 'Reparadores de Blindaje Grandes',
        xl: 'Reparadores de Blindaje Extra grandes',
      },
      jgwx: {
        title: 'Hull Repairer',
        s: 'Small Hull Repairer',
        m: 'Medium Hull Repairer',
        l: 'Large Hull Repairer',
        xl: 'Extra Large Hull Repairer',
      },
      sskz: {
        title: 'Control de Daños',
        sskz:'Control de Daños',
      },
      tjqgl: {
        title: 'Mejoras de propulsión',
        gxwd:'Estabilizadores de inercia',
        yqwd:'Estabilizadores de núcleo de salto',
      },
      jlrs: {
        title: 'Postquemadores',
        s: 'Postquemadores Pequeños',
        m: 'Postquemadores Medianos',
        l: 'Postquemadores Grandes',
        xl: 'Postquemadores Extra grandes',
      },
      wxyqtj: {
        title: 'Micromotores de Salto(Distorsión)',
        s: 'Micromotores de Distorsión Pequeños',
        m: 'Micromotores de Distorsión Medianos',
        l: 'Micromotores de Distorsión Grandes',
        xl: 'Micromotores de Distorsión Extra grandes',
      },
      yszb: {
        title: 'Camuflaje',
        yxzz:'Dispositivos de Camuflaje',
        ymxd:'Dispositivos de Camuflaje Operaciones Encubiertas',
      },
      wqsj: {
        title: 'Mejora de Armas',
        src: 'Disipador Térmico',
        ccwd: 'Estabilizadores de Campo Magnético',
        hzwd: 'Establizadores Giroscópicos',
        hlzwd: 'Establizadores de Macropartículas',
        ddkz: 'Sistema de control Balístico',
        ddzd: 'Ordenadores de Teledirección de Misiles',
        sdjsj: 'Ordenador de Rastreo',
        wrjshzx: 'Amplificadores de Daño de Drones',
        wrjdh: 'Ordenadores de Navegacion de Drones',
        qfwsd: 'Vinculo de Rastreo Omnidireccional',
      },
    },

    rig_p: {
      wqzq:{
        title: 'Modificadores de Armas',
        hhwq: 'Modificadores de Cañones de Riel',
        ljwq: 'Modificadores de Desacomponedores',
        nlwq: 'Modificadores de Láseres',
        tswq: 'Modificadores de Cañones',
        missile: 'Modificadores de misiles',
        drone: 'Modificadores de Drones',
      },
      fyzq:{
        title: 'Modificadores de Defensa',
        hd: 'Modificadores de Escudos',
        zj: 'Modificadores de Blindaje',
        jg: 'Modificadores de Estructura',
      },
    },

    rig_m: {
      navigate:{
        title: 'Modificadores de Navegación',
      },
      gongcheng:{
        title: 'Modificadores de ingeniería',
      },
      electoric:{
        title: 'Modificadores de Electrónica',
      },
      industry:{
        title: 'Modificadores de Industria',
      },
    },


    projectConfigData:{
      account: 'Cuenta',
      server: 'Servidor',
      domain: 'Dominio',
    },
    projectFile:{
      locale: 'Local',
      thrd: '3ro',
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

    p_gz: 'Aleación Lustrosa',
    p_gc: 'Compuesto lustroso',
    p_sg: 'Aleación Reluciente',
    p_ns: 'Aleación Condensada',
    p_jm: 'Aleación Preciosa',
    p_zs: 'Compuesto Motley',
    p_xw: 'Compuesto de Fibras',
    p_tg: 'Compuesto Luminoso',
    p_dy: 'Compuesto Opulento',
    p_gh: 'Compuesto Brillante',
    p_jt: 'Compuesto Cristalino',
    p_ah: 'Compuesto Oscuro',
    p_hxqt: 'Gas Reactivo',
    p_xyqt: 'Gas Noble',
    p_jc: 'Metales Base',
    p_zhong: 'Metales Pesados',
    p_gjs: 'Metales Nobles',
    p_fy: 'Metales Reactivos',
    p_yd: 'Metales Toxicos',
    p_gyxw: 'Fibra Industrial',
    p_cqlsl: 'Plasticos Superextensibles',
    p_jfxa: 'Poliaramidos',
    p_lqj: 'Refrigerante',
    p_nsy: 'Condensados',
    p_jzmk: 'Bloques de Construcción',
    p_nmt: 'Nanites',
    p_gjgzc: 'Vidrio de Silicato',
    p_lqdy: 'Unidades Smartfab',
    p_zhongshui: 'Agua pesada',
    p_xfdlz: 'Plasma suspendido',
    p_yhcy: 'Ozono Líquido',
    p_lzry: 'Solución Iónica',
    p_twsrl: 'Isótopos de Oxigeno',
    p_dlztt: 'Plasmoides',


    s_jssp : ' Chatarra',
    s_qhjssp : 'Chatarra Reforzada',
    s_wdl : 'Microcircuitos Carbonizado',
    s_jkdl : 'Circuito de Interfaz Fundido',
    s_nydl : 'Circuito de Alimentación Fundido',
    s_ljdl : 'Burned Logic Circuit',
    s_cfjg : 'Smashed Trigger Unit',
    s_jf : 'Sistemas de Armas de Corta distancia Dañado',
    s_yg : 'Procesador Telemétrico Chamuscado',
    s_sjwl : 'Damaged Artificial Neural Network',
    s_llzlt : 'Fluido de Lorentz Contaminado',
    s_jhdt : 'Polimero Conductivo',
    s_nmjht : 'Polimero de Nanite Contaminados',
    s_dlb : 'Bomba de Corriente(actual) defesctuosa',
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
    o_zsy:'Escordita',
    o_gjy:'Piroxeres',
    o_xcy:'Plagioclase',
    o_obes:'Omber',
    o_sps:'Kernita',
    o_jsbk:'Jaspet',
    o_xmft:'Hemorfita',
    o_twyk:'Hedbergita',
    o_hy:'espodumain',
    o_hzs:'Ocre Oscuro',
    o_pmy:'Gneiss',
    o_kljs:'Crokita',
    o_sdts:'Bistot',
    o_akly:'Arkonor',
    o_jfdy:'Mercoxita',
  },

  debris:{
    t_1 : 'Escobros de nave de Mordu\'s Legion',
    t_2 : 'Escobros de nave de los Serpentis',
    t_3 : 'Escobros de nave de cartel del Angel',
    t_4 : 'Escobros de nave de los Sansha',
    t_5 : 'Escobro de nave de los Guristas',
    t_6 : 'Escobro de nave de SOE',
    t_7 : 'Escobro de nave de la Alianza Blood Raider',
    t_11  : 'Escobro de nave de YanJung',

    t_21  : 'Casco Dañado de ORE Pequeño',
    t_22  : 'Casco Dañado de ORE Mediano',
    t_23  : 'Casco Dañado de ORE Grande',

    t_31  : 'Casco Dañado de InterBus Pequeño',
    t_32  : 'Casco Dañado de InterBus Mediano',
    t_33  : 'Casco Dañado de InterBus Grande',


    t_104 : 'Lv.4 Amarr Escobros de nave ',
    t_105 : 'Lv.5 Amarr Escobros de nave ',
    t_106 : 'Lv.6 Amarr Escobros de nave ',
    t_107 : 'Lv.7 Amarr SEscobros de nave ',
    t_108 : 'Lv.8 Amarr Escobros de nave ',
    t_109 : 'Lv.9 Amarr Escobros de nave ',
    t_110 : 'Lv.10 Amarr Escobros de nave ',

    t_204 : 'Lv.4 Caldari Escobros de nave ',
    t_205 : 'Lv.5 Caldari Escobros de nave ',
    t_206 : 'Lv.6 Caldari Escobros de nave ',
    t_207 : 'Lv.7 Caldari Escobros de nave ',
    t_208 : 'Lv.8 Caldari Escobros de nave ',
    t_209 : 'Lv.9 Caldari Escobros de nave ',
    t_210 : 'Lv.10 Caldari Escobros de nave ',

    t_304 : 'Lv.4 Gallente Escobros de nave ',
    t_305 : 'Lv.5 Gallente Escobros de nave ',
    t_306 : 'Lv.6 Gallente Escobros de nave ',
    t_307 : 'Lv.7 Gallente Escobros de nave ',
    t_308 : 'Lv.8 Gallente Escobros de nave ',
    t_309 : 'Lv.9 Gallente Escobros de nave ',
    t_310 : 'Lv.10 Gallente Escobros de nave ',

    t_404 : 'Lv.4 Minmatar Escobros de nave ',
    t_405 : 'Lv.5 Minmatar Escobros de nave ',
    t_406 : 'Lv.6 Minmatar Escobros de nave ',
    t_407 : 'Lv.7 Minmatar Escobros de nave ',
    t_408 : 'Lv.8 Minmatar Escobros de nave ',
    t_409 : 'Lv.9 Minmatar Escobros de nave ',
    t_410 : 'Lv.10 Minmatar Escobros de nave ',
  },

  datacore:{
    t_1 : 'Núcleo de Datos - Ingeniería de Nave Estelar Amarr',
    t_2 : 'Núcleo de Datos - Ingeniería de Nave Estelar Caldari',
    t_3 : 'Núcleo de Datos - Ingeniería de Nave Estelar Gallente',
    t_4 : 'Núcleo de Datos - Ingeniería de Nave Estelar Minmatar ',

    t_11  : 'Núcleo de Datos - Física Láser',
    t_12  : 'Núcleo de Datos - Física Electromagnetica',
    t_13  : 'Núcleo de Datos - Física de Alta Energia',
    t_14  : 'Núcleo de Datos - Ingeniería Aeroespacial',
    t_15  : 'Núcleo de Datos - Ingeniería Mecanica',
  },

  race:{
    c: 'Caldari',
    g: 'Gallente',
    a: 'Amarr',
    m: 'Minmatar',
    o: 'Otros',
    r_jdl: 'Caldari',
    r_glt: 'Gallente',
    r_am: 'Amarr',
    r_mmt: 'Minmatar',
    r_other: 'Otros',
  },

  skill: {
    suiTie: 'Reprocesamiento de Chatarra',
    suiTieJJ: 'Reprocesamiento de Chatarra Avanzado',
    suiTieZZ: 'Reprocesamiento de Chatarra Experto',
  },

  topicType:{
    normal : 'Normal Topic',
    siteNews : 'iEVE Noticias',
    officialNews : 'Noticias Oficiales',
    thirdNews : '3rd Part News',
    legion : 'Corp News',
    personal : 'Personal News',
    cheater : 'Cuidado con los Mentirosos',
    tradeBuy : 'Comprar Orden',
    tradeSell : 'Vender Orden',
    tradeBoth : 'Mix Order',
    1 : 'Normal Topic',
    11 : 'iEVE News',
    13 : 'Official News',
    15 : '3rd Part News',
    16 : 'Cuidado con los Mentiroso',
    21 : 'Corp News',
    31 : 'Personal News',
    61 : 'comprar orden',
    62 : 'vender prden',
    69 : 'Mix Order',
  },

  shipBlueprintType:{
    ship: 'Nave',
    equipment: 'Equipamiento',
    drone: 'Drone',
    building: 'Construcción',
  },


  item:{
    title:{
      e_id: 'ID',
      e_title: 'Titulo',
      e_isk_market: 'Precio',
      r_id: 'ID',
      r_title: 'Titulo',
      r_isk_market: 'Precio',


      e_volumn: 'Volumen',
      e_powerCost: 'Powergrid',
      e_gjCost: 'Costo de Activación',
      e_damageRate: 'Tasa de Daño',
      e_runTime: 'Duración',
      e_reloadTime: 'Tiempo de Recarga',

      e_singleDamage: 'Daño unico',
      e_v_1_mid_2: 'Transferencia de Energia',
      e_v_1_mid_3: 'Neutralizacion',
      e_v_1_low_13: 'Transferencia de Energia',
      e_v_1_mid_23: 'Transferencia de Energia',
      e_v_1_mid_31: '??????',
      e_v_1_mid_32: '??????',

      e_shield: 'Escudo ',
      e_shield_r: 'Puntos del potenciador de Escudo',
      e_shield_add: 'Puntos adicionales del blindaje',
      e_armor: 'Blindaje ',
      e_armor_r: 'Puntos del reparador del Blindaje',
      e_armor_add: 'Puntos adicionales del Blindaje ',
      e_structure: 'Estructura ',
      e_structure_r: 'Puntos de Reparación de la Estructura',
      e_structure_add: 'Puntos adicionales de la Estructura',

      e_singleRadius: 'Radio de Lectura',
      e_scanResolution: 'Resolucion del Escaner',


      e_range: 'Rango Optimo',
      e_range_high_1: 'Alcacne de los misiles',

      e_lostRange: 'Efectividad por decaida',
      e_followSpeed: 'Velocidad de Rastreo',
      e_push: 'Push Modifier',
      
      e_ch_flySpeed: 'Bonus de velocidad',
      e_ch_flySpeed_ac: ' Bonus de velocidad de vuelo activa',  
      e_ch_flyTime: 'Bonus en tiempo de vuelo',
      e_ch_flyTime_ac: 'Bonus en tiempo de vuelo activa',
      e_ch_inertia: 'Modificador de Inercia',
      e_ch_inertia_ac: 'Modificador de Inercia activa',
      e_ch_wrapDisrup: 'Warp Scramble Strength',
      e_ch_wrapDisrup_ac: 'Active-Warp Scramble Strength',
      e_ch_scanResolution: 'Bonus de Resolucion de Escaner',
      e_ch_scanResolution_ac: 'Bonus de resolucion de Escaner activa',
      e_ch_signalRadius: 'Modificador de Radio de Lectura',
      e_ch_signalRadius_ac: ' Modificador de Radio de Lectura Activa',
      e_ch_kg: 'Masa Adicional',
      e_ch_kg_ac: 'Masa Adicional Activa',
      e_ch_damageRate: 'Modificador de Daño',
      e_ch_damageRate_ac: ' Modificador de Daño Activa',
      e_ch_runTime: 'Modificador de Duración',
      e_ch_runTime_ac: 'Modificador de Duración activa',
      e_ch_lostRange: 'Modificador de Efectivdad por decaida',
      e_ch_lostRange_ac: 'Modificador de Efectividad por decaida Activa',
      e_ch_range: 'Modificador de Rango Optimo',
      e_ch_range_ac: 'Modificador de Rango Optimo Activa',
      e_ch_followSpeed: 'Modificador de Velocidad de Rastreo',
      
      
      e_ch_exSpeed: 'Modificador de Velocidad de Explosión',
      e_ch_exSpeed_ac: 'Modificador de Velocidad de Explosión activa',
      e_ch_exRadius: 'Modificador de Radio de Explosión',
      e_ch_exRadius_ac: 'Modificador de Radio de Explosion Activa',


      e_exSpeed: 'Velocidad de Explosion',
      e_exRadius: 'Radio de Explosión',
      e_fuel: 'Fuel',



      e_v_1_low_1: ' Bonus al Capacitor(Condensador)',
      e_v_2_low_1: 'Bonus temporal al Condensador ',
      e_v_3_low_1: 'Velocidad de Bonus temporal al Condensador',
      e_v_4_low_1: 'Resistencia del Condensador a la Guerra Electronica',


      e_v_1_low_12: 'Puntos Adicionales a Escudos Temporales',
      e_v_2_low_12: 'Velocidad de Puntos Adicionales a Escudos Temporales',
      e_v_1_low_22: 'Puntos adicionales al Blindaje temporal',
      e_v_2_low_22: 'Velocidad de Puntos adicionales al Blindaje Temporal',

      e_v_1_low_41: 'Resistencia al Daño Activo',


      e_v_1_low_51_2401: 'Velocidad del modificador de Inercia ',
      e_v_1_low_51_2402: 'Warp Scramble Strength Bonus',

      e_v_1_low_53: 'Bonus de Capacidad del Capacitor(Condensador)',

      e_v_1_low_61: 'Tiempo de Recalibrado de los Sensores',

      e_v_1_low_71: 'Modificador de Daño activo',
      e_v_2_low_71: 'Modificadores de duracion activa',

      e_v_1_low_71_3401: 'Ganancia de Efectos al Activarse',
      e_v_1_low_71_3302: 'Ganancia de Efectos al activarse',





      r_v_1_rig_p_1_1_1: 'Bonus de Velocidad al Aplcar Daño' ,
      r_v_1_rig_p_1_1_2: 'Modificador de efectividad por decaida',
      r_v_1_rig_p_1_1_3: 'Costo de Activación del modificador',
      r_v_1_rig_p_1_1_4: 'Duracion del modificador',
      r_v_1_rig_p_1_1_5: 'Modificador de Requerimiento de Suministro de Energia',

      r_v_1_rig_p_1_11_11: 'Bonus de Velocidad al Aplcar Daño',
      r_v_1_rig_p_1_11_12: 'Modificador de efectividad por decaida',
      r_v_1_rig_p_1_11_13: 'Costo de Activación del modificador',
      r_v_1_rig_p_1_11_14: 'Duracion del modificador',
      r_v_1_rig_p_1_11_15: 'Modificador de Requerimiento de Suministro de Energia',

      r_v_1_rig_p_1_21_21: 'Bonus de Velocidad al Aplcar Daño',
      r_v_1_rig_p_1_21_22: 'Modificador de efectividad por decaida',
      r_v_1_rig_p_1_21_23: 'Activation Cost Modifier',
      r_v_1_rig_p_1_21_24: 'Duracion del modificador',
      r_v_1_rig_p_1_21_25: 'Modificador de Requerimiento de Suministro de Energia',

      r_v_1_rig_p_1_41_41: 'Bonus de Velocidad al Aplcar Daño',
      r_v_1_rig_p_1_41_42: 'Modificador de efectividad por decaida',
      r_v_1_rig_p_1_41_43: 'Duracion del modificador',
      r_v_1_rig_p_1_41_44: 'Modificador de Requerimiento de Suministro de Energia',

      r_v_1_rig_p_1_61_61: 'Bonus de Velocidad de Explosión',
      r_v_1_rig_p_1_61_62: 'Bonus de Velocidad al Aplcar Daño',
      r_v_1_rig_p_1_61_63: 'Modificador de Radio de Explosion',
      r_v_1_rig_p_1_61_64: 'Bonus en tiempo de vuelo',
      r_v_1_rig_p_1_61_65: 'Bonus de Velocidad al volar',
      r_v_1_rig_p_1_61_66: 'Duracion del Modificador',

      r_v_1_rig_p_1_81_81: 'Bonus de Velocidad al Aplcar Daño',
      r_v_1_rig_p_1_81_82: 'Modificador de efectividad por decaida',
      r_v_1_rig_p_1_81_83: 'Duracion del modificador',
      r_v_1_rig_p_1_81_84: 'Bonus de Rango de Controles de Los Drones',

      r_v_1_rig_p_2_101_101: 'Duracion del modificador',
      r_v_1_rig_p_2_101_102: 'Bonus Bonus de Amuneto de Escudos',
      r_v_1_rig_p_2_101_103: 'Costo de Activacion del Modificador',
      r_v_1_rig_p_2_101_104: 'Bonus de Escudo',
      r_v_1_rig_p_2_101_105: 'Bonus de Resistencia a daño de E.M. a Escudos',
      r_v_1_rig_p_2_101_106: 'Bonus de Resistencia a daño Térmico a Escudos',
      r_v_1_rig_p_2_101_107: 'Bonus de Resistencia a daño Kinetico a escudos ',
      r_v_1_rig_p_2_101_108: 'Bonus de Resistencia a daño Explosivo a escudos',

      r_v_1_rig_p_2_121_121: 'Duracion del modificador',
      r_v_1_rig_p_2_121_122: 'Bonus de puntos de Reparación de Blindaje',
      r_v_1_rig_p_2_121_123: 'Costo de Activacion del Modificado',
      r_v_1_rig_p_2_121_124: 'Bonus de Blindaje',
      r_v_1_rig_p_2_121_125: 'Bonus de Resistencia a daño E.M. al Blindaje',
      r_v_1_rig_p_2_121_126: 'Bonus de Resistencia a daño Térmico al Blindaje',
      r_v_1_rig_p_2_121_127: 'Bonus de Resistencia a daño kinetico al Blindaje',
      r_v_1_rig_p_2_121_128: 'Bonus de Resistencia a daño Explosivo al Blindaje',

      r_v_1_rig_p_2_141_141: 'Bonus de Estructura',
      r_v_1_rig_p_2_141_142: 'Bonus de Resistencia a daño E.M. a la Estructura',
      r_v_1_rig_p_2_141_143: 'Bonus de Resistencia a daño Termico a la Estructura',
      r_v_1_rig_p_2_141_144: 'Bonus de Resistencia a daño Kinetico a la Estructura',
      r_v_1_rig_p_2_141_145: 'Bonus de Resistencia a daño Explosivo a la Estructura',

      r_v_1_rig_m_1_1001_1001: 'Costo de Activacion del Modificado',
      r_v_1_rig_m_1_1001_1002: 'Bonus de Velocidad al volar',
      r_v_1_rig_m_1_1001_1003: 'Modificador de Inercia',
      r_v_1_rig_m_1_1001_1004: 'Bonus de Capacidad de Bodega',
      r_v_1_rig_m_1_1001_1005: 'Mass Bonus',
      r_v_2_rig_m_1_1001_1005: 'Modificador de Inercia',
      r_v_3_rig_m_1_1001_1005: 'Bonus de Velocidad al volar',
      r_v_1_rig_m_1_1001_1006: 'Warp Scramble Strength',
        r_v_1_rig_m_1_1001_1007: 'Bonus de Velocidad de Salto',

      r_v_1_rig_m_2_1101_1101: 'Bonus Bonus de Capacidad',
      r_v_1_rig_m_2_1101_1102: 'Modificador de Capacidad de Recarga',
      r_v_1_rig_m_2_1101_1103: 'Bonus a la salidad de Requerimiento de Suministro de Energia',
      r_v_1_rig_m_2_1101_1104: 'Bonus a Resolucion de Escaner',

      r_v_1_rig_m_3_1201_1201: 'Bonus a la Intencidad del Escaneo',
      r_v_1_rig_m_3_1201_1202: 'Bonus a la Intencidad del Escaneo',

      r_v_1_rig_m_4_1301_1301: 'Bonus al Volumen de Mineo',
      r_v_1_rig_m_4_1301_1302: 'Duración del Modificador',
      r_v_1_rig_m_4_1301_1303: 'Modificador de Rango Optimo',
      r_v_1_rig_m_4_1301_1304: 'Costo de Activacion del Modificado',


      dps: 'DPS',




    }
  },



  footerbar:{
    newBug: 'Reporte de errores',
    contact: 'Contactanos :D',
    msg: 'Si te sientes bien , comentaselo a tus Amigos, Si te sientes mal, <a href="https://github.com/016/lm180_iEVE_Echoes/issues/new" target="_blank">plz tell us</a> thx.',
  },
  pub: {
    topbar:{
      index: 'Index',
      about: 'About',
      price: 'Precio',
      devPlan: 'Dev Plan',
      dashboard: 'Dashboard',
      project: 'Projecto',
      signout: 'Desconectarse',
      login: 'Login Entrar',
      signup: 'Registrarse',
    },
    index:{
      title: '!Bienvenido¡',
      subTitle: 'Usa iMenu para administrar todos tus proyectos en linea',

    },
    about:{
      title: 'Sobre:',
      subTitle: 'Toda la informacion de iMenu',

    },
    price:{
      title: 'Precio',
      subTitle: 'Moneda que necesitas para pagar tu plan',

    },
    devPlan:{
      title: 'Dev Plan',
      subTitle: '202008 Data Collect Plan',
      body:'<ul><li class="text-green">[Complete]Datos de material de investigacion para planos de naves</li><li class="text-green">[Complete] Datos de Refineria de Mena</li><li class= "text-green">[Complete] Datos de Refineria de restos de Naves</li><li class="text-green">[Complete]Datos de Material de Construcción de Naves</li><li class="text-green">[Complete]Datos de Material de Construcción de Modificadores</li><li class="text-green">[Complete] Datos de Recursos Planetarios(Estos Datos son muy Extensos y requieren mas tiempo)</li><li class="text-green ">[Complete]Datos de Atributos de Nave para aplicar en configuración</li><li class="text-green">[Complete] Datos de Atributos de Equipamiento Utilizados para la configuracion de la nave</li></ul>',
    },

    login:{
      title: 'Registrate para iniciar tu sesión',
      signupSuccess: '<h4><i class="icon fa fa-check"></i> Registro completado</h4> Por favor inicia sesión con tu nueva cuenta creada.',
      resetPassSuccess: '<h4><i class="icon fa fa-check"></i>Restablecimiento de Contraseña hecha</h4> Por favor Inicia sesión con tu nueva contraseña.',
      loginExpired: '<h4><i class="icon fa fa-check"></i> Datos de Entrada Expiradas</h4>Por favor vuelve a Iniciar Sesión.',
      username: 'Nombre de Usuario',
      pass: 'Contraseña',
      email: 'Correo',
      phone: 'Telefono',
      rememberMe: 'Recuerdame',

    },

    signup:{
      title: 'Registrar una Nueva Membresía',
      fullname: 'Nombre Completo',
      username: 'Nombre de Usuario',
      pass: 'Contraseña',
      passRepeat: 'Repetir Contraseña',
      email: 'Correo Electronico',
      inviteCode: 'Codigo de Invitación',
      phone: 'Telefono',
      agreeTerm: ' Acepto terminos y Condiciones de <a href="javascript:;">terms</a>',

    },

    forgotPass:{
      title: 'Resturar contraseña',
      newPass: 'Contraseña',
      email: 'Correo',
      phone: 'Teléfono',

    },


  },
  account:{
    id: '',
    title: 'Nombre',
    phone: 'Telefono',
    email: 'Correo electrónico',
    money: 'Balance En la cuenta',
    username: 'Nombre de Usuario',
    desc: 'Desc',
    sexy: 'Sexo',
    pass: 'Contraseña',
    passOld: 'Antigua contraseña',
    passNew: 'Nueva contraseña',
    passNewRepeat: 'Repetir nueva contraseña',

  },
  pri: {
    topbar:{
      dashboard: 'Tabla',
      materialPrice: 'Precio de los materiales',
      volunteer: 'Volunteer Channel',
      donate: 'Donaciones',
      monument: 'Monumentos',
      market: 'iEVE Mercado',
      marketOnline: 'Mercado en linea',
      news: 'iEVE News',
    },
    sidebar:{
      quickTable: 'Tabla Rápida',
      quickTablePaymentPlan: 'Tabla rapida de Plan de pago',
      quickTableOre: 'Tabla rapida de Menas',
      quickTableVesselDebris: 'Tabla rapida de Restos',
      commonElement: 'Elementos Basicos',
      calculator: 'Calcuradora Común',
      advCal: 'Adv. Calculadora Avanzada',
      skillPoint: 'Skill Point Calculator Calcuradora de Puntos de Habilidad',
      planetary: ' Busqueda de Recursos Planetarios',
      shipBlueprintResearch: 'Busqueda de Planos para Naves',
      ship: 'Calcuradora de Construccion de Naves',
      equipment: 'Calcuradora de Construccion de Equipamiento',
      drone: 'Calcuradora de Construccion de Drones',
      building: 'Calcuradora de Construcciones',
      ore: 'Calcuradora de Menas',
      oreMix: 'Mix Ore Calculadora',
      vesselDebris: 'Vessel Debris Calculator',
      slavagedMaterials: 'Salvaged Material Search',
      rig: 'Calcuradora de Construcción de Modificadores',
      shipConfig: 'Configuracion de la nave',

      market: 'Mercado',

      siteElement: 'Site Element',

      userCenter: 'User Center',
      userInfo: 'Informacion de Usuario',
      changePass: 'Cambiar contraseña',
      bindPhone: 'Bind Phone',

      mShipConfig: 'Configuracion naves',
      myShipConfig: 'Configuracion de mis Naves',
      myShipConfigCategory: 'Categoria de Configuracion de Naves',
      myShipConfigCollection: 'Configuracion de Nave favoritas',
      myShipConfigLike: 'Visualizacíon de la configuracion de mi nave',

      myTopic: 'My Topic',
    },
    dashboard:{
      title: 'Tablero',
      subTitle: 'Toda la información de esta aplicaíon.',

      welcome: {
        title: 'Bienvenido a iEVE La pagina de Herramientas en linea de EVE Echoes',
        subTitle: 'You can find Puedes Buscar las herramientas de EVE Echoes\'s Aquí.',        
        body: '<p class="text ">Despues de un mes en trabajar la informacion,Los datos basicos funcionan y han sido completados, y se añadirán más funciones en el futuro. Les deseo todo lo mejor. Las sugerencias para la pagina son bienbenidas. </p>',
      },

    },

    userCenter:{
      title: 'User Center',
      subTitle: 'Administrar datos de Usuario Aqui.',   
      basicTitle: 'User Center',
      basicSubTitle: 'Administrar datos de usuario aqui.',        
    },
    changePass:{
      title: 'Cambiar contraseña',
      subTitle: 'Puedes cambiar tu contraseña aqui.',           
    },
    bindPhone:{
      title: 'Vincular tu telefono',
      subTitle: 'Puedes vincularlo aqui.',           
    },

    materialView:{
      title: 'Today\'s Precio de los Materiales',
      subTitle: 'Aqui hay una lista de todos los Materiales Basicos\' precio, El precio se usara en la calculadora',
      usageTitle: 'Special Info',
      usageBody: '<ul><li>El formato del precio es: 999 / 20000, El 999 es el precio de mercado(de la semana pasada), el 20000 es el precio establecido por el sistema</li><li>El precio del mercado sera un poco más alto, Entonces esto te puede facilitar comprar en el mercado</li><li>Si el precio no es correcto para ti, simplemente cámbialo en la Calculadora</li><li>It\'Esto es un proyecto personal, todos los datos se ingresaron manualmente, por lo tanto que si encuentras algún dato incorrecto, simplemente informa el error. El enlace del informe de errores está en el pie de página inferior, gracias</li></ul>',

      typeTitle:{
        t0: 'Ore',
        t1: 'Mineria',
        t2: 'Planetario',
        t3: 'Salvaged Material',
        t11: 'Escombros',
        t21: 'Nucleo de Datos',
      },

      table:{
        title:{
          m_title: 'Title',
          m_isk_market: 'Precio del Mercado',
          m_isk_system: 'Precio del sistema',
          m_updateDate: 'Fecha de actualización',
        }
      },
    },

    shipSelector:{
      config: {
        selectShip: 'Seleccionar nave',
        filteredShipCategory: 'Selecionar Categoria',
        filteredRaceType: 'Seleccionar raza',
      },
    },

    shipView:{
      title: 'Calculadora de Construcción',
      subTitle: 'Compruebe todos los elementos de construcción de tipo aquí. Descubra cuántos te faltan.',
      usageTitle: 'Uso',
      usageBody: '<ul><li>Por ahora admitimos 4 tipos, intenta cambiarlos!</li><li>Para su información, solo puede construir elementos con el nivel técnico requerido, así que verifique su nivel técnico primero!!</li><li>Seleccione un elemento y configure el "Conteo de Construcción" correcto. El "Resultado" le mostrará los materiales requeridos.</li><li>Escriba cuántos minerales tiene "en mano" y obtendrá un recuento de materiales "faltantes".</li><li>Usamos el precio promedio de la semana pasada para los cálculos de precios. El precio total que indica "Todavia falta" solo incluye los artículos que aún se necesitan, si no necesita este artículo, el precio será 0 en los cálculos</li><li>La "Calculadora de Menas" es una forma rápida de poder revisar cuales son los minerales faltantes en tus construcciones, solo no olvides ajustar tu eficacia de Reprocesamiento.</li><li> Esto es un proyecto personal, todos los datos se ingresan manualmente, así que si encuentra algun dato incorrecto, simplemente reporta el  error. El enlace del informe de error está en el pie de página inferior, gracias. </li><li><a href="https://www.bilibili.com/video/av80449531/" target="_blank">Operation Video in Chinese</a></li></ul>',
      config: {
        title: 'Config Params',
        selectItem0: 'Objeto',
        selectItem1: 'Nave',
        selectItem11: 'Equipamiento',
        selectItem51: 'Drone',
        selectItem91: 'Construcción',
        itemCategoryFilter: 'Categoría',

        buildCnt: 'Conteo de Construccion',
        buildCostRate: 'Eficacia del amterial',
        buildTimeRate: 'Tiempo de eficacia',

        data:{
          i_isk_market: "Precio del Mercado",
          i_isk_system: "Precio del sistema",
          sb_isk_market: "Plano precio mercado",
          sb_isk_system: "Plano precio sistema",
          sb_isk_build: "Costo de construcción",
          sb_techLvl: "Nivel tecno Lvl",
          sb_time_build: "Costo de tiempo",
          mins: "minutos",
          sec: "segundos",
        },
      },
      result:{
        title: 'Resultado',


        table:{
          title:{
            item: 'Material',
            inhand: 'en mano(Support+-*/)',
            buildCost: 'Costo de construcción',
            stillNeed: 'Requerido',
            percent: 'Rate in hand',
            sum: 'total',
          },
          option:{
            showItemPrice: 'Mostrar detalles del precio',
            showSumPrice: 'Mostrar precio total',
          }
        }
      },
      oreConfig: {
        title: 'Configuracion de calculadora de Mena',
        title_rate: 'Ajustar eficacia de Mena',
        title_rate_small: 'Solo es necesario configurarlo siguiendo la eficiencia del mineral, otros minerales usan la misma eficiencia',
        title_oreOpen: 'Ore constraints(Restricciones de minerales)',
        title_oreOpen_small: 'Solo calcula minerales cuando se establece en "si(yes)" ',
      },
      oreResult:{
        title: ' Resultado de Mena',
        title_small: 'Para "Sugerencia de Mena", pruebe: un clic y doble clic',



        table:{
          title:{
            item: 'Nombre de Mena',
            stillNeed: 'Cantidad faltante',
            oreSuggest: 'Sugerencia de mena',
          },
        }
      }

    },

    shipBRView:{
      title: 'Investigación de Plano de Nave',
      subTitle: 'Calcule los materiales y la tasa de éxito para la investigación de planos',

      usageTitle: 'Uso',
      usageBody: '<ul><li>Elija un plano para ver los materiales requeridos y la tasa de éxito<ul><li>',
      config: {
        title: 'Parametros de configuración',

        buildCnt: 'conteo de construcción',
        buildSuccessRate: 'Base de tasa de exito',
        buildTimeRate: 'Eficiencia de tiempo',

        data:{
          r_isk_market: "Precio en mercado",
          r_isk_system: "Precio en el sistema",

          sb_isk_market: "Precio del Plano en el mercado ",
          sb_isk_system: "Precio del plano en el sistema",
          s_isk_market: "Precio de la nave en el mercado",
          s_isk_system: "Precio de la nave en el sistema",

          sbr_time_build: "Costo en Tiempo",
          sbr_isk_build: "Consto de ISK",
          sbr_successRate: "Tasa de Exito",
        },
      },
      result:{
        title: 'Resultado',

        table:{
          title:{
            item: 'Material',
            inhand: 'Dinero disponible',
            buildResult: 'Requisitos de Construcción',
            need: 'Objetos Necesarios',
            percent: 'Inhand tasa',
            sum: 'Total',
          },
          option:{
            showItemPrice: 'Show Detail Price Mostrar detalles del precio',
            showSumPrice: 'Mostrar precio total',
          }
        }
      }
    },

    planetaryView:{
      title: 'Busqueda de Recursos planetarios',
      subTitle: 'Puedes encotrar rapidamente la ubicacion de los recursos planetarios y calcular la salidad( y el precio) de su cuenta',
      usageTitle: 'Uso',
      usageBody: '<ul><li>Se añadieron los datos de Región!</li><li>Selecci{ona "Region"/"Constelación"/"Systema Solar"(uno o todos) y "Recursos planetarios", click en "Iniciar busqueda" Obtendras la informacion relativa de los Recursos Planetarios</li><li>Si el resultado esta vacío ajuste bien los parametros.</li><li>"Matriz de minería" Puede ayudarte cuanto se extrae por hora</li><li>"||| / 25.47 / 25.47" Los resultados significan "Evaluación de recursos / Volumen unitario de extracción"/ Volumen total de extracción"</li><li>Usamos el precio promedio de la semana pasada para ajustar el precio</li></ul>',
      config: {
        title: 'Configurar parametros',
        selectRegion: 'Región',
        selectConstellation: 'Constelacíon',
        selectSolarSystem: 'Sistema Solar',
        selectPType: 'Recursos Planetarios ',
        startBtn: 'Iniciar Busqueda',

        buildCnt: 'Matriz de minería',
        buildTime: 'Costo en tiempo',
        showAllResult: 'Todos Los resultados',

        data:{
          o_isk_market: "Precio del Mercado",
          o_isk_system: "Precio del sistema",
          o_volumn: "Volumen de mena",
        },
      },
      result:{
        title: 'Resultados',
        emptyResultFound: 'No se ha encontrado un recurso planetarios util, Las Condiciones de busqueda actual arrojan "cero(0)" resultados, ajusta Bien los Parametros e intentalo de nuevo',
        dataContributor: 'Los Datos de {regionTitle} Es contribuido por {contributorTitle}, Gracias por brinda la informacíon',

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
            item: 'Recurso planetario',
            sum: 'Precio total',
          },
          option:{
            showItemPrice: 'Mostrar detalles de precio',
            showSumPrice: 'Mostrar el total del precio',
          }
        }
      }

    },

    oreView:{
      title: 'Calculadora de Mena',
      subTitle: 'Te permitira calcular rapidamente cuantos minerales puedes obtener de tu Mena',
      usageTitle: 'Uso',
      usageBody: '<ul><li>Seleccione un mineral en "Parámetros de configuración" y configure  "Cantidad de mena" y la "Eficiencia del material" correctamente. El "Resultado" mostrará la cantidad de minerales generado.</li><li>El "cinturón de asteroides" es el rango donde se puede encontrar el mineral y el "nivel de seguridad" es el rango donde se puede encontrar el cinturón de asteroides.</li><li>"Volumen de carga de Nave" es un parametro especial para calcular cuanta Mena puede llevar una nave y no afecta a la calculadora si dejas ese dato en blanco</li><li>La unidad de refinación de mineral es 100, por Ejemplo de 199 de mena solo refinará 100, dejando 99 ya que solo refina 100 unidades.</li><li>Debido a los puntos decimales, puede obtener 1-2 desviaciones calculadas en el resultado. Por ejemplo, si el resultado es 135, pero en el juego es 134</li><li>Esto es un proyecto personal y todos los datos fueron ingresados manualmente, Si encuentras algun error en la pagina solo reportarlo Gracias</li><li><a href="https://www.bilibili.com/video/av80457729/" target="_blank">Operation Video in Chinese</a></li></ul>',
      config: {
        title: 'Parámetros de Configuración',
        selectOre: 'Seleccionar Mena',
        buildCnt: 'Cantindad de Mena',
        buildVolume: 'Volumen de carga de la nave',
        buildCostRate: 'Eficiencia de materiales',

        data:{
          o_isk_market: "Precio en el mercado",
          o_isk_system: "Precio en el sistema",
          o_volumn: "Volumen de Mena",
          o_asteroidLv: 'Asteroide Nvl',
          o_safeLv: 'Seguridad Nvl',
        },
      },
      result:{
        title: 'Resultado',


        table:{
          title:{
            item: 'Mineral',
            target: 'Target Count',
            buildResult: 'Colectado',
            left: 'Recursos faltantes',
            percent: 'Still Needed Rate',
            sum: 'Precio total',
          },
          option:{
            showItemPrice: 'Mostrar detalles del precio',
            showSumPrice: 'Mostrar precio total',
          }
        }
      }

    },
    oreMixView:{
      title: 'Mix Mena Calculadora',
      subTitle: 'Prueba la Calculadora de mena.',
      usageTitle: 'Usage',
      usageBody: '<ul><li> Click "+ New Ore" to add new a new ore and quantity</li><li>It\'s used for more than one ore type, useful for ships like the Retriever</li><li>The ore refining unit is 100, e.g. 199 will only refine 100, leaving 99 remaining.</li><li>Debido a los puntos decimales, puede obtener 1-2 desviaciones calculadas en el resultado. Por ejemplo, si el resultado es 135,  en el juego es 134</li><li>Esto es un proyecto personal y todos los datos son ingresados manualmente, si encuentras algun error ayudanos a reprotarlos el enlace de reporte de erroes esta en la esquina inferior, gracias..</li></ul>',
      result:{
        title: 'Resultado',


        table:{
          title:{
            item: 'Mineral',
            target: 'Target Count',
            buildResult: 'Colectado',
            left: 'Recursos faltantes',
            percent: 'Still Needed Rate',
            sum: 'Precio total',
            cnt: 'Counteo',
            rate: ' Eficiencia',
            volume: 'Volumem',
          },
          option:{
            showItemPrice: 'Mostrar detalles del precio',
            showSumPrice: 'Mostrar precio total',
            addNewOre: '+ Nueva Mena',
          }
        }
      }

    },

    vesselDebrisView:{
      title: 'Calculadora de restos de nave',
      subTitle: 'Calcule rápidamente la cantidad de material recuperado que se generará al procesar los escombros de nave que tiene a mano',
      usageTitle: 'Uso',
      usageBody: '<ul><l>Seleccione algun resto de nave para "Parámetros de configuración" y configure el "Recuento restos de nave" y la "Eficiencia del material" correctos. La sección "Resultado" mostrará el recuento calculado de material recuperado.</li><li>El resultado se redondea, por ejemplo, con una tasa de 2,33: 1Restos de nave Generará 2 materiales recuperados, pero 10 Restos de naves generarán 23. Es una buena idea utilizar más Restos de nave a la vez.</li><li>La "Eficiencia del material" se actualizará automáticamente al "Seleccionar nivel de habilidad".</li><li>"Cantidad Extraida ", "still needed" y "Tasa aún necesaria" se utilizan para cálculos rápidos.</li><li>Esto es un proyecto perosnal y todos los datos fuenron extraidos manualmente, si ves algun error favor de reportarlo en esquina inferior, gracias</li><li><a href="https://www.bilibili.com/video/av80457780/" target="_blank">Operation Video in Chinese</a></li></ul>',
      config: {
        title: 'Configurar parametros',
        selectVesselDebris: 'Seleccionar Restos de nave',
        buildCnt: 'Cantidad de Restos',
        buildCostRate: 'Efficiencia de Material',
        selectSkill: 'Seleccionar nivel de Habilidad',

        data:{
          vd_isk_market: "Precio en el mercado",
          vd_isk_system: "Precio en el sistema",
        },
      },
      result:{
        title: 'Resultado',


        table:{
          title:{
            item: 'Objeto',
            target: 'Cantidad Extraida',
            buildResult: 'Cantidad extraida',
            left: 'Still Needed',
            percent: 'Still Needed Rate',
            sum: 'Precio total',
          },

          option:{
            showItemPrice: 'Mostrar detalles de precio',
            showSumPrice: 'Mostrar precio total',
          }
        }
      }

    },

    slavagedMaterialView:{
      title: 'Salvaged Material Search',
      subTitle: 'Busque rápidamente los escombros de nave para encontrar recursos de origen del material refinado',
      usageTitle: 'Explicacion a detalle',
      usageBody: '<ul><li>Seleccione un material de escombro reprocesada y la herramienta mostrará el origen de donde puede salir el escombro de nave. Se tendrá en cuenta la "Eficiencia material".</li><li>La "Eficiencia del material" se completará automáticamente desde el campo "Seleccionar nivel de habilidad".</li><li>Esto es un proyecto personal, todos los datos se ingresan manualmente, por lo que si encuentra algun dato incorrecto, ayudanos reportandolo con un informe de error. El enlace del informe de errores está en el pie de página inferior, gracias</li></ul>',
      config: {
        title: 'Configurar Parametros',
        selectVesselDebris: 'Chatarra reprocesada',
        buildCostRate: 'Efficiencia de Material',
        selectSkill: 'Seleccione nivel de Habilidad',

        data:{
          isk_market: "Precio de Mercado",
          isk_system: "Precio del sistema",
        },
      },
      result:{
        title: 'Resultados',


        table:{
          title:{
            item: 'Restos de nave',
          },

          option:{
            showItemPrice: 'Mostrar detalles de precio',
          }
        }
      }

    },

    rigSelector:{
      config: {
        selectRig: 'Seleccionar modificador',
        filteredRigCategory: 'Seleccionar Categoria',
      },
    },

    rigView:{
      title: 'Modificadores',
      subTitle: 'Aqui puede Calcular Modificadores/ Conteo de Materiales para crear Modificadores.',

      usageTitle: 'Explicación a Detalle',
      usageBody: '<ul><li>Para su información, la construcción solo es posible si su nivel tecnológico es lo suficientemente alto, ¡así que verifica tu nivel tecnológico primero!</li><li>Seleccione un equipo en "Parámetros de configuración", luego configure correctamente "Cantidad a Construir", "Eficiencia de material", "Eficiencia de tiempo" y Vea qué materiales necesita en "Resultado".</li><li>Esto es un proyecto personal, todos los datos se ingresan manualmente, por lo que si encuentra algun dato incorrecto, ayudanos reportandolo con un informe de error. El enlace del informe de errores está en el pie de página inferior, gracias</li></ul>',
      config: {
        title: 'Configurar parametros',
        selectRig: 'Seleccionar modificador',
        buildCnt: 'Cantidad a Construir',
        buildCostRate: 'Eficiencia de Material',
        buildTimeRate: 'Eficiencia de tiempo',

        data:{
          r_isk_market: "Precio del mercado",
          r_isk_system: "Precio del sistema",

          rb_techLvl: "Nivel Tecno",
          rb_isk_build: "Construcción en ISK",
          rb_time_build: "Tiempo de Construccion",
          rb_isk_market: "Precio del plano en el mercado",
          rb_isk_system: "Precio del plano en el sistema",
        },
      },
      result:{
        title: 'Resultados',

        table:{
          title:{
            item: 'Chatarra reprocesada',
            inhand: 'En mano',
            buildResult: 'Requisitos de Construcción',
            need: 'Material necesario',
            percent: 'En mano Rate',
            sum: 'Total',
          },
          option:{
            showItemPrice: 'Mostrar detalles del precio',
            showSumPrice: 'Mostrar detalle total del precio',
          }
        }
      }
    },

    skillPointView:{
      title: 'Calculadora de puntos de Habilidad',
      subTitle: 'Puede calcular cuánto tiempo te lleva alcanzar el objetivo de puntos de habilidad',

      usageTitle: 'Explicacion a detalle',
      usageBody: '<ul><li>Establezca sus "Puntos de inicio" y sus "Puntos Objetivo" en la sección "Parámetros de configuración", el tiempo requerido se muestra en la sección "Resultado".</li><li>Al seleccionar un "Nivel técnico", se establecerá automáticamente "Puntos Objetivo"</li><li>"Obtener puntos" es su tasa de puntos de habilidad por minuto, "Eficiencia de tiempo" es un porcentaje de "Obtener puntos"</li><li>"puntos extra" es para habilidad de puntos extra al dia, este valor se Adjuntará a "por munito" y luego se utilizara en el calculo</li><li>Datos de nivel tecnológico recopilados por el voluntario "Fish Lord" en nuestro grupo de voluntarios, gracias por él. Si encuentra algo incorrecto, simplemente informe un error utilizando el enlace en el pie de página.</li></ul>',
      config: {
        title: 'Configurar parametros',
        selectSkill: 'Nivel tecno',
        startSkillPoint: 'Puntos de inicio',
        endSkillPoint: 'Puntos Objetivo',
        min: 'Minunto',
        day: 'Dias',

        skillMinPoint: 'Puntos por minuto',
        skillTimeRate: 'Eficiencia de tiempo',
        skillDailyPoint: 'Puntos extra',
      },
      result:{
        title: 'Resultados',
        needPoint: 'Puntos totales',
        finallyMinPoint: 'puntos totales por minuto',
        needMin: 'Minutos',
        needHour: 'Hora',
        needDay: 'Dia',

      }
    },

    shipConfigView:{
      title: '[Beta]Calculadora de Configuracion de Naves',
      subTitle: 'Administre el plan de configuración de la nave en la web, comparte el link  y discuta el plan de configuración de la nave a través de una URL, de forma ligera y rápida',
      usageTitle: 'Explicacion a detalee',
      bodyText: '<ul><li>Después de 3 meses, finalmente se completó esta versión. La versión actual ha integrado algunos datos de la prueba pública. Aquí hay algunas descripciones funcionales: </li><li>contenido completo: <ol><li>Ver Propiedades del barco</li><li>Ver propiedades del equipo</li><li>Propiedades de los modificadores</li><li>Ver propiedades de los Drones</li><li>Guardar configuracion del equipamiento de la nave</li><li>Administrar Configuraciones de las naves</li><li>Compartir la configuración de la nave mediante de URL</li></ol></li><li>Contenido en Desarrollo: <ol><li>No se han añadido habilidades y se agregaran cuando se abra el servidor,</li><li>El cálculo de la fórmula no es exacto. Teniendo en cuenta la modificación posterior, comenzaremos a mejorarlo 1 mes después de que se abra el servidor</li><li>Equipo activo, mediante ajuste de fórmula</li></ol></li> <li>Nuestro objetivo final es completar la configuración del barco en la página web. Abra la URL y que pueda ver el plan de configuración del barco y la discusión de todos, para que los nuevos jugadores puedan copiar y usar fácilmente, los jugadores de la empresa / equipo puedan comunicarse fácilmente y la configuración sea unificada, y dejar que los jugadores maestros disfruten las modificaciones</li><li>La pagina todavia esta en proceso de traduccion(por parte del idioma en ingles) y se terminara lo pornto antes psolbie</li></ul>',
      config: {
        title : 'Parametros de configuracion',
        btn : {
          showEditoForm: 'Cambiar atributos',
          showItemDetail: 'Mostrar todos los detalles',
          collect: 'Favoritos',
          save: 'Guardar',
          reset: 'Refrescar',
        },
        form: {
          categoryId: 'Categoria',
          desc: 'Desc',
          shortDesc: 'Corta Desc',
        },
      },

      msg:{
        saved: '!Guardado!',
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
        title: 'Ajustar Habilidades',
        small: '[NO UTILICE] Seleccione habilidades y establezca niveles para ver el cambio de datos',

        newBtn: '+ New Skill',
      },

      condition:{
        title: 'Set Param',
        small: '[NO Utilice] Other params will effect ship attributes',

        newBtn: '+ New Param',
      },


      resultBox: {
        topInfo: {
          powergrid: 'Suministro de red de Energia',
          capa_cargo: 'Capacidad de carga',
          capa_ore: 'Capacidad de Mena',
          capa_logistics: 'Capacidad de logistica',

          skillBonus: 'Bonus de Habilidad',
          specialBonus: 'Bonus especiales',
        },
        attack: {
          title: 'Atacar',
          missile: 'Missiles',
          battery: 'Cañones',
          drone: 'Drones',
          mining: 'Mineria',
        },
        defense: {
          title: 'Defensa',
          shield:'Escudos',
          armor:'Blindaje',
          structure:'Estructuras',
        },
        capacity: {
          title: 'Capacidad',
          hcsj: 'Tiempo de Recargas',
          zdhc: 'Recarga Maxima',
        }, 
        radar: {
          title: 'Radar',

          target: 'Maximo de fijación de Objetivos',
          signatureRadius: 'Signature Radius',
          scanResolution: 'Resolusión',
          induction: 'Inducción',
        }, 
        navigation: {
          title: 'Navegación',
          warpAgainst: 'Warp Against',
          warpSpeed: 'Velocidad de Salto',
          inertiaModifier: 'Inertia Modifier',
          mass: 'Mass',
        }, 
        price: {
          title: 'Prercio',
          ship: 'Neve',
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
      title: 'Donaciones para for iEVE',
      subTitle: 'Tu donacion hara de iEVE Mejor!',
      topbar:{
        title: 'Explain',
        subTitle: '',
        bodyText:'<p>iEVE Es un un proyecto caritativo, Las donaciones hacen mas estable las operaciones. Puedes entrar en el equipo de soporte de iEVE aqui,Confio en que estaremos mejor con tu ayuda</p><p>Currently we support in-game donations and cash donations, voluntary donations are not forced, and minors’ donations are rejected.</p><p>In-game donations are very encouraged. Our data volunteers work very hard, and they sacrifice a lot of private time to improve the data. We hope that players in the community can express their affirmation and gratitude to them through in-game donations.</p>',
        donateLinkText: '>>> Donor List <<<',
      },
      inGame:{
        title: 'Donaciones En juego',
        subTitle: 'Donaciones hechas directamente en el juego de Eve Echoes',
        bodyText:'<p>Solo contactate a <span class=\'text-green\'>ieve</span> Luego da tu donacion en (ISK, Plex, Equipamiento),El nombre de usuario es <span class=\'text-green\'>ieve</span> ¡Sin mayúsculas, sin letreros, sin espacios!!!</p><p>Aceptamos los contratos relgularmente a las 1:00 and 13:00 UTC Todos los dias, también lo confirmaré cuando lo vea en otras ocasiones</p><p>Su donación se entregará a los voluntarios que brinden servicios para iEVE sin cargo. ¡Creo que se sentirán cálidos con cada donación!!</p>',
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
      title: 'Conmemoraciones',
      subTitle: 'iEVE No pudo ser menjor sin ti.',
      topbar:{
        title: 'Explicacion a detalle',
        subTitle: '',
        bodyText:'<ul><li>Quiero recordar a todos los que han ayudado a iEVE.</li><li>Todos los datos son escritos manualmente, si tiene algún problema, contácteme(todo texto escrito en Ingles).</li><li>Muestro sus datos como opción predeterminada, si desea ocultarlo, contácteme, gracias, thank you.</li></ul>',
      },
      typeTitle:{
        t1: 'Agradecimientos especiales',
        t11: 'Voluntarios',
        t21: 'Donaddores',
      },
      table:{
        title:{
          title: 'Nombre',
          desc: 'Descricion corta',
          p_minusCnt: 'Minutos totales contribuidos',
          p_startDate: 'Fecha de entrada',
          p_donateAmount: 'donacion total',
          p_donateDate: 'Fecha de donación',
        },
      },
    },

    quickTableOreView:{
      title: 'Tabla rapida de Mena',
      subTitle: ' Busqueda de Mena rapida',
      bodyText: '',

      oreConfig: {
        title: 'Parametros de configuracion',
        title_rate: 'Ajustar eficiencia de mena',
        title_rate_small: 'Solo necesita establecerse siguiendo la eficiencia del mineral, otros minerales usan la misma eficiencia',
        title_oreOpen: 'Ajustes de renstricciones',
        title_oreOpen_small: 'solo se calcularán las menas ajustadas en "si" ',
        otherConfig:{
          title: 'otros parametros',
          title_small: ' ajusta otros paramentros para mejor uso',
          showType: {
            title: 'Mostrar tipo',
            unit: 'con 1 unidad',
            volume: 'con 1 volumen',
          }, 
        }
      },

      table:{
        title:{
          o_title: 'Titulo',
          o_volumn: 'Volumen',
          o_asteroidLv: 'nivel de asteroide',
          o_safeLv: 'Nivel de seguridad',
          o_: '',
        }
      },
    },

    quickTableVesselDebrisView:{
      title: 'Tabla rapida de chatarra reprocesada',
      subTitle: 'busca la chatarra reprocesada rapidamente',
      bodyText: '',

      config: {
        title: 'configurar parametros',
        buildCostRate: 'Eficiencia de Materiales',
        selectSkill: 'Seleccionar Habilidades',
        race: {
          title: 'Ajustar Raza',
          title_small: 'solo mostrar escombros de nave si estan en "Si" ',
        },
      },

      table:{
        title:{
          vd_title: 'Titulo',
        }
      },
    },

    quickTablePaymentPlanView:{
      title: 'Tabla rapida de plan de pago',
      subTitle: 'Te permitira una busqueda rapida de plan de pago en el juego(por ahora la pagina solo administra dolares USD pueda que pronto en moneda mexicana MXN)',
      bodyText: '',

      config: {
        title: 'Configurar Parametros',
        resultUnit: 'Resultados unidad',
      },

      table:{
        title:{
          techLv_title: 'Nivel Tecno',
          pointPerMin: '  PH/Min',
        }, 
        data:{
          firstMonthFee: 'Cuota del primer mes',
          secondMonthFee: 'Cuota del segundo mes',
          fourMonthFee: 'Cuota del Cuarto mes',
          firstYearFee: 'Cuota del primer año',
        }
      },
      tableEx:{
        title:{
          ex_title: 'PH/Min',
          ex_body: 'Descripcion',
          
        }, 
        data:{
          pointPerMin: ' PH/Min',
          m_30_body: 'Alpha',
          m_35_body: 'Omega 5',
          m_40_body: 'Omega 5 + Libro I($1.99)',
          m_45_body: 'Omega 5 + Libro I($1.99) + libro II($5.99)',
          m_50_body: 'Omega 5 + Libro I($1.99) + Libro II($5.99) + Libro III($29.99)',
          m_60_body: 'Omega 25 + Libro I($1.99)',
          m_65_body: 'Omega 25 + Libro I($1.99) + Libro II($5.99)',
          m_70_body: 'Omega 5 + Omega 25 + Libro I($1.99) + Libro II($5.99)',
          m_75_body: 'Omega 5 + Omega 25 + Book I($1.99) + Libro II($5.99) + Libro III($29.99)',
        }
      },
    },

    newsView:{
      title: 'iEVE News',
      subTitle: 'Anuncio oficial, chismes, reclutamiento de la Legión, anuncio de jugador rico, todo en iEVE News',
    },

    marketView:{
      title: 'iEVE Mercado',
      subTitle: '¿No es fácil hacer negocios online? Usando nuestro iEVE Market, simplemente deje un mensaje en el tablero, pronto se pondrá en contacto. Rápido, eficiente, abierto, transparente!',
    },

    onlineMarketView:{
      title: '[Alpha]Mercado en linea',
      subTitle: 'Consulta la información del mercado en una web, no es necesario abrir el juego. Rápido, Fácil, Simple y sensillo',

    },
    onlineMarketDetailModal:{
      title:{
        buy : 'Comprador',
        sell : 'Vendedor',
        history : 'Precio Historico',
      },
      buy:{
        title:{
          regionTitle: 'Region',
          amount: 'Cantidad',
          price: 'Prercio',
          location: 'Ubicacion',
          expiredAt: ' Expira el',
          updateAt: 'Se Actualiza en',
        }
      },
      sell:{
        title:{
          regionTitle: 'Region',
          amount: 'Cantidad',
          price: 'Precio',
          location: 'ubicacion',
          expiredAt: 'Expira el',
          updateAt: 'Se Actualiza en',
        }
      },
      history:{
        zoom: {
          title: 'Seleccion rapida',
          oneW: '1 Semana',
          oneM: '1 Mes',
          threeM: '3 Meses',
          sixM: '6 Meses',
          ytd: 'YTD',
          oneY: '1 año',
          all: 'Todo',
        },
        series:{
          dailyAveragePrice: 'Precio promedio Diario',
          minMax: 'Max/Min Prercio',
          moving5: 'Precio promedio de hace 5 dias',
          moving20: 'Average Price Precio promedio de hace 20 dias',
          donchain: 'Rango de cambio de precio',
          volume: 'Vender Volumen',
          orderCount: 'Conteo de Orden',
          volumePerOrder: 'Precio de pedido único',
        }
      },

    },


    myShipConfigCategoryView:{
      title: 'Categoria de configuracion de mi nave',
      subTitle: 'administrar la configuracion de mi nave',
      table:{
        title:{         
          scc_title: 'Titlulo',
          scc_desc: 'Desc',
        }
      }
    },
    shipConfigCategoryView:{
      modal:{
        title: 'Titulo',
        desc: 'Desc',
      },
    },
    myShipConfigView:{
      title: 'Configuracion de mi nave',
      subTitle: 'Administra la configuracion de tu nave Administra tu confiugracion de nave',
      table:{
        title:{         
          s_title: 'Nombre de Nave',
          scc_title: 'Categoria',
          sc_shortDesc: 'Descricion',
          sc_creationDate: 'Fecha de Creacion',
          sc_updateDate: 'Fecha de Actualziacion',
        }
      }
    },
    myShipConfigCollectionView:{
      title: 'Configuracion de Naves Favoritas',
      subTitle: 'Administrar configuracion de nave favoria',
      table:{
        title:{         
          s_title: 'Nombre de Nave',
          scc_title: 'Categoria',
          sc_shortDesc: 'Descripcion',
          sc_creationDate: 'Fecha de creacion',
          sc_updateDate: 'Fecha de actualizacion',
        }
      }
    },
    myShipConfigLikeView:{
      title: 'Reviewed de la configuracion de la nave',
      subTitle: 'Ship Config administrar el reviewe de la configuracion nave',
      table:{
        title:{         
          s_title: 'Titulo de Nave',
          scl_type_id: 'Tipo',
          scc_title: 'Categoria',
          sc_shortDesc: 'Descripcion',
          sc_creationDate: 'Fecha de Creación',
          sc_updateDate: 'Fecha de Actualización',
        }
      }
    },


    myTopicListView:{
      title: 'My Topic List',
      subTitle: 'Administrar temas publicados',
      modal:{
        t_type_id: 'Type',
        t_cnt_publishDay: 'Agregar días de espectáculo ',
        t_cnt_publishDay_hint: 'El saldo de la cuenta no es suficiente, no se puede pagar, por favor recargue',
        costPrice: 'Agregar costo diario',
        accountBalance: 'Saldo de la cuenta',
        t_title: 'Titulo',
        t_title_hint: 'El título está vacío o es mayor que 45',
        t_shortDesc: 'Desc',
        t_shortDesc_hint: 'La descripción corta está vacía o tiene más de 100',
        t_desc: 'Contenido',
        t_desc_hint: 'El contenido está vacío o tiene más de 1000',
      },
      table:{
        title:{         
          t_id: 'ID',
          t_type_id: 'Tipo',
          t_title: 'Titulo',
          t_shortDesc: ' Desc',
          t_startDate: 'Mostrar fecha de inicio',
          t_endDate: 'Mostrar fecha de finalización',
          t_creationDate: 'fecha de creación',
          t_updateDate: 'Fecha de actualizacion',
        }
      }
    },


  },

  region:{
    10000001: '???',
    10000002: '???',
    10000016: '??',
    10000032: '???',
  }
}

export default messages;
