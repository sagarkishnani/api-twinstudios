import { CreateInvoiceDto } from 'src/invoice/dto/create-invoice.dto';
import { TipoCotizacion, TipoDesarrollo } from 'src/invoice/types';
import { INVOICE, pricingDictionary } from '../constants';

export function getTotalOpcionales(data: CreateInvoiceDto) {
  let multiplicador = 1;

  if (!data?.opcionales?.precios) return 0;
  let prices: number[] = data?.opcionales?.precios;

  if (data.descuento) {
    for (let precio of data.opcionales.precios) {
      precio = precio - precio * data.porcentaje_descuento!;
      prices.push(precio);
    }
  }
  if (data.moneda == 'USD') multiplicador / INVOICE.DOLLAR_PRICE;
  return (
    data.opcionales.precios.reduce((acc, val) => acc + val, 0) * multiplicador
  );
}

export function getPrice(
  tipoCotizacion: TipoCotizacion,
  tipoDesarrollo: TipoDesarrollo,
): number {
  return pricingDictionary[tipoCotizacion][tipoDesarrollo].precio;
}

export function getCaracteristicas(
  tipoCotizacion: TipoCotizacion,
  tipoDesarrollo: TipoDesarrollo,
): string[] {
  return pricingDictionary[tipoCotizacion][tipoDesarrollo].caracteristicas;
}

export function calcularPrecio(
  tipoCotizacion:
    | 'SINGLE_PAGE'
    | 'LANDING_PAGE'
    | 'ECOMMERCE_WHATSAPP'
    | 'ECOMMERCE',
  tipoDesarrollo: 'WORDPRESS' | 'CODIGO',
  descuento?,
  porcentaje_descuento?,
) {
  const precio = getPrice(tipoCotizacion, tipoDesarrollo);
  if (descuento) return precio * porcentaje_descuento;
  return precio;
}

export function calcularPrecioOpcional({
  precioBase,
  moneda,
  tipoCambio,
  descuento = false,
  porcentajeDescuento = 0,
}: {
  precioBase: number;
  moneda: 'PEN' | 'USD';
  tipoCambio: number;
  descuento?: boolean;
  porcentajeDescuento?: number;
}): string {
  let precio = moneda === 'PEN' ? precioBase : precioBase / tipoCambio;

  if (descuento) {
    precio = precio - (precio * porcentajeDescuento);
  }

  if (precio < 0) precio = 0;

  const simbolo = moneda === 'PEN' ? 'S/.' : '$';
  return `${simbolo}${precio.toFixed(2)}`;
}
