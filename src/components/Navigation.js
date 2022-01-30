import { Link } from 'react-router-dom';

import { FaSearch, FaHandHoldingUsd, FaTools, FaHouseUser, FaPeopleCarry, FaEnvelopeOpen } from "react-icons/fa";
import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={classes.top} >
            <header className={classes.header}>
                <FaEnvelopeOpen className={classes.fao} />
                <div className={classes.logo}>woonplezier</div>

                <nav>
                    <ul>
                        <li>Ik huur</li>
                        <li>Ik zoek</li>
                        <li>Projecten</li>
                        <li>Contact</li>
                        <li><div className={classes.dummy}></div></li>
                        <li><input
                            type="text"
                            id="header-search"
                            placeholder="Wat zoekt u..."
                            name="search"

                        />
                            <FaSearch className={classes.srch} />
                        </li>
                        <li><button className={classes.rgt}>Inloggen</button></li>
                    </ul>

                </nav>
            </header>
            <div className={classes.modal}>
                <div className={classes.para}><p>Donec lacinia sapien quis dignissim pharetra?</p></div>

                <div className={classes.dzn}>
                    <div><div className={classes.dznItm}><FaHandHoldingUsd /></div><div className={classes.dznMsg}>Aliquam dignissim</div></div>
                    <div><div className={classes.dznItm}><FaTools /></div><div className={classes.dznMsg}>Proin dignissim</div></div>
                    <div><div className={classes.dznItm}><FaHouseUser /></div><div className={classes.dznMsg}>Etiam fermentum</div></div>
                    <div><div className={classes.dznItm}><FaPeopleCarry /></div><div className={classes.dznMsg}>Phasellus pharetra</div></div>
                </div>
            </div>

        </div>
    )

}

export default Navigation