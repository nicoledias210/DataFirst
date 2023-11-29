
// <iframe
// title="Dashboard Sample"
// src={`${process.env.PUBLIC_URL}/dashboard_sample.html`}
// width="100%" // This will make the iframe take the full width of its container
// height="800px" // Adjust the height as needed
// style={{ border: 'none' }}
// allowFullScreen
// />

import React, { useState } from 'react';
import TableauViz from './TableauViz'; // 假设您已经有了这个组件

function Dashboard() {
  // 创建状态变量来存储当前的视图
  const [currentViz, setCurrentViz] = useState('jobMap');

  // Tableau 视图的URL
  const vizUrls = {
    jobMap: "https://public.tableau.com/views/SampleGraphsforPublicSectorJobMarketData/jobmap?:language=zh-CN&:display_count=n&:origin=viz_share_link",
    avgPostingLength: "https://public.tableau.com/views/SampleGraphsforPublicSectorJobMarketData/avgpostinglengthlocation?:language=zh-CN&:display_count=n&:origin=viz_share_link"
  };

  return (
    <div>
      {/* 切换按钮或链接 */}
      <button onClick={() => setCurrentViz('jobMap')} className='btn btn-primary'>job/map</button>
      <button onClick={() => setCurrentViz('avgPostingLength')} className='btn btn-primary ml-2'>avg posting length/location</button>

      {/* 根据当前状态渲染相应的 Tableau 视图 */}
      <div>
        {currentViz === 'jobMap' && <TableauViz vizUrl={vizUrls.jobMap} />}
        {currentViz === 'avgPostingLength' && <TableauViz vizUrl={vizUrls.avgPostingLength} />}
      </div>
    </div>
  );
}

export default Dashboard;




