const messages =  {
  '|':'|',
  common:{
    title: '<b>i</b>EVE Echoes',
    titleShort: '<b>i</b>EVE',
    login: '登录',
    signup: '注册',
    forgotPass: '忘记密码',
    resetPass: '重置密码',
    backIndexPage: '返回首页',

    smsCode: '短信验证码',
    sendSms: '发送验证码',
    sendEmailCode: '发送验证码',
    emailCode: '邮件验证码',
    captcha: '验证码',
    locale:{
      zh: '切换中文',
      en: 'Use English',
    },
    create: '新建',
    update: '编辑',
    view: '查看',
    delete: '删除',
    op: '操作',
    id: 'ID',

    costCurrency: 'ISK',
    costCharge: '<span>目前为测试阶段仅受邀用户参加, 发布信息价格极低, 测试结束后将恢复. 每个受邀帐户都赠送了ISK方便测试</span><br/><span>为了防止垃圾信息, 发布每一条信息都将扣除一定的帐户余额,若余额不足则无法发布</span><br/><span>[未启用]充值方式: 将ISK在游戏里挂合同给ieve, 备注`ieve-网站姓名`(!!!非常重要, 例如我是ieve-DP), 收到合同后会为帐户充值</span><br/><span>禁止发布 政治, 侮辱/攻击他人, RMT等内容, 我们将会删除相关内容且ISK不退, 情节严重直接封号充值ISK不退</span>',

    newElement:{
      title: '标题',
      desc: '描述'
    },
  },

  title:{
    corp: '军团',
  },

  time:{
    year: "年",
    month: "月",
    day: "天",
    hour: "小时",
    min: "分钟",
    sec: "秒",
  },

  datasource:{
    demo: 'Demo 数据',
    d201912: '201912 测试数据',
    d202007: '202007 测试数据',
    d202008: '202008 公测数据',
    d202106: '202006 版本xxxx数据',
  },

  btn:{
    new: '新建',
    save: '保存',
    edit: '编辑',
    cancel: '取消',
    close: '关闭',
    newLink: '新关联',
  },

  status:{

  },
  type:{
    partner: {
      person: '个人',
      company: '公司'
    },
    sexy: {
      male: '男',
      female: '女',
    },
    yon: {
      yes: '是',
      no: '否',
    },

    ship:{
      frigate: '护卫舰',
      destroyer: '驱逐舰',
      cruiser: '巡洋舰',
      battlecruiser: '战列巡洋舰',
      battleship: '战列舰',
      carrier: '航母',
      industrial: '工业舰',
    },

    shipMode:{
      SniperTitle: '狙击模式',
      SniperInfo: '所有伤害+50%<br/>炮台最佳射程+100%<br/>炮台失准范围+100%<br/>导弹飞行速度+100%<br/>无人机控制距离+75%<br/>所有武器冷却时间+100%<br/>炮台跟踪速度-60%<br/>导弹爆炸速度-60%<br/>舰船飞行速度-99%',
      RechargeTitle: '充能模式',
      RechargeInfo: '舰船信号半径+100%</br>舰船飞行速度-80%</br>舰船电容回充时间-50%',
      DefenseTitle: '防御模式',
      DefenseInfo: '所有伤害-90%</br>舰船飞行速度-80%</br>舰船信号半径-20%</br>舰船全抗性+50%',
      PropulsionTitle: '高速模式',
      PropulsionInfo: '舰船飞行速度+100%</br>舰船信号半径+100%</br>舰船电容回充时间+500%',
      SiegeTitle: '攻城模式',
      SiegeInfo: '所有伤害+100%</br>炮台跟踪速度-95%</br>导弹爆炸速度-90%</br>导弹爆炸半径+1000%</br>舰船飞行速度-99%</br>舰船信号半径+100%',
      BombardTitle: '轰炸模式',
      BombardInfo: '所有伤害+20%</br>导弹飞行时间+200%</br>导弹爆炸速度-50%</br>导弹爆炸半径+100%</br>舰船飞行速度-95%</br>舰船信号半径+200%',
    },

    shipConfigLikeType:{
      t_1: '赞',
      t_9: '踩',
    },

    slotType:{
      low: '低槽',
      mid: '中槽',
      high: '高槽',

      drone: '无人机',


      rig_p: '战斗改装件',
      rig_m: '工程改装件',
    },

    weapon:{
      missile: {
        title: '导弹发射器',
        qd: '轻型导弹发射器',
        hj: '火箭发射器',
        qk: '轻型快速导弹发射器',
        zd: '重型导弹发射器',
        zg: '重型攻击导弹发射器',
        zk: '重型快速导弹发射器',
        xh: '巡航导弹发射器',
        yl: '鱼雷发射器',
      },
      hunhe: {
        title: '混合武器',
        cigui:{
          s: '小型磁轨炮',
          m: '中型磁轨炮',
          l: '大型磁轨炮',
          xl: '超大型磁轨炮',
        },
        jisu:{
          s: '小型急速炮',
          m: '中型急速炮',
          l: '大型急速炮',
          xl: '超大型急速炮',
        }
      },
      power: {
        title: '能量武器',
        mcjg:{
          s: '小型脉冲激光器',
          m: '中型脉冲激光器',
          l: '大型脉冲激光器',
          xl: '超大型脉冲激光器',
        },
        jsjg:{
          s: '小型集束激光器',
          m: '中型集束激光器',
          l: '大型集束激光器',
          xl: '超大型集束激光器',
        }
      },
      tanshe: {
        title: '射弹武器',
        zdjn:{
          s: '小型自动加农炮',
          m: '中型自动加农炮',
          l: '大型自动加农炮',
          xl: '超大型自动加农炮',
        },
        ld:{
          s: '小型榴弹炮',
          m: '中型榴弹炮',
          l: '大型榴弹炮',
          xl: '超大型榴弹炮',
        }
      },
      mining: {
        title: '采集设备',
        ckjg:'采矿激光器',
        ltck:'露天采矿器',
      },
      liejie: {
        title: '裂解炮',
        jl:{
          s: '激流裂解炮 S',
          m: '激流裂解炮 M',
          l: '激流裂解炮 L',
        },
        zd:{
          s: '震荡裂解炮 S',
          m: '震荡裂解炮 M',
          l: '震荡裂解炮 L',
        }
      },
    },

    drone:{
      s: { 
        title: '小型无人机'
      },
      m: { 
        title: '中型无人机'
      },
      l: { 
        title: '大型无人机'
      },
      sen: { 
        title: '岗哨无人机'
      },
    },

    slotMid:{
      ewar: {
        title: '电子战',
        tzcr:'停滞缠绕光束',
        tzbz:'停滞捕捉光束',
        yqrd:'跃迁扰断器',
        yqrp:'跃迁扰频器',
      },
      ln: {
        title: '掠能器',
        s: '小型掠能器',
        m: '中型掠能器',
        l: '大型掠能器',
        xl: '超大型掠能器',
      },
      nlzh: {
        title: '能量中和器',
        s: '小型能量中和器',
        m: '中型能量中和器',
        l: '大型能量中和器',
        xl: '超大型能量中和器',
      },
      ychdhc: {
        title: '远程护盾回冲增量器',
        s: '小型远程护盾回冲增量器',
        m: '中型远程护盾回冲增量器',
        l: '大型远程护盾回冲增量器',
        xl: '超大型远程护盾回冲增量器',
      },
      yczjwx: {
        title: '远程装甲维修器',
        s: '小型远程装甲维修器',
        m: '中型远程装甲维修器',
        l: '大型远程装甲维修器',
        xl: '超大型远程装甲维修器',
      },
      qthdhc: {
        title: '群体护盾回冲增量器',
        s: '小型群体护盾回冲增量器',
        m: '中型群体护盾回冲增量器',
        l: '大型群体护盾回冲增量器',
        xl: '超大型群体护盾回冲增量器',
      },
      qtzjwx: {
        title: '群体装甲维修器',
        s: '小型群体装甲维修器',
        m: '中型群体装甲维修器',
        l: '大型群体装甲维修器',
        xl: '超大型群体装甲维修器',
      },
      hdlc: {
        title: '护盾立场模块',
        s: '小型护盾立场模块',
        m: '中型护盾立场模块',
        l: '大型护盾立场模块',
        xl: '超大型护盾立场模块',
      },
      zjlj: {
        title: '装甲连接模块',
        s: '小型装甲连接模块',
        m: '中型装甲连接模块',
        l: '大型装甲连接模块',
        xl: '超大型装甲连接模块',
      },
      ycdrcs: {
        title: '远程电容传输装置',
        s: '小型远程电容传输装置',
        m: '中型远程电容传输装置',
        l: '大型远程电容传输装置',
        xl: '超大型远程电容传输装置',
      },
      qtdrcs: {
        title: '群体电容传输器',
        s: '小型群体电容传输器',
        m: '中型群体电容传输器',
        l: '大型群体电容传输器',
        xl: '超大型群体电容传输器',
      },
    },

    slotLow:{



      drqdc: {
        title: '电容器电池',
        s: '小型电容器电池',
        m: '中型电容器电池',
        l: '大型电容器电池',
        xl: '超大型电容器电池',
      },
      hdzq: {
        title: '护盾增强器',
        fys:'反应式护盾增强器',
        zsy:'适应性护盾增强系统',
      },
      hdkz: {
        title: '护盾扩展装置',
        s: '小型护盾扩展装置',
        m: '中型护盾扩展装置',
        l: '大型护盾扩展装置',
        xl: '超大型护盾扩展装置',
      },
      hdhc: {
        title: '护盾回冲增量器',
        s: '小型护盾回冲增量器',
        m: '中型护盾回冲增量器',
        l: '大型护盾回冲增量器',
        xl: '超大型护盾回冲增量器',
      },
      zjzq: {
        title: '装甲增强器',
        fys:'反应式装甲增强器',
        zsy:'适应性装甲增强器',
      },
      zjb: {
        title: '装甲附甲板',
        s100: '100mm装甲附甲板',
        s200: '200mm装甲附甲板',
        m400: '400mm装甲附甲板',
        m800: '800mm装甲附甲板',
        l1600: '1600mm装甲附甲板',

      },
      zjwx: {
        title: '装甲维修器',
        s: '小型装甲维修器',
        m: '中型装甲维修器',
        l: '大型装甲维修器',
        xl: '超大型装甲维修器',
      },
      jgwx: {
        title: '结构维修器',
        s: '小型结构维修器',
        m: '中型结构维修器',
        l: '大型结构维修器',
        xl: '超大型结构维修器',
      },
      sskz: {
        title: '损伤控制',
        sskz:'损伤控制',
      },
      tjqgl: {
        title: '推进器改良',
        gxwd:'惯性稳定器',
        yqwd:'跃迁稳定器',
      },
      jlrs: {
        title: '加力燃烧器',
        s: '小型加力燃烧器',
        m: '中型加力燃烧器',
        l: '大型加力燃烧器',
        xl: '超大型加力燃烧器',
      },
      wxyqtj: {
        title: '微型跃迁推进器',
        s: '小型微型跃迁推进器',
        m: '中型微型跃迁推进器',
        l: '大型微型跃迁推进器',
        xl: '超大型微型跃迁推进器',
      },
      yszb: {
        title: '隐身装备',
        yxzz:'隐形装置',
        ymxd:'隐秘行动',
      },
      wqsj: {
        title: '武器升级',
        src: '散热槽',
        ccwd: '磁场稳定器',
        hzwd: '回转稳定器',
        hlzwd: '宏粒子稳定器',
        ddkz: '弹道控制系统',
        ddzd: '导弹制导计算机',
        sdjsj: '索敌计算机',
        wrjshzx: '无人机伤害增效装置',
        wrjdh: '无人机导航电脑',
        qfwsd: '全方位索敌链接',
      },
    },

    rig_p: {
      wqzq:{
        title: '武器改装',
        hhwq: '磁轨炮改装件',
        ljwq: '裂解炮改装件',
        nlwq: '激光炮改装件',
        tswq: '加农炮改装件',
        missile: '导弹改装件',
        drone: '无人机改装件',
      },
      fyzq:{
        title: '防御改装',
        hd: '护盾改装件',
        zj: '装甲改装件',
        jg: '结构改装件',
      },
    },

    rig_m: {
      navigate:{
        title: '导航改装',
      },
      gongcheng:{
        title: '工程改装',
      },
      electoric:{
        title: '电子改装',
      },
      industry:{
        title: '工业改装',
      },
    },


    projectConfigData:{
      account: '帐号',
      server: '服务器',
      domain: '域名',
    },
    projectFile:{
      locale: '本地',
      thrd: '第三方',
    },
  },

  material:{
    m_st: '三钛金属',
    m_lj: '类晶体胶矿',
    m_ly: '类银超金属',
    m_tws: '同位聚合体',
    m_cxx: '超新星诺克石',
    m_sy: '晶状石英核岩',
    m_csk: '超噬矿',
    m_me: '莫尔石',

    p_gz: '光泽合金',
    p_gc: '光彩合金',
    p_sg: '闪光合金',
    p_ns: '浓缩合金',
    p_jm: '精密合金',
    p_zs: '杂色复合物',
    p_xw: '纤维复合物',
    p_tg: '透光复合物',
    p_dy: '多样复合物',
    p_gh: '光滑复合物',
    p_jt: '晶体复合物',
    p_ah: '黑暗复合物',
    p_hxqt: '活性气体',
    p_xyqt: '稀有气体',
    p_jc: '基础金属',
    p_zhong: '重金属',
    p_gjs: '贵金属',
    p_fy: '反应金属',
    p_yd: '有毒金属',
    p_gyxw: '工业纤维',
    p_cqlsl: '超强力塑料',
    p_jfxa: '聚芳酰胺',
    p_lqj: '冷却剂',
    p_nsy: '浓缩液',
    p_jzmk: '建筑模块',
    p_nmt: '纳米体',
    p_gjgzc: '硅结构铸材',
    p_lqdy: '灵巧单元建筑模块',
    p_zhongshui: '重水',
    p_xfdlz: '悬浮等离子',
    p_yhcy: '液态臭氧',
    p_lzry: '离子溶液',
    p_twsrl: '同位素燃料',
    p_dlztt: '等离子体团',


    s_jssp : '金属碎片',
    s_qhjssp : '强化金属碎片',
    s_wdl : '烧焦的微电路',
    s_jkdl : '烧焦的接口电路',
    s_nydl : '堆砌的能源电路',
    s_ljdl : '烧毁的逻辑电路',
    s_cfjg : '损毁的触发机关',
    s_jf : '损坏的近防系统',
    s_yg : '烧毁的遥感探测处理器',
    s_sjwl : '损坏的人工神经网络',
    s_llzlt : '被污染的洛伦兹流体',
    s_jhdt : '聚合导体',
    s_nmjht : '受污染的纳米聚合体',
    s_dlb : '有故障的电力泵',
    s_jccfjg : '集成触发机关',
    s_gzzz : '集成结构改造装置',
    s_mkkzt : '集成模块控制台',
    s_rssl : '集成热塑塑料',
    s_mnwl : '集成模拟网络',
    s_djhjt : '集成单晶合金条',
    s_nyfsq : '能源发生器',
    s_kzzs : '电容控制中枢',
  },

  ore:{
    o_fjs:'凡晶石',
    o_zsy:'灼烧岩',
    o_gjy:'干焦岩',
    o_xcy:'斜长岩',
    o_obes:'奥贝尓石',
    o_sps:'水硼沙',
    o_jsbk:'杰斯贝矿',
    o_xmft:'希莫非特',
    o_twyk:'同位原矿',
    o_hy:'灰岩',
    o_hzs:'黑赭石',
    o_pmy:'片麻岩',
    o_kljs:'克洛基石',
    o_sdts:'双多特石',
    o_akly:'艾克诺岩',
    o_jfdy:'基腹断岩',
  },

  debris:{
    t_1 : '莫德团受损结构',
    t_2 : '天蛇受损结构',
    t_3 : '天使受损结构',
    t_4 : '萨沙受损结构',
    t_5 : '古斯塔斯受损结构',
    t_6 : '姐妹会受损结构',
    t_7 : '红色狩猎受损结构',
    t_11  : '殷郡受损结构',

    t_21  : '联合矿业小型受损结构',
    t_22  : '联合矿业中型受损结构',
    t_23  : '联合矿业大型受损结构',

    t_31  : '星捷运小型受损结构',
    t_32  : '星捷运中型受损结构',
    t_33  : '星捷运大型受损结构',


    t_104 : '艾玛4级受损结构',
    t_105 : '艾玛5级受损结构',
    t_106 : '艾玛6级受损结构',
    t_107 : '艾玛7级受损结构',
    t_108 : '艾玛8级受损结构',
    t_109 : '艾玛9级受损结构',
    t_110 : '艾玛10级受损结构',

    t_204 : '加达里4级受损结构',
    t_205 : '加达里5级受损结构',
    t_206 : '加达里6级受损结构',
    t_207 : '加达里7级受损结构',
    t_208 : '加达里8级受损结构',
    t_209 : '加达里9级受损结构',
    t_210 : '加达里10级受损结构',

    t_304 : '盖伦特4级受损结构',
    t_305 : '盖伦特5级受损结构',
    t_306 : '盖伦特6级受损结构',
    t_307 : '盖伦特7级受损结构',
    t_308 : '盖伦特8级受损结构',
    t_309 : '盖伦特9级受损结构',
    t_310 : '盖伦特10级受损结构',

    t_404 : '米玛塔尔4级受损结构',
    t_405 : '米玛塔尔5级受损结构',
    t_406 : '米玛塔尔6级受损结构',
    t_407 : '米玛塔尔7级受损结构',
    t_408 : '米玛塔尔8级受损结构',
    t_409 : '米玛塔尔9级受损结构',
    t_410 : '米玛塔尔10级受损结构',
  },

  datacore:{
    t_1 : '数据核心 - 艾玛星舰工程',
    t_2 : '数据核心 - 加达里星舰工程',
    t_3 : '数据核心 - 盖伦特星舰工程',
    t_4 : '数据核心 - 米玛塔尔星舰工程',

    t_11  : '数据核心 - 激光物理',
    t_12  : '数据核心 - 电磁物理',
    t_13  : '数据核心 - 高能物理',
    t_14  : '数据核心 - 火箭科学',
    t_15  : '数据核心 - 机械工程',
  },

  race:{
    c: '加达里',
    g: '盖伦特',
    a: '艾玛',
    m: '米玛塔尓',
    o: '其他',
    r_jdl: '加达里',
    r_glt: '盖伦特',
    r_am: '艾玛',
    r_mmt: '米玛塔尓',
    r_other: '其他',
  },

  skill: {
    suiTie: '碎铁处理技术',
    suiTieJJ: '进阶碎铁处理技术',
    suiTieZZ: '专家碎铁处理技术',
  },

  topicType:{
    normal : '普通文章',
    siteNews : 'iEVE公告',
    officialNews : '官方新闻',
    thirdNews : '第三方消息',
    legion : '军团新闻',
    personal : '个人发布',
    cheater : '小心骗子',
    tradeBuy : '收购订单',
    tradeSell : '出售订单',
    tradeBoth : '混合订单',
    1 : '普通文章',
    11 : 'iEVE公告',
    13 : '官方新闻',
    15 : '第三方消息',
    16 : '小心骗子',
    21 : '军团新闻',
    31 : '个人发布',
    61 : '收购订单',
    62 : '出售订单',
    69 : '混合订单',
  },

  shipBlueprintType:{
    ship: '船',
    equipment: '装备',
    drone: '无人机',
    building: '建筑',
  },


  item:{
    title:{
      e_id: 'ID',
      e_title: '名称',
      e_isk_market: '参考价格',
      r_id: 'ID',
      r_title: '名称',
      r_isk_market: '参考价格',


      e_volumn: '体积',
      e_powerCost: '能量栅格需求',
      e_gjCost: '启动电量',
      e_damageRate: '伤害倍率',
      e_runTime: '运转时间',
      e_reloadTime: '重启延迟',

      e_singleDamage: '单次伤害',
      e_v_1_mid_2: '电量转移值',
      e_v_1_mid_3: '能量中和值',
      e_v_1_mid_13: '电量转移值',
      e_v_1_mid_23: '电量转移值',
      e_v_1_mid_31: '减伤比例',
      e_v_1_mid_32: '承伤比例',

      e_shield: '护盾',
      e_shield_r: '护盾维修量',
      e_shield_add: '护盾增加',
      e_armor: '装甲',
      e_armor_r: '装甲维修量',
      e_armor_add: '装甲增加',
      e_structure: '结构',
      e_structure_r: '结构维修量',
      e_structure_add: '结构增加',

      e_singleRadius: '信号半径',
      e_scanResolution: '扫描分辨率',


      e_range: '最佳射程',
      e_range_high_1: '导弹射程',

      e_lostRange: '失准范围',
      e_followSpeed: '跟踪速度',
      e_push: '推力调整',
      
      e_ch_flySpeed: '飞行速度加成',
      e_ch_flySpeed_ac: '激活-飞行速度加成',  
      e_ch_flyTime: '飞行时间加成',
      e_ch_flyTime_ac: '激活-飞行时间加成',
      e_ch_inertia: '惯性调整',
      e_ch_inertia_ac: '激活-惯性调整',
      e_ch_wrapDisrup: '跃迁干扰强度',
      e_ch_wrapDisrup_ac: '激活-跃迁干扰强度',
      e_ch_scanResolution: '扫描分辨率调整',
      e_ch_scanResolution_ac: '激活-扫描分辨率调整',
      e_ch_signalRadius: '信号半径调整',
      e_ch_signalRadius_ac: '激活-信号半径调整',
      e_ch_kg: '质量调整',
      e_ch_kg_ac: '激活-质量调整',
      e_ch_damageRate: '伤害调整',
      e_ch_damageRate_ac: '激活-伤害调整',
      e_ch_runTime: '运行时间调整',
      e_ch_runTime_ac: '激活-运行时间调整',
      e_ch_lostRange: '失准范围调整',
      e_ch_lostRange_ac: '激活-失准范围调整',
      e_ch_range: '最佳射程调整',
      e_ch_range_ac: '激活-最佳射程调整',
      e_ch_followSpeed: '跟踪速度调整',
      e_ch_followSpeed_ac: '激活-跟踪速度调整',
      e_ch_exSpeed: '爆炸速度调整',
      e_ch_exSpeed_ac: '激活-爆炸速度调整',
      e_ch_exRadius: '爆炸半径调整',
      e_ch_exRadius_ac: '激活-爆炸半径调整',


      e_exSpeed: '爆炸速度',
      e_exRadius: '爆炸半径',
      e_fuel: '启动燃料',



      e_v_1_low_1: '电容量增加',
      e_v_2_low_1: '瞬时临时电容增强',
      e_v_3_low_1: '瞬时临时电容比例',
      e_v_4_low_1: '电容战抗性加成',


      e_v_1_low_12: '生成临时护盾值',
      e_v_2_low_12: '生成临时护盾比例',
      e_v_1_low_22: '生成临时装甲值',
      e_v_2_low_22: '生成临时装甲比例',

      e_v_1_low_41: '激活时伤害抗性',


      e_v_1_low_51_2401: '惯性调整倍率',
      e_v_1_low_51_2402: '跃迁干扰强度加成',

      e_v_1_low_53: '电容量惩罚',

      e_v_1_low_61: '感应器复校时间',

      e_v_1_low_71: '激活-伤害调整',
      e_v_2_low_71: '激活-运行时间调整',

      e_v_1_low_71_3401: '激活-效果增益',
      e_v_1_low_71_3302: '激活-效果增益',





      r_v_1_rig_p_1_1_1: '伤害倍率加成',
      r_v_1_rig_p_1_1_2: '失准范围调整',
      r_v_1_rig_p_1_1_3: '启动电量调整',
      r_v_1_rig_p_1_1_4: '运转时间调整',
      r_v_1_rig_p_1_1_5: '能量栅格需求调整',

      r_v_1_rig_p_1_11_11: '伤害倍率加成',
      r_v_1_rig_p_1_11_12: '失准范围调整',
      r_v_1_rig_p_1_11_13: '启动电量调整',
      r_v_1_rig_p_1_11_14: '运转时间调整',
      r_v_1_rig_p_1_11_15: '能量栅格需求调整',

      r_v_1_rig_p_1_21_21: '伤害倍率加成',
      r_v_1_rig_p_1_21_22: '失准范围调整',
      r_v_1_rig_p_1_21_23: '启动电量调整',
      r_v_1_rig_p_1_21_24: '运转时间调整',
      r_v_1_rig_p_1_21_25: '能量栅格需求调整',

      r_v_1_rig_p_1_41_41: '伤害倍率加成',
      r_v_1_rig_p_1_41_42: '失准范围调整',
      r_v_1_rig_p_1_41_43: '运转时间调整',
      r_v_1_rig_p_1_41_44: '能量栅格需求调整',

      r_v_1_rig_p_1_61_61: '爆炸速度加成',
      r_v_1_rig_p_1_61_62: '伤害倍率加成',
      r_v_1_rig_p_1_61_63: '爆炸半径调整',
      r_v_1_rig_p_1_61_64: '飞行时间加成',
      r_v_1_rig_p_1_61_65: '飞行速度加成倍率',
      r_v_1_rig_p_1_61_66: '运转时间调整',

      r_v_1_rig_p_1_81_81: '伤害倍率加成',
      r_v_1_rig_p_1_81_82: '失准范围调整',
      r_v_1_rig_p_1_81_83: '运转时间调整',
      r_v_1_rig_p_1_81_84: '无人机控制距离加成',

      r_v_1_rig_p_2_101_101: '运转时间调整',
      r_v_1_rig_p_2_101_102: '护盾维修量加成',
      r_v_1_rig_p_2_101_103: '启动电量调整',
      r_v_1_rig_p_2_101_104: '护盾加成',
      r_v_1_rig_p_2_101_105: '护盾电磁抗性加成',
      r_v_1_rig_p_2_101_106: '护盾热能抗性加成',
      r_v_1_rig_p_2_101_107: '护盾动能抗性加成',
      r_v_1_rig_p_2_101_108: '护盾爆破抗性加成',

      r_v_1_rig_p_2_121_121: '运转时间调整',
      r_v_1_rig_p_2_121_122: '装甲维修量加成',
      r_v_1_rig_p_2_121_123: '启动电量调整',
      r_v_1_rig_p_2_121_124: '装甲加成',
      r_v_1_rig_p_2_121_125: '装甲电磁抗性加成',
      r_v_1_rig_p_2_121_126: '装甲热能抗性加成',
      r_v_1_rig_p_2_121_127: '装甲动能抗性加成',
      r_v_1_rig_p_2_121_128: '装甲爆破抗性加成',

      r_v_1_rig_p_2_141_141: '结构加成',
      r_v_1_rig_p_2_141_142: '结构电磁抗性加成',
      r_v_1_rig_p_2_141_143: '结构热能抗性加成',
      r_v_1_rig_p_2_141_144: '结构动能抗性加成',
      r_v_1_rig_p_2_141_145: '结构爆破抗性加成',

      r_v_1_rig_m_1_1001_1001: '启动电量调整',
      r_v_1_rig_m_1_1001_1002: '飞行速度加成倍率',
      r_v_1_rig_m_1_1001_1003: '惯性调整',
      r_v_1_rig_m_1_1001_1004: '货舱容量加成',
      r_v_1_rig_m_1_1001_1005: '质量加成',
      r_v_2_rig_m_1_1001_1005: '惯性调整',
      r_v_3_rig_m_1_1001_1005: '飞行速度调整',
      r_v_1_rig_m_1_1001_1006: '跃迁干扰强度',
      r_v_1_rig_m_1_1001_1007: '跃迁速度加成',

      r_v_1_rig_m_2_1101_1101: '电容量加成',
      r_v_1_rig_m_2_1101_1102: '电容回充时间调整',
      r_v_1_rig_m_2_1101_1103: '能量输出加成',
      r_v_1_rig_m_2_1101_1104: '扫描分辨率调整',

      r_v_1_rig_m_3_1201_1201: '扫描强度加成',
      r_v_1_rig_m_3_1201_1202: '扫描强度加成',

      r_v_1_rig_m_4_1301_1301: '开采量加成',
      r_v_1_rig_m_4_1301_1302: '运转时间调整',
      r_v_1_rig_m_4_1301_1303: '最佳射程调整',
      r_v_1_rig_m_4_1301_1304: '启动电量调整',


      dps: 'DPS',




    }
  },



  footerbar:{
    newBug: '提交Bug',
    contact: '联系我们',
    msg: '如果可以请帮忙推广下, 告诉你身边的朋友, 也可以<a href="https://github.com/016/lm180_iEVE_Echoes/issues/new" target="_blank">提个建议</a>, 谢谢.',
  },
  pub: {
    topbar:{
      index: '首页',
      about: '关于',
      price: '价格',
      devPlan: '开发计划',
      dashboard: '仪表盘',
      project: '项目',
      signout: '退出',
      login: '登录',
      signup: '注册',
    },
    index:{
      title: '欢迎',
      subTitle: '使用iMenu来在线管理你的所有项目',

    },
    about:{
      title: '关于',
      subTitle: '关于iMenu',

    },
    price:{
      title: '价格',
      subTitle: '价格表',

    },
    devPlan:{
      title: '开发计划',
      subTitle: '202007测试数据更新计划表',
      body:'<ul><li class="text-green">[完成]逆向蓝图所需材料数据</li><li class="text-green">[完成]矿石熔炼数据</li><li class="text-green">[完成]舰船碎片提炼数据</li><li class="text-green">[完成]造船所需材料数据</li><li class="text-green">[完成]改装件制造所需材料数据</li><li>[未启动]行星资源产出数据(这个数据量很大需要较多时间)</li><li class="text-green">[完成]配船用到的舰船属性数据</li><li class="text-green">[完成]配船用到的装备属性数据</li></ul>',
    },

    login:{
      title: '登录后便可食用',
      signupSuccess: '<h4><i class="icon fa fa-check"></i> 注册成功</h4> 请登录你的新帐号.',
      resetPassSuccess: '<h4><i class="icon fa fa-check"></i> 密码重置成功</h4> 请使用你的新密码登录.',
      loginExpired: '<h4><i class="icon fa fa-check"></i> 登录信息超时</h4> 请重新登录.',
      username: '用户名',
      pass: '密码',
      email: '邮箱',
      phone: '电话',
      rememberMe: '记住登录状态',

    },

    signup:{
      title: '注册个新账号',
      fullname: '全名',
      username: '用户名',
      pass: '密码',
      passRepeat: '密码重复',
      email: '邮箱',
      inviteCode: '邀请码',
      phone: '电话',
      agreeTerm: ' 我同意 <a href="javascript:;">条款</a>',

    },

    forgotPass:{
      title: '重置你的密码',
      newPass: '新密码',
      email: '邮箱',
      phone: '电话',

    },


  },
  account:{
    id: '',
    title: '姓名',
    phone: '电话',
    email: '邮箱',
    money: '帐户余额',
    username: '用户名',
    desc: '描述',
    sexy: '性别',
    pass: '密码',
    passOld: '旧密码',
    passNew: '新密码',
    passNewRepeat: '新密码重复',

  },
  pri: {
    topbar:{
      dashboard: '仪表盘',
      materialPrice: '今日材料价格',
      volunteer: '志愿者招募',
      donate: '捐赠',
      monument: '纪念碑',
      market: 'iEVE市场',
      marketOnline: '在线市场',
      news: 'iEVE新闻台',
    },
    sidebar:{
      quickTable: '速查表',
      quickTablePaymentPlan: '付费方案速查表',
      quickTableOre: '矿石速查表',
      quickTableVesselDebris: '舰船碎片速查表',
      commonElement: '基本元素',
      calculator: '基础计算器',
      advCal: '进阶计算器',
      skillPoint: '技能点计算器',
      planetary: '行星资源查询器',
      shipBlueprintResearch: '逆向蓝图查询器',
      ship: '造船计算器',
      equipment: '装备制造计算器',
      drone: '无人机制造计算器',
      building: '建筑制造计算器',
      ore: '原矿提炼计算器',
      oreMix: '多原矿提炼计算器',
      vesselDebris: '舰船碎片提炼计算器',
      slavagedMaterials: '打捞材料查询器',
      rig: '改装件制造计算器',
      shipConfig: '舰船装配模拟',

      market: '市场',

      siteElement: '其他',

      userCenter: '用户中心',
      userInfo: '用户信息',
      changePass: '修改密码',
      bindPhone: '绑定手机',

      mShipConfig: '配船相关',
      myShipConfig: '我的配船',
      myShipConfigCategory: '配船分类',
      myShipConfigCollection: '配船收藏',
      myShipConfigLike: '配船评价',

      myTopic: '我的文章',
    },
    dashboard:{
      title: '仪表盘',
      subTitle: '全部信息汇总的地方.',

      welcome: {
        title: '欢迎来到 iEVE EVE手游在线工具箱',
        subTitle: '这里提供多种EVE手游在线辅助工具',        
        body: '<p class="text text-green">20200813服务器正式开启, 祝各位一切顺利. 我们正在完善各种数据, 详情请看下面的开发计划 </p><p>很多数据的更新需要在服务器开启后进行, 我们的志愿者已经准备好了.</p>',
      },

    },

    userCenter:{
      title: '用户中心',
      subTitle: '管理你的账号.',   
      basicTitle: '用户信息',
      basicSubTitle: '管理你的用户信息.',        
    },
    changePass:{
      title: '修改密码',
      subTitle: '在这里修改密码.',           
    },
    bindPhone:{
      title: '绑定手机',
      subTitle: '在这里绑定手机.',           
    },

    materialView:{
      title: '今日材料价格',
      subTitle: '这里列出了所有基础材料的价格, 这些价格将会在各个计算器中用来计算总价',
      usageTitle: '特别说明',
      usageBody: '<ul><li>价格格式为 999 / 20000, 前面的999为一周平均市场售价, 后面的20000为官方推荐价格, 即我们常说的系统价格</li><li>一周平均价格, 来自市场有大量卖单的价格, 考虑到距离远近一般会选择偏高一些的价格, 请知晓</li><li>即使价格有错也不用担心, 你可以在每个计算器中修改默认加载的价格</li><li>个人维护数据难免有照顾不到的地方, 如果觉得有奇怪的价格请提交一个bug方便修复谢谢, bug提交连接在最下面的页脚部分</li></ul>',

      typeTitle:{
        t0: '矿石',
        t1: '矿物',
        t2: '行星资源',
        t3: '打捞材料',
        t11: '受损结构',
        t21: '数据核心',
      },

      table:{
        title:{
          m_title: '名称',
          m_isk_market: '市场价格',
          m_isk_system: '系统价格',
          m_updateDate: '更新时间',
        }
      },
    },

    shipSelector:{
      config: {
        selectShip: '选择船',
        filteredShipCategory: '类型筛选',
        filteredRaceType: '种族筛选',
      },
    },

    shipView:{
      title: '制造计算器',
      subTitle: '快速查询造船所需材料以及缺少数量, 快速了解所需挖矿信息',
      usageTitle: '使用说明',
      usageBody: '<ul><li>目前已经支持4个类型物品的制造, 尝试切换下吧!</li><li>特别提醒, 只有满足科技等级条件才可以造东西, 所以一定先确认科技等级已满足!!!!</li><li>选择一种物品, 并设置对应的"制造数量","材料效率","时间效率", "计算结果"部分即可正确显示所需的材料数量</li><li>在"已拥有"输入已有材料数量, 可得出"缺少"材料数量</li><li>"价格统计"为最近一周的平均价格, 用其作为参考分别计算出, 各种单项和总计价格, 方便掌握价格, 特别指出"缺少"的总价仅包含缺少的价格, 如果一种材料满足需求并且有多,那么多余的这个钱并不会计入缺少总价, 为了避免某一种材料多了很多,导致缺少价格为0的情况</li><li>"原矿计算"可快速列出所缺的材料需要挖多少原矿, 这里需输入你的"原矿提炼效率". </li><li>"原矿计算结果"中, 点击原矿名前的眼睛标志可以查看所有可用的矿石信息</li><li>所有数据均为手工输入,若发现错误, 请提交一个bug方便修复谢谢, bug提交连接在最下面的页脚部分</li><li><a href="https://www.bilibili.com/video/av80449531/" target="_blank">基本操作讲解视频</a></li></ul>',
      config: {
        title: '参数设定',
        selectItem0: '物品',
        selectItem1: '船',
        selectItem11: '装备',
        selectItem51: '无人机',
        selectItem91: '建筑',
        itemCategoryFilter: '类型',

        buildCnt: '建造数量',
        buildCostRate: '材料效率',
        buildTimeRate: '时间效率',

        data:{
          i_isk_market: "市场价格",
          i_isk_system: "系统售价",
          sb_isk_market: "蓝图市场价格",
          sb_isk_system: "蓝图系统售价",
          sb_isk_build: "制作价格",
          sb_techLvl: "科技等级",
          sb_time_build: "制作时间",
          mins: "分钟",
          sec: "秒",
        },
      },
      result:{
        title: '计算结果',


        table:{
          title:{
            item: '材料',
            inhand: '已拥有(支持运算符+-*/)',
            buildCost: '建造花费',
            stillNeed: '缺少',
            percent: '拥有比例',
            sum: '总价',
          },
          option:{
            showItemPrice: '显示明细价格',
            showSumPrice: '显示总价',
          }
        }
      },
      oreConfig: {
        title: '原矿计算设置',
        title_rate: '设置原矿提炼效率',
        title_rate_small: '只需设置给出的几种原矿提炼效率即可, 相同效率的无需重复设置',
        title_oreOpen: '设置原矿挖取',
        title_oreOpen_small: '只有设置挖取为"是"才会进行后续计算',
      },
      oreResult:{
        title: '原矿计算结果',
        title_small: '针对原矿建议, 支持如下操作: 单击重点显示, 双击隐藏, 点击"眼镜"查看所有可能',



        table:{
          title:{
            item: '原矿名称',
            stillNeed: '缺少',
            oreSuggest: '原矿建议',
          },
        }
      }

    },

    shipBRView:{
      title: '蓝图逆向计算器',
      subTitle: '计算蓝图逆向所需材料数量和成功率等参数',

      usageTitle: '使用说明',
      usageBody: '<ul><li>选蓝图就可以看到所需材料和成功率</li></ul>',
      config: {
        title: '参数设定',

        buildCnt: '制作数量',
        buildSuccessRate: '成功率倍数',
        buildTimeRate: '时间效率',

        data:{
          r_isk_market: "市场价格",
          r_isk_system: "系统售价",

          sb_isk_market: "蓝图市场价格",
          sb_isk_system: "蓝图系统售价",
          s_isk_market: "船市场价格",
          s_isk_system: "船系统售价",

          sbr_time_build: "逆向耗时",
          sbr_isk_build: "所需ISK",
          sbr_successRate: "成功率",
        },
      },
      result:{
        title: '计算结果',

        table:{
          title:{
            item: '材料',
            inhand: '拥有数量',
            buildResult: '制作所需',
            need: '缺少数量',
            percent: '拥有比例',
            sum: '总价',
          },
          option:{
            showItemPrice: '显示明细价格',
            showSumPrice: '显示总价',
          }
        }
      }
    },

    planetaryView:{
      title: '行星资源查询器',
      subTitle: '快速找到行星材料的位置, 并且算出你帐号的产量和对应价值',
      usageTitle: '使用说明',
      usageBody: '<ul><li>已添加所有星域数据, 欢迎使用</li><li>选择星域,星座,星系和需要查询的行星资源, 点"开始查询", 即可得到当前条件下的行星资源分布情况, 星座和星系可以为空, 特别注意选择的条件有可能会找不到任何结果, 属于正常现象, 代表当前条件下没有这个行星资源</li><li>修改开采列阵数量可以算出当前帐号的实际小时产量</li><li>查询结果中的"||| 25.47 / 25.47" 代表 资源评价 单位开采量 / 总开采量</li><li>价格为每周更新一次, 方便了解行星资源的实际价值</li></ul>',
      config: {
        title: '参数设定',
        selectRegion: '星域',
        selectConstellation: '星座',
        selectSolarSystem: '星系',
        selectPType: '行星资源',
        startBtn: '开始查询',

        buildCnt: '开采阵列',
        buildTime: '开采时长',
        showAllResult: '全部结果',

        data:{
          o_isk_market: "市场价格",
          o_isk_system: "系统售价",
          o_volumn: "原矿体积",
        },
      },
      result:{
        title: '查询结果',
        emptyResultFound: '未查询到任何可用行星资源, 当前条件下无法找到任何可用结果, 请更换条件再试',
        dataContributor: '{regionTitle} 数据由 {contributorTitle} 贡献, 非常感谢',

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
            item: '行星资源',
            sum: '总价',
          },
          option:{
            showItemPrice: '显示明细价格',
            showSumPrice: '显示总价',
          }
        }
      }

    },

    oreView:{
      title: '原矿提炼计算器',
      subTitle: '快速计算你手里的矿石能提炼出多少矿物',
      usageTitle: '使用说明',
      usageBody: '<ul><li>选择一种原矿, 并设置对应的"原矿数量","材料效率", "计算结果"即可显示可以获得的矿物数量</li><li>"小行星带" 为可以找到原矿的小行星带范围, "安全等级"为小行星带可以被找到的安全范围</li><li>"船舱体积"为一个特殊参数, 输入后自动计算输入体积可以携带原矿数量, 方便快速了解指定体积的原矿量装载量, 每次切换原矿类型或者改变原矿数量后该参数即失效,下次修改生效, 原因是原矿数量,单位体积和船舱体积冲突,所以只保证前面2项</li><li>游戏规定最小提炼量是100, 若你提炼199, 只会提炼100留下99原矿</li><li>"价格统计"为最近一周的平均价格, 用其作为参考分别计算出, 各种单项和总计价格, 方便掌握价格, 特别指出"缺少"的总价仅包含缺少的价格, 如果一种材料满足需求并且有多,那么多余的这个钱并不会计入缺少总价, 为了避免某一种材料多了很多,导致缺少价格为0的情况</li><li>因为有小数点, 在多次转换计算中会出现1-2个单位的偏差, 比如计算结果为135,游戏内显示134, 作为参考影响不大,但请知晓</li><li>所有数据均为手工输入,若发现错误, 请提交一个bug方便修复谢谢, bug提交连接在最下面的页脚部分</li><li><a href="https://www.bilibili.com/video/av80457729/" target="_blank">基本操作讲解视频</a></li></ul>',
      config: {
        title: '参数设定',
        selectOre: '选择原矿',
        buildCnt: '原矿数量',
        buildVolume: '船舱体积',
        buildCostRate: '材料效率',

        data:{
          o_isk_market: "市场价格",
          o_isk_system: "系统售价",
          o_volumn: "原矿体积",
          o_asteroidLv: "小行星带",
          o_safeLv: "安全等级",
        },
      },
      result:{
        title: '计算结果',


        table:{
          title:{
            item: '矿物',
            target: '目标数量',
            buildResult: '提炼获得',
            left: '缺少数量',
            percent: '缺少比例',
            sum: '总价',
          },
          option:{
            showItemPrice: '显示明细价格',
            showSumPrice: '显示总价',
          }
        }
      }

    },
    oreMixView:{
      title: '多种原矿提炼计算器',
      subTitle: '针对多种矿物进行复合计算的新计算器, 欢迎体验',
      usageTitle: '使用说明',
      usageBody: '<ul><li>点击"+ 新原矿提炼" 可以增加原矿数量进行复合计算</li><li>在体验了回旋者那种随机挖矿之后, 我发现之前的单一原矿提炼计算器无法应付这个场景, 所以我增加了这么一个多种原矿复合计算器, 应该可以很好的解决问题</li><li>计算结果以1为单位, 但是在提炼的时候依然是小于100不会提炼, 请知晓</li><li>因为有小数点, 在多次转换计算中会出现1-2个单位的偏差, 比如计算结果为135,游戏内显示134, 作为参考影响不大,但请知晓</li><li>所有数据均为手工输入,若发现错误, 请提交一个bug方便修复谢谢, bug提交连接在最下面的页脚部分</li></ul>',
      result:{
        title: '计算结果',


        table:{
          title:{
            item: '矿物',
            target: '目标数量',
            buildResult: '提炼',
            left: '缺少数量',
            percent: '缺少比例',
            sum: '总价',
            cnt: '数量',
            rate: '效率',
            volume: '体积',
          },
          option:{
            showItemPrice: '显示明细价格',
            showSumPrice: '显示总价',
            addNewOre: '+ 新原矿提炼',
          }
        }
      }

    },

    vesselDebrisView:{
      title: '舰船碎片提炼计算器',
      subTitle: '快速计算你手里的舰船碎片能提炼出多少打捞材料',
      usageTitle: '使用说明',
      usageBody: '<ul><li>选择一种碎片, 并设置对应的"提炼数量","材料效率", "结算结果"即可显示可以获得的打捞材料数量</li><li>提炼结果里的小数部分是存在的, 比如2.33 提炼1个得到2个打捞材料, 一次提炼10个则得到23个</li><li>若不确定材料效率,可直接使用"选择技能"会自动算出提炼效率</li><li>"目标数量", "缺少数量", "缺少比例"是为了方便计算还缺少的部分</li><li>"价格统计"为最近一周的平均价格, 用其作为参考分别计算出, 各种单项和总计价格, 方便掌握价格, 特别指出"缺少"的总价仅包含缺少的价格, 如果一种材料满足需求并且有多,那么多余的这个钱并不会计入缺少总价, 为了避免某一种材料多了很多,导致缺少价格为0的情况</li><li>所有数据均为手工输入,若发现错误, 请提交一个bug方便修复谢谢, bug提交连接在最下面的页脚部分</li><li><a href="https://www.bilibili.com/video/av80457780/" target="_blank">基本操作讲解视频</a></li></ul>',
      config: {
        title: '参数设定',
        selectVesselDebris: '选择碎片',
        buildCnt: '提炼数量',
        buildCostRate: '材料效率',
        selectSkill: '选择技能',

        data:{
          vd_isk_market: "市场价格",
          vd_isk_system: "系统售价",
        },
      },
      result:{
        title: '计算结果',


        table:{
          title:{
            item: '打捞材料',
            target: '目标数量',
            buildResult: '提炼获得',
            left: '缺少数量',
            percent: '缺少比例',
            sum: '总价',
          },

          option:{
            showItemPrice: '显示明细价格',
            showSumPrice: '显示总价',
          }
        }
      }

    },

    slavagedMaterialView:{
      title: '打捞材料查询器',
      subTitle: '快速查询打捞材料的提炼来源',
      usageTitle: '使用说明',
      usageBody: '<ul><li>选择一种打捞材料,即可计算出提炼来源, 并且可以根据提炼效率计算产出</li><li>若不确定材料效率,可直接使用"选择技能"会自动算出提炼效率</li><li>所有数据均为手工输入,若发现错误, 请提交一个bug方便修复谢谢, bug提交连接在最下面的页脚部分</li></ul>',
      config: {
        title: '参数设定',
        selectVesselDebris: '打捞材料',
        buildCostRate: '材料效率',
        selectSkill: '选择技能',

        data:{
          isk_market: "市场价格",
          isk_system: "系统售价",
        },
      },
      result:{
        title: '查询结果',


        table:{
          title:{
            item: '舰船碎片',
          },

          option:{
            showItemPrice: '显示明细价格',
          }
        }
      }

    },

    rigSelector:{
      config: {
        selectRig: '选择改装件',
        filteredRigCategory: '类型筛选',
      },
    },

    rigView:{
      title: '改装件制造计算器',
      subTitle: '在这里可以计算改装件所需材料数量',

      usageTitle: '使用说明',
      usageBody: '<ul><li>特别提醒, 科技等级够了才能造, 所以先确认科技等级!!!</li><li>选择一种改装件, 并设置对应的"制作数量","材料效率","时间效率", "计算结果"即可显示所需材料数量</li><li>所有数据均为手工输入,若发现错误, 请提交一个bug方便修复谢谢, bug提交连接在最下面的页脚部分</li></ul>',
      config: {
        title: '参数设定',
        selectRig: '改装件',
        buildCnt: '制作数量',
        buildCostRate: '材料效率',
        buildTimeRate: '时间效率',

        data:{
          r_isk_market: "市场价格",
          r_isk_system: "系统售价",

          rb_techLvl: "科技等级",
          rb_isk_build: "制作价格",
          rb_time_build: "制作时间",
          rb_isk_market: "蓝图市场价格",
          rb_isk_system: "蓝图系统售价",
        },
      },
      result:{
        title: '计算结果',

        table:{
          title:{
            item: '打捞材料',
            inhand: '拥有数量',
            buildResult: '制作所需',
            need: '缺少数量',
            percent: '拥有比例',
            sum: '总价',
          },
          option:{
            showItemPrice: '显示明细价格',
            showSumPrice: '显示总价',
          }
        }
      }
    },

    skillPointView:{
      title: '技能点计算器',
      subTitle: '在这里可以计算得到技能点所需时间',

      usageTitle: '使用说明',
      usageBody: '<ul><li>设置对应的"开始/目标技能点", "计算结果"即可显示所需点数和时间</li><li>选择"科技等级"后会自动把该等级所需点数作为"目标技能点"</li><li>"获得点数" 为每分钟获得的技能点数, "时间效率"为获得点数的倍率</li><li>"额外点数" 针对每天送技能点的情况, 这个点数会分摊到分钟计入"获得点数", 并带入最终计算</li><li>科技等级数据由我们志愿者群里的"鱼大人"同学整理, 在这里感谢他的无私分享精神, 若发现错误, 请提交一个bug方便修复谢谢, bug提交连接在最下面的页脚部分</li></ul>',
      config: {
        title: '参数设定',
        selectSkill: '科技等级',
        startSkillPoint: '开始技能点',
        endSkillPoint: '目标技能点',
        min: '分钟',
        day: '天',

        skillMinPoint: '获得点数',
        skillTimeRate: '时间效率',
        skillDailyPoint: '额外点数',
      },
      result:{
        title: '计算结果',
        needPoint: '总点数',
        finallyMinPoint: '最终获得点数',
        needMin: '分钟',
        needHour: '小时',
        needDay: '天',

      }
    },

    shipConfigView:{
      title: '[Beta]舰船装配模拟',
      subTitle: '通过网页管理配船方案, 通过url分享和讨论配船方案, 轻量且快速',
      usageTitle: '使用说明',
      bodyText: '<ul><li>时隔3个月, 终于完成了这个版本, 当前版本已经集成了公开测试的部分数据, 以下为一些功能说明: </li><li>已完成内容: <ol><li>查看船属性</li><li>查看装备属性</li><li>查看改装件属性</li><li>查看无人机属性</li><li>保存配船方案</li><li>管理配船方案</li><li>通过url分享配船方案</li></ol></li><li>尚未完成内容: <ol><li>技能未添加, 会在开服后进行添加</li><li>公式计算不准确, 考虑到后续的修改, 我们会在开服1个月以后开始完善</li><li>装备激活, 伴随公式校对完成</li></ol></li><li>我们的最终目标是通过网页完成配船, 网页打开url就可以看到配船方案和大家的讨论, 让新手玩家可以轻松的抄作业, 让军团/团队玩家可以方便的交流和统一配置, 让高手玩家乐在其中</li></ul>',
      config: {
        title : '参数设置',
        btn : {
          showEditoForm: '编辑属性',
          showItemDetail: '显示全部装备属性',
          collect: '收藏',
          save: '保存',
          reset: '刷新',
        },
        form: {
          categoryId: '分类',
          desc: '介绍',
          shortDesc: '简介',
        },
      },

      msg:{
        saved: '保存成功!',
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
        title: '设置关联技能',
        small: '[数据未关联] 选择技能并设置技能等级后即可关联对数值的影响',

        newBtn: '+ 新技能',
      },

      condition:{
        title: '设置相关变量',
        small: '[数据未关联] 设置例如虫洞, 舰队辅助等参数后即关联对数值的影响',

        newBtn: '+ 新变量',
      },


      resultBox: {
        topInfo: {
          powergrid: '能量栅格',
          capa_cargo: '货舱容量',
          capa_ore: '矿石容量',
          capa_logistics: '物流容量',

          skillBonus: '技能加成',
          specialBonus: '特殊加成',
        },
        attack: {
          title: '攻击',
          missile: '导弹',
          battery: '炮台',
          drone: '无人机',
          mining: '挖矿',
        },
        defense: {
          title: '防御',
          shield:'护盾',
          armor:'装甲',
          structure:'结构',
        },
        capacity: {
          title: '电容',
          hcsj: '回充时间',
          zdhc: '最大回充',
        }, 
        radar: {
          title: '雷达',

          target: '锁定',
          signatureRadius: '信号半径',
          scanResolution: '分辨率',
          induction: '感应强度',
        }, 
        navigation: {
          title: '导航',
          warpAgainst: '抗跃迁干扰',
          warpSpeed: '跃迁速度',
          inertiaModifier: '惯性系数',
          mass: '质量',
        }, 
        price: {
          title: '价格',
          ship: '裸船',
        }, 

      },

    },

    shipConfigShareFormModal:{
      title: '查看分享Link'

    },


    volunteerView:{
      title: '[招募中]志愿者团队',
      subTitle: '加入志愿者团队, 为iEVE做贡献, 为全体EVE玩家出点力',
      plan:{
        title: '志愿者招募计划',
        subTitle: '加入我们, 给你更充实的游戏体验',
        bodyText:'<p>最一开始觉得工作量应该还ok, 但是实际做起来以后发现, 工作量巨大, 特别是决定做舰船装配模拟器之后, 要把所有的舰船数据,装备数据,技能数据都整理出来,然后套上程序来实现数据模拟, 不过这个模拟器做出来以后应该很爽的. 所以现在面向所有人招募如下几类志愿者(其实也不算完全的志愿者,后面会说)</p><ul><li>数据整理类, 会用excel, 一周最少能有3-5个小时时间, 时间为公开测试第1-2周总计2周, 初步计划3-5个人2周干完所有数据</li><li>数据筛查类, 使用iEVE网站对数据进行筛查, 发现问题指出, 招募3人, 每周2小时, 时间为公开测试第3-5周总计3周</li><li>天才玩家类, 部分公式官方应该短期内不会给出, 需要想办法算出来, 比如某个装备提升15%的攻击力, 是如何提升的, 计划招募2-5名天才玩家, 我估计需要推演的公式有30-100的样子, 所以时间为公开测试开始后两个月, 每周工作时间应该有1小时就够了, 可能有端游经验的玩家更容易一些</li></ul><p>关于福利, 会做一个志愿者展示系统列出所有为这个程序做过贡献的人。 同时招免费和付费志愿者(招不到免费的话,付费也行^^), 当然这里也只有isk了(结算RMB会比较奇怪, 如果你能在很短的时间内把数据都整理好RMB也行), 所有费用由DP来负责, 将来会有一个新闻部分,会承接一部分军团广告, 应该可以弥补上这部分费用, 如果能顺利实现盈利, 即使免费志愿者也可以得到一批费用的奖励, 甚至可能会超过付费志愿者, 但这里的时间和未知因素要提前说明, 至于付费广告就不考虑了, 这么小众的一个游戏注定不会有太大的流量</p><p>写在最后, 其实我工作也挺忙, 但我想尝试为自己的游戏情怀买个单, 当年的自己也曾经为游戏疯狂过,  所以希望能找到有能力的人加入进来, 为大家构建一个更完美的游戏辅助工具</p><p>加入方式: QQ群 785233338 <small>游戏大概会在2020年08-09开始公测, 所以请确定有时间再申请加群, 谢谢</small></p>',
      },
      vtLinkText: '>>> 查看志愿者名单 <<<',
    },

    donateView:{
      title: '捐助iEVE',
      subTitle: '你的捐赠会让iEVE做的更好!',
      topbar:{
        title: '捐赠说明',
        subTitle: '',
        bodyText:'<p>iEVE是一个免费公益项目, 捐赠可以让他更稳定运营下去, 在这里你可以加入支持iEVE的队伍, 相信有你的支持它会更好!</p><p>目前我们支持游戏内捐赠和现金捐赠, 自愿捐赠不强迫, 并拒绝未成年人的捐赠行为.</p><p>非常鼓励游戏内捐赠, 我们的数据志愿者工作的非常辛苦, 他们牺牲了大量的私人时间来完善数据, 希望社区的玩家们通过游戏内捐赠来表达对他们的肯定和感谢.</p>',
        donateLinkText: '>>> 查看捐助名单 <<<',
      },
      inGame:{
        title: '游戏内捐赠',
        subTitle: '游戏内直接进行的捐赠',
        bodyText:'<p>只需要在游戏内挂合同给 <span class=\'text-green\'>ieve</span> 即可向我们捐赠ISK, Plex,  装备物品, 角色名称是<span class=\'text-green\'>ieve</span>无大写,无符号,无空格!!</p><p>在每天UTC 1:00 和 13:00 定时确认接收合同, 其他时间看到了也会确认</p><p>你的捐赠将被赠予为iEVE无偿提供服务的志愿者, 相信无论捐赠的大小，他们都会感觉到温暖!</p>',
      },
      paypal:{
        title: 'PayPal捐赠',
        subTitle: '通过PayPal收款链接进行捐赠',
        bodyText:'<p>我们的PayPal收款链接是: <a href=\'https://www.paypal.me/xinhualee\' target="_blank" >https://www.paypal.me/XinHuaLee</a></p><p>你的捐赠将被用于支付iEVE运营费用</p>',
      },
      alipay:{
        title: '支付宝捐赠',
        subTitle: '大陆用户扫码即可进行捐赠',
        bodyText:'<p><img src="./statics/pics/alipay_qr.jpg" /></p><p>你的捐赠将被用于支付iEVE运营费用</p>',
      },
      wechat:{
        title: '微信捐赠',
        subTitle: '大陆用户扫码即可进行捐赠',
        bodyText:'<p><img src="./statics/pics/wechat_qr.jpg" /></p><p>你的捐赠将被用于支付iEVE运营费用</p>',
      },
    },

    monumentView:{
      title: '纪念碑',
      subTitle: 'iEVE的前行离不开每一位的支持',
      topbar:{
        title: '数据说明',
        subTitle: '',
        bodyText:'<ul><li>希望以此来记住每一位帮助过iEVE的人</li><li>手工统计信息, 会有一定的滞后和误差, 如有异议请联系我</li><li>默认信息公开, 如果你想做无名英雄请联系我, 谢谢</li></ul>',
      },
      typeTitle:{
        t1: '特别感谢',
        t11: '志愿者',
        t21: '捐助者',
      },
      table:{
        title:{
          title: '名称',
          desc: '简介',
          p_minusCnt: '总贡献分钟数',
          p_startDate: '加入时间',
          p_donateAmount: '总捐赠数量',
          p_donateDate: '捐助时间',
        },
      },
    },

    quickTableOreView:{
      title: '矿石速查表',
      subTitle: '快速查找矿石产量',
      bodyText: '',

      oreConfig: {
        title: '参数设置',
        title_rate: '设置原矿提炼效率',
        title_rate_small: '只需设置给出的几种原矿提炼效率即可, 相同效率的无需重复设置',
        title_oreOpen: '设置原矿挖取',
        title_oreOpen_small: '只有设置挖取为"是"才会进行后续计算',
        otherConfig:{
          title: '辅助参数',
          title_small: '设置辅助参数帮助更好的使用',
          showType: {
            title: '显示方式',
            unit: '按1单位显示',
            volume: '按1体积显示',
          },
        }
      },

      table:{
        title:{
          o_title: '名称',
          o_volumn: '体积',
          o_asteroidLv: '小行星带',
          o_safeLv: '安全等级',
          o_: '',
        }
      },
    },

    quickTableVesselDebrisView:{
      title: '舰船碎片速查表',
      subTitle: '快速查找舰船碎片产量',
      bodyText: '',

      config: {
        title: '参数设置',
        buildCostRate: '材料效率',
        selectSkill: '选择技能',
        race: {
          title: '设置种族',
          title_small: '只有种族设置为是的才会显示',
        },
      },

      table:{
        title:{
          vd_title: '名称',
        }
      },
    },

    quickTablePaymentPlanView:{
      title: '付费方案速查表',
      subTitle: '快速查找付费方案的产能',
      bodyText: '',

      config: {
        title: '参数设置',
        resultUnit: '结果单位',
      },

      table:{
        title:{
          techLv_title: '科技等级',
          pointPerMin: ' 点/分钟',
        }, 
        data:{
          firstMonthFee: '首月费用',
          secondMonthFee: '次月费用',
          fourMonthFee: '前四月费用',
          firstYearFee: '首年费用',
        }
      },
      tableEx:{
        title:{
          ex_title: '点/分钟',
          ex_body: '说明',
          
        }, 
        data:{
          pointPerMin: ' 点/分钟',
          m_30_body: 'Alpha',
          m_35_body: 'Omega 5',
          m_40_body: 'Omega 5 + 第一本书( $1.99 )',
          m_45_body: 'Omega 5 + 第一本书( $1.99 ) + 第二本书( $5.99 )',
          m_50_body: 'Omega 5 + 第一本书( $1.99 ) + 第二本书( $5.99 ) + 第三本书( $29.99 )',
          m_60_body: 'Omega 25 + 第一本书( $1.99 )',
          m_65_body: 'Omega 25 + 第一本书( $1.99 ) + 第二本书( $5.99 )',
          m_70_body: 'Omega 5 + Omega 25 + 第一本书( $1.99 ) + 第二本书( $5.99 )',
          m_75_body: 'Omega 5 + Omega 25 + 第一本书( $1.99 ) + 第二本书( $5.99 ) + 第三本书( $29.99 )',
        }
      },
    },

    newsView:{
      title: 'iEVE新闻台',
      subTitle: '官方公告, 小道消息, 流言蜚语, 军团招募, 土豪广告, 尽在iEVE新闻台',
    },

    marketView:{
      title: 'iEVE星际市场',
      subTitle: '线上交流不方便? 来iEVE星际市场, 在公告板上留下你的交易信息, 相信很快就有人会联系你, 快捷, 高效, 公开, 透明',
    },

    onlineMarketView:{
      title: '[Alpha]在线市场',
      subTitle: '只需打开网页就可以查到游戏内市场的相关信息, 实时, 准确, 轻量化',

    },
    onlineMarketDetailModal:{
      title:{
        buy : '买家',
        sell : '卖家',
        history : '历史价格',
      },
      buy:{
        title:{
          regionTitle: '星域',
          amount: '数量',
          price: '价格',
          location: '位置',
          expiredAt: '过期时间',
          updateAt: '更新时间',
        }
      },
      sell:{
        title:{
          regionTitle: '星域',
          amount: '数量',
          price: '价格',
          location: '位置',
          expiredAt: '过期时间',
          updateAt: '更新时间',
        }
      },
      history:{
        zoom: {
          title: '快速选择',
          oneW: '1周',
          oneM: '1月',
          threeM: '3月',
          sixM: '6月',
          ytd: 'YTD',
          oneY: '1年',
          all: '全部',
        },
        series:{
          dailyAveragePrice: '日均价',
          minMax: '最高/最低价',
          moving5: '5日均线',
          moving20: '20日均线',
          donchain: '价格波动区间',
          volume: '成交量',
          orderCount: '成交笔数',
          volumePerOrder: '单笔成交量',
        }
      },

    },


    myShipConfigCategoryView:{
      title: '我的配船分类',
      subTitle: '管理我的配船分类',
      table:{
        title:{         
          scc_title: '标题',
          scc_desc: '描述',
        }
      }
    },
    shipConfigCategoryView:{
      modal:{
        title: '标题',
        desc: '描述',
      },
    },
    myShipConfigView:{
      title: '我的配船方案',
      subTitle: '管理我的配船方案',
      table:{
        title:{         
          s_title: '船名称',
          scc_title: '分类',
          sc_shortDesc: '简介',
          sc_creationDate: '创建时间',
          sc_updateDate: '更新时间',
        }
      }
    },
    myShipConfigCollectionView:{
      title: '我收藏的配船方案',
      subTitle: '管理我收藏的配船方案',
      table:{
        title:{         
          s_title: '船名称',
          scc_title: '分类',
          sc_shortDesc: '简介',
          sc_creationDate: '创建时间',
          sc_updateDate: '更新时间',
        }
      }
    },
    myShipConfigLikeView:{
      title: '我评价的配船方案',
      subTitle: '管理我评价过的的配船方案',
      table:{
        title:{         
          s_title: '船名称',
          scl_type_id: '类型',
          scc_title: '分类',
          sc_shortDesc: '简介',
          sc_creationDate: '创建时间',
          sc_updateDate: '更新时间',
        }
      }
    },


    myTopicListView:{
      title: '我的文章列表',
      subTitle: '管理我发布过的文章',
      modal:{
        t_type_id: '类型',
        t_cnt_publishDay: '增加展示天数',
        t_cnt_publishDay_hint: '帐户余额不足, 无法完成支付, 请充值',
        costPrice: '增加天数费用',
        accountBalance: '帐户余额',
        t_title: '标题',
        t_title_hint: '标题 为空或长度超过45',
        t_shortDesc: '简介',
        t_shortDesc_hint: '简介 为空或长度超过100',
        t_desc: '正文',
        t_desc_hint: '正文 最大长度1000',
      },
      table:{
        title:{         
          t_id: 'ID',
          t_type_id: '类型',
          t_title: '标题',
          t_shortDesc: '简介',
          t_startDate: '开始展示',
          t_endDate: '结束展示',
          t_creationDate: '创建时间',
          t_updateDate: '更新时间',
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
