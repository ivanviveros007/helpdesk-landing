import type { Messages } from "./en";

const es: Messages = {
  nav: {
    logo: "HelpDesk AI",
    joinBeta: "Únete al Beta",
  },
  hero: {
    badge: "🚀 Ahora en Acceso Anticipado",
    headline: "La Mesa de Ayuda con IA para Equipos de Soporte Modernos",
    subheadline:
      "Asigna tickets al técnico correcto automáticamente, reduce los tiempos de respuesta y mantén a tu equipo enfocado en lo que importa.",
    cta: "Obtener Acceso Anticipado — Es Gratis",
    ctaSub: "Sin tarjeta de crédito. Lugares limitados.",
  },
  problem: {
    title: "¿Te suena familiar?",
    subtitle:
      "Los equipos de soporte pierden horas cada día en tareas que la IA puede resolver al instante.",
    items: [
      {
        icon: "📥",
        title: "Los tickets se acumulan sin asignar",
        desc: "Tu equipo gasta tiempo valioso clasificando y enrutando tickets en lugar de resolver problemas.",
      },
      {
        icon: "😩",
        title: "Los técnicos están saturados",
        desc: "Asignaciones incorrectas, trabajo duplicado y prioridades poco claras agotan al equipo.",
      },
      {
        icon: "🔍",
        title: "Sin visibilidad de lo que ocurre",
        desc: "Los managers no pueden rastrear el estado de los tickets, la carga de trabajo ni el rendimiento en tiempo real.",
      },
    ],
  },
  howItWorks: {
    title: "Cómo funciona",
    subtitle: "De la creación del ticket a la resolución — completamente automatizado con IA.",
    steps: [
      {
        number: "01",
        title: "El cliente envía un ticket",
        desc: "A través de tu portal personalizado. Sin configuración de su parte.",
      },
      {
        number: "02",
        title: "La IA analiza la solicitud",
        desc: "Nuestra IA lee el contenido del ticket y detecta categoría, prioridad y habilidades requeridas.",
      },
      {
        number: "03",
        title: "Asignado automáticamente al técnico correcto",
        desc: "El mejor técnico disponible recibe el ticket al instante con notificación en tiempo real.",
      },
      {
        number: "04",
        title: "Resuelto y registrado",
        desc: "Historial completo, actualizaciones al cliente y métricas de rendimiento — todo en un lugar.",
      },
    ],
  },
  features: {
    title: "Todo lo que tu equipo necesita",
    subtitle: "Construido para equipos de soporte que quieren moverse rápido sin romper nada.",
    items: [
      {
        icon: "🤖",
        title: "Enrutamiento con IA",
        desc: "Análisis con Gemini que asigna tickets al técnico más adecuado automáticamente.",
      },
      {
        icon: "🏢",
        title: "Multi-tenant Listo",
        desc: "Cada empresa tiene su propio espacio aislado. Perfecto para MSPs y agencias.",
      },
      {
        icon: "⚡",
        title: "Actualizaciones en Tiempo Real",
        desc: "Notificaciones por WebSocket mantienen a todos sincronizados — sin recargar la página.",
      },
      {
        icon: "👥",
        title: "Acceso por Roles",
        desc: "Super-admin, admin, técnico y cliente — cada uno con los permisos correctos.",
      },
      {
        icon: "📊",
        title: "Panel de Administración",
        desc: "Rastrea tickets por técnico, estado y tiempo de resolución. Detecta cuellos de botella al instante.",
      },
      {
        icon: "✉️",
        title: "Sistema de Invitaciones",
        desc: "Invita a clientes y técnicos con links seguros por email. Sin configuración manual.",
      },
    ],
  },
  forWho: {
    title: "Hecho para equipos como el tuyo",
    subtitle: "Ya seas una startup o una empresa grande, HelpDesk AI escala contigo.",
    items: [
      {
        icon: "💻",
        title: "Empresas SaaS",
        desc: "Gestiona el soporte a clientes a escala sin necesitar un equipo enorme.",
      },
      {
        icon: "🏗️",
        title: "Departamentos de TI",
        desc: "Administra solicitudes de helpdesk interno eficientemente en toda tu organización.",
      },
      {
        icon: "🚀",
        title: "Agencias y MSPs",
        desc: "Atiende a múltiples clientes desde una sola plataforma con datos completamente aislados.",
      },
      {
        icon: "🛍️",
        title: "E-commerce y Retail",
        desc: "Enruta problemas de pedidos, devoluciones y consultas al especialista correcto al instante.",
      },
    ],
  },
  betaForm: {
    title: "Únete al Programa de Acceso Anticipado",
    subtitle:
      "Estamos incorporando a un grupo selecto de equipos para probar HelpDesk AI gratis. Comparte tu feedback y da forma al producto.",
    benefits: [
      "✅ Gratuito durante el período beta",
      "✅ Acceso directo a los fundadores",
      "✅ Tu feedback moldea el roadmap",
      "✅ Precio especial para early adopters al lanzar",
    ],
    form: {
      name: "Nombre completo",
      namePlaceholder: "Juan Pérez",
      email: "Email de trabajo",
      emailPlaceholder: "juan@empresa.com",
      company: "Nombre de la empresa (opcional)",
      companyPlaceholder: "Empresa S.A.",
      message: "¿Cuál es tu mayor desafío de soporte? (opcional)",
      messagePlaceholder: "Manejamos más de 200 tickets al día y...",
      submit: "Solicitar Acceso Anticipado",
      submitting: "Enviando...",
      success: "🎉 ¡Ya estás en la lista! Nos pondremos en contacto pronto.",
      error: "Algo salió mal. Por favor intenta de nuevo.",
    },
  },
  footer: {
    tagline: "Soporte más inteligente, impulsado por IA.",
    rights: "© 2026 HelpDesk AI. Todos los derechos reservados.",
  },
};

export default es;
