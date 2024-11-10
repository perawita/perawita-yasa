declare module "html-pdf-node" {
  export function generatePdf(
    options: { content: string },
    pdfOptions: { format: string; printBackground: boolean }
  ): Promise<Buffer>;
}
