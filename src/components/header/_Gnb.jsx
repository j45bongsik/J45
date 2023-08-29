import React, { useState } from "react";
import { GnbStyle } from "../../styles/Gnb";
import { GNB_LIST } from "../../utils/commom"; 
import { Link } from 'react-router-dom'

const Gnb = ((props) => {

    const [gnbList] = GNB_LIST();

    return (
        <GnbStyle.GnbArea>
            <GnbStyle.GnbList>
                {
                    gnbList.map(({link, name, id }, index) => {
                        return (
                            <GnbStyle.GnbItem key={id} >
                                <Link to={link}>{name}</Link>
                                {/* <a href={link} alt={name}>{name}</a> */}
                            </GnbStyle.GnbItem>
                        )
                    })
                }
            </GnbStyle.GnbList>
        </GnbStyle.GnbArea>
    )
})

export default Gnb;
