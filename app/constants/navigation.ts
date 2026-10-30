import { NavItem } from "../types/navigation";

export const NAV_ITEM:NavItem[] = [
  {
    title: '학과안내',
    path: '/about/greeting',
    subMenus: [
      { title: '학과인사', path: '/about/greeting' },
      { title: '학과소개', path: '/about/intro' },
    ],
  },
  {
    title: '교육과정',
    path: '/academic/schedule',
    subMenus: [
      { title: '학사일정', path: '/academic/schedule' },
    ],
  },
  {
    title: '커뮤니티',
    path: '/community/notice',
    subMenus: [
      { title: '공지사항', path: '/community/notice' },
      { title: 'NEWS', path: '/community/news' },
      { title: '포토갤러리', path: '/community/gallery' },
      { title: 'FAQ', path: '/community/faq' },
    ],
  },
];