import React, { useRef, useEffect } from 'react';

function TableauViz({ vizUrl }) {
  const ref = useRef(null);

  useEffect(() => {
    let viz;

    const initViz = () => {
      if (window.tableau && ref.current) {
        viz = new window.tableau.Viz(ref.current, vizUrl, {
          width: '100%',
          height: '5027px',
          hideTabs: true,
        });
      }
    };

    // 动态加载 Tableau JavaScript API
    if (!window.tableau) {
      const script = document.createElement('script');
      script.src = 'https://public.tableau.com/javascripts/api/tableau-2.min.js';
      script.onload = initViz;
      document.body.appendChild(script);
    } else {
      initViz();
    }

    // 清理函数
    return () => {
      if (viz) {
        viz.dispose();
      }
    };
  }, [vizUrl]);

  return <div ref={ref} />;
}

export default TableauViz;
