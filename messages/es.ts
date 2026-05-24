import type { Messages } from "./en";

const es: Messages = {
  nav: {
    logo: "HelpDesk AI",
    cta: "Acceso Anticipado",
  },
  hero: {
    badge: "En Acceso Anticipado",
    headline: "Cada ticket de soporte llega al técnico correcto",
    headlineAccent: "de forma automática.",
    sub: "HelpDesk AI lee cada ticket entrante, identifica el problema y asigna al técnico más calificado disponible en segundos — sin triaje manual, sin suposiciones, sin demoras.",
    cta: "Unirme a la Lista",
    ctaSub: "Gratis durante la beta · Sin tarjeta de crédito",
    mockStats: [
      { label: "Asignados hoy", value: "23" },
      { label: "Tiempo prom. asignación", value: "6s" },
      { label: "Resueltos esta semana", value: "94%" },
    ],
    mockTickets: [
      { title: "Timeout en PostgreSQL — producción", badge: "Asignado a Ana M. · 6s", hot: true },
      { title: "Flow de Salesforce no se dispara", badge: "Asignado a Carlos R. · 5s", hot: false },
      { title: "VPN inaccesible desde oficina principal", badge: "Asignado a Pedro L. · 4s", hot: false },
    ],
    mockReasoning: "Interrupción de base de datos en producción afectando a todos los usuarios. Asignando a Ana M.: coincidencia de skill PostgreSQL, Nivel 2, menor carga actual (2 tickets activos).",
  },
  problem: {
    eyebrow: "El costo del triaje manual",
    headline: "Un error crítico llega a las 9:12. Tu manager está en el almuerzo.",
    sub: "Sin enrutamiento automático, cada ticket necesita que alguien lo lea, decida quién debe atenderlo y lo asigne de forma manual. Ese proceso lleva tiempo — tiempo durante el cual nada se está resolviendo.",
    before: {
      label: "Sin HelpDesk AI",
      steps: [
        "Alguien lee el ticket e interpreta el problema",
        "Trata de recordar quién maneja ese sistema",
        "Chequea Slack para ver quién está disponible",
        "Asigna manualmente. Espera confirmación.",
      ],
      stat: "~14 min",
      statLabel: "tiempo promedio de asignación",
    },
    after: {
      label: "Con HelpDesk AI",
      steps: [
        "Ticket recibido",
        "La IA identifica categoría, prioridad y skills requeridos",
        "Se selecciona al técnico más calificado disponible",
        "Asignado. Técnico notificado en tiempo real.",
      ],
      stat: "< 10 seg",
      statLabel: "tiempo promedio de asignación",
    },
  },
  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "Del ticket a la asignación en segundos",
    steps: [
      {
        number: "01",
        title: "El cliente crea un ticket",
        desc: "A través de tu portal con tu marca. Describe el problema en lenguaje natural — sin categorías para elegir, sin estructura de formulario.",
      },
      {
        number: "02",
        title: "La IA lee y razona",
        desc: "El agente analiza el contenido, determina categoría, prioridad y complejidad, y elige al técnico cuyos skills mejor se adaptan al problema. Explica cada decisión.",
      },
      {
        number: "03",
        title: "Se asigna al mejor técnico",
        desc: "De tu equipo, la IA selecciona al que tiene los skills correctos y la menor carga de trabajo actual. Nunca asigna a un senior un reseteo de contraseña.",
      },
      {
        number: "04",
        title: "Notificación instantánea",
        desc: "El técnico asignado recibe una alerta con los detalles del ticket y el razonamiento de la IA. Sin colas que revisar — la resolución comienza de inmediato.",
      },
    ],
    aiExample: {
      label: "Salida en vivo de la IA",
      fields: [
        { key: "categoría", value: "database_error" },
        { key: "prioridad", value: "9 / 10" },
        { key: "complejidad", value: "8 / 10" },
        { key: "asignado_a", value: "Ana M.  ·  PostgreSQL, backend" },
      ],
      reasoning: "Interrupción de PostgreSQL en producción afectando a todos los usuarios. Requiere especialista backend con skills de base de datos. Ana M. seleccionada: coincidencia de skill (PostgreSQL), Nivel 2, menor carga — 2 tickets activos vs 5 del siguiente candidato.",
    },
  },
  features: {
    eyebrow: "Lo que nos diferencia",
    title: "No es solo enrutamiento. Es asignación inteligente.",
    items: [
      {
        number: "01",
        title: "Asignación por skills",
        desc: "Cada técnico tiene un perfil de skills. La IA los compara con la naturaleza de cada problema — no solo con quién está disponible.",
        example: "Ana tiene PostgreSQL y backend → recibe el error de base de datos. Pedro tiene networking → recibe el problema de VPN.",
      },
      {
        number: "02",
        title: "Razonamiento transparente",
        desc: "Cada asignación incluye una explicación en lenguaje natural de por qué se eligió ese técnico. Sin cajas negras, sin sorpresas.",
        example: "\"Asignado a Ana M.: skill PostgreSQL, complejidad 8 compatible con nivel 2, menor carga actual (2 tickets activos).\"",
      },
      {
        number: "03",
        title: "Configurable por cliente",
        desc: "Escribí reglas en lenguaje natural que se aplican con máxima prioridad. Cada empresa que atiendas puede tener su propia lógica de enrutamiento.",
        example: "\"Dumps ABAP en producción = prioridad 10. Problemas de facturación siempre escalan a Nivel 2.\"",
      },
      {
        number: "04",
        title: "Aislado por empresa",
        desc: "Cada cliente tiene su propio espacio de trabajo. Técnicos, tickets y reglas nunca se mezclan — diseñado desde cero para consultoras y MSPs.",
        example: "Atendé a una consultora SAP, una agencia Salesforce y una PyME desde una sola plataforma. Sus datos nunca se cruzan.",
      },
    ],
  },
  forWho: {
    eyebrow: "Para quién es",
    title: "Diseñado para equipos con soporte especializado",
    items: [
      {
        industry: "Consultoras de IT y MSPs",
        scenario: "Brindás soporte a múltiples clientes — cada uno con sus propios SLAs, tecnologías y reglas de escalamiento.",
        value: "Una plataforma, espacios aislados por cliente. Configurás la IA una vez por cliente y enruta correctamente para todos — sin que tu equipo tenga que cambiar de contexto.",
        example: "\"Servidor caído — Cliente ABC\"  →  técnico correcto para ese cliente en 7 segundos",
      },
      {
        industry: "Equipos SAP y Salesforce",
        scenario: "Tu equipo maneja sistemas especializados. Un dump ABAP en producción no tiene la misma urgencia que una consulta sobre cómo ejecutar un reporte.",
        value: "Describí las reglas de tu dominio en lenguaje natural. La IA las aplica de forma consistente — a las 3 AM, durante picos de carga, incluso cuando tu staff senior no está disponible.",
        example: "\"Short dump en VL02N — producción\"  →  prioridad 9, especialista ABAP asignado",
      },
      {
        industry: "PyMEs con Equipos de IT",
        scenario: "3 técnicos de IT, 200 empleados. Cuando la laptop del CEO se rompe y 30 usuarios se quedan sin internet al mismo tiempo, alguien tiene que priorizar.",
        value: "La IA decide por impacto, no por quién envió el ticket primero. La persona correcta recibe el problema correcto — automáticamente, siempre.",
        example: "\"Sin internet — oficina principal\"  →  prioridad 9, técnico de red asignado",
      },
    ],
  },
  betaForm: {
    eyebrow: "Acceso Anticipado",
    title: "Probalo gratis con tu equipo",
    subtitle: "Estamos incorporando un grupo selecto de equipos durante la beta. Tenés acceso directo a los fundadores y asegurás precio de early adopter cuando lancemos.",
    benefits: [
      "Gratis durante todo el período beta",
      "Contacto directo con los fundadores",
      "Tu feedback define el roadmap",
      "Precio de early adopter al lanzar",
    ],
    form: {
      name: "Nombre completo",
      namePlaceholder: "Juan García",
      email: "Email de trabajo",
      emailPlaceholder: "juan@empresa.com",
      company: "Empresa (opcional)",
      companyPlaceholder: "Acme S.A.",
      message: "¿Cuál es tu mayor desafío de soporte? (opcional)",
      messagePlaceholder: "Manejamos más de 50 tickets al día de forma manual y...",
      submit: "Solicitar Acceso Anticipado",
      submitting: "Enviando...",
      success: "Estás en la lista. Te contactaremos en las próximas 48 horas.",
      error: "Algo salió mal. Por favor intentá de nuevo.",
    },
  },
  footer: {
    tagline: "El técnico correcto, siempre.",
    rights: "© 2026 HelpDesk AI. Todos los derechos reservados.",
  },
};

export default es;
