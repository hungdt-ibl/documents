import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html>
        <Head>
          <link href='/static/css/bootstrap.css' rel='stylesheet' type='text/css' />
          <link href='/static/css/zoomslider.css' rel='stylesheet' type='text/css' />
          <link href='/static/css/style6.css' rel='stylesheet' type='text/css' />
          <link href='/static/css/style.css' rel='stylesheet' type='text/css' />
          <link href='/static/css/fontawesome-all.css' rel='stylesheet' />
          <link href='//fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700' rel='stylesheet' />
          <link href='//fonts.googleapis.com/css?family=Quicksand:300,400,500,700' rel='stylesheet' />
        </Head>
        <body className='custom_class'>
          <Main />
          <NextScript />
          <script src='/static/js/jquery-1.11.1.min.js' />
          <script src='/static/js/modernizr-2.6.2.min.js' />
          <script src='/static/js/jquery.zoomslider.min.js' />
          <script src='/static/js/classie-search.js' />
          <script src='/static/js/demo1-search.js' />
          <script src='/static/js/jquery.waypoints.min.js' />
          <script src='/static/js/jquery.countup.js' />
          <script src='/static/js/bootstrap.js' />
          <script src='/static/js/move-top.js' />
          <script src='/static/js/easing.js' />
        </body>
      </Html>
    )
  }
}

export default MyDocument
