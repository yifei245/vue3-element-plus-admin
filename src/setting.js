module.exports = {
  /**
   * @type {string}
   * @descriptionl 项目标题
   */
  title: '绿城此心安处',
  /**
   * @type {string}
   * @description 接口 地址
   */
  baseURL: 'http://paipai.mchances.com/api/green/',
  // baseURL: 'https://cxac.lcfw.co:9999/api/',
  /**
   * @type {string}
   * @description 用户头像
   */
  userLogo: 'https://cxac.lcfw.co:9999/image/202008131011034168661.png',
  /**
   * @type {string}
   * @description 路由栏的logo
   */
  logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565963677968&di=5a10a44c083a65321feae919a0b83898&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201506%2F16%2F20150616234003_ZhVX8.jpeg',
  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description Whether need TagsView
   */
  TagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'

}
