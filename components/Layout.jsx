// components/Layout.js
import Head from 'next/head';
import { Layout, Row, Col } from 'antd';
import { useSelector } from 'react-redux';

import FormInput from './FormInput';
import RegionInfo from './RegionInfo';
import OSMMap from './OSMMap';
import NavBar from './NavBar';

const { Header, Content } = Layout;

const LayoutComponent = () => {
  const nightMode = useSelector((state) => state.nightMode);

  return (
    <Layout className={nightMode?'dark':''}>
      <Head>
        <title>My Mapping App</title>
      </Head>
      <NavBar/>
    <FormInput/>
    <OSMMap/>
    {/* <RegionInfo/> */}
    
    </Layout>
  );
};

export default LayoutComponent;
// // components/Layout.js
// import Head from 'next/head';
// import { Layout, Row, Col } from 'antd';
// import { useSelector } from 'react-redux';

// import FormInput from './FormInput';
// import RegionInfo from './RegionInfo';
// import OSMMap from './OSMMap';

// const { Header, Content } = Layout;

// const LayoutComponent = () => {
//   const nightMode = useSelector((state) => state.nightMode);

//   return (
//     <Layout>
//       <Head>
//         <title>My Mapping App</title>
//       </Head>
//       <Header>
//         <div className="text-white">Header</div>
//       </Header>
//       <Layout>
//         <Col span={6} style={{ background: nightMode ? '#333' : '#fff' }}>
//           <FormInput />
//         </Col>
//         <Col span={18}>
//           <Content>
//             <Row>
//               <Col span={12}>
//                 <RegionInfo />
//               </Col>
//               <Col span={12}>
//                 <OSMMap />
//               </Col>
//             </Row>
//           </Content>
//         </Col>
//       </Layout>
//     </Layout>
//   );
// };

// export default LayoutComponent;
