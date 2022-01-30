import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={classes.main}>
            <div className={classes.left}>
                <div className={classes.topic}>
                    <h2>Vestibulum consectetur</h2>
                    <h2>Curabitur dapibus elementum</h2>
                    <h2>Duis accumsan nulla a ante</h2>
                </div>
                <div className={classes.innerLeft}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus elementum libero vel tincidunt. Fusce viverra ultricies ipsum, sit amet fringilla dolor mollis a. Quisque et venenatis enim. Vestibulum consectetur dui dui, eu aliquam erat consequat vitae</p>
                    <a href='/'>Nam ut mauris eu</a>
                </div>
            </div>
            <div className={classes.right}>
                <h2>Contact</h2>
                <ul>
                    <li><p className={classes.bld}>Bezoekadres:</p><p>Straatnaam 00</p><p>0000 XX Plaatsnaam</p></li>
                    <li><p className={classes.bld}>Openingstijden:</p><p>Maandag t/m vrijdag</p><p>van 9.00 tot 17.00 uur</p></li>
                    <li><p className={classes.bld}>Telefoon:</p><p>000 - 000 00 00</p></li>
                    <li><p className={classes.bld}>Email:</p><p>info@woonplezier.nu</p></li>
                </ul>
            </div>
        </div>
    )

}
export default Footer;