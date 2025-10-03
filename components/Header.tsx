"use client"

import {MyLinks} from "@/components/nav/components/MyLinks";
import {AiFillFilePdf} from "react-icons/ai";

export const Header = () => {
    return (
        <header className="heading">

            {/* <div className={styles.headingButtons}> */}

            <button onClick={() => window.open("/efeosa_aizesogie_developer_cv_5.pdf")} className="outlineButton">
                <AiFillFilePdf size="2.4rem" />
                My resume
            </button>
            {/* </div> */}

            <MyLinks />
        </header>
    );
};
