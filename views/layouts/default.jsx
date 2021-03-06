var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                </head>

                <body>
                    {this.props.children}
                </body>
            </html>
    );
  }
}

module.exports = DefaultLayout;