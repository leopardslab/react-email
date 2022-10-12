import { Email, Typography, Section, Column, Image, Button } from "@leopardslab/react-email";

export const NewsLetter = () => {
    return (
        <Email>
            <Typography variant="h3" align="center">
                Insta-NewsLetter date 2020-10-10
            </Typography>
            <Image>
                <img src="..img/1.png" />
            </Image>
            <Typography variant="h2" align="center">
            Google urges software developers to build apps for Pixel Watch
            </Typography>
            <Typography variant="body1" align="center">
            Tech giant Google has urged software and app developers to build more apps for its newly-launched Pixel Watch based on Wear operating system (OS).
            </Typography>
            <Button varient="primary" harf="https://content.techgig.com/technology/google-urges-software-developers-to-build-apps-for-pixel-watch/articleshow/94806919.cms">
                Click here to read more
            </Button>

            <Typography variant="h4" align="center">
                Other Related News
            </Typography>
            <Section>
                <Column>
                </Column>
            </Section>
        </Email>
    );
};