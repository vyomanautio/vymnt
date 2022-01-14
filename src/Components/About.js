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
            <div class="col-md-2 d-md-block d-none"></div>
            <div class="col-md-8 col-12">
              <h5 className="text-white text-decoration"><strong>{t('app.about.001')}</strong></h5>
            </div>
            <div class="col-md-2 d-md-block d-none"></div>
          </div>
          <div className="row mt-3 mb-2">
            <div class="col-md-2"></div>
            <div class="col-md-8 ">
              <h5 className="text-white text-decoration"><strong>{t('app.about.002')}</strong></h5>
            </div>
            <div class="col-md-2"></div>
          </div>
          <div className="row mt-3 mb-2">
            <div class="col-md-2"></div>
            <div class="col-md-8 ">
              <h5 className="text-white text-decoration"><strong>{t('app.about.003')}</strong></h5>
            </div>
            <div class="col-md-2"></div>
          </div>
          <div className="row mt-3">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <h5 className="text-white text-decoration"><strong>{t('app.about.004')}</strong></h5>
            </div>
            <div class="col-md-2"></div>
          </div>
          <div className="row mt-3">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <h5 className="text-white text-decoration"><strong>{t('app.about.004')}</strong></h5>
            </div>
            <div class="col-md-2"></div>
          </div>
          <div className="row mt-5 mb-5">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <div>
                <img src={'/images/isro.png'} alt="ISRO" class="isro-img-custom"/>
              </div>
              <div className="text-center">
                <h1 className="text-danger-custom cursor-custom">START MINTING NOW</h1>
              </div>
              <div className="text-center">
                <img src={'/images/1.png'} alt="ISRO" class="minting-img-custom cursor-custom"/>
                <img src={'/images/2.png'} alt="ISRO" class="minting-img-custom cursor-custom mx-2"/>
                <img src={'/images/3.png'} alt="ISRO" class="minting-img-custom cursor-custom"/>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
          <div className="row">
            <div class="col-md-2">
              
            </div>
            <div class="col-md-8 col-12 ms-5">
              <div className="row">
                <div class="col-md-6 col-12">
                  <table className="text-white text-center">
                      <tr className="border border-white">
                        <th>
                          <h4 className="text-white p-4">
                            SUPER SPACE GEEK CARD
                          </h4>
                        </th>
                      </tr>
                      <tr className="border">
                        <td>
                          <img src={'/images/CARD.png'} alt="ISRO" class="ml-5"/>
                        </td>
                      </tr>
                      <tr className="border border-white">
                        <td className="p-4 custom-product-width">
                          {t('app.watch.card')}<br/><br/>
                          {t('app.watch.card2')}
                        </td>
                      </tr>
                  </table>
                </div>
                <div class="col-md-6 col-12">
                  <table className="text-white text-center">
                      <tr className="border border-white">
                        <th>
                          <h4 className="text-white p-4">
                            ISRO OFFICIAL WRISTWATCH
                          </h4>
                        </th>
                      </tr>
                      <tr className="border border-white">
                        <td>
                          <img src={'/images/watch.png'} alt="ISRO" class="ml-5"/>
                        </td>
                      </tr>
                      <tr className="border border-white">
                        <td className="p-4 custom-product-width">
                          {t('app.watch.discription')}
                        </td>
                      </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default About;
