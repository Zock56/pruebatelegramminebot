# Guía de Diseño - Telegram Mining dApp

## Enfoque de Diseño

**Estética Gaming-Crypto**: Inspiración en juegos móviles de minería (Axie Infinity, Coin Master) + interfaces cripto modernas (Telegram Wallet, TON Space) con gráficos 2D de alta calidad.

## Paleta de Colores

**Modo Oscuro (Principal para Telegram)**
- Primary: 210 100% 55% (Azul tech/cripto)
- Background: 220 15% 12% (Oscuro profundo)
- Surface: 220 12% 18% (Cards/componentes)
- Accent: 45 95% 55% (Dorado para TON/rewards - usar con moderación)
- Success: 140 65% 45% (Verde minería activa)
- Text Primary: 0 0% 95%
- Text Secondary: 220 10% 65%

## Tipografía

**Fuentes (Google Fonts)**
- Primary: 'Inter' - UI y texto general (400, 500, 600, 700)
- Display: 'Rajdhani' - Números grandes, stats, títulos gaming (600, 700)

**Jerarquía**
- Hero/Stats: Rajdhani Bold 2.5rem-3rem
- Headings: Inter SemiBold 1.5rem-2rem
- Body: Inter Regular 1rem
- Captions/Labels: Inter Medium 0.875rem

## Sistema de Espaciado

**Unidades Tailwind**: Usar consistentemente 4, 8, 16, 24 (p-4, gap-8, my-16, py-24)
- Padding componentes: p-4 a p-6
- Gaps en grids: gap-4
- Secciones verticales: py-8 a py-16
- Márgenes entre elementos: my-4 a my-8

## Componentes Principales

### 1. Navegación Móvil
- Bottom Tab Bar fija con 4-5 tabs (Home, Tienda, Referidos, Wallet, Perfil)
- Iconos con labels, active state con color primary y glow sutil

### 2. Minero Display (Home)
- Ilustración 2D del minero en centro (estilo isométrico/pixel art de alta calidad)
- Animación idle sutil cuando inactivo
- Animación de minería cuando activo (partículas, efecto glow)
- Stats overlay: hashrate, earnings/hora, tiempo activo

### 3. Botón Start/Stop Minería
- Grande, prominente (min-height: 64px)
- Estados claros: Ready (primary), Mining (success con pulse), Cooldown (disabled)
- Efecto ripple al tocar

### 4. Cards de Mineros (Tienda)
- Diseño tipo trading card con borde gradient
- Preview del minero 2D arriba
- Stats compactas: Power, Costo TON, ROI diario
- CTA "Comprar" con precio en TON

### 5. TON Connect Integration
- Botón "Connect Wallet" prominente si desconectado
- Address display compacto cuando conectado
- Balance TON visible con posibilidad de depositar/retirar

### 6. Sistema de Referidos
- Link de invitación fácil de copiar con animación de éxito
- Lista de referidos con avatar + earnings generados
- Stats totales: referidos activos, comisiones ganadas

### 7. Progress & Stats
- Barras de progreso con gradientes (idle → mining → complete)
- Números animados (count-up) para earnings
- Iconos TON, hashrate, tiempo con colores consistentes

## Efectos Visuales

**Glassmorphismo Sutil**
- Cards: backdrop-blur-md con bg-opacity-10
- Overlays: backdrop-blur-lg

**Gradientes Estratégicos**
- Headers: linear de primary oscuro a transparente
- Buttons principales: gradient de primary a primary+20% lightness
- Cards premium: border gradient dorado

**Micro-interacciones**
- Tap feedback: scale-95 + shadow cambios
- Success actions: confetti/particle burst (usar react-confetti para compras)
- Loading states: skeleton screens con shimmer

## Layout Mobile-First

**Estructura Principal**
- Container: max-w-md mx-auto (optimizado para móvil)
- Safe areas: padding para notch/bottom bar
- Scroll suave con snap points en secciones clave

**Grid de Tienda**
- Mobile: grid-cols-1 para cards grandes
- Tablet: grid-cols-2 si aplica
- Gap consistente: gap-4

## Imágenes

**Assets 2D de Alta Calidad**
- Mineros: Ilustraciones isométricas estilo low-poly gaming (256x256px mínimo)
- Background home: Gradient mesh con efecto de "mina digital" sutil
- Iconos: Set gaming-crypto (pickaxe, coins, lightning para hashrate)

**Hero Section (si aplica en landing)**
- Hero image: Composición de mineros 2D en acción con efectos de partículas TON
- Colocación: Top de home, altura 40vh en mobile

## Accesibilidad & Dark Mode

- Todo el diseño en dark mode por defecto (Telegram)
- Contraste mínimo 4.5:1 para texto
- Touch targets: mínimo 44x44px
- Focus states visibles con ring-primary

## Principios UX Gaming

- **Feedback inmediato**: Toda acción tiene respuesta visual/sonora
- **Progresión clara**: Usuario sabe exactamente qué hacer siguiente
- **Recompensas visibles**: Earnings y logros celebrados con animaciones
- **Simplificación**: Máximo 3 taps para cualquier acción principal
- **Onboarding**: Tutorial first-time con highlights y tooltips