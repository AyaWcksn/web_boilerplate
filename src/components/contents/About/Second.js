import React from "react";
import { Row, Container, Col } from "react-bootstrap";

function Second() {
  return (
    <div className="secondSection">
      <Container>
        <Row>
          <div className="col-md-4 col-md-push-8 col-xs-12">
            <h1 className="aboutTitle">We Do Better</h1>
          </div>
          <div className="col-md-8 col-md-push-4 col-xs-12">
            <Row>
              <b>Web Development</b>
              <p>
                From WordPress to Laravel, we code them all, front to back:
                Corporate Homepages, Intranet Solutions, SaaS Websites and
                Online Shops – for all browsers and devices.
              </p>
            </Row>
            <Row>
              <b>Game Development</b>
              <p>
                We are experts on Unity3D for games or just fun apps, be it in
                2D or 3D, Mulitplayer Online or Single Player based. We work
                closely with top Artists and Game Designers to produce high
                quality and entertaining experiences.
              </p>
            </Row>
            <Row>
              <b>Mobile Development</b>
              <p>
                We cover iOS and Android Apps, native, Web-based or the likes of
                Xamarin. Along with all necessary Server work.
              </p>
            </Row>
            <Row>
              <b>Video Production</b>
              <p>
                Complex 2D and 3D-Animations made in and for AfterEffects, we
                support SMEs in the Film-Business as well as YouTubers who need
                help increasing the visual appeal of their channels.
              </p>
            </Row>
            <Row>
              <b>Maintenance Services</b>
              <p>
                If you are running a successful Online Business or Website and
                need support or leveled service, we are your best choice to make
                sure it keeps running safe.
              </p>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Second;
