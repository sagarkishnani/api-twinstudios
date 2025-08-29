export class CreateInvoiceDto {
  empresa: string;
  fecha: string;
  moneda: 'PEN' | 'USD';
  esIngles: string;
  tipo_cotizacion:
    | 'SINGLE_PAGE'
    | 'LANDING_PAGE'
    | 'ECOMMERCE_WHATSAPP'
    | 'ECOMMERCE';
  tipo_desarrollo: 'WORDPRESS' | 'CODIGO';
  descuento?: boolean;
  porcentaje_descuento?: 0.05 | 0.1 | 0.15 | 0.2 | 0.25 | 0.3
  cliente: {
    nombre: string;
    ciudad: string;
    email: string;
  };
  opcionales?: {
    caracteristicas: string[];
    precios: number[];
  };
}
