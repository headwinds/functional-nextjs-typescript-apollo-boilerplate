import * as React from 'react'
//import mabel from "./mabel.jpg";
export default class Barn extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    console.log('Barn props: ', props)
  }

  componentDidMount() {
    console.log('Barn componentDidMount')
    this.draw()
  }

  private draw() {
    console.log('Barn draw')

    const self = this
    const url = '/static/icon.svg'
    // remote works! but not local... ;(
    //const url = 'https://cdn.zeit.co/logos/black-bg-logo.svg';

    //import * as Snap from "snapsvg";
    //const Snap = require( "snapsvg" );

    console.log('Barn draw Snap', window)

    const Snap = window.Snap

    Snap.load(url, function(loadedFragment) {
      const wol = Snap('#owl')

      console.log('LoadingAnimation draw snap: ', wol)

      // const group = wol.group();

      wol.append(loadedFragment)
      /*
            wol.animate({ transform: 's0.7', opacity: 0  }, 0 );

            setTimeout( () => {
                wol.animate({ transform: 't0,15,s3', opacity: 1  }, 3000, mina.elastic );

            }, 0);

            setTimeout( () => {
                //group.select("#spotFill").attr({'fill': '#E24B70'});
                wol.animate({ transform: 't-10,7,s0.3' }, 3000,  mina.bounce  );
            }, 1000);
            */
    })
  }

  public render() {
    return (
      <div>
        <div id="owl">
          <img width="300" src="/static/icon.svg" />
          <img width="300" src="/static/download.jpeg" />
          <img width="300" src="/static/mabel.jpg" />
          <img width="300" src="/static/owl.png" />
          <img width="300" src="/static/pig.png" />
        </div>
      </div>
    )
  }
}
