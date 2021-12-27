import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='pt-BR'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <meta name='title' content='ViaMaq Tratores' />
          <meta
            name='description'
            content='Empresa especializada na comercialização de máquinas pesadas, novas e usadas, peças e serviços.'
          />
          <meta property='og:type' content='website' />
          <meta
            property='og:url'
            content='https://www.viamaqtratores.com.br/'
          />
          <meta property='og:title' content='ViaMaq Tratores' />
          <meta
            property='og:description'
            content='Empresa especializada na comercialização de máquinas pesadas, novas e usadas, peças e serviços.'
          />
          <meta property='og:image' content='/logo.svg' />
          <meta property='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:url'
            content='https://www.viamaqtratores.com.br/'
          />
          <meta property='twitter:title' content='ViaMaq Tratores' />
          <meta
            property='twitter:description'
            content='Empresa especializada na comercialização de máquinas pesadas, novas e usadas, peças e serviços.'
          />
          <meta property='twitter:image' content='/logo.svg'></meta>
          <link
            href='https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <link rel='shortcut icon' href='/favicon.svg' type='image/x-icon' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
