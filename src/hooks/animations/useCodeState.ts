
import { useState } from 'react';
import { CodeState } from '@/types/animation';

export const useCodeState = (): CodeState => {
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [cssCode, setCssCode] = useState<string>('');
  const [jsCode, setJsCode] = useState<string>('');

  return {
    htmlCode,
    cssCode,
    jsCode
  };
};
