import React, { Component } from "react";
import Fade from "react-reveal";
import { useTranslation } from "react-i18next";
import { Button, Container, Row } from 'react-bootstrap';

function About(props) {
  const { t } = useTranslation();
  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="container">
          <div className="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 text-center">
              <h4 className="text-white text-decoration">{t('app.about.001')}</h4>
            </div>
            <div class="col-md-2"></div>
          </div>
          <div className="row mt-5 mb-2">
            <div class="col-md-2"></div>
            <div class="col-md-8 text-center">
              <h4 className="text-white text-decoration">{t('app.about.002')}</h4>
            </div>
            <div class="col-md-2"></div>
          </div>
          <div className="row mt-5 mb-2">
            <div class="col-md-2"></div>
            <div class="col-md-8 text-center">
              <h4 className="text-white text-decoration">{t('app.about.003')}</h4>
            </div>
            <div class="col-md-2"></div>
          </div>
          <div className="row mt-5 mb-2">
            <div class="col-md-2"></div>
            <div class="col-md-8 text-center">
              <h4 className="text-white text-decoration">{t('app.about.004')}</h4>
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default About;
