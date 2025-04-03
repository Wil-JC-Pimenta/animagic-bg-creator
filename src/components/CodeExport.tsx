
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { CopyIcon, CheckIcon, CodeIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

interface CodeExportProps {
  htmlCode: string;
  cssCode: string;
  jsCode: string;
}

const CodeExport: React.FC<CodeExportProps> = ({ htmlCode, cssCode, jsCode }) => {
  const [activeTab, setActiveTab] = useState('html');
  const [copied, setCopied] = useState(false);
  const [codeGenerated, setCodeGenerated] = useState(false);
  const { toast } = useToast();

  const copyCode = () => {
    let codeToCopy = '';
    
    switch (activeTab) {
      case 'html':
        codeToCopy = htmlCode;
        break;
      case 'css':
        codeToCopy = cssCode;
        break;
      case 'js':
        codeToCopy = jsCode;
        break;
      case 'all':
        codeToCopy = `/* HTML */\n${htmlCode}\n\n/* CSS */\n${cssCode}\n\n/* JavaScript */\n${jsCode}`;
        break;
    }
    
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setCopied(true);
      toast({
        title: "Código copiado!",
        description: "O código foi copiado para a área de transferência.",
      });
      
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const generateCode = () => {
    setCodeGenerated(true);
    toast({
      title: "Código gerado!",
      description: "O código da animação foi gerado com sucesso.",
    });
  };

  return (
    <div className="rounded-lg border border-border overflow-hidden bg-card">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="font-medium">Código Gerado</h3>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={generateCode}
            className="flex items-center gap-1"
          >
            <CodeIcon className="h-3.5 w-3.5" />
            <span>Gerar Código</span>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={copyCode}
            className="flex items-center gap-1"
            disabled={!codeGenerated}
          >
            {copied ? (
              <>
                <CheckIcon className="h-3.5 w-3.5" />
                <span>Copiado</span>
              </>
            ) : (
              <>
                <CopyIcon className="h-3.5 w-3.5" />
                <span>Copiar</span>
              </>
            )}
          </Button>
        </div>
      </div>
      
      {!codeGenerated ? (
        <div className="p-8 text-center text-muted-foreground">
          Clique em "Gerar Código" para visualizar o código da sua animação
        </div>
      ) : (
        <Tabs 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="border-b border-border">
            <TabsList className="p-0 bg-transparent border-0">
              <TabsTrigger 
                value="html" 
                className={cn(
                  "rounded-none border-r border-border px-4 py-2 data-[state=active]:bg-secondary",
                  "data-[state=active]:shadow-none"
                )}
              >
                HTML
              </TabsTrigger>
              <TabsTrigger 
                value="css"
                className={cn(
                  "rounded-none border-r border-border px-4 py-2 data-[state=active]:bg-secondary",
                  "data-[state=active]:shadow-none"
                )}
              >
                CSS
              </TabsTrigger>
              <TabsTrigger 
                value="js"
                className={cn(
                  "rounded-none border-r border-border px-4 py-2 data-[state=active]:bg-secondary",
                  "data-[state=active]:shadow-none"
                )}
              >
                JavaScript
              </TabsTrigger>
              <TabsTrigger 
                value="all"
                className={cn(
                  "rounded-none px-4 py-2 data-[state=active]:bg-secondary",
                  "data-[state=active]:shadow-none"
                )}
              >
                All Code
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="html" className="p-0 m-0">
            <pre className="p-4 text-sm overflow-x-auto">
              <code>{htmlCode}</code>
            </pre>
          </TabsContent>
          
          <TabsContent value="css" className="p-0 m-0">
            <pre className="p-4 text-sm overflow-x-auto">
              <code>{cssCode}</code>
            </pre>
          </TabsContent>
          
          <TabsContent value="js" className="p-0 m-0">
            <pre className="p-4 text-sm overflow-x-auto">
              <code>{jsCode}</code>
            </pre>
          </TabsContent>
          
          <TabsContent value="all" className="p-0 m-0">
            <pre className="p-4 text-sm overflow-x-auto">
              <code>{`/* HTML */\n${htmlCode}\n\n/* CSS */\n${cssCode}\n\n/* JavaScript */\n${jsCode}`}</code>
            </pre>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default CodeExport;
