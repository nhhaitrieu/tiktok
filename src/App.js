import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRouters } from './routers';
import DefaultLayout from './layout/DefaultLayout';
import { Fragment } from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRouters.map((route, index) => {
            let Layout = DefaultLayout;
            const Page = route.element;

            if (route.layout === null) {
              Layout = Fragment;
            } else if (route.layout !== undefined) {
              Layout = route.layout;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>

        {/* <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/following" element={<Following />}></Route>
        </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
