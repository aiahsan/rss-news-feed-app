import React from 'react';
import Convert from 'xml-js'
import moment from 'moment';
import LoadingAnimation from '../animation/LoadingAnimation'
import { useMediaQuery } from 'react-responsive'

export default ({ img, subheading, date, description }) => {
    const [feed, setfeed] = React.useState({ title: "", date: "", description: "", image: "" });
    const [feeds, setfeeds] = React.useState([]);

    const [currentIndex, setcurrentIndex] = React.useState(0)
    React.useEffect(() => {
        (async () => {
            setshowAnimation(true);
            if (feeds.length <= 0) {
                var request = new XMLHttpRequest();
                request.onreadystatechange = () => {
                    if (request.readyState == 4 && request.status == 200) {
                        var result2 = Convert.xml2json(request.responseText, { compact: true, spaces: 4 });
                        console.log(JSON.parse(result2).rss.channel.item, "r1");
                        const data = JSON.parse(result2).rss.channel.item.map(x => {
                            return {
                                title: x.title._text,
                                date: moment(x.pubDate._text).format("dddd DD MMM yyyy"),
                                description: x.description._text,
                                image: x["media:thumbnail"]._attributes.url
                            }
                        })
                        setfeeds(data);

                        console.log(data)
                        setshowAnimation(false);


                    }
                }
                request.open("GET", "https://rss.selocon.com/kxdqBUrPBUNG/viralshare.xml", true)
                request.send();
            }
            else {
                setshowAnimation(false);

            }
            setTimeout(() => {
                if (currentIndex + 1 != feeds.length)
                    setcurrentIndex(currentIndex + 1)

                else
                    setcurrentIndex(0)

            }, 10000);
        })();
    })
    const [showAnimation, setshowAnimation] = React.useState(false);

    return <>            {showAnimation ? <LoadingAnimation /> : ""}
        <div>
            <div className="container pl-4 pr-4 col-lg-12 col-md-12 col-sm-12" id="grad1">
                <header>
                    <section>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="icon-main">
                                    <i className="fas fa-map-marker-alt icon"></i>
                                    <h1 className="frst-hdng">Nordhessen</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                </header>

                <section>
                    <div className="row info-sec">
                        <div className={`col-lg-12 col-md-12 col-sm-12 info-selct `}>
                            <div className="info-cntnt">
                                <h2 className="scnd-hdng">{feeds[currentIndex] && feeds[currentIndex].date ? feeds[currentIndex].date : ""}</h2>
                                <img src={feeds[currentIndex] && feeds[currentIndex].image ? feeds[currentIndex].image : ""} className="image" />
                                <h2 className="thrd-hdng">{feeds[currentIndex] && feeds[currentIndex].title ? feeds[currentIndex].title : ""}</h2>
                                <p className="frst-prgrph">{feeds[currentIndex] && feeds[currentIndex].description ? feeds[currentIndex].description : ""}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <section>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 footer">
                                <h2 className="lst-hdng">dailyme</h2>
                                <p className="lst-prgrph">Powered by HOTSPLOTS</p>
                            </div>
                        </div>
                    </section>
                </footer>
            </div>
        </div>
    </>
}