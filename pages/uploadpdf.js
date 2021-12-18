import { useEffect, useRef } from 'react';

export default function Pdfupload() {
  const viewer = useRef(null);

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: 'lib',
          initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;
      });
    });
  }, []);

  return (
    <div className='MyComponent'>
      <div className='webviewer' ref={viewer} style={{ height: '100vh' }}></div>
    </div>
  );
}