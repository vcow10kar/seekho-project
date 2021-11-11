import axios from "axios";
import { useState } from "react";

function EmbedPDF() {

    const [link, setLink] = useState("");

    axios({
        method: "get",
        url: "https://www.googleapis.com/drive/v3/files/15dSTdZznkouffW3gzsZJXUvN-ppOdvTL"
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log("Error:", err);
    })

    return (
        <iframe src="https://drive.google.com/file/d/15dSTdZznkouffW3gzsZJXUvN-ppOdvTL/preview" width="400" height="520" allow="autoplay"></iframe>
    )
}

export default EmbedPDF;