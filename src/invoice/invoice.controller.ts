import { Controller, Post, Res, Body } from '@nestjs/common';
import type { Response } from 'express';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  async createInvoice(@Body() body: CreateInvoiceDto, @Res() res: Response) {
    const pdfBuffer = await this.invoiceService.generateInvoice(body);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=invoice.pdf',
      'Content-Length': pdfBuffer.length,
    });

    res.end(pdfBuffer);
  }
}
