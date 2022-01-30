import { Fragment } from 'react';
import classes from './Main.module.css'

const Main = () => {
    return (
        <Fragment>
            <div className={classes.upper}>
                <div>
                    <h3>NIEUWBOUW</h3>
                    <h4>Binnenkort in de verkorp</h4>
                    <p>Cras vulputate risus sit amet euismod rhoncus. Nunc ullamcorper elementum velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus non maximus elit. Nam vitae quam et lacus hendrerit volutpat. Curabitur id tortor purus. Nulla ex magna, accumsan non ipsum vitae, sollicitudin finibus ex</p>
                    <a href='/'>Bikjek dit project</a>
                </div>
                <div><img src="images/vsn3.jpg" alt="upward 3" width="721" height="480" /></div>
            </div>
            <div className={classes.lower}>
                <h2>Actueel</h2>
                <div className={classes.items}>
                    <div className={classes.ind}><img src="images/vsn1.jpg" alt="upward 1" width="518" height="291" /><p className={classes.dts}>03-02-2021</p><h3>Nam quis placerat libero, non feugiat sapien.</h3><p>Suspendisse ullamcorper lacus dolor, nec ultrices ligula pellentesque id. Ut interdum mauris et risus viverra, a egestas sem dignissim. Donec lacinia sapien quis velit congue varius. Nullam gravida nulla interdum felis venenatis, porta varius dui suscipit.</p></div>
                    <div className={classes.ind}><img src="images/vsn2.jpg" alt="upward 2" width="514" height="289" /><p className={classes.dts}>15-02-2021</p><h3>Cras vulputate risus sit amet</h3><p>Ut in augue sit amet ex placerat pulvinar in nec odio. In ut luctus erat. Nullam nulla velit, aliquam eu laoreet a, ultricies ut sapien. Sed eget fermentum diam, et volutpat magna.</p></div>
                    <div className={classes.ind}><img src="images/vsn3.jpg" alt="upward 3" width="514" height="306" /><p className={classes.dts}>20-02-2021</p><h3>Fusce pulvinar augue facilisis</h3><p> Fusce sollicitudin ipsum tortor, at condimentum mauris ultricies a. Fusce venenatis justo ultrices porta faucibus. Aliquam tempus feugiat rhoncus.</p></div>
                </div>
                <div><button>Meer nieuwsberichten</button></div>
            </div>
        </Fragment>
    )
}

export default Main;