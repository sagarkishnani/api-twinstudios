import { PricingItem, TipoCotizacion, TipoDesarrollo } from 'src/invoice/types';

export const INVOICE = {
  NAME: 'Aakash & Sagar Kishnani',
  DEFAULT_PLACE: 'Lima, Perú',
  DEFAULT_EMAIL: 'aakashkishnani67@gmail.com',
  USD: '$',
  PEN: 'S/.',
  DATOS_AAKASH: 'Aakash Kishnani | +51 969721437 | aakashkishnani67@gmail.com',
  DATOS_SAGAR: 'Sagar Kishnani | +51 956727438 | sagarkishnani67@gmail.com',
  DOLLAR_PRICE: 3.5,
};

export const pricingDictionary: Record<
  TipoCotizacion,
  Record<TipoDesarrollo, PricingItem>
> = {
  SINGLE_PAGE: {
    WORDPRESS: {
      precio: 1200,
      caracteristicas: [
        'Página web personalizada con diseño responsivo',
        'Sliders interactivos o video de presentación',
        'Funciones dinámicas (call to action, animaciones)',
        'Formulario de contacto (botón de WhatsApp y envío de correos)',
        'Optimización SEO',
        'Capacitación (datos de SEO, cambio de contenidos y configuraciones generales)',
      ],
    },
    CODIGO: {
      precio: 1600,
      caracteristicas: [
        'Página web personalizada a medida con diseño responsivo',
        'Sliders interactivos o video de presentación',
        'Funciones dinámicas (call to action, animaciones)',
        'Formulario de contacto (botón de WhatsApp y envío de correos)',
        'Optimización SEO',
        'Animaciones personalizadas',
        'Capacitación (datos de SEO, cambio de contenidos y configuraciones generales)',
      ],
    },
  },
  LANDING_PAGE: {
    WORDPRESS: {
      precio: 1800,
      caracteristicas: [
        'Página web personalizada con diseño responsivo y páginas por sección (Nosotros, Servicios, Contacto, etc.)',
        'Sliders interactivos o video de presentación',
        'Funciones dinámicas (call to action, animaciones)',
        'Formulario de contacto (botón de WhatsApp y envío de correos)',
        'Optimización SEO',
        'Capacitación (datos de SEO, cambio de contenidos y configuraciones generales)',
      ],
    },
    CODIGO: {
      precio: 2400,
      caracteristicas: [
        'Página web personalizada a medida con diseño responsivo y páginas por sección (Nosotros, Servicios, Contacto, etc.)',
        'Sliders interactivos o video de presentación',
        'Funciones dinámicas (call to action, animaciones)',
        'Formulario de contacto (botón de WhatsApp y envío de correos)',
        'Integración con APIs (de ser necesario)',
        'Optimización SEO',
        'Capacitación (datos de SEO, cambio de contenidos y configuraciones generales)',
      ],
    },
  },
  ECOMMERCE_WHATSAPP: {
    WORDPRESS: {
      precio: 2400,
      caracteristicas: [
        'E-commerce completo con WooCommerce',
        'Página web personalizada con diseño responsivo y páginas por sección (Nosotros, Servicios, Contacto, etc.)',
        'Sliders interactivos o video de presentación',
        'Funciones dinámicas (call to action, animaciones)',
        'Formulario de contacto (botón de WhatsApp y envío de correos)',
        'Administrador de productos',
        'Carrito de compras y pasarela de pagos con delivery direccionado a WhatsApp',
        'Optimización SEO',
        'Capacitación (datos de SEO, cambio de contenidos y configuraciones generales)',
      ],
    },
    CODIGO: {
      precio: 3000,
      caracteristicas: [
        'Página web personalizada a medida con diseño responsivo y páginas por sección (Nosotros, Servicios, Contacto, etc.)',
        'Sliders interactivos o video de presentación',
        'Funciones dinámicas (call to action, animaciones)',
        'Formulario de contacto (botón de WhatsApp y envío de correos)',
        'Integración con APIs (de ser necesario)',
        'Administrador de productos',
        'Carrito de compras y pasarela de pagos con delivery direccionado a WhatsApp',
        'Optimización SEO',
        'Capacitación (datos de SEO, cambio de contenidos y configuraciones generales)',
      ],
    },
  },
  ECOMMERCE: {
    WORDPRESS: {
      precio: 3200,
      caracteristicas: [
        'E-commerce completo con WooCommerce',
        'Página web personalizada con diseño responsivo y páginas por sección (Nosotros, Servicios, Contacto, etc.)',
        'Sliders interactivos o video de presentación',
        'Funciones dinámicas (call to action, animaciones)',
        'Formulario de contacto (botón de WhatsApp y envío de correos)',
        'Administrador de productos',
        'Carrito de compras y pasarela de pagos con delivery con Culqi, Izipay u otros',
        'Optimización SEO',
        'Capacitación (datos de SEO, cambio de contenidos y configuraciones generales)',
      ],
    },
    CODIGO: {
      precio: 4600,
      caracteristicas: [
        'E-commerce completo con WooCommerce',
        'Página web personalizada a medida con diseño responsivo y páginas por sección (Nosotros, Servicios, Contacto, etc.)',
        'Sliders interactivos o video de presentación',
        'Funciones dinámicas (call to action, animaciones)',
        'Formulario de contacto (botón de WhatsApp y envío de correos)',
        'Integración con APIs (de ser necesario)',
        'Administrador de productos',
        'Carrito de compras y pasarela de pagos con delivery con Culqi, Izipay u otros',
        'Optimización SEO',
        'Capacitación (datos de SEO, cambio de contenidos y configuraciones generales)',
      ],
    },
  },
};
