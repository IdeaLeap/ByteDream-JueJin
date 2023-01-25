import type { IPanel } from '~~/types/IPanel'
const postData: IPanel[] = []
// TODO: 请求数据
export default async (/* mode = 'recommend' | 'latest' | 'heat' , pagenum = 1,  */): Promise<IPanel[]> => {
  // 接口
  // const fetchData = await useFetch()
  const value = [
    {
      uname: 'OrzR3',
      duration: '2月',
      tags: ['后端', 'Go', '前端'],
      title: 'Go 语言中的 Gin 框架',
      desc: 'Go 语言中的 gin 框架简易上手指南，初始化安装，加载静态资源和页面，以及表单提交Go 语言中的 gin 框架简易上手指南，初始化安装，加载静态资源和页面，以及表单提交',
      topicHeat: [3182, 22, 6],
    },
    {
      uname: 'xj1',
      duration: '2月',
      tags: ['Vue.js', 'arco design', 'koa'],
      title: '帮朋友搭建后台管理系统',
      desc: '对，还是那位朋友，一位接近40的澳洲老哥，找我帮忙搞一个管理后台，他刚找到编程',
      topicHeat: [15000, 276, 45],
    },
    {
      uname: 'sx1',
      duration: '8天',
      tags: ['前端', '后端'],
      title: '如何打造一个优雅的git工作流',
      desc: '在开发中，不论是一个团队一起开发一个项目，还是自己独立开发一个项目。都少不了',
      topicHeat: [2022, 26, 6],
    },
    {
      uname: 'OrzR31',
      duration: '2月',
      tags: ['后端', 'Go', '前端'],
      title: 'Go 语言中的 Gin 框架',
      desc: 'Go 语言中的 gin 框架简易上手指南，初始化安装，加载静态资源和页面，以及表单提交Go 语言中的 gin 框架简易上手指南，初始化安装，加载静态资源和页面，以及表单提交',
      topicHeat: [3182, 22, 6],
    },
    {
      uname: 'xj2',
      duration: '2月',
      tags: ['Vue.js', 'arco design', 'koa'],
      title: '帮朋友搭建后台管理系统',
      desc: '对，还是那位朋友，一位接近40的澳洲老哥，找我帮忙搞一个管理后台，他刚找到编程',
      topicHeat: [15000, 276, 45],
    },
    {
      uname: 'sx2',
      duration: '8天',
      tags: ['前端', '后端'],
      title: '如何打造一个优雅的git工作流',
      desc: '在开发中，不论是一个团队一起开发一个项目，还是自己独立开发一个项目。都少不了',
      topicHeat: [2022, 26, 6],
    },
    {
      uname: 'OrzR32',
      duration: '2月',
      tags: ['后端', 'Go', '前端'],
      title: 'Go 语言中的 Gin 框架',
      desc: 'Go 语言中的 gin 框架简易上手指南，初始化安装，加载静态资源和页面，以及表单提交Go 语言中的 gin 框架简易上手指南，初始化安装，加载静态资源和页面，以及表单提交',
      topicHeat: [3182, 22, 6],
    },
    {
      uname: 'xj',
      duration: '2月',
      tags: ['Vue.js', 'arco design', 'koa'],
      title: '帮朋友搭建后台管理系统',
      desc: '对，还是那位朋友，一位接近40的澳洲老哥，找我帮忙搞一个管理后台，他刚找到编程',
      topicHeat: [15000, 276, 45],
    },
    {
      uname: 'sx',
      duration: '8天',
      tags: ['前端', '后端'],
      title: '如何打造一个优雅的git工作流',
      desc: '在开发中，不论是一个团队一起开发一个项目，还是自己独立开发一个项目。都少不了',
      topicHeat: [2022, 26, 6],
    },
    {
      uname: 'OrzR3',
      duration: '2月',
      tags: ['后端', 'Go', '前端'],
      title: 'Go 语言中的 Gin 框架',
      desc: 'Go 语言中的 gin 框架简易上手指南，初始化安装，加载静态资源和页面，以及表单提交Go 语言中的 gin 框架简易上手指南，初始化安装，加载静态资源和页面，以及表单提交',
      topicHeat: [3182, 22, 6],
    },
    {
      uname: 'xj',
      duration: '2月',
      tags: ['Vue.js', 'arco design', 'koa'],
      title: '帮朋友搭建后台管理系统',
      desc: '对，还是那位朋友，一位接近40的澳洲老哥，找我帮忙搞一个管理后台，他刚找到编程',
      topicHeat: [15000, 276, 45],
    },
    {
      uname: 'sx',
      duration: '8天',
      tags: ['前端', '后端'],
      title: '如何打造一个优雅的git工作流',
      desc: '在开发中，不论是一个团队一起开发一个项目，还是自己独立开发一个项目。都少不了',
      topicHeat: [2022, 26, 6],
    },
  ]
  // 数据内容
  postData.push(...value)
  return postData
}
