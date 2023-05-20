/*
 * @Description: 日语语言包
 */

export default {
  route: {
    dashboard: '表紙',
    documentation: '書類',
    guide: 'ガイドページ',
    permission: '権限テストページ',
    rolePermission: '役割の権限',
    pagePermission: 'ページ権限',
    directivePermission: '指揮権限',
    icons: 'アイコン',
    components: 'コンポーネント',
    tinymce: 'リッチテキストエディタ',
    markdown: '値下げ',
    jsonEditor: 'JSONエディタ',
    splitPane: 'スプリットペイン',
    avatarUpload: 'アバターのアップロード',
    dropzone: 'ドロップゾーン',
    sticky: '粘着質',
    countTo: 'カウントトゥ',
    componentMixin: 'ウィジェット',
    backToTop: 'トップに戻る',
    draggableDialog: 'ドラッグ可能なダイアログ',
    draggableKanban: 'かんばんをドラッグアンドドロップ',
    draggableList: 'ドラッグ可能なリスト',
    draggableSelect: 'ドラッグアンドドロップして選択します',
    charts: 'チャート',
    barChart: '棒グラフ',
    lineChart: '折れ線グラフ',
    mixedChart: 'ハイブリッドチャート',
    example: '包括的な例',
    nested: 'ルートのネスト',
    menu1: 'メニュー1',
    'menu1-1': 'メニュー1-1',
    'menu1-2': '菜メニュー1-2',
    'menu1-2-1': 'メニュー1-2-1',
    'menu1-2-2': 'メニュー1-2-2',
    'menu1-3': 'メニュー1-3',
    menu2: 'メニュー2',
    table: 'シート',
    dynamicTable: '住宅管理',
    draggableTable: 'ドラッグ可能なフォーム',
    inlineEditTable: 'テーブル内編集',
    complexTable: '総合的なフォーム',
    tab: 'コラム',
    form: '形状',
    createArticle: '記事を作成する',
    editArticle: '記事を編集する',
    articleList: '記事一覧',
    errorPages: ' エラーページ',
    page401: '401',
    page404: '404',
    errorLog: 'エラーログ',
    excel: 'Excel',
    exportExcel: 'エクセルをエクスポート',
    selectExcel: '選択したアイテムをエクスポートする',
    mergeHeader: 'マルチレベルヘッダーのエクスポート',
    uploadExcel: 'Excelのアップロード',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'エクスポートジップ',
    theme: '皮を張り直す',
    clipboard: 'クリップボード',
    i18n: 'グローバリゼーション',
    externalLink: '外部リンク',
    profile: 'パーソナルセンター',
    oops: 'おっと',
    error_page_tips1: '入力したURLが正しいかご確認いただくか、下のボタンをクリックしてトップページに戻ってください。',
    error_page_tips2: '404 ページが見つかりません。',
    back_home: '家に帰って'
  },
  navbar: {
    logOut: 'サインアウト',
    dashboard: '表紙',
    github: 'プロジェクトアドレス',
    theme: '皮を張り直す',
    size: 'レイアウトサイズ',
    profile: 'パーソナルセンター'
  },
  login: {
    title: 'システムログイン',
    logIn: 'ログイン',
    username: 'アカウント',
    password: 'パスワード',
    // any: '随便填',
    any: '随便填',

    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！'
  },
  documentation: {
    documentation: '書類',
    github: 'Github 地址'
  },
  permission: {
    createRole: '新しい役割',
    editPermission: '編集権限',
    roles: 'あなたの権威',
    switchRoles: '権限を切り替える',
    tips: '在某些情况下，不适合使用 v-permission。例如：Element-UI 的 el-tab 或 el-table-column 以及其它动态渲染 dom 的场景。你只能通过手动设置 v-if 来实现。',
    delete: '消去',
    confirm: 'もちろん',
    cancel: 'キャンセル'
  },
  guide: {
    description: '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于',
    button: 'オープンガイド'
  },
  components: {
    documentation: '文档',
    tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
  },
  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    create: '作成',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    importance: '重要性',
    type: '类型',
    remark: '点评',
    search: '検索',
    add: '追加',
    export: '輸出',
    reviewer: '审核人',
    id: 'ID',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状态',
    actions: '操作',
    edit: '編集',
    publish: '发布',
    draft: '草稿',
    delete: '消去',
    cancel: '取 消',
    confirm: '确 定',
    // 
    preview_image: 'プレビュー',
    name: '名前',
    desc: '説明',
    station: '駅',
    price: '価格',
    floor_plan: '間取り',
    construction_area: '建筑面积',
    Land_area: '土地面積',
    transportation: '交通',
    House_structure: '構造・階数',
    detail_desc: '詳細ページの説明',
    indoor_map_desc: '内部の図面と説明',
    location: '所在地',
    private_road: '私道負担面積',
    setback: 'セットバック',
    building_coverage_ratio: '建ぺい率',
    floor_area_ratio: '容積率',
    facility: '設備',
    other_equipment: 'その他設備',
    current_situation: '現況',
    mode_of_transaction: '取引態様',
    delivery_conditions: '引渡条件',
    delivery_time: '引渡時期',
    time: '築年月',
    land_rights: '土地権利',
    remarks: '備考',
    other_expenses: 'その他費用',
    regional_district_block: '地域地区街区',
    city_planning_area_division: '都市計画区域区分',
    landmark: '地目',
    land_readjustment: '区画整理',
    ticity_planning_roadme: '都市計画道路',
    use_area: '用途地域',
    terrain: '地勢',
    contact_situation: '接道状況',
    main_approach: '主な接道',
    legal_restrictions: '法令制限',
    parking: '駐車場',
    update: '次回更新予定日',
    swiper_number: '轮播区域',
    tag: 'タグ',
    pic: '画像',
    pic_desc: '画像の説明',
    pic_desc_tips: `各画像の説明が完了したら & で区切ります。`,
    tag_tips: '各タグは,で区切ります',
    new_hourse: '新着',
    required: '必要',
    is: 'は',
    placeholder: '選んでください'
  },
  example: {
    warning: '创建和编辑页面是不能被 keep-alive 缓存的，因为keep-alive 的 include 目前不支持根据路由来缓存，所以目前都是基于 component name 来进行缓存的。如果你想类似的实现缓存效果，可以使用 localStorage 等浏览器缓存方案。或者不要使用 keep-alive 的 include，直接缓存所有页面。详情见'
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  pdf: {
    tips: '这里使用 window.print() 来实现下载pdf的功能'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。',
    loading: '主题正在努力重置...'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  settings: {
    title: '系统布局配置',
    theme: '主题色',
    showTagsView: '显示 Tags-View',
    showSidebarLogo: '显示侧边栏 Logo',
    fixedHeader: '固定 Header',
    sidebarTextTheme: '侧边栏文字主题色'
  },
  system: {
    success: '成功'
  },
  dashboard: {
    new_lisits: '新規訪問',
    messages: 'メッセージ',
    urchases: '購入',
    shoppings: 'ショッピング',
    purchases: '購入品',

  }
}
