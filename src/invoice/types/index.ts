export type TipoCotizacion =
  | 'SINGLE_PAGE'
  | 'LANDING_PAGE'
  | 'ECOMMERCE_WHATSAPP'
  | 'ECOMMERCE';

export type TipoDesarrollo = 'WORDPRESS' | 'CODIGO';


export type PricingItem = {
  precio: number;
  caracteristicas: string[];
}