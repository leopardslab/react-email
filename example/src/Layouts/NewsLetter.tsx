import { Email, Typography, Section, Column, Image, Button, Divider } from "@leopardslab/react-email";

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

            <Divider />
            
            <Typography variant="body1" align="center">
                Tech giant Google has urged software and app developers to build more apps for its newly-launched Pixel Watch based on Wear operating system (OS).In its Android Developers blog, the company highlighted apps for Pixel Watch. "It's an especially great time to prepare your app so it looks great on all of the new watches that consumers will get their hands on", according to the Android developer team.
            </Typography>
            <Button varient="primary" 
                harf="https://economictimes.indiatimes.com/magazines/panache/google-does-an-apple-tech-giant-urges-developers-to-build-more-apps-for-pixel-watch/articleshow/94786200.cms?from=mdr">
                Click here to read more
            </Button>

            <Typography variant="h4" align="center">
                Other Related News
            </Typography>
            <Section>
                <Column>
                    <Image>
                        <img src="..img/2.jpeg" />
                    </Image>
                </Column>
                <Column>
                    <Typography variant="h4" align="right">
                        5G ROLLOUT IN INDIA: WHICH INDIAN CITIES WILL GET 5G SERVICES IN THE FIRST PHASE.
                    </Typography>
                    <Typography classes={{root: {margin: "10px 0 20px 0"}}} > 
                        5G services in India are soon going to be operational. As per recent reports, the Government of India would officially launch a number of 5G services at the inauguration of the India Mobile Congress, or IMC, on September 29, 2022.5G services in India will be rolled out in a phased manner. In the first phase, only 13 selected cities would get speed 5G internet services from either Airtel, Jio, or both. 
                    </Typography>
                    <Button varient="primary" 
                        harf="https://economictimes.indiatimes.com/industry/telecom/telecom-news/pm-narendra-modi-launches-first-phase-of-5g-services-in-13-cities/articleshow/94576073.cms">
                        Read More
                    </Button>
                </Column>
            </Section>

            <Section>
                <Column>
                    <Typography variant="h4" align="left">
                        Elon Musk Has A 'super App' Plan For Twitter. It's Super Vague.
                    </Typography>
                    <Typography classes={{root: {margin: "10px 0 20px 0"}}} > 
                        Elon Musk has a penchant for the letter “X.” He calls his son with the singer Grimes, whose actual name is a collection of letters and symbols, “X.” He named the company he created to buy Twitter "X Holdings." His rocket company is, naturally, SpaceX.Now he also apparently intends to morph Twitter into an “everything app” he calls X.For months, the Tesla and SpaceX CEO has expressed interest in creating his own version of China's WeChat — a “super app” that does video chats, messaging, streaming and payments — for the rest of the world.. 
                    </Typography>
                    <Button varient="primary" 
                        harf="https://cio.economictimes.indiatimes.com/news/enterprise-services-and-applications/musk-has-a-super-app-plan-for-twitter-its-super-vague/94906285#:~:text=plan%20for%20Twitter.-,It's%20super%20vague,the%20rest%20of%20the%20world.">
                        Read More
                    </Button>
                </Column>

                <Column>
                    <Image>
                        <img src="..img/3.jpeg" />
                    </Image>
                </Column>
            </Section>
        </Email>
    );
};