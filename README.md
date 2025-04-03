
# Animagic - Criador de Backgrounds Animados

[Visite a aplicação](https://animagic-bg-creator.vercel.app/)

### Descrição

O **Animagic** é uma aplicação web inovadora que permite a criação e personalização de backgrounds animados para diversos projetos. Desenvolvido com a tecnologia [Lovable](#) e outras ferramentas modernas, o Animagic simplifica o processo de criação de fundos dinâmicos e visualmente impressionantes – sem a necessidade de escrever código. Este projeto tem como objetivo colaborar com o desenvolvimento web, incentivando a criatividade e a produtividade na criação de interfaces atrativas.

### Desenvolvedor

**Wilker J C Pimenta**  
Desenvolvido com paixão e comprometimento com a comunidade open source. Contribuições são sempre bem-vindas para evoluir este projeto e aprimorar a experiência dos usuários.

### Funcionalidades

#### Diversos Estilos de Animação

O Animagic oferece uma variedade de animações para se adequar a diferentes necessidades e estilos:

- **Gradiente:** Transições suaves entre cores, criando fundos em degradê.
- **Partículas:** Animação de partículas que flutuam, ideal para efeitos dinâmicos.
- **Ondas:** Movimento fluido com ondas personalizáveis.
- **Parallax:** Criação de profundidade com camadas em velocidades variadas.
- **Rede:** Pontos interconectados formando uma rede dinâmica.
- **Blobs:** Formas orgânicas que se transformam e se movem suavemente.
- **Glitch:** Efeito de distorção digital para um visual moderno.
- **Estrelas:** Campo de estrelas com sensação de profundidade e movimento.
- **Ruído:** Efeito de ruído visual que adiciona textura.
- **Transição de Cores:** Alteração gradual entre diferentes cores.

#### Controles Personalizáveis

Cada tipo de animação possui configurações específicas, permitindo a customização total, incluindo:

- Seleção e combinação de cores
- Velocidade da animação
- Tamanho e quantidade dos elementos
- Opacidade e intensidade dos efeitos
- E muito mais, conforme a animação escolhida

#### Exportação de Código

Após personalizar sua animação, o Animagic possibilita:

- Geração automática de código HTML, CSS e JavaScript
- Opção de copiar o código completo ou por linguagem
- Uso imediato do código gerado em projetos web

### Exemplos de Uso

#### Exemplo 1: Background com Gradiente Animado

1. Selecione a opção "Gradiente".
2. Escolha suas cores favoritas (ex: `#ff6b6b`, `#f8e71c`, `#50e3c2`).
3. Ajuste a duração da animação para 15 segundos.
4. Defina o ângulo do gradiente para 45°.
5. Clique em "Gerar Código".
6. Copie o código e implemente em seu projeto.

#### Exemplo 2: Efeito de Partículas para um Site

1. Selecione a opção "Partículas".
2. Configure a quantidade de partículas (por exemplo, 50).
3. Defina cores vibrantes para as partículas.
4. Ajuste os tamanhos mínimo e máximo das partículas.
5. Personalize a velocidade de movimento.
6. Gere o código e insira em seu site.

#### Exemplo de Código Gerado

Para uma animação de gradiente, o código gerado pode ser semelhante a:

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
// Para a animação de gradiente, o JavaScript não é necessário
```

### Instruções de Instalação

Para rodar o Animagic localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seuusuario/animagic.git
   ```
2. **Navegue até o diretório do projeto:**
   ```bash
   cd animagic
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```

### Como Usar

Para iniciar a aplicação, execute o comando:

```bash
npm run dev
```

Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000) para experimentar o Animagic.

### Tecnologias Utilizadas

- **Lovable** – Framework principal para a criação da aplicação.
- **React** – Biblioteca para construção da interface de usuário.
- **TypeScript** – Linguagem para desenvolvimento com tipagem estática.
- **Tailwind CSS** – Framework para estilização rápida e responsiva.
- **Shadcn/UI** – Componentes de interface modernos.
- **Vite** – Ferramenta de build rápida e eficiente.

### Contribuições

Contribuições são fundamentais para o aprimoramento do Animagic. Sinta-se à vontade para:

- Abrir issues para reportar bugs ou sugerir melhorias.
- Enviar pull requests com novas funcionalidades, correções ou atualizações.

### Licença

Este projeto está licenciado sob a **Licença MIT**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---



---

## English

# Animagic - Animated Background Creator

[Visit the App](https://animagic-bg-creator.vercel.app/)

### Description

**Animagic** is an innovative web application that allows you to create and customize animated backgrounds for various projects. Developed using the [Lovable](#) technology along with modern tools, Animagic simplifies the process of generating dynamic and visually impressive backgrounds – no coding required. This project aims to support web development by fostering creativity and productivity in crafting attractive interfaces.

### Developer

**Wilker J C Pimenta**  
Developed with passion and commitment to the open source community. Contributions are always welcome to help evolve this project and enhance the user experience.

### Features

#### Multiple Animation Styles

Animagic offers a variety of animations to suit different needs and styles:

- **Gradient:** Smooth transitions between colors, creating a gradient background.
- **Particles:** Floating animated particles for dynamic effects.
- **Waves:** Fluid motion with customizable wave patterns.
- **Parallax:** Depth creation with layers moving at different speeds.
- **Network:** Interconnected points forming a dynamic network.
- **Blobs:** Organic shapes that transform and move gracefully.
- **Glitch:** Digital distortion effects for a modern look.
- **Stars:** Star fields with a sense of depth and motion.
- **Noise:** Visual noise effect adding texture.
- **Color Transition:** Gradual color shifts for the background.

#### Customizable Controls

Each animation type comes with specific settings, allowing full customization including:

- Color selection and combinations
- Animation speed
- Element size and quantity
- Opacity and effect intensity
- And much more depending on the chosen animation

#### Code Export

After personalizing your animation, Animagic lets you:

- Automatically generate HTML, CSS, and JavaScript code
- Copy the complete code or individual language snippets
- Directly use the generated code in your web projects

### Usage Examples

#### Example 1: Animated Gradient Background

1. Select the "Gradient" option.
2. Choose your favorite colors (e.g., `#ff6b6b`, `#f8e71c`, `#50e3c2`).
3. Set the animation duration to 15 seconds.
4. Define the gradient angle as 45°.
5. Click on "Generate Code."
6. Copy the code and implement it in your project.

#### Example 2: Particle Effect for a Website

1. Select the "Particles" option.
2. Configure the number of particles (e.g., 50).
3. Choose vibrant colors for the particles.
4. Adjust the minimum and maximum particle sizes.
5. Customize the movement speed.
6. Generate the code and insert it into your website.

#### Generated Code Example

For a gradient animation, the generated code may look like:

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
// For the gradient animation, JavaScript is not required
```

### Installation Instructions

To run Animagic locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/seuusuario/animagic.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd animagic
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

### How to Use

To start the application, run:

```bash
npm run dev
```

Then, open your browser and visit [http://localhost:3000](http://localhost:3000) to try out Animagic.

### Technologies Used

- **Lovable** – Main framework used for building the application.
- **React** – Library for building user interfaces.
- **TypeScript** – Language offering static type checking.
- **Tailwind CSS** – Utility-first CSS framework for rapid styling.
- **Shadcn/UI** – Modern UI components.
- **Vite** – Fast and efficient build tool.

### Contributing

Contributions are vital for improving Animagic. Feel free to:

- Open issues to report bugs or suggest enhancements.
- Submit pull requests with new features, fixes, or updates.

### License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---
