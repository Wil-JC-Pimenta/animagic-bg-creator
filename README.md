
# Animagic - Criador de Backgrounds Animados

##URL : 

https://animagic-bg-creator.vercel.app/

## Descrição

Animagic é uma aplicação web que permite aos usuários criar e personalizar backgrounds animados para seus projetos. Com uma interface amigável e uma variedade de opções de animação, o Animagic torna fácil a criação de fundos dinâmicos e visualmente impressionantes sem precisar escrever código.

## Funcionalidades

### Múltiplos Estilos de Animação

O Animagic oferece diversos tipos de animações para escolher:

- **Gradiente**: Transições suaves entre cores em um fundo gradiente
- **Partículas**: Partículas animadas que flutuam pela tela
- **Ondas**: Ondas dinâmicas e fluidas com movimento personalizado
- **Parallax**: Efeito de profundidade com camadas que se movem em velocidades diferentes
- **Rede**: Pontos interconectados que formam uma rede dinâmica
- **Blobs**: Formas orgânicas coloridas que se movem e mudam suavemente
- **Glitch**: Efeito visual de erro/distorção digital
- **Estrelas**: Campo de estrelas com efeito de profundidade e movimento
- **Ruído**: Efeito de ruído visual personalizado
- **Transição de Cores**: Mudanças suaves entre cores do background

### Controles Personalizáveis

Cada tipo de animação possui controles específicos para personalização:

- Seleção de cores
- Velocidade de animação
- Tamanho dos elementos
- Número de elementos
- Opacidade
- E muito mais, dependendo do tipo de animação

### Exportação de Código

Após personalizar sua animação, você pode:

- Gerar automaticamente o código HTML, CSS e JavaScript
- Copiar o código completo ou por linguagem
- Usar o código gerado diretamente em seus projetos

## Exemplos de Uso

### Criando um Background com Gradiente Animado

1. Selecione o tipo de animação "Gradiente"
2. Escolha suas cores preferidas (ex: #ff6b6b, #f8e71c, #50e3c2)
3. Ajuste a duração da animação para 15 segundos
4. Defina o ângulo do gradiente para 45°
5. Clique em "Gerar Código"
6. Copie o código e use-o em seu projeto

### Criando um Efeito de Partículas para um Site

1. Selecione o tipo de animação "Partículas"
2. Defina a quantidade de partículas para 50
3. Escolha cores vibrantes para as partículas
4. Ajuste o tamanho mínimo e máximo das partículas
5. Configure a velocidade conforme desejado
6. Gere e copie o código para seu site

### Exemplo de Código Gerado

Para uma animação de gradiente, o código gerado será semelhante a:

```html
<div class="animated-background"></div>
```

```css
.animated-background {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ff6b6b, #f8e71c, #50e3c2);
  background-size: 400% 400%;
  animation: gradient-animation 15s ease infinite;
}

@keyframes gradient-animation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

```javascript
// O JavaScript não é necessário para a animação básica de gradiente
```

## Instruções de Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/animagic.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd animagic
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Como Usar

Para iniciar a aplicação, execute:

```bash
npm run dev
```

Em seguida, abra seu navegador e acesse `http://localhost:3000` para acessar o Animagic.

## Tecnologias Utilizadas
 -Lovable
- React
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Vite

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
