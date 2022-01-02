import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-blob bg-repeat-y bg-fix overflow-x-hidden font-rubik text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
