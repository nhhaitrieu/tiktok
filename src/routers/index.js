import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import HeaderOnlyLayout from '~/layout/HeaderOnlyLayout';
import Upload from '~/pages/Upload';

const publicRouters = [
  { path: '/', element: Home },
  { path: '/following', element: Following },
  { path: '/profile', element: Profile },
  { path: '/search', element: Search, layout: null },
  { path: '/upload', element: Upload, layout: HeaderOnlyLayout },
];

const privateRouters = [];

export { publicRouters, privateRouters };
