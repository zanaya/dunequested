import React, { useEffect } from "react";

const TikTokVideo = () => {
    useEffect(() => {
        const src = "https://www.tiktok.com/embed.js";
        let script = document.querySelector(`script[src="${src}"]`);
        let added = false;

        if (!script) {
            script = document.createElement("script");
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
            added = true;
        }

        return () => {
            // only remove the script if this component added it
            if (added && script && script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@dunequested/video/7575094040090201351"
            data-video-id="7575094040090201351"
            style={{ maxWidth: "605px", minWidth: "325px", margin: "0 auto" }}
        >
            <section>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    title="@dunequested"
                    href="https://www.tiktok.com/@dunequested?refer=embed"
                >
                    @dunequested
                </a>

                <a
                    title="#desertadventure"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.tiktok.com/tag/desertadventure?refer=embed"
                >
                    #desertadventure
                </a>

                <a
                    title="#dubaithrills"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.tiktok.com/tag/dubaithrills?refer=embed"
                >
                    #dubaithrills
                </a>

                <a
                    title="#canambuggy"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.tiktok.com/tag/canambuggy?refer=embed"
                >
                    #canambuggy
                </a>

                <a
                    title="#reddunes"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.tiktok.com/tag/reddunes?refer=embed"
                >
                    #reddunes
                </a>

                <a
                    title="#adrenalinerush"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.tiktok.com/tag/adrenalinerush?refer=embed"
                >
                    #adrenalinerush
                </a>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    title="? PASSO FUNK - Lunak"
                    href="https://www.tiktok.com/music/PASSO-FUNK-7484963668170443547?refer=embed"
                >
                    ? PASSO FUNK - Lunak
                </a>
            </section>
        </blockquote>
    );
};

export default TikTokVideo;