import type { Messages } from "./en";

const es: Messages = {
  nav: {
    logo: "HelpDesk AI",
    cta: "Acceso Anticipado",
  },
  hero: {
    badge: "Con IA · Ahora en Acceso Anticipado",
    headline: "Cada ticket de soporte llega al técnico correcto",
    headlineAccent: "en segundos.",
    sub: "HelpDesk AI lee cada ticket entrante, identifica el problema y asigna al técnico más calificado disponible de forma automática — sin triaje manual, sin suposiciones. Cada ticket se sigue en su ciclo de vida completo y, si queda 48 horas sin actividad, tu equipo recibe una alerta automática.",
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
    sub: "Sin enrutamiento automático, cada ticket necesita que alguien lo lea, decida quién debe atenderlo y lo asigne de forma manual. Ese proceso lleva tiempo — tiempo durante el cual nada se está resolviendo, y los tickets silenciosamente se acumulan sin que nadie los vea.",
    before: {
      label: "Sin HelpDesk AI",
      steps: [
        "Alguien lee el ticket e intenta interpretar el problema",
        "Trata de recordar quién maneja ese sistema o tecnología",
        "Chequea Slack para ver quién está disponible en este momento",
        "Asigna manualmente — espera confirmación",
        "Una semana después el cliente pregunta. El ticket nunca fue iniciado.",
      ],
      stat: "~14 min",
      statLabel: "tiempo promedio hasta la primera asignación — si es que se asigna",
    },
    after: {
      label: "Con HelpDesk AI",
      steps: [
        "Ticket recibido — el cliente puede adjuntar capturas o logs",
        "La IA identifica categoría, prioridad y skills requeridos",
        "Se selecciona automáticamente al técnico más calificado disponible",
        "Técnico notificado en tiempo real con contexto completo",
        "Si queda 48hs sin actividad, se envía alerta automática de escalamiento",
      ],
      stat: "< 10 seg",
      statLabel: "tiempo promedio de asignación, en cada ticket, siempre",
    },
  },
  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "Del ticket a la asignación en segundos",
    steps: [
      {
        number: "01",
        title: "El cliente crea un ticket",
        desc: "A través de tu portal con tu marca. Describe el problema en sus propias palabras y puede adjuntar capturas de pantalla, logs o documentos. Sin categorías para elegir, sin estructura de formulario.",
      },
      {
        number: "02",
        title: "La IA lee, razona y asigna",
        desc: "El agente analiza el contenido, determina categoría, prioridad y complejidad, y elige al técnico cuyos skills mejor se adaptan al problema. Explica cada decisión en lenguaje natural.",
      },
      {
        number: "03",
        title: "El técnico es notificado al instante",
        desc: "El técnico asignado recibe una alerta en tiempo real con los detalles del ticket, los archivos adjuntos y el razonamiento de la IA. Sin colas que revisar — la resolución comienza de inmediato.",
      },
      {
        number: "04",
        title: "El ticket se sigue hasta la resolución",
        desc: "El ticket recorre un ciclo de vida real: Asignado → En Progreso → Esperando Usuario → Resuelto. Si queda detenido 48 horas en cualquier etapa, tu equipo recibe una alerta automática. Ningún ticket queda olvidado.",
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
    title: "No es solo enrutamiento. Asignación inteligente — de punta a punta.",
    items: [
      {
        number: "01",
        title: "Asignación por skills",
        desc: "Cada técnico tiene un perfil de skills. La IA los compara con la naturaleza de cada problema — no solo con quién está disponible. La prioridad y la carga de trabajo actual calibran la decisión final.",
        example: "Ana tiene PostgreSQL y backend → recibe el error de base de datos. Pedro tiene networking → recibe el problema de VPN.",
      },
      {
        number: "02",
        title: "Razonamiento transparente",
        desc: "Cada asignación incluye una explicación en lenguaje natural de por qué se eligió ese técnico. Sin cajas negras, sin sorpresas. Tu equipo puede revisar cada decisión.",
        example: "\"Asignado a Ana M.: skill PostgreSQL, complejidad 8 compatible con nivel 2, menor carga — 2 tickets activos vs 5 del siguiente candidato.\"",
      },
      {
        number: "03",
        title: "Ciclo de vida completo",
        desc: "Los tickets recorren un flujo real: Asignado → En Progreso → Esperando Usuario → Resuelto. Si un ticket queda detenido 48 horas en cualquier etapa, tu equipo recibe una alerta automática por email.",
        example: "Técnico hace clic en 'Esperando usuario' → cliente es notificado. Cliente hace clic en 'Ya realicé la acción' → ticket vuelve a En Progreso automáticamente.",
      },
      {
        number: "04",
        title: "Adjuntos de archivos",
        desc: "Los clientes adjuntan capturas de pantalla, logs y documentos al crear un ticket. El técnico ve el contexto completo sin tener que pedirlo — el diagnóstico empieza más rápido, menos idas y vueltas.",
        example: "Cliente adjunta una captura del error y un archivo de log → el técnico lo ve al abrir el ticket, sin preguntas adicionales.",
      },
      {
        number: "05",
        title: "Configurable por cliente",
        desc: "Escribí reglas en lenguaje natural que se aplican con máxima prioridad para un cliente específico. Cada empresa que atiendas puede tener su propia lógica de enrutamiento, terminología y criterios de escalamiento.",
        example: "\"Dumps ABAP en producción = prioridad 10. Problemas de facturación siempre escalan a Nivel 2.\"",
      },
      {
        number: "06",
        title: "Aislado por empresa",
        desc: "Cada cliente tiene su propio espacio de trabajo completamente aislado. Técnicos, tickets, reglas y configuración de IA nunca se mezclan — diseñado desde cero para consultoras y MSPs.",
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
        scenario: "Brindás soporte a múltiples clientes — cada uno con sus propios SLAs, tecnologías y reglas de escalamiento. El cambio de contexto constante mata la eficiencia del equipo.",
        value: "Una plataforma, espacios aislados por cliente. Configurás la IA una vez por cliente y enruta correctamente para todos — técnico correcto, prioridad correcta, siempre.",
        example: "\"Servidor caído — Cliente ABC\"  →  técnico correcto para ese cliente en menos de 7 segundos",
      },
      {
        industry: "Equipos SAP y Salesforce",
        scenario: "Tu equipo maneja sistemas complejos y especializados. Un dump ABAP en producción no tiene la misma urgencia que una consulta sobre cómo ejecutar un reporte — pero sin IA, ambos van a la misma cola.",
        value: "Describí las reglas de tu dominio en lenguaje natural una sola vez. La IA las aplica de forma consistente — a las 3 AM, durante picos de carga, incluso cuando tu staff senior no está disponible.",
        example: "\"Short dump en VL02N — producción\"  →  prioridad 9, especialista ABAP asignado",
      },
      {
        industry: "PyMEs con Equipos de IT",
        scenario: "3 técnicos de IT, 200 empleados. Cuando la laptop del CEO se rompe y 30 usuarios se quedan sin internet al mismo tiempo, alguien tiene que priorizar — y rápido.",
        value: "La IA prioriza por impacto real, no por quién envió el ticket primero. La persona correcta recibe el problema correcto automáticamente, y las alertas de 48hs aseguran que ningún ticket quede enterrado.",
        example: "\"Sin internet — oficina principal\"  →  prioridad 9, técnico de red asignado — antes de que alguien lo pida",
      },
    ],
  },
  betaForm: {
    eyebrow: "Acceso Anticipado",
    title: "Probalo gratis con tu equipo",
    subtitle: "Estamos incorporando un grupo selecto de equipos durante la beta. Tenés acceso directo a los fundadores, tu feedback define el producto y asegurás precio de early adopter cuando lancemos.",
    benefits: [
      "Gratis durante todo el período beta — sin tarjeta de crédito",
      "Acceso completo a todas las features: IA, ciclo de vida, adjuntos",
      "Contacto directo con los fundadores — tu feedback define el roadmap",
      "Precio de early adopter garantizado al lanzar",
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
